import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const TriviaResults = (props) => {

    return (
        <div>
            <div>You scored: {props.skillsTestScore}%</div>
            <Link to={`/skills`}>
                <Button
                    variant="outlined"
                >
                    Back to skills
            </Button>
            </Link>
        </div>
    )
}

export default TriviaResults;