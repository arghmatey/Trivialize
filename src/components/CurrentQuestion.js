import React from 'react';

const CurrentQuestion = (props) => {

    return (
        <div className="list-item">
            <h4>{props.current.question}</h4>

            <ul className="answers-list">
                {props.current.allAnswers.map((answer, index) => 
                        <li 
                            className="answer" 
                            onClick={() => props.handleAnswerQuestion(props.current.correct_answer === answer)}
                            id={index}
                            key={index}>
                                {answer}
                        </li>
                )}
            </ul>
        </div>
    )
}

export default CurrentQuestion;
