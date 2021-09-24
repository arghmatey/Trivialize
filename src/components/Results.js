import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Results = (props) => {

    return (
        <div className="list-item">
            <div>You scored: {props.score}%</div>
            <Link 
                to={`/quiz`}
                onClick={props.handleNewSelect}
            >
                <Button variant="outlined">
                    Take another!
                </Button>
            </Link>
        </div>
    )
}

export default Results;