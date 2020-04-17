import React from 'react';
import { Link } from 'react-router-dom';
import TriviaListItem from '../../components/TriviaListItem/TriviaListItem'

function TriviaListPage(props) {
    return (
        <div>
            <h2>Your Trivia Games</h2>
            <div>
                {props.trivias.map(trivia =>
                    <TriviaListItem
                        trivia={trivia}
                        handleDeleteTrivia={props.handleDeleteTrivia}
                        key={trivia._id}
                    />
                )}
            </div>
            <Link to='/add'>CREATE TRIVIA GAME</Link>
        </div>
    );
}

export default TriviaListPage;