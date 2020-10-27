import Cookies from 'js-cookie';
import { setSelectedDeck } from './session';

export const ADD_DECK = "decks/ADD_DECK";
export const SET_DECKS = "decks/SET_DECKS";
export const UPDATE_DECK = "decks/UPDATE_DECK";
export const LOGOUT_USER = 'session/LOGOUT_USER';
// export const SET_DEFAULT_DECK = "decks/SET_DEFAULT_DECK";
// export const setDefaultDeck = (defaultDeckId) => {
//     return {
//         type: SET_DEFAULT_DECK,
//         defaultDeckId
//     }
// }


const addDeck = (deck) => {
    return {
        type: ADD_DECK,
        deck
    }
}

const setDecks = (decks) => {
    return {
        type: SET_DECKS,
        decks
    }
}


const updateDeck = (deck) => {
    return {
        type: UPDATE_DECK,
        deck
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
        
        res.data = await res.json();

        if (res.ok) {
            dispatch(addDeck(res.data));
        }
        return res;
    }
}

export const setUserDecks = id => {
    const path = `/api/users/${id}/decks`;
    return async dispatch => {
        const res = await fetch(path);
        res.data = await res.json();
        if (res.ok) {
            dispatch(setDecks(res.data));
            console.log('this')
            console.log(res.data[1]);
            if(res.data[1]) {
                dispatch(setSelectedDeck(res.data[1].id))
            }
            // Object.values(res.data).forEach(ele => {
            //     if (ele.isMastered) {
            //         // dispatch(setDefaultDeck(ele.id))
            //         dispatch(setSelectedDeck(ele.id))
            //     }
            // })
        }
        return res;
    }
}


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
            dispatch(updateDeck(res.data));
        }
        return res;
    }
}


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
        res.data = await res.json();
        if (res.ok) {
            dispatch(updateDeck(res.data));
        }
        return res;
    }
}

// export const logout = () => {
//     const csrfToken = Cookies.get("XSRF-TOKEN");
//     return async dispatch => {
//         const res = await fetch('/api/session/logout', {
//             method: "DELETE",
//             headers: {
//                 "X-CSRFTOKEN": csrfToken
//             }
//         })

//         res.data = await res.json();

//         if (res.ok) {
//             dispatch(logoutUser());
//         }
//         return res;
//     }
// }

export default function decksReducer(state = {}, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case SET_DECKS:
            return action.decks;
        case ADD_DECK:
            return { ...state, [action.deck.id]: action.deck };
        case UPDATE_DECK:
            newState[action.deck.id] = action.deck;
            return newState;
        case LOGOUT_USER:
            return {};
        default:
            return state;
    }
}