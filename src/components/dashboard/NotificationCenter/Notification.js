import React from "react";
import styled from "styled-components";

const NotificationDiv = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 60px;
  margin: 10px auto;
  padding: 0.4rem;
  display: flex;
  justify-content: space-evenly;
  //   border: 1px solid green;
  font-family: Source Sans Pro;
  font-size: 13px;
  background: grey;
  border-radius: 12px;
  align-items: center;
`;

const NotificationP = styled.p`
  margin: 0;
`;

const DateDiv = styled.div`
  display: flex;
  //   flex-grow: 1;
  height: 39px;
  flex-direction: column;
  justify-content: flex-s;
  //   align-content: center;
  //   border: 1px solid pink;
`;

export default function Notification({ month, date, author, action, project }) {
  return (
    <NotificationDiv>
      <DateDiv>
        <NotificationP>{month}</NotificationP>
        <NotificationP>{date}</NotificationP>
      </DateDiv>
      <NotificationP>
        {author} {action} {project}
      </NotificationP>
    </NotificationDiv>
  );
}
