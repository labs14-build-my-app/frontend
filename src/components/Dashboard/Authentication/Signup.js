import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { signup } from "../../../redux/actions";

import styled from "styled-components";
import {
  headerFontDesktop,
  h1,
  electricViolet,
  veryLightBlue,
  textColor1,
  textColor2,
  losLinks,
  projectFontSubtext,
  losTransitionTime,
  losBackground,
  privilege
} from "../cssVariables";

const SignupPageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  display: nowrap;
  font-size: ${headerFontDesktop};
  height: 100%;
  a {
    text-decoration: none;
    color: ${textColor2};
    :visited {
      text-decoration: none;
    }
    :hover {
      color: ${electricViolet};
      transition: ${losTransitionTime};
    }
  }
`;

const LeftContainer = styled.div`
  width: 45%;
  height: 100%vh;
  background: ${veryLightBlue};
  .l-container {
    width: calc(100% - 144px);
    margin: 0 auto;
    height: 100%;

    nav {
      padding-top: 5.0625em;

      ol {
        list-style-type: none;
        padding-left: 0;
      }

      li {
        display: inline-block;
        font-size: ${losLinks};

        .active {
          color: ${electricViolet};
        }
        :nth-child(2) {
          font-size: ${projectFontSubtext};
          padding: 0 1.8rem 0;
          color: ${textColor2};
        }
      }
    }

    .form {
      font-size: ${headerFontDesktop};
      margin: 20.3rem 0 0;

      input:focus {
        outline: none;
      }

      form {
        display: flex;
        flex-direction: column;

        .input-field {
          position: relative;
          float: left;
          width: 100%;
          margin: 0 0 3rem;

          .field-title {
            display: inline-block;
            margin: 0 0 3rem;
          }

          input {
            width: 100%;
            height: 4.2rem; /* prevents text from clipping*/
            box-sizing: border-box; /* fixes the issue where it expands out of the box model by 1.3px on the right */
            background: transparent;
            border: 0;
            padding: 0 0 2rem 0rem;
            border-bottom: 2px solid ${textColor1};
            font-size: ${headerFontDesktop};
            ::placeholder {
              font-size: ${headerFontDesktop};
            }
          }

          /* password visibility button */
          .password-visibility {
            position: absolute;
            float: right;
            top: 4.5rem;
            right: 2rem;
            z-index: 1;
          }

          /* animation's for the text-box bottom border */

          .input-box ~ .input-border {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 0.26rem;
            background-color: ${electricViolet};
            transition: ${losTransitionTime};
          }
          .input-box:focus ~ .input-border {
            width: 100%;
            transition: ${losTransitionTime};
          }
        }

        .submit-button {
          margin: 1rem 0 0;
          font-size: 1.6rem;
          color: #fff;
          background: ${electricViolet};
          box-shadow: 5px 5px 8px rgba(149, 25, 232, 0.16);
          border-radius: 0.6rem;
          height: 5.5rem;
        }

        .createacc-btn {
          text-align: center;
          padding: 15px;
          background: #9519e8;
          box-shadow: 5px 5px 8px #9519e8;
          border-radius: 6px;
          opacity: 1;
        }
      }
    }
    .btmlogin-txt {
      text-align: center;
      padding: 15px;
    }
  }
  .legal-txt {
    font: Italic 15px/19px Source Sans Pro;
    color: #43425d;
  }
`;

const RightContainer = styled.div`
  width: 55%;
  height: 100%;
  .r-container {
    height: 100vh;

    ${losBackground};
    .text {
      padding-top: 40%;
      color: ${privilege};
      margin-left: 9rem;
      h1 {
        font-size: ${h1};
        line-height: 6.9rem;
        padding: 0 0 2rem;
      }
      p {
        line-height: 3rem;
      }
    }
  }
`;

// const showPass = (
//   <img
//     src={process.env.PUBLIC_URL + "/images/icons/icon_Eye_slash.svg"}
//     alt="show password"
//   />
// );
// const hidePass = (
//   <img
//     src={process.env.PUBLIC_URL + "/images/icons/icon_Eye_visable.svg"}
//     alt="hide password"
//   />
// );

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

  togglePasswordVisibility = e => {
    e.preventDefault();
    this.setState({
      password_hidden: !this.state.password_hidden
    });
  };

  render() {
    return (
      <SignupPageContainer className="page-container">
        <LeftContainer>
          <div className="l-container">
            <nav>
              <ol>
                <li>
                  <NavLink to="/Login">Login</NavLink>
                </li>
                <li>or</li>
                <li>
                  <NavLink to="/Signup">Sign Up</NavLink>
                </li>
              </ol>
            </nav>
            <div className="form">
              <form>
                <div className="input-field">
                  <span className="field-title"> First Name </span> <br />
                  <input
                    className="input-box"
                    type="text"
                    name="firstName"
                    placeholder="What's your first name?"
                    onChange={this.handleChanges}
                    value={this.state.value}
                  />
                  <span className="input-border"> </span>
                </div>

                <div className="input-field">
                  <span className="field-title"> Last Name </span> <br />
                  <input
                    className="input-box"
                    type="text"
                    name="lastName"
                    placeholder="What's your last name?"
                    onChange={this.handleChanges}
                    value={this.state.value}
                  />
                  <span className="input-border"> </span>
                </div>

                <div className="input-field">
                  <span className="field-title"> Email </span> <br />
                  <input
                    className="input-box"
                    type="text"
                    name="email"
                    placeholder="We'll ask you to verify your account here."
                    onChange={this.handleChanges}
                    value={this.state.value}
                  />
                  <span className="input-border"> </span>
                </div>

                <div className="input-field">
                  <span className="field-title"> Password </span> <br />
                  <input
                    className="input-box"
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChanges}
                    value={this.state.value}
                  />
                  <span className="input-border"> </span>
                </div>

                <div className="createacc-btn">
                  <Link
                    to={{
                      pathname: "/signup2",
                      state: {
                        ...this.state
                      }
                    }}
                  >
                    Create Account
                  </Link>
                </div>
              </form>
            </div>
            <div className="btmlogin-txt">
              <span>Already have an account?</span>
              <NavLink to="/Login"> Log in.</NavLink>
            </div>
            <p className="legal-txt">
              Legal Notice: By Creating an account on Dev Findr, you are
              agreeing to our terms of service agreement which can be found
              here.
            </p>
          </div>
        </LeftContainer>

        {/* Heres the content for the right side of the page */}

        <RightContainer>
          <div className="r-container">
            {/* The background and gradient are applied using styled components */}
            <div className="text">
              <h1>
                {" "}
                Plan Together, <br />
                Succeed Together.
              </h1>
              <p>
                {" "}
                Our Unique Project Proposal System allows both developers and{" "}
                <br />
                entreprenuer't to effectively brainstorm ideas, <br />
                set goals and deliver results.{" "}
              </p>
            </div>
          </div>
        </RightContainer>
      </SignupPageContainer>
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
