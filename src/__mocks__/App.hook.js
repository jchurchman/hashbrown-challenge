import tweets from './mockTweets.json'

export default function useAppHook() {
  return ({
    searchTerm: 'foo',
    handleFormSubmit: () => {},
    results: tweets.data
  })
}