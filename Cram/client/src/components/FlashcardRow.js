import React from 'react';
import { Redirect, Route, NavLink } from 'react-router-dom';

const FlashcardRow = ({ flashcard }) => {
    return (
        <>
            <tr className={`deck-${flashcard.id}`}>
                <td>{flashcard.question}</td>
                <td>{flashcard.answer}</td>
                <td>{flashcard.confidence}</td>
                <td><NavLink to={`/`}>Modify</NavLink></td>
            </tr>
        </>
    );
}

export default FlashcardRow;