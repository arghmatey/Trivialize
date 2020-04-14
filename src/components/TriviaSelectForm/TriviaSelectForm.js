import React from 'react';
import { Link, Route } from 'react-router-dom';
import QuestionsPage from '../../pages/QuestionsPage/QuestionsPage';

function TriviaSelectForm({ questions }) {
    return (
        <>
            <Link to='/questions'>Test your knowledge</Link>
            <Route exact path='/questions' render={() =>
                <QuestionsPage
                    questions={questions}
                />
            } />
        </>
    );
}

export default TriviaSelectForm;