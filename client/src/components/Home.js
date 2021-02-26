import React, { useEffect } from 'react';
import MainContent from './MainContent';
import Navbar from './Navbar';
import { connect, useDispatch } from 'react-redux';
import { setUserFlashcards } from '../store/flashcards';
import { setSelectedDeck } from '../store/session';
import { setUserDecks } from '../store/decks';
import { setUserTrash } from '../store/trash';
import { setUserInfo } from '../store/users';

function Home({ userId, selectedDeckId, defaultDeckId }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const getFlashcards = async () => {
            await dispatch(setUserFlashcards(userId));
        }
        const getTrash = async () => {
            await dispatch(setUserTrash(userId));
        }
        getFlashcards();
        getTrash();

        const getDecks = async () => {
            await dispatch(setUserDecks(userId));
        }
        getDecks();
        dispatch(setSelectedDeck(selectedDeckId || 1));

        const getUserInfo = async () => {
            await dispatch(setUserInfo(userId));
        }
        getUserInfo();
        
        // dispatch(setSelectedDeck(selectedDeckId || defaultDeckId));
    }, [dispatch, userId, selectedDeckId]);

    return (
        <>
            <div style={{ display: "flex", height: "100vh" }}>
                <Navbar />
                <MainContent />
            </div>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.user_id,
        selectedDeckId: state.session.selectedDeckId,
        decks: state.entities.decks,
        flashcards: state.entities.flashcards
        // defaultDeckId: state.session.defaultDeckId
    }
};

export default connect(mapStateToProps)(Home);