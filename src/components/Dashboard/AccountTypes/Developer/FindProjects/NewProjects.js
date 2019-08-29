import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchAllProjects, saveProject } from "../../../../../redux/actions";
import { Link, Route } from "react-router-dom";
import {
  textColor1,
  textColor2,
  snowflake,
  headerFontDesktop,
  projectParagraphFont,
  privilege,
  electricViolet,
  projectFontSubtext,
  completedBackground
} from "../../../cssVariables";

const NewProjects = props => {
  const { name, owner, description, saveProject, id, index } = props;
  console.log(props);

  const jtonnasFirstL33tCode = index => {
    if (index === 0) {
      return "tl";
    }

    if (index == 1) {
      return "tm";
    }

    if (index == 2) {
      return "tr";
    }
  };

  return (
    <EntrepreneurProjects className={`project ` + jtonnasFirstL33tCode(index)}>
      <div className="project-container">
        <div className="project-top">
          <div className="owner-info">
            <img
              src="https://thispersondoesnotexist.com/image"
              className="profile-pic"
              alt="profile-pic"
            />
            <div>
              <h3>{name}</h3>
              <p> {owner || "entreprenuer"}</p>
            </div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/icon_dots.svg"}
            alt="menu"
            className="three-dots"
          />
        </div>

        <p className="description">{description.substr(0, 200) + "..."} </p>

        <div className="project-bottom">
          <a> Save For Later </a>

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

const EntrepreneurProjects = styled.div`
  margin: 1rem;
  max-width: 49rem;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  background: ${completedBackground};
  box-shadow: 0px 5px 8px rgba(226, 224, 255, 0.25);
  height: 59%;

  .project-container {
    background: ${privilege};

    /* Project Top Start */
    .project-top {
      display: flex;
      justify-content: space-between;
      padding: 4rem 4rem 3rem 4rem;
      /* top right bottom left */

      .owner-info {
        display: flex;
        align-items: center;

        div {
          h3 {
            font-size: ${headerFontDesktop};
          }

          p {
            font-size: ${projectParagraphFont};
            color: ${textColor2};
          }
        }

        .profile-pic {
          height: 6rem;
          width: 6rem;
          border-radius: 0.5rem;
          margin-right: 1.6rem;
        }
      }

      .three-dots {
        height: 0.5rem;
      }
    }

    /* Project Top End */

    /* Description Start */

    .description {
      font-size: ${projectParagraphFont};
      color: ${textColor1};
      line-height: 2.4rem;
      margin: 0 1rem 0 1rem;
      /* top right bottom left */

      border-top: 1px solid ${completedBackground};

      padding: 2.8rem 3rem 2.8rem 3rem;
      /* top right bottom left */

      border-bottom: 1px solid ${completedBackground};
    }

    /* Project Bottom */

    .project-bottom {
      padding-top: 1.3rem;

      padding: 2rem 4rem 2rem 4rem;
      /* top right bottom left */

      display: flex;
      justify-content: space-between;
      font-size: ${projectFontSubtext};

      .cta-more-info {
        border-radius: 0.5rem;
      }

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        border-radius: 0.5em;

        :first-child {
          border: 2px solid ${electricViolet};
          padding: 1.6rem 4.8rem 1.6rem;
        }
      }

      .cta-moreinfo {
        color: ${privilege};
        padding: 1.4rem 4rem 1.6rem 3rem;
        background: ${electricViolet};
        box-shadow: 5px 5px 8px rgba(149, 25, 232, 0.15);

        svg {
          margin-right: 2.3rem;
        }
      }
    }
  }
`;
