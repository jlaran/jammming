import React, { Component } from 'react';
import './App.css';
import Spotify from '../../util/Spotify.js';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { id:'1', name: "aaa", artist: "aaa", album: "aaaa" },
        { id:'2', name: "bbb", artist: "bbb", album: "bbb" },
        { id:'3', name: "ccc", artist: "ccc", album: "ccc" }
      ],
      playlistName: "Some Name",
      playlistTracks: [
        { id:'4', name: "eeee", artist: "eeee", album: "eeee" },
        { id:'5', name: "ffff", artist: "ffff", album: "ffff" },
        { id:'6', name: "gggg", artist: "gggg", album: "gggg" }
      ] 
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {

  	let trackExist = false;

	for (let song of this.state.playlistTracks) {
		if(song.id === track.id){
			console.log("The song is already on the Playlist");
			trackExist = true;
			break;
		} else {
			trackExist = false;
		}
	}

	if (trackExist == false) {
		let arrayPlaylist = this.state.playlistTracks;
		arrayPlaylist.push(track);
		this.setState({
			playlistTracks : arrayPlaylist
		});
	}
  }

  removeTrack(track) {

  	function idToRemove(element) {
	  return element.id === track.id;
	}

  	let idRemove = this.state.playlistTracks.find(idToRemove);

  	let arrayPlaylist = this.state.playlistTracks;

  	var i = this.state.playlistTracks.indexOf(idRemove);
	if(i != -1) {
		arrayPlaylist.splice(i, 1);
	}
	this.setState({
		playlistTracks : arrayPlaylist
	});

  }

  updatePlaylistName(name) {
    this.setState({
      playlistName : name
    });
  }

  savePlaylist(){
  	Spotify.savePlaylist();
	this.setState({
      playlistName : 'New Playlist',
      searchResults : []
    });
  }

  search(searchTerm){
  	console.log(searchTerm)
  	this.setState({
      searchResults : Spotify.search(searchTerm)
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;