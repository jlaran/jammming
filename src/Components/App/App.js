import React, { Component } from 'react';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "aaa", artist: "aaa", album: "aaaa" },
        { name: "aaa", artist: "aaa", album: "aaaa" },
        { name: "aaa", artist: "aaa", album: "aaaa" }
      ],
      playlistName: "Some Name",
      playlistTracks: [
        { name: "eeee", artist: "eeee", album: "eeee" },
        { name: "ffff", artist: "ffff", album: "ffff" },
        { name: "gggg", artist: "gggg", album: "gggg" }
      ] 
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    this.state.playlistTracks.map(song => {
      if (song.id !== track.id) {
        this.state.playlistTracks.push(track);
      }
    })
  }

  removeTrack(track) {
    
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.searchResults} onAdd={this.addTrack} onRemove={this.onRemove}/>
            <Playlist PlaylistTracks={this.state.playlistName} PlaylistName={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
