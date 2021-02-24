import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function TriviaSelectForm(props) {

    const handleTestSkills = async e => {
        props.getSkillsTest(e.target.id);
    }

    return (
        <>
            <h2>Test Your Knowledge</h2>
            <div>
                {props.categories.map((category, idx) =>

                    <div className="testWrapper" key={idx}>
                        <div>
                            <h4>{category.name}</h4>
                            <div>Recent score: {props.skillsTestScore}%</div>
                            <div>Average score: {props.averageScore}%</div>
                            <div>Total Games: {props.totalGames}</div>
                        </div>
                        <div>
                            <Link to={`/test`} onClick={handleTestSkills}>
                                <Button
                                    id={category.id}
                                    variant="outlined"
                                    type="submit">
                                    Test
                                </Button>
                            </Link>

                            <Button
                                id={category.id}
                                variant="outlined"
                                type="submit">
                                Challenge
                            </Button>
                        </div>
                    </div>
                )}<br />
            </div>
        </>
    );
}

export default TriviaSelectForm;