import React from 'react';

class Square extends React.Component {

    render() {
        return <img src={this.props.image} className="figure" alt=""/>
    }
}

export default Square;