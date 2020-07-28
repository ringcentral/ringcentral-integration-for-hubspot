# Usage Plan FAQ

## General

### What are my API rate limits?

Every app is assigned to a Usage Plan which specifies the API rate limits. API rate limits ar specified per API group. Each API is assigned to to an API group and the combination of usage plan and API group determines the API rate limit. The actual limits for your app are listed in the Developer Portal app page under `Rate Limits`.

### What is a Usage Plan?

A Usage Plan is a set of API rate limits per API group. Every application is assigned a usage plan which enables consistent and efficient load allocation through correct use of the RingCentral Connect Platform.

### What is an API Usage Plan Group?

RingCentral APIs are categorized by Usage Plan API Group which includes the following categories: `Light`, `Medium`, `Heavy`, and `Auth`.

### Does the rate limit apply to all API in an API group or for a single API endpoint?

Rate Limits is per API group. If your app is accessing multiple endpoints in the same API group, the requests are cumulative across endpoints. For example, if your app as a limit of 10 requests per minute for `Heavy` APIs and you make 5 each requests across 2 `Heavy` endpoints, you will be at your 10 requests per minute limit.

### What happens if my app exceeds its rate limit?

If you exceed the API rate limit, the server will return the 429 HTTP error status code indicating Too Many Requests. This means that the client is being throttled by the server due to high request rate. The `Retry-After` response header will specify the number of seconds that should elapse before your app can make requests again.

### Where can I find the API call rate limit page?

Here is the RingCentral API Rate Limit page which includes almost everything about rate limit: http://ringcentral-api-docs.readthedocs.io/en/latest/rate_limits/

### What is RingCentral Data Retention Policy?

Here is an article about RingCentral message storage and account data retention: https://success.ringcentral.com/articles/RC_Knowledge_Article/2178

### How long are the call recordings retained?

According to this article: https://success.ringcentral.com/articles/RC_Knowledge_Article/2178, call recordings are retained 90 days for Non-HIPAA Accounts and 30 days for HIPAA Accounts.
