import React from "react";
import { useSelector } from 'react-redux';
import styles from '../styles/study.module.css';
import StudyFlashcard from "./StudyFlashcard";

function Study(props) {
    const deckIdNumb = parseInt(props.match.params.deckId.split("").slice(5).join(""));
    const deck = useSelector(state => Object.values(state.entities.decks).filter((deck) => deck.id === deckIdNumb));
    const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deckIdNumb));

    return (
        <main className={styles.study_container}>
            <h1>Now Studying {deck.title}...</h1>
            <h2></h2>
            <table className={styles.decks_table}>
                <tbody>
                    <tr className={styles.decks_table_headers}>
                        <th>QUESTION</th>
                        <th>ANSWER</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {/* <StudyFlashcard flashcards={flashcards} flashcard={flashcards[0]} /> */}
                    {flashcards.map((flashcard, i) => {
                        return (
                            <StudyFlashcard flashcard={flashcard} flashcards={flashcards} deck={deck} key={`flashcard-${i + 1}`} />
                        )
                    })}
                </tbody>
            </table>
        </main>
    );
}
export default Study;