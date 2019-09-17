import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (      
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="form-signin" width="400">
        <img class="mb-4" src="SerlerLogo.png" alt="" width="100" height="100"/>
        <h1>Login</h1>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
        </React.Fragment>
    );
  }
}

export default LoginForm;
