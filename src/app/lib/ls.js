/**
 * localstorage wrapper
 */
import _ from 'lodash'

const prefix = 'ringcentral-hubspot-ext:'

export const get = (key, formatter = a => a) => {
  return formatter(
    window.localStorage.getItem(prefix + key)
  )
}

export const getJSON = (key) => {
  return get(key, JSON.parse)
}

export const set = (key, value) => {
  window.localStorage.setItem(
    prefix + key,
    _.isString(value)
      ? value
      : JSON.stringify(value)
  )
}
