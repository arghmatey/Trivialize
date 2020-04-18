import React from 'react';
import QuestionItem from '../../components/QuestionItem/QuestionItem';

function QuestionsPage(props) {
    return (
        <>
            <h2>
                {props.category}
            </h2>
            <div>
                {props.questions.map((question, idx) =>
                    <QuestionItem
                        question={question}
                        key={idx}
                    />
                )}
            </div>
        </>
    )
}

export default QuestionsPage;