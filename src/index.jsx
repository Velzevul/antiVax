import 'babel-polyfill'

import './styles/global.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'

import configureStore from './store'
import App from './components/App'
import Section from './components/Section'
import SectionArticle from './components/SectionArticle'
import SectionCategoryItem from './components/SectionCategoryItem'
import Blog from './components/Blog'
import Blogpost from './components/Blogpost'
import Questions from './components/Questions'
import Faq from './components/Faq'

const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path={`${PUBLIC_PATH}`} component={App}>
        <IndexRedirect to="questions" />

        <Route path="questions" component={Questions}>
          <Route path=":faqId" component={Faq} />
        </Route>

        <Route path="blog" component={Blog}>
          <Route path=":blogpostId" component={Blogpost}/>
        </Route>

        <Route path=":sectionId" component={Section}>
          <Route path=":articleId" component={SectionArticle}>
            <Route path=":itemId" component={SectionCategoryItem} />
          </Route>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
