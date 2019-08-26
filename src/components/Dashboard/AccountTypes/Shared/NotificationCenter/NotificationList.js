import React from "react";
import styled from "styled-components";
import Notification from "./Notification";

const ContainerDiv = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-between;
  // border: 1px solid red;
`;

export default function NotificationList({ notifications }) {
  return (
    <ContainerDiv>
      {notifications.map((note,i) => {
        return (
          <Notification
            {...note}
            key={i}
            // change key to notification id
          />
        );
      })}
    </ContainerDiv>
  );
}
