import React from "react";

const ContainerDiv = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default function NotificationList(props) {
  return (
    <ContainerDiv>
      <Notification />
    </ContainerDiv>
  );
}
