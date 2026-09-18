DROP VIEW IF EXISTS public.public_site_reviews;

CREATE OR REPLACE FUNCTION public.get_public_site_reviews(_limit integer DEFAULT 12)
RETURNS TABLE (
  id uuid,
  name text,
  location text,
  project_type text,
  rating smallint,
  review text,
  created_at timestamptz
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT sr.id, sr.name, sr.location, sr.project_type, sr.rating, sr.review, sr.created_at
  FROM public.site_reviews AS sr
  WHERE sr.status = 'approved'
  ORDER BY sr.created_at DESC
  LIMIT LEAST(GREATEST(COALESCE(_limit, 12), 1), 12)
$$;

REVOKE ALL ON FUNCTION public.get_public_site_reviews(integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_public_site_reviews(integer) TO anon, authenticated, service_role;