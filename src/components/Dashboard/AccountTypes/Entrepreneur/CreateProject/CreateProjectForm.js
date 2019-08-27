import React, { useState } from 'react';
import { connect } from 'react-redux'
import useInputState from '../../../../../hooks/useInputState'

const CreateProjectForm = () => {
    const [name, setName, resetName] = useInputState("");

    const [description, setDescription, resetDescription] = useInputState("");

    const [price, setPrice, resetPrice] = useInputState(100);

    const [category, setCategory] = useState("other");

    const [tags, setTags] = useState("");

    const [project, setProject] = useState({ name: "", description: "", price: "", category: "", tags: "" });

    const reset = () => {
        resetName();
        resetDescription();
        resetPrice();
        setCategory("other");
        setTags("");
        setProject({ name: "", description: "", price: "", category: "", tags: "" })
    }

    const submitProject = (e) => {
        e.preventDefault();
        setProject({
            name,
            description,
            price,
            category,
            tags: tags.split(" ")
        });
        console.log(project.tags)
        reset();
    }

    return (
        <form onSubmit={submitProject}>
            <label>
                Project Name:
            </label>
            <input type="text" value={name} onChange={setName} />

            <label>
                Project Description:
            </label>
            <textarea value={description} onChange={setDescription}></textarea>

            <label>
                Price:
            </label>
            <input type="number" value={price} onChange={setPrice} />

            <label>Project Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="finance">Finance</option>
                <option value="marketing">Marketing</option>
                <option value="management">Management</option>
                <option value="SEO">SEO</option>
                <option value="ios">ios</option>
                <option value="android">Android</option>
                <option selected value="other">Other</option>
            </select>

            <label>
                Related tags to the project:
            </label>
            <input type="text" value={tags} onChange={(e) => {
                setTags(e.target.value);
            }} />
        </form>
    )
}

export default CreateProjectForm;