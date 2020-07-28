# RingCentral Development Basics

## Getting Started

### Where can I get started using the API?

To get started using the RingCentral API, we recommend trying our [SMS Quick Start](https://developers.ringcentral.com/guide/sms/quick-start/). 

### Can I try the API quickly without writing any code?

Yes. Our API Reference allows anyone to [make calls to our API](https://developers.ringcentral.com/guide/basics/explorer) to observe the request and response easily. 

### Where is the RingCentral API reference page?

The RingCentral API Reference is located on the following URL:

[https://developer.ringcentral.com/api-reference/](https://developer.ringcentral.com/api-reference/)

### Where can I find SDKs, sample code and/or example apps for my language?

SDKs, sample code and example apps available from RingCentral and community authors are linked from the RingCentral Developer Portal SDK page ([https://developer.ringcentral.com/library/sdks.html](https://developer.ringcentral.com/library/sdks.html)). For all official resources, developers can also go the RingCentral GitHub organization page at [https://github.com/ringcentral/](https://github.com/ringcentral/).


## General

### What can I accomplish with your APIs?

The [RingCentral Platform](https://developers.ringcentral.com) offers a family of cloud APIs that integrate voice, SMS, and fax communications, as well as provides access to communications data. You can tightly integrate all business communications with your CRM application; send SMS messages and faxes straight from your business apps; seamlessly initiate phone calls and ring out from business applications; analyze call logs to create reports and feed dashboards. See the [RingCentral Developer Library](https://developer.ringcentral.com/api-and-docs.html) for further information.

### How do I send text messages to other colleagues within my company using RingCentral through the API?

If you are interested in sending text messages to your internal employees you can take advantage of using company-pager API to send text messages to other users, and use the RingCentral iOS/Android [mobile application](http://www.ringcentral.com/office/features/rcmobile/overview.html) or [RingCentral for Desktop](http://www.ringcentral.com/office/features/desktop-apps/overview.html) to receive them. Through the Advanced Messaging APIs your business application can send unlimited amount of messages. Get more details on how to create pager for your company here.

### How many API calls am I allowed to make per a time period?

There are certain API usage plans which are applied to 3rd party applications which use the RingCentral API. These plans can vary depending on a particular API or a user’s current service plan. But in most cases our servers will reject API requests from a particular application if the request rate exceeds 30 API requests per minute. In this case the client will get an HTTP error with status code 429 “too many requests”.

### Can I give someone access to development with an account in our sandbox account or is a production account required?

There are two basic scenarios:

1. If you want the developer to have full access to the Developer Portal ([https://developers.ringcentral.com](https://developers.ringcentral.com)) to create and configure apps, view analytics, submit for graduation, then the user needs a production account that can be used to log into ([https://service.ringcentral.com](https://service.ringcentral.com)).
2. If you want a developer to have access to the APIs for development and testing, but not have access to the Developer Portal, you can create a user on the sandbox account ([https://service.devtest.ringcentral.com](https://service.devtest.ringcentral.com)) and provide the developer a pre-created app key and app secret to perform development. The sandbox account user will not have access to the production Online Account Portal ([https://service.ringcentral.com](https://service.ringcentral.com)).

### What are the System Requirements for using the RingCentral Service and Integrations, and which browsers are supported for using these applications?

[RingCentral KB article 5126](http://success.ringcentral.com/articles/en_US/RC_Knowledge_Article/5126) covers this information which you can refer to for answers to this question.

### What version of security protocol does RingCentral support?

RingCentral's legacy RingOut and FaxOut APIs require servers to support TLS version 1.2. Older browsers and API clients without TLS 1.2 support will no longer work. You can read more about our TLS requirements, how to test your browsers/API client/code for TLS 1.2 support, and language updates required to operate with our API in [RingCentral KB Article 8778](http://success.ringcentral.com/articles/RC_Knowledge_Article/8778). The RingCentral Connect Platform APIs will be updated at a future date.

### How do I get my app into Production? (How can I graduate my app?)

The [RingCentral Developer Portal](https://developers.ringcentral.com) contains information on the graduation status and readiness of your application. In your app page, your app's status is presented on the `Status & Review` view with related API call information in the `Analytics` view. Summaries of both of these are presented at the top level `Dashboard` view. For step-by-step instructions:

1. Login to the [RingCentral Developer Portal](https://developer.ringcentral.com)
2. From the main navigation, hover over "MyApps", and select your application from the list (or click "See All Apps" to view the entire list if you do not see your app in the quick pick list).
3. The `Dashboard` view of your Application page in Developer Portal contains a well named `Production Status`. The content in this well provide you, the developer, with a quick pulse on where your application is in the development process as it relates to Production access.
4. Click on `Status & Review` to see a more detailed graduation information where the `graduation requirements` link of #3 above is referenced.
5. This `Status & Review` view contains two sections: `Production Status` (same from Dashboard view), and the `Graduation Requirements` section. This section provides you with a detailed list of our Production Access Criteria, and how it relates to the current state of your application.
6. If the button named "Apply for Production" is __greyed out__ it is because your application has not yet met our Production Access Criteria. Please review the 'status' of each rule that is failing and resolve the issue within your application code.
7. Note that the data in this view may be cached, but there is a 'refresh' icon you can use to update the state of the review data.
8. If you feel that your application has met all of the rules, but you are still unable to "Apply for Production", please submit a Developer Support Case.
9. We process requests for production each workday and address all requests from the previous day(s).

### The most recent API request data is missing from the charts of the Analytics portion of Developer Portal for my application

The Analytics charts in Developer Portal are a tool to empower developers with the information they need about how their applications are operating with the RingCentral API. There are two primary views of Analytics data charts  based on the environment of the data being reported: Sandbox and Production (note that if your application has not applied for and been granted Production access, there will be zero data in the Production views for your application). There are several data views and filters for these views available from within the Analytics section of each application you have defined in the Developer Portal.

#### Analytics Data Views Available in the Developer Portal for Each Application
**API Calls:** Provides developers with an aggregated count of all API requests for your application

- Past 30 Days Filter: Provides you with a daily aggregate of all requests for your application over the past 30 days
- Past 7 Days Filter: Provides you with a daily aggregate of all requests for your application over the past 7 days
- Past 24 Hours Filter: Provides you with an hourly aggregate of all requests for your application over the past 24 hours
(note, that Past 24 Hours !== TODAY, but actually the past 24 hours)

**Endpoints:** Provides developers with aggregated counts of API requests grouped by the path of the API request sent by your application

- Past 7 Days Filter: Provides you with a daily aggregate counts of API requests grouped by the path of the API request sent by your application for the past 7 days
- Past 24 Hours Filter: Provides you with hourly aggregate counts of API requests grouped by the path of the API request sent by your application for the past  24 hours
(note, that Past 24 Hours !== TODAY, but actually the past 24 hours)

**Permissions:** Provides developers with aggregated API request counts based on the associated API permission required to execute the request

- Past 7 Days Filter: Provides you with aggregated API request counts based on the associated API permission required to execute the request for the past 7 days
- Past 24 Hours Filter: Provides you with aggregated API request counts based on the associated API permission required to execute the request for the past  24 hours
(note, that Past 24 Hours !== TODAY, but actually the past 24 hours)

**Response Times:** Provides developers with visibility into the performance of RingCentral's processing and responding to the API requests for your application

- Past 7 Days Filter: Provides developers with visibility into the performance of RingCentral's processing and responding to the API requests for your application for the past 7 days
- Past 24 Hours Filter: Provides developers with visibility into the performance of RingCentral's processing and responding to the API requests for your application for the past  24 hours
(note, that does not === TODAY, but actually the past 24 hours)
If you are not seeing the data for your most recent API requests, try switching the filter to "Past 24 Hours" for the Data View you are using. This typically will resolve that problem.

**An important item to watch when reading any of these Analytics charts is the "Duration".** The reason this is important is because the starting and ending TIME of the report being viewed may not precisely match up with the time-period for which you are expecting to see data. Please pay close attention to these values when interpreting these Analytics charts.

### I forget my sandbox account password, how to reset it?

First of all, login https://developer.ringcentral.com using your **developer account**. If you forget your **developer account** password too, click "Forgot Password?" when it prompts you to enter password to reset your **developer account** password.

After you logged in your **developer account**, click "Sandbox Accounts" tab on left side of the page. Then you will see a list of your **sandbox accounts**, each has a "Rest password" link to reset its password. Click the link, and you will be prompt with a modal window with three input fields: In the first input field you enter your **developer account** password, in the remaining two input fields enter the new password for your **sandbox account**. Click "Submit" to change your **sandbox account** password.

### How to enroll in RingCentral beta program?

Some API endpoints are marked as "beta" and are only available to developers who have enrolled in RingCentral beta program.

In order to enroll in RingCentral beta program, please send an email to devsupport@ringcentral.com with the name of your application.

## Getting Help

### Where should I turn to if I have a non-programming question about RingCentral?

Use the forum for non-programming questions about RingCentral: http://community.ringcentral.com/ (And the counterpart for programming question is https://devcommunity.ringcentral.com/).

For more information, you can visit RingCentral Customer Care Center: https://success.ringcentral.com where you can get all kinds of help including online chat and live call.

### What Support Channels does RingCentral have?

RingCentral provides online, community-based support via (a) our an Online Community (https://devcommunity.ringcentral.com/ringcentraldev), (b) some Stack Overflow tags: `ringcentral` ( https://stackoverflow.com/questions/tagged/ringcentral) and `glip` (https://stackoverflow.com/questions/tagged/glip) and (c) our Glip community (https://glipped.herokuapp.com). We also provide free ticket-based, SLA_backed DevSupport (https://developer.ringcentral.com/support.html) and paid consulting via our Professional Services team (https://developer.ringcentral.com/support/services.html).

### How can I contact Developer Support (DevSupport)?

You can create a support ticket by clicking on the links at the bottom of the Support Page (https://developer.ringcentral.com/support.html) to open and view your cases. You can also send an email to devsupport@ringcentral.com

## Troubleshooting

### When should I retry when receiving a 503 CMN-211 `MaintenanceMode` "Service is overloaded, please retry later" error?

The amount of time to wait before retrying the request is the number of seconds provided in the `Retry-After` HTTP response header. Often times, the retry after time is no longer than 10-15 seconds.
