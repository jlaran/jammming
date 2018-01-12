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
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
  	if(this.state.playlistTracks.some(elem => elem.id !== track.id)){
  		this.state.playlistTracks.push(track);
  	}
  }

  removeTrack(track) {
  	function idToRemove(element) {
	  return element.id === track.id;
	}

  	let idRemove = this.state.playlistTracks.find(idToRemove);

  	var i = this.state.playlistTracks.indexOf(idRemove);
	if(i != -1) {
		this.state.playlistTracks.splice(i, 1);
	}
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName : name
    });
  }

  handleNameChange(event){
  	this.onNameChange(event);
  }

  savePlaylist(){
  	let trackURIs;
  	this.state.playlistTracks.map(element => {
  		trackURIs.push(element.uri);
  	})
  }

  search(searchTerm){
  	console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.searchResults} onAdd={this.addTrack} onRemove={this.onRemove}/>
            <Playlist PlaylistTracks={this.state.playlistName} PlaylistName={this.state.playlistTracks} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
