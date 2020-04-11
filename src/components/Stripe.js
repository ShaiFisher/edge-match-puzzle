import React from 'react';
import Square from './Square'

class Stripe extends React.Component {

    render() {
        var squares = this.props.images.map((image, index) => <Square image={image} key={index}/>)
		return <div className="stripe">{squares}</div>
    }
}

export default Stripe;