import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const TriviaTestPage = (props) => {
    const [submitted, setSubmitted] = useState({});
    const submittedLength = Object.values(submitted).length;

    const handleChange = e => {
        setSubmitted({ ...submitted, [e.target.name]: e.target.value });
    }

    const handleAnswerCheck = e => {
        let correct = 0;
        for (const key in submitted) {
            if (submitted[key] === props.correctAnswers[key]) {
                correct++
            } else {
                console.log('wrong')
            }
        }
        props.handleScore(correct);
    }

    useEffect(() => {
        console.log('hola')
    }, []);

    return (
        <div>
            {props.skillsTest.map((t, idx) =>
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

            <Link to={`/results`} onClick={handleAnswerCheck}>
                <Button
                    disabled={submittedLength !== 10}
                    variant="outlined"
                    type="submit">
                    Check Answers
                </Button>
            </Link>

        </div >
    );
}

export default TriviaTestPage;