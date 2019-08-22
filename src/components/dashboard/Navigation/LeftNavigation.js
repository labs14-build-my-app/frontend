//Leftside Navigation for main react application, after signup page

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LeftNavigationElements = styled.nav`
  padding-top: 8.125em;
  z-index: 15;
  .LeftNav {
    max-width: 100px;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      a li svg path {
        fill: #9592a8;
      }
      a :hover {
        background: #ffefff;
        transition: 0.2s;
      }
      .active svg path {
        fill: #9519e8;
      }
    }
  }
  .LeftNav li {
    padding: 30px;
  }
  background: transparent linear-gradient(4deg, #f2f3ff 0%, #ffffff 100%) 0% 0%
    no-repeat padding-box;
  opacity: 1;
`;

export default function LeftNavigation() {
  return (
    <LeftNavigationElements>
      <div className="LeftNav">
        <ul>
          <NavLink to="/dev/dashboard">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.721"
                height="20.001"
                viewBox="0 0 25.721 20.001"
              >
                <defs />
                <path
                  d="M12.5,37.239l-8.232,6.78v7.318a.714.714,0,0,0,.714.714l5-.013a.714.714,0,0,0,.711-.714V47.05a.714.714,0,0,1,.714-.714h2.858a.714.714,0,0,1,.714.714v4.27a.714.714,0,0,0,.714.717l5,.014a.714.714,0,0,0,.714-.714V44.014l-8.23-6.775a.544.544,0,0,0-.683,0Zm13,4.608L21.774,38.77V32.586a.536.536,0,0,0-.536-.536h-2.5a.536.536,0,0,0-.536.536v3.242l-4-3.289a2.143,2.143,0,0,0-2.724,0L.179,41.847a.536.536,0,0,0-.071.755l1.139,1.384A.536.536,0,0,0,2,44.058l10.5-8.65a.544.544,0,0,1,.683,0l10.5,8.65a.536.536,0,0,0,.755-.071L25.583,42.6a.536.536,0,0,0-.076-.756Z"
                  transform="translate(0.015 -32.05)"
                />
              </svg>
            </li>
          </NavLink>
          <NavLink to="/dev/find/projects">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.996"
                height="20"
                viewBox="0 0 19.996 20"
              >
                <defs />
                <path
                  className="a"
                  d="M19.725,17.291,15.83,13.4a.937.937,0,0,0-.664-.273H14.53a8.12,8.12,0,1,0-1.406,1.406v.637a.937.937,0,0,0,.273.664l3.894,3.894a.934.934,0,0,0,1.324,0l1.105-1.105A.942.942,0,0,0,19.725,17.291Zm-11.6-4.168a5,5,0,1,1,5-5A5,5,0,0,1,8.124,13.124Z"
                  transform="translate(0)"
                />
              </svg>
            </li>
          </NavLink>
          <NavLink to="/dev/statements">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                viewBox="0 0 15 20"
              >
                <defs />
                <path
                  className="a"
                  d="M15,5.625a3.125,3.125,0,1,0-4,3,2.4,2.4,0,0,1-.43,1.441c-.6.75-1.926.875-3.328,1a9.429,9.429,0,0,0-3.176.66V6.105a3.125,3.125,0,1,0-1.875,0v7.785a3.132,3.132,0,1,0,2.063.07,1.375,1.375,0,0,1,.582-.523,7.859,7.859,0,0,1,2.582-.5c1.648-.152,3.516-.328,4.617-1.7a4.206,4.206,0,0,0,.844-2.652A3.138,3.138,0,0,0,15,5.625Z"
                  transform="translate(0)"
                />
              </svg>
            </li>
          </NavLink>
          <NavLink to="/dev/notifications">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.5"
                height="20"
                viewBox="0 0 17.5 20"
              >
                <defs />
                <path
                  className="a"
                  d="M8.749,20a2.5,2.5,0,0,0,2.5-2.5h-5A2.5,2.5,0,0,0,8.749,20Zm8.414-5.848C16.408,13.341,15,12.121,15,8.125a6.169,6.169,0,0,0-5-6.061V1.25a1.249,1.249,0,1,0-2.5,0v.814a6.169,6.169,0,0,0-5,6.061c0,4-1.412,5.216-2.167,6.027A1.22,1.22,0,0,0,0,15a1.251,1.251,0,0,0,1.254,1.25H16.245A1.251,1.251,0,0,0,17.5,15,1.22,1.22,0,0,0,17.163,14.152Z"
                  transform="translate(0.002)"
                />
              </svg>
            </li>
          </NavLink>
          <NavLink to="/dev/settings">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.72"
                height="20.578"
                viewBox="0 0 25.72 20.578"
              >
                <defs />
                <path
                  className="a"
                  d="M24.537,15a4.715,4.715,0,0,0,0-1.712l1.037-.6a.291.291,0,0,0,.133-.342,6.032,6.032,0,0,0-1.334-2.307.293.293,0,0,0-.362-.056l-1.037.6a4.719,4.719,0,0,0-1.483-.856v-1.2a.293.293,0,0,0-.229-.285,6.064,6.064,0,0,0-2.661,0,.293.293,0,0,0-.229.285v1.2a4.719,4.719,0,0,0-1.483.856l-1.037-.6a.294.294,0,0,0-.362.056,6.032,6.032,0,0,0-1.334,2.307.3.3,0,0,0,.133.342l1.037.6a4.715,4.715,0,0,0,0,1.712l-1.037.6a.291.291,0,0,0-.133.342,6.062,6.062,0,0,0,1.334,2.307.293.293,0,0,0,.362.056l1.037-.6a4.719,4.719,0,0,0,1.483.856v1.2a.293.293,0,0,0,.229.285,6.064,6.064,0,0,0,2.661,0,.293.293,0,0,0,.229-.285v-1.2a4.719,4.719,0,0,0,1.483-.856l1.037.6a.294.294,0,0,0,.362-.056,6.032,6.032,0,0,0,1.334-2.307.3.3,0,0,0-.133-.342Zm-4.6,1.093a1.949,1.949,0,1,1,1.949-1.949A1.951,1.951,0,0,1,19.935,16.1ZM9,10.289A5.145,5.145,0,1,0,3.858,5.145,5.144,5.144,0,0,0,9,10.289Zm8.087,9.1c-.092-.048-.185-.1-.273-.157l-.318.185a1.577,1.577,0,0,1-1.949-.293,7.329,7.329,0,0,1-1.616-2.8,1.572,1.572,0,0,1,.719-1.837l.318-.185q-.006-.157,0-.313l-.318-.185a1.57,1.57,0,0,1-.719-1.837c.036-.117.088-.233.129-.35-.153-.012-.3-.048-.458-.048h-.671a7,7,0,0,1-5.86,0H5.4a5.4,5.4,0,0,0-5.4,5.4v1.672a1.93,1.93,0,0,0,1.929,1.929H16.077a1.927,1.927,0,0,0,1.093-.342,1.565,1.565,0,0,1-.08-.474Z"
                  transform="translate(0)"
                />
              </svg>
            </li>
          </NavLink>
        </ul>
      </div>
    </LeftNavigationElements>
  );
}
