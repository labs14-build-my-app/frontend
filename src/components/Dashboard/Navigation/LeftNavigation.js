//Leftside Navigation for main react application, after signup page

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const LeftNavigation = props => {
  const { isDeveloper } = props;

  return (
    <LeftNavigationElements>
      <div className="LeftNav">
        <ul>
          {/* Home Icon */}
          <NavLink to={isDeveloper ? "/dev/home" : "/ent/home"}>
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

          {/* Projects Icon */}
          <NavLink to="/dev/my/projects">
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

          {/* Chat Icon */}
          <NavLink to="/dev/chat">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.718"
                height="20"
                viewBox="0 0 25.718 20"
              >
                <defs />
                <path
                  class="a"
                  d="M23.744,47.813a6.147,6.147,0,0,0,1.964-4.384c0-3.571-3.415-6.522-7.866-7.049C16.436,33.808,13.132,32,9.279,32,4.15,32-.006,35.2-.006,39.143a6.163,6.163,0,0,0,1.964,4.384A11.689,11.689,0,0,1,.275,45.978a1.033,1.033,0,0,0,.75,1.741,10.262,10.262,0,0,0,5.589-1.732,12.724,12.724,0,0,0,1.268.219c1.4,2.563,4.692,4.366,8.54,4.366a11.817,11.817,0,0,0,2.67-.3A10.286,10.286,0,0,0,24.681,52a1.033,1.033,0,0,0,.75-1.741A11.378,11.378,0,0,1,23.744,47.813ZM6.208,43.692l-.763.5a9.084,9.084,0,0,1-1.924.955c.121-.21.241-.433.357-.661l.692-1.388L3.462,42a4.093,4.093,0,0,1-1.326-2.857c0-2.71,3.272-5,7.143-5s7.143,2.29,7.143,5-3.272,5-7.143,5a9.728,9.728,0,0,1-2.187-.25l-.884-.2Zm16.031,2.594-1.1,1.089.692,1.388c.116.228.237.451.357.661a9.084,9.084,0,0,1-1.924-.955l-.763-.5-.888.205a9.728,9.728,0,0,1-2.187.25,8.307,8.307,0,0,1-5.862-2.219c4.522-.482,8-3.455,8-7.067,0-.152-.018-.3-.031-.446,2.875.647,5.031,2.536,5.031,4.732A4.093,4.093,0,0,1,22.239,46.286Z"
                  transform="translate(0.007 -32)"
                />
              </svg>
            </li>
          </NavLink>

          {/* Search Icon */}
          <NavLink
            to={isDeveloper ? "/dev/find/projects" : "/ent/projects/new"}
          >
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

          {/* Notifications Icon */}
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

          {/* Statements Icon */}
          <NavLink to="/dev/statements">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.248"
                height="20"
                viewBox="0 0 11.248 20"
              >
                <defs />
                <path
                  class="a"
                  d="M8.207,9.117,3.988,7.883a1.152,1.152,0,0,1,.324-2.258H6.9a2.384,2.384,0,0,1,1.336.41A.609.609,0,0,0,9,5.957l1.359-1.328a.633.633,0,0,0-.07-.957A5.524,5.524,0,0,0,6.91,2.5V.625A.627.627,0,0,0,6.285,0H5.035A.627.627,0,0,0,4.41.625V2.5h-.1A4.28,4.28,0,0,0,.055,7.172a4.472,4.472,0,0,0,3.273,3.773l4,1.172a1.152,1.152,0,0,1-.324,2.258H4.418a2.384,2.384,0,0,1-1.336-.41.609.609,0,0,0-.762.078L.961,15.371a.633.633,0,0,0,.07.957A5.524,5.524,0,0,0,4.41,17.5v1.875A.627.627,0,0,0,5.035,20h1.25a.627.627,0,0,0,.625-.625V17.492a4.412,4.412,0,0,0,4.129-2.84A4.289,4.289,0,0,0,8.207,9.117Z"
                  transform="translate(-0.035)"
                />
              </svg>
            </li>
          </NavLink>

          {/* Settings Icon */}
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
};

const LeftNavigationElements = styled.nav`
  padding-top: 16rem;
  z-index: 15;

  .LeftNav {
    width: 8rem;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    a li svg path {
      fill: #9592a8;
      height: 2rem;
    }

    a :hover {
      background: #ffefff;
      transition: 0.2s;
    }

    .active svg path {
      fill: #9519e8;
    }
  }

  .LeftNav li {
    padding: 3rem;
  }

  background: transparent
    linear-gradient(
      4deg,
      rgba(242, 243, 255, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    )
    0% 0% no-repeat padding-box;
`;

const mapStateToProps = state => {
  return {
    user: state.user,
    isDeveloper: state.isDeveloper
  };
};

export default connect(
  mapStateToProps,
  {}
)(LeftNavigation);
