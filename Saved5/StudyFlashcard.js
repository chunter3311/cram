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

        if (res.ok)

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
    

    // const setConfidenceLevel2 = async (event) => {
    //     event.stopPropagation();
    //     setConfidence(2);
    //     console.log('test');
    //     console.log(confidence)
    //     const res = await dispatch(updateUserFlashcard(question, answer, confidence, flashcardId));
    //     if (res.ok) {
    //         nextFlashcard();
    //         return;
    //     }
    // }

    // const setConfidenceLevel3 = async (event) => {
    //     event.stopPropagation();
    //     setConfidence(3);
    //     console.log('test');
    //     console.log(confidence)
    //     const res = await dispatch(updateUserFlashcard(question, answer, confidence, flashcardId));
    //     if (res.ok) {
    //         nextFlashcard();
    //         return;
    //     }
    // }

    // const nextFlashcard = () => {
    //     const card = document.getElementById(`flashcard-${index}`);
    //     card.classList.add(styles.hide);
    //     if (index < lastIndex) {
    //         const nextCard = document.getElementById(`flashcard-${index + 1}`);
    //         nextCard.classList.remove(styles.hide);
    //     } else {
    //         console.log('All done!');
    //     }
    // }

    return (
        <div id={`flashcard-${index}`} className={`${styles.study_deck_modal_container} ${styles.hide}`}>
            <div className={styles.study_deck_modal_wrapper}>
                <h3>{question}</h3>
                <h3>{answer}</h3>
                <h4>How well did you know this?</h4>
                <form action="" method="" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 25px 0" }}>
                    {/* <div style={{marginBottom: "5px"}}>Name</div>
                    <input style={{ outline: "none", borderRadius: "5px", border: "1px solid #E6E6E6", padding: "0 10px 0", width: "406px", height: "38px", marginLeft: "auto", marginRight: "auto", }}
                        name="title" type="text" placeholder="Deck name" onChange={(e) => setTitle(e.target.value)} /> */}
                    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "95px", }}>
                        {/* <button style={{boxBorder: "1px solid black", borderRadius: "5px", padding: "10px 15x 10px", outline: "none"}} type="button" onClick={(e) => { togEditDeckModal(e) }}>Cancel</button>
                        <button style={{outline: "none"}} type="button" onClick={handleClick}>Continue</button> */}
                        <input name="title" type="text" placeholder="Deck name" onChange={(e) => setConfidence(e.target.value)} />
                        <button style={{ outline: "none" }} type="button" onClick={handleClick}>Continue</button>
                        {/* <button type="button" onClick={setConfidenceLevel1}>Not at all</button>
                        <button type="button" onClick={setConfidenceLevel2}>Somewhat</button>
                        <button type="button" onClick={setConfidenceLevel3}>Perfectly</button> */}
                    </div>
                </form>
                {/* <div className={styles.study_deck_modal_buttons}>
                    <button type="button" onClick={setConfidenceLevel1}>Not at all</button>
                    <button type="button" onClick={setConfidenceLevel2}>Somewhat</button>
                    <button type="button" onClick={setConfidenceLevel3}>Perfectly</button>
                </div> */}
            </div>
        </div >
    )
}


export default StudyFlashcard;
