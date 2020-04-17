import React from 'react';
import { Link } from 'react-router-dom';

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
        </>
    );
}

export default TriviaSelectForm;