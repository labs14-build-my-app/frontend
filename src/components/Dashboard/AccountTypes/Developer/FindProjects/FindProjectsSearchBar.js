import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { electricVioletLight, headerFontDesktop, textColor1, textColor2, privilege, veryLightBlue } from "../../../cssVariables";

const FindProjectsSearchBar = () => {
  const { projectList } = useSelector(s => s);
  return (
    <FindProjectsSearchBarContainer>
      <div className="searchbar-field">
        <div className="input-searchbar">
          <input placeholder="Search for projects by industry or keyword..." />
          <svg xmlns="http://www.w3.org/2000/svg" width="19.996" height="20" viewBox="0 0 19.996 20" >
            <defs />
            <path fill="#9592A8" className="a" d="M19.725,17.291,15.83,13.4a.937.937,0,0,0-.664-.273H14.53a8.12,8.12,0,1,0-1.406,1.406v.637a.937.937,0,0,0,.273.664l3.894,3.894a.934.934,0,0,0,1.324,0l1.105-1.105A.942.942,0,0,0,19.725,17.291Zm-11.6-4.168a5,5,0,1,1,5-5A5,5,0,0,1,8.124,13.124Z" transform="translate(0)" />
          </svg>
        </div>

        <div className="filter-results">
            <p> Filter Results </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="8.814" height="5" viewBox="0 0 8.814 5">
              <path d="M11.888,192h7.628a.592.592,0,0,1,.418,1.011l-3.813,3.816a.594.594,0,0,1-.839,0l-3.813-3.816A.592.592,0,0,1,11.888,192Z" transform="translate(-11.296 -192)" />
            </svg>
        </div>
    </div>
    </FindProjectsSearchBarContainer>
  );
};

export default FindProjectsSearchBar;

const FindProjectsSearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .searchbar-field {
    display: flex;
    justify-content: space-between;
    max-width: 50%;
    margin-bottom: 2.1rem;

    /* Search Bar */
    .input-searchbar {
      padding: 2.35rem 4rem 2.35rem;
      display: flex;
      width: 100%;
      background: #f2f3ff 0% 0% no-repeat padding-box;
      box-shadow: 5px 5px 8px rgba(255, 255, 255, 0.25);
      border-radius: 5px;

      input {
        color: ${textColor1};
        width: 100%;
        background: none;
        border: none;
        font-size: ${headerFontDesktop};

        ::placeholder {
          font-size: ${headerFontDesktop};
          color: ${textColor2};
        }
      }

      svg {
        margin-right: 2.5rem;
        margin: auto 2.5rem auto 0;
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .filter-results{
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${veryLightBlue};
      box-shadow: 5px 5px 8px #ffffff;
      border-radius: 5px;
      width: 40%;
      color: ${textColor2};
      margin-left: 1.875em;
      font-size: ${headerFontDesktop};
      user-select: none;
      cursor: pointer;

      svg {
        transform: rotate(-90deg);
        margin-left: 1.3125em;
        width: 9px;
        height: 9px;
        path {
          fill: #9592a8;
        }
      }
    }
  }

`
