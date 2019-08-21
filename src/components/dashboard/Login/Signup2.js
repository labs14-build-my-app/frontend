import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signup } from "../../../redux/actions";

import styled from "styled-components";
import { headerFontDesktop, h1, electricViolet, veryLightBlue, textColor1, textColor2, losLinks, projectFontSubtext, losTransitionTime, losBackground, privilege } from "../cssVariables";
import { BeatLoader } from "react-spinners";

const Signup2PageContainer = styled.div`
  margin: 0 auto;
  display: flex;
  display: nowrap;
  font-size: ${headerFontDesktop};
  height: 100%;
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
  height: 100%vh;
  background: ${veryLightBlue};

  .l-container{
    width: calc(100% - 144px);
    margin: 0 auto;
    height: 100%;

    nav{
      padding-top: 5.0625em

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
    .text1 {
      height: 4.4rem;
      width: 40.8rem;
      margin-top: 19.2rem;
      text-align: left;
      font-family: Source Sans Pro;
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: 0;
      color: #43425D;
      opacity: 1;
    }
    .text2 {
      height: 3.2rem;
      width: 40.8rem;
      margin-top: 1.9rem;
      text-align: left;
      font-family: Source Sans Pro;
      font-size: 2.5rem;
      letter-spacing: 0;
      color: #43425D;
      opacity: 1;
    }
    .text3 {
      height: 3.9rem;
      width: 55.1rem;
      margin-top: 2.8rem;
      text-align: left;
      font-family: Source Sans Pro;
      font-size: 1.5rem;
      letter-spacing: 0;
      color: #FFFFFF;
      opacity: 1;
      background: transparent linear-gradient(86deg, #16075E 0%, #7313B3 100%) 0% 0% no-repeat padding-box;
      box-shadow: 5px 5px 8px #9519E8;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .buttons {
      margin-top: 2.8rem;
      height: 3.9rem;
      width: 55.1rem;
      display: flex;
      justify-content: space-between;
      .button {
        height: 2.7rem;
        width: 45%;
        background: #9592A8 0% 0% no-repeat padding-box;
        box-shadow: 5px 5px 8px #000000;
        border-radius: 6px;
        opacity: 1;
        letter-spacing: 0;
        color: #FFFFFF;
        font-family: Source Sans Pro;
      }
    }
    
    }
  }
`;

const RightContainer = styled.div`
  width: 55%;
  height: 100%;
  .r-container{
     height: 100vh;
    
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

class Signup2 extends Component {
  
  handleDev = e => {
    e.preventDefault();
    this.props.signup({ ...this.props.location.state, isDeveloper: true }).then(res => {
      this.props.history.push("/");
    });
  };

  handleEnt = e => {
    e.preventDefault();
    this.props.signup({ ...this.props.location.state, isDeveloper: false }).then(res => {
      this.props.history.push("/");
    });
  };

    

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
          <Signup2PageContainer className="page-container">
                <LeftContainer>
                    <div className="l-container">
                        <nav>
                          <ol>
                            <li><NavLink to='/Login'>Login</NavLink></li>
                            <li>or</li>
                            <li><NavLink to='/Signup'>Sign Up</NavLink></li>
                          </ol>
                        </nav>
                        <div className="text1">One Last Thing</div>
                        <div className="text2">Are you an Entrepreneur or Developer?</div>
                        <div className="text3">This can't be changed later, but you can always make a new account.</div>
                        <div className="buttons">
                          <button className="button" onClick={this.handleEnt}>Entrepreneur</button>
                          <button className="button" onClick={this.handleDev}>Developer</button>
                        </div>
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
          </Signup2PageContainer>
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
)(Signup2);
