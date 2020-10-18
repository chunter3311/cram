import React from 'react';
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
                <td><button style={{backgroundColor: "none !important"}}>Study</button></td>
                <td><NavLink to={`/decks/deck-${deck.id}`}>Modify</NavLink></td>
            </tr>
        </>
    );
}

export default DeckRow;