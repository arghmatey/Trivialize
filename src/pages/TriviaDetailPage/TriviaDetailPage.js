import React from 'react';
import './TriviaDetailPage.css';

function TrivaDetailPage(props) {
    const trivia = props.location.state.trivia;
    return (
        <>
            <h2>{trivia.name}</h2>
            <p>{trivia.category}</p>
            <div>{trivia.questions.map((question, idx) =>
                <div className="detail-question" key={question._id}>
                    <div>Q: {question.question}</div><br />
                    <div>A: {question.answer}</div>
                </div>
            )}</div>
            <div></div>
        </>
    )
}

export default TrivaDetailPage;