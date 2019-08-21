import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchAllProjects, saveProject } from "../../../../redux/actions";
import { Link, Route } from "react-router-dom";

const EntrepreneurProjects = styled.li`
  background: #f2f3ff 0% 0% no-repeat padding-box;
  box-shadow: 0px 5px 8px #e2e0ff;
  border-radius: 5px;
  padding: 1.25em;
  .project-container {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 5px;
    padding: 2.5em 2.5em 1.125em 2.5em;
    .project-top {
      box-sizing: border-box;
      position: relative;
      .owner-info {
        display: flex;
        justify-content: left;
        h3,
        p {
          margin-left: 1em;
        }
        align-items: center;
        .profile-pic {
          width: 54px;
          height: 54px;
          border-radius: 5px;
        }
      }

      .find-proj-options {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
    .description {
      margin: 1.875em 0 0.8125em 0;
      padding: 2em 0 2em 0;
      border-top: 2px solid #f6f6f6;
      border-bottom: 2px solid #f6f6f6;
      font-size: 1.5rem;
      line-height: 24px;
    }
    .project-bottom {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
      align-items: center;
      a {
        text-decoration: none;
        cursor: pointer;
      }
      .cta-moreinfo {
        background: #9519e8 0% 0% no-repeat padding-box;

        color: #fff;
        box-shadow: 5px 5px 8px rgba(149, 25, 232, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1em 2em;
        svg {
          width: 20px;
          height: 20px;
          margin-right: 1.3em;
        }
        p {
        }
      }
    }
  }
`;

const NewProjects = props => {
  const { name, owner, description, saveProject, ownerOccupation, id } = props;
  console.log(props);
  return (
    <EntrepreneurProjects>
      <div className="project-container">
        <div className="project-top">
          <img
            src={process.env.PUBLIC_URL + "/images/icon_dots.svg"}
            alt="menu"
            className="find-proj-options"
          />
          <div className="owner-info">
            <img
              src={`${
                process.env.PUBLIC_URL
              }/images/Landing Page - Mobile 375x667.png`}
              className="profile-pic"
              alt="some alt text"
            />
            <div>
              <h3>{name}</h3>
              <p> {ownerOccupation || "entreprenuer"}</p>
            </div>
          </div>
        </div>
        <p className="description">{description.substr(0, 200) + "..."} </p>
        <div className="project-bottom">
          <a onClick={() => saveProject(id)}> Save For Later </a>{" "}
          {/*  Use a styled button if you're not going to provide an href here ^*/}
          <Link
            to={{
              pathname: `/dev/find/projects/${id}`,
              state: {
                name: name,
                owner: owner,
                description: description,
                id: id
              }
            }}
            className="cta-moreinfo"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="info-circle"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-info-circle fa-w-16 fa-fw fa-lg"
            >
              <path
                fill="#fff"
                d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                class=""
              />
            </svg>
            <p>More Information</p>
          </Link>
        </div>
      </div>
    </EntrepreneurProjects>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  { fetchAllProjects, saveProject }
)(NewProjects);
