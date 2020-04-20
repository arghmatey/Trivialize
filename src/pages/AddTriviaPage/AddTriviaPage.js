import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './AddTriviaPage.css';
import { Button, TextField, MenuItem } from '@material-ui/core';
import userService from '../../utils/userService';

class AddTriviaPage extends Component {
    state = {
        formData: {
            user: userService.getUser(),
            name: '',
            category: '',
            questions: [{
                question: '',
                answer: ''
            }]
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTrivia(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData
        });
    };

    handleTextQuestion = i => e => {
        let questions = [...this.state.formData.questions]
        questions[i].question = e.target.value
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

    deleteQuestion = e => {
        e.preventDefault()
        let questions = this.state.formData.questions.pop({});
        this.setState({
            questions
        })
    }

    render() {
        return (
            <>
                <h2>Create Trivia Game</h2>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            required
                            name="name"
                            id="standard-helperText"
                            fullWidth
                            label="Trivia Name"
                            onChange={this.handleChange}
                            value={this.state.formData.name} />
                        <br />
                    </div>
                    <div>
                        <TextField
                            name="category"
                            id="standard-select"
                            required
                            select
                            fullWidth
                            defaultValue="Category"
                            label="Category"
                            value={this.state.formData.category}
                            onChange={this.handleChange}
                            helperText="Please select your category"
                        >
                            {this.props.categories.map((category, idx) =>
                                <MenuItem
                                    value={category.name} key={idx} default>{category.name}</MenuItem>
                            )}
                        </TextField>
                    </div>
                    <div className="question-section">
                        {this.state.formData.questions.map((question, idx) => (
                            <Fragment key={idx}>
                                <div className="new-question">
                                    <div className="question-number">{idx + 1}.</div>
                                    <div className="question-answer">
                                        <TextField
                                            required
                                            name="question"
                                            id="standard-helperText"
                                            fullWidth
                                            multiline
                                            label="Question"
                                            onChange={this.handleTextQuestion(idx)}
                                            value={question.question} />
                                        <br />
                                        <TextField
                                            required
                                            name="answer"
                                            id="standard-helperText"
                                            fullWidth
                                            multiline
                                            label="Answer"
                                            onChange={this.handleTextAnswer(idx)}
                                            value={question.answer} />
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        className="new-question-btn"
                                        variant="outlined"
                                        onClick={this.deleteQuestion}>
                                        Delete Question
                                </Button>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                    <div className="new-question-section">
                        <Button
                            className="new-question-btn"
                            variant="outlined"
                            onClick={this.addQuestion}>
                            Add New Question
                        </Button>
                    </div>

                    <div className="button-section">
                        <Button
                            variant="outlined"
                            type="submit">
                            Create Game
                    </Button>
                        <Link
                            to="/">
                            <Button
                                variant="outlined"
                                color="secondary"
                                type="submit">
                                Cancel
                        </Button>
                        </Link>
                    </div>
                </form>
            </>
        )
    }
};

export default AddTriviaPage;