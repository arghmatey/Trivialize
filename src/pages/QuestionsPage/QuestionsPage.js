import React from 'react';
import QuestionItem from '../../components/QuestionItem/QuestionItem';

function QuestionsPage(props) {
    return (
        <>
            <h1>Questions</h1>
            <div>
                {props.questions.map(question =>
                    <QuestionItem
                        question={question}
                    />
                )}
            </div>
        </>
    )
}

export default QuestionsPage;