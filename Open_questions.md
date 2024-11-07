## Do you see any security risks with given User API response objects? If so, please identify

them.

1. With specific item request, seems like too much data is returned by API - admin email and passwords.
1. Requests are returning data without auth token.

## Please share any non-functional tests you can think of related to first or second challenge.

- Performance testing for API:
  1. Stress test application to find system max users can handle.
  2. Load testing to check if application performance does not downgrade when feature scope growths over time.
- Accessability testing for web page.
  1. As required by some laws, certain public sites needs to meet accessability rating if page meets WCAG levels. This could be also automated by a11y or other libraries.
