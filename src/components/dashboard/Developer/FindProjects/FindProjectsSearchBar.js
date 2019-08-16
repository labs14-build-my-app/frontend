import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { electricVioletLight, electricVioletText } from "../../cssVariables";
const FindProjectsSearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .searchbar-field {
    display: flex;
    justify-content: space-between;
    max-width: 50%;
    margin-bottom: 2.1em;
    .select-to-search {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f2f3ff 0% 0% no-repeat padding-box;
      box-shadow: 5px 5px 8px #ffffff;
      border-radius: 5px;
      width: 179px;
      color: #9592a8;
      margin-left: 1.875em;
      svg {
        transform: rotate(270deg);
        margin-left: 1.3125em;
        path {
          fill: #9592a8;
        }
      }
    }
    .input-searchbar {
      display: flex;
      width: 100%;
      background: #f2f3ff 0% 0% no-repeat padding-box;
      box-shadow: 5px 5px 8px #ffffff;
      border-radius: 5px;
      input {
        color: #9592a8;
        padding: 1.5625em 0 1.5625em 2.5em;
        width: 100%;
        background: none;
        border: none;
        ::placeholder {
          font-size: 1.3rem;
        }
      }

      svg {
        margin-right: 2.5em;
        margin: auto 2.5em auto 0;
        width: 15px;
        height: 15px;
      }
    }
  }

  .searchfield-results {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1.5625em;
    background: #f2f3ff 0% 0% no-repeat padding-box;
    box-shadow: 5px 5px 8px rgba(255, 255, 255, 0.25);
    border-radius: 4px;

    .result-count {
      display: block;
      background: ${electricVioletLight} 0% 0% no-repeat padding-box;
      width: 301px;
      padding: 1.125em 0 0.9375em 0;
      text-align: center;
      font-size: 1.3rem;
      border-radius: 4px;
      letter-spacing: 0;
      color: #43425d;
      opacity: 1;
    }

    ul {
      display: flex;
      justify-content: space-evenly;

      a {
        text-decoration: none;
        margin-right: 2.3125em;
        li {
          background: #ffffff 0% 0% no-repeat padding-box;
          color: #9592a8;
          padding: 1.125em 0 0.9375em 0;
          width: 142px;
          text-align: center;
        }
      }
    }
  }
`;

const FindProjectsSearchBar = () => {
  const { projectList } = useSelector(s => s);
  return (
    <FindProjectsSearchBarContainer>
      <div className="searchbar-field">
        <div className="input-searchbar">
          <input placeholder="Search for projects by industry or keyword..." />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.996"
            height="20"
            viewBox="0 0 19.996 20"
          >
            <defs />
            <path
              fill="#9592A8"
              class="a"
              d="M19.725,17.291,15.83,13.4a.937.937,0,0,0-.664-.273H14.53a8.12,8.12,0,1,0-1.406,1.406v.637a.937.937,0,0,0,.273.664l3.894,3.894a.934.934,0,0,0,1.324,0l1.105-1.105A.942.942,0,0,0,19.725,17.291Zm-11.6-4.168a5,5,0,1,1,5-5A5,5,0,0,1,8.124,13.124Z"
              transform="translate(0)"
            />
          </svg>
        </div>
        <div className="select-to-search">
          Filter Results
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.814"
            height="5"
            viewBox="0 0 8.814 5"
          >
            <path
              d="M11.888,192h7.628a.592.592,0,0,1,.418,1.011l-3.813,3.816a.594.594,0,0,1-.839,0l-3.813-3.816A.592.592,0,0,1,11.888,192Z"
              transform="translate(-11.296 -192)"
            />
          </svg>
        </div>
      </div>
      <div className="searchfield-results">
        <p className="result-count">
          {projectList && projectList.length} Results for "All Projects", no
          filters.{" "}
        </p>
        <ul>
          <Link>
            <li>All Projects Postings</li>
          </Link>
          <Link>
            <li>Finance Software</li>
          </Link>
          <Link>
            <li>Marketing Software</li>
          </Link>
          <Link>
            <li>Management Software</li>
          </Link>
          <Link>
            <li>SEO</li>
          </Link>
        </ul>
      </div>
    </FindProjectsSearchBarContainer>
  );
};

export default FindProjectsSearchBar;
