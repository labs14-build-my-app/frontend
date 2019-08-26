import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchAllProjects, saveProject } from "../../../../../redux/actions";
import { Link, Route } from "react-router-dom";
import { textColor1, textColor2, snowflake, headerFontDesktop, projectParagraphFont, privilege, electricViolet, projectFontSubtext } from "../../../cssVariables";

const NewProjects = props => {
  const { name, owner, description, saveProject, ownerOccupation, id } = props;
  console.log(props);
  return (
    <EntrepreneurProjects>
      <div className="project-container">

        <div className="project-top">
          <div className="owner-info">
            <img src='https://thispersondoesnotexist.com/image' className="profile-pic" alt="profile-pic" />
            <div>
              <h3>{owner}</h3>
              <p> {ownerOccupation || "entreprenuer"}</p>
            </div>
          </div>
          <img src={process.env.PUBLIC_URL + "/images/icon_dots.svg"} alt="menu" className="three-dots" />
        </div>

        <hr />

        <p className="description">
          {description.substr( 0, 200 ) + "..."}{" "}
        </p>

        <hr />

        <div className="project-bottom">
          <a onClick={() => saveProject(id)}> Save For Later </a>

          <Link to={{ pathname: `/dev/find/projects/${id}`, state: { name: name, owner: owner, description: description, id: id }}} className="cta-moreinfo">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-info-circle fa-w-16 fa-fw fa-lg" >
              <path fill="#fff" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" class="" />
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

export default connect(mapStateToProps,{ fetchAllProjects, saveProject })(NewProjects);

const EntrepreneurProjects = styled.div`
border: 1px solid blue;


.project-container{

  /* Project Top Start */
  .project-top{
    display: flex;
    justify-content: space-between;

    .owner-info{
      display: flex;
      align-items: center;

        div{
          padding-left: 1.6em;

          h3{
            font-size: ${headerFontDesktop}
          }

          p{
            font-size: ${projectParagraphFont};
            color: ${textColor2}
          }
        }

      .profile-pic{
        height: 6rem;
        width: 6rem;
        border-radius: .5rem;
      }
    }

    .three-dots{
      height: .5rem;
    }
  }

  /* Project Top End */

  hr{
    display: inline-flex;
    width: 100%;
    /* border: 1px solid ${snowflake}; */
    border: 1px solid red;
    margin: 3rem 0 3rem;
  }

  /* Description Start */

  .description{
    font-size: ${projectParagraphFont};
    color: ${textColor1};
    line-height: 2.4rem;
  }

  /* Project Bottom */

  .project-bottom{
    display: flex;
    justify-content: space-between;
    font-size: ${projectFontSubtext};

    .cta-more-info{
      border-radius: .5rem;
    }

    a{
      display: flex;
      align-items: center;
      text-decoration: none;
      border-radius: .5em;          
      :first-child{
        border: 2px solid ${electricViolet};
        padding: 1.6rem 4.8rem 1.6rem;
      }

    }
    
    .cta-moreinfo{
      color: ${privilege};
      padding: 1.4rem 4rem 1.6rem 3rem;
      background: ${electricViolet};
      box-shadow: 5px 5px 8px rgba(149, 25, 232, 0.15);
      svg{
        margin-right: 2.3rem;
      }
      }
  }

}

`;
