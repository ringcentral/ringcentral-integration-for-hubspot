# Account Info FAQ

## General

### How can I retrieve my accountId (Where could I lookup my Account ID)?

To retrieve the currently authorizing user's `accountId`, make an API call to the `/restapi/v1.0/account/~` API endpoint which will return the object for the user's account. The `accountId` will be located in the response `id` property value.

### How can I retrieve my extensionId (Where could I lookup my Extension ID)?

To retrieve the currently authorizing user's `extensionId`, make an API call to the `/restapi/v1.0/account/~/extension/~` API endpoint which will return the object for the user's extension. The `extensionId` will be located in the response `id` property value. This will indirectly return the user's `accountId` in the user's canonical URI which is in the response `uri` property value.

### What are the differences between my developer account and my sandbox account?

Your developer account is what you used to login https://developer.ringcentral.com/.

Your sandbox account could be found in "Sandbox Accounts" tab after you logged in https://developer.ringcentral.com/. It is normally in the form of a phone number. Your sandbox account is used to login to https://service.devtest.ringcentral.com/.

### What do RingCentral account and extension mean, respectively?

In RingCentral API, we often see endpoints like `/restapi/v1.0/account/~/extension/~/...`. So what do RingCentral account and extension mean, respectively?

In RingCentral's terminology, an account means a company, and an extension often means an user in a company. There specialized extensions which are not mapped to specific users including call queues, paging only extensions and others.

### Is there any way to get phone number from contact name?

RingCentral provides Address Book API: https://developer.ringcentral.com/api-docs/latest/index.html#!#RefAddressBookContacts.html So you can get all the phone numbers and contact names from your address book. With the data you can look up phone number by contact name.

### Where can I find account credentials to do testing in sandbox?

Login https://developer.ringcentral.com/ and go to "Sandbox Accounts" tab where you can find a list of accounts for testing purpose. If you forget password for your account you can click the "Reset password" link to reset it.

### How can i add new permissions to an app which is already in Production?

The official recommendation is to create a new app, add proper permissions and graduate it. Here is a detailed guide: https://devcommunity.ringcentral.com/ringcentraldev/topics/how-can-i-add-new-permissions-to-an-app-which-is-already-in-production

### Can I use my production credentials for sandbox or vice versa?

No, your production and sandbox accounts are different accounts and the credentials cannot be used interchangably.

### Why can't my Canadian, Australian, European, or UK customers login my app?

By default the app is only enabled for RingCentral US brand or region. To request RingCentral enable your app for other regions, please send a request to devsupport@ringcentral.com

### What is an extension number and what is an extension ID? (What are the differences between extension number and extension ID?)

Extension number is just your phone's extension number, it's usually in the form of "101", "102"...etc.

Extension ID is an internal ID used by RingCentral API to identify an extension. In RingCentral API endpoints we use Extension ID instead of extension number: `/restapi/v1.0/account/{accountID}/extension/{extensionID}`
