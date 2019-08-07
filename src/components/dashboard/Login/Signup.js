import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { signup } from "../../../actions";

import { tablet, phone } from "../cssVariables";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 85%;
  max-width: 962px;
  // display: flex;
  margin: 4em auto;

  align-items: center;
  flex-direction: row;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  background-color: #fff;

  @media ${tablet} {
    flex-direction: column;
    width: 90%;
    box-shadow: none;
    .cta-content {
      display: none;
    }
  }
  .cta-content {
    width: 60%;
    padding: 0 2em;
    h1 {
    }
  }
  .register-main {
    width: 40%;
    border-left: 1px solid #efefef;
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
        background: black;
      }
    }
  }

  .logo {
    padding: 0.5em 0 0 1em;
  }
`;
class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    isDeveloper: true
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signup({ ...this.state }).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <SignupContainer className="Signup-container">
        <div className="cta-content">
          <h1>A smarter way to trade.</h1>
        </div>
        <div className="Signup-main">
          <h1>Get Started.</h1>
          <form
            className="Signup-form"
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
              type="text"
              name="name"
              placeholder="Username"
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
            <button type="submit">Sign Up</button>
            <div className="alternative-cta">
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </SignupContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignuping: state.isSignuping,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { signup }
)(Signup);
