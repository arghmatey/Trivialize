import React, { Component } from 'react';

class AddTriviaPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            numberOfQuestions: 0
        }
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTrivia(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.ListeningStateChangedEvent({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h2>Create Trivia Game</h2>
                <form ref={this.formRef} autoComplete="off">

                </form>
            </>
        )
    }
};