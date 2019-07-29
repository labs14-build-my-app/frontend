import React from "react";
import styled from "styled-components";
import Notification from "./Notification";

const ContainerDiv = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
`;

export default function NotificationList({ notifications }) {
  console.log(notifications);

  return (
    <ContainerDiv>
      {notifications.map(note => {
        return (
          <Notification
            month={note.month}
            date={note.date}
            author={note.author}
            action={note.action}
            project={note.project}
          />
        );
      })}
    </ContainerDiv>
  );
}
