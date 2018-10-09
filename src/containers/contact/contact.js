import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class ContactUs extends Component {

    constructor(props){
        super(props);
    }

    login() {
        console.log("Login clicked")
    }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
            This is ContactUs page
        </p>
      </div>
    );
  }


    componentDidMount() {
        this.timerId = setInterval(()=>{
        this.tick()
        }, 1000)
    }

    componentWillUnmount() {
    }
    tick() {
        console.log("Tick:"+ new Date());
    }
}

export default ContactUs;
