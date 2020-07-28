# Phone Numbers FAQ

## General

### How can I retrieve an extension's direct numbers?

To retrieve a list of an extension's direct numbers, retrieve the extension's phone numbers by making a `GET` request to the `phone-number` endpoint, e.g. `v1.0/account/~/extension/~/phone-number`. Then retrieve a list of phone numbers and filter where the `usageType` property is `DirectNumber`.

### How do I add Direct Numbers for my messages only extension?

You can add Direct Numbers for your messages only extension. [Click here](http://success.ringcentral.com/articles/RC_Knowledge_Article/How-to-add-direct-numbers-for-your-messages-only-extension) for steps-by-steps instructions.

### How do I add a Direct Number to a User?

A Direct Number is a phone number that can be called without going through the auto-receptionist. [ Click here](http://success.ringcentral.com/articles/RC_Knowledge_Article/5-10-Adding-Extension-Direct-Numbers-via-Web) to read step-by-step instructions on how to add a direct number to a user extension as an administrator.

### Why do I keep getting "EME-201 Address not valid" when updating E911 Address in Sandbox environment.

The "EME-201 Address validation failed: Address not valid" error is returned from the sandbox environment on the "PUT restapi/v1.0/account/{accountId}/device/{deviceId}" endpoint because the environment not configured to perform address validation. This API needs to be used in the production environment and cannot be tested in the sandbox environment.
