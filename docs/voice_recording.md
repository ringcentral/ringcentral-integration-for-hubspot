# Voice - Call Recording FAQ

### How can I enable call recording?

RingCentral supports both Automatic Call Recording (ACR) and On-Demand Call Recording. Information on how to initiate Automatic and On-Demand Call Recording is available in [KB Article 3171](http://success.ringcentral.com/articles/RC_Knowledge_Article/How-to-Initiate-On-Demand-Call-Recordings). Using WebRTC, it's also possible to programmatically initiate and stop recording per the [WebRTC documentation](https://github.com/ringcentral/ringcentral-web-phone).

### How can I access my recordings?

When a call recording exists in the system, there will be a `recording` property with a `uri` property that can be used to retrieve or stream the recording.

### How many call recordings can my RingCentral account hold?

The number of call recordings an account can hold is specified in [RingCentral KB Article 1894](http://success.ringcentral.com/articles/en_US/RC_Knowledge_Article/2178).

### Will a call recording link in the call log be removed when it is deleted?

Yes, when a call recording is deleted from the system, the call-log record may still exist. If it does, the recording property will be removed at that time.

### Is there a way to be notified when new recordings are available?

Not at this time. We have notifications for calls via the presence event filter but not specifically for call recordings. To check for new call recordings, apps can poll the `call-log` endpoint with the `withRecording` query parameter set to `True`.

### How to produce call recordings in sandbox for testing purpose?

To programmatically generate call recordings, you can use the following community demo app (in PHP):        `https://github.com/anilkumarbp/Sample-Demo-to-Download-Call-Recordings`
  
### How long should I wait after call ended in order to download the call recording?

The call recording data should be available to download as soon as the active call ended.
