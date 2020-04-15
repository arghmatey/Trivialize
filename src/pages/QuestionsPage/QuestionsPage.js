import React from 'react';
import QuestionItem from '../../components/QuestionItem/QuestionItem';

function QuestionsPage(props) {
    return (
        <>
            <h1>Questions</h1>
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