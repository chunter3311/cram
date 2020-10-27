import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Deck from './Deck';
import Decks from './Decks';
import Flashcards from './Flashcards';

const PrivateRoute = ({ component: Component }) => (
    <Route render={(props) => (
        <Component {...props} />
        // rest.needLogin === true
        //     ? <Redirect to='/login' />
        //     : <Component {...props} />
    )} />
)


function MainContent({ match }) {
    return (
        <div style={{ width: "100%" }}>
            <Route path={match.url + "decks"} exact component={Decks} />
            {/* <Route path={match.url + "decks/deck"} exact component={Deck} /> */}
            {/* <Route path={match.url + "decks/deck-"} component={Deck} /> */}
            <Route path={match.url + "decks/:deckId"} exact component={Deck} />
            {/* <PrivateRoute
                path="/decks/:deckId"
                exact={true}
                // needLogin={this.props.needLogin}
                component={Deck}
            /> */}
            <Route path={match.url + "flashcards"} component={Flashcards} />
        </div>
    );
}
export default withRouter(MainContent);