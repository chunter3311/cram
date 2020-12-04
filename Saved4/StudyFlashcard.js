import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFlashcard } from '../store/flashcards';
import { toggleEditFlashcardModal } from '../store/ui';
import { trashFlashcard } from '../store/trash';
import styles from '../styles/edit_deck_modal.module.css';


const StudyFlashcard = ({ flashcard }) => {
    const dispatch = useDispatch();
    const question = flashcard.question;
    const answer = flashcard.answer;
    const [confidence, setConfidence] = useState("");
    const flashcardId = flashcard.id;

    const handleClick = async (event) => {
        event.stopPropagation();
        const res = await dispatch(updateUserFlashcard(question, answer, confidence, flashcardId));

        if (res.ok) {
            // togEditFlashcardModal(event);
            return;
        }
    }

    // const togEditFlashcardModal = (e) => {
    //     e.preventDefault()
    //     dispatch(toggleEditFlashcardModal())
    // }

    return (
        <div>
            <div>
                <div>{question}</div>
                <div>{answer}</div>

                <form action="" method="">
                    <div>Confidence</div>
                    <input name="confidence" type="text" placeholder="Flashcard confidence" onChange={(e) => setConfidence(e.target.value)} />
                    <div>
                        <button style={{ outline: "none" }} type="button" onClick={handleClick}>Continue</button>
                    </div>
                </form>
            </div>
        </div >
    )
    // return (
    //     <div className={styles.edit_deck_modal_container}>
    //         <div style={{ backgroundColor: "white", opacity: "100%", zIndex: "10", width: "478px", height: "463px", borderRadius: "4px", boxShadow: "0 2px 8px rgba(0,0,0,0.16)", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
    //             {/* <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 25px 18px" }}>
    //                 <span style={{ fontSize: "18px", fontWeight: "500", fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif" }}>Modify flashcard</span>
    //                 <button style={{ outline: "none"}} type="button" onClick={(e) => { togEditFlashcardModal(e) }}>
    //                     <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg" className="vQzJB1pohgMjFOPTzHGKk" id="qa-DIALOG_CLOSE"><path d="M17.53 6.47a.75.75 0 00-1.06 0L12 10.94 7.53 6.47a.75.75 0 00-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 101.06 1.06L12 13.06l4.47 4.47a.75.75 0 101.06-1.06L13.06 12l4.47-4.47a.75.75 0 000-1.06z" fill="currentColor"></path></svg>
    //                 </button>
    //             </div> */}
    //             <div style={{ marginBottom: "5px" }}>{question}</div>
    //             <div style={{ marginBottom: "5px" }}>{answer}</div>

    //             <form action="" method="" style={{display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 25px 0" }}>
    //                 <div style={{ marginBottom: "5px" }}>Confidence</div>
    //                 <input style={{ outline: "none", borderRadius: "5px", border: "1px solid #E6E6E6", padding: "0 10px 0", width: "406px", height: "38px", marginLeft: "auto", marginRight: "auto", }} name="confidence" type="text" placeholder="Flashcard confidence" onChange={(e) => setConfidence(e.target.value)} />
    //                 <div style={{display: "flex", justifyContent: "flex-end", marginTop: "95px", }}>
    //                     {/* <button style={{boxBorder: "1px solid black", borderRadius: "5px", padding: "10px 15x 10px", outline: "none"}} type="button" onClick={(e) => { togEditFlashcardModal(e) }}>Cancel</button> */}
    //                     <button style={{outline: "none"}} type="button" onClick={handleClick}>Continue</button>
    //                 </div>
    //             </form>
    //         </div>
    //     </div >
    // )
}


export default StudyFlashcard;
