import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions'
import UserInfo from './UserInfo'


class App extends Component {
  render() {
      return (
          <div>
            <h1>To do List </h1>
            <UserInfo user={this.props.user} actions={this.props.actions}/>
            <TodoInput addTodo={this.props.actions.addTodo}/>
            <TodoList actions={this.props.actions} todos={this.props.todos}/>
          </div>
      )
  }
}

function matchStateToProps(state) {
    return state;
}

function matchDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(matchStateToProps, matchDispatchToProps)(App)