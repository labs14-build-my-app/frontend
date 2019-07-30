import React from "react";
import styled from "styled-components";
import { headerFontFamily, projectFontSubtext } from "../cssVariables";

const NotificationDiv = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 60px;
  margin: 10px auto;
  padding: 0.4rem;
  display: flex;
  justify-content: space-evenly;
  font-family: ${headerFontFamily};
  font-size: ${projectFontSubtext};
  background: rgb(255, 255, 255);
  background: linear-gradient(
    262deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(239, 239, 239, 1) 100%
  );
  -webkit-box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 5px 5px 8px 0px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  align-items: center;

  .notification-paragraph {
    margin: 0;
  }

  .date-div {
    display: flex;
    //   flex-grow: 1;
    height: 39px;
    flex-direction: column;
    justify-content: center;
    //   align-content: center;
    //   border: 1px solid pink;
  }
`;

export default function Notification({ month, date, author, action, project }) {
  return (
    <NotificationDiv>
      <div className="date-div">
        <p className="notification-paragraph">{month}</p>
        <p className="notification-paragraph">{date}</p>
      </div>
      <p className="notification-paragraph">
        {author} {action} {project}
      </p>
    </NotificationDiv>
  );
}
