import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import * as questionAPI from '../../utils/questions-api';
import * as triviaAPI from '../../utils/trivias-api';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import TriviaSelectForm from '../../components/TriviaSelectForm/TriviaSelectForm';
import TriviaPage from '../TriviaPage/TriviaPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddTriviaPage from '../AddTriviaPage/AddTriviaPage';
import TriviaDetailPage from '../TriviaDetailPage/TriviaDetailPage';
import EditTriviaPage from '../EditTriviaPage/EditTriviaPage';
import QuestionsPage from '../QuestionsPage/QuestionsPage';

class App extends Component {
  state = {
    user: userService.getUser(),
    trivias: [],
    questions: [],
    categories: []
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
      () => this.props.history.push('/')
    );
  }

  handleUpdateTrivia = async updatedTriviaData => {
    const updatedTrivia = await triviaAPI.update(updatedTriviaData);
    const newTriviasArray = this.state.trivias.map(t => t._id === updatedTrivia._id ? updatedTrivia : t);
    this.setState(
      { trivias: newTriviasArray },
      () => this.props.history.push('/')
    );
  };

  handleDeleteTrivia = async id => {
    await triviaAPI.deleteOne(id);
    this.setState(state => ({
      trivias: state.trivias.filter(t => t._id !== id)
    }), () =>
      this.props.history.push('/'))
  }

  async componentDidMount() {
    const trivias = await triviaAPI.getAll();
    const questions = await questionAPI.getQuestions();
    const categories = await questionAPI.selectCategory();
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
          <div className="neon-wrapper">
            <h1 className="neon-text">TRIVIALIZE</h1>
          </div>
          <NavBar
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        </header>
        <main className="App-main">
          <Route exact path='/' render={() => (
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
          <Route exact path='/questions' render={() =>
            <QuestionsPage
              questions={this.state.questions}
            />
          } />
        </main>
      </div >
    )
  }
};

export default App; 