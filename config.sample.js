/**
 * config sample file
 * use `cp config.sample.js config.js` to create a config
 *
 */
module.exports = {

  // dev related
  // devCPUCount: os.cpus().length,
  // devPort: 8020,

  // build options
  minimize: false,

  // congfigs to build app

  // ringcentral config
  ringCentralConfigs: {
    clientID: '',
    clientSecret: '',
    appServer: 'https://platform.ringcentral.com'
  },

  // for third party related
  thirdPartyConfigs: {
    clientIDHS: '',
    clientSecretHS: '',
    apiServerHS: 'https://api.hubapi.com',
    appRedirectHS: 'https://ringcentral.github.io/ringcentral-integration-for-hubspot/redirect.html'
  }

}
