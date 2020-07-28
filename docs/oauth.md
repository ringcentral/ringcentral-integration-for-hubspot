# Authentication & Authorization FAQ

## General

### How do I use 3-legged OAuth?

3-Legged OAuth is a form of OAuth that allows RingCentral to manage the authentication of users for an app provider. RingCentral supports the Authorization Code flow for apps that can protect a client secret and Implicit Grant flow for apps that cannot (e.g. a browser-only application). You can learn more about 3-legged OAuth in the [RingCentral API Reference Auth section](https://developer.ringcentral.com/api-docs/latest/index.html#!#RefAuth.html) and in the [RingCentral tutorials](https://ringcentral.github.io/tutorials/).

### Why does OAuth return "unauthorized for this grant type" error?

The error "unauthorized for grant type" occurs when your application is attempting to use an OAuth grant type that it is not approved to use. This often happens when your app requires the Authorization Code Flow but is attempting to use the Password Flow. See below for information in implementing Authorization Code Flow. For more information see [this Developer Community article](https://devcommunity.ringcentral.com/ringcentraldev/topics/unauthorized-for-this-grant-type-error).

### Where can I find example code that implements Authorization Code Flow (3-legged authorization flow)?

For information on the Authorization Code Flow, please see this [Developer Community post](https://devcommunity.ringcentral.com/ringcentraldev/topics/using-oauth-2-0-authorization-code-grant-to-access-ringcentral-apis). Sample demos in a few programming languages including JavaScript, C#, Python, Ruby, etc. are available in the [`ringcentral-demos-oauth` repo](https://github.com/grokify/ringcentral-demos-oauth).

### How many simultaneous OAuth sessions can my application support? (Is there a maximum number of access tokens that a single user could create?)

You can have up to 5 simultaneous OAuth sessions per user per application.

### I want to disable expires for access_token and refresh_token, is that doable?

Tokens expire and there is no way to disable the expire. But you can refresh the tokens before they expire. Access token's lifetime is 1 hour while refresh token's lifetime is 1 week. We have SDKs which provide utility methods to refresh tokens. You can find the SDKs and documentations here:  https://github.com/ringcentral

### Why isn't password authorization flow available for public applications?

It is by design for security reasons. Public applications are available to users from all companies, it's not secure to allow password flow. Authorization code flow is way better because user doesn't enter password out of RingCentral services.

### How to do password authorization to obtain access token via curl?

```
curl -i -X POST "https://platform.devtest.ringcentral.com/restapi/oauth/token" \
-H "Accept: application/json" \
-H "Content-Type: application/x-www-form-urlencoded" \
-u "clientId:clientSecret" \
-d "username=username&password=password&extension=extension&grant_type=password"
```
