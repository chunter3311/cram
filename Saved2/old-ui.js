const TOGGLE_USER_MODAL = 'ui/TOGGLE_USER_MODAL';
const TOGGLE_FLASHCARD_OPTIONS_MODAL = 'ui/TOGGLE_FLASHCARD_OPTIONS_MODAL';
const TOGGLE_DECK_OPTIONS_MODAL = 'ui/TOGGLE_DECK_OPTIONS_MODAL';
const TOGGLE_MOVE_FLASHCARDS_MODAL = 'ui/TOGGLE_MOVE_FLASHCARDS_MODAL';
const TOGGLE_EDIT_DECK_MODAL = 'ui/TOGGLE_EDIT_DECK_MODAL';
const TOGGLE_CREATE_DECK_MODAL = 'ui/TOGGLE_CREATE_DECK_MODAL';
const TOGGLE_CREATE_FLASHCARD_MODAL = 'ui/TOGGLE_CREATE_FLASHCARD_MODAL';

export const toggleUserModal = () => {
    return {
        type: TOGGLE_USER_MODAL
    }
};

export const toggleFlashcardModal = () => {
    return {
        type: TOGGLE_FLASHCARD_OPTIONS_MODAL
    }
};

export const toggleDeckModal = () => {
    return {
        type: TOGGLE_DECK_OPTIONS_MODAL
    }
};

export const toggleMoveModal = () => {
    return {
        type: TOGGLE_MOVE_FLASHCARDS_MODAL
    }
};

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

export const toggleCreateFlashcardModal = () => {
    return {
        type: TOGGLE_CREATE_FLASHCARD_MODAL
    }
};

const initialUIState = {
    userModal: false,
    flashcardOptions: false,
    deckOptions: false,
    moveFlashcards: false,
    editDeck: false,
    createDeck: false,
    createFlashcard: false
};

export default function uiReducer(state = initialUIState, action) {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case TOGGLE_USER_MODAL:
            newState.userModal = !newState.userModal;
            return newState;
        case TOGGLE_CREATE_DECK_MODAL:
            newState.createDeck = !newState.createDeck;
            return newState;
        case TOGGLE_CREATE_FLASHCARD_MODAL:
            newState.createFlashcard = !newState.createFlashcard;
            return newState;
        case TOGGLE_EDIT_DECK_MODAL:
            newState.editDeck = !newState.editDeck;
            return newState;
        case TOGGLE_FLASHCARD_OPTIONS_MODAL:
            newState.flashcardOptions = !newState.userModal;
            return newState;
        case TOGGLE_DECK_OPTIONS_MODAL:
            newState.deckOptions = !newState.deckOptions;
            return newState;
        case TOGGLE_MOVE_FLASHCARDS_MODAL:
            newState.moveFlashcards = !newState.moveFlashcards;
            return newState;
        default:
            return state;
    }
}