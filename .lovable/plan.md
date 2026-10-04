# Refine contact details and add AI consultation guidance

## Branding and contact details
- Standardize visible branding, page metadata, email copy, integrations, and structured data to **DIMENSIONS DESIGNS & INTERIOR**.
- Replace the displayed business address with: **Skylark Plaza, Ground Floor Shop No. 09, near Lulu Mall Road, Golf City, Lucknow, UP 226030**.
- Keep the canonical Google Business CID and Place ID links centralized so the verified-business and review buttons always open the requested pages in new tabs.

## Maps and directions
- Add a responsive interactive studio map to the homepage Contact section using the exact Golf City coordinates.
- Add a clear **Get Directions** action on both the homepage and Contact page, opening the exact Google Maps pin in a new tab.
- Preserve the existing contact-page studio map while aligning its address and labels.

## AI consultation helper
- Add a client-facing project-description field and **Get AI Recommendations** action within the consultation experience.
- Call `openai/gpt-6-astra` through Lovable AI Gateway on the server, treating submitted descriptions as untrusted text.
- Return a concise set of relevant existing services and practical questions to discuss during the consultation.
- Show the result for client review, then include the recommendations and questions in the stored and emailed enquiry when submitted, as requested.
- Preserve the existing honeypot, timing validation, and daily enquiry limits; add bounded request protection for the public AI action and surface safe Gateway errors without terminal retries.

## Technical details
- Keep the API key, model prompt, and AI call server-side using the Responses API with required reasoning and `store: false` options.
- Store AI recommendation fields with the enquiry through a locked-down Lovable Cloud migration; no public table reads.
- Keep branding, address, coordinates, Google profile URL, review URL, and directions URL in shared constants to prevent future drift.

## Verification
- Verify the Google profile, review, and directions links and new-tab behavior.
- Test a real AI recommendation request, submission persistence/email inclusion, and safe error handling.
- Check homepage and Contact page layouts on desktop and mobile, route metadata, structured data, and current build health.
