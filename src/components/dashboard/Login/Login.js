import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../../redux/actions";

import styled from "styled-components";
import { headerFontDesktop, h1, electricViolet, veryLightBlue, textColor1, textColor2, textBox } from "../cssVariables";
import { BeatLoader } from "react-spinners";

const LoginPageContainer = styled.div`
border: 1px solid red;
  margin: 0 auto;
  display: flex;
  display: nowrap;
  font-size: ${headerFontDesktop};
  height: 1080px; // temporary
`;

const LeftContainer = styled.div`
  width: 45%;
  height: 100%;
  background: #F2F3FF;

  .l-container{
    margin: 17rem 15.5rem 0;
    height: 100%;

    border: 1px solid black;

    nav{

      ol{
        list-style-type: none;
        padding-left: 0;
      }

      li{
        display: inline-block;

        :first-child{
          font-size: 2.5rem;
        }

        :nth-child(2){
          font-size: 1.3rem;
          padding: 0 1.8rem 0;
        }

        :nth-child(3){
          font-size: 2.5rem;
        }

      }
    }

    .form{
      font-size: 1.8rem;
      margin: 20.3rem 0 0;

      form{
        display: flex;
        flex-direction: column;

        .input-field{
          float:left;
          width: 100%;
          position: relative;

          .field-title{
            display: inline-block; // spans dont have padding by default because they are inline elements
            padding: 0 0 2.8rem;
          }
          
          input:focus{
            outline: none; // removes browser-default focus styling
          }

          input{
            width: 100%;
            box-sizing: border-box; // fixes textbox from expanding its bounds by 1.3px;
            border: 0;
            padding: 1rem 0 1.3rem;
            border-bottom: .2rem solid ${textColor1};
            background: transparent;

            ::placeholder{
              font-size: ${headerFontDesktop};
            }
          }

          

        }

        }
        button{
          background: red;
        }
      }
    }
  }
`;

const RightContainer = styled.div`
  width: 55%;
  height: 100%;

  .r-container{
    height: 100%;
    background:
    /* gradient overlay */
    linear-gradient(61deg, rgba(24, 7, 94, .7), rgba(149, 25, 232, .7)),
    /* bottom image */
    url('https://images.unsplash.com/photo-1549692520-acc6669e2f0c');

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .text{
      padding-top: 40%;
      color: white;
      margin-left: 9rem;

      h1{
        font-size: ${h1};
        line-height: 6.9rem;
        padding: 0 0 2rem;
      }

      p{
        line-height: 3rem;
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

                <div className="input-field">
                  <span className="field-title"> Email </span> <br/>
                  <input type="text" name="email" placeholder="What's the email you registered with?" onChange={this.handleChanges} value={this.state.value} />
                  <span className="input-field-border"> </span>
                </div>

                <span> Password </span> <br/>
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
            <div className="text">
              <h1> Plan Together, <br/>
              Succeed Together.</h1>
              <p> Our Unique Project Proposal System allows both developers and <br/>
              entreprenuer't to effectively brainstorm ideas, <br/>
              set goals and deliver results. </p>
            </div>
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
