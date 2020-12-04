import React from 'react';
import { toggleEditFlashcardModal } from '../store/ui';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/deck.module.css';

const FlashcardRow = ({ flashcard, setEditFlashcardId }) => {
    const dispatch=useDispatch();

    const togEditFlashcardModal = (e) => {
        e.preventDefault()
        setEditFlashcardId(flashcard.id)
        dispatch(toggleEditFlashcardModal())
    }
    
    return (
        <>  
            <tr className={`flashcard-${flashcard.id}`}>
                <td>{flashcard.question}</td>
                <td>{flashcard.answer}</td>
                <td>{flashcard.confidence}</td>
                <td className={styles.edit_deck_icon} onClick={togEditFlashcardModal}><FontAwesomeIcon icon={faPenAlt} /></td>
            </tr>
        </>
    );
}

export default FlashcardRow;