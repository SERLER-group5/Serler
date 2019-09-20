import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import auth from "../../services/authService";

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

  doSubmit = async () => {
    // Call the server
    try {
      const {data} = this.state;
      await auth.login(data.email, data.password);
      window.location="/user";
    } catch (ex) {
      if(ex.response && ex.response.status === 400){
        const errors = {...this.state.errors};
        console.log(ex.response)
        errors.email = ex.response.data;
        console.log(errors.email);
        this.setState({errors});
      }
    }
    
  };

  render() {
    return (      
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="form-signin" width="400">
        <img className="mb-4" src="SerlerLogo.png" alt="" width="100" height="100"/>
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
