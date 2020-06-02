import React from 'react';
import Square from "./square.js";
import Rectangle from "./rectangle.js"
import Triangle from "./triangle.js"


// Creates Car class
class Controls extends React.Component {

    constructor(){
        super()
        this.state = {
            name: "Controls",
            style: {
              backgroundColor: "#f4f4f4",
              padding: "10px",
              fontFamily: "Arial",
              width: "100vw"
            }
        }

    }
    render(){
        return (
          <div style={this.state.style}>
            <Square/> <Rectangle /> <Triangle />
          </div>
        )
    }
}

export default Controls;