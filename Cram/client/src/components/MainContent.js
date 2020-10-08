import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Decks from './Decks';


function MainContent({ match }) {
    return (
        <div style={{width: "100%"}}>
            <Route path={match.url + "decks"} component={Decks} />
        </div>
    );
}
export default withRouter(MainContent);