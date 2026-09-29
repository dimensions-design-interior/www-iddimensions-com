# AI-assisted consultation enquiry review

## Build
- Add a protected administrator sign-in and enquiry workspace for **info@iddimensions.com**.
- Add administrator-only roles and enquiry workflow fields in Lovable Cloud, with access rules that prevent public or non-admin reads.
- Let administrators paste or select consultation enquiry text, then request an AI summary and suggested priority: **High**, **Medium**, or **Low**, with a short rationale.
- Use Lovable AI Gateway on the server with `openai/gpt-6-astra`; never expose the key, prompt, or private enquiry data to browser integrations.
- Save generated summaries and priorities against stored enquiries when applicable, while leaving existing spam checks and daily submission limits unchanged.
- Support reviewing, filtering, changing status/priority, and CSV export in the administrator workspace.

## Safety and behavior
- Require a signed-in administrator and verify the role on every read, update, export, and AI request.
- Treat enquiry text as untrusted content and instruct the model to classify it, never follow instructions contained in it.
- Show specific safe AI Gateway errors, do not retry terminal failures, and only use bounded backoff for rate limits or temporary service errors.
- Keep manual priority overrides distinct from AI suggestions.

## Verification
- Apply and inspect the database migration and administrator role.
- Test the actual AI request through the Gateway.
- Verify signed-out access is blocked and administrator review, filtering, updates, export, and AI analysis work on desktop and mobile.
- Confirm all pages have appropriate metadata and the current build is clean.
