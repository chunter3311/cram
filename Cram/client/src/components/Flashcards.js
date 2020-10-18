import React, { useState, useEffect } from "react"
import '../styles/index.css';
import styles from '../styles/deck.module.css';
import { toggleCreateFlashcardModal } from '../store/ui'
import { useDispatch, useSelector } from 'react-redux';
import NewFlashcardModal from './NewFlashcardModal';
import FlashcardRow from './FlashcardRow';


function Flashcards(props) {
    const dispatch = useDispatch();
    const flashcards = useSelector(state => Object.values(state.entities.flashcards))
    const createFlashcard = useSelector(state => state.ui.createFlashcard)

    const CreateFlashcardModal = (e) => {
        e.preventDefault();
        dispatch(toggleCreateFlashcardModal());
    }

    return (
        <main className={styles.decks_container}>
            {createFlashcard ? <NewFlashcardModal CreateFlashcardModal={CreateFlashcardModal} /> : ""}
            <h1 style={{display: "block", lineHeight: "0px", margin: "0px", padding: "10px"}}>Flashcards</h1>
            <div className={styles.decks_title_bar}>
                <div className={styles.decks_title}>
                    <h2>All flashcards:</h2>
                </div>
                <div className={styles.buttons}>
                    {/* <button className={styles.newDeck} onClick={CreateFlashcardModal}>New Flashcard <span style={{fontSize: "20px"}}>❏</span></button> */}
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
export default Flashcards;