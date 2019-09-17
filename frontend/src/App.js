import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import NotFound from "./components/notfound";
import NavBar from "./components/navbar/navBar";
import LoginForm from "./components/login/loginForm";
import RegisterForm from "./components/register/registerForm";
import "./App.css";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" exact component={Home}></Route>
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
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
