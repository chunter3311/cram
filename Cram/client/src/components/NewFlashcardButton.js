// import React from 'react';
// import { useDispatch, connect } from 'react-redux';
// import { addFlashcard } from '../store/flashcards';

// const NewFlashcardButton = ({ userId, selectedDeckId }) => {
//     const dispatch = useDispatch();

//     const handleClick = async (event) => {
//         event.stopPropagation();
//         const res = await dispatch(addFlashcard(userId, selectedDeckId));

//         if (res.ok) {
//             return;
//         }
//     }

//     return (
//         <button type="button" className="newFlashcardBtn" onClick={handleClick}>New Flashcard</button>
//     );
// }

// const mapStateToProps = (state, ownProps) => {
//     return {
//         userId: state.session.user_id,
//         selectedDeckId: state.session.selectedDeckId
//     }
// }

// export default connect(mapStateToProps)(NewFlashcardButton);