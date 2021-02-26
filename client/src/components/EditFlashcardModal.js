import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFlashcard } from '../store/flashcards';
import { toggleEditFlashcardModal } from '../store/ui';
import styles from '../styles/deck.module.css';


const EditFlashcardModal = ({ editFlashcardId }) => {
    const dispatch = useDispatch();
    const flashcard = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.id === editFlashcardId));
    const oldQuestion = flashcard[0].question;
    const oldAnswer = flashcard[0].answer;
    const [question, setQuestion] = useState(oldQuestion);
    const [answer, setAnswer] = useState(oldAnswer);
    const confidence = flashcard[0].confidence;
    const flashcardId = editFlashcardId

    const handleClick = async (event) => {
        event.stopPropagation();
        const res = await dispatch(updateUserFlashcard(question, answer, confidence, flashcardId));

        if (res.ok) {
            togEditFlashcardModal(event);
            return;
        }
    }

    const togEditFlashcardModal = (e) => {
        // console.log(e.target.name)
        e.preventDefault();
        // console.log(e.target)
        // if (e.target === null || !e.target.name) dispatch(toggleEditFlashcardModal());
        // if (!e.target.name) dispatch(toggleEditFlashcardModal());
        dispatch(toggleEditFlashcardModal());
    }

    return (
        <div className={styles.modal_wrapper}>
            <div style={{ padding: "20px", backgroundColor: "white", opacity: "100%", zIndex: "10", width: "478px", height: "263px", borderRadius: "4px", boxShadow: "0 2px 8px rgba(0,0,0,0.16)", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 25px 18px" }}>
                    <span style={{ fontSize: "18px", fontWeight: "500", fontFamily: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif" }}>Make changes to this flashcard</span>
                </div>

                <form action="" method="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 25px 0" }}>
                    <input style={{ outline: "none", borderRadius: "5px", border: "1px solid #E6E6E6", padding: "0 10px 0", width: "406px", height: "38px", marginLeft: "auto", marginRight: "auto", }} name="question" type="text" defaultValue={oldQuestion} onChange={(e) => setQuestion(e.target.value)} />
                    <input style={{ outline: "none", borderRadius: "5px", border: "1px solid #E6E6E6", padding: "0 10px 0", width: "406px", height: "38px", marginLeft: "auto", marginRight: "auto", }} name="question" type="text" defaultValue={oldAnswer} onChange={(e) => setAnswer(e.target.value)} />
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "65px", }}>
                        <button style={{ marginRight: "15px", boxBorder: "1px solid black", borderRadius: "5px", padding: "10px 15x 10px", outline: "none" }} type="button" onClick={togEditFlashcardModal}>Cancel</button>
                        <button style={{ outline: "none" }} type="button" onClick={handleClick}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditFlashcardModal;
