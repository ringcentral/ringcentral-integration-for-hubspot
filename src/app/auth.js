/**
 * init hubspot login
 */
import * as ls from './lib/ls'
import { thirdPartyConfigs, appRedirectHSCoded } from './lib/app-config'
import fetch from './lib/fetch'

const KEY = 'key'
const {
  clientIDHS, clientSecretHS, apiServerHS
} = thirdPartyConfigs
const loginUrl = `https://app.hubspot.com/oauth/authorize?client_id=${clientIDHS}&scope=contacts%20timeline%20oauth%20integration-sync&redirect_uri=${appRedirectHSCoded}`

const getKey = () => {
  return ls.getJSON(KEY)
}

function showRenewing (show) {
  document.getElementById('rc-auth-hs')
    .classList[show ? 'add' : 'remove']('rc-hide-to-side')
}

async function getRefreshToken (
  key = getKey() || {},
  showLoading = false
) {
  const { refreshToken } = key
  if (!refreshToken) {
    return
  }
  if (showLoading) {
    showRenewing(true)
  }
  await getAuthToken({
    refresh_token: refreshToken
  })
  if (showLoading) {
    showRenewing(false)
  }
}

async function getAuthToken ({
  code,
  refreshToken
}) {
  const url = `${apiServerHS}/oauth/v1/token`
  const data = (
    code
      ? 'grant_type=authorization_code'
      : 'grant_type=refresh_token'
  ) +
  `&client_id=${clientIDHS}&` +
  `client_secret=${clientSecretHS}&` +
  `redirect_uri=${appRedirectHSCoded}&` +
    (
      code
        ? `code=${code}`
        : `refresh_token=${refreshToken}`
    )

  const res = await fetch.post(url, data, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    mode: 'no-cors',
    body: data
  })

  /**
{
  "access_token": "xxxx",
  "refresh_token": "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy",
  "expires_in": 21600
}
   */
  if (!res || !res.access_token) {
    console.log('get token failed')
    console.log(res)
  } else {
    const expire = res.expires_in * 0.8 + (+new Date())
    ls.set(KEY, {
      accessToken: res.access_token,
      refreshToken: res.refresh_token,
      expire
    })
    setTimeout(
      getRefreshToken,
      Math.floor(res.expires_in * 0.8)
    )
  }
}

function auth () {
  window.addEventListener('message', waitForAuthCode)
  const params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=300,height=528,right=20,bottom=20'
  document.getElementById('rc-login').addEventListener('click', function () {
    window.open(loginUrl, '_blank', params)
  })
  document.getElementById('rc-auth-hs').classList.remove('rc-hide-to-side')
}

function waitForAuthCode (e) {
  console.log('waitForAuthCode', e.data)
  const { data } = e
  if (data && data.hsAuthCode) {
    getAuthToken({
      code: data.hsAuthCode
    })
    endAuth()
  }
}

function endAuth () {
  document.getElementById('rc-auth-hs').classList.add('rc-hide-to-side')
}

function isExipre (key) {
  return +new Date() > key.expire
}

export default () => {
  const key = getKey()
  if (!key) {
    auth()
  } else if (isExipre(key)) {
    getRefreshToken(key, true)
  }
}
