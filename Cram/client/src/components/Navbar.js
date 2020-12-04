import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { logout } from '../store/session';
import styles from '../styles/navbar.module.css';
import { toggleCreateDeckModal } from '../store/ui';
import { toggleCreateFlashcardModal } from '../store/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDoorClosed, faSignOutAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';


function Navbar({ history }) {
    const dispatch = useDispatch();
    const decks = useSelector(state => Object.values(state.entities.decks));
    const flashcards = useSelector(state => Object.values(state.entities.flashcards));
    const users = useSelector(state => state.entities.users);
    const getUsername = Object.values(users).map(user => {
        return user.username;
    })

    const handleLogout = async (e) => {
        e.preventDefault();
        const res = await dispatch(logout());
        if (res.ok) {
            history.replace("/login")
        }
        return;
    }

    const CreateDeckModal = (e) => {
        e.preventDefault()
        dispatch(toggleCreateDeckModal());
    }

    const CreateFlashcardModal = (e) => {
        e.preventDefault();
        dispatch(toggleCreateFlashcardModal());
    }

    // const handleSelect = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value)
    //     dispatch(setSelectedDeck(Number(e.target.value)))
    //     history.replace('/notes');
    //     return;
    // }


    // const select_decks = Object.values(decks).map(ele => {
    //     return (
    //         <li key={ele.id}>
    //             <button value={ele.id} onClick={handleSelect}>{ele.title}</button>
    //         </li>
    //     )
    // });

    return (
        <nav className={styles.sidebar_nav}>
            <div className={styles.upper_wrapper}>
                <div className={styles.logoutLabel}><button className={styles.logoutButton} onClick={handleLogout}><span className={styles.logoutButtonIcon}><FontAwesomeIcon icon={faDoorClosed} /></span>Log Out</button></div>
                <div className={styles.usernameWrapper}>
                    <div className={styles.usernameIcon}><FontAwesomeIcon icon={faUser} /></div>
                    <div className={styles.usernameLabel}>{getUsername}</div>
                    <div className={styles.userInfo}>
                        <NavLink to="/decks"><span className={styles.deckLength}>{`${decks.length} Decks`}</span></NavLink>
                        <span className={styles.dash}>—</span>
                        <NavLink to="/flashcards" activeclass="active"><span className={styles.flashcardLength}>{`${flashcards.length} Cards`}</span></NavLink>
                    </div>
                </div>

            </div>

            {/* <ul className={styles.navlinks}>
                <li><NavLink to="/decks" activeclass="active">Decks</NavLink></li>
                <li><NavLink to="/flashcards" activeclass="active">Flashcards</NavLink></li>
                {select_decks}
            </ul> */}
            <div id="create-deck-modal" className={styles.newDeck}><button onClick={CreateDeckModal}>New Deck</button></div>
            <div id="create-flashcard-modal" className={styles.newDeck}><button onClick={CreateFlashcardModal}>New Card</button></div>
            <div className={styles.lower}>
                <div className={styles.extra_navlinks}>
                    <NavLink to="/users" activeclass="active">About the Developer</NavLink>
                </div>
            </div>
        </nav>
    );
}
export default withRouter(Navbar);