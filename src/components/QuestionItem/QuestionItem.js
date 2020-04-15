import React from 'react';

function QuestionItem({ question }) {
    let options = [...question.incorrect_answers, question.correct_answer].sort(() => 0.5 - Math.random())

    return (
        <>
            <div>{question.question}</div>
            <div className="options-container">
                {options.map((option) =>
                    <div className="option">
                        {option}
                    </div>
                )}
            </div>
        </>
    );
}

export default QuestionItem; 