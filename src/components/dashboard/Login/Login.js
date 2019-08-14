import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../../redux/actions";

import styled from "styled-components";
import { headerFontDesktop } from "../cssVariables";
import { BeatLoader } from "react-spinners";

const LoginPageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  display: nowrap;
  border: 1px solid red;
  font-size: ${headerFontDesktop};
  height: 1080px; // temporary
`;

const LeftContainer = styled.div`
  width: 45%;
  height: 100%;
  border: 1px solid yellow;

  .l-container{
    border: 1px solid green;
    height: 100%;
    nav{
      border: 1px solid purple;

      ol{
        list-style-type: none;
        padding-left: 0;
      }

      li{
        display: inline-block;

        :first-child{
        }

        :nth-child(2){

        }

        :nth-child(3){

        }

      }
    }
  }
`;

const RightContainer = styled.div`
  width: 50%;
  height: 100%;

  .r-container{
    height: 100%;
    border: 1px solid blue;
    background:
    /* gradient overlay */
    linear-gradient(61deg, rgba(24, 7, 94, .7), rgba(149, 25, 232, .7)),
    /* bottom image */
    url('https://images.unsplash.com/photo-1549692520-acc6669e2f0c');

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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
    this.props.login({ ...this.state }).then((res)=>{
      console.log('Login.js Says: ' + res)
      this.props.history.push("/");
    });
   
  };

  render() {
   
    return (
      <LoginPageContainer className="page-container">
        <LeftContainer>
          <div className="l-container">
            <nav>
              <ol>
                <li><NavLink to='/Login'>Login</NavLink></li>
                <li>or</li>
                <li><NavLink to='/Signup'>Sign Up</NavLink></li>
              </ol>
            </nav>
            <div className='form'>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="email" placeholder="What's the email you registered with?" onChange={this.handleChanges} value={this.state.value} />
                <input type="password" name="password" placeholder="What's the password for your account?" onChange={this.handleChanges} value={this.state.value} />
                <button type="submit" >
                  {this.props.isLoggingIn ? <BeatLoader /> : "Login" }
                </button>
              </form>

              <div className="forgot-password">
                Forgot your password? <NavLink to='/ChangePassword'>Change it here.</NavLink>
                </div>
            </div>
          </div>
        </LeftContainer>

          {/* Heres the content for the right side of the page */}

        <RightContainer>
          <div className="r-container">
            {/* The background and gradient are applied using styled components */}
            <h1> Plan Together, <br/>
            Succeed Together.</h1>
            <h3> Our Unique Project Proposal System allows both developers and <br/>
            entreprenuer't to effectively brainstorm ideas, <br/>
            set goals and deliver results. </h3>
          </div>
        </RightContainer>
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
