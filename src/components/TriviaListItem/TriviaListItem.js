import React from 'react';
import './TriviaListItem.css';
import { Link } from 'react-router-dom';

function TriviaListItem({ trivia, handleDeleteTrivia }) {
    return (
        <div className="list-item">
            <h3>{trivia.name}</h3>
            <p>{trivia.questions.length} Questions</p>
            <Link to={{
                pathname: '/details',
                state: { trivia }
            }}
            >Details</Link>
            <Link to={{
                pathname: '/edit',
                state: { trivia }
            }}
            >Edit</Link>
            <button
                onClick={() => handleDeleteTrivia(trivia._id)}
            >Delete Game</button>
        </div >
    )
}

export default TriviaListItem;