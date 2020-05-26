import React from 'react';
import { Link, Route } from 'react-router-dom';
import TriviaTestPage from '../../pages/TriviaTestPage/TriviaTestPage.js'

function TriviaSelectForm(props) {

    return (
        <>
            <h2>Test Your Knowledge</h2>
            <div>
                {props.categories.map((category, idx) =>

                    <div className="testWrapper">
                        <div>
                            <div>
                                {category.name}
                            </div>
                            <div>Score: 0/10</div>
                        </div>
                        <div>
                            <Link to={`/${category.name}/test`}>
                                <button>
                                    test
                            </button>
                            </Link>
                            <Route exact path={`/${category.name}/test`} render={() =>
                                <TriviaTestPage
                                    category={category}
                                />} />
                            <button>
                                challenge
                            </button>
                        </div>
                    </div>
                )}<br />
            </div>
            <div>Under construction</div>
        </>
    );
}

export default TriviaSelectForm;