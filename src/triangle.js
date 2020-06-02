import React from 'react';
class Triangle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "Triangle",
        }

    }
    render(){
        return (
            <button type="button" id="tri">
                {this.state.name}
            </button>
        )
    }
}

export default Triangle;