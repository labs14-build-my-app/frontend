import React from "react";
import styled from "styled-components";
import NotificationList from "./NotificationList";
import { transparentBackdrop } from "../cssVariables";

const ContainerDiv = styled.div`

  border-radius: 12px;
  width: 470px;
  height: 499px;
  ${transparentBackdrop}
`;

const NotificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const NotificationH2 = styled.h2`
  font-size: 18px;
  margin-top: 30px;
`;

const NotificationP = styled.p`
  font-size: 13px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 80%;
  margin: 0 auto;
`;

const mockUpState = {
  notifications: [
    {
      month: "July",
      date: "22",
      author: "Irene",
      action: "updated",
      project: "You Neek, Clothing Store"
    },

    {
      month: "July",
      date: "18",
      author: "Gerald",
      action: "accepted",
      project: "Meat Cutters, Employee Tracker"
    },

    {
      month: "July",
      date: "17",
      author: "eSports Event Planner",
      action: "completed",
      project: "ProMatches"
    },
    {
      month: "July",
      date: "17",
      author: "eSports Event Planner",
      action: "completed",
      project: "ProMatches"
    },
    {
      month: "July",
      date: "17",
      author: "eSports Event Planner",
      action: "completed",
      project: "ProMatches"
    }
  ]
};

const NotificationCenter = () => {
  return (
    <ContainerDiv>
      <FlexDiv>
        <NotificationH2>Notifications</NotificationH2>
        <NotificationP>All notifications</NotificationP>
      </FlexDiv>

      <NotificationContainer>
        <NotificationList notifications={mockUpState.notifications} />
      </NotificationContainer>
    </ContainerDiv>
  );
};

export default NotificationCenter;
