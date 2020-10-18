import Cookies from 'js-cookie';
import { setSelectedFlashcard } from './session';

export const SET_FLASHCARDS = "flashcards/SET_FLASHCARDS";
export const ADD_FLASHCARD = "flashcards/ADD_FLASHCARD";
export const EDIT_FLASHCARD = "flashcards/EDIT_FLASHCARD";
export const LOGOUT_USER = 'session/LOGOUT_USER';


const setFlashcards = (flashcards) => {
    return {
        type: SET_FLASHCARDS,
        flashcards
    }
}

const addFlashcard = (flashcard) => {
    return {
        type: ADD_FLASHCARD,
        flashcard
    }
}


const editFlashcard = (flashcard) => {
    return {
        type: EDIT_FLASHCARD,
        flashcard
    }
}


export const updateUserFlashcard = id => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/flashcards/${id}/update`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ id })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(editFlashcard(res.data));
        }
        return res;
    }
}


export const setUserFlashcards = id => {
    const path = `/api/users/${id}/flashcards`;
    return async dispatch => {
        const res = await fetch(path);
        res.data = await res.json();
        console.log("reducer", res);
        if (res.ok) {
            dispatch(setFlashcards(res.data));
            Object.values(res.data).forEach(ele => {
                dispatch(setSelectedFlashcard(ele.id))
            })
        }
        return res;
    }
}

export const addUserFlashcards = (question, answer, confidence, deckId, userId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/flashcards/`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ question, answer, confidence, deckId, userId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(addFlashcard(res.data));
        }
        return res;
    }
}

window.addUserFlashcards = addUserFlashcards;


export const editUserFlashcards = (question, answer, confidence, userId, id) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/flashcards/${id}`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ question, answer, confidence, userId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(editFlashcard(res.data));
        }
        return res;
    }
}

export default function flashcardsReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_FLASHCARDS:
            return action.flashcards;
        case ADD_FLASHCARD:
            return {...state, [action.flashcard.id]: action.flashcard};
        case EDIT_FLASHCARD:
            newState[action.flashcard.id] = action.flashcard;
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}