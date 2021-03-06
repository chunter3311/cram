import Cookies from 'js-cookie';
import { updateUserDeck } from './decks';

const ADD_FLASHCARD = '/flashcards/ADD_FLASHCARD';
const SET_FLASHCARDS = '/flashcards/SET_FLASHCARDS';
const UPDATE_FLASHCARD = "/flashcards/UPDATE_FLASHCARD";
const LOGOUT_USER = 'session/LOGOUT_USER';

export const addFlashcard = flashcard => {
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

export const updateFlashcard = flashcard => {
    return {
        type: UPDATE_FLASHCARD,
        flashcard
    }
}


export const addUserFlashcard = (question, answer, confidence, userId, deckId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/flashcards/`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ question, answer, confidence, userId, deckId })
        });

        res.data = await res.json();

        if (res.ok) {
            dispatch(addFlashcard(res.data));
            await dispatch(updateUserDeck(deckId));
        }
        return res;
    }
}

export const setUserFlashcards = userId => {
    const path = `/api/users/${userId}/flashcards`;
    return async dispatch => {
        const res = await fetch(path);
        res.data = await res.json();
        if (res.ok && Object.keys(res.data).length) {
            dispatch(setFlashcards(res.data));
        }

        return res;
    }
}


export const updateUserFlashcard = (question, answer, confidence, flashcardId) => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    return async dispatch => {
        const res = await fetch(`/api/flashcards/${flashcardId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFTOKEN": csrfToken
            },
            body: JSON.stringify({ question, answer, confidence, flashcardId })
        });
        res.data = await res.json();
        if (res.ok) {
            dispatch(updateFlashcard(res.data));
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