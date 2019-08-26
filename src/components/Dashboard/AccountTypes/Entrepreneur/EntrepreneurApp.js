import React from 'react'
import HelloWidget from "../Shared/HelloWidget";
import styled from "styled-components"
import NotificationCenter from "../Shared/NotificationCenter/NotificationCenter.jsx"

const EntrepreneurApp = (props) => {
        return (
            <>
                <HelloWidget pathname={props.history.location.pathname} />
                <EntAppContainer> 

                <div className="project-list"> 
                
                </div>
                <div className="navigation-container">
                <NotificationCenter />
                 </div>
                </EntAppContainer>
             
            </>
        )
}
export default EntrepreneurApp

const EntAppContainer = styled.div`
    display: flex;
`
