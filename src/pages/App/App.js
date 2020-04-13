import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'
import SingupPage from '../SignupPage/SignupPage';

class App extends Component {

  render() {
    return (
      <div>
        <header>
          <nav>
            <NavLink exact to='/signup'>Signup</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path='/signup' render={({ history }) =>
            <SingupPage
              history={history}
            />
          } />
        </main>
      </div>
    )
  }
};

export default App;