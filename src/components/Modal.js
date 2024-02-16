import React, { useState } from "react";

const Modal = ({ setShowModal, createNotes }) => {
    const [note, setNote] = useState({ title: "", type: "Business", description: "", time: "" });
    const date = new Date().toLocaleDateString();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prevNotes) => {
            return {
                ...prevNotes,
                [name]: value,
                time: date
            };

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(() => { return false });
        createNotes(note);
        
    };

    const handleCancle = () => {
        setShowModal(()=> {return false});
    }

    return (
        <div className="modal">
        <div className="overlay"></div>
            <form onSubmit={handleSubmit} className="form">
                <div className="title-area">
                    <label>Add Title</label>
                    <input type="text" onChange={handleChange} name="title" placeholder="Title" value={note.title} required></input>
                </div>
                <div className="catagories">
                    <label className="dropdown">Category</label>
                    <select className="select-type" onChange={handleChange} name="type" value={note.type} required>
                        <option value={"Business"} >Business</option>
                        <option value={"Home"}>Home</option>
                        <option value={"Personal"}>Personal</option>
                    </select>
                </div>
                <div className="content-area">
                    <label className="description">Description</label>
                    <textarea className="content" onChange={handleChange} type="text" name="description" placeholder="Content" rows={10}  value={note.description} />
                </div>
                <div className="modal-buttons">
                <button onClick={handleCancle}>Cancle</button>
                <button type="submit">Add Note</button>
                </div>
                
            </form>
        </div>
    );
}

export default Modal;