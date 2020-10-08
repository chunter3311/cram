import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleEditDeckModal } from '../store/ui';


const DeckRow = ({ deck, username, setEditDeckId }) => {
    // const deckOptions = useSelector(state => state.ui.deckOptions)
    const dispatch=useDispatch();

    const togEditDeckModal = (e) => {
        e.preventDefault()
        setEditDeckId(deck.id)
        dispatch(toggleEditDeckModal())
    }

    return (
        <>
            <tr className={`deck-${deck.id}`}>
                <td>
                    <button >
                        <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10 7l6 5-6 5V7z" fill="currentColor"></path></svg>
                    </button>
                    <svg style={{ width: "24px", height: "24px" }} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.035 4.5H5.958v15h2.077v-15z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M9.285 4.5v15h7.09c.92 0 1.667-.746 1.667-1.667V6.167c0-.92-.747-1.667-1.667-1.667h-7.09zm6.63 5.083a.75.75 0 01-.75.75h-3a.75.75 0 110-1.5h3a.75.75 0 01.75.75z" fill="currentColor"></path></svg>
                    {deck.title}
                </td>
                <td>{username}</td>
                <td>{deck.updated_at}</td>
                <td>
                    <button onClick={togEditDeckModal}>...</button>
                </td>
            </tr>
        </>
    );
}

export default DeckRow;