import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFlashcard } from '../store/flashcards';
import styles from '../styles/study.module.css';


const StudyFlashcard = ({ flashcard, index, lastIndex }) => {
    const dispatch = useDispatch();
    const question = flashcard.question;
    const answer = flashcard.answer;
    const [confidence, setConfidence] = useState("");
    const flashcardId = flashcard.id;

    const handleClick = async (event) => {
        event.stopPropagation();
        const res = await dispatch(updateUserFlashcard(question, answer, confidence, flashcardId));

        if (res.ok) {
            const card = document.getElementById(`flashcard-${index}`);
            card.classList.add(styles.hide);
            if (index < lastIndex) {
                const nextCard = document.getElementById(`flashcard-${index + 1}`);
                nextCard.classList.remove(styles.hide);
            } else {
                console.log('All done!');
            }
            return;
        }
    }

    return (
        <div id={`flashcard-${index}`} className={styles.hide}>
            <div>
                <div>{question}</div>
                <div>{answer}</div>
                <form action="" method="">
                    <div>Confidence</div>
                    <input name="confidence" type="text" placeholder="Flashcard confidence" onChange={(e) => setConfidence(e.target.value)} />
                    <button style={{ outline: "none" }} type="button" onClick={handleClick}>Continue</button>
                </form>
            </div>
        </div >
    )
}


export default StudyFlashcard;
