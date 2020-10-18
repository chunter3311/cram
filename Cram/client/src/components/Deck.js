import React, { useState, useEffect } from "react"
import '../styles/index.css';
import styles from '../styles/deck.module.css';
import { toggleCreateFlashcardModal } from '../store/ui'
import { useDispatch, useSelector } from 'react-redux';
import NewFlashcardModal from './NewFlashcardModal';
import FlashcardRow from './FlashcardRow';


function Deck(props) {
    const dispatch = useDispatch();
    const deckIdNumb = parseInt(props.match.params.deckId.split("").slice(-1)[0]);
    const deck = useSelector(state => Object.values(state.entities.decks).filter((deck) => deck.id === deckIdNumb));
    const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deckIdNumb));
    const createFlashcard = useSelector(state => state.ui.createFlashcard)

    const CreateFlashcardModal = (e) => {
        e.preventDefault();
        dispatch(toggleCreateFlashcardModal());
    }

    return (
        <main className={styles.decks_container}>
            {createFlashcard ? <NewFlashcardModal CreateFlashcardModal={CreateFlashcardModal} /> : ""}
            <h1 style={{display: "block", lineHeight: "0px", margin: "0px", padding: "10px"}}>{deck[0].title}</h1>
            <div className={styles.decks_title_bar}>
                <div className={styles.decks_title}>
                    <h2>Flashcards in {deck[0].title} Deck:</h2>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.newDeck} onClick={CreateFlashcardModal}>New Flashcard <span style={{fontSize: "20px"}}>❏</span></button>
                </div>
            </div>
            <table className={styles.decks_table}>
                <tbody>
                    <tr className={styles.decks_table_headers}>
                        <th>QUESTION</th>
                        <th>ANSWER</th>
                        <th>CONFIDENCE</th>
                        <th></th>
                    </tr>
                    {flashcards.map((flashcard, i) => {
                        return (
                            <FlashcardRow flashcard={flashcard} key={`flashcard-${i + 1}`} />
                        )
                    })}
                </tbody>
            </table>
        </main>
    );
}
export default Deck;