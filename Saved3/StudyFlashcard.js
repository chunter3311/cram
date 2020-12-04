import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFlashcard } from '../store/flashcards';
import styles from '../styles/study.module.css';
import Deck from "./Deck";
import Study from "./Study";
import { editUserDecks } from '../store/decks';


const StudyFlashcard = ({ flashcard, flashcards, deck }) => {
    const dispatch = useDispatch();
    const [confidence, setConfidence] = useState("");
    const answerTD = document.getElementById(`answer-${flashcard.id}`);
    
    const revealAnswer = () => {
        answerTD.classList.remove(styles.hide);
    }
    
    const checkIfMastered = () => {
        for (let i = 0; i < flashcards.length; i++) {
            if (flashcards[i].confidence !== 3) return false;
        }
        return true;
    }

    const handleClick = async (event) => {
        event.stopPropagation();
        const question = flashcard.question;
        const answer = flashcard.answer;
        const flashcardId = flashcard.id;
        const res = await dispatch(updateUserFlashcard(question, answer, confidence, flashcardId));

        if (res.ok) {
            if (checkIfMastered()) deck.isMastered = true;
            return;
        }
    }

    return (
        <>
            <tr className={`flashcard-${flashcard.id}`}>
                <td>{flashcard.question}</td>
                <td id={`answer-${flashcard.id}`} className={styles.hide}>{flashcard.answer}</td>
                <td>
                    <button onClick={revealAnswer}>Reveal Answer</button>
                </td>
                <td>
                    <form action="" method="" style={{display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 25px 0" }}>
                        <h2>How well do you know this?</h2>
                        <input style={{ outline: "none", borderRadius: "5px", border: "1px solid #E6E6E6", padding: "0 10px 0", width: "406px", height: "38px", marginLeft: "auto", marginRight: "auto", }} name="confidence" type="text" placeholder="Flashcard confidence" onChange={(e) => setConfidence(e.target.value)} />
                        <div style={{display: "flex", justifyContent: "flex-end", marginTop: "95px", }}>
                            {/* <button style={{boxBorder: "1px solid black", borderRadius: "5px", padding: "10px 15x 10px", outline: "none"}} type="button" onClick={(e) => { togEditFlashcardModal(e) }}>Cancel</button> */}
                            <button style={{outline: "none"}} type="button" onClick={handleClick}>Continue</button>
                        </div>
                    </form>
                </td>
            </tr>
        </>
    );
}

export default StudyFlashcard;