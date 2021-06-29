# RingCentral HubSpot Comparison Matrix

The following provides a feature comparision for the two RingCentral HubSpot integrations:

* App Market Integration(Only support outbound calls)
* Chrome Browser Extension

In general, RingCentral for HubSpot Browser extension has more features, we will continue to add more features to both apps, this table will change accorddingly.

| Features       | RingCentral for HubSpot Browser extension            |  RingCentral for HubSpot in HubSpot app market(native app) | Is it can be done in native app | Is it can be done in Chrome extension
:---------------:|:----------------------------------------------------:|:-----------------------------------------------:|:-----------------------------------------------:|:-----------------------------------------------:
Type | Browser extension | HubSpot app
Link | https://www.ringcentral.com/apps/hubspot | https://www.ringcentral.com/apps/call-with-ringcentral-for-hubspot | - | -
Video demo | https://youtu.be/N3fUhOkky7M | https://youtu.be/wOQ7-t4o0Qo | - | -
Github repo | https://github.com/ringcentral/hubspot-embeddable-ringcentral-phone | https://github.com/ringcentral/ringcentral-integration-for-hubspot (for issue tracking only, no code) | - | -
 | **Call Features** | 
Call from contact page | YES [Screenshot](screenshots/hs-click-to-call-min.png) | YES [Screenshot](screenshots/hsi-click-2-call-min.png) | YES | YES
Support inbound call | YES | NO | PARTIALLY\* | YES
Create call log right away after call ends | YES | YES | YES | YES
Update call log in server side(user do not need to wait in current page) | YES | NO | YES | YES
Call from contact list | YES [Screenshot](screenshots/hs-call-from-contact-list-min.png) | NO | NO | YES
Call from phone numbers in note/log | YES [Screenshot](screenshots/hs-call-from-call-log-min.png) | NO | NO | YES
Popup contact page when inbound call from contact | YES [Video](https://youtu.be/N3fUhOkky7M?t=298) | NO | NO | YES
Check contact activities from RingCentral widgets | YES [Video](https://youtu.be/N3fUhOkky7M?t=76) | NO | NO | YES
Show contact name when calling | YES [Screenshot](screenshots/hs-show-name-min.png) | YES [Screenshot](screenshots/hsi-show-name-min.png) | YES | YES
Take note when calling | YES [Screenshot](screenshots/hs-show-name-min.png) | YES [Screenshot](screenshots/hsi-show-name-min.png) | YES | YES
 | **Sync Features** |
Auto sync call log when call ends | YES [Video](https://youtu.be/N3fUhOkky7M) | YES [Video](https://youtu.be/oZngYfBMOLc) | YES | YES
Mannully sync call log | YES [Video](https://youtu.be/N3fUhOkky7M) | NO | YES | YES
Auto sync SMS log | YES [Video](https://youtu.be/N3fUhOkky7M) | YES | YES\*\* | YES
Auto sync Voicemail log | YES [Video](https://youtu.be/N3fUhOkky7M) | NO | NO | YES
Manually sync SMS/Voicemail log | YES [Video](https://youtu.be/N3fUhOkky7M) | NO | YES | YES
Send SMS | YES [Screenshot](screenshots/hs-sms-min.png) | YES [Screenshot](screenshots/hsi-send-sms-min.png) | YES | YES
Check voicemail | YES [Screenshot](screenshots/hs-check-vm-min.png) | YES [Screenshot](screenshots/hsi-check-vm-min.png) | YES | YES
Send SMS in HubSpot workflow | NO | YES | YES | NO
 | **Video Meeting Features** |
Schedule meeting | YES [Video](https://youtu.be/N3fUhOkky7M) | YES [Screenshot](screenshots/hsi-rcv-min.png) | YES | YES
Insert meeting detail to HubSpot meeting form | YES [Video](https://youtu.be/2T5F9Y-x63E?t=364) | NO [WIP](https://youtu.be/SQknT_A7jA0) | YES | YES
Click to open schedule meeting panel | YES [Video](https://youtu.be/N3fUhOkky7M) | NO
 | **Contacts Features** |
Auto index contacts data | YES [Screenshot](screenshots/hs-resync-contacts-min.png) | NO | YES(BUT Very large effort) | YES
Create new contact from call history | YES [Video](https://youtu.be/N3fUhOkky7M) | NO | YES | YES
Index recent updated/created contacts | YES [Screenshot](screenshots/hs-resync-contacts-min.png) | NO | YES(BUT Very large effort) | YES

\* Technically, inbound calls will come through if the native CTI (the iFrame for RingCentral) is up. Since we cannot control this iFrame from always appearing, inbound calls are not officially supported.

\*\* SMS logging is possible via the SMS integration hosted in the Contact Record Sidebar. Please make sure to turn the toggle on for this integration in the sidebar and also check the Activity Filter box for integrations, and specifically, RingCentral.
