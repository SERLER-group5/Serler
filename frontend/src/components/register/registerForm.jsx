import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as userService from '../../services/userService';
import * as genderService from '../../services/genderService' ;

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    genders: [],
    errors: {}
  };

  async componentDidMount() {
    const {data:genders} = await genderService.getGenders();
    console.log(genders);
    this.setState(genders);
  }

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name"),
      genderId: Joi.string()
      .required()
      .label("Gender"),
  };

  doSubmit = async () => {
    // Call the server
    await userService.register(this.state.data);
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderSelect("genderId", "Gender", this.state.genders)}

          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
