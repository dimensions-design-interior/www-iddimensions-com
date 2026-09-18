DROP FUNCTION IF EXISTS public.get_public_site_reviews(integer);

CREATE POLICY "No public direct review access"
  ON public.site_reviews
  FOR SELECT
  TO anon, authenticated
  USING (false);