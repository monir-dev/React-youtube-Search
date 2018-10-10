import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';


const GOOGLE_API_KEY = 'AIzaSyDjuqrlGBWNQDnEcz7pFBCJaPpTnOzJgeM';



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    // this.getSelectedVideo = this.getSelectedVideo.bind(this);
  }

  componentDidMount() {
    this.searchVideo('johnny bravo');
  }

  searchVideo(term) {
    YTSearch({key: GOOGLE_API_KEY, term: term}, (videos) => this.setState({ videos, selectedVideo: videos[0] }));
  }

  getSelectedVideo = (selectedVideo) => {
    this.setState({ selectedVideo })
  }


  render() {
    const { videos, selectedVideo } = this.state;

    const searchVideo = _.debounce( (term) => {this.searchVideo(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={searchVideo} />
        <VideoDetail video={selectedVideo} />
        <VideoList
          videos={videos}
          onVideoSelect={ this.getSelectedVideo }
        />
      </div>
    );
  }

}
