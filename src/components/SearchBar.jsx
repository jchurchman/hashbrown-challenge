import React from 'react'
import {
  TextField,
  InputAdornment,
} from '@material-ui/core'

const SearchBar = () => {

  return (
    <form>
      <TextField
        variant="filled"
        helperText="Enter a hashtag and press the 'return' key to see tweets that relate."
        required
        type="search"
      />
    </form>
  )
}

export default SearchBar