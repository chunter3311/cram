import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, NavLink } from 'react-router-dom';


const FlashcardRow = ({ flashcard }) => {
    return (
        <>
            <tr className={`flashcard-${flashcard.id}`}>
                <td>{flashcard.question}</td>
                <td>{flashcard.answer}</td>
                <td>{flashcard.confidence}</td>
                <td>
                    <NavLink to="/decks/deck">Modify</NavLink>
                </td>
            </tr>
        </>
    );
}

export default FlashcardRow;