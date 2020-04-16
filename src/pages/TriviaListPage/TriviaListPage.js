import React from 'react';
import { Link } from 'react-router-dom';

function TriviaListPage(props) {
    return (
        <div>
            <h2>Your Trivia Games</h2>
            <div>
                {props.trivias.map(trivia =>
                    <div key={trivia._id}>
                        <h3>{trivia.name}</h3>
                        {trivia.questions.map(question =>
                            <div key={question._id}>
                                <span>{question.question}</span>
                                <span>{question.answer}</span>
                            </div>)}
                    </div>
                )}
            </div>
            <Link to='/add'>CREATE TRIVIA GAME</Link>
        </div>
    );
}

export default TriviaListPage;