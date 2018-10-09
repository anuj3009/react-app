import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'

class Header extends Component {

    constructor(props){
        super(props);
    }

    login() {
        console.log("Login clicked")
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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

export default Header;
