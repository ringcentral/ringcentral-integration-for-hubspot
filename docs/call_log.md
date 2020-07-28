# Call Log FAQ

## General

### When do calls appear in the Get Call Log API?

RingCentral has 2 related APIs for calls, the Call Log API `call-log` endpoint and the Active Calls API `active-calls` endpoint. Calls will appear in the Call Log API approximately 30 seconds after the end of the call and in the Active Calls API beforehand using the `v1.0/account/{accountId}/extension/{extensionId}/call-log` and `v1.0/account/{accountId}/active-calls` endpoints respectively. When using the Online Account Portal, the calls are presented in a single merged view.

### How can Call Log Records be mapped to Extensions?

A call can be associated with multiple extensions. To find the associated calls, retrieve the detailed call log with call legs and then match each call leg to the associated extension. Retrieve Call Log recrods with call legs by retrieving the Call Log endpoint with the `view=Detailed` query parameter, for example `v1.0/account/{accountId}/call-log?view=Detailed`. For each call leg locate the participant of interest's `name` property, for example, `to.name` which is a concatenation of the extension's Extension Info `firstName` and `lastName` properties. More information is available is available on the [Developer Community](https://devcommunity.ringcentral.com/ringcentraldev/topics/how-do-we-identify-which-extension-picked-up-the-call-through-our-api).

### How to filter Call Log by Action?

Call Log records have a property `action` which can be set to `Phone Call` but it's not currently possible to filter on this in the API. To restrict your search to phone calls set the query `type` parameter to `Voice`.

### How to filter Call Log by Result?

Call Log records have a property `result` but it's not currently possible to filter on this in the API. To filter on `result` it's necessary to retrieve the call log results from the API and the perform filtering in your application.

### Why does the Active Calls API include finished calls?

Active call logs API not only keeps the track of Active calls but also keeps the track of most recent calls. The recent calls stays in the Active Calls for 20-40 min.

### I can only get call logs for the last 24 hours via API, what should I do?

According to the documentation: https://developer.ringcentral.com/api-docs/latest/index.html#!#RefUserCallLog.html, there is a query parameter named `dateFrom`, its default value is current time minus 24 hours. You can set this parameter to a proper value top fix the issue.

### How can I get call logs for all users and extensions?

You can invoke the Company Call Log API: https://developer.ringcentral.com/api-docs/latest/index.html#!#RefCompanyCallLog.html

And you need to authorize as the administrator of your RingCentral account.

### What’s the proper way to iterate all pages of call logs?

If there are more pages to fetch, there will be `navigation.nextPage` in the response data. So every time you fetch a new page, check the existance of `navigation.nextPage`. If it doesn't exist, it means you have fetched all the pages.

### How do I know that two call log records are two legs of the same RingOut call instead of two separate calls?

RingOut generates two call log records. Given two call log records, how do I know they are two legs of the same RingOut call or two separate calls?

If the following is true

```
Outbound fromNumber == inbound toNumber
&&
Math.abs(outbound sessionId – inbound sessionId) is one of 1000, 2000, 3000, 4000.
```

Then you can assert that they are actually two legs of the same call instead of two separate calls.

Solution above is unofficial but it works most of the time according to my experience.
