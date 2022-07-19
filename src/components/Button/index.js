import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        <div>
            <button style={{cursor:'pointer','marginRight':'20px'}} type={this.props.type} onClick={this.props.event1}  >{this.props.value}</button>
      </div>
    )
  }
}
