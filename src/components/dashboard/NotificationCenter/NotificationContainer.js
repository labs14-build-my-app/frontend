import React from "react";
import styled from "styled-components";

const ContainerDiv = styled.div`
  background: #cccccc;
  border-radius: 12px;
  width: 470px;
  height: 499px;
`;

const NotificationH2 = styled.h2`
  font-size: 18px;
`;

const NotificationP = styled.p`
  font-size: 13px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
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
      month: "July 17"
    }
  ]
};

const NotificationCenter = props => {
  return (
    <ContainerDiv>
      <FlexDiv>
        <NotificationH2>Notifications</NotificationH2>
        <NotificationP>All notifications</NotificationP>
      </FlexDiv>
    </ContainerDiv>
  );
};

export default NotificationCenter;
