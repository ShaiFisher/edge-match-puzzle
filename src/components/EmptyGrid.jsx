import React from 'react';

class EmptyGrid extends React.Component {

    render() {
        let cols = []
        for (let i=0; i<this.props.dim; i++) {
            cols.push(<td className="empty-cell" key={i}>&nbsp;</td>)
        }
        let rows = []
        for (let i=0; i<this.props.dim; i++) {
            rows.push(<tr key={i}>{cols}</tr>)
        }
        return <table border="1"><tbody>{rows}</tbody></table>
    }
}

export default EmptyGrid;