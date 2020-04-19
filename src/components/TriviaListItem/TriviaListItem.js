import React from 'react';
import './TriviaListItem.css';
import { Link } from 'react-router-dom';

function TriviaListItem({ trivia, handleDeleteTrivia }) {
    return (
        <div className="list-item">
            <h3>{trivia.name}</h3>
            {trivia.questions.map((question, idx) =>
                <div key={question._id}>
                    <span>{(idx + 1)}.</span>
                    <span>
                        <div>Question: {question.question}</div>
                        <div>Answer: {question.answer}</div>
                    </span>
                </div>)}
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