import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, NavLink } from 'react-router-dom';
import { toggleEditDeckModal } from '../store/ui';


const DeckRow = ({ deck, setEditDeckId }) => {
    const dispatch=useDispatch();

    const togEditDeckModal = (e) => {
        e.preventDefault()
        setEditDeckId(deck.id)
        dispatch(toggleEditDeckModal())
    }

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
                <td><button onClick={togEditDeckModal}>Rename</button></td>
            </tr>
        </>
    );
}

export default DeckRow;