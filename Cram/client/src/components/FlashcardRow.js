import React from 'react';
import { toggleEditFlashcardModal } from '../store/ui';
import { useDispatch, useSelector } from 'react-redux';


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
                <td>{flashcard.deckId}</td>
                <td>
                    <button onClick={togEditFlashcardModal}>Modify</button>
                </td>
            </tr>
        </>
    );
}

export default FlashcardRow;