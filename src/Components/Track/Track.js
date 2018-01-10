import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  render() {
    return (
		<div className="Track">
		  <div className="Track-information">
		    
		  </div>
		  {
        this.renderAction()
      }
		</div>
    );
  }

  renderAction() {
  	if (this.isRemoval === true) {
  		return <a className="Track-action">-</a>;
  	} else {
  		return <a className="Track-action">+</a>;
  	}
  }
}

export default Track;
