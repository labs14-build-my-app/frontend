import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const ProjectModalModal = styled.div`
  background: white;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
    padding: 1.5625em;
    background: #F2F4FF;
    border-radius: 5px;
    margin: 0 4.375em;
  .proposal-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: #fff;
    padding: 7.625em 0 5em 7.625em
  }
  .project-top {
    box-sizing: border-box;
    margin-bottom: 1.875em;
    .owner-info {
      display: flex;
      justify-content: left;
      h3,
      p {
        margin-left: 1em;
      }
      h3{
          font-size: 1.5rem;
      }
      p{
          font-size: 1.3rem;
      }
      align-items: center;
      .profile-pic {
        width: 54px;
        height: 54px;
        border-radius: 5px;
      }
    }
  }
  
    .entreprenuer-section{
        h2{
           font-size: 2.5rem; 
           margin-bottom: 1.25em
        } 
        p{
            font-size: 1.5rem;
        }
    }
`;

export class ProjectModal extends Component {
  render() {
    const { name, owner, description, id } = this.props.location.state;

    return (
      <ProjectModalModal>
        <div>{/* icons */}</div>
        <div className="proposal-container">
          {/* proposal-container */}
          <div className="entreprenuer-section">
            {/* entreprenuer section */}
            <div className="project-top">
              <div className="owner-info">
                <img
                  src={`${
                    process.env.PUBLIC_URL
                  }/images/Landing Page - Mobile 375x667.png`}
                  className="profile-pic"
                />
                <div>
                  <h3>{name}</h3>
                  <p> {owner || "entreprenuer"}</p>
                </div>
              </div>
            </div>
            <h2>{name} Proposal</h2>
            <p>{description}</p>
            <p>$3500 <br />
            preferred price range<br />
           $875 deposit</p>
          </div>
          <div>
            {/* developer proposal */}
            <div className="project-proposal-cta">
            <input type="text" placeholder="Hello Pazao, I'm Ruben Ponce. I have developed systems like this in the past, there's a few examples of my work here on my portfolio https://ruben-ponce.com. I would love to work on this project for you & your company. The tools id be using would be React.js for the front end and Java for the back end. I'm advocating for React because its lightweight, extremely fast and can scale effortlessly and is one of the most widely used front end frameworks. Java Backend for saving user information, such as email's, passwords (encrypted), orders etc. For staying organized I will be using trello, it helps manages tasks and todo lists. This will help ensure I stay on target and with your review we can make sure the project aligns with what it is that your company needs. We would have to talk about hosting at a later date since it sounds like you don't have hosting setup, but that's okay I can do that for you. I hope to hear back from you soon, your company's Facebook has some amazing looking apparel. Thank you for your time."/>
              <div>
                <p>Total Project Bounty</p>
                <input type="text" placeholder="$3500" />
                <input type="text" placeholder="date" />
                
              </div>
              <div>{/* send icon */}</div>
            </div>
          </div>
        </div>
      </ProjectModalModal>
    );
  }
}

export default ProjectModal;
