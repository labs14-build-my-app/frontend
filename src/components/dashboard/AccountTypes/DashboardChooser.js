import React, {useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { loadApp } from "../../../redux/actions";
import { Route, Redirect } from "react-router-dom";
import styled from 'styled-components';
import {ClimbingBoxLoader} from "react-spinners"
import { css } from '@emotion/core';
import DeveloperApp from "./Developer/DeveloperApp";
import EntrepreneurApp from "./Entrepreneur/EntrepreneurApp";
import ProjectModal from "../AccountTypes/Developer/FindProjects/ProjectModal";

const errorHasOccured = <p style={{position: "absolute", top: "50%",left: "50%" }}>An Error has occured please log in again!</p>;

const MainApp = styled.div`
.loading-circles{
  background: red
}
`
const loaderStyles = css`
position: absolute;
top: 50%;
left: 50%;

`

const DashboardChooser = props => {
  if (!props.user) {
    props.loadApp();
  }

  const {user} = useSelector(s=>s);

  
  useEffect(()=>{
    props.loadApp()
  },[user.firstName])

  if(user.firstName !== "undefined"){

  
  console.log(props)
  const {pathname} = props.history.location;
  console.log("DashboardChooser loaded");
  return props.user ? (
    <MainApp className="main-app-column">
      <Route path="/dev/find/projects/:id" component={ProjectModal} />

      {props.user.isDeveloper ? (
        <DeveloperApp {...props} />
      ) : props.user.isDeveloper === false ? (
        <EntrepreneurApp {...props} />
      ) : (pathname.startsWith("/dev") || pathname.startsWith("/entrepreneur") ) && <ClimbingBoxLoader css={loaderStyles} /> 
      }
    </MainApp>
  ) : (
    <ClimbingBoxLoader css={loaderStyles}/>
  );
  
  }
  else{
    return null
  }
};
const mapStateToProps = state => {
  // console.log(state)
  return {
    user: state.user,
    loggingIn: state.loggingIn
  };
};
export default connect(mapStateToProps, { loadApp })(DashboardChooser);
