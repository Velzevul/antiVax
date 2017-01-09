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
// import SectionArticle from './components/SectionArticle'
// import SectionCategoryItem from './components/SectionCategoryItem'
// import Blog from './components/Blog'
// import Blogpost from './components/Blogpost'
// import Questions from './components/Questions'
// import Faq from './components/Faq'
// import ChangePassword from './components/ChangePassword'
// import SearchResults from './components/SearchResults'

const store = configureStore()

// ReactDOM.render((
//   <Provider store={store}>
//     <Router history={hashHistory}>
//       <Route path={'/'} component={App}>
//         <IndexRedirect to="questions" />
//
//         <Route path="search" component={SearchResults} />
//
//         <Route path="change-password" component={ChangePassword} />
//
//         <Route path="questions" component={Questions}>
//           <Route path=":faqId" component={Faq} />
//         </Route>
//
//         <Route path="blogposts" component={Blog}>
//           <Route path=":blogpostId" component={Blogpost}/>
//         </Route>
//
//         <Route path=":sectionId" component={Section}>
//           <Route path=":articleId" component={SectionArticle}>
//             <Route path=":itemId" component={SectionCategoryItem} />
//           </Route>
//         </Route>
//       </Route>
//     </Router>
//   </Provider>
// ), document.getElementById('app'))

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRedirect to="home" />

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
