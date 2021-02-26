import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { editUserDecks } from '../store/decks';
import { toggleEditDeckModal } from '../store/ui';
import styles from '../styles/deck.module.css';


const EditDeckModal = ({ editDeckId }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const userId = useSelector(state => state.session.user_id);
    const deck = useSelector(state => Object.values(state.entities.decks).filter((deck) => deck.id === editDeckId));

    const handleClick = async (event) => {
        event.stopPropagation();
        const deckId = editDeckId
        const res = await dispatch(editUserDecks(title, false, userId, deckId));

        if (res.ok) {
            togEditDeckModal(event);
            return;
        }
    }

    const togEditDeckModal = (e) => {
        e.preventDefault()
        dispatch(toggleEditDeckModal())
    }


    return (
        // <div className={"edit-deck-modal-container"} style={{ position: "fixed", width: "100%", height: "100%", backgroundColor: "rgba(133, 133, 133, 0.5)", zIndex: "9" }}>
        //     <div style={{ backgroundColor: "white", opacity: "100%", zIndex: "10", width: "478px", height: "263px", borderRadius: "4px", boxShadow: "0 2px 8px rgba(0,0,0,0.16)", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        //         <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 25px 18px" }}>
        //             <span style={{ fontSize: "18px", fontWeight: "500", fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif" }}>Rename deck</span>
        //             <button style={{ outline: "none"}} type="button" onClick={(e) => { togEditDeckModal(e) }}>
        //                 <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg" className="vQzJB1pohgMjFOPTzHGKk" id="qa-DIALOG_CLOSE"><path d="M17.53 6.47a.75.75 0 00-1.06 0L12 10.94 7.53 6.47a.75.75 0 00-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 101.06 1.06L12 13.06l4.47 4.47a.75.75 0 101.06-1.06L13.06 12l4.47-4.47a.75.75 0 000-1.06z" fill="currentColor"></path></svg>
        //             </button>
        //         </div>
        //         <form action="" method="" style={{display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 25px 0" }}>
        //             <div style={{marginBottom: "5px"}}>Name</div>
        //             <input style={{ outline: "none", borderRadius: "5px", border: "1px solid #E6E6E6", padding: "0 10px 0", width: "406px", height: "38px", marginLeft: "auto", marginRight: "auto", }}
        //                 name="title" type="text" placeholder="Deck name" onChange={(e) => setTitle(e.target.value)} />
        //             <div style={{display: "flex", justifyContent: "flex-end", marginTop: "95px", }}>
        //                 <button style={{boxBorder: "1px solid black", borderRadius: "5px", padding: "10px 15x 10px", outline: "none"}} type="button" onClick={(e) => { togEditDeckModal(e) }}>Cancel</button>
        //                 <button style={{outline: "none"}} type="button" onClick={handleClick}>Continue</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
        <div className={styles.modal_wrapper}>
            <div style={{ padding: "20px", backgroundColor: "white", opacity: "100%", zIndex: "10", width: "478px", height: "263px", borderRadius: "4px", boxShadow: "0 2px 8px rgba(0,0,0,0.16)", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 25px 18px" }}>
                    <span style={{ fontSize: "18px", fontWeight: "500", fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif" }}>Rename this deck</span>
                </div>
                
                <form action="" method="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 25px 0" }}>
                    <input style={{ outline: "none", borderRadius: "5px", border: "1px solid #E6E6E6", padding: "0 10px 0", width: "406px", height: "38px", marginLeft: "auto", marginRight: "auto", }} name="title" type="text" defaultValue={deck[0].title} onChange={(e) => setTitle(e.target.value)} />
                    <div style={{display: "flex", justifyContent: "flex-end", marginTop: "65px", }}>
                        <button style={{marginRight: "15px", boxBorder: "1px solid black", borderRadius: "5px", padding: "10px 15x 10px", outline: "none"}} type="button" onClick={togEditDeckModal}>Cancel</button>
                        <button style={{outline: "none"}} type="button" onClick={handleClick}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default EditDeckModal;
