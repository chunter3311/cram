// const TOGGLE_DECK_OPTIONS_MODAL = 'ui/TOGGLE_DECK_OPTIONS_MODAL';
const TOGGLE_EDIT_DECK_MODAL = 'ui/TOGGLE_EDIT_DECK_MODAL';
const TOGGLE_CREATE_DECK_MODAL = 'ui/TOGGLE_CREATE_DECK_MODAL';


// export const toggleDeckModal = () => {
//     return {
//         type: TOGGLE_DECK_OPTIONS_MODAL
//     }
// };


export const toggleEditDeckModal = () => {
    return {
        type: TOGGLE_EDIT_DECK_MODAL
    }
};

export const toggleCreateDeckModal = () => {
    return {
        type: TOGGLE_CREATE_DECK_MODAL
    }
};

const initialUIState = {
    userModal: false,
    // deckOptions: false,
    editDeck: false,
    createDeck: false
};

export default function uiReducer(state = initialUIState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case TOGGLE_CREATE_DECK_MODAL:
            newState.createDeck = !newState.createDeck;
            return newState;
        case TOGGLE_EDIT_DECK_MODAL:
            newState.editDeck = !newState.editDeck;
            return newState;
        // case TOGGLE_DECK_OPTIONS_MODAL:
        //     newState.deckOptions = !newState.deckOptions;
        //     return newState;
        default:
            return state;
    }
}