import React, { Component } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
	onchangeInput() {
		
	}

	render() {
		return (
			<div className="Playlist">
			  <input value={'New Playlist'} onChange={this.onchangeInput}/>
			  <TrackList tracks={this.props.PlaylistTracks} />
			  <a className="Playlist-save">SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

export default Playlist;
