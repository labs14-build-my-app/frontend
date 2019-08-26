import React from "react";
import styled from "styled-components";

const NotificationsWrapper = styled.div`
`;

const FlexWrapper = styled.div``;

const Row = styled.div``;

const NotificationsLoader = (props) => {
  return (
    <NotificationsWrapper>
      <FlexWrapper>
        <Row>
          {props.month + " " + props.date}
        </Row>
        <Row>
          {props.author + " " + props.action + " " + props.projects}
        </Row>
      </FlexWrapper>
    </NotificationsWrapper>
  );
}

export default NotificationsLoader;
