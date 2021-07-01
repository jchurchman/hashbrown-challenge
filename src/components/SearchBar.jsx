import { useState, useCallback } from 'react'
import {
  TextField,
  InputAdornment,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ handleFormSubmit }) => {
  const [text, setText] = useState('')

  const handleSubmit = useCallback(e => {
    e.preventDefault()

    handleFormSubmit(text)
    setText('')
  }, [text, handleFormSubmit])

  const handleChange = useCallback(e => {
    setText(e.target.value)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        value={text}
        name="search"
        helperText="Enter a hashtag and press the 'return' key to see tweets that relate."
        required
        type="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {'#'}
            </InputAdornment>
          ),
          endAdornment : (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </form>
  )
}

export default SearchBar