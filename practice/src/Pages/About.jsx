import React, { Component } from 'react'

export default class About extends Component {
    state ={
        name:"Sabbir",
        age:24,
        Prof:"Programmer"
    }
  render() {
    return (
      <div>
        <h3>{"My name is " + this.state.name + " & My Profession is " + this.state.Prof}</h3>
      </div>
    )
  }
}
