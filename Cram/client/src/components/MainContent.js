import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Deck from './Deck';
import Decks from './Decks';
import Flashcards from './Flashcards';
import Study from './Study';


function MainContent({ match }) {
    return (
        <div style={{ width: "100%" }}>
            <Route path={match.url + "decks"} exact component={Decks} />
            <Route path={match.url + "decks/:deckId"} exact component={Deck} />
            {/* <PrivateRoute
                path="/decks/:deckId"
                exact={true}
                // needLogin={this.props.needLogin}
                component={Deck}
            /> */}
            <Route path={match.url + "decks/:deckId/study"} component={Study} />
            <Route path={match.url + "flashcards"} component={Flashcards} />
        </div>
    );
}
export default withRouter(MainContent);