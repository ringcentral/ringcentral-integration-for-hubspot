# ringcentral-integration-for-hubspot

Experimental app to add RingCentral to hubspot, so Hubspot user can call with RingCentral by Click Hubspot call button.

It is powered by [Hubspot's calling-extensions-sdk](https://github.com/HubSpot/calling-extensions-sdk).

## Youtube video

[https://youtu.be/7LjebH31-1s](https://youtu.be/7LjebH31-1s)

## Experimental Use

Goto your Hubspot page, open browser console, input:

```js
localStorage.setItem(
  "LocalSettings:Sales:CallingExtensions",
  '{"name": "RingCentral", "url": "https://ringcentral.github.io/ringcentral-integration-for-hubspot/index.html"}'
)
```

and press `enter`, then refresh the page.

## License

MIT
