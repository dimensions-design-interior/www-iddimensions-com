CREATE TABLE public.site_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT,
  project_type TEXT NOT NULL,
  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT ALL ON public.site_reviews TO service_role;
GRANT SELECT ON public.site_reviews TO anon;
GRANT SELECT ON public.site_reviews TO authenticated;

ALTER TABLE public.site_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Approved reviews are publicly readable"
  ON public.site_reviews FOR SELECT TO anon, authenticated
  USING (status = 'approved');

CREATE INDEX site_reviews_status_created_idx ON public.site_reviews (status, created_at DESC);
CREATE INDEX site_reviews_email_created_idx ON public.site_reviews (email, created_at DESC);