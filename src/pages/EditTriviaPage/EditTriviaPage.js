import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditTriviaPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.trivia
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateTrivia(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    handleChangeQuestions = e => {
        const questions = { ...this.state.formData.questions, [e.target.name]: e.target.value };
        this.setState({
            formData: {
                ...this.state.formData,
                questions
            }
        });
    };

    handleTextQuestion = i => e => {
        let questions = [...this.state.formData.questions]
        questions[i].question = e.target.value
        console.log(questions)
        this.setState({
            formData: {
                ...this.state.formData,
                questions
            }
        });
    }

    handleTextAnswer = i => e => {
        let questions = [...this.state.formData.questions]
        questions[i].answer = e.target.value
        console.log(questions)
        this.setState({
            formData: {
                ...this.state.formData,
                questions
            }
        });
    }

    addQuestion = e => {
        e.preventDefault()
        let questions = this.state.formData.questions.push({});
        this.setState({
            questions
        })
    }

    render() {
        return (
            <>
                <h2>Edit Game</h2>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Category or Name (required)</label>
                        <input
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        {this.state.formData.questions.map((question, index) => (
                            <span key={index}>
                                <input
                                    name="question"
                                    type="text"
                                    onChange={this.handleTextQuestion(index)}
                                    value={question.question}
                                />
                                <input
                                    name="answer"
                                    type="text"
                                    onChange={this.handleTextAnswer(index)}
                                    value={question.answer}
                                />
                            </span>
                        ))}
                        <button onClick={this.addQuestion}>Add New Question</button>
                    </div>
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}>
                        Save Game
                    </button>&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                </form>
            </>
        )
    }
};

export default EditTriviaPage;