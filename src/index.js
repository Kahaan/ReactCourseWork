import React from "react"
import ReactDOM from "react-dom"

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAwl2Ki5IYdf3thatVHbcKvWmoDHz5nBv8'

const App = function(){
  return (
    <div>
      <SearchBar />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('.container'))
