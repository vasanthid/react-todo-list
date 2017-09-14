import React, { Component } from 'react'

class UserInfo extends Component {


  generateId() {
       console.log('generateId clicked')
       this.props.actions.generateId()
  }

  generateIdIfOdd() {
       console.log('generateIdIfOdd clicked')
       this.props.actions.generateIdIfOdd()
  }

  generateIdAsync() {
       console.log('generateIdAsync clicked')
       this.props.actions.generateIdAsync()
  }

  render () {
      return (
         <div>
            User Name: {this.props.user.username}
            Id:  {this.props.user.id}
            <button onClick={this.generateId.bind(this)}> Generate New Id </button>
            <button onClick={this.generateIdIfOdd.bind(this)}> Generate New Id if Odd</button>
            <button onClick={this.generateIdAsync.bind(this)}> Generate New Id Async</button>
        </div>
      )
  }
}

export default UserInfo