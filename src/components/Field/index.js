import React, { Component } from 'react'
export default class Field extends Component {
  render() {
    console.log(this.props);
    return (
        <div style={{display: 'flex',margin: '10px'}}>
            <label style={{width:'100px',display: 'block'}}>{this.props.label}: </label>
            <input style={{ width: '200px', height: '25px', padding: '0px 5px' }} type={this.props.type} onChange={(event) => {
                this.props.onChangeEvent1(event.target.value)
            }} value={this.props.value}/>
      </div>
    )
  }
}
