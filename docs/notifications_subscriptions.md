# Notifications & Subscriptions FAQ

## PubNub Subscription

### Will I lose events when refreshing the OAuth access token?

No, you should not lose any events during a the OAuth access token refresh process. RingCentral PubNub subscriptions last for 15 minutes. To continue your subscription, simply make a `PUT` call to the subscription endpoint with an empty body before the subscription expires. In the event that your OAuth access token has expired, request a new access token using the refresh token or other manner and then make the `PUT` API call. There is no need to unsubscribe and resubscribe to the subscription during an OAuth refresh. The official RingCentral SDKs will automatically do this for you by updating your subscription every 10 minutes, automatically refreshing the access token if necessary.

### Where is the list of supported subscription event filters?

You can find the list of WebHook / PubNub subscription event filters here: https://developer.ringcentral.com/api-docs/latest/index.html. It's a very long page, so please search for the keyword "Notifications Event Types"

### How can I monitor a call queue?

In order to monitor a call queue, you need to monitor every agent in that call queue. If any of the agent get a "Ringing" notification, you know that there is an incoming call to the call queue.

### I want to receive notifications for incoming calls and SMS messages, what should I do?

You need to create a subscription with event filter `/restapi/v1.0/account/{accountId}/extension/{extensionId}/message-store` and `/restapi/v1.0/account/{accountId}/extension/extensionId}/presence?detailedTelephonyState=true` Here is some sample code: https://github.com/ringcentral/ringcentral-csharp-client#subscription
