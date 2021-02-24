import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import * as questionAPI from '../../utils/questions-api';
import * as triviaAPI from '../../utils/trivias-api';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import TriviaSelectForm from '../../components/TriviaSelectForm/TriviaSelectForm';
import AboutPage from '../AboutPage/AboutPage'
import TriviaPage from '../TriviaPage/TriviaPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddTriviaPage from '../AddTriviaPage/AddTriviaPage';
import TriviaDetailPage from '../TriviaDetailPage/TriviaDetailPage';
import EditTriviaPage from '../EditTriviaPage/EditTriviaPage';
import TriviaTestPage from '../../pages/TriviaTestPage/TriviaTestPage.js'
import TriviaResults from '../../components/TriviaResults';

class App extends Component {
  state = {
    user: userService.getUser(),
    trivias: [],
    categories: [],
    skillsTest: [],
    correctAnswers: {},
    skillsTestScore: 0,
    averageScore: 0,
    totalGames: 0
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
      () => this.props.history.push('/trivias')
    );
  }

  // updates user-made trivia
  handleUpdateTrivia = async updatedTriviaData => {
    const updatedTrivia = await triviaAPI.update(updatedTriviaData);
    const newTriviasArray = this.state.trivias.map(t => t._id === updatedTrivia._id ? updatedTrivia : t);
    this.setState(
      { trivias: newTriviasArray },
      () => this.props.history.push('/trivias')
    );
  };

  // deletes user-made trivia
  handleDeleteTrivia = async id => {
    await triviaAPI.deleteOne(id);
    this.setState(state => ({
      trivias: state.trivias.filter(t => t._id !== id)
    }), () =>
      this.props.history.push('/trivias'))
  }

  // retrieves questions, scrambles answers, retrieves correct answers
  getSkillsTest = async category => {
    const questions = await questionAPI.getQuestions(category);
    const results = questionAPI.randomizeAnswers(questions.results);
    const correctAnswers = questionAPI.correctAnswers(questions.results);
    this.setState({ skillsTest: results, correctAnswers })
  }

  // calculates test score and tallys total games
  handleScore = (correct) => {
    const score = (correct * 10); // 10 questions is default for now.
    this.setState(
      {
        skillsTestScore: score,
        totalGames: this.state.totalGames + 1
      },
      this.handleAverage
    );
  }

  // average of all tests taken for chosen category
  handleAverage = () => {
    const average = ((this.state.averageScore + this.state.skillsTestScore) / (10 * this.state.totalGames));
    this.setState({ averageScore: average })
  }

  async componentDidMount() {
    const trivias = await triviaAPI.getAll();
    const categories = await questionAPI.getCategories();
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
          <Route exact path='/trivias' render={() => (
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
          <Route exact path='/add' render={() =>
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

          <Route exact path='/skills' render={() => (
            userService.getUser() ?
              <TriviaSelectForm
                categories={this.state.categories}
                skillsTestScore={this.state.skillsTestScore}
                averageScore={this.state.averageScore}
                totalGames={this.state.totalGames}
                getSkillsTest={this.getSkillsTest} />
              :
              <Redirect to='/login' />
          )} />
          <Route exact path='/test' render={() =>
            <TriviaTestPage
              skillsTest={this.state.skillsTest}
              correctAnswers={this.state.correctAnswers}
              handleScore={this.handleScore}
              handleAverage={this.handleAverage}
            />
          } />
          <Route exact path='/results' render={() =>
            <TriviaResults
              skillsTestScore={this.state.skillsTestScore}
            />
          } />
        </main>
      </div >
    )
  }
};

export default App; 