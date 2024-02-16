import React, { useState } from "react";
import Modal from "./Modal";

const TopElem = ({populateNotes, query , setQuery}) => {
    const [showModal , setShowModal]  = useState(false);
    const handleClick = () => {
        setShowModal(()=> true);
    }
    
    // window.localStorage.setItem(notes);
    const createNotes = (note) => {
        populateNotes(note);
    };


    return (
        <div className="overlap-group">
            <div className="group">
                <input value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder="Search" className="frame" />
                <div className="material-symbols">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="white" d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261zM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37" /></svg>
                </div>
                <button className="rectangle" onClick={handleClick} ><sapn className="text-wrapper-3">Add</sapn></button>
                {/* <div>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <div className="ion-moon-sharp">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 512 512"><path fill="currentColor" d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38C32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85c-28.42 12.38-61.8 17.23-94.77 17.23c-128.47 0-232.61-104.14-232.61-232.61" /></svg>
                        </div>
                        <div className="ion-moon-sharp-wrapper"/>
                    </div>
                </div> */}
                <div className="show-modal">
                {showModal && <Modal setShowModal={setShowModal} createNotes={createNotes}/>}    
                </div>
                
            </div>

        </div>
    );
}

export default TopElem;