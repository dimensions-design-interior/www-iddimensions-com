DROP POLICY "Administrators can view consultation leads" ON public.consultation_leads;
DROP POLICY "Administrators can update consultation leads" ON public.consultation_leads;

CREATE POLICY "Administrators can view consultation leads"
  ON public.consultation_leads
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
        AND user_roles.role = 'admin'
    )
  );

CREATE POLICY "Administrators can update consultation leads"
  ON public.consultation_leads
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
        AND user_roles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM public.user_roles
      WHERE user_roles.user_id = auth.uid()
        AND user_roles.role = 'admin'
    )
  );

REVOKE ALL ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon, authenticated, service_role;
DROP FUNCTION public.has_role(UUID, public.app_role);