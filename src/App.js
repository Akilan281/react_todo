import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "./style.css";
import Home from "./Home";
import Login from "./Login";
import Register from './Register';



class App extends Component {

  render() {

    return (

      <Router>
        <div>
          <h1>React Router Example</h1>
          <nav>
            <ul className="lists">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Register"> Register</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>

            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </Router>
    );


  }
}
export default App;