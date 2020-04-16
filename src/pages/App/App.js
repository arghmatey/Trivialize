import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import * as questionAPI from '../../utils/questions-api';
import * as triviaAPI from '../../utils/trivias-api';
import NavBar from '../../components/NavBar/NavBar';
import TriviaListPage from '../TriviaListPage/TriviaListPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import TriviaSelectForm from '../../components/TriviaSelectForm/TriviaSelectForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      trivias: [],
      questions: [],
      categories: []
    };
  }

  handleAddTrivia = async newTrivData => {
    const newTriv = await triviaAPI.create(newTrivData);
    this.setState(state => ({
      trivias: [...state.trivias, newTriv]
    }),
      () => this.props.history.push('/'));
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  async componentDidMount() {
    const trivias = await triviaAPI.getAll();
    const questions = await questionAPI.getQuestions();
    console.log(questions);
    const categories = await questionAPI.selectCategory();
    console.log(categories);
    this.setState({
      trivias: trivias,
      questions: questions.results,
      categories: categories.trivia_categories
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          TRIVIALIZE
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <main className="App-main">
          <Route exact path='/' render={() =>
            <TriviaListPage
              trivias={this.state.trivias}
              handleAddTrivia={this.handleAddTrivia}
            />
          } />
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
          <Route exact path='/skills' render={() =>
            <TriviaSelectForm
              questions={this.state.questions}
              categories={this.state.categories} />
          } />
        </main>
      </div >
    )
  }
};

export default App; 