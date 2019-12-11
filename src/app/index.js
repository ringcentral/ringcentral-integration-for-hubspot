/**
 * send all window.postMessage to chrome extension background page, proxed to content.js
 */

import _ from 'lodash'
import CallingExtensions from '@hubspot/calling-extensions-sdk'
import initHubspot from './auth'
import { version, thirdPartyConfigs } from './lib/app-config'

const glob = {}

function popup () {
  sendMsg({
    type: 'rc-adapter-syncMinimized',
    minimized: false
  })
}

function callWithRingCentral (phoneNumber, callAtOnce = true) {
  popup()
  sendMsg({
    type: 'rc-adapter-new-call',
    phoneNumber,
    toCall: callAtOnce
  })
}

function getCallInfo (data) {
  return _.get(data, 'call.direction') === 'Outbound'
    ? {
      phoneNumber: _.get(data, 'call.to.phoneNumber') || _.get(data, 'call.to')
    }
    : {
      phoneNumber: _.get(data, 'call.from.phoneNumber') || _.get(data, 'call.from')
    }
}

function sendMsg (data) {
  const dom = document.getElementById('rc-widget-adapter-frame')
  dom && dom.contentWindow.postMessage(data, '*')
}

function onMsg (e) {
  const { data } = e
  console.log(data, 'data')
  if (!data) {
    return
  }
  const { cti } = glob
  const callInfo = getCallInfo(data)
  switch (data.type) {
    case 'INITIALIZED':
    case 'rc-login-status-notify':
      glob.loggedIn = data.loggedIn
      console.log(data.loggedIn, 'data.loggedIn')
      if (data.loggedIn) {
        cti && cti.userLoggedIn()
      } else {
        cti && cti.userLoggedOut()
      }
      break
    case 'rc-call-ring-notify':
      // get call when user gets a ringing call
      cti && cti.incomingCall(callInfo)
      break
    case 'rc-call-init-notify':
      // get call when user creates a call from dial
      cti && cti.outgoingCall(callInfo)
      break
    case 'rc-call-start-notify':
      // get call when a incoming call is accepted or a outbound call is connected
      cti && cti.callAnswered(callInfo)
      break
    case 'rc-call-hold-notify':
      // get call when user holds a call
      console.log(data.call)
      break
    case 'rc-call-resume-notify':
      // get call when user unholds call
      console.log(data.call)
      break
    case 'rc-call-end-notify':
      // get call on call end event
      cti && cti.callEnded(callInfo)
      break
    default:
      break
  }
}

function ctiInit () {
  console.log('glob.loggedIn', glob.loggedIn)
  glob.cti.initialized({
    // Whether a user is logged-in
    isLoggedIn: glob.loggedIn || false,
    // Optionally send the desired widget size
    sizeInfo: {
      height: 528,
      width: 300
    }
  })
}

function init () {
  initHubspot()
  glob.cti = new CallingExtensions({
    debugMode: false,
    eventHandlers: {
      onReady: () => {
        console.log('ready')
        ctiInit()
        //  window.addEventListener('message', onMsg)
        if (glob.loggedIn) {
          glob.cti.userLoggedIn()
        }
      },
      onDialNumber: event => {
        console.log(event, 'onDialNumber')
        const { phone_number: p } = event
        callWithRingCentral(p)
      },
      onVisibilityChanged: event => {
        console.log(event, 'visible change')
      },
      defaultEventHandler: event => {
        console.log(event)
      }
    }
  })
}

console.log(thirdPartyConfigs.serviceName, version)

window.addEventListener('message', onMsg)
window.addEventListener('load', init)
