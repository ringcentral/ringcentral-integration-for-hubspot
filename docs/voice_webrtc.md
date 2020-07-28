# Voice - WebRTC FAQ

## General

### Does RingCentral WebRTC Support HD Voice?

Yes. If your account has [HD Voice](https://success.ringcentral.com/articles/RC_Knowledge_Article/7714), it will be supported for WebRTC. See [KB Article 7733](https://success.ringcentral.com/articles/RC_Knowledge_Article/7733) on enabling HD Voice wideband codecs on your device.

### Does WebRTC include Call Control API support?

Yes. With WebRTC you can take control of the call with the following capabilities: initiate call, accept incoming call, adding callees via DTMF, hold / unhold, mute / unmute, park, flip, transfer, forward calls, start / stop recording and barge/whisper. These are documented in the [`ringcentral-web-phone` WebRTC SDK](https://github.com/ringcentral/ringcentral-web-phone).

### Can I set Caller ID with WebRTC?

Yes. You can set Caller ID (CLID) using the [`ringcentral-web-phone` WebRTC SDK](https://github.com/ringcentral/ringcentral-web-phone). Just set the desired number as the `fromNumber` in the `webPhone.userAgent.invite()` method call.

### Can WebRTC support area code matching for Caller ID?

Yes. You will need to supply your own area-code matching algorithm, but as long as you have matching numbers for use in your account, you can set the CLID as you wish. One approach is to store your area-code CLID numbers as Auto-Receptionist Company Numbers.

### Are WebRTC call events captured via the event system?

Yes. Voice calls via WebRTC, RingOut and RingCentral endpoints are all captured via the event system. To check the presence status of an extension, you can call the extension presence API endpoint or subscribe to presence events via the subscription API or webhoks API.

### Is WebRTC traffic encrypted?

Yes. All WebRTC communication using RingCentral is encrypted in transit.

### Can a single browser-based app support both RingOut and WebRTC?

Yes. RingOut and WebRTC are two different ways to connect voice calls and both can be supported in single web app without authenticating each time. To do this using the [RingCentral JavaScript SDK](https://github.com/ringcentral/ringcentral-js) have the user authorize with the JavaScript SDK and then pass in the JavaScript SDK when instantiating the [RingCentral WebRTC WebPhone SDK](https://github.com/ringcentral/ringcentral-web-phone). An example implementaiton of this is the [RingCentral for Google browser app](https://developers.ringcentral.com/app-gallery.html/app/312709020-312709020-7gufiGT3T3CCuCP37hMDaQ~KiLR9gZ-TTS5mivQ8TGEqQ-1210).

### What is the "VoIP Calling" Permission used for?

`VoIP Calling` is an app permission which is needed by WebRTC. You can refer to details of RingCentral's WebRTC implementation in RingCentral GitHub repo for the WebRTC SDK: [https://github.com/ringcentral/ringcentral-web-phone](https://github.com/ringcentral/ringcentral-web-phone). When you are building an app using the RingCentral WebRTC SDK, please make sure your app has `VoIP Calling` permission.

