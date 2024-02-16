import { useMemo } from "react";
import Notes from "../Notes";
export default function Home(props) {
    const handleDelete = (id) =>  {
        props.deleteNote(id);
    }
    const editedNote = (note,id) => {
        props.newNote(note,id);
    }
    const homeNotes = useMemo(()=> props.notes.filter(note => {return note.type === "Home"}),[props.notes])
    return (
        <div className="anything">
        {homeNotes.length !== 0 ?  homeNotes.map((note, index) => {
            return (
                <Notes
                    key={index}
                    id={index}
                    title={note.title}
                    description={note.description}
                    type={note.type}
                    time={note.time}
                    handleDelete={handleDelete}
                    editedNote={editedNote}
                />
            );
            }
            ) : <div className="sad-face">
            <img className="sadface" src="/assets/img/pngegg.png"></img>
            <h2>There's nothing to be done before going home today. Make a new list tomorrow.</h2>
            </div>}
           
        </div>
    );
}