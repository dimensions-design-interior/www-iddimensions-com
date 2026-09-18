# Lucknow local search and Google Business setup

## Website updates
- Strengthen the homepage and service-page wording for interior design, modular kitchens, and villa interiors in Lucknow without keyword stuffing.
- Expand the business information shown to search engines with the consultation URL, exact address, coordinates, opening hours, phone, service area, and core services.
- Improve page titles, descriptions, headings, image descriptions, and internal links around the three target searches.
- Verify the consultation form link, local business details, and key pages in desktop and mobile views.

## Google Business Profile
- Use the existing Google listing rather than create a duplicate.
- Once the owner has claimed and verified it, set the website to `https://www.iddimensions.com/` and the appointment link to `https://www.iddimensions.com/#contact`.
- Recheck the public listing’s name, address, phone, website, coordinates, hours, and reviews after verification.

## Google Maps key
- Create a user-owned browser key for the custom domain with Maps JavaScript API enabled.
- Allow both `https://iddimensions.com/*` and `https://*.iddimensions.com/*` as website referrers.
- Connect the new key through the Google Maps connection flow after it is created and restricted.

## Technical details
- Preserve the existing review integration and Google place identifier.
- Keep Google Places and review requests on the server; expose only the referrer-restricted browser key for map rendering.
- Do not add a second Google Business listing or expose a private Google key in site code.
