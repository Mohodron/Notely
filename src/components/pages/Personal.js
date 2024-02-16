import { useMemo } from "react";
import Notes from "../Notes";
export default function Personal(props) {
    const handleDelete = (id) =>  {
        props.deleteNote(id);
    }
    const editedNote = (note,id) => {
        props.newNote(note,id);
    }
    const personalNotes = useMemo(()=> props.notes.filter(note => {return note.type === "Personal"}),[props.notes])
    return (
        <div className="anything">
        {personalNotes.length !== 0 ?  personalNotes.map((note, index) => {
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
            <h2>No personal matters today. Add something new.</h2>
            </div>}
           
        </div>
    );
}