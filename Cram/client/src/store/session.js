import Cookies from 'js-cookie';

const SET_DEFAULT_DECK = 'decks/SET_DEFAULT_DECK'
const SET_USER = 'session/SET_USER';
const LOGOUT_USER = 'session/LOGOUT_USER';
const SET_SELECTED_DECK = 'session/SET_SELECTED_DECK';
const SET_SELECTED_FLASHCARD = 'session/SET_SELECTED_FLASHCARD';
const SET_FLASHCARD_LIST = "session/SET_FLASHCARD_LIST";
const SET_ACTIVE_FLASHCARD = "session/SET_ACTIVE_FLASHCARD";

export const setSelectedDeck = (deckId) => {
    return {
        type: SET_SELECTED_DECK,
        deckId
    };
}

export const setSelectedFlashcard = (flashcardId) => {
    return {
        type: SET_SELECTED_FLASHCARD,
        flashcardId
    };
}

export const setActiveFlashcard = (flashcardId) => {
    return {
        type: SET_ACTIVE_FLASHCARD,
        flashcardId
    }
}

export const setUser = user => {
    return {
        type: SET_USER,
        user
    }
};

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}


export const login = (email_or_username, password) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    return async dispatch => {
        const res = await fetch('/api/session/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ email_or_username, password, "csrf_token": csrfToken })
        });
        res.data = await res.json();

        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res
    }
};

export const logout = () => {
    const csrfToken = Cookies.get("XSRF-TOKEN");
    return async dispatch => {
        const res = await fetch('/api/session/logout', {
            method: "DELETE",
            headers: {
                "X-CSRFTOKEN": csrfToken
            }
        })

        res.data = await res.json();

        if (res.ok) {
            dispatch(logoutUser());
        }
        return res;
    }
}

const initialSessionState = {
    user_id: null,
    selectedDeckId: null,
    selectedFlashcardId: null,
    defaultDeckId: null,
    flashcardList: null,
    activeFlashcard: null
}


export default function sessionReducer(state = initialSessionState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_USER:
            newState.user_id = action.user.user_id;
            return newState;
        case LOGOUT_USER:
            return {};
        case SET_SELECTED_DECK:
            newState.selectedDeckId = action.deckId;
            return newState;
        case SET_SELECTED_FLASHCARD:
            newState.selectedFlashcardId = action.flashcardId;
            return newState;
        case SET_DEFAULT_DECK:
            newState.defaultDeckId = action.defaultDeckId;
            return newState;
        case SET_FLASHCARD_LIST:
            newState.flashcardList = action.flashcardList;
            return newState;
        case SET_ACTIVE_FLASHCARD:
            newState.activeFlashcard = action.flashcardId;
            return newState;
        default:
            return state;
    }
};