import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const QuizPage = (props) => {
    const [submitted, setSubmitted] = useState({});
    const submittedLength = Object.values(submitted).length;

    const handleChange = e => {
        setSubmitted({ ...submitted, [e.target.name]: e.target.value });
    }

    const handleAnswerCheck = () => {
        let correct = 0;
        for (const index in submitted) {
            if (submitted[index] === props.correctAnswers[index]) {
                correct++
            }
        }
        props.handleScore(correct, props.quiz.length);
    }

    return (
        <div>
            {props.quiz.map((t, idx) =>
                <div className="list-item" key={idx}>
                    <h4>{t.question}</h4>

                    {t.allAnswers.map((answer, i) =>
                        <div className="answers" key={i}>
                            <input
                                required
                                id={`${idx}-${i}`}
                                type='radio'
                                name={idx}
                                value={answer}
                                onChange={handleChange} />
                            <label htmlFor={i}>{answer}</label>
                        </div>
                    )}
                </div>
            )}

            <Link to={`/quiz/results`} onClick={handleAnswerCheck}>
                <Button
                    disabled={submittedLength !== props.quiz.length}
                    variant="outlined"
                    type="submit">
                    Check Answers
                </Button>
            </Link>

        </div >
    );
}

export default QuizPage;