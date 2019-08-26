import React, {useState} from "react";
import styled from "styled-components";

import NotificationList from "./NotificationsLoader";

import tempstate from './tempstate';

const ContainerDiv = styled.div``;

const NotificationCenter = () => {
  const [notifications] = useState(tempstate.notifications)
  return (
    <ContainerDiv>
      {notifications.map(notificationsData => {
        return(
          <NotificationList {...notificationsData} />
        )
      })}
    </ContainerDiv>
  );
};

export default NotificationCenter;
