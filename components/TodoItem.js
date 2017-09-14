import React, { Component } from 'react'
import actions from '../redux/actions'

class TodoItem extends Component {


  handleDelete() {
      console.log('delete clicked for id', this.props.todo.id);
      this.props.actions.deleteTodo(this.props.todo.id);
  }

  handleComplete() {
       console.log('complete clicked for id', this.props.todo.id);
       this.props.actions.completeTodo(this.props.todo.id);
  }
  render () {
      return (
         <li>
          <input type="checkbox" value={this.props.todo.completed} onClick={this.handleComplete.bind(this)}/>
          {this.props.todo.text} 
          <button onClick={this.handleDelete.bind(this)}>delete</button>
        </li>
      )
  }
}

export default TodoItem