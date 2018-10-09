import React, { Component } from 'react';
import './login.css'

class Login extends Component {

    constructor(props){
        super(props);
    }

    login() {
        console.log("Login clicked")
    }

  render() {
    return (
      <div className="login login-frame">
           User Name:  <input type="text" name="uname"></input>
           Password:  <input type="password" name="password"></input>
           <button type="button" onClick={this.login}>Login</button>
      </div>
    );
  }


    componentDidMount() {
        this.timerId = setInterval(()=>{
        this.tick()
        }, 1000)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called")
    }
    tick() {
        console.log("Tick:"+ new Date());
    }
}

export default Login;
