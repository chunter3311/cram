import React, { useState, useEffect } from "react"
import styles from '../styles/deck.module.css';
import { toggleCreateDeckModal } from '../store/ui';
import { useDispatch, useSelector } from 'react-redux';
import NewDeckModal from './NewDeckModal';
import DeckRow from './DeckRow';
import EditDeckModal from './EditDeckModal';

function Decks(props) {

    const dispatch = useDispatch();
    const decks = useSelector(state => Object.values(state.entities.decks));
    const createDeck = useSelector(state => state.ui.createDeck);
    const editDeck = useSelector(state => state.ui.editDeck);
    const [editDeckId, setEditDeckId] = useState(null);

    const createFlashcardBtn = document.getElementById('create-flashcard-modal');
    createFlashcardBtn.classList.add(styles.hide);

    const createDeckBtn = document.getElementById('create-deck-modal');
    createDeckBtn.classList.remove(styles.hide);
    
    // const [title, setTitle] = useState('');
    // const [errors, setErrors] = useState([]);

    // useEffect(() => {
    //     setErrors([]);
    // }, [title]);

    const CreateDeckModal = (e) => {
        e.preventDefault()
        dispatch(toggleCreateDeckModal());
    }

    return (
        <main className={styles.decks_container}>
            {createDeck ? <NewDeckModal CreateDeckModal={CreateDeckModal}/> : ""}
            {editDeck ? <EditDeckModal editDeckId={editDeckId}/> : ""}
            <h1>My Decks</h1>
            <table className={styles.decks_table}>
                <tbody>
                    <tr className={styles.decks_table_headers}>
                        <th>DECK</th>
                        <th>PROGRESS</th>
                        <th></th>
                    </tr>
                    { decks.map((deck, i) => {
                        return (
                            <DeckRow deck={deck} setEditDeckId={setEditDeckId} key={`deck-${i + 1}`}/>
                        )
                    })}
                </tbody>
            </table>
        </main>
    );
}
export default Decks;