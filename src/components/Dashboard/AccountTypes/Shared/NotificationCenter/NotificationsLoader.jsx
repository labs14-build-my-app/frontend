import React from "react";
import styled from "styled-components";

import {hasBeenRead, hasNotBeenRead} from './NotificationsColorizer';
import {projectFontSubtext, projectParagraphFont} from '../../../cssVariables';

const NotificationsWrapper = styled.div`
  margin-bottom: 2.4rem;
  min-width: 40.6rem;
  ${hasBeenRead}
  ${hasNotBeenRead}
`;

const FlexWrapper = styled.div`
  padding: 1.5rem 2.5rem 1.5rem;
  border-radius: 4px;

  .date{
    font-size: ${projectParagraphFont};
  }

  .info{
    font-size: ${projectFontSubtext}
  }
`;

const Row = styled.div`
  padding-bottom: 1rem;
`;

const NotificationsLoader = (props) => {
  const {notification} = props
  return (
    <NotificationsWrapper>
      <FlexWrapper className={'read-' + notification.read}>
        <Row className="date">
          {notification.month + " " + notification.date}
        </Row>
        <Row className="info">
          {notification.author + " " + notification.action + " " + notification.project}
        </Row>
      </FlexWrapper>
    </NotificationsWrapper>
  );
}

export default NotificationsLoader;
