import { useState, useEffect } from "react";
import tweets from './mockTweets.json'
import {
  searchTweets,
} from './utils/request'

let bearerToken;

export default function useAppHook() {
  // useEffect(() => {
  //   // console.log(process.env.REACT_APP_API_KEY)
    
  //   if (!bearerToken) {
  //     await handleGetBearerToken()
  //   }
  // }, [bearerToken])
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const handleFormSubmit = (term) => {
    setSearchTerm(`#${term}`)
    async function handleSearchTweets() {
      const response = await searchTweets(term)
      console.log('response is ', response)
      // setResults(response.data)
    }
    handleSearchTweets()
  }

  return {
    searchTerm,
    handleFormSubmit,
    results: tweets.data
  }
} 