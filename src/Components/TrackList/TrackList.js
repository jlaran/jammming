import React, { Component } from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends Component {
  render() {
  	// console.log(this.props)
    return (
		<div className="TrackList">
			{
				this.props.tracks.map(track => {
					return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />
				})
			}
		</div>
    );
  }
}

export default TrackList;