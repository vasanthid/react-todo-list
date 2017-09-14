import React, { Component } from 'react'

class TodoInput extends Component {
  
  constructor(props, context) {
      super(props, context);
      this.state = {
          inputText: ""
      }
  }

  handleChange(event) {
      this.setState({
            inputText: event.target.value
      });
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log('submit clciked');
      this.props.addTodo(this.state.inputText)
  }

  render () {
      return (
          <div>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" 
                value={this.state.inputText} 
                placeholder="Enter a todo item"
                onChange={this.handleChange.bind(this)}/>

                <input type="submit" text="Submit" />
            </form>
          </div>
          
      )
  }
}

export default TodoInput