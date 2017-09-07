import React, { Component } from 'react'

class TextDisplay extends Component {
   render() {

       return (
           <div>{this.props.displayText}</div>
       )
   }
}

export default TextDisplay