import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import { getQuestions } from '../../utils/questions-api';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import QuestionsPage from '../QuestionsPage/QuestionsPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      questions: []
    };
  }

  async componentDidMount() {
    const questions = await getQuestions();
    this.setState({ questions: questions.results });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <div>
        <header>
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <main>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Link to='/questions'>Test your knowledge</Link>
          <Route exact path='/questions' render={(props) =>
            <QuestionsPage
              questions={this.questions}
            />
          } />
        </main>
      </div>
    )
  }
};

export default App; 