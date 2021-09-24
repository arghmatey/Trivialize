import React, { useState } from 'react';
import CurrentQuestion from '../../components/CurrentQuestion';
import Results from '../../components/Results';
import './QuizPage.css';

const QuizPage = (props) => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
    const [correctTally, setCorrectTally] = useState(0);

    const handleAnswerQuestion = (correct) => {
        if (correct) setCorrectTally(correctTally + 1);
        (currentQuestionNumber < props.quiz.length - 1) ? setCurrentQuestionNumber(currentQuestionNumber + 1) : props.handleScore(correctTally);
    }

    return (
        <section>
            <p>{props.quiz[currentQuestionNumber].category}</p>
            <p>{currentQuestionNumber + 1} / {props.quiz.length}</p>
            {!props.score
            ? 
            <CurrentQuestion
                current={props.quiz[currentQuestionNumber]}
                handleAnswerQuestion={handleAnswerQuestion}
            />
            :
            <Results 
                score={props.score}
                handleNewSelect={props.handleNewSelect}
            />
            }
        </section>
    );
}

export default QuizPage;