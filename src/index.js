// create a new component. This should produce some HTML 

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import _lodash from 'lodash';

const API_KEY = 'AIzaSyBN5EfVf9VmVeR49EVhwCQUHlbfRsDm6aA';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.onSearchTermChange(term)}, 300);
    
    return (
      <div>
        <SearchBar 
          onSearchTermChange={videoSearch}/>
        <VideoDetail 
          video={this.state.selectedVideo}
        />
        <VideoList 
          videos={this.state.videos}
          onSelectedVideo={(selectedVideo) => this.setState({selectedVideo})}
        />
      </div>
    )
  }

  onSearchTermChange = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))
// take this componenet's generated HTML and put it on the page 