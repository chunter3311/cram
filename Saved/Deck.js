import React, { useState, useEffect } from "react"
import styles from '../styles/deck.module.css';
import { toggleCreateFlashcardModal } from '../store/ui'
import { useDispatch, useSelector } from 'react-redux';
// import NewFlashcardModal from './NewFlashcardModal';
import FlashcardRow from './FlashcardRow';


function Deck({deck, username, setEditDeckId}) {

    // const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deck.id));
    const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deck.id));

    const dispatch = useDispatch();
    // const flashcards = useSelector(state => Object.values(state.entities.flashcards))
    // const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deck.id));
    // const createFlashcard = useSelector(state => state.ui.createFlashcard);
    
    const [title, setTitle] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setErrors([]);
    }, [title]);

    const CreateFlashcardModal = (e) => {
        e.preventDefault()
        dispatch(toggleCreateFlashcardModal());
    }

    return (
        <main className={styles.decks_container}>
            {/* {createFlashcard ? <NewFlashcardModal CreateFlashcardModal={CreateFlashcardModal}/> : ""} */}
            <h1>This Deck</h1>
            <div className={styles.decks_title_bar}>
                <div className={styles.decks_title}>
                    <h2>Flashcards</h2>
                </div>
                <div className={styles.buttons}>
                    {/* <button className={styles.newDeck} onClick={CreateFlashcardModal}>
                        <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg" className="_3rHKgsdA1qX-_9ks50GGiT"><path d="M5.955 4.5H8.03v15H5.955v-15z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M9.281 19.5v-15h7.09c.921 0 1.667.746 1.667 1.666v7.294h-.025a4.583 4.583 0 00-4.346 6.04H9.28zm5.88-9.167a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3z" fill="currentColor"></path><path d="M18.638 15.549a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 001.25 0v-1.846h1.904a.625.625 0 100-1.25h-1.904v-1.904z" fill="currentColor"></path></svg>
                        New Flashcard
                    </button> */}
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
                    { flashcards.map((flashcard, i) => {
                        return (
                            <FlashcardRow flashcard={flashcard} key={`flashcard-${i + 1}`}/>
                        )
                    })}
                </tbody>
            </table>
        </main>
    );
}
export default Deck;