import React, { useState } from "react";
import { connect } from "react-redux";
import { submitProject } from "../../../../../redux/actions";
import useInputState from "../../../../../hooks/useInputState";
import styled from "styled-components";
import { electricViolet, privilege, shamrock, shacmrockLight, shamrockText } from "../../../cssVariables";

const AddProjectsForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;
  width: 100%;
  padding-bottom: 50em;
  margin: 3em;
  .input {
    display: flex;
    flex-direction: column;
    margin: .5em;
    
    padding: 1em;
    input,textarea {
      padding: 1em;
      background: ${privilege};
      border: none;
      border-radius: 4px;
      transition: .3s;
      :focus{
          border-left: 2px solid ${electricViolet};
          padding: 1.75em;
          transition: .4s;
          outline: none;
      }
    }
    select{
        :focus{
            outline: none;
        }
    }
  }
  .title {
    input,
    label {
      font-size: 1.8rem;
    }
  }
  .description-and-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price-and-category{
        display: flex;
        flex-direction: column-reverse;
        input,label{
            font-size: 1.3rem;
        }
    }
    .description {
        width: 100%;

        textarea{
            font-size: 1.5em;
            padding: 5em 5em 5em 5em;
            
        }
        label{
            font-size: 1.5rem;
        }
    }
    input {
    }
  }

.tags{
    input, label{
        font-size: 1.2rem;
    }
}
.submit{
        width: 100%;
        background: ${electricViolet};
        color: ${privilege};
        padding: 1.4rem 3rem;
        border-radius: 5px;
        font-size: 1.5rem;
        margin: 2em 0;
    }
  .category-select-menu {
	display: block;
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 500;
	color: #444;
	line-height: 1.3;
	padding: .6em 1.4em .5em .8em;
	width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .5em;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
	background-size: .65em auto, 100%;
}
.category-select-menu::-ms-expand {
	display: none;
}
.category-select-menu:hover {
	border-color: #888;
}
.category-select-menu:focus {
	border-color: #aaa;
	box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
	box-shadow: 0 0 0 3px -moz-mac-focusring;
	color: #222;
	outline: none;
}
.category-select-menu option {
	font-weight:normal;
}
`;

const CreateProjectForm = props => {
  const { submitProject } = props;

  const [name, setName, resetName] = useInputState("");

  const [description, setDescription, resetDescription] = useInputState("");

  const [price, setPrice, resetPrice] = useInputState(100);

  const [category, setCategory] = useState("other");

  const [tags, setTags] = useState("");

  const reset = () => {
    resetName();
    resetDescription();
    resetPrice();
    setCategory("other");
    setTags("");
  };

  const createProjectObject = e => {
    e.preventDefault();
    const newProject = {
      name,
      description,
      price: Number(price),
      category,
      tags: tags.split(" ")
    };

    submitProject(newProject);
    reset();
  };

  return (
    <AddProjectsForm onSubmit={createProjectObject}>
      <div className="input title">
        <label>Project Name:</label>
        <input type="text" value={name} onChange={setName} />
      </div>
      <div className="description-and-details">
        <div className="input description">
          <label>Project Description:</label>
          <textarea value={description} onChange={setDescription} />
        </div>
        <div className="price-and-category">
          <div className="input price">
            <label>Price:</label>
            <input type="number" value={price} onChange={setPrice} />
          </div>

          <div className="input category">
            <label>Project Category:</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="category-select-menu"
            >
              <option value="finance">Finance</option>
              <option value="marketing">Marketing</option>
              <option value="management">Management</option>
              <option value="SEO">SEO</option>
              <option value="ios">ios</option>
              <option value="android">Android</option>
              <option selected value="other">
                Other
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="input tags">
        <label>Related tags to the project:</label>
        <input
          type="text"
          value={tags}
          onChange={e => {
            setTags(e.target.value);
            console.log(tags);
          }}
          placeholder="e.g. finance, website, design, computer science..."
        />
      </div>
      <button type="submit" className="submit">Post Project</button>
    </AddProjectsForm>
  );
};

export default connect(
  null,
  { submitProject }
)(CreateProjectForm);
