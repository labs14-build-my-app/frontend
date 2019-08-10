import React, { Component } from "react";

import { connect } from "react-redux";
import { login } from "../../../redux/actions";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { phone, tablet } from "../cssVariables";
const LoginContainer = styled.div`
  .__Form {
    width: 100%;
    display: flex;
    flex-direction: column;

    input {
      font-size: 16px;
      margin-bottom: 24px;
      padding: 8px;
    }

    button {
      font-size: 16px;
      margin-bottom: 24px;
      padding: 8px;
      text-transform: uppercase;
      font-weight: bold;
      color: white;
      background: black;
    }
  }

  .cta-content {
    font-size: 3.5rem;
    line-height: 2;
    width: 90%;
    margin: 0 auto;
    algin-self: center;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 85%;
  max-width: 962px;
  // display: flex;
  margin: 4em auto;

  align-items: center;
  flex-direction: row-reverse;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: #fff;

  @media (max-width: 1081px) {
    flex-direction: column;
    width: 90%;
    box-shadow: none;
    .cta-content {
      ${"" /* display: none; */}
      h1 {
        font-size: 3.5rem;
        line-height: 2;
        width: 90%;
      }
    }
  }
  .cta-content {
    width: 60%;
    padding: 0 2em;
    h1 {
    }
  }
  .login-main {
    width: 40%;
    border-right: 1px solid #efefef;
    padding: 1em;
    margin: 0 auto;
    padding: 4em 2em;
    @media ${tablet} {
      border: 0px;
      width: 60%;
    }
    @media ${phone} {
      width: 100%;
    }
    .alternative-cta {
      width: 90%;
      a {
        color: #0993fc;
        text-decoration: none;
      }
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      input {
        font-size: 16px;
        margin-bottom: 20px;
        padding: 8px;
      }

      button {
        font-size: 16px;
        margin-bottom: 24px;
        padding: 8px;
        text-transform: uppercase;
        font-weight: bold;
        color: white;
        background: red;
      }
    }
  }
`;

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
    this.props.login({ ...this.state });
    this.props.history.push("/dev/dashboard");
    //if user.type === entrepreneur
    // this.props.history.push('/entrepreneur/dashboard');
    // localStorage.setItem("token", {...this.state})
  };

  render() {
    if (localStorage.getItem("user")) {
      this.props.history.push("/dev/dashboard");
    }
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
              {console.log(this.props)}
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
  return {};
};
export default connect(
  mapStateToProps,
  { login }
)(Login);
