import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CategoriesView from './components/CategorieView/index.js';
import CreateView from './components/CreateView/index.js';
import MainContent from './components/MainContent/index.js';
import PostView from './components/PostView/index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route
              exact
              path="/"
              render={() => (
                  <MainContent/>
              )}
          />
          <Route
              exact
              path="/managePost"
              render={() => (
                  <CreateView/>
              )}
          />
          <Route
              exact
              path="/categories"
              render={() => (
                  <CategoriesView/>
              )}
          />
          <Route
              exact
              path="/post"
              render={() => (
                  <PostView/>
              )}
          />
      </div>
    );
  }
}

export default App;
