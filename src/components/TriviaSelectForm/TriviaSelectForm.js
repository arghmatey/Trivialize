import React from 'react';
import { Link, Route } from 'react-router-dom';
import QuestionsPage from '../../pages/QuestionsPage/QuestionsPage';

function TriviaSelectForm(props) {
    return (
        <>
            <select>
                {props.categories.map((category, idx) =>
                    <option
                        value={category.id} key={idx}>{category.name}</option>
                )}
            </select>
            <Link to='/questions'>Test your knowledge</Link>
            <Route exact path='/questions' render={() =>
                <QuestionsPage
                    questions={props.questions}
                />
            } />
        </>
    );
}

export default TriviaSelectForm;