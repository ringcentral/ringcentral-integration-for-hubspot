/**
 * env export
 */
export const thirdPartyConfigs = process.env.thirdPartyConfigs
export const version = process.env.version
export const ringCentralConfigs = process.env.ringCentralConfigs
export const appRedirectHSCoded = encodeURIComponent(
  thirdPartyConfigs.appRedirectHS
)
