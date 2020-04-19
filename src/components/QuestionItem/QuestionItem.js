import React from 'react';
import './QuestionItem.css';

function QuestionItem({ question }) {

    return (
        <div className="question-item">
            <div>{question.question}</div>
            <div>
                {question.correct_answer}
            </div>
        </div>
    );
}

export default QuestionItem; 