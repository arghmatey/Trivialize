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

class App extends Component {
  state = {
    user: userService.getUser(),
    trivias: [],
    skillsTest: [],
    categories: [],
    correctAnswers: {},
    score: 0
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleAddTrivia = async newTriviaData => {
    const newTrivia = await triviaAPI.create(newTriviaData);
    this.setState(state => ({
      trivias: [...state.trivias, newTrivia]
    }),
      () => this.props.history.push('/trivias')
    );
  }

  handleUpdateTrivia = async updatedTriviaData => {
    const updatedTrivia = await triviaAPI.update(updatedTriviaData);
    const newTriviasArray = this.state.trivias.map(t => t._id === updatedTrivia._id ? updatedTrivia : t);
    this.setState(
      { trivias: newTriviasArray },
      () => this.props.history.push('/trivias')
    );
  };

  handleDeleteTrivia = async id => {
    await triviaAPI.deleteOne(id);
    this.setState(state => ({
      trivias: state.trivias.filter(t => t._id !== id)
    }), () =>
      this.props.history.push('/trivias'))
  }

  getSkillsTest = async category => {
    const questions = await questionAPI.getQuestions(category);
    const results = questionAPI.randomizeAnswers(questions.results);
    const correctAnswers = questionAPI.correctAnswers(questions.results);
    this.setState({ skillsTest: results, correctAnswers })
  }

  handleScore = (correct) => {
    const score = (correct * 10); // 10 questions is default for now. 
    this.setState({ score: score })
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
          <Route exact path='/skills' render={() => (
            userService.getUser() ?
              <TriviaSelectForm
                categories={this.state.categories}
                getSkillsTest={this.getSkillsTest} />
              :
              <Redirect to='/login' />
          )} />
          <Route exact path='/test' render={() =>
            <TriviaTestPage
              skillsTest={this.state.skillsTest}
              correctAnswers={this.state.correctAnswers}
            />} />
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
        </main>
      </div >
    )
  }
};

export default App; 