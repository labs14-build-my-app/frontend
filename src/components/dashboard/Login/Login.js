import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { login } from "../../../redux/actions";

import styled from "styled-components";
import { headerFontDesktop, h1, electricViolet, veryLightBlue, textColor1, textColor2, textBox, losLinks, projectFontSubtext, losTransitionTime, losBackground, kkk } from "../cssVariables";
import { BeatLoader } from "react-spinners";

const LoginPageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  display: nowrap;
  font-size: ${headerFontDesktop};
  height: 1080px; // temporary

  a{
    text-decoration: none;
    color: ${textColor2};

      :visited{
        text-decoration: none;
      }

      :hover{
        color: ${electricViolet};
        transition: ${losTransitionTime};
      }
  }

`;

const LeftContainer = styled.div`
  width: 45%;
  height: 100%;
  background: ${veryLightBlue};

  .l-container{
    margin: 17rem 15.5rem 0;
    height: 100%;

    nav{

      ol{
        list-style-type: none;
        padding-left: 0;
      }

      li{
        display: inline-block;
        font-size: ${losLinks};

        .active{
          color: ${electricViolet};
        }


        :nth-child(2){
          font-size: ${projectFontSubtext};
          padding: 0 1.8rem 0;
          color: ${textColor2};
        }

      }

    }

    .form{
      font-size: ${headerFontDesktop};
      margin: 20.3rem 0 0;


      input:focus{
        outline: none;
      }

      form{
        display: flex;
        flex-direction: column;

        .input-field{
          position: relative;
          float: left;
          width: 100%;
          margin: 0 0 3rem;

          .field-title{
            display: inline-block;
            margin: 0 0 3rem;
          }

          input{
            width: 100%;
            height: 4.2rem; // prevents text from clipping
            box-sizing: border-box; // fixes the issue where it expands out of the box model by 1.3px on the right
            background: transparent;
            border: 0;
            padding: 0 .5rem 2rem;
            border-bottom: 2px solid ${textColor1};

            ::placeholder{
              font-size: ${headerFontDesktop};
            }

          }

          /* password visibility icon */

          .toggle-visability{
            position: relative;
            float: right;
            margin: -2.5rem;
          }

          /* animation's for the text-box bottom border */

          .input-box ~ .input-border{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: .26rem; 
            background-color: ${electricViolet};
            transition: ${losTransitionTime};
            }

          .input-box:focus ~ .input-border{
            width: 100%;
            transition: ${losTransitionTime};
          }

        }

        button{
          margin: 1rem 0 0;
          font-size: 1.6rem;
          color: #fff;
          background: ${electricViolet};
          box-shadow: 5px 5px 8px rgba(149, 25, 232, 0.16);
          border-radius: .6rem;
          height: 5.5rem;
        }

        }

      }
    }

    .forgot-password{
      text-align: center;
      margin: 3rem 0 0;
          
    }
`;

const RightContainer = styled.div`
  width: 55%;
  height: 100%;

  .r-container{
    height: 100%;
    
    ${losBackground};

    .text{
      padding-top: 40%;
      color: ${privilege};
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

const showPass = <img src={process.env.PUBLIC_URL + '/images/icons/icon_Eye_slash.svg'} />;
const hidePass = <img src={process.env.PUBLIC_URL + '/images/icons/icon_Eye_visable.svg'} />;

class Login extends Component {
  state = {
    email: "",
    password: "",
    password_hidden: true,
  };

  togglePasswordVisibility = e => {
    e.preventDefault();
    this.setState({
      password_hidden: !this.state.password_hidden
    })
  }

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

        {/* content area for the left side of the page */}

        <LeftContainer>
          <div className="l-container">
            <nav>
              <ol>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li>or</li>
                <li><NavLink to='/signup'>Sign Up</NavLink></li>
              </ol>
            </nav>
            <div className='form'>
              <form onSubmit={this.handleSubmit}>

                <div className="input-field">
                  <span className="field-title"> Email </span> <br/>
                  <input className="input-box" type="text" name="email" placeholder="What's the email you registered with?" onChange={this.handleChanges} value={this.state.value} />
                  <span className="input-border"> </span>
                </div>

                <div className="input-field">
                  <span className="field-title"> Password </span> <br/>
                  <input className="input-box" type={this.state.password_hidden ? "password" : "text"} name="password" placeholder="What's the password for your account?" onChange={this.handleChanges} value={this.state.value} />
                  <button className="password-visibility" type="button" name="password_hidden" onClick={this.togglePasswordVisibility}> {this.state.password_hidden ? hidePass : showPass }</button>
                  <span className="input-border"></span>
                </div>

                <button type="submit" >
                  {this.props.isLoggingIn ? <BeatLoader /> : "Login" }
                </button>
              </form>

              <div className="forgot-password">
                <p>Forgot your password? <NavLink to='/ChangePassword'>Change it here.</NavLink></p>
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
