# SMS FAQ

## Features

### What is the maximum length of a SMS message?

RingCentral's service sends individual messages up to 160 characters and can concatenate longer messages up to 1000 characters. Longer messages require the receiving carrier to be able to process and combine the messages. Many carriers can do this, however there are a few that do not have this capability yet.

### Is Unicode supported for SMS?

Yes. RingCentral's SMS service supports Unicode and can send SMS in any or multiple languages that are supported.

### What is the rate limit for sending SMS?

Sending SMS via the API is covered by our [Rate Limit Usage Plan](https://developer.ringcentral.com/api-docs/latest/index.html#!#APIRateLimits.html) for the *Medium* API group. There is also a current maximum rate of 40 SMS / extension per minute. To send more than this limit, you can set up multiple extensions, each with its own SMS-enabled phone number, either as a direct number or a digital line.

In addition to the API rate limit, SMS message usage must adhere to [CTIA guidelines](https://www.ctia.org/the-wireless-industry/industry-commitments/messaging-interoperability-sms-mms) or messages and numbers may be blocked by carriers.  

To help you ensure compliance and offer you the best solution for your use case, RingCentral offers two primary types of numbers:

#### Longcode numbers
Longcode numbers, also known as local phone numbers, are designated for non-marketing, persons-to-person, and small group text use cases.  CTIA guidelines require that these numbers not send to more than 200 unique numbers per day, no more than 1,000 messages per day, and that messages are responded to by the receivers.

#### Toll-free numbers
Toll-free numbers may be used for application-to-person usage, including commercial and marketing use cases.  There is no daily limit to toll-free SMS beyond the API rate limit, however you are still required to ensure compliance with the CTIA commercial SMS guidelines.

### Can I send SMS as the main company phone number?

Yes. To do this, authorize your app using the Operator Extension, `101` by default and then call the API to send an SMS messsage.

### Can I send a SMS message from another extension?

You can only send SMS messages for the extension that has authorized your app.

### Can I send SMS from the main company number and also have multiple users respond to that number?

Yes. To do send the SMS, authorized as the Operator Extension. To have multiple users receive inbound requests, configure the Operator Extension to point to a Call Queue with the users desired.

### Can I send an SMS from a toll-free number?

Yes!  To send SMS messages from a toll-free number, please contact [support](https://support.ringcentral.com/s/?language=en_US) to request your toll-free number be SMS enabled.  Once enabled, you may use this number to send messages within the United States.  Toll-free SMS are not subject to the 200 messages per day limit, but will incur charges for every message sent and received.  For more information, see our [SMS API Product page](https://developers.ringcentral.com/api-products/sms). 

### What is the maximum number of recipients allowed for MMS?

According to https://developer.ringcentral.com/api-docs/latest/index.html#!#RefSMSMessages.html

> Sending MMS to multiple recipients is supported via Batch request. The number of recipients is limited to 10

## Technical Questions

### How can I get a list of phone numbers that are SMS capable?

First, retrieve a list of phone numbers from the authorized extension by making an API call to the `phone-number` endpoint, for example `account/~/extension/~/phone-number`. Then filter the resulting phone numbers against the `features` property for the value `SmsSender`.

### How can I check SMS history?

You can invoke the Message List API https://developer.ringcentral.com/api-docs/latest/index.html#!#RefMessageList.html with filter `messageType=SMS`.

### What is the API endpoint for InternalMessages permission?

It is for POST `/restapi/v1.0/account/~/extension/~/company-pager`

Ref: https://developer.ringcentral.com/api-docs/latest/index.html#!#RefPagerMessages.html
