import React, { useState } from 'react';
import { Button, TextField, MenuItem } from '@material-ui/core';

function QuizSelectPage(props) {
    const [options, setOptions] = useState({
        category: "",
        amount: 10,
        difficulty: "",
        type: ""
    });
    // const [validForm, setValidForm] = useState(false)

    const handleChange = e => {
        const updatedOptions = { ...options, [e.target.name]: e.target.value };
        setOptions(updatedOptions);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.generateQuiz(options);
    }

    return (
        <section>
            <h2>Test Your Knowledge!</h2>
            
            <form autoComplete="off" onSubmit={handleSubmit}>

                <TextField
                    name="category"
                    id="outlined"
                    required
                    select
                    fullWidth
                    label="Category"
                    margin="normal"
                    value={options.category}
                    onChange={handleChange}
                    helperText="Select your category"
                >
                    {props.categories.map((category, idx) =>
                        <MenuItem
                            value={category.id} key={idx}>{category.name}</MenuItem>
                    )}
                </TextField>

                <TextField
                    required
                    name="amount"
                    id="outlined-number"
                    fullWidth
                    type="number"
                    label="Number of Questions"
                    margin="normal"
                    min="10"
                    max="25"
                    helperText="How many questions? (10-25)"
                    onChange={handleChange}
                    value={options.amount}
                />

                <TextField
                    name="difficulty"
                    id="outlined"
                    required
                    select
                    fullWidth
                    label="Difficulty"
                    margin="normal"
                    value={options.difficulty}
                    onChange={handleChange}
                    helperText="Choose your difficulty"
                >
                    <MenuItem value="any">Any difficulty</MenuItem>
                    <MenuItem value="easy">Easy</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="hard">Hard</MenuItem>
                </TextField>

                <TextField
                    name="type"
                    id="outlined"
                    required
                    select
                    fullWidth
                    label="Type"
                    margin="normal"
                    value={options.type}
                    onChange={handleChange}
                    helperText="Select quiz type"
                >
                    <MenuItem value="any">Any type</MenuItem>
                    <MenuItem value="multiple">Multiple Choice</MenuItem>
                    <MenuItem value="boolean">True / False</MenuItem>
                </TextField>

                <Button
                    variant="outlined"
                    type="submit">
                    Start
                </Button>
            </form>
        </section>
    );
}

export default QuizSelectPage;