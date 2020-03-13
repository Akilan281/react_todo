import React, { Component } from "react";
import { Router, Route } from 'react-dom'
import "./App.css";
import "./style.css";


class Login extends Component {


  state = { username: "", password: "" }
  handleChange(e) {
    console.log(event.target.value)
    this.setState({ username: event.target.value });
  }

  handleChain = (event) => {
    this.setState({ password: event.target.value });
  }

  handlesubmit = () => {

    let userList = []
    let saveduserList = JSON.parse(localStorage.getItem('userList'))
    if (saveduserList && saveduserList.length)
      userList = saveduserList;

    let userExist = false
    userList.map((item) => {
      if (item.name == this.state.username && item.password == this.state.password)
        userExist = true
    })

    if (userExist)
      this.props.history.push('/')
    else
      alert('Invalid details')
  }


  render() {

    return (

      <div className=" Login-form">

        <h2>LOGIN</h2> <br />
        <div className="form-group">
          <input type="text" placeholder="Username" className="form-control"
            required="required" value={this.state.username} onChange={e => this.handleChange(e.target.value)}></input><br />
        </div>
        <div className="form-group">
          <input type="Password" placeholder="password" className="form-control" required="required"
            value={this.state.password} onChange={this.handleChain}></input>

        </div>
        <div className="form-group" ><button type="submit" className="btn btn-primary btn-block" onClick={this.handlesubmit}>Login</button></div>
        <div className="check">
          <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me </label>
          <a href="#" className="pull-right">Forgot Password?</a>
        </div>


      </div>

    );
  }

}
export default Login;