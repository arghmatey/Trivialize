import React from 'react';

function TrivaDetailPage(props) {
    const trivia = props.location.state.trivia;
    return (
        <>
            <h2>{trivia.name}</h2>
            <div>{trivia.questions.map((question, idx) =>
                <div key={question._id}>
                    <span>{(idx + 1)}.</span>
                    <span>{question.question}</span>
                    <span>{question.answer}</span>
                </div>)}</div>
            <div></div>
        </>
    )
}

export default TrivaDetailPage;