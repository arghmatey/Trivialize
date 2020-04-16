import React from 'react';
import { Link, Route } from 'react-router-dom';
import AddTriviaPage from '../AddTriviaPage/AddTriviaPage';

function TriviaListPage(props) {
    return (
        <>
            <h2>this is the trivia list page.</h2>
            <Link exact to='/add'>CREATE TRIVIA GAME</Link>
            <Route exact path='/add' render={() =>
                <AddTriviaPage
                    handleAddTrivia={this.handleAddTrivia}
                />} />
        </>
    );
}

export default TriviaListPage;