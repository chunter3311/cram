import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toggleEditDeckModal } from '../store/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/deck.module.css';

const DeckRow = ({ deck, setEditDeckId }) => {
    const dispatch=useDispatch();
    const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deck.id));

    const togEditDeckModal = (e) => {
        e.preventDefault()
        setEditDeckId(deck.id)
        dispatch(toggleEditDeckModal())
    }

    const checkProgress = () => {
        let masteredFlashcards = 0;
        for (let i = 0; i < flashcards.length; i++) {
            if (flashcards[i].confidence === 3) {
                masteredFlashcards++;
            }
        }
        return masteredFlashcards;
    }

    const setProgress = () => {
        let masteredFlashcards = checkProgress();
        if (masteredFlashcards === 0) return "0%";
        else if (masteredFlashcards === flashcards.length) {
            deck.isMastered = true;
            return "Mastered";
        } else {
            return `${Math.round(((100 / flashcards.length) * masteredFlashcards))}%`;
        }
    }

    return (
        <>
            <tr className={`deck-${deck.id}`}>
                <td className={styles.deck_title_two_td}><NavLink className={styles.deck_title_two} to={`/decks/deck-${deck.id}`}>{deck.title} <FontAwesomeIcon icon={faPenAlt} /></NavLink></td>
                {/* <td onClick={togEditDeckModal} className={styles.deck_title}>{deck.title} <FontAwesomeIcon icon={faPenAlt} /></td> */}
                <td className={styles.deck_progress}>{setProgress()}</td>
                <td className={styles.deck_study_button}><NavLink to={`/decks/deck-${deck.id}/study`}><FontAwesomeIcon icon={faPlayCircle} /></NavLink></td>
            </tr>
        </>
    );
}

export default DeckRow;