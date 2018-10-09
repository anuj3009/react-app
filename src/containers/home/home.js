import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class Home extends Component {

    constructor(props){
        super(props);
    }

    login() {
        console.log("Login clicked")
    }

  render() {
    return (
      <div className="App">
       This is home page
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

export default Home;
