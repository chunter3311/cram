import React, { useState, useEffect } from "react";
import '../styles/index.css';
import styles from '../styles/deck.module.css';
import { toggleCreateFlashcardModal } from '../store/ui';
import { useDispatch, useSelector } from 'react-redux';
import FlashcardRow from './FlashcardRow';
import StudyFlashcard from './StudyFlashcard';


function Study(props) {
    // const dispatch = useDispatch();
    const deckIdNumb = parseInt(props.match.params.deckId.split("").slice(5).join(""));
    const deck = useSelector(state => Object.values(state.entities.decks).filter((deck) => deck.id === deckIdNumb));
    const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deckIdNumb));

    // const editFlashcard = useSelector(state => state.ui.editFlashcard)
    // const [editFlashcardId, setEditFlashcardId] = useState(null);


    return (
        <main className={styles.decks_container}>
            {/* {editFlashcard ? <StudyFlashcard editFlashcardId={editFlashcardId}/> : ""} */}
            <h1>Now Studying: {deck[0].title}</h1>
            {flashcards.map((flashcard, i) => {
                return (
                    <StudyFlashcard flashcard={flashcard} key={`flashcard-${i + 1}`} />
                    // <FlashcardRow flashcard={flashcard} setEditFlashcardId={setEditFlashcardId} key={`flashcard-${i + 1}`} />
                )
            })}
            {/* <table className={styles.decks_table}>
                <tbody>
                    <tr className={styles.decks_table_headers}>
                        <th>QUESTION</th>
                        <th>ANSWER</th>
                        <th>CONFIDENCE</th>
                        <th>DECK ID</th>
                        <th></th>
                    </tr>
                    {flashcards.map((flashcard, i) => {
                        return (
                            <StudyFlashcard flashcard={flashcard} key={`flashcard-${i + 1}`} />
                            // <FlashcardRow flashcard={flashcard} setEditFlashcardId={setEditFlashcardId} key={`flashcard-${i + 1}`} />
                        )
                    })}
                </tbody>
            </table> */}
        </main>
    );
}
export default Study;