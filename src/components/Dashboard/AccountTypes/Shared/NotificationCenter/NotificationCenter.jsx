import React, {useState} from "react";
import styled from "styled-components";

import NotificationsLoader from "./NotificationsLoader";

import {tempstate} from './tempstate.js';

const ContainerDiv = styled.div`
  position: relative;
  overflow: hidden;
  height: 50%;
  width: 100%;
  padding: 1rem 1rem 0 0;
  top: -2rem; /* re-aligns the notification center with the projects*/

  &::after{
    height:500px;
    width: 100%;
    content: '';
    position: absolute;
    bottom: 0;
    background: linear-gradient(180deg,rgba(255,255,255,0) 60%,rgba(242,243,255,1) 100%);
    pointer-events: none;
  }
`;

const Scrollable = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: 1rem 1rem 0 0;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const NotificationCenter = () => {
  
  const [notifications] = useState(tempstate.notifications);
  console.log(notifications)
  return (
    <ContainerDiv>
        <Scrollable>
          {notifications.map(notification =>  <NotificationsLoader notification={notification} /> )}
          </Scrollable>
    </ContainerDiv>
  );
};

export default NotificationCenter;
