import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchAllProjects, saveProject } from "../../../../../redux/actions";
import { Link, Route } from "react-router-dom";

const NewProjects = props => {
  const { name, owner, description, saveProject, ownerOccupation, id } = props;
  console.log(props);
  return (
    <EntrepreneurProjects>
      <div className="project-container">

        <div className="project-top">
          <img src={process.env.PUBLIC_URL + "/images/icon_dots.svg"} alt="menu" className="find-proj-options" />
          <div className="owner-info">
            <img src='https://thispersondoesnotexist.com/image' className="profile-pic" alt="profile-pic" />
            <div>
              <h3>{name}</h3>
              <p> {ownerOccupation || "entreprenuer"}</p>
            </div>
          </div>
        </div>

        <p className="description">
          {description.substr( 0, 200 ) + "..."}{" "}
        </p>

        <div className="project-bottom">
          <a onClick={() => saveProject(id)}> Save For Later </a>

          <Link to={{
            pathname: `/dev/find/projects/${id}`,
            state: { name: name, owner: owner, description: description, id: id }
          }} className="cta-moreinfo">
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
margin: 50px;
display: inline-flex;
flex-direction: row;
height: 200px;
align-content: flex-start;
img{
  height: 50px;

}
`;
