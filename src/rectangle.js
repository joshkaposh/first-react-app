import React from 'react';
// Creates Car class
class Rectangle extends React.Component {

    constructor(){
        super()
        this.state = {
            name: "Rectangle",
        }

    }
    render(){
        return (
            <button type="button" id="rect">
                {this.state.name}
            </button>
        )
    }
}

export default Rectangle;