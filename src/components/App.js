import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
import Header from "./Header";
import TopElem from "./TopElem";
import Navigators from "./Navigators";
import All from "./pages/All";
import Business from "./pages/Business";
import Personal from "./pages/Personal";
import Home from "./pages/Home";
const App = () => {

    const [notes, setNotes] = useState([]);
    const [query , setQuery] = useState("");

    useEffect(()=> {
        let data = window.localStorage.getItem("Notes");
        data = JSON.parse(data);
        setNotes(data);
    }, []);
    
    useEffect(()=> {
        window.localStorage.setItem("Notes" , JSON.stringify(notes));
    }, [notes])
    let component;

    const populateNotes = (note) => {
        console.log(notes);
        setNotes(prevNotes => {
            return [...prevNotes , note]
        });
    }

    const deleteNote = (id) => {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem,index)=> {
                return index != id;
            })
        });
     
    }

    const newNote = (note,id) => {
        setNotes(prevNotes=> {
            const updatedNotes = [...prevNotes];
            updatedNotes[id] = note;
           console.log(prevNotes);
           return updatedNotes;
        });
    }
    const filteredItems = useMemo(()=> notes.filter(note => {return note.title.toLowerCase().includes(query.toLowerCase())}) , [notes , query]);

    switch (window.location.pathname) {
        case "/":
            component = <All notes={filteredItems} deleteNote={deleteNote} newNote={newNote} />
            break;
        case "/all":
            component = <All notes={filteredItems} deleteNote={deleteNote} newNote={newNote}  />
            break;
        case "/business":
            component = <Business notes={filteredItems} deleteNote={deleteNote} newNote={newNote}  />
            break;
        case "/personal":
            component = <Personal notes={filteredItems} deleteNote={deleteNote} newNote={newNote}  />
            break;
        case "/home":
            component = <Home notes={filteredItems} deleteNote={deleteNote} newNote={newNote}  />
            break;
    }


    return (
        <div className="desktop">
            <div className="div">
                <Header />
                <TopElem populateNotes={populateNotes} query={query} setQuery={setQuery} />
                <div className="overlap-2">
                    <Navigators />
                    <br></br>
                    {component}
                </div>
            </div>
        </div>
    );
};

export default App;


