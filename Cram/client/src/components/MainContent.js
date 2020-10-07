import React from 'react';
import { withRouter } from 'react-router-dom';

function MainContent({ match }) {
    return (
        <div style={{width: "100%"}}>
            <h1>Main Content</h1>
        </div>
    );
}
export default withRouter(MainContent);