import React, {useState} from "react";
import styled from "styled-components";

import NotificationsLoader from "./NotificationsLoader";

import {tempstate} from './tempstate.js';

const ContainerDiv = styled.div``;

const NotificationCenter = () => {
  
  const [notifications] = useState(tempstate.notifications);
  console.log(notifications)
  return (
    <ContainerDiv>
      {notifications.map(notification =>  <NotificationsLoader notification={notification} /> )}
    </ContainerDiv>
  );
};

export default NotificationCenter;
