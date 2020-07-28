# SDKs & Programming

## SDKs

### What SDKs are available for the RingCentral APIs?

RingCentral's official and community SDKs are available here https://developer.ringcentral.com/library/sdks.html. There are client SDKs in popular languages including C#, Java, JavaScript, PHP, Python, Ruby and Swift; a real-time communications WebRTC SDK; and a UI embeddable widget and React component library. All our official SDks are available on the RingCentral GitHub page: https://github.com/ringcentral. Documentation for SDKs are availabe in each GitHub repo.

### Where is the SDK Documentation?

SDK Documementation is co-located with the SDKs. For RingCentral official SDKs, you can find them on the GitHub repos for the specific SDKs. You can find a list of RingCentral official and community SDKs here: https://developer.ringcentral.com/library/sdks.html. Offical SDKs are hosted on our RingCentral GitHub account.

### Which official C# SDK should be used?

https://github.com/ringcentral/ringcentral-csharp-client is the correct one

https://github.com/ringcentral/ringcentral-csharp has been deprecated.

### The C# SDK provides async style APIs, what are the proper ways to invoke them?

There are two ways to invoke C# async methods: `await f()` or `f().Result`. The former is async while the latter is sync.

### How to catch and print exceptions with RingCentral C# SDK?

Please read the sample code here: https://github.com/ringcentral/ringcentral-csharp-client#exception-handling

## Programming

### How to use RingCentral together with React?

React is a generic solution for frontend development. If you want a sample application for RingCentral with React, here it is: https://github.com/ringcentral/ringcentral-js-widgets

### How to programmatically dial a number?

You can either invoke the ringOut api or use the RingCentral webphone SDK. Please read this ticket: https://devcommunity.ringcentral.com/ringcentraldev/topics/programmatically-dial-a-number

### How can I set the presence of the current logged in user via API?

You can set the presence of the current logged in user by updating extension presence: https://developer.ringcentral.com/api-docs/latest/index.html#!#RefUpdateExtensionPresence

### How can I start RingCentral app to dial a number via command line?

On macOS, you can execute the following command in terminal: `open "rcmobile://call?number=1234567890"`
