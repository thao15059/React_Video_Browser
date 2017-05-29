// use class, import React.Component
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDk0pvY6yDe5rsbRKb8-pCVj64AeK0dETU';


class App extends Component {
  constructor(props) {
    super(props);
    // it's array because content list of videos
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.onVideoSearch('surfboards');
  }

  onVideoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }

  render() {

    const videoSearch = _.debounce((term) => this.onVideoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} 
        />
      </div>
    );
  }
  
}

ReactDOM.render(<App />, document.querySelector('.container'));
