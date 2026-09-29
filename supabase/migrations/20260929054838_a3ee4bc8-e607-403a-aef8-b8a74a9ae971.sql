CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) TO service_role;

ALTER TABLE public.consultation_leads
  ADD COLUMN status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'won', 'lost', 'spam')),
  ADD COLUMN manual_priority TEXT
    CHECK (manual_priority IS NULL OR manual_priority IN ('high', 'medium', 'low')),
  ADD COLUMN ai_priority TEXT
    CHECK (ai_priority IS NULL OR ai_priority IN ('high', 'medium', 'low')),
  ADD COLUMN ai_summary TEXT,
  ADD COLUMN ai_rationale TEXT,
  ADD COLUMN ai_model TEXT,
  ADD COLUMN ai_analyzed_at TIMESTAMP WITH TIME ZONE,
  ADD COLUMN spam_check_passed BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN submission_elapsed_ms INTEGER,
  ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now();

GRANT SELECT, UPDATE ON public.consultation_leads TO authenticated;

DROP POLICY "No public access to consultation leads" ON public.consultation_leads;

CREATE POLICY "Administrators can view consultation leads"
  ON public.consultation_leads
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Administrators can update consultation leads"
  ON public.consultation_leads
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_consultation_leads_updated_at
  BEFORE UPDATE ON public.consultation_leads
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

CREATE INDEX consultation_leads_created_at_idx ON public.consultation_leads (created_at DESC);
CREATE INDEX consultation_leads_status_idx ON public.consultation_leads (status);
CREATE INDEX consultation_leads_priorities_idx ON public.consultation_leads (manual_priority, ai_priority);