import React, { useState, useEffect } from "react"
import { useSelector } from 'react-redux';
import DeckRow from './DeckRow';
import EditDeckModal from './EditDeckModal';

function Decks(props) {
    const decks = useSelector(state => Object.values(state.entities.decks));
    const editDeck = useSelector(state => state.ui.editDeck);
    const [editDeckId, setEditDeckId] = useState(null);
    
    // const [title, setTitle] = useState('');
    // const [errors, setErrors] = useState([]);

    // useEffect(() => {
    //     setErrors([]);
    // }, [title]);

    return (
        <main>
            {editDeck ? <EditDeckModal editDeckId={editDeckId}/> : ""}
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