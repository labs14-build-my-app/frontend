import React, { Component } from "react";

import { connect } from "react-redux";
import { login } from "../../../redux/actions";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { phone, tablet } from "../cssVariables";

// const LoginContainer = styled.div`
// `;

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.login({ ...this.state }).then(() => {
    //     this.props.history.push('/');
    // });
    //if user.type === dev
    this.props.login({ ...this.state }).then((res)=>{
      console.log('Login.js Says: ' + res)
      this.props.history.push("/");
    });
   
  };

  render() {
   
    return (
      <LoginContainer className="login-container">
        <div className="cta-content">
          <h1>
            Meet DevFindr.
            <br /> Sign up for free.
          </h1>
        </div>
        <div className="login-main">
          <h1 className="login-title">{/* Sign up */}</h1>

          <form
            className="LogIn__Form"
            onSubmit={this.handleSubmit}
            autoComplete="off"
          >
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={this.handleChanges}
              value={this.state.value}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChanges}
              value={this.state.value}
            />
            <button type="submit">
              {this.props.isLoggingIn ? <BeatLoader /> : "Sign In"}
            </button>
            <div className="alternative-cta">
              <p>Don't have a localStorage.getItem('token') yet? </p>
              <Link to="/signup">Register</Link>
            </div>
          </form>
        </div>
      </LoginContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    user: state.user,
    loggingIn: state.loggingIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
