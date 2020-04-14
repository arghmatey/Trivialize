import React from 'react';

function QuestionItem({ question }) {
    return (
        <>
            <div>{question.question}</div>
            <div>{question.correct_answer}</div>
            <div>{question.incorrect_answers}</div>
        </>
    );
}

export default QuestionItem; 