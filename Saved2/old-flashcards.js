import Cookies from 'js-cookie';
import { setActiveFlashcard } from './session';
import { updateUserDeck } from './decks';

const ADD_FLASHCARD = '/flashcards/ADD_FLASHCARD';
const SET_FLASHCARDS = '/flashcards/SET_FLASHCARDS';
const UPDATE_FLASHCARD = "/flashcards/UPDATE_FLASHCARD";
const LOGOUT_USER = 'session/LOGOUT_USER';

export const setFlashcard = flashcard => {
    return {
        type: ADD_FLASHCARD,
        flashcard
    }
}

export const setFlashcards = flashcards => {
    return {
        type: SET_FLASHCARDS,
        flashcards
    }
}

export const updateFlashcardItem = flashcard => {
    return {
        type: UPDATE_FLASHCARD,
        flashcard
    }
}

export const setUserFlashcards = userId => {
    const path = `/api/users/${userId}/flashcards`;
    return async dispatch => {
        const res = await fetch(path);

        res.data = await res.json();
        console.log(res);
        if (res.ok && Object.keys(res.data).length) {
            dispatch(setFlashcards(res.data));
            dispatch(setActiveFlashcard(Object.values(res.data)[0].id));
        }

        return res;
    }
}

// window.setUserFlashcards = setUserFlashcards;


export const addFlashcard = (question, answer, confidence, userId, deckId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/flashcards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ question, answer, confidence, userId, deckId, "csrf_token": csrfToken })
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(setFlashcard(res.data));
            await dispatch(updateUserDeck(deckId));
            dispatch(setActiveFlashcard(res.data.id));
        }
        return res;
    }
}

window.setUserFlashcards = addFlashcard;

export const updateFlashcard = (flashcardId, title, content) => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    return async dispatch => {
        const res = await fetch(`/api/flashcards/${flashcardId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFTOKEN": csrfToken
            },
            body: JSON.stringify({ flashcardId, title, content })
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(updateFlashcardItem(res.data));
            await dispatch(updateUserDeck(res.data.deckId));
        }
        return res;
    }
}

export default function flashcardReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case ADD_FLASHCARD:
            const { id } = action.flashcard;
            return { [id]: action.flashcard, ...state };
        case SET_FLASHCARDS:
            return { ...action.flashcards, ...state };
        case UPDATE_FLASHCARD:
            newState[action.flashcard.id] = action.flashcard;
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}