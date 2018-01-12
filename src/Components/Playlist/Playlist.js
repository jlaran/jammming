import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
	constructor(props){
		super(props);
		this.onNameChange = this.props.onNameChange.bind(this);
	}
	
	render() {
		return (
			<div className="Playlist">
			  <input value={'New Playlist'} onChange={this.handleNameChange}/>
			  <TrackList tracks={this.props.PlaylistTracks} />
			  <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

export default Playlist;
