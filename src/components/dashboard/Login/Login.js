import React, { Component } from "react";

import { connect } from "react-redux";
import { login } from "../../../redux/actions";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { phone, tablet } from "../cssVariables";

const LoginPageContainer = styled.div`
  display: flex;
  border: 1px solid red;
  padding: 10rem 10rem;

  .left{
    border: 1px solid green;
    width: 50%;
  }

  .right{
    border: 1px solid blue;
    width: 50%;
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
    this.props.login({ ...this.state }).then((res)=>{
      console.log('Login.js Says: ' + res)
      this.props.history.push("/");
    });
   
  };

  render() {
   
    return (
      <LoginPageContainer className="page-container">
        <div className="left">
          left content
        </div>
        <div className="right">
          right content
        </div>
      </LoginPageContainer>
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
