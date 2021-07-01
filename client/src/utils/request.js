import fetch from 'isomorphic-fetch'

const host = 'https://api.twitter.com'

export const getToken = ({ key, secret }) => {
  console.log({ key, secret })
  const encodedKey = encodeURIComponent(key)
  const encodedSecret = encodeURIComponent(secret)
  const base64EncodedKeyAndSecret = btoa(`${encodedKey}:${encodedSecret}`)
  return fetch('https://api.twitter.com/oauth2/token', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      Authorization: `Basic ${base64EncodedKeyAndSecret}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Accept-Encoding': 'gzip',
    },
    body: "grant_type=client_credentials",
  })
}

export const searchTweets = (term) => {
  const encodedTerm = encodeURIComponent(term)
  return fetch(
      `${host}/2/tweets/search/recent?query=${encodedTerm}`,
      {
        credentials: 'include',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
        }
      }
    )
}