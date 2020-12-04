import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { updateUserFlashcard } from '../store/flashcards';
import styles from '../styles/study.module.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';


const StudyFlashcard = ({ flashcard, index, lastIndex }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const question = flashcard.question;
    const answer = flashcard.answer;
    const [confidence, setConfidence] = useState("");
    const flashcardId = flashcard.id;
    const revealAnswer = () => {
        const answerEl = document.getElementById(`answer-${flashcard.id}`);
        answerEl.classList.remove(styles.hide);
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const res = await dispatch(updateUserFlashcard(question, answer, confidence, flashcardId));

        if (res.ok) {
            const card = document.getElementById(`flashcard-${index}`);
            card.classList.add(styles.hide);
            if (index < lastIndex) {
                const nextCard = document.getElementById(`flashcard-${index + 1}`);
                nextCard.classList.remove(styles.hide);
            } else {
                history.push('/decks');
            }
            return;
        }
    }

    return (
        <div onClick={revealAnswer} id={`flashcard-${index}`} className={`${styles.study_deck_modal_container} ${styles.hide}`}>
            <div className={styles.study_deck_modal_wrapper}>
                <h3 className={styles.study_deck_modal_question}>{question}</h3>
                {/* <button className={styles.study_deck_modal_reveal_button} id={`reveal-answer-${flashcard.id}`} onClick={revealAnswer}>Reveal Answer</button> */}
                <div id={`answer-${flashcard.id}`} className={`${styles.study_deck_modal_answer_wrapper} ${styles.hide}`}>
                    <h3 className={styles.study_deck_modal_answer}>{answer}</h3>
                    <div className={styles.confidence_wrapper}>
                        <h4 className={styles.study_deck_modal_text}>How well do you know this?</h4>
                        <form className={styles.confidence_form} onSubmit={handleClick} action="" method="" style={{ display: "flex", flexDirection: "row", justifyContent: "center", padding: "0 25px 0" }}>
                            <input onClick={() => setConfidence(1)} type="submit" value="Not at all" />
                            <input onClick={() => setConfidence(2)} type="submit" value="Somewhat" />
                            <input onClick={() => setConfidence(3)} type="submit" value="Perfectly" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default StudyFlashcard;
