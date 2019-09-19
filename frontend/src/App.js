import React, { Component } from "react";
import { ToastContainer } from "react-toastify";

import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notfound";
import NavBar from "./components/navbar/navBar";
import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/register/registerForm";
import UserDashboard from "./components/user/userDashboard";
import Logout from "./components/login/logout";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser;
    this.setState({user});
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/logout" component={Logout}></Route>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/User" component={UserDashboard}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/" exact component={Home}></Route>
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

// class App extends Component {
//   state = {
//     posts:[]
//   };

//   async componentDidMount(){
//     const {data:posts} = await httpService.get(config.apiEndpoint);
//     this.setState({posts});
//   };

// }

// export default ;
export default App;
