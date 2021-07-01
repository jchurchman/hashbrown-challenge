import { useCallback, useState } from "react";
import {
  searchTweets,
} from './utils/request'

export default function useAppHook() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const handleFormSubmit = useCallback((term) => {
    setSearchTerm(`#${term}`)

    async function handleSearchTweets() {
      const response = await searchTweets()
      setResults(response.data)
    }

    handleSearchTweets()

  }, [])

  return {
    searchTerm,
    handleFormSubmit,
    results
  }
} 