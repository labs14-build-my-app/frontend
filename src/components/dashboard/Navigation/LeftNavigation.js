//Leftside Navigation for main react application, after signup page

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";



const LeftNavigationElements = styled.nav`
.LeftNav{
border: 1px solid red;
max-width: 300px;
}
`;

export default function LeftNavigation(){
    return(
        <LeftNavigationElements>
        <div className='LeftNav'>
            <ul>
                <li>
                home
                <NavLink><img src='' alt=''/></NavLink>
                </li>
                <li>
                search
                <NavLink><img src='' alt=''/></NavLink>
                </li>
                <li>
                statements
                <NavLink><img src='' alt=''/></NavLink>
                </li>
                <li>
                notifications
                <NavLink><img src='' alt=''/></NavLink>
                </li>
                <li>
                settings
                <NavLink><img src='' alt=''/></NavLink>
                </li>
            </ul>
        </div>
        </LeftNavigationElements>
    )
}