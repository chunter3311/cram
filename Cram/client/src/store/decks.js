import Cookies from 'js-cookie';
import { setSelectedDeck } from './session';

export const SET_DECKS = "decks/SET_DECKS";
export const ADD_DECK = "decks/ADD_DECK";
export const EDIT_DECK = "decks/EDIT_DECK";
// export const SET_DEFAULT_DECK = "decks/SET_DEFAULT_DECK";
export const LOGOUT_USER = 'session/LOGOUT_USER';


const setDecks = (decks) => {
    return {
        type: SET_DECKS,
        decks
    }
}

const addDeck = (deck) => {
    return {
        type: ADD_DECK,
        deck
    }
}


const editDeck = (deck) => {
    return {
        type: EDIT_DECK,
        deck
    }
}

// export const setDefaultDeck = (defaultDeckId) => {
//     return {
//         type: SET_DEFAULT_DECK,
//         defaultDeckId
//     }
// }


export const updateUserDeck = id => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/decks/${id}/update`;
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
            dispatch(editDeck(res.data));
        }
        return res;
    }
}


// export const setUserDecks = id => {
//     const path = `/api/users/${id}/decks`;
//     return async dispatch => {
//         const res = await fetch(path);
//         res.data = await res.json();
//         console.log("reducer", res);
//         if (res.ok) {
//             dispatch(setDecks(res.data));
//             Object.values(res.data).forEach(ele => {
//                 if (ele.isMastered) {
//                     dispatch(setDefaultDeck(ele.id))
//                     dispatch(setSelectedDeck(ele.id))
//                 }
//             })
//         }
//         return res;
//     }
// }
export const setUserDecks = id => {
    const path = `/api/users/${id}/decks`;
    return async dispatch => {
        const res = await fetch(path);
        res.data = await res.json();
        console.log("reducer", res);
        if (res.ok) {
            dispatch(setDecks(res.data));
            Object.values(res.data).forEach(ele => {
                dispatch(setSelectedDeck(ele.id))
            })
        }
        return res;
    }
}

export const addUserDecks = (title, isMastered, userId) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/decks/`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ title, isMastered, userId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(addDeck(res.data));
        }
        return res;
    }
}

window.addUserDecks = addUserDecks;


export const editUserDecks = (title, isMastered, userId, id) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    const path = `/api/decks/${id}`;
    return async dispatch => {
        const res = await fetch(path, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN': csrfToken
            },
            body: JSON.stringify({ title, isMastered, userId, "csrf_token": csrfToken })
        });
        const data = await res.json();
        res.data = data;
        if (res.ok) {
            dispatch(editDeck(res.data));
        }
        return res;
    }
}

export default function decksReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_DECKS:
            return action.decks;
        case ADD_DECK:
            return {...state, [action.deck.id]: action.deck};
        case EDIT_DECK:
            newState[action.deck.id] = action.deck;
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}