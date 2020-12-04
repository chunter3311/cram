import React, { useState, useEffect } from "react";
import '../styles/index.css';
import { useDispatch, useSelector } from 'react-redux';
import StudyFlashcard from './StudyFlashcard';
import styles from '../styles/study.module.css';


function Study(props) {
    const deckIdNumb = parseInt(props.match.params.deckId.split("").slice(5).join(""));
    const deck = useSelector(state => Object.values(state.entities.decks).filter((deck) => deck.id === deckIdNumb));
    const flashcards = useSelector(state => Object.values(state.entities.flashcards).filter((flashcard) => flashcard.deckId === deckIdNumb));
    const lastIndex = flashcards.length - 1;


    const handleClick = async (event) => {
        event.stopPropagation();
        const card = document.getElementById('flashcard-0');
        card.classList.remove(styles.hide);
    }

    return (
        <>
            <button type="button" onClick={handleClick}>Start</button>
            {flashcards.map((flashcard, i) => {
                return (
                    <StudyFlashcard flashcard={flashcard} index={i} lastIndex={lastIndex} key={`flashcard-${i + 1}`} />
                )
            })}
        </>
    );
}
export default Study;