# Webhooks FAQ

## Webhooks

### How can I resolve the "Parameter [deliveryMode.address] value is invalid" error when creating a webhook?

The `Parameter [deliveryMode.address] value is invalid` error indicates that RingCentral cannot connect to the webhook URL properly. This can be for a number of reasons including timeout, invalid response, or SSL/TLS failure. The webhook URL must return within 1 second and respond with a 200 status code. When creating a webhook, the URL must return the `Validation-Token` response header using the value that was sent in the `Vaidation-Token` request header. Common TLS issues can include: TLS isn't enabled, TLS does not chain to a trusted CA certificate, TLS certificate chain is missing, TLS algorithm mismatch, etc.

### How can I verify if SSL/TLS is configured properly for my webhook?

There are a number of requirements for SSL/TLS to work properly including that it must be enabled on web service, must have a certificate that chains to a trusted CA certificate, must use supported algorithms, etc. To test your site, use the SSL Shopper SSL Checker service at: [https://www.sslshopper.com/ssl-checker.html](https://www.sslshopper.com/ssl-checker.html).

### What does error SUB-525, "WebHook server response is invalid", mean?

This error means that there is a problemw ith your WebHook server URL. It must meet the requirements stated in the [Developer Guide for Webhooks](http://ringcentral-api-docs.readthedocs.io/en/latest/webhooks/).

### What are verification token and validation token for RingCentral WebHook?

To subscribe, the webhook URL must return a `Validation-Token` header when it is presented with one. When webhook subscription is created, it sends a request with validation-token in headers to webhook address. Webhook address should return a success request with validation-token in headers to finish webhook registration. If the server doesn't return validation-token the subscription creation will fail with 'WebHook is not reachable'.

When you create a new WebHook subscription, you can specify a verification token and keep a copy. Verification-Token is included in the notification messages, you can compare it with your own copy to make sure that the notificaiton is indeed from the WebHook subscription you created.

### What are the requirements for RingCentral WebHook URI?

The webhook URL service must meet the following requirements:

- is available on the Internet
- has a TLS / SSL enabled*
- can respond within 1000 milliseconds with 200 OK
- will respond with Validation-Token header on subscription

http://ringcentral-api-docs.readthedocs.io/en/latest/notifications_webhooks/
