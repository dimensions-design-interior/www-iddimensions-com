REVOKE SELECT ON public.site_reviews FROM anon, authenticated;
DROP POLICY IF EXISTS "Approved reviews are publicly readable" ON public.site_reviews;

CREATE VIEW public.public_site_reviews
WITH (security_barrier = true)
AS
SELECT id, name, location, project_type, rating, review, created_at
FROM public.site_reviews
WHERE status = 'approved';

GRANT SELECT ON public.public_site_reviews TO anon, authenticated;
GRANT ALL ON public.public_site_reviews TO service_role;