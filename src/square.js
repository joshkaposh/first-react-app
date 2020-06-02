import React from 'react';
// Creates Car class
class Square extends React.Component {

    constructor(){
        super()
        this.state = {
            name: "Square",
        }

    }
    render(){
        return (
            <button type="button" id="sqr">
                {this.state.name}
            </button>
        )
    }
}

export default Square;