import React, { Component } from 'react'
import Fiter from './Fiter'

export default class WelComeAdmin extends Component {
    constructor (props){
        super(props)
        this.state ={
            YourAge:true,
        }
    }
  render() {
    let Ami
    if(this.state.YourAge){
        Ami = "Welcome to our Admin Panner"
    }else{
        Ami = <Fiter />
    }
    return (
      <div>
        {Ami}
      </div>
    )
  }
}
