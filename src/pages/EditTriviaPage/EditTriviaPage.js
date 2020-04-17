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
                        Save Game
                    </button>&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                </form>
            </>
        )
    }
};

export default EditTriviaPage;