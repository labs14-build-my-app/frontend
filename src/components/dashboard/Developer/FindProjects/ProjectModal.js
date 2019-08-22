import React, { useEffect, useCallback, useReducer } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getOwner, submitProposal } from "../../../../redux/actions";
import { electricViolet, privilege, trout } from "../../cssVariables";

const ProjectModalModal = styled.div`
  background: white;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5625em;
  background: #f2f4ff;
  border-radius: 5px;
  margin: 0 4.375em;
  input {
    background: transparent;
    border: none;
    font-size: 1.5rem;
    width: 100%;
  }
  .proposal-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    padding: 7.625em 5em 5em 7.625em;
    position: relative;
    .invoice-actions {
      position: absolute;
      top: 30px;
      right: 30px;
      img {
        display: inline-block;
        margin-left: 1.5625em;
        cursor: pointer;
      }
    }
  }
  .project-top {
    box-sizing: border-box;
    margin-bottom: 1.875em;
    .owner-info {
      display: flex;
      justify-content: left;
      h3,
      p {
        margin-left: 1em;
      }
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1.3rem;
      }
      align-items: center;
      .profile-pic {
        width: 54px;
        height: 54px;
        border-radius: 5px;
      }
    }
  }

  .entreprenuer-section {
    padding-right: 5em;
    border-right: 2px solid #f2f2f2;
    width: 28%;
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1.25em;
    }
    p {
      font-size: 1.5rem;
      line-height: 19px;
    }
  }
  .developer-section {
    margin: 0 auto 0 5.625em;
    .dev-draft-input {
      background: #f2f3ff 0% 0% no-repeat padding-box;
      border: none;
      font-size: 1.5rem;
      margin: 3em 0;
      padding: 1em 0;
      ::placeholder{
        color: ${trout}
      }
      :focus {
        transition: 0.5s;
        border-left: none;
        padding: 4em 1em;
      }
      border-left: 2px solid purple;
      transition: 0.3s;
    }
    .submit-proposal {
      button {
        padding: 1.5em 2em;
        color: ${privilege};
        background: ${electricViolet};
        margin: 1em 0;
        border-radius: 5px;
      }
    }
  }
`;

var today = new Date();
var date =
  today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();

const ProjectModal = props => {
  const { name, ownerName, description, id } = props.location.state;

  console.log(props);
  const back = e => {
    console.log(props);
    props.history.goBack();
  };
  const handleKeyDown = useCallback(e => {
    if (e.keyCode === 27) {
      props.history.goBack();
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      return window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    props.submitProposal(id, userInput);
  };

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { body: "", price: "" }
  );
  const handleChange = evt => {
    const eventName = evt.target.name;
    const newValue = evt.target.value;
    setUserInput({ [eventName]: newValue });
    console.log(newValue);
  };

  console.log(userInput);
  return (
    <ProjectModalModal onKeyUp={handleKeyDown}>
      <div>{/* icons */}</div>
      <div className="proposal-container">
        {/* proposal-container */}
        <div className="invoice-actions">
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/share.svg`}
            alt="no error pls"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/icons/print.svg`}
            alt="no error pls"
          />
          <img
            onClick={back}
            src={`${process.env.PUBLIC_URL}/images/icons/icon_close.svg`}
            alt="no error pls"
          />
        </div>
        <div className="entreprenuer-section">
          {/* entreprenuer section */}
          <div className="project-top">
            <div className="owner-info">
              <img
                src={`${
                  process.env.PUBLIC_URL
                }/images/Landing Page - Mobile 375x667.png`}
                className="profile-pic"
                alt="no error pls"
              />
              <div className="owner-details">
                <h3>{name}</h3>
                <p>{ownerName}</p>
              </div>
            </div>
          </div>
          <h2>{name}</h2>
          <p>{description} test</p>
          <p>
            $3500 <br />
            preferred price range
            <br />
            $875 deposit
          </p>
        </div>
        <div className="developer-section">
          <p>{date}</p>
          <h2>{name} Proposal</h2>
          <div className="project-proposal-cta">
            <input
              type="text"
              className="dev-draft-input"
              name="body"
              onChange={handleChange}
              autocomplete="off"
            />

            <div>
              <p>Total Project Bounty</p>
              <input
                type="text"
                placeholder="$Negotiable amount put required number validation and other validation on these forms, Ruben"
                name="price"
                onChange={handleChange}
              />
            </div>
            <div className="submit-proposal" onClick={handleSubmit}>
              <button type="button">Submit Proposal</button>
            </div>
          </div>
        </div>
      </div>
    </ProjectModalModal>
  );
};

const mapStateToProps = state => {
  return {
    projectOwner: state.projectOwner,
    fetchingOwner: state.fetchingOwner
  };
};

export default connect(
  mapStateToProps,
  { getOwner, submitProposal }
)(ProjectModal);
