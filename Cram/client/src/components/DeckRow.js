import React from 'react';

const DeckRow = ({ deck }) => {
    const checkIsMastered = () => {
        if (deck.isMastered) return "Mastered";
        else return "Still Learning";
    }
    return (
        <>
            <tr className={`deck-${deck.id}`}>
                <td>{deck.title}</td>
                <td>{checkIsMastered()}</td>
                <td><button>Study</button></td>
                <td><button>Modify</button></td>
            </tr>
        </>
    );
}

export default DeckRow;