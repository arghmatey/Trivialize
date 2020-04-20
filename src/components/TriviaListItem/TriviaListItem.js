import React from 'react';
import './TriviaListItem.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function TriviaListItem({ trivia, handleDeleteTrivia }) {
    return (
        <div className="list-item">
            <h3>{trivia.name}</h3>
            <div className="item-info">
                <p>{trivia.category}</p>
                <p>{trivia.questions.length} Questions</p>
            </div>


            <div className="button-section">
                <Link to={{
                    pathname: '/edit',
                    state: { trivia }
                }}>
                    <Button
                        variant="outlined"
                        type="submit">
                        Edit
                    </Button>
                </Link>
                <Link to={{
                    pathname: '/details',
                    state: { trivia }
                }}>
                    <Button
                        variant="outlined"
                        type="submit">
                        Details
                        </Button>
                </Link>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteTrivia(trivia._id)}>
                    Delete
                </Button>
            </div>
        </div >
    )
}

export default TriviaListItem;