import React from 'react';
import Stripe from './Stripe'

class Stripes extends React.Component {

    imagesTable;

    getRandomFigure() {
        let r = Math.floor((Math.random() * this.props.figures.length))
        return this.props.figures[r]
    }

    getImagesTable() {
        if (!this.imagesTable) {
            this.imagesTable = []
            for (var i=0; i < this.props.rows; i++) {
                let stripeImages = []
                for (let j=0; j < this.props.cols; j++) {
                    stripeImages.push(this.getRandomFigure())
                }
                this.imagesTable.push(stripeImages)
            }
        }
        return this.imagesTable;
    }

    render() {
        let rows = this.getImagesTable().map(stripe => <Stripe images={stripe} key={stripe}/>)
        return <div>{rows}</div>
    }
}

export default Stripes;