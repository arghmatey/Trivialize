import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import { getQuestions, selectCategory } from '../../utils/questions-api';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import TriviaSelectForm from '../../components/TriviaSelectForm/TriviaSelectForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      questions: [],
      categories: []
    };
  }

  async componentDidMount() {
    const questions = await getQuestions();
    const categories = await selectCategory();
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
        <header className="App-header">
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <main className="App-main">
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
          <div className="App-component">
            <TriviaSelectForm
              questions={this.state.questions}
              categories={this.state.categories} />
          </div>
        </main>
      </div >
    )
  }
};

export default App; 