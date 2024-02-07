import React, { Component } from 'react'

export default class About extends Component {
    state ={
        name:"Sabbir",
        age:24,
        Prof:"Programmer"
    }

    ChangeValue(){
        this.setState(
            {
                Prof:"Freelancing"
            }
        )
    }
  render() {
    return (
      <div>
        {/* <h3>{"My name is " + this.state.name + " & My Profession is " + this.state.Prof}</h3> */}
        <h2>My Profession is {this.state.Prof} </h2>
        <button onClick={this.ChangeValue.bind(this, this.Prof)}>Change Value</button>
      </div>
    )
  }
}
