import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const QuizResults = (props) => {

    return (
        <div>
            <div>You scored: {props.skillsTestScore}%</div>
            <Link to={`/quiz`}>
                <Button
                    variant="outlined"
                >
                    Take another!
            </Button>
            </Link>
        </div>
    )
}

export default QuizResults;