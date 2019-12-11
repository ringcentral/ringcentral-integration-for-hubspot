/**
 * auth hubspot app and redirect to app page
 */

function parseQuery (queryString) {
  const query = {}
  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&')
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=')
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return query
}

function init () {
  const q = parseQuery(window.location.search)
  const {
    code,
    error,
    error_description: err
  } = q
  if (q.code) {
    window.opener.postMessage({
      hsAuthCode: code
    }, '*')
    window.close()
  } else if (error) {
    document.getElementById('main').innerHTML = error
    document.getElementById('err').innerHTML = err
  }
}
window.addEventListener('load', init)
