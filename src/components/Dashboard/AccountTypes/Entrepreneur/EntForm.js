import React from 'react'
import styled from "styled-components"
import { electricViolet, privilege, shamrock } from '../../cssVariables';
const AddProjectsForm = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
overflow-y: scroll;
width: 100%;
padding-bottom: 50em;
margin: 3em;
.title{
    font-size: 1.8rem;
}
.requirement-and-details{
    display: flex;
    justify-content: space-between;
    .requirements{
        width: 100%;
        font-size: 1.5rem;
    }
}
.cost-and-date{
    display: flex; flex-direction: column;
    input{
        font-size: 1.3rem;
    }
}
.key-features{
    display: flex;
    justify-content: space-between;
    
    .key-feature{
        width: 100%;
        font-size: 1.5rem;
        
    }
    button{
        padding: 1.4em 3em;
        background: ${shamrock};
        color: ${privilege};
        border-radius: 5px;
        font-size: 1.3rem;
        margin-right: ${3.5625 + .5}em;
    }
}
.submit{
        margin: 2em 0;
        padding: 1em 2em;

        background: ${electricViolet};
        color: ${privilege};
        border-radius: 5px;
        align-self: left;
        width: 25%;
        font-size: 1.5rem;
}
input,button{
    margin: .5em;
   
    padding: 2em;
    background: none;
    border: none;
    box-shadow: none;
    transition: .4s;
    :focus{
        border-left: 1px solid ${electricViolet};
        transition: .4s;
        padding: 2.5em;
    }
}
`
export default function EntForm() {
    return (
        <AddProjectsForm>
         <input className="title" placeholder="Project Title" name="title" />
         
         <div className="requirement-and-details"><input className="requirements" placeholder="a great idea can only manifest with great execution. How can our professional devs build this application?" name="body" />
        <div className="cost-and-date">
        <input className="cost" placeholder="$cost"  />
         <input className="date" placeholder="start date" name="startDate" />
         <input className="date" placeholder=" end date" name="endDate" /> 
        </div>
        </div>
        <div className="key-features" >
        <input className="key-feature" placeholder="Something essential for this application to work." />
        <button type="button" onClick={(e) => e.preventDefault()} >Add a Key Feature</button>
        </div>
        <button className="submit">Submit Project</button>
         
        </AddProjectsForm>
    )
}
