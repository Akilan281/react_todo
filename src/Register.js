import React, { Component } from "react";
import { Router, Route } from 'react-dom'
import "./App.css";
import "./register.css";

class Register extends Component {
    state = { username: "", Mobilenumber: "", Password: "" }

    handleuser = (event) => {
        this.setState({ username: event.target.value })
    }
    handlepass = (event) => {
        this.setState({ password: event.target.value })
    }
    handlemobile = (event) => {
        this.setState({ Mobilenumber: event.target.value })
    }

    handleclick = () => {
        if (this.state.password.length > 3, this.state.username.length > 3) {
            let userList = []
            let savedUserList = JSON.parse(localStorage.getItem('userList'))
            console.log('savedUserList', savedUserList)
            if (savedUserList && savedUserList.length)
                userList = savedUserList

            let userDetails = {}
            userDetails.name = this.state.username;
            userDetails.password = this.state.password
            userDetails.mobile = this.state.Mobilenumber

            let UserRegistered = false

            userList.map((item) => {


                if (item.name == userDetails.name)
                    UserRegistered = true
            }

            )

            if (UserRegistered) {
                alert('Exist')
            }
            else {

                userList.push(userDetails)
                console.log('userList', userList)
                localStorage.setItem('userList', JSON.stringify(userList));
                this.props.history.push('/Login')
            }
        }
    }

    render() {

        return (
            <div>
                <div>
                    <h1>Welcome to Register</h1>
                </div>


                <div className="register-form">
                    <h2>Register</h2>
                    <div className="form-group">
                        <input type="text" placeholder="Username" required="required" value={this.state.username}
                            onChange={this.handleuser} className="form-control">

                        </input>

                    </div>
                    <div className="form-group">
                        <input type="Password" placeholder="Password" required="required" value={this.state.password}
                            onChange={this.handlepass} className="form-control">

                        </input>
                    </div>
                    <div className="form-group">
                        <input type="Number" placeholder="Mobile" required="required" value={this.state.Mobilenumber}
                            onChange={this.handlemobile} className="form-control">

                        </input>
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={this.handleclick} className="btn btn-primary btn-block">Submit</button>
                    </div>

                </div>
            </div>
        );




    }





}

export default Register;