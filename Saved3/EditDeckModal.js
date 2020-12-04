import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { editUserDecks } from '../store/decks';
// import { toggleEditDeckModal } from '../store/ui'


const EditDeckModal = ({ editDeckId }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const userId = useSelector(state => state.session.user_id)

    const handleClick = async (event) => {
        event.stopPropagation();
        const deckId = editDeckId
        const res = await dispatch(editUserDecks(title, false, userId, deckId));

        if (res.ok) {
            // togEditDeckModal(event);
            return;
        }
    }

    // const togEditDeckModal = (e) => {
    //     e.preventDefault()
    //     dispatch(toggleEditDeckModal())
    // }

    return (
        <div>
            {/* <button type="button" onClick={(e) => { togEditDeckModal(e) }}>Close</button> */}

            <form>
                <input name="title" type="text" placeholder="Deck name" onChange={(e) => setTitle(e.target.value)} />
                <button type="button" onClick={handleClick}>Continue</button>
                    {/* <button type="button" onClick={(e) => { togEditDeckModal(e) }}>Cancel</button> */}
            </form>
        </div >
    )
}


export default EditDeckModal;
