import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import * as quizAPI from '../../utils/quizApiService';
import * as triviaAPI from '../../utils/trivias-api';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AboutPage from '../AboutPage/AboutPage'
import QuizSelectPage from '../../pages/QuizSelectPage';
import QuizPage from '../../pages/QuizPage.js'
import AddTriviaPage from '../AddTriviaPage/AddTriviaPage';
import TriviaPage from '../TriviaPage/TriviaPage';
import TriviaDetailPage from '../TriviaDetailPage/TriviaDetailPage';
import EditTriviaPage from '../EditTriviaPage/EditTriviaPage';
import QuizResults from '../../components/QuizResults';

class App extends Component {
  state = {
    user: userService.getUser(),
    trivias: [],
    categories: [],
    quiz: [],
    correctAnswers: {},
    skillsTestScore: 0,
    averageScore: 0,
    totalGames: 0,
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  // creates user-made trivia
  handleAddTrivia = async newTriviaData => {
    const newTrivia = await triviaAPI.create(newTriviaData);
    this.setState(state => ({
      trivias: [...state.trivias, newTrivia]
    }),
      () => this.props.history.push('/manage')
    );
  }

  // updates user-made trivia
  handleUpdateTrivia = async updatedTriviaData => {
    const updatedTrivia = await triviaAPI.update(updatedTriviaData);
    const newTriviasArray = this.state.trivias.map(t => t._id === updatedTrivia._id ? updatedTrivia : t);
    this.setState(
      { trivias: newTriviasArray },
      () => this.props.history.push('/manage')
    );
  };

  // deletes user-made trivia
  handleDeleteTrivia = async id => {
    await triviaAPI.deleteOne(id);
    this.setState(state => ({
      trivias: state.trivias.filter(t => t._id !== id)
    }), () =>
      this.props.history.push('/manage'))
  }

  // retrieves quiz questions based on user selected options, scrambles answers, retrieves correct answers
  generateQuiz = async options => {
    const questions = await quizAPI.getQuizQuestions(options);
    const results = quizAPI.randomizeAnswers(questions.results);
    const correctAnswers = quizAPI.correctAnswers(questions.results);
    this.setState(
      { quiz: results, correctAnswers },
      () => this.props.history.push('/quiz/start')
      )
  }

  // calculates test score and tallys total games
  handleScore = (correct, total) => {
    const score = ((correct * total) * 100);
    this.setState(
      {
        skillsTestScore: score,
        totalGames: this.state.totalGames + 1
      }
    );
  }

  async componentDidMount() {
    const trivias = await triviaAPI.getAll();
    const categories = await quizAPI.getCategories();
    this.setState({
      trivias: trivias,
      categories: categories.trivia_categories
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <div className="neon-wrapper">
            <h1 className="neon-text">TRIVIALIZE</h1>
          </div>
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <main className="App-main">
          <Route exact path='/' render={() =>
            <AboutPage
              className="AboutPage"
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
          <Route exact path='/manage' render={() => (
            userService.getUser() ?
              <TriviaPage
                user={this.state.user}
                trivias={this.state.trivias}
                handleDeleteTrivia={this.handleDeleteTrivia}
                handleAddTrivia={this.handleAddTrivia}
              />
              :
              <Redirect to='/login' />
          )} />
          <Route exact path='/create' render={() =>
            <AddTriviaPage
              categories={this.state.categories}
              handleAddTrivia={this.handleAddTrivia} />
          } />
          <Route exact path='/details' render={({ location }) =>
            <TriviaDetailPage location={location} />
          } />
          <Route expact path='/edit' render={({ location }) =>
            <EditTriviaPage
              categories={this.state.categories}
              handleUpdateTrivia={this.handleUpdateTrivia}
              location={location}
            />
          } />

          <Route exact path='/quiz' render={() => (
              <QuizSelectPage
                categories={this.state.categories}
                generateQuiz={this.generateQuiz}
              />
          )} />
          <Route exact path='/quiz/start' render={() => (
            <QuizPage
              quiz={this.state.quiz}
              correctAnswers={this.state.correctAnswers}
              handleScore={this.handleScore}
              />
          )} />
          <Route exact path='/quiz/results' render={() =>
            <QuizResults
              skillsTestScore={this.state.skillsTestScore}
            />
          } />
        </main>
      </div >
    )
  }
};

export default App; 