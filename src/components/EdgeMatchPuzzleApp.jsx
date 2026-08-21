import React from 'react';
import Stripes from './Stripes'
import EmptyGrid from './EmptyGrid'

class EdgeMatchPuzzleApp extends React.Component {
  render() {
    return (
        <div className="wrap">
            <div className="wrap-sub stripes-a">
                <Stripes rows="4" cols="3" figures={this.props.figures}/>
            </div>
            <div className="wrap-sub stripes-b">
                <Stripes rows="3" cols="4" figures={this.props.figures}/>
            </div>
            <div className="wrap-sub">
                <EmptyGrid dim={this.props.dimensions}/>
            </div>
        </div>
    );
  }
}

export default EdgeMatchPuzzleApp;