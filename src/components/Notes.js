import React, { useState } from "react";

const Notes = ({ type, title, description, time, id, key, handleDelete, editedNote }) => {
    const [edit, setEdit] = useState(false);




    const handleClick = () => {
        handleDelete(id);
    }

    const handleEdit = () => {
        setEdit(true);
    }


    const EditArea = () => {
        const date = new Date().toLocaleDateString();
        const [note, setNote] = useState({ title: title, type: type, description: description, time: date });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setNote((prevNote) => {
                return {
                    ...prevNote,
                    [name]: value
                };
            })
        }

        const handleEditSubmit = (e) => {
            setEdit(() => { return false });
            editedNote(note, id);
            e.preventDefault();
        };

        return (
            <div className="show-modal-2">
                <div className="modal">
                    <div className="overlay"></div>
                    <form onSubmit={handleEditSubmit} id="editForm" className="form">
                        <div className="title-area">
                            <label>Add Title</label>
                            <input type="text" onChange={handleChange} name="title" placeholder="Title" value={note.title} required></input>
                        </div>
                        <div className="catagories">
                            <label className="dropdown">Catagories</label>
                            <select className="select-type" onChange={handleChange} name="type" value={note.type} required>
                                <option value={"Business"} >Business</option>
                                <option value={"Home"}>Home</option>
                                <option value={"Personal"}>Personal</option>
                            </select>
                        </div>
                        <div className="content-area">
                            <label className="description">Description</label>
                            <textarea className="content" onChange={handleChange} type="text" name="description" value={note.description} placeholder="Content" rows={10} />
                        </div>
                        <div className="modal-buttons">
                            <button>cancle</button>
                            <button type="submit">Add Note</button>
                        </div>

                    </form>
                </div>
            </div>

        );
    }

    return (
        <div className="overlap-wrapper">
            <div className="overlap-3">
                <div className="group-2">
                    <div className="div-wrapper">
                        <div className="text-wrapper-4">{type}</div>
                    </div>
                    {/* <div className="overlap-group-2">
                        <div className="rectangle-2" />
                        <div className="vector" alt="Vector" src="vector-2.svg" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M14.707 3L5.5 12.207L.293 7L1 6.293l4.5 4.5l8.5-8.5z" clip-rule="evenodd" /></svg>
                        </div>
                    </div> */}
                    <div className="circum-edit" onClick={handleEdit}>
                        <div className="button-background-1"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.548 20.938h16.9a.5.5 0 0 0 0-1h-16.9a.5.5 0 0 0 0 1M9.71 17.18a2.587 2.587 0 0 0 1.12-.65l9.54-9.54a1.75 1.75 0 0 0 0-2.47l-.94-.93a1.788 1.788 0 0 0-2.47 0l-9.54 9.53a2.473 2.473 0 0 0-.64 1.12L6.04 17a.737.737 0 0 0 .19.72a.767.767 0 0 0 .53.22Zm.41-1.36a1.468 1.468 0 0 1-.67.39l-.97.26l-1-1l.26-.97a1.521 1.521 0 0 1 .39-.67l.38-.37l1.99 1.99Zm1.09-1.08l-1.99-1.99l6.73-6.73l1.99 1.99Zm8.45-8.45L18.65 7.3l-1.99-1.99l1.01-1.02a.748.748 0 0 1 1.06 0l.93.94a.754.754 0 0 1 0 1.06" /></svg>
                    </div>
                    <div className="img" alt="Material symbols" src="material-symbols-light-delete-outline-2.svg" onClick={handleClick}>
                        <div className="button-background"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.615 20q-.67 0-1.143-.472Q6 19.056 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463zM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.23 0 .423-.192q.192-.193.192-.423zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z" /></svg>
                    </div>
                </div>
                <p className="text-wrapper-5">{title}</p>
                <p className="text-wrapper-6">{description}</p>
                <div className="text-wrapper-7">{time}</div>
            </div>
            {edit && <EditArea />}
        </div>
    );

}

export default Notes;