import React, { useState } from "react";
import '../styles/index.css';
import styles from '../styles/deck.module.css';
import { toggleCreateFlashcardModal } from '../store/ui';
import { useDispatch, useSelector } from 'react-redux';
import NewFlashcardModal from './NewFlashcardModal';
import FlashcardRow from './FlashcardRow';
import EditFlashcardModal from './EditFlashcardModal';
import EditDeckModal from './EditDeckModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { toggleEditDeckModal } from '../store/ui';

function Deck(props) {
    const dispatch = useDispatch();
    const deckIdNumb = parseInt(props.match.params.deckId.split("").slice(5).join(""));
    const deck = useSelector(state => Object.values(state.entities.decks).filter((deck) => deck.id === deckIdNumb));
    const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deckIdNumb));
    const createFlashcard = useSelector(state => state.ui.createFlashcard);

    const editFlashcard = useSelector(state => state.ui.editFlashcard)
    const [editFlashcardId, setEditFlashcardId] = useState(null);

    const editDeck = useSelector(state => state.ui.editDeck);
    const [editDeckId, setEditDeckId] = useState(null);

    const createFlashcardBtn = document.getElementById('create-flashcard-modal');
    createFlashcardBtn.classList.remove(styles.hide);

    const createDeckBtn = document.getElementById('create-deck-modal');
    createDeckBtn.classList.add(styles.hide);

    const togEditDeckModal = (e) => {
        e.preventDefault()
        setEditDeckId(deckIdNumb)
        dispatch(toggleEditDeckModal())
    }

    const CreateFlashcardModal = (e) => {
        e.preventDefault();
        dispatch(toggleCreateFlashcardModal());
    }

    return (
        <main className={styles.decks_container}>
            {createFlashcard ? <NewFlashcardModal deckId={deckIdNumb} CreateFlashcardModal={CreateFlashcardModal} /> : ""}
            {editFlashcard ? <EditFlashcardModal editFlashcardId={editFlashcardId}/> : ""}
            {editDeck ? <EditDeckModal editDeckId={deckIdNumb}/> : ""}
            {/* <h1>{deck[0].title}</h1> */}
            <h1 onClick={togEditDeckModal} className={styles.deck_title}>{deck[0].title} <FontAwesomeIcon icon={faPenAlt} /></h1>
            {/* <div className={styles.decks_title_bar}>
                <div className={styles.decks_title}>
                    <h2>Flashcards</h2>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.newDeck} onClick={CreateFlashcardModal}>New Flashcard <span style={{fontSize: "20px"}}>❏</span></button>
                </div>
            </div> */}
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
                            <FlashcardRow flashcard={flashcard} setEditFlashcardId={setEditFlashcardId} key={`flashcard-${i + 1}`} />
                        )
                    })}
                </tbody>
            </table>
        </main>
    );
}
export default Deck;