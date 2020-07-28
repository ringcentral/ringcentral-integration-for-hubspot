# Voice - RingOut FAQ

## General

### How can I make an outgoing call through the API?

An outgoing call can be made programmatically using the RingOut API and WebRTC.

### What is Ringout?

The RingOut capability enables users to make calls connecting two phone numbers using a RingCentral account, one for the user and another for the number being called. Form an API perspective, RingOut is useful when you want to connect any two phones without any programmability for the phones themselves. When using a web browser, WebRTC is a useful alternative. RingOut is designed to work with outside numbers (not RingCentral numbers) but has also been used with RingCentral numbers. In addition to the API, RingOut is supported in RingCentral's softphone, web and mobile applications.

## Making Calls

### When making outbound calls via RingOut, how can I set the caller ID?

The RingOut API does not currently support programmatic setting of the caller ID property. However, it does use the configurable property in the [Online Account Portal](https://service.ringcentral.com) called "RingOut from Web" which can be set by going to `Settings` > `Outbound Caller ID` > `By Feature` > `RingOut from Web`. To set the caller ID to any company number, consider using our [WebRTC](voice_webrtc.md) capability.

### How can I check the status of a RingOut in progress?

To check the current status of a 2-Legged RingOut, make a `GET` request to the endpoint:

* `v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}`

where the `accountId` and `extensionId` could be `~` to refer to the authorized extension and the `ringoutId` parameter is the one generated for the RingOut when the call is initiated. 

For more information please take a look at the API Explorer page here:

* [https://developer.ringcentral.com/api-explorer/latest/index.html#/!/RingOut/getRingOutCallStatus](https://developer.ringcentral.com/api-explorer/latest/index.html#/!/RingOut/getRingOutCallStatus)

### How can I cancel a RingOut?

A RingOut can be cancelled using an API call to the RingOut API endpoint using the `DELETE` method when the RingOut is `InProgress`.

* API Endpoint: `v1.0/account/{accountId}/extension/{extensionId}/ringout/{ringoutId}`

Deleting the RingOut is only available when the RingOut has been initiated and the call has not been connected. For example:

* If you initiate a RingOut and immediately call the `DELETE` RingOut API Endpoint, the call would get hangup as long as the RingOut between the two parties is not connected (first leg has not been established) 
* If the first leg of the call has been initiated, then the `DELETE` API will not hangup the call.

### What does "Mailbox has no permission to this action" mean when trying to do ring out via API?

This error occurs when you do not have a phone number ( Direct / Digital line ) assigned to the User / Extension. 
See this link on how to set this up:`https://devcommunity.ringcentral.com/ringcentraldev/topics/how-to-make-sure-ringout-works`
Free Accounts do not have this capability in Production and they will encounter this error.


## Integrations

### How can I create an Inbound Screen Pop for a CRM, Helpdesk or similar app?

An inbound screen pop can be created to provide more information about a caller by leveraging the incoming call caller ID associated to bring up additional information about that user, whether that information is in a CRM, Helpdesk or other application. There are two popular approaches for this:

1. Out-of-the-Box Softphone Integration: When using the RingCentral softphone, it can be configured to launch an application and provide it with the caller ID. A common approach with web applications is to launch a URL that includes the caller ID. In this case, the web application just needs to have a contact page that can be retrieved via the caller's phone number in the URL. The RingCentral component of this is described in more detailed in the [RingCentral for Desktop User Guide](http://netstorage.ringcentral.com/guides/rc_for_desktop_user_guide.pdf) under `Settings` > `General` > `Launch an external app or a URL on incoming call`.
2. Custom Integration: To create a deeper, custom integration, without reliance on the softphone, developers can by [subscribing for notifications](https://developer.ringcentral.com/api-docs/latest/index.html#!#Notifications.html) which will send events with for incoming calls with the caller ID information which can be used to take action. These subscriptions can occur on the client or the server after which the app can bring up a webpage or a dialog or chat window for the incoming call for the user. A call end event is also provided so the app will know and can instruct the user to take actions such as filling out call notes, etc.

## Troubleshooting

### How can I ensure RingOut is working?

1. Make sure either a Digital Line or a Direct Number is associated with an extension.
1. To add a direct number to an extension see: https://www.youtube.com/watch?v=Uxv0KlnMZZM                 
1. To add a Digital Line to an extension see: http://success.ringcentral.com/articles/en_US/RC_Knowledge_Article/How-to-Assign-an-Existing-Digital-Line-to-a-different-extension
1. Please note that your sandbox number has been assigned the default extension (101) however you should assign either a direct / digital line inorder to make/receive a ringout call on the sandbox number.    
1. Login to the extension on the “RingCentral for Desktop” application before you initiate a RingOut.
1. If the extension is a “From” number then during the first leg of the ringout the “To” number would be displayed and once you dial `1` the second leg of the call would be initiated.
1. The same is the case if the extension is a “To” number. 
