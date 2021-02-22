import React from 'react';
import { Link } from 'react-router-dom';

function TriviaSelectForm(props) {

    return (
        <>
            <h2>Test Your Knowledge</h2>
            <div>
                {props.categories.map((category, idx) =>

                    <div className="testWrapper" key={idx}>
                        <div>
                            <div>
                                {category.name}
                            </div>
                            <div>Score: 0/10</div>
                        </div>
                        <div>
                            <Link to={`/test`}>
                                <button>
                                    test
                                </button>
                            </Link>

                            <button>
                                challenge
                            </button>
                        </div>
                    </div>
                )}<br />
            </div>
        </>
    );
}

export default TriviaSelectForm;