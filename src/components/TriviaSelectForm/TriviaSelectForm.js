import React from 'react';

function TriviaSelectForm(props) {
    return (
        <>
            <h2>Test Your Knowledge</h2>
            <select>
                {props.categories.map((category, idx) =>
                    <option
                        value={category.id} key={idx}>{category.name}</option>
                )}
            </select><br />
            <div>Under construction</div>
        </>
    );
}

export default TriviaSelectForm;