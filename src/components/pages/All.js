import Notes from "../Notes";

export default function All(props) {
    const handleDelete = (id) => {
        props.deleteNote(id);
    }
    const editedNote = (note, id) => {
        props.newNote(note, id);
    }
    return (
        <div className="anything">
            {props.notes.length !== 0 ? props.notes.map((note, index) => {
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
                <h2>Opps!!!There are no notes to complete. Add some new notes.</h2>
            </div>}

        </div>
    );
}
