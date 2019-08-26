import React from "react";
import styled, {ThemeProvider} from "styled-components";

import {hasBeenRead, hasNotBeenRead} from './NotificationsColorizer';
import {projectFontSubtext, projectParagraphFont} from '../../../cssVariables';

const NotificationsWrapper = styled.div`
  margin-bottom: 2.4rem;
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
    font-size: ${projectFontSubtext};
    line-height: 1.7rem;
  }
`;

const Row = styled.div`
  padding-bottom: 1rem;
  width: 100%;
`;

const switcherino = (action, notification) =>{
  switch (action){
    case "update" : return `${notification.author} has requested an updated project proposal for ${notification.project}.`;
    case "accepted" : return `Your projects proposal for ${notification.project} was accepted by ${notification.author}.`;
    case "completed" : return `The project ${notification.project} was marked as completed, if this is an error please reach out to support.`;
    case "cancelled" : return `Yor project ${notification.project} was cancelled.`;
    case "review" : return `The proposal you submitted for ${notification.project} is in review.`

    default : return "This project has an un-known status. ";
  }
}

const NotificationsLoader = (props) => {
  const {notification} = props
  return (
    <ThemeProvider theme={props}>
    <NotificationsWrapper>

      <FlexWrapper className={'read-' + notification.read}>
        <div className="bubble"></div>
        <Row className="date">
          {notification.month + " " + notification.date}
        </Row>
        <Row className="info">
          {switcherino(notification.action, notification)}
        </Row>
      </FlexWrapper>
    </NotificationsWrapper>
    </ThemeProvider>
  );
}

export default NotificationsLoader;
