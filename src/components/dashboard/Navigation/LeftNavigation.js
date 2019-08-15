//Leftside Navigation for main react application, after signup page

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LeftNavigationElements = styled.nav`
    margin-top: 8.125em;
    .LeftNav{
        max-width: 100px;
        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            
        }
    }
.LeftNav li{
    padding: 30px;    
}
background: transparent linear-gradient(4deg, #F2F3FF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
opacity: 1;
`;

export default function LeftNavigation(){
    return(
        <LeftNavigationElements>
        <div className='LeftNav'>
            <ul>
                <li>
                <NavLink to="/dev/dashboard"><img src={process.env.PUBLIC_URL + "/images/icon_home.svg"} alt=''/></NavLink>
                </li>
                <li>
                <NavLink to="/dev/find/projects"><img src={process.env.PUBLIC_URL + "/images/icon_search.svg"} alt=''/></NavLink>
                </li>
                <li>
                <NavLink to='/dev/statements'><img src={process.env.PUBLIC_URL + "/images/icon_user_projects.svg"} alt=''/></NavLink>
                </li>
                <li>
                <NavLink to="/dev/notifications"><img src={process.env.PUBLIC_URL + "/images/icon_bell_filled.svg"} alt=''/></NavLink>
                </li>
                <li>
                <NavLink to="/dev/settings"><img src={process.env.PUBLIC_URL + "/images/icon_user_settings.svg"} alt=''/></NavLink>
                </li>
            </ul>
        </div>
        </LeftNavigationElements>
    )
}