import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Switch from "react-switch";
import { signup } from "../../../redux/actions";
const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
  }
  width: 85%;
  max-width: 962px;
  font-size: 2rem;
  button {
    background: black;
    color: white;
    width: 200px;
    height: 100px;
    font-size: 2rem;
  }
  a {
    font-size: 1.3rem;
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
  handleCheckbox = e => {
    this.setState({
      isDeveloper: !this.state.isDeveloper
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signup({ ...this.state });
  };

  render() {
    return (
      <SignupContainer className="Signup-container">
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
            <label>
              <span>Sign up as a Developer? </span>
              <Switch
                onChange={this.handleCheckbox}
                checked={this.state.isDeveloper}
              />
            </label>
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
    isSigningup: state.isSigningup,
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { signup }
)(Signup);
