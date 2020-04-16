import React, { Component } from 'react';

class AddTriviaPage extends Component {
    state = {
        formData: {
            name: '',
            numberOfQuestions: 5,
            questions: {
                question: '',
                answer: ''
            }
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTrivia(this.state.formData);
        console.log(this.state.formData)
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
        console.log(formData)
    };

    handleChangeQuestions = e => {
        const questions = { ...this.state.formData.questions, [e.target.name]: e.target.value };
        this.setState({
            formData: {
                ...this.state.formData,
                questions
            }
        })
        console.log(questions)
    }

    render() {
        return (
            <>
                <h2>Create Trivia Game</h2>
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
                        <label>Length (5-10)</label>
                        <input
                            type="number"
                            min="5"
                            max="10"
                            name="numberOfQuestions"
                            value={this.state.formData.numberOfQuestions}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <span>
                            <input
                                name="question"
                                value={this.state.formData.questions.question}
                                onChange={this.handleChangeQuestions}
                            />
                            <input
                                name="answer"
                                value={this.state.formData.questions.answer}
                                onChange={this.handleChangeQuestions}
                            />
                        </span>
                    </div>
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}>
                        Create Game
                    </button>
                </form>
            </>
        )
    }
};

export default AddTriviaPage;