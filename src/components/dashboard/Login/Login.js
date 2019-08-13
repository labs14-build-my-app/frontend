import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../../redux/actions";

import styled from "styled-components";
import { headerFontDesktop } from "../cssVariables";
import { BeatLoader } from "react-spinners";

const LoginPageContainer = styled.div`
  display: flex;
  border: 1px solid red;
  padding: 10rem 10rem;
  font-size: ${headerFontDesktop};

  // Left Side of the page
  .left{
    border: 1px solid green;
    width: 50%;

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

  //Right Side of the page
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

          {/* Heres the content for the right side of the page */}

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
