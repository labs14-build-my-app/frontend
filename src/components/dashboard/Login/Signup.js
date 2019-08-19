import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { signup } from "../../../redux/actions";

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

          .field-title{
            display: inline-block;
            margin: 0 0 3rem;
          }

          input{
            width: 100%
            box-sizing: border-box; // fixes the issue where it expands out of the box model by 1.3px on the right
            background: transparent;
            border: 0;
            padding: 0 .5rem 2rem;
            border-bottom: 2px solid ${textColor1};

            ::placeholder{
              font-size: ${headerFontDesktop};
            }

          }

          // animation's for the text-box bottom border

          .input-box ~ .input-border{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: .26rem; // makes a slightly visable diffrence that lets users know they have clicked the text box
            background-color: ${electricViolet};
            transition: 0.4s;}

          .input-box:focus ~ .input-border{
            width: 100%;
            transition: 0.4s;
          }

        }

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
    url('${process.env.PUBLIC_URL + "/images/heros/login-signup-hero.jpg"}');

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

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isDeveloper: false
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
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
                  <span className="field-title"> First Name </span> <br />
                  <input className="input-box" type="text" name="firstName" placeholder="What's your first name?" onChange={this.handleChanges} value={this.state.value} />
                  <span className="input-border"> </span>
                </div>

                <div className="input-field">
                  <span className="field-title"> Last Name </span> <br />
                  <input className="input-box" type="text" name="lastName" placeholder="What's your last name?" onChange={this.handleChanges} value={this.state.value} />
                  <span className="input-border"> </span>
                </div>

                <div className="input-field">
                  <span className="field-title"> Email </span> <br />
                  <input className="input-box" type="text" name="email" placeholder="We'll ask you to verify your account here." onChange={this.handleChanges} value={this.state.value} />
                  <span className="input-border"> </span>
                </div>

                <div className="input-field">
                  <span> Password </span> <br />
                  <span>We recommend using the password we generated for you below, its super secure.</span> <br />
                  <input className="input-box" type="password" name="password" placeholder="password" onChange={this.handleChanges} value={this.state.value} />
                  <span className="input-border"> </span>
                </div>

                

                <Link to={{
                 pathname: "/signup2",
                 state: {
                   ...this.state,
                 }
                }}>Create Account</Link>


              </form>
            </div>
            <span>Already have an account?</span>
            <NavLink to='/Login'>Log in.</NavLink>
            <p>Legal Notice: By Creating an account on Dev Findr, you are agreeing to our terms of service agreement which can be found here.</p>
          </div>
        </LeftContainer>

        {/* Heres the content for the right side of the page */}

        <RightContainer>
          <div className="r-container">
            {/* The background and gradient are applied using styled components */}
            <div className="text">
              <h1> Plan Together, <br />
                Succeed Together.</h1>
              <p> Our Unique Project Proposal System allows both developers and <br />
                entreprenuer't to effectively brainstorm ideas, <br />
                set goals and deliver results. </p>
            </div>
          </div>
        </RightContainer>
      </LoginPageContainer>
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
