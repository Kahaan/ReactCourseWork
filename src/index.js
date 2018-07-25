import React, { Component } from "react"
import ReactDOM from "react-dom"
import YTSearch from "youtube-api-search"
import VideoList from "./components/video_list"
import SearchBar from "./components/search_bar"

const API_KEY = 'AIzaSyAwl2Ki5IYdf3thatVHbcKvWmoDHz5nBv8'


class App extends Component {
  constructor(props){
    super(props)

    this.state = { videos: []}

    YTSearch({key: API_KEY, term: 'surboards'}, function(videos){
      this.setState({ videos })
    })

  }


  render(){
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
