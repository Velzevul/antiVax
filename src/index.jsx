import 'babel-polyfill'

import './styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'

import configureStore from './store'
import AppContainer from './components/AppContainer'
import SubsectionContainer from './components/SubsectionContainer'
import SectionContainer from './components/SectionContainer'
import ArticlePage from './components/ArticlePage'
import SearchResults from './components/SearchResults'
import ChangePassword from './components/ChangePassword'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="home" />

        <Route path="change-password" component={ChangePassword} />

        <Route path="search" component={SearchResults} />

        <Route path=":sectionUrl" component={SectionContainer}>
          <Route path="articles/:articleUrl" component={ArticlePage} />

          <Route path=":subsectionUrl" component={SubsectionContainer}>
            <Route path="articles/:articleUrl" component={ArticlePage} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
