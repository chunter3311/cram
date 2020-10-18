import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, NavLink } from 'react-router-dom';


const DeckRow = ({ deck }) => {
    const checkIsMastered = () => {
        if (deck.isMastered) return "Mastered";
        else return "Still Learning";
    }

    return (
        <>
            <tr className={`deck-${deck.id}`}>
                <td>{deck.title}</td>
                <td>{checkIsMastered()}</td>
                <td><button>Study</button></td>
                <td>
                    <NavLink to="/decks/deck">Modify</NavLink>
                </td>
            </tr>
        </>
    );
}

export default DeckRow;