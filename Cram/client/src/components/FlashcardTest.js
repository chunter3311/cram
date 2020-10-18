import React from "react";
import '../styles/index.css';
import styles from '../styles/deck.module.css';
import { toggleCreateFlashcardModal } from '../store/ui'
import { useDispatch, useSelector } from 'react-redux';
import NewFlashcardModal from './NewFlashcardModal';


function FlashcardTest(props) {
    const dispatch = useDispatch();
    const createFlashcard = useSelector(state => state.ui.createFlashcard)

    const CreateFlashcardModal = (e) => {
        e.preventDefault();
        dispatch(toggleCreateFlashcardModal());
    }

    return (
        <main className={styles.decks_container}>
            {createFlashcard ? <NewFlashcardModal CreateFlashcardModal={CreateFlashcardModal} /> : ""}
            <h1>Flashcard Test</h1>
            <div className={styles.decks_title_bar}>
                <div className={styles.decks_title}>
                    <h2>Test...</h2>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.newDeck} onClick={CreateFlashcardModal}>New Flashcard</button>
                </div>
            </div>
        </main>
    );
}
export default FlashcardTest;