import { useMemo } from "react";
import Notes from "../Notes";
export default function Business(props) {
    const handleDelete = (id) =>  {
        props.deleteNote(id);
    }
    const editedNote = (note,id) => {
        props.newNote(note,id);
    }

    const businessNotes = useMemo(()=> props.notes.filter(note => {return note.type === "Business"}),[props.notes])
    return (
        <div className="anything">
        {businessNotes.length !== 0 ?  businessNotes.map((note, index) => {
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
                <img className="sadface" src="/assets/img/pngegg.png" />
                <h2>There are no notes with Business tag today. Add some new ones.</h2>
            </div>}
           
        </div>
    );
}
