import React from 'react';

function QuestionItem({ question }) {

    return (
        <>
            <div>{question.question}</div>
            <div className="options-container">
                {question.correct_answer}
            </div>
        </>
    );
}

export default QuestionItem; 