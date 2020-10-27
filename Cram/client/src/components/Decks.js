import React, { useState, useEffect } from "react"
import styles from '../styles/deck.module.css';
import { toggleCreateDeckModal } from '../store/ui'
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
    
    const [title, setTitle] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setErrors([]);
    }, [title]);

    const CreateDeckModal = (e) => {
        e.preventDefault()
        dispatch(toggleCreateDeckModal());
    }

    return (
        <main className={styles.decks_container}>
            {createDeck ? <NewDeckModal CreateDeckModal={CreateDeckModal}/> : ""}
            {editDeck ? <EditDeckModal editDeckId={editDeckId}/> : ""}
            <h1>My Decks</h1>
            <div className={styles.decks_title_bar}>
                <div className={styles.decks_title}>
                    {/* <h2>My deck list</h2> */}
                </div>
                <div className={styles.buttons}>
                    <button className={styles.newDeck} onClick={CreateDeckModal}>
                        {/* <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg" className="_3rHKgsdA1qX-_9ks50GGiT"><path d="M5.955 4.5H8.03v15H5.955v-15z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M9.281 19.5v-15h7.09c.921 0 1.667.746 1.667 1.666v7.294h-.025a4.583 4.583 0 00-4.346 6.04H9.28zm5.88-9.167a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3z" fill="currentColor"></path><path d="M18.638 15.549a.625.625 0 10-1.25 0v1.904h-1.846a.625.625 0 100 1.25h1.846v1.846a.625.625 0 001.25 0v-1.846h1.904a.625.625 0 100-1.25h-1.904v-1.904z" fill="currentColor"></path></svg> */}
                        New Deck
                    </button>
                </div>
            </div>
            <table className={styles.decks_table}>
                <tbody>
                    <tr className={styles.decks_table_headers}>
                        <th>TITLE</th>
                        <th>STATUS</th>
                        <th></th>
                        <th></th>
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