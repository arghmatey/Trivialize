import React from 'react';
import './TriviaPage.css'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TriviaListItem from '../../components/TriviaListItem/TriviaListItem'

function TriviaPage(props) {
    return (
        <div className="TriviaPage">
            <h2>Your Trivia Games</h2>
            <Link to='/create'>
                <Button
                    variant="outlined"
                    type="submit">
                    Create Trivia Game
                    </Button>
            </Link>
            <div>
                {props.trivias.map(trivia =>
                    props.user._id === trivia.user &&
                    <TriviaListItem
                        trivia={trivia}
                        handleDeleteTrivia={props.handleDeleteTrivia}
                        key={trivia._id}
                    />
                )}
            </div>
        </div>
    );
}

export default TriviaPage;