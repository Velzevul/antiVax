webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(299);

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(331);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(470);

	var _reactRouter = __webpack_require__(492);

	var _store = __webpack_require__(545);

	var _store2 = _interopRequireDefault(_store);

	var _AppContainer = __webpack_require__(601);

	var _AppContainer2 = _interopRequireDefault(_AppContainer);

	var _SectionContainer = __webpack_require__(660);

	var _SectionContainer2 = _interopRequireDefault(_SectionContainer);

	var _SubsectionContainer = __webpack_require__(661);

	var _SubsectionContainer2 = _interopRequireDefault(_SubsectionContainer);

	var _ArticleContainer = __webpack_require__(662);

	var _ArticleContainer2 = _interopRequireDefault(_ArticleContainer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import SectionArticle from './components/SectionArticle'
	// import SectionCategoryItem from './components/SectionCategoryItem'
	// import Blog from './components/Blog'
	// import Blogpost from './components/Blogpost'
	// import Questions from './components/Questions'
	// import Faq from './components/Faq'
	// import ChangePassword from './components/ChangePassword'
	// import SearchResults from './components/SearchResults'

	var store = (0, _store2.default)();

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

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _AppContainer2.default },
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: ':sectionUrl', component: _SectionContainer2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: 'articles/:articleUrl', component: _ArticleContainer2.default }),
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: ':subsectionUrl', component: _SubsectionContainer2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: 'articles/:articleUrl', component: _ArticleContainer2.default })
	        )
	      )
	    )
	  )
		), document.getElementById('app'));

/***/ },

/***/ 299:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(477);

	var _reduxLogger = __webpack_require__(546);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxThunk = __webpack_require__(547);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _rootReducer = __webpack_require__(548);

	var _rootReducer2 = _interopRequireDefault(_rootReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var middleware = [_reduxThunk2.default];

	if (true) {
	  var logger = (0, _reduxLogger2.default)();
	  middleware.push(logger);
	}

	var configureStore = function configureStore(initialState) {
	  return (0, _redux.createStore)(_rootReducer2.default, initialState, _redux.applyMiddleware.apply(undefined, middleware));
	};

	exports.default = configureStore;

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(477);

	var _authReducer = __webpack_require__(549);

	var _authReducer2 = _interopRequireDefault(_authReducer);

	var _flashReducer = __webpack_require__(554);

	var _flashReducer2 = _interopRequireDefault(_flashReducer);

	var _questionsReducer = __webpack_require__(555);

	var _questionsReducer2 = _interopRequireDefault(_questionsReducer);

	var _articleReducer = __webpack_require__(557);

	var _articleReducer2 = _interopRequireDefault(_articleReducer);

	var _searchReducer = __webpack_require__(559);

	var _searchReducer2 = _interopRequireDefault(_searchReducer);

	var _usersReducer = __webpack_require__(595);

	var _usersReducer2 = _interopRequireDefault(_usersReducer);

	var _sectionsReducer = __webpack_require__(597);

	var _sectionsReducer2 = _interopRequireDefault(_sectionsReducer);

	var _uiReducer = __webpack_require__(599);

	var _uiReducer2 = _interopRequireDefault(_uiReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  auth: _authReducer2.default,
	  flash: _flashReducer2.default,
	  question: _questionsReducer2.default,
	  articles: _articleReducer2.default,
	  search: _searchReducer2.default,
	  user: _usersReducer2.default,
	  sections: _sectionsReducer2.default,
	  ui: _uiReducer2.default
	});

		exports.default = rootReducer;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _authActions = __webpack_require__(550);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var auth = function auth() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.auth : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _authActions.REQUEST_AUTH:
	      return _extends({}, _initialState2.default.auth, {
	        isFetching: true
	      });
	    case _authActions.LOGIN:
	      return {
	        isFetching: false,
	        user: action.user
	      };
	    case _authActions.LOGOUT:
	      return {
	        isFetching: false,
	        user: null
	      };
	    default:
	      return state;
	  }
	};

	exports.default = auth;

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loginWithToken = exports.loginWithCredentials = exports.logOut = exports.LOGOUT = exports.LOGIN = exports.REQUEST_AUTH = undefined;

	__webpack_require__(551);

	var _flashActions = __webpack_require__(552);

	var REQUEST_AUTH = exports.REQUEST_AUTH = 'REQUEST_AUTH';
	var LOGIN = exports.LOGIN = 'LOGIN';
	var LOGOUT = exports.LOGOUT = 'LOGOUT';

	var requestAuth = function requestAuth() {
	  return {
	    type: REQUEST_AUTH
	  };
	};

	var logOut = exports.logOut = function logOut() {
	  return function (dispatch) {
	    localStorage.removeItem('antiVax_auth_token');
	    dispatch({ type: LOGOUT });
	  };
	};

	var logIn = function logIn(user) {
	  return {
	    type: LOGIN,
	    user: user
	  };
	};

	var loginWithCredentials = exports.loginWithCredentials = function loginWithCredentials(email, password) {
	  return function (dispatch) {
	    dispatch(requestAuth());

	    fetch(("https://localhost.com") + '/auth/authenticate-credentials', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify({
	        email: email,
	        password: password
	      })
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        localStorage.setItem('antiVax_auth_token', json.data.token);
	        dispatch(logIn(json.data.user));
	      } else {
	        dispatch(logOut());
	        dispatch((0, _flashActions.flashMessage)(json.data.error, 'error'));
	      }
	    });
	  };
	};

	var loginWithToken = exports.loginWithToken = function loginWithToken(token) {
	  return function (dispatch) {
	    dispatch(requestAuth());

	    fetch(("https://localhost.com") + '/auth/authenticate-token', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify({
	        token: token
	      })
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        localStorage.setItem('antiVax_auth_token', json.data.token);
	        dispatch(logIn(json.data.user));
	      } else {
	        dispatch(logOut());
	        dispatch((0, _flashActions.flashMessage)(json.data.error, 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 552:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SET_MESSAGE = exports.SET_MESSAGE = 'SET_MESSAGE';
	var UNSET_MESSAGE = exports.UNSET_MESSAGE = 'UNSET_MESSAGE';

	var setMessage = function setMessage(message, messageType, timeoutId) {
	  return {
	    type: SET_MESSAGE,
	    message: message,
	    messageType: messageType,
	    timeoutId: timeoutId
	  };
	};

	var unsetMessage = function unsetMessage(message, messageType) {
	  return {
	    type: UNSET_MESSAGE
	  };
	};

	var flashMessage = exports.flashMessage = function flashMessage(message, messageType) {
	  return function (dispatch) {
	    var t = setTimeout(function () {
	      dispatch(unsetMessage());
	    }, 2000);

	    dispatch(setMessage(message, messageType, t));
	  };
	};

/***/ },

/***/ 553:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  auth: {
	    isFetching: false,
	    user: null
	  },
	  flash: {
	    message: null,
	    type: null,
	    timeoutId: null
	  },
	  newQuestion: {
	    isUpdating: false,
	    errors: {}
	  },
	  articles: {
	    isFetching: true,
	    items: []
	  },
	  newComment: {
	    isUpdating: false,
	    errors: {}
	  },
	  search: {
	    isFetching: false,
	    items: [],
	    query: ''
	  },
	  user: {
	    isUpdating: false,
	    errors: {}
	  },
	  sections: {
	    isFetching: true,
	    items: []
	  },
	  ui: {
	    windowWidth: 0,
	    widthThreshold: 960,
	    mainMenuIsOpen: true
	  }
		};

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _flashActions = __webpack_require__(552);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var flash = function flash() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, _initialState2.default.flash) : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _flashActions.SET_MESSAGE:
	      clearTimeout(state.timeoutId);

	      return _extends({}, {
	        message: action.message,
	        type: action.messageType,
	        timeoutId: action.timeoutId
	      });
	    case _flashActions.UNSET_MESSAGE:
	      clearTimeout(state.timeoutId);

	      return _extends({}, _initialState2.default.flash);
	    default:
	      return state;
	  }
	};

	exports.default = flash;

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _questionsActions = __webpack_require__(556);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var question = function question() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.newQuestion : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _questionsActions.REQUEST_QUESTION_CREATE:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _questionsActions.CONFIRM_QUESTION_CREATE:
	      return _extends({}, _initialState2.default.newQuestion);
	    case _questionsActions.REJECT_QUESTION_CREATE:
	      return _extends({}, state, {
	        isUpdating: false,
	        errors: action.errors
	      });
	    default:
	      return state;
	  }
	};

	exports.default = question;

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createQuestion = exports.REJECT_QUESTION_CREATE = exports.CONFIRM_QUESTION_CREATE = exports.REQUEST_QUESTION_CREATE = undefined;

	__webpack_require__(551);

	var _flashActions = __webpack_require__(552);

	var _authActions = __webpack_require__(550);

	var REQUEST_QUESTION_CREATE = exports.REQUEST_QUESTION_CREATE = 'REQUEST_QUESTION_CREATE';
	var CONFIRM_QUESTION_CREATE = exports.CONFIRM_QUESTION_CREATE = 'CONFIRM_QUESTION_CREATE';
	var REJECT_QUESTION_CREATE = exports.REJECT_QUESTION_CREATE = 'REJECT_QUESTION_CREATE';

	var requestCreate = function requestCreate() {
	  return {
	    type: REQUEST_QUESTION_CREATE
	  };
	};

	var confirmCreate = function confirmCreate() {
	  return {
	    type: CONFIRM_QUESTION_CREATE
	  };
	};

	var rejectCreate = function rejectCreate(errors) {
	  return {
	    type: REJECT_QUESTION_CREATE,
	    errors: errors
	  };
	};

	var createQuestion = exports.createQuestion = function createQuestion(data, successMessage) {
	  return function (dispatch, getState) {
	    dispatch(requestCreate());

	    fetch(("https://localhost.com") + '/questions/', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        question: data
	      })
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(confirmCreate());
	        if (successMessage) {
	          dispatch((0, _flashActions.flashMessage)(successMessage, 'log'));
	        }
	      } else if (json.data.name === 'ValidationError') {
	        var payload = {};

	        for (var prop in json.data.errors) {
	          payload[prop] = json.data.errors[prop].message;
	        }

	        dispatch(rejectCreate(payload));
	        dispatch((0, _flashActions.flashMessage)('Could not create questions due to errors', 'error'));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    }).catch(function (err) {
	      throw err;
	    });
	  };
	};

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _articleActions = __webpack_require__(558);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var articles = function articles() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.articles : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _articleActions.REQUEST_ARTICLES:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _articleActions.RECEIVE_ARTICLES:
	      return _extends({}, state, {
	        isFetching: false,
	        items: action.items
	      });
	    default:
	      return state;
	  }
	};

	exports.default = articles;

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchArticles = exports.RECEIVE_ARTICLES = exports.REQUEST_ARTICLES = undefined;

	__webpack_require__(551);

	var _reactRouter = __webpack_require__(492);

	var _flashActions = __webpack_require__(552);

	var _authActions = __webpack_require__(550);

	var REQUEST_ARTICLES = exports.REQUEST_ARTICLES = 'REQUEST_ARTICLES';
	var RECEIVE_ARTICLES = exports.RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

	var requestArticles = function requestArticles() {
	  return {
	    type: REQUEST_ARTICLES
	  };
	};

	var receiveArticles = function receiveArticles(items) {
	  return {
	    type: RECEIVE_ARTICLES,
	    items: items
	  };
	};

	var fetchArticles = exports.fetchArticles = function fetchArticles() {
	  return function (dispatch, getState) {
	    dispatch(requestArticles());

	    fetch(("https://localhost.com") + '/articles/', {
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveArticles(json.data.articles));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _searchActions = __webpack_require__(560);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var search = function search() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.search : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _searchActions.REQUEST_SEARCH_RESULTS:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _searchActions.RECEIVE_SEARCH_RESULTS:
	      return _extends({}, state, {
	        isFetching: false,
	        items: action.items
	      });
	    case _searchActions.SET_SEARCH_QUERY:
	      return _extends({}, state, {
	        query: action.query
	      });
	    default:
	      return state;
	  }
	};

	exports.default = search;

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchSearchResults = exports.setSearchQuery = exports.SET_SEARCH_QUERY = exports.RECEIVE_SEARCH_RESULTS = exports.REQUEST_SEARCH_RESULTS = undefined;

	var _algoliaSearch = __webpack_require__(561);

	var _algoliaSearch2 = _interopRequireDefault(_algoliaSearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUEST_SEARCH_RESULTS = exports.REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS';
	var RECEIVE_SEARCH_RESULTS = exports.RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
	var SET_SEARCH_QUERY = exports.SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';

	var setSearchQuery = exports.setSearchQuery = function setSearchQuery(q) {
	  return {
	    type: SET_SEARCH_QUERY,
	    query: q
	  };
	};

	var requestSearchResults = function requestSearchResults() {
	  return {
	    type: REQUEST_SEARCH_RESULTS
	  };
	};

	var receiveSearchResults = function receiveSearchResults(items) {
	  return {
	    type: RECEIVE_SEARCH_RESULTS,
	    items: items
	  };
	};

	var fetchSearchResults = exports.fetchSearchResults = function fetchSearchResults() {
	  return function (dispatch, getState) {
	    dispatch(requestSearchResults());

	    return _algoliaSearch2.default.search(getState().search.query, function (err, content) {
	      dispatch(receiveSearchResults(content.hits));
	    });
	  };
	};

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _algoliasearch = __webpack_require__(562);

	var _algoliasearch2 = _interopRequireDefault(_algoliasearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var client = (0, _algoliasearch2.default)('74S1JNB1ZT', '3de6fdbafc477cf019673bb81043ae0d');
	var index = client.initIndex('pages');

	exports.default = index;

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _usersActions = __webpack_require__(596);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var user = function user() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.user : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _usersActions.REQUEST_UPDATE_USER:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _usersActions.REJECT_UPDATE_USER:
	      return _extends({}, state, {
	        isUpdating: false,
	        errors: action.errors
	      });
	    case _usersActions.CONFIRM_UPDATE_USER:
	      return _extends({}, _initialState2.default.user);
	    default:
	      return state;
	  }
	};

	exports.default = user;

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateUser = exports.REJECT_UPDATE_USER = exports.CONFIRM_UPDATE_USER = exports.REQUEST_UPDATE_USER = undefined;

	__webpack_require__(551);

	var _flashActions = __webpack_require__(552);

	var _authActions = __webpack_require__(550);

	var REQUEST_UPDATE_USER = exports.REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER';
	var CONFIRM_UPDATE_USER = exports.CONFIRM_UPDATE_USER = 'CONFIRM_UPDATE_USER';
	var REJECT_UPDATE_USER = exports.REJECT_UPDATE_USER = 'REJECT_UPDATE_USER';

	var requestUpdate = function requestUpdate(id) {
	  return {
	    type: REQUEST_UPDATE_USER,
	    id: id
	  };
	};

	var confirmUpdate = function confirmUpdate(id, updatedItem) {
	  return {
	    type: CONFIRM_UPDATE_USER,
	    id: id,
	    updatedItem: updatedItem
	  };
	};

	var rejectUpdate = function rejectUpdate(id, errors) {
	  return {
	    type: REJECT_UPDATE_USER,
	    id: id,
	    errors: errors
	  };
	};

	var updateUser = exports.updateUser = function updateUser(id, data, successMessage) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://localhost.com") + '/users/' + id, {
	      method: 'PUT',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        user: data
	      })
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(confirmUpdate(id, json.data.user));
	        if (successMessage) {
	          dispatch((0, _flashActions.flashMessage)(successMessage, 'log'));
	        }
	      } else if (json.data.name === 'ValidationError') {
	        var payload = {};

	        for (var prop in json.data.errors) {
	          payload[prop] = json.data.errors[prop].message;
	        }

	        dispatch(rejectUpdate(id, payload));
	        dispatch((0, _flashActions.flashMessage)('Could not update user due to errors', 'error'));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _sectionsActions = __webpack_require__(598);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sections = function sections() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.sections : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _sectionsActions.REQUEST_SECTIONS:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _sectionsActions.RECEIVE_SECTIONS:
	      return _extends({}, state, {
	        isFetching: false,
	        items: action.items
	      });
	    default:
	      return state;
	  }
	};

	exports.default = sections;

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchSections = exports.RECEIVE_SECTIONS = exports.REQUEST_SECTIONS = undefined;

	__webpack_require__(551);

	var _flashActions = __webpack_require__(552);

	var _authActions = __webpack_require__(550);

	var REQUEST_SECTIONS = exports.REQUEST_SECTIONS = 'REQUEST_SECTIONS';
	var RECEIVE_SECTIONS = exports.RECEIVE_SECTIONS = 'RECEIVE_SECTIONS';

	var requestSections = function requestSections() {
	  return {
	    type: REQUEST_SECTIONS
	  };
	};

	var receiveSections = function receiveSections(items) {
	  return {
	    type: RECEIVE_SECTIONS,
	    items: items
	  };
	};

	var fetchSections = exports.fetchSections = function fetchSections() {
	  return function (dispatch, getState) {
	    dispatch(requestSections());

	    fetch(("https://localhost.com") + '/sections/', {
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveSections(json.data.items));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _uiActions = __webpack_require__(600);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ui = function ui() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.ui : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _uiActions.SET_WINDOW_WIDTH:
	      return _extends({}, state, {
	        windowWidth: action.width
	      });
	    case _uiActions.TOGGLE_MAIN_MENU:
	      return _extends({}, state, {
	        mainMenuIsOpen: !state.mainMenuIsOpen
	      });
	    default:
	      return state;
	  }
	};

	exports.default = ui;

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleMainMenu = exports.setWindowWidth = exports.TOGGLE_MAIN_MENU = exports.SET_WINDOW_WIDTH = undefined;

	__webpack_require__(551);

	var SET_WINDOW_WIDTH = exports.SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH';
	var TOGGLE_MAIN_MENU = exports.TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';

	var setWindowWidth = exports.setWindowWidth = function setWindowWidth(width) {
	  return {
	    type: SET_WINDOW_WIDTH,
	    width: width
	  };
	};

	var toggleMainMenu = exports.toggleMainMenu = function toggleMainMenu() {
	  return {
	    type: TOGGLE_MAIN_MENU
	  };
		};

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _authActions = __webpack_require__(550);

	var _articleActions = __webpack_require__(558);

	var _sectionsActions = __webpack_require__(598);

	var _uiActions = __webpack_require__(600);

	var _Loading = __webpack_require__(602);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Login = __webpack_require__(643);

	var _Login2 = _interopRequireDefault(_Login);

	var _App = __webpack_require__(645);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AppContainer = function (_React$Component) {
	  _inherits(AppContainer, _React$Component);

	  function AppContainer(props) {
	    _classCallCheck(this, AppContainer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppContainer).call(this, props));

	    _this.handleResize = _this.handleResize.bind(_this);
	    return _this;
	  }

	  _createClass(AppContainer, [{
	    key: 'handleResize',
	    value: function handleResize() {
	      var setWindowWidth = this.props.setWindowWidth;


	      setWindowWidth(window.outerWidth);
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var token = localStorage.getItem('antiVax_auth_token');

	      if (token) {
	        this.props.attemptToken(token);
	      }

	      window.addEventListener('resize', this.handleResize);
	      this.handleResize();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.handleResize);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var user = newProps.user;
	      var fetchSections = newProps.fetchSections;
	      var fetchArticles = newProps.fetchArticles;


	      if (user && !this.props.user) {
	        fetchSections();
	        fetchArticles();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var isAuthorizing = _props.isAuthorizing;
	      var isFetching = _props.isFetching;
	      var user = _props.user;
	      var windowWidth = _props.windowWidth;
	      var widthThreshold = _props.widthThreshold;
	      var children = _props.children;
	      var location = _props.location;
	      var params = _props.params;


	      if (isAuthorizing) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        if (user) {
	          if (isFetching) {
	            return _react2.default.createElement(_Loading2.default, null);
	          } else {
	            return _react2.default.createElement(_App2.default, { user: user,
	              width: windowWidth,
	              widthThreshold: widthThreshold,
	              location: location,
	              params: params,
	              children: children });
	          }
	        } else {
	          return _react2.default.createElement(_Login2.default, null);
	        }
	      }
	    }
	  }]);

	  return AppContainer;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    windowWidth: state.ui.windowWidth,
	    widthThreshold: state.ui.widthThreshold,
	    isFetching: state.articles.isFetching || state.sections.isFetching,
	    isAuthorizing: state.auth.isFetching,
	    user: state.auth.user
	  };
	}, function (dispatch) {
	  return {
	    setWindowWidth: function setWindowWidth(value) {
	      dispatch((0, _uiActions.setWindowWidth)(value));
	    },
	    attemptToken: function attemptToken(token) {
	      dispatch((0, _authActions.loginWithToken)(token));
	    },
	    fetchArticles: function fetchArticles() {
	      dispatch((0, _articleActions.fetchArticles)());
	    },
	    fetchSections: function fetchSections() {
	      dispatch((0, _sectionsActions.fetchSections)());
	    }
	  };
		})(AppContainer);

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Loading = __webpack_require__(603);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(604);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Loading = function Loading() {
	  return _react2.default.createElement(
	    'div',
	    { className: _Loading2.default.Loading },
	    _react2.default.createElement(_UI.Spinner, null)
	  );
	};

	exports.default = Loading;

/***/ },

/***/ 603:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Loading":"Loading__Loading___3pycz"};

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = exports.Alert = exports.Breadcrumbs = exports.TextArea = exports.TextInput = exports.Link = exports.Button = exports.Spinner = undefined;

	var _Alert = __webpack_require__(605);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Breadcrumbs = __webpack_require__(623);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _Button = __webpack_require__(625);

	var _Button2 = _interopRequireDefault(_Button);

	var _ModalWindow = __webpack_require__(627);

	var _Link = __webpack_require__(629);

	var _Link2 = _interopRequireDefault(_Link);

	var _Spinner = __webpack_require__(631);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _TextArea = __webpack_require__(633);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _TextInput = __webpack_require__(641);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Spinner = _Spinner2.default;
	exports.Button = _Button2.default;
	exports.Link = _Link2.default;
	exports.TextInput = _TextInput2.default;
	exports.TextArea = _TextArea2.default;
	exports.Breadcrumbs = _Breadcrumbs2.default;
	exports.Alert = _Alert2.default;
	exports.ModalWindow = _ModalWindow.ModalWindow;
	exports.ModalWindowBody = _ModalWindow.ModalWindowBody;
	exports.ModalWindowHeader = _ModalWindow.ModalWindowHeader;
		exports.ModalWindowFooter = _ModalWindow.ModalWindowFooter;

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Alert = __webpack_require__(606);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Layouts = __webpack_require__(607);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Alert = function Alert(_ref) {
	  var message = _ref.message;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'default' : _ref$theme;
	  var _ref$multipliers = _ref.multipliers;
	  var multipliers = _ref$multipliers === undefined ? {
	    padding: {
	      vertical: 1,
	      horizontal: 2
	    }
	  } : _ref$multipliers;

	  var messageStyle = {
	    padding: multipliers.padding.vertical * baseline + 'rem ' + multipliers.padding.horizontal * baseline + 'rem'
	  };

	  var messageClassNames = [_Alert2.default.Alert__message];

	  switch (theme) {
	    case 'error':
	      messageClassNames.push(_Alert2.default.Alert__message_error);
	      break;
	    case 'default':
	    default:
	      messageClassNames.push(_Alert2.default.Alert__message_default);
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _Alert2.default.Alert },
	    message ? _react2.default.createElement(
	      _Layouts.Block,
	      null,
	      _react2.default.createElement(
	        'div',
	        { style: messageStyle, className: messageClassNames.join(' ') },
	        message
	      )
	    ) : null
	  );
	};

	exports.default = Alert;

/***/ },

/***/ 606:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Alert":"Alert__Alert___37_QC","Alert__message":"Alert__Alert__message___2wCZF","Alert__message_default":"Alert__Alert__message_default___n_R9C","Alert__message_error":"Alert__Alert__message_error___2id4W","alert-enter":"Alert__alert-enter___K6JdL","alert-enter-active":"Alert__alert-enter-active___3vlCw","alert-leave":"Alert__alert-leave___2PpYT","alert-leave-active":"Alert__alert-leave-active___2ha_Q"};

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LabeledInput = exports.InputDecorator = exports.PageContent = exports.Page = exports.MediaFigure = exports.MediaBody = exports.Media = exports.ListInlineItem = exports.ListInline = exports.ListItem = exports.List = exports.GridItem = exports.Grid = exports.Wrap = exports.Flex = exports.Block = undefined;

	var _Block = __webpack_require__(608);

	var _Block2 = _interopRequireDefault(_Block);

	var _Flex = __webpack_require__(609);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Grid = __webpack_require__(610);

	var _List = __webpack_require__(611);

	var _ListInline = __webpack_require__(613);

	var _Media = __webpack_require__(615);

	var _Page = __webpack_require__(617);

	var _Wrap = __webpack_require__(618);

	var _Wrap2 = _interopRequireDefault(_Wrap);

	var _InputDecorator = __webpack_require__(619);

	var _InputDecorator2 = _interopRequireDefault(_InputDecorator);

	var _LabeledInput = __webpack_require__(621);

	var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Block = _Block2.default;
	exports.Flex = _Flex2.default;
	exports.Wrap = _Wrap2.default;
	exports.Grid = _Grid.Grid;
	exports.GridItem = _Grid.GridItem;
	exports.List = _List.List;
	exports.ListItem = _List.ListItem;
	exports.ListInline = _ListInline.ListInline;
	exports.ListInlineItem = _ListInline.ListInlineItem;
	exports.Media = _Media.Media;
	exports.MediaBody = _Media.MediaBody;
	exports.MediaFigure = _Media.MediaFigure;
	exports.Page = _Page.Page;
	exports.PageContent = _Page.PageContent;
	exports.InputDecorator = _InputDecorator2.default;
		exports.LabeledInput = _LabeledInput2.default;

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;

	var Block = function Block(_ref) {
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    marginBottom: baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	exports.default = Block;

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Flex = function Flex(_ref) {
	  var _ref$justifyContent = _ref.justifyContent;
	  var justifyContent = _ref$justifyContent === undefined ? 'flex-start' : _ref$justifyContent;
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'center' : _ref$alignItems;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var _ref$flexDirection = _ref.flexDirection;
	  var flexDirection = _ref$flexDirection === undefined ? 'row' : _ref$flexDirection;
	  var children = _ref.children;

	  var style = {
	    flexDirection: flexDirection,
	    alignItems: alignItems,
	    justifyContent: justifyContent,
	    display: 'flex',
	    width: '100%',
	    height: '100%'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	exports.default = Flex;

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GridItem = exports.Grid = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;

	var Grid = function Grid(_ref) {
	  var _ref$gutter = _ref.gutter;
	  var gutter = _ref$gutter === undefined ? 0 : _ref$gutter;
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'stretch' : _ref$alignItems;
	  var _ref$justifyContent = _ref.justifyContent;
	  var justifyContent = _ref$justifyContent === undefined ? 'flex-start' : _ref$justifyContent;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    height: '100%',
	    width: '100%',
	    display: 'flex',
	    alignItems: alignItems,
	    justifyContent: justifyContent,
	    marginLeft: '-' + baseline * gutter / 2 + 'rem',
	    marginRight: '-' + baseline * gutter / 2 + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	var GridItem = function GridItem(_ref2) {
	  var _ref2$span = _ref2.span;
	  var span = _ref2$span === undefined ? 0 : _ref2$span;
	  var _ref2$outOf = _ref2.outOf;
	  var outOf = _ref2$outOf === undefined ? 12 : _ref2$outOf;
	  var _ref2$gutter = _ref2.gutter;
	  var gutter = _ref2$gutter === undefined ? 0 : _ref2$gutter;
	  var _ref2$extraClassNames = _ref2.extraClassNames;
	  var extraClassNames = _ref2$extraClassNames === undefined ? '' : _ref2$extraClassNames;
	  var children = _ref2.children;

	  var style = {
	    paddingLeft: baseline * gutter / 2 + 'rem',
	    paddingRight: baseline * gutter / 2 + 'rem',
	    flex: '1'
	  };

	  if (span && outOf) {
	    style = _extends({}, style, {
	      flex: '0 0 auto',
	      width: 100 * span / outOf + '%'
	    });
	  }

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	exports.Grid = Grid;
		exports.GridItem = GridItem;

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItem = exports.List = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(612);

	var _List2 = _interopRequireDefault(_List);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var List = function List(_ref) {
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    marginBottom: '-' + baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'ul',
	    { style: style, className: _List2.default.list + ' ' + extraClassNames },
	    children
	  );
	};

	var ListItem = function ListItem(_ref2) {
	  var _ref2$n = _ref2.n;
	  var n = _ref2$n === undefined ? 1 : _ref2$n;
	  var _ref2$extraClassNames = _ref2.extraClassNames;
	  var extraClassNames = _ref2$extraClassNames === undefined ? '' : _ref2$extraClassNames;
	  var children = _ref2.children;

	  var style = {
	    marginBottom: baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'li',
	    { style: style, className: _List2.default.list__item + ' ' + extraClassNames },
	    children
	  );
	};

	exports.List = List;
		exports.ListItem = ListItem;

/***/ },

/***/ 612:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"List__list___2kBUd","list__item":"List__list__item___1D2VF"};

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListInlineItem = exports.ListInline = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _ListInline = __webpack_require__(614);

	var _ListInline2 = _interopRequireDefault(_ListInline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var ListInline = function ListInline(_ref) {
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'center' : _ref$alignItems;
	  var _ref$justfyContent = _ref.justfyContent;
	  var justfyContent = _ref$justfyContent === undefined ? 'flex-start' : _ref$justfyContent;

	  var style = {
	    marginBottom: '-' + baseline * n + 'rem',
	    marginLeft: '-' + baseline * n + 'rem',
	    alignItems: alignItems,
	    justfyContent: justfyContent
	  };

	  return _react2.default.createElement(
	    'ul',
	    { style: style, className: _ListInline2.default.listInline + ' ' + extraClassNames },
	    children
	  );
	};

	var ListInlineItem = function ListInlineItem(_ref2) {
	  var _ref2$n = _ref2.n;
	  var n = _ref2$n === undefined ? 1 : _ref2$n;
	  var _ref2$extraClassNames = _ref2.extraClassNames;
	  var extraClassNames = _ref2$extraClassNames === undefined ? '' : _ref2$extraClassNames;
	  var children = _ref2.children;

	  var style = {
	    marginBottom: baseline * n + 'rem',
	    marginLeft: baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'li',
	    { style: style, className: _ListInline2.default.listInline__item + ' ' + extraClassNames },
	    children
	  );
	};

	exports.ListInline = ListInline;
		exports.ListInlineItem = ListInlineItem;

/***/ },

/***/ 614:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"listInline":"ListInline__listInline___3Gjhu","listInline__item":"ListInline__listInline__item___2K1kQ"};

/***/ },

/***/ 615:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MediaFigure = exports.MediaBody = exports.Media = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Media = __webpack_require__(616);

	var _Media2 = _interopRequireDefault(_Media);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Media = function Media(_ref) {
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'flex-start' : _ref$alignItems;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    alignItems: alignItems
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: _Media2.default.media + ' ' + extraClassNames },
	    children
	  );
	};

	var MediaBody = function MediaBody(_ref2) {
	  var _ref2$extraClassNames = _ref2.extraClassNames;
	  var extraClassNames = _ref2$extraClassNames === undefined ? '' : _ref2$extraClassNames;
	  var children = _ref2.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Media2.default.media__body + ' ' + extraClassNames },
	    children
	  );
	};

	var MediaFigure = function MediaFigure(_ref3) {
	  var _ref3$n = _ref3.n;
	  var n = _ref3$n === undefined ? 1 : _ref3$n;
	  var _ref3$nl = _ref3.nl;
	  var nl = _ref3$nl === undefined ? 0 : _ref3$nl;
	  var _ref3$extraClassNames = _ref3.extraClassNames;
	  var extraClassNames = _ref3$extraClassNames === undefined ? '' : _ref3$extraClassNames;
	  var children = _ref3.children;

	  var style = {
	    marginRight: baseline * n + 'rem',
	    marginLeft: baseline * nl + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: _Media2.default.media__figure + ' ' + extraClassNames },
	    children
	  );
	};

	exports.Media = Media;
	exports.MediaBody = MediaBody;
		exports.MediaFigure = MediaFigure;

/***/ },

/***/ 616:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"media":"Media__media___3a00G","media__figure":"Media__media__figure___24ZwA","media__body":"Media__media__body___3Vd2-"};

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageContent = exports.Page = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Page = function Page(_ref) {
	  var children = _ref.children;

	  var style = {
	    display: 'flex',
	    minHeight: '100vh',
	    flexDirection: 'column'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    children
	  );
	};

	var PageContent = function PageContent(_ref2) {
	  var children = _ref2.children;

	  var style = {
	    flex: '1'
	  };

	  return _react2.default.createElement(
	    'main',
	    { style: style },
	    children
	  );
	};

	exports.Page = Page;
		exports.PageContent = PageContent;

/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Wrap = function Wrap(_ref) {
	  var _ref$width = _ref.width;
	  var width = _ref$width === undefined ? '95%' : _ref$width;
	  var _ref$maxWidth = _ref.maxWidth;
	  var maxWidth = _ref$maxWidth === undefined ? '80rem' : _ref$maxWidth;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    width: width,
	    maxWidth: maxWidth,
	    marginLeft: 'auto',
	    marginRight: 'auto'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	exports.default = Wrap;

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _InputDecorator = __webpack_require__(620);

	var _InputDecorator2 = _interopRequireDefault(_InputDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InputDecorator = function InputDecorator(_ref) {
	  var input = _ref.input;
	  var suffix = _ref.suffix;
	  var _ref$prefix = _ref.prefix;
	  var prefix = _ref$prefix === undefined ? null : _ref$prefix;

	  var prefixEl = null;
	  if (prefix) {
	    prefixEl = _react2.default.createElement(
	      'div',
	      { className: _InputDecorator2.default.InputDecorator__prefix },
	      prefix
	    );
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _InputDecorator2.default.InputDecorator },
	    prefixEl,
	    _react2.default.createElement(
	      'div',
	      { className: _InputDecorator2.default.InputDecorator__input },
	      input
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _InputDecorator2.default.InputDecorator__suffix },
	      suffix
	    )
	  );
	};

	exports.default = InputDecorator;

/***/ },

/***/ 620:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InputDecorator":"InputDecorator__InputDecorator___8oCVm","InputDecorator__prefix":"InputDecorator__InputDecorator__prefix___3mFvH","InputDecorator__input":"InputDecorator__InputDecorator__input___vnZwv","InputDecorator__suffix":"InputDecorator__InputDecorator__suffix___3EcKq"};

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _LabeledInput = __webpack_require__(622);

	var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LabeledInput = function LabeledInput(_ref) {
	  var label = _ref.label;
	  var input = _ref.input;
	  var _ref$inverse = _ref.inverse;
	  var inverse = _ref$inverse === undefined ? false : _ref$inverse;

	  var classes = [_LabeledInput2.default.LabeledInput];
	  if (inverse) {
	    classes.push(_LabeledInput2.default.LabeledInput_inverse);
	  }

	  return _react2.default.createElement(
	    'label',
	    { className: '' + classes.join(' ') },
	    _react2.default.createElement(
	      'div',
	      { className: _LabeledInput2.default.LabeledInput__label },
	      label
	    ),
	    input
	  );
	};

	exports.default = LabeledInput;

/***/ },

/***/ 622:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"LabeledInput":"LabeledInput__LabeledInput___3_l2R","LabeledInput__label":"LabeledInput__LabeledInput__label___2_e9s","LabeledInput_inverse":"LabeledInput__LabeledInput_inverse___58U4R"};

/***/ },

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Breadcrumbs = __webpack_require__(624);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Breadcrumbs = function Breadcrumbs(_ref) {
	  var items = _ref.items;

	  return _react2.default.createElement(
	    'div',
	    { className: _Breadcrumbs2.default.Breadcrumbs },
	    items.map(function (i) {
	      return _react2.default.createElement(
	        _reactRouter.Link,
	        { to: i.path, className: _Breadcrumbs2.default.Breadcrumbs__item },
	        i.label
	      );
	    })
	  );
	};

	exports.default = Breadcrumbs;

/***/ },

/***/ 624:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Breadcrumbs":"Breadcrumbs__Breadcrumbs___2WLj0","Breadcrumbs__item":"Breadcrumbs__Breadcrumbs__item___1DayI"};

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(626);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Button = function Button(_ref) {
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'accent1' : _ref$theme;
	  var _ref$hasPrefix = _ref.hasPrefix;
	  var hasPrefix = _ref$hasPrefix === undefined ? false : _ref$hasPrefix;
	  var _ref$hasSuffix = _ref.hasSuffix;
	  var hasSuffix = _ref$hasSuffix === undefined ? false : _ref$hasSuffix;

	  return _react2.default.createElement(
	    'button',
	    {
	      className: _Button2.default.Button + '\n        ' + (theme === 'accent1' ? _Button2.default.Button_accent1 : null) + '\n        ' + (theme === 'accent2' ? _Button2.default.Button_accent2 : null) + '\n        ' + (hasPrefix ? _Button2.default.Button_hasPrefix : null) + '\n        ' + (hasSuffix ? _Button2.default.Button_hasSuffix : null),
	      disabled: disabled,
	      onClick: onClick },
	    children
	  );
	};

	exports.default = Button;

/***/ },

/***/ 626:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Button":"Button__Button___QI7b2","Button_accent1":"Button__Button_accent1___1dfhw","Button_accent2":"Button__Button_accent2___Zn8z9","Button_hasPrefix":"Button__Button_hasPrefix___izKZq","Buttom_hasSuffix":"Button__Buttom_hasSuffix___HWXla"};

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _ModalWindow = __webpack_require__(628);

	var _ModalWindow2 = _interopRequireDefault(_ModalWindow);

	var _Layouts = __webpack_require__(607);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var ModalWindow = function ModalWindow(_ref) {
	  var children = _ref.children;
	  var _ref$multipliers = _ref.multipliers;
	  var multipliers = _ref$multipliers === undefined ? {
	    width: 40
	  } : _ref$multipliers;

	  var style = {
	    width: multipliers.width * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { className: _ModalWindow2.default.Modal },
	    _react2.default.createElement(
	      _Layouts.Flex,
	      { alignItems: 'center', justifyContent: 'center' },
	      _react2.default.createElement(
	        'section',
	        { style: style, className: _ModalWindow2.default.ModalWindow },
	        children
	      )
	    )
	  );
	};

	var ModalWindowHeader = function ModalWindowHeader(_ref2) {
	  var children = _ref2.children;
	  var _ref2$multipliers = _ref2.multipliers;
	  var multipliers = _ref2$multipliers === undefined ? {
	    padding: {
	      vertical: 2,
	      horizontal: 2
	    }
	  } : _ref2$multipliers;

	  var style = {
	    padding: multipliers.padding.vertical * baseline + 'rem ' + multipliers.padding.horizontal * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'header',
	    { style: style, className: _ModalWindow2.default.ModalWindow__header },
	    children
	  );
	};

	var ModalWindowBody = function ModalWindowBody(_ref3) {
	  var children = _ref3.children;
	  var _ref3$multipliers = _ref3.multipliers;
	  var multipliers = _ref3$multipliers === undefined ? {
	    padding: {
	      vertical: 3,
	      horizontal: 2
	    }
	  } : _ref3$multipliers;

	  var style = {
	    padding: multipliers.padding.vertical * baseline + 'rem ' + multipliers.padding.horizontal * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'main',
	    { style: style, className: _ModalWindow2.default.ModalWindow__body },
	    children
	  );
	};

	var ModalWindowFooter = function ModalWindowFooter(_ref4) {
	  var children = _ref4.children;
	  var _ref4$multipliers = _ref4.multipliers;
	  var multipliers = _ref4$multipliers === undefined ? {
	    padding: {
	      vertical: 1,
	      horizontal: 2
	    }
	  } : _ref4$multipliers;

	  var style = {
	    padding: multipliers.padding.vertical * baseline + 'rem ' + multipliers.padding.horizontal * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'footer',
	    { style: style, className: _ModalWindow2.default.ModalWindow__footer },
	    children
	  );
	};

	exports.ModalWindow = ModalWindow;
	exports.ModalWindowBody = ModalWindowBody;
	exports.ModalWindowHeader = ModalWindowHeader;
		exports.ModalWindowFooter = ModalWindowFooter;

/***/ },

/***/ 628:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Modal":"ModalWindow__Modal___2klcg","ModalWindow":"ModalWindow__ModalWindow___2tVyZ","ModalWindow__header":"ModalWindow__ModalWindow__header___1QrWH","ModalWindow__body":"ModalWindow__ModalWindow__body___3QuQh","ModalWindow__footer":"ModalWindow__ModalWindow__footer___2I0TF"};

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Link = __webpack_require__(630);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;

	var Link = function Link(_ref) {
	  var children = _ref.children;
	  var small = _ref.small;
	  var to = _ref.to;
	  var disabled = _ref.disabled;
	  var onClick = _ref.onClick;
	  var href = _ref.href;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'accent1' : _ref$theme;

	  var style = {
	    fontSize: '1rem'
	  };

	  if (small) {
	    style = {
	      fontSize: 1.167 * baseline + 'rem'
	    };
	  }

	  var className = [];
	  className.push(_Link2.default.Link);
	  switch (theme) {
	    case 'error':
	      className.push(_Link2.default.Link_error);
	      break;
	    case 'accent':
	    default:
	      className.push(_Link2.default.Link_accent);
	      break;
	  }

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        style: style,
	        className: '' + className.join(' '),
	        disabled: disabled,
	        to: to },
	      children
	    );
	  } else if (onClick) {
	    return _react2.default.createElement(
	      'button',
	      {
	        style: style,
	        className: '' + className.join(' '),
	        disabled: disabled,
	        onClick: onClick },
	      children
	    );
	  } else if (href) {
	    return _react2.default.createElement(
	      'a',
	      {
	        style: style,
	        href: href,
	        disabled: disabled,
	        className: '' + className.join(' ') },
	      children
	    );
	  }
	};

	exports.default = Link;

/***/ },

/***/ 630:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Link":"Link__Link___3isgY","Link_accent":"Link__Link_accent___A81HH","Link_error":"Link__Link_error___2hKKc"};

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(632);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Spinner = function Spinner() {
	  return _react2.default.createElement(
	    'div',
	    { className: _Spinner2.default.Spinner },
	    _react2.default.createElement(
	      'div',
	      { className: _Spinner2.default.Spinner__inner },
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle1 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle2 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle3 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle4 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle5 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle6 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle7 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle8 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle9 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle10 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle11 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle12 })
	    )
	  );
	};

	exports.default = Spinner;

/***/ },

/***/ 632:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Spinner":"Spinner__Spinner___1fiyk","Spinner__inner":"Spinner__Spinner__inner___58vcT","Spinner__circle":"Spinner__Spinner__circle___2ZugO","sk-circleFadeDelay":"Spinner__sk-circleFadeDelay___1Etn8","Spinner__circle1":"Spinner__Spinner__circle1___BOD7n","Spinner__circle2":"Spinner__Spinner__circle2___2aBtr","Spinner__circle3":"Spinner__Spinner__circle3___1BaZf","Spinner__circle4":"Spinner__Spinner__circle4___3V5r7","Spinner__circle5":"Spinner__Spinner__circle5___3DJ5X","Spinner__circle6":"Spinner__Spinner__circle6___ZpU5m","Spinner__circle7":"Spinner__Spinner__circle7___XpnK5","Spinner__circle8":"Spinner__Spinner__circle8___1_RRX","Spinner__circle9":"Spinner__Spinner__circle9___fO0OG","Spinner__circle10":"Spinner__Spinner__circle10___ni35A","Spinner__circle11":"Spinner__Spinner__circle11___1hav9","Spinner__circle12":"Spinner__Spinner__circle12___2ipzT"};

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _anchorme = __webpack_require__(634);

	var _striptags = __webpack_require__(635);

	var _striptags2 = _interopRequireDefault(_striptags);

	var _reactTextareaAutosize = __webpack_require__(636);

	var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

	var _InputLabel = __webpack_require__(638);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _TextArea = __webpack_require__(640);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var plainToHtml = function plainToHtml(text) {
	  return '<p>' + _anchorme.anchorme.js(text.replace(/\n/g, '<br />')) + '</p>';
	};
	var htmlToPlain = function htmlToPlain(html) {
	  return (0, _striptags2.default)(html.replace(/<br \/>/g, '\n'));
	};

	var TextArea = function (_React$Component) {
	  _inherits(TextArea, _React$Component);

	  function TextArea(props) {
	    _classCallCheck(this, TextArea);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, props));

	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }

	  _createClass(TextArea, [{
	    key: 'onChange',
	    value: function onChange() {
	      var value = plainToHtml(this._element.value);
	      var changeCallback = this.props.changeCallback;


	      changeCallback(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var label = _props.label;
	      var error = _props.error;
	      var value = _props.value;
	      var placeholder = _props.placeholder;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;


	      return _react2.default.createElement(
	        'label',
	        { className: _TextArea2.default.TextArea },
	        _react2.default.createElement(_InputLabel2.default, { label: label, error: error }),
	        _react2.default.createElement(_reactTextareaAutosize2.default, { ref: function ref(el) {
	            _this2._element = el;
	          },
	          value: htmlToPlain(value),
	          className: _TextArea2.default.TextArea__input + ' ' + (error ? _TextArea2.default.TextArea__input_error : null),
	          disabled: disabled,
	          minRows: 5,
	          type: 'text',
	          onChange: this.onChange,
	          placeholder: placeholder })
	      );
	    }
	  }]);

	  return TextArea;
	}(_react2.default.Component);

		exports.default = TextArea;

/***/ },

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(639);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _Layouts = __webpack_require__(607);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InputLabel = function InputLabel(_ref) {
	  var label = _ref.label;
	  var error = _ref.error;

	  return _react2.default.createElement(
	    'div',
	    { className: _InputLabel2.default.InputLabel + ' ' + (error ? _InputLabel2.default.InputLabel_error : '') },
	    _react2.default.createElement(
	      _Layouts.ListInline,
	      null,
	      label ? _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _InputLabel2.default.InputLabel__label },
	          label
	        )
	      ) : null,
	      error ? _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _InputLabel2.default.InputLabel__error },
	          error
	        )
	      ) : null
	    )
	  );
	};

	exports.default = InputLabel;

/***/ },

/***/ 639:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InputLabel":"InputLabel__InputLabel___1CemI","InputLabel__label":"InputLabel__InputLabel__label___2Yy_P","InputLabel__error":"InputLabel__InputLabel__error___2MFNd","InputLabel_error":"InputLabel__InputLabel_error___3Ep5q"};

/***/ },

/***/ 640:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextArea":"TextArea__TextArea___19ip7","TextArea__input":"TextArea__TextArea__input___x5B4I","TextArea__input_error":"TextArea__TextArea__input_error___369gU"};

/***/ },

/***/ 641:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _TextInput = __webpack_require__(642);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextInput = function (_React$Component) {
	  _inherits(TextInput, _React$Component);

	  function TextInput(props) {
	    _classCallCheck(this, TextInput);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextInput).call(this, props));

	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }

	  _createClass(TextInput, [{
	    key: 'onChange',
	    value: function onChange() {
	      var value = this._element.value;
	      var changeCallback = this.props.changeCallback;


	      changeCallback(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var error = _props.error;
	      var value = _props.value;
	      var placeholder = _props.placeholder;
	      var _props$hasPrefix = _props.hasPrefix;
	      var hasPrefix = _props$hasPrefix === undefined ? false : _props$hasPrefix;
	      var _props$hasSuffix = _props.hasSuffix;
	      var hasSuffix = _props$hasSuffix === undefined ? false : _props$hasSuffix;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;
	      var _props$inverse = _props.inverse;
	      var inverse = _props$inverse === undefined ? false : _props$inverse;
	      var _props$type = _props.type;
	      var type = _props$type === undefined ? 'text' : _props$type;


	      return _react2.default.createElement('input', { ref: function ref(el) {
	          _this2._element = el;
	        },
	        value: value,
	        className: _TextInput2.default.TextInput + '\n          ' + (error ? _TextInput2.default.TextInput_error : null) + '\n          ' + (inverse ? _TextInput2.default.TextInput_inverse : null) + '\n          ' + (hasPrefix ? _TextInput2.default.TextInput_withPrefix : null) + '\n          ' + (hasSuffix ? _TextInput2.default.TextInput_withSuffix : null),
	        disabled: disabled,
	        type: type,
	        onChange: this.onChange,
	        placeholder: placeholder });
	    }
	  }]);

	  return TextInput;
	}(_react2.default.Component);

		exports.default = TextInput;

/***/ },

/***/ 642:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextInput":"TextInput__TextInput___1ACGY","TextInput_error":"TextInput__TextInput_error___2fnRn","TextInput_inverse":"TextInput__TextInput_inverse___3A-x8","TextInput_withPrefix":"TextInput__TextInput_withPrefix___2-Gw3","TextInput_withSuffix":"TextInput__TextInput_withSuffix___1ZTNQ"};

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Layouts = __webpack_require__(607);

	var _UI = __webpack_require__(604);

	var _FlashMessage = __webpack_require__(644);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _authActions = __webpack_require__(550);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_React$Component) {
	  _inherits(Login, _React$Component);

	  function Login(props) {
	    _classCallCheck(this, Login);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

	    _this.submitForm = _this.submitForm.bind(_this);
	    _this.changeEmail = _this.changeEmail.bind(_this);
	    _this.changePassword = _this.changePassword.bind(_this);

	    _this.state = {
	      emailError: '',
	      passwordError: '',
	      email: '',
	      password: ''
	    };
	    return _this;
	  }

	  _createClass(Login, [{
	    key: 'submitForm',
	    value: function submitForm(e) {
	      e.preventDefault();
	      var emailError = '';
	      var passwordError = '';

	      var dispatch = this.props.dispatch;


	      if (this.state.email === '') {
	        emailError = 'email cannot be empty';
	      }

	      if (this.state.password === '') {
	        passwordError = 'password cannot be blank';
	      }

	      if (!emailError && !passwordError) {
	        dispatch((0, _authActions.loginWithCredentials)(this.state.email, this.state.password));
	      } else {
	        this.setState({
	          emailError: emailError,
	          passwordError: passwordError
	        });
	      }
	    }
	  }, {
	    key: 'changeEmail',
	    value: function changeEmail(value) {
	      this.setState({
	        email: value,
	        emailError: ''
	      });
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(value) {
	      this.setState({
	        password: value,
	        passwordError: ''
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var isFetching = this.props.isFetching;


	      return _react2.default.createElement(
	        _Layouts.Page,
	        null,
	        _react2.default.createElement(
	          _Layouts.PageContent,
	          null,
	          _react2.default.createElement(
	            _UI.ModalWindow,
	            null,
	            _react2.default.createElement(
	              'form',
	              { onSubmit: this.submitForm },
	              _react2.default.createElement(
	                _UI.ModalWindowHeader,
	                null,
	                _react2.default.createElement(
	                  _Layouts.Flex,
	                  { justifyContent: 'center' },
	                  'Login'
	                )
	              ),
	              _react2.default.createElement(
	                _UI.ModalWindowBody,
	                null,
	                _react2.default.createElement(
	                  _Layouts.List,
	                  { n: 1.5 },
	                  _react2.default.createElement(
	                    _Layouts.ListItem,
	                    { n: 1.5 },
	                    _react2.default.createElement(_UI.TextInput, {
	                      value: this.state.email,
	                      label: 'Email:',
	                      placeholder: 'e.g. casey@gmail.com',
	                      error: this.state.emailError,
	                      changeCallback: this.changeEmail })
	                  ),
	                  _react2.default.createElement(
	                    _Layouts.ListItem,
	                    { n: 1.5 },
	                    _react2.default.createElement(_UI.TextInput, {
	                      value: this.state.password,
	                      label: 'Password:',
	                      placeholder: 'e.g. BigSecret',
	                      error: this.state.passwordError,
	                      changeCallback: this.changePassword,
	                      type: 'password' })
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                _UI.ModalWindowFooter,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  {
	                    disabled: isFetching,
	                    label: 'Login' },
	                  'Login'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_FlashMessage2.default, null)
	      );
	    }
	  }]);

	  return Login;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.auth.isFetching
	  };
		})(Login);

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(604);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FlashMessage = function FlashMessage(_ref) {
	  var message = _ref.message;
	  var type = _ref.type;

	  return _react2.default.createElement(_UI.Alert, { message: message, theme: type });
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    message: state.flash.message,
	    type: state.flash.type
	  };
		})(FlashMessage);

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _HeaderContainer = __webpack_require__(783);

	var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);

	var _FlashMessage = __webpack_require__(644);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _MainNavContainer = __webpack_require__(657);

	var _MainNavContainer2 = _interopRequireDefault(_MainNavContainer);

	var _Layouts = __webpack_require__(607);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(_ref) {
	  var children = _ref.children;
	  var location = _ref.location;
	  var params = _ref.params;
	  var width = _ref.width;
	  var widthThreshold = _ref.widthThreshold;

	  return _react2.default.createElement(
	    _Layouts.Page,
	    null,
	    width >= widthThreshold ? _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_HeaderContainer2.default, {
	        location: location }),
	      _react2.default.createElement(_MainNavContainer2.default, {
	        params: params })
	    ) : _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_MainNavContainer2.default, {
	        params: params }),
	      _react2.default.createElement(_HeaderContainer2.default, {
	        location: location })
	    ),
	    _react2.default.createElement(
	      _Layouts.PageContent,
	      null,
	      children
	    ),
	    _react2.default.createElement(_FlashMessage2.default, null)
	  );
	};
	// import Footer from '../Footer'


		exports.default = App;

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _SearchBar = __webpack_require__(647);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _HeaderDesktop = __webpack_require__(649);

	var _HeaderDesktop2 = _interopRequireDefault(_HeaderDesktop);

	var _Layouts = __webpack_require__(607);

	var _Locale = __webpack_require__(650);

	var _Locale2 = _interopRequireDefault(_Locale);

	var _Wrapper = __webpack_require__(652);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _logo = __webpack_require__(653);

	var _logo2 = _interopRequireDefault(_logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HeaderDesktop = function HeaderDesktop(_ref) {
	  var location = _ref.location;

	  return _react2.default.createElement(
	    'header',
	    { className: _HeaderDesktop2.default.Header },
	    _react2.default.createElement(
	      _Wrapper2.default,
	      null,
	      _react2.default.createElement(
	        _Layouts.Flex,
	        {
	          alignItems: 'flex-end',
	          'justify-content': 'space-between' },
	        _react2.default.createElement(
	          _Layouts.Media,
	          { alignItems: 'flex-end' },
	          _react2.default.createElement(
	            _Layouts.MediaFigure,
	            { n: '1.5' },
	            _react2.default.createElement('img', {
	              src: _logo2.default,
	              className: _HeaderDesktop2.default.Header__logo })
	          ),
	          _react2.default.createElement(
	            _Layouts.MediaBody,
	            null,
	            _react2.default.createElement(
	              _Layouts.Flex,
	              null,
	              _react2.default.createElement(
	                'h1',
	                { className: _HeaderDesktop2.default.Header__title },
	                'Vaccine Answers'
	              ),
	              _react2.default.createElement(_Locale2.default, null)
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _HeaderDesktop2.default.Header__subtitle },
	              'A reliable source of information about vaccines in Canada'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _HeaderDesktop2.default.Header__search },
	          _react2.default.createElement(_SearchBar2.default, { location: location })
	        )
	      )
	    )
	  );
	};

	exports.default = HeaderDesktop;

/***/ },

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactRouter = __webpack_require__(492);

	var _searchActions = __webpack_require__(560);

	var _UI = __webpack_require__(604);

	var _Layouts = __webpack_require__(607);

	var _SearchBar = __webpack_require__(648);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBar = function (_React$Component) {
	  _inherits(SearchBar, _React$Component);

	  function SearchBar(props) {
	    _classCallCheck(this, SearchBar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));

	    _this.state = {
	      query: _this.props.query
	    };

	    _this.search = _this.search.bind(_this);
	    return _this;
	  }

	  _createClass(SearchBar, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var setSearchQuery = _props.setSearchQuery;
	      var query = _props.location.query;


	      if (query && query.q) {
	        this.setState({
	          query: query.q
	        });
	        setSearchQuery(query.q);
	      }
	    }
	  }, {
	    key: 'search',
	    value: function search() {
	      var setSearchQuery = this.props.setSearchQuery;


	      setSearchQuery(this.state.query);
	      _reactRouter.browserHistory.push({
	        pathname: '/search',
	        query: { q: this.state.query }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props$label = this.props.label;
	      var label = _props$label === undefined ? true : _props$label;


	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.search,
	          className: _SearchBar2.default.SearchBar },
	        _react2.default.createElement(_Layouts.LabeledInput, {
	          inverse: true,
	          input: _react2.default.createElement(_Layouts.InputDecorator, {
	            input: _react2.default.createElement(_UI.TextInput, { value: this.state.query,
	              disabled: this.props.isFetching,
	              hasSuffix: true,
	              inverse: true,
	              changeCallback: function changeCallback(v) {
	                return _this2.setState({ query: v });
	              },
	              placeholder: 'Search the website' }),
	            suffix: _react2.default.createElement(
	              _UI.Button,
	              { disabled: this.props.isFetching,
	                hasPrefix: true },
	              'Search'
	            ) }) })
	      );
	    }
	  }]);

	  return SearchBar;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    query: state.search.query,
	    isFetching: state.search.isFetching
	  };
	}, function (dispatch) {
	  return {
	    setSearchQuery: function setSearchQuery(q) {
	      dispatch((0, _searchActions.setSearchQuery)(q));
	    }
	  };
		})(SearchBar);

/***/ },

/***/ 648:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SearchBar":"SearchBar__SearchBar___dtdTh"};

/***/ },

/***/ 649:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Header":"HeaderDesktop__Header___1qg3B","Header__logo":"HeaderDesktop__Header__logo___3eyz3","Header__title":"HeaderDesktop__Header__title___FMVt-","Header__subtitle":"HeaderDesktop__Header__subtitle___5qRds","Header__search":"HeaderDesktop__Header__search___3b05g"};

/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Locale = __webpack_require__(651);

	var _Locale2 = _interopRequireDefault(_Locale);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Locale = function Locale(_ref) {
	  var location = _ref.location;

	  return _react2.default.createElement(
	    'div',
	    { className: _Locale2.default.Locale },
	    'Manitoba'
	  );
	};

	exports.default = Locale;

/***/ },

/***/ 651:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Locale":"Locale__Locale___1CTBp"};

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Wrapper = function Wrapper(_ref) {
	  var children = _ref.children;

	  var style = {
	    width: '95%',
	    maxWidth: '90rem',
	    marginRight: 'auto',
	    marginLeft: 'auto'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    children
	  );
	};

	exports.default = Wrapper;

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.96a61176db54e227423626799744201e.svg";

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _HeaderMobile = __webpack_require__(655);

	var _HeaderMobile2 = _interopRequireDefault(_HeaderMobile);

	var _Layouts = __webpack_require__(607);

	var _Locale = __webpack_require__(650);

	var _Locale2 = _interopRequireDefault(_Locale);

	var _Wrapper = __webpack_require__(652);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _SearchBar = __webpack_require__(647);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _logo = __webpack_require__(656);

	var _logo2 = _interopRequireDefault(_logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HeaderMobile = function HeaderMobile(_ref) {
	  var location = _ref.location;
	  var toggleMainMenu = _ref.toggleMainMenu;

	  return _react2.default.createElement(
	    'header',
	    { className: _HeaderMobile2.default.Header },
	    _react2.default.createElement(
	      'div',
	      { className: _HeaderMobile2.default.Header__navigationBar },
	      _react2.default.createElement(
	        _Wrapper2.default,
	        null,
	        _react2.default.createElement(
	          _Layouts.Flex,
	          {
	            justifyContent: 'space-between',
	            alignItems: 'center' },
	          _react2.default.createElement('button', {
	            className: _HeaderMobile2.default.Header__menuBtn,
	            onClick: toggleMainMenu }),
	          _react2.default.createElement(
	            'div',
	            { className: _HeaderMobile2.default.Header__search },
	            _react2.default.createElement(_SearchBar2.default, {
	              location: location,
	              label: false })
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _HeaderMobile2.default.Header__body },
	      _react2.default.createElement(
	        _Wrapper2.default,
	        null,
	        _react2.default.createElement(
	          _Layouts.Media,
	          { alignItems: 'flex-end' },
	          _react2.default.createElement(
	            _Layouts.MediaFigure,
	            { n: '1.5' },
	            _react2.default.createElement('img', {
	              src: _logo2.default,
	              className: _HeaderMobile2.default.Header__logo })
	          ),
	          _react2.default.createElement(
	            _Layouts.MediaBody,
	            null,
	            _react2.default.createElement(
	              _Layouts.Flex,
	              null,
	              _react2.default.createElement(
	                'h1',
	                { className: _HeaderMobile2.default.Header__title },
	                'Vaccine Answers'
	              ),
	              _react2.default.createElement(_Locale2.default, null)
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _HeaderMobile2.default.Header__subtitle },
	              'A reliable source of information about vaccines in Canada'
	            )
	          )
	        )
	      )
	    )
	  );
	};

	exports.default = HeaderMobile;

/***/ },

/***/ 655:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Header":"HeaderMobile__Header___28GiN","Header__navigationBar":"HeaderMobile__Header__navigationBar___1kVm8","Header__body":"HeaderMobile__Header__body___uGlPk","Header__logo":"HeaderMobile__Header__logo___3jQMM","Header__title":"HeaderMobile__Header__title___2Xxml","Header__subtitle":"HeaderMobile__Header__subtitle___3dUZz","Header__search":"HeaderMobile__Header__search___axOT1","Header__menuBtn":"HeaderMobile__Header__menuBtn___3D6l4"};

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.96a61176db54e227423626799744201e.svg";

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _uiActions = __webpack_require__(600);

	var _MainNavDesktop = __webpack_require__(658);

	var _MainNavDesktop2 = _interopRequireDefault(_MainNavDesktop);

	var _MainNavMobile = __webpack_require__(781);

	var _MainNavMobile2 = _interopRequireDefault(_MainNavMobile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainNavContainer = function (_React$Component) {
	  _inherits(MainNavContainer, _React$Component);

	  function MainNavContainer() {
	    _classCallCheck(this, MainNavContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MainNavContainer).apply(this, arguments));
	  }

	  _createClass(MainNavContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var widthThreshold = _props.widthThreshold;
	      var toggleMainMenu = _props.toggleMainMenu;
	      var mainMenuIsOpen = _props.mainMenuIsOpen;
	      var sections = _props.sections;
	      var rootSections = _props.rootSections;
	      var currentSection = _props.currentSection;
	      var currentSubsections = _props.currentSubsections;


	      if (width >= widthThreshold) {
	        return _react2.default.createElement(_MainNavDesktop2.default, {
	          rootSections: rootSections,
	          currentSection: currentSection,
	          currentSubsections: currentSubsections });
	      } else {
	        return _react2.default.createElement(_MainNavMobile2.default, {
	          rootSections: rootSections,
	          toggleMainMenu: toggleMainMenu,
	          mainMenuIsOpen: mainMenuIsOpen,
	          sections: sections });
	      }
	    }
	  }]);

	  return MainNavContainer;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var metaSection = state.sections.items.find(function (s) {
	    return s.sectionType === 'meta' && s.url === 'main-nav';
	  });
	  var rootSections = state.sections.items.filter(function (s) {
	    return metaSection.children.indexOf(s._id) !== -1;
	  });
	  var currentSection = rootSections.find(function (s) {
	    return s.url === ownProps.params.sectionUrl;
	  });
	  var currentSubsections = currentSection.sectionType === 'parent' ? state.sections.items.filter(function (s) {
	    return currentSection.children.indexOf(s._id) !== -1;
	  }) : null;

	  return {
	    sections: state.sections.items,
	    rootSections: rootSections,
	    currentSection: currentSection,
	    currentSubsections: currentSubsections,
	    width: state.ui.windowWidth,
	    widthThreshold: state.ui.widthThreshold,
	    mainMenuIsOpen: state.ui.mainMenuIsOpen
	  };
	}, function (dispatch) {
	  return {
	    toggleMainMenu: function toggleMainMenu() {
	      dispatch((0, _uiActions.toggleMainMenu)());
	    }
	  };
		})(MainNavContainer);

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Layouts = __webpack_require__(607);

	var _Wrapper = __webpack_require__(652);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _MainNavDesktop = __webpack_require__(659);

	var _MainNavDesktop2 = _interopRequireDefault(_MainNavDesktop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MainNavDesktop = function MainNavDesktop(_ref) {
	  var currentSection = _ref.currentSection;
	  var rootSections = _ref.rootSections;
	  var currentSubsections = _ref.currentSubsections;

	  var subNav = '';
	  if (currentSubsections) {
	    subNav = _react2.default.createElement(
	      'div',
	      { className: _MainNavDesktop2.default.Subnavigation },
	      _react2.default.createElement(
	        _Wrapper2.default,
	        null,
	        _react2.default.createElement(
	          _Layouts.Flex,
	          null,
	          currentSubsections.map(function (s, index) {
	            return _react2.default.createElement(
	              _reactRouter.Link,
	              {
	                key: index,
	                className: _MainNavDesktop2.default.Subnavigation__item,
	                activeClassName: _MainNavDesktop2.default.Subnavigation__item_active,
	                to: '/' + currentSection.url + '/' + s.url },
	              s.title
	            );
	          })
	        )
	      )
	    );
	  }

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: _MainNavDesktop2.default.Navigation },
	      _react2.default.createElement(
	        _Wrapper2.default,
	        null,
	        _react2.default.createElement(
	          _Layouts.Flex,
	          null,
	          rootSections.map(function (s, i) {
	            var activeClassNames = [_MainNavDesktop2.default.Navigation__item_active];
	            if (s.sectionType === 'parent') {
	              activeClassNames.push(_MainNavDesktop2.default.Navigation__item_parent_active);
	            }

	            return _react2.default.createElement(
	              _reactRouter.Link,
	              {
	                key: i,
	                to: '/' + s.url,
	                className: _MainNavDesktop2.default.Navigation__item,
	                activeClassName: activeClassNames.join(' ') },
	              s.title
	            );
	          })
	        )
	      )
	    ),
	    subNav
	  );
	};

	exports.default = MainNavDesktop;

/***/ },

/***/ 659:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Navigation":"MainNavDesktop__Navigation___32PyB","Navigation__item":"MainNavDesktop__Navigation__item___12E9A","Navigation__item_active":"MainNavDesktop__Navigation__item_active___1pMGE","Navigation__item_parent_active":"MainNavDesktop__Navigation__item_parent_active___1UzHS","Subnavigation":"MainNavDesktop__Subnavigation___iUP2v","Subnavigation__item":"MainNavDesktop__Subnavigation__item___2jHUZ","Subnavigation__item_active":"MainNavDesktop__Subnavigation__item_active___31fQM"};

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SectionContainer = function SectionContainer() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'I am SectionContainer component!'
	  );
	};

	exports.default = SectionContainer;

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SubsectionContainer = function SubsectionContainer() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'I am SubsectionContainer component!'
	  );
	};

	exports.default = SubsectionContainer;

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArticleContainer = function ArticleContainer() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'I am ArticleContainer component!'
	  );
	};

	exports.default = ArticleContainer;

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Layouts = __webpack_require__(607);

	var _MainNavMobile = __webpack_require__(782);

	var _MainNavMobile2 = _interopRequireDefault(_MainNavMobile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MainNavMobile = function MainNavMobile(_ref) {
	  var rootSections = _ref.rootSections;
	  var sections = _ref.sections;
	  var toggleMainMenu = _ref.toggleMainMenu;
	  var mainMenuIsOpen = _ref.mainMenuIsOpen;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: _MainNavMobile2.default.Panel + '\n        ' + (mainMenuIsOpen ? _MainNavMobile2.default.Panel_open : '') },
	      _react2.default.createElement(
	        'div',
	        { className: _MainNavMobile2.default.Panel__header },
	        _react2.default.createElement(
	          _Layouts.Flex,
	          {
	            justifyContent: 'space-between',
	            alignItems: 'center' },
	          _react2.default.createElement(
	            'div',
	            { className: _MainNavMobile2.default.Panel__title },
	            'Navigation'
	          ),
	          _react2.default.createElement('button', {
	            className: _MainNavMobile2.default.Panel__closeBtn,
	            onClick: toggleMainMenu })
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _MainNavMobile2.default.Panel__body },
	        _react2.default.createElement(
	          'div',
	          { className: _MainNavMobile2.default.Navigation },
	          _react2.default.createElement(
	            _Layouts.List,
	            { n: 1.5 },
	            rootSections.map(function (s) {
	              var subnavigation = '';
	              if (s.sectionType === 'parent') {
	                var subsections = sections.filter(function (sub) {
	                  return s.children.indexOf(sub._id) !== -1;
	                });

	                subnavigation = _react2.default.createElement(
	                  'div',
	                  { className: _MainNavMobile2.default.Subnavigation },
	                  subsections.map(function (sub) {
	                    return _react2.default.createElement(
	                      _Layouts.ListItem,
	                      {
	                        key: sub._id,
	                        n: 1.5 },
	                      _react2.default.createElement(
	                        _reactRouter.Link,
	                        {
	                          onClick: toggleMainMenu,
	                          className: _MainNavMobile2.default.Subnavigation__item,
	                          activeClassName: _MainNavMobile2.default.Subnavigation__item_active,
	                          to: '/' + s.url + '/' + sub.url },
	                        sub.title
	                      )
	                    );
	                  })
	                );
	              }

	              return _react2.default.createElement(
	                'div',
	                { key: s._id },
	                _react2.default.createElement(
	                  _Layouts.ListItem,
	                  { n: 1.5 },
	                  _react2.default.createElement(
	                    _reactRouter.Link,
	                    {
	                      onClick: toggleMainMenu,
	                      className: _MainNavMobile2.default.Navigation__item,
	                      activeClassName: _MainNavMobile2.default.Navigation__item_active,
	                      to: '/' + s.url },
	                    s.title
	                  )
	                ),
	                subnavigation
	              );
	            })
	          )
	        )
	      )
	    ),
	    mainMenuIsOpen ? _react2.default.createElement('div', {
	      onClick: toggleMainMenu,
	      className: _MainNavMobile2.default.Overlay }) : ''
	  );
	};

	exports.default = MainNavMobile;

/***/ },

/***/ 782:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Panel":"MainNavMobile__Panel___1TIUm","Panel__header":"MainNavMobile__Panel__header___3Iats","Panel__title":"MainNavMobile__Panel__title___3DWMl","Panel__body":"MainNavMobile__Panel__body___1QUnq","Panel__closeBtn":"MainNavMobile__Panel__closeBtn___34_LF","Panel_open":"MainNavMobile__Panel_open___2s1IN","Navigation":"MainNavMobile__Navigation___-2GV8","Navigation__item":"MainNavMobile__Navigation__item___3t-5y","Navigation__item_active":"MainNavMobile__Navigation__item_active___DAFu_","Subnavigation":"MainNavMobile__Subnavigation___1uUt-","Subnavigation__item":"MainNavMobile__Subnavigation__item___1pwGy","Subnavigation__item_active":"MainNavMobile__Subnavigation__item_active___2fF_p","Overlay":"MainNavMobile__Overlay___NXnqW"};

/***/ },

/***/ 783:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _uiActions = __webpack_require__(600);

	var _HeaderDesktop = __webpack_require__(646);

	var _HeaderDesktop2 = _interopRequireDefault(_HeaderDesktop);

	var _HeaderMobile = __webpack_require__(654);

	var _HeaderMobile2 = _interopRequireDefault(_HeaderMobile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderContainer = function (_React$Component) {
	  _inherits(HeaderContainer, _React$Component);

	  function HeaderContainer() {
	    _classCallCheck(this, HeaderContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderContainer).apply(this, arguments));
	  }

	  _createClass(HeaderContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var widthThreshold = _props.widthThreshold;
	      var windowWidth = _props.windowWidth;
	      var toggleMainMenu = _props.toggleMainMenu;
	      var location = _props.location;


	      if (windowWidth > widthThreshold) {
	        return _react2.default.createElement(_HeaderDesktop2.default, {
	          location: location });
	      } else {
	        return _react2.default.createElement(_HeaderMobile2.default, {
	          location: location,
	          toggleMainMenu: toggleMainMenu });
	      }
	    }
	  }]);

	  return HeaderContainer;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    widthThreshold: state.ui.widthThreshold,
	    windowWidth: state.ui.windowWidth
	  };
	}, function (dispatch) {
	  return {
	    toggleMainMenu: function toggleMainMenu() {
	      dispatch((0, _uiActions.toggleMainMenu)());
	    }
	  };
		})(HeaderContainer);

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zZWFyY2hBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYWxnb2xpYVNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzQWN0aW9ucy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zZWN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zZWN0aW9uc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS91aVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS91aUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FwcENvbnRhaW5lci9BcHBDb250YWluZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1VJLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvQmxvY2svQmxvY2suanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvR3JpZC9HcmlkLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwL1dyYXAuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYWJlbGVkSW5wdXQvTGFiZWxlZElucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xhYmVsZWRJbnB1dC9MYWJlbGVkSW5wdXQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvQnJlYWRjcnVtYnMvQnJlYWRjcnVtYnMuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTGluay9MaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9MaW5rL0xpbmsuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXRMYWJlbC9JbnB1dExhYmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRmxhc2hNZXNzYWdlL0ZsYXNoTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FwcC9BcHAuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9IZWFkZXJEZXNrdG9wL0hlYWRlckRlc2t0b3AuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJEZXNrdG9wL0hlYWRlckRlc2t0b3AuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Mb2NhbGUvTG9jYWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2NhbGUvTG9jYWxlLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvV3JhcHBlci9XcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJEZXNrdG9wL2xvZ28uc3ZnIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9IZWFkZXJNb2JpbGUvSGVhZGVyTW9iaWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJNb2JpbGUvSGVhZGVyTW9iaWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJNb2JpbGUvbG9nby5zdmciLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL01haW5OYXZDb250YWluZXIvTWFpbk5hdkNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL01haW5OYXZEZXNrdG9wL01haW5OYXZEZXNrdG9wLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluTmF2RGVza3RvcC9NYWluTmF2RGVza3RvcC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb25Db250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1N1YnNlY3Rpb25Db250YWluZXIvU3Vic2VjdGlvbkNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FydGljbGVDb250YWluZXIvQXJ0aWNsZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL01haW5OYXZNb2JpbGUvTWFpbk5hdk1vYmlsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdk1vYmlsZS9NYWluTmF2TW9iaWxlLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSGVhZGVyQ29udGFpbmVyL0hlYWRlckNvbnRhaW5lci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcblxuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4UmVkaXJlY3QsIGhhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IEFwcENvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyJ1xuaW1wb3J0IFNlY3Rpb25Db250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25Db250YWluZXInXG5pbXBvcnQgU3Vic2VjdGlvbkNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvU3Vic2VjdGlvbkNvbnRhaW5lcidcbmltcG9ydCBBcnRpY2xlQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlQ29udGFpbmVyJ1xuLy8gaW1wb3J0IFNlY3Rpb25BcnRpY2xlIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9uQXJ0aWNsZSdcbi8vIGltcG9ydCBTZWN0aW9uQ2F0ZWdvcnlJdGVtIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9uQ2F0ZWdvcnlJdGVtJ1xuLy8gaW1wb3J0IEJsb2cgZnJvbSAnLi9jb21wb25lbnRzL0Jsb2cnXG4vLyBpbXBvcnQgQmxvZ3Bvc3QgZnJvbSAnLi9jb21wb25lbnRzL0Jsb2dwb3N0J1xuLy8gaW1wb3J0IFF1ZXN0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvUXVlc3Rpb25zJ1xuLy8gaW1wb3J0IEZhcSBmcm9tICcuL2NvbXBvbmVudHMvRmFxJ1xuLy8gaW1wb3J0IENoYW5nZVBhc3N3b3JkIGZyb20gJy4vY29tcG9uZW50cy9DaGFuZ2VQYXNzd29yZCdcbi8vIGltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzJ1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKClcblxuLy8gUmVhY3RET00ucmVuZGVyKChcbi8vICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4vLyAgICAgPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XG4vLyAgICAgICA8Um91dGUgcGF0aD17Jy8nfSBjb21wb25lbnQ9e0FwcH0+XG4vLyAgICAgICAgIDxJbmRleFJlZGlyZWN0IHRvPVwicXVlc3Rpb25zXCIgLz5cbi8vXG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwic2VhcmNoXCIgY29tcG9uZW50PXtTZWFyY2hSZXN1bHRzfSAvPlxuLy9cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJjaGFuZ2UtcGFzc3dvcmRcIiBjb21wb25lbnQ9e0NoYW5nZVBhc3N3b3JkfSAvPlxuLy9cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCJxdWVzdGlvbnNcIiBjb21wb25lbnQ9e1F1ZXN0aW9uc30+XG4vLyAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6ZmFxSWRcIiBjb21wb25lbnQ9e0ZhcX0gLz5cbi8vICAgICAgICAgPC9Sb3V0ZT5cbi8vXG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYmxvZ3Bvc3RzXCIgY29tcG9uZW50PXtCbG9nfT5cbi8vICAgICAgICAgICA8Um91dGUgcGF0aD1cIjpibG9ncG9zdElkXCIgY29tcG9uZW50PXtCbG9ncG9zdH0vPlxuLy8gICAgICAgICA8L1JvdXRlPlxuLy9cbi8vICAgICAgICAgPFJvdXRlIHBhdGg9XCI6c2VjdGlvbklkXCIgY29tcG9uZW50PXtTZWN0aW9ufT5cbi8vICAgICAgICAgICA8Um91dGUgcGF0aD1cIjphcnRpY2xlSWRcIiBjb21wb25lbnQ9e1NlY3Rpb25BcnRpY2xlfT5cbi8vICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOml0ZW1JZFwiIGNvbXBvbmVudD17U2VjdGlvbkNhdGVnb3J5SXRlbX0gLz5cbi8vICAgICAgICAgICA8L1JvdXRlPlxuLy8gICAgICAgICA8L1JvdXRlPlxuLy8gICAgICAgPC9Sb3V0ZT5cbi8vICAgICA8L1JvdXRlcj5cbi8vICAgPC9Qcm92aWRlcj5cbi8vICksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuUmVhY3RET00ucmVuZGVyKChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcENvbnRhaW5lcn0+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiOnNlY3Rpb25VcmxcIiBjb21wb25lbnQ9e1NlY3Rpb25Db250YWluZXJ9PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXJ0aWNsZXMvOmFydGljbGVVcmxcIiBjb21wb25lbnQ9e0FydGljbGVDb250YWluZXJ9IC8+XG5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIjpzdWJzZWN0aW9uVXJsXCIgY29tcG9uZW50PXtTdWJzZWN0aW9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXJ0aWNsZXMvOmFydGljbGVVcmxcIiBjb21wb25lbnQ9e0FydGljbGVDb250YWluZXJ9IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaW5kZXguanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdFJlZHVjZXInXG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtNaWRkbGV3YXJlXVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKClcbiAgbWlkZGxld2FyZS5wdXNoKGxvZ2dlcilcbn1cblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zdG9yZS5qc1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoUmVkdWNlcidcbmltcG9ydCBmbGFzaCBmcm9tICcuL2ZsYXNoUmVkdWNlcidcbmltcG9ydCBxdWVzdGlvbiBmcm9tICcuL3F1ZXN0aW9uc1JlZHVjZXInXG5pbXBvcnQgYXJ0aWNsZXMgZnJvbSAnLi9hcnRpY2xlUmVkdWNlcidcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9zZWFyY2hSZWR1Y2VyJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2Vyc1JlZHVjZXInXG5pbXBvcnQgc2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9uc1JlZHVjZXInXG5pbXBvcnQgdWkgZnJvbSAnLi91aVJlZHVjZXInXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aCxcbiAgZmxhc2gsXG4gIHF1ZXN0aW9uLFxuICBhcnRpY2xlcyxcbiAgc2VhcmNoLFxuICB1c2VyLFxuICBzZWN0aW9ucyxcbiAgdWlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcm9vdFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfQVVUSCwgTE9HSU4sIExPR09VVH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGF1dGggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmF1dGgsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVVUSDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuYXV0aCwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgTE9HSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH1cbiAgICBjYXNlIExPR09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBudWxsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hdXRoUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FVVEggPSAnUkVRVUVTVF9BVVRIJ1xuZXhwb3J0IGNvbnN0IExPR0lOID0gJ0xPR0lOJ1xuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdMT0dPVVQnXG5cbmNvbnN0IHJlcXVlc3RBdXRoID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQVVUSFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgZGlzcGF0Y2goe3R5cGU6IExPR09VVH0pXG4gIH1cbn1cblxuY29uc3QgbG9nSW4gPSAoXG4gIHVzZXJcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR0lOLFxuICAgIHVzZXJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoQ3JlZGVudGlhbHMgPSAoXG4gIGVtYWlsLFxuICBwYXNzd29yZFxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEF1dGgoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2F1dGgvYXV0aGVudGljYXRlLWNyZWRlbnRpYWxzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoVG9rZW4gPSAoXG4gIHRva2VuXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXV0aCgpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vYXV0aC9hdXRoZW50aWNhdGUtdG9rZW5gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdG9rZW5cbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicsIGpzb24uZGF0YS50b2tlbilcbiAgICAgICAgICBkaXNwYXRjaChsb2dJbihqc29uLmRhdGEudXNlcikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKGpzb24uZGF0YS5lcnJvciwgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hdXRoQWN0aW9ucy5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBTRVRfTUVTU0FHRSA9ICdTRVRfTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBVTlNFVF9NRVNTQUdFID0gJ1VOU0VUX01FU1NBR0UnXG5cbmNvbnN0IHNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlLFxuICB0aW1lb3V0SWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9NRVNTQUdFLFxuICAgIG1lc3NhZ2UsXG4gICAgbWVzc2FnZVR5cGUsXG4gICAgdGltZW91dElkXG4gIH1cbn1cblxuY29uc3QgdW5zZXRNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVU5TRVRfTUVTU0FHRVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmbGFzaE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1bnNldE1lc3NhZ2UoKSlcbiAgICB9LCAyMDAwKVxuXG4gICAgZGlzcGF0Y2goc2V0TWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlVHlwZSwgdCkpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9mbGFzaEFjdGlvbnMuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGF1dGg6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsXG4gIH0sXG4gIGZsYXNoOiB7XG4gICAgbWVzc2FnZTogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHRpbWVvdXRJZDogbnVsbFxuICB9LFxuICBuZXdRdWVzdGlvbjoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgYXJ0aWNsZXM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXVxuICB9LFxuICBuZXdDb21tZW50OiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBpdGVtczogW10sXG4gICAgcXVlcnk6ICcnXG4gIH0sXG4gIHVzZXI6IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBlcnJvcnM6IHt9XG4gIH0sXG4gIHNlY3Rpb25zOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgdWk6IHtcbiAgICB3aW5kb3dXaWR0aDogMCxcbiAgICB3aWR0aFRocmVzaG9sZDogOTYwLFxuICAgIG1haW5NZW51SXNPcGVuOiB0cnVlXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9pbml0aWFsU3RhdGUuanNcbiAqKi8iLCJpbXBvcnQge1NFVF9NRVNTQUdFLCBVTlNFVF9NRVNTQUdFfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGZsYXNoID0gKFxuICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaCksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlVHlwZSxcbiAgICAgICAgdGltZW91dElkOiBhY3Rpb24udGltZW91dElkXG4gICAgICB9KVxuICAgIGNhc2UgVU5TRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSwgQ09ORklSTV9RVUVTVElPTl9DUkVBVEUsIFJFSkVDVF9RVUVTVElPTl9DUkVBVEV9IGZyb20gJy4vcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHF1ZXN0aW9uID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5uZXdRdWVzdGlvbixcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTl9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fUVVFU1RJT05fQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5uZXdRdWVzdGlvbilcbiAgICBjYXNlIFJFSkVDVF9RVUVTVElPTl9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVlc3Rpb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSA9ICdSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX1FVRVNUSU9OX0NSRUFURSA9ICdDT05GSVJNX1FVRVNUSU9OX0NSRUFURSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFID0gJ1JFSkVDVF9RVUVTVElPTl9DUkVBVEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUVVFU1RJT05fQ1JFQVRFXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1FVRVNUSU9OX0NSRUFURVxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVRdWVzdGlvbiA9IChcbiAgZGF0YSxcbiAgc3VjY2Vzc01lc3NhZ2VcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDcmVhdGUoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L3F1ZXN0aW9ucy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVzdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHF1ZXN0aW9ucyBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0FSVElDTEVTLCBSRUNFSVZFX0FSVElDTEVTfSBmcm9tICcuL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgYXJ0aWNsZXMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmFydGljbGVzLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FSVElDTEVTID0gJ1JFUVVFU1RfQVJUSUNMRVMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9BUlRJQ0xFUyA9ICdSRUNFSVZFX0FSVElDTEVTJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdEFydGljbGVzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQVJUSUNMRVNcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlQXJ0aWNsZXMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX0FSVElDTEVTLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEFydGljbGVzKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hcnRpY2xlcy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVBcnRpY2xlcyhqc29uLmRhdGEuYXJ0aWNsZXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1NFQVJDSF9SRVNVTFRTLCBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTLFxuICBTRVRfU0VBUkNIX1FVRVJZfSBmcm9tICcuL3NlYXJjaEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzZWFyY2ggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNlYXJjaCxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9TRUFSQ0hfUkVTVUxUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtc1xuICAgICAgfSlcbiAgICBjYXNlIFNFVF9TRUFSQ0hfUVVFUlk6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcXVlcnk6IGFjdGlvbi5xdWVyeVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VhcmNoUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCBpbmRleCBmcm9tICcuL2FsZ29saWFTZWFyY2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NFQVJDSF9SRVNVTFRTID0gJ1JFUVVFU1RfU0VBUkNIX1JFU1VMVFMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUyA9ICdSRUNFSVZFX1NFQVJDSF9SRVNVTFRTJ1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfUVVFUlkgPSAnU0VUX1NFQVJDSF9RVUVSWSdcblxuZXhwb3J0IGNvbnN0IHNldFNlYXJjaFF1ZXJ5ID0gKFxuICBxXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfU0VBUkNIX1FVRVJZLFxuICAgIHF1ZXJ5OiBxXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFNlYXJjaFJlc3VsdHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9TRUFSQ0hfUkVTVUxUU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTZWFyY2hSZXN1bHRzID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaFJlc3VsdHMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFNlYXJjaFJlc3VsdHMoKSlcblxuICAgIHJldHVybiBpbmRleC5zZWFyY2goZ2V0U3RhdGUoKS5zZWFyY2gucXVlcnksIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgIGRpc3BhdGNoKHJlY2VpdmVTZWFyY2hSZXN1bHRzKGNvbnRlbnQuaGl0cykpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlYXJjaEFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tICdhbGdvbGlhc2VhcmNoJ1xuXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCc3NFMxSk5CMVpUJywgJzNkZTZmZGJhZmM0NzdjZjAxOTY3M2JiODEwNDNhZTBkJylcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgncGFnZXMnKVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FsZ29saWFTZWFyY2guanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfVVBEQVRFX1VTRVIsIENPTkZJUk1fVVBEQVRFX1VTRVIsIFJFSkVDVF9VUERBVEVfVVNFUn0gZnJvbSAnLi91c2Vyc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCB1c2VyID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS51c2VyLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLnVzZXIpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS91c2Vyc1JlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX1VTRVIgPSAnUkVRVUVTVF9VUERBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9VU0VSID0gJ0NPTkZJUk1fVVBEQVRFX1VTRVInXG5leHBvcnQgY29uc3QgUkVKRUNUX1VQREFURV9VU0VSID0gJ1JFSkVDVF9VUERBVEVfVVNFUidcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RVcGRhdGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1VQREFURV9VU0VSLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybVVwZGF0ZSA9IChcbiAgaWQsXG4gIHVwZGF0ZWRJdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1VQREFURV9VU0VSLFxuICAgIGlkLFxuICAgIHVwZGF0ZWRJdGVtXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0VXBkYXRlID0gKFxuICBpZCxcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfVVBEQVRFX1VTRVIsXG4gICAgaWQsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAoXG4gIGlkLFxuICBkYXRhLFxuICBzdWNjZXNzTWVzc2FnZVxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVwZGF0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS91c2Vycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1VcGRhdGUoaWQsIGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RVcGRhdGUoaWQsIHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHVwZGF0ZSB1c2VyIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdXNlcnNBY3Rpb25zLmpzeFxuICoqLyIsImltcG9ydCB7UkVRVUVTVF9TRUNUSU9OUywgUkVDRUlWRV9TRUNUSU9OU30gZnJvbSAnLi9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzZWN0aW9ucyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VjdGlvbnMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXNcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlY3Rpb25zXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VjdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NFQ1RJT05TID0gJ1JFUVVFU1RfU0VDVElPTlMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9TRUNUSU9OUyA9ICdSRUNFSVZFX1NFQ1RJT05TJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdFNlY3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfU0VDVElPTlNcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlU2VjdGlvbnMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1NFQ1RJT05TLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VjdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFNlY3Rpb25zKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9zZWN0aW9ucy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVTZWN0aW9ucyhqc29uLmRhdGEuaXRlbXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlY3Rpb25zQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCB7U0VUX1dJTkRPV19XSURUSCwgVE9HR0xFX01BSU5fTUVOVX0gZnJvbSAnLi91aUFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCB1aSA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUudWksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9XSU5ET1dfV0lEVEg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgd2luZG93V2lkdGg6IGFjdGlvbi53aWR0aFxuICAgICAgfSlcbiAgICBjYXNlIFRPR0dMRV9NQUlOX01FTlU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbWFpbk1lbnVJc09wZW46ICFzdGF0ZS5tYWluTWVudUlzT3BlblxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdWlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS91aVJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFNFVF9XSU5ET1dfV0lEVEggPSAnU0VUX1dJTkRPV19XSURUSCdcbmV4cG9ydCBjb25zdCBUT0dHTEVfTUFJTl9NRU5VID0gJ1RPR0dMRV9NQUlOX01FTlUnXG5cbmV4cG9ydCBjb25zdCBzZXRXaW5kb3dXaWR0aCA9IChcbiAgd2lkdGhcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9XSU5ET1dfV0lEVEgsXG4gICAgd2lkdGhcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlTWFpbk1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVE9HR0xFX01BSU5fTUVOVVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdWlBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtsb2dpbldpdGhUb2tlbn0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5pbXBvcnQge2ZldGNoQXJ0aWNsZXN9IGZyb20gJy4uLy4uL3N0b3JlL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IHtmZXRjaFNlY3Rpb25zfSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQge3NldFdpbmRvd1dpZHRofSBmcm9tICcuLi8uLi9zdG9yZS91aUFjdGlvbnMnXG5cbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4nXG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcCdcblxuY2xhc3MgQXBwQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVJlc2l6ZSAoKSB7XG4gICAgY29uc3Qge3NldFdpbmRvd1dpZHRofSA9IHRoaXMucHJvcHNcblxuICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5vdXRlcldpZHRoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0aGlzLnByb3BzLmF0dGVtcHRUb2tlbih0b2tlbilcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpXG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge3VzZXIsIGZldGNoU2VjdGlvbnMsIGZldGNoQXJ0aWNsZXN9ID0gbmV3UHJvcHNcblxuICAgIGlmICh1c2VyICYmICF0aGlzLnByb3BzLnVzZXIpIHtcbiAgICAgIGZldGNoU2VjdGlvbnMoKVxuICAgICAgZmV0Y2hBcnRpY2xlcygpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNBdXRob3JpemluZywgaXNGZXRjaGluZywgdXNlciwgd2luZG93V2lkdGgsIHdpZHRoVGhyZXNob2xkLCBjaGlsZHJlbiwgbG9jYXRpb24sIHBhcmFtc30gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNBdXRob3JpemluZykge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGlmIChpc0ZldGNoaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDxBcHAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgIHdpZHRoPXt3aW5kb3dXaWR0aH1cbiAgICAgICAgICAgIHdpZHRoVGhyZXNob2xkPXt3aWR0aFRocmVzaG9sZH1cbiAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufSAvPlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPExvZ2luIC8+XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgd2luZG93V2lkdGg6IHN0YXRlLnVpLndpbmRvd1dpZHRoLFxuICAgICAgd2lkdGhUaHJlc2hvbGQ6IHN0YXRlLnVpLndpZHRoVGhyZXNob2xkLFxuICAgICAgaXNGZXRjaGluZzogc3RhdGUuYXJ0aWNsZXMuaXNGZXRjaGluZyB8fCBzdGF0ZS5zZWN0aW9ucy5pc0ZldGNoaW5nLFxuICAgICAgaXNBdXRob3JpemluZzogc3RhdGUuYXV0aC5pc0ZldGNoaW5nLFxuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldFdpbmRvd1dpZHRoOiAodmFsdWUpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0V2luZG93V2lkdGgodmFsdWUpKVxuICAgICAgfSxcbiAgICAgIGF0dGVtcHRUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luV2l0aFRva2VuKHRva2VuKSlcbiAgICAgIH0sXG4gICAgICBmZXRjaEFydGljbGVzOiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQXJ0aWNsZXMoKSlcbiAgICAgIH0sXG4gICAgICBmZXRjaFNlY3Rpb25zOiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2VjdGlvbnMoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQXBwQ29udGFpbmVyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyL0FwcENvbnRhaW5lci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2FkaW5nLmNzcydcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSAnLi4vVUknXG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2FkaW5nfT5cbiAgICAgIDxTcGlubmVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxvYWRpbmdcIjpcIkxvYWRpbmdfX0xvYWRpbmdfX18zcHljelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnLi9CcmVhZGNydW1icydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQge01vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3Rlcn0gZnJvbSAnLi9Nb2RhbFdpbmRvdydcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcidcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCdcblxuZXhwb3J0IHtTcGlubmVyLCBCdXR0b24sIExpbmssIFRleHRJbnB1dCwgVGV4dEFyZWEsIEJyZWFkY3J1bWJzLCBBbGVydCxcbiAgTW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvVUkuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BbGVydC5jc3MnXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi8uLi9MYXlvdXRzJ1xuXG5jb25zdCBBbGVydCA9ICh7XG4gIG1lc3NhZ2UsXG4gIHRoZW1lID0gJ2RlZmF1bHQnLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3QgbWVzc2FnZVN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICBjb25zdCBtZXNzYWdlQ2xhc3NOYW1lcyA9IFtzdHlsZXMuQWxlcnRfX21lc3NhZ2VdXG5cbiAgc3dpdGNoICh0aGVtZSkge1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWVzLnB1c2goc3R5bGVzLkFsZXJ0X19tZXNzYWdlX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgbWVzc2FnZUNsYXNzTmFtZXMucHVzaChzdHlsZXMuQWxlcnRfX21lc3NhZ2VfZGVmYXVsdClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BbGVydH0+XG4gICAgICB7bWVzc2FnZVxuICAgICAgICA/IDxCbG9jaz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXttZXNzYWdlU3R5bGV9IGNsYXNzTmFtZT17bWVzc2FnZUNsYXNzTmFtZXMuam9pbignICcpfT57bWVzc2FnZX08L2Rpdj5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkFsZXJ0XCI6XCJBbGVydF9fQWxlcnRfX18zN19RQ1wiLFwiQWxlcnRfX21lc3NhZ2VcIjpcIkFsZXJ0X19BbGVydF9fbWVzc2FnZV9fXzJ3Q1pGXCIsXCJBbGVydF9fbWVzc2FnZV9kZWZhdWx0XCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZGVmYXVsdF9fX25fUjlDXCIsXCJBbGVydF9fbWVzc2FnZV9lcnJvclwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX2Vycm9yX19fMmlkNFdcIixcImFsZXJ0LWVudGVyXCI6XCJBbGVydF9fYWxlcnQtZW50ZXJfX19LNkpkTFwiLFwiYWxlcnQtZW50ZXItYWN0aXZlXCI6XCJBbGVydF9fYWxlcnQtZW50ZXItYWN0aXZlX19fM3ZsQ3dcIixcImFsZXJ0LWxlYXZlXCI6XCJBbGVydF9fYWxlcnQtbGVhdmVfX18yUHBZVFwiLFwiYWxlcnQtbGVhdmUtYWN0aXZlXCI6XCJBbGVydF9fYWxlcnQtbGVhdmUtYWN0aXZlX19fMmhhX1FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vQmxvY2snXG5pbXBvcnQgRmxleCBmcm9tICcuL0ZsZXgnXG5pbXBvcnQge0dyaWQsIEdyaWRJdGVtfSBmcm9tICcuL0dyaWQnXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtfSBmcm9tICcuL0xpc3QnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuL0xpc3RJbmxpbmUnXG5pbXBvcnQge01lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlfSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IHtQYWdlLCBQYWdlQ29udGVudH0gZnJvbSAnLi9QYWdlJ1xuaW1wb3J0IFdyYXAgZnJvbSAnLi9XcmFwJ1xuaW1wb3J0IElucHV0RGVjb3JhdG9yIGZyb20gJy4vSW5wdXREZWNvcmF0b3InXG5pbXBvcnQgTGFiZWxlZElucHV0IGZyb20gJy4vTGFiZWxlZElucHV0J1xuXG5leHBvcnQge0Jsb2NrLCBGbGV4LCBXcmFwLCBHcmlkLCBHcmlkSXRlbSxcbiAgTGlzdCwgTGlzdEl0ZW0sIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLFxuICBNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZSxcbiAgUGFnZSwgUGFnZUNvbnRlbnQsIElucHV0RGVjb3JhdG9yLCBMYWJlbGVkSW5wdXR9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgQmxvY2sgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgZmxleERpcmVjdGlvbiA9ICdyb3cnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgR3JpZCA9ICh7XG4gIGd1dHRlciA9IDAsXG4gIGFsaWduSXRlbXMgPSAnc3RyZXRjaCcsXG4gIGp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgbWFyZ2luUmlnaHQ6IGAtJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdyaWRJdGVtID0gKHtcbiAgc3BhbiA9IDAsXG4gIG91dE9mID0gMTIsXG4gIGd1dHRlciA9IDAsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgcGFkZGluZ0xlZnQ6IGAke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gLFxuICAgIHBhZGRpbmdSaWdodDogYCR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgZmxleDogJzEnXG4gIH1cblxuICBpZiAoc3BhbiAmJiBvdXRPZikge1xuICAgIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHtcbiAgICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgICB3aWR0aDogYCR7MTAwICogc3BhbiAvIG91dE9mfSVgXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0dyaWQsIEdyaWRJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdC5jc3MnXG5cbmNvbnN0IExpc3QgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYC0ke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3R9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdF9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3QsIExpc3RJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdFwiOlwiTGlzdF9fbGlzdF9fXzJrQlVkXCIsXCJsaXN0X19pdGVtXCI6XCJMaXN0X19saXN0X19pdGVtX19fMUQyVkZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdElubGluZS5jc3MnXG5cbmNvbnN0IExpc3RJbmxpbmUgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGp1c3RmeUNvbnRlbnQgPSAnZmxleC1zdGFydCdcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYC0ke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGZ5Q29udGVudFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0SW5saW5lfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3VsPlxuICApXG59XG5cbmNvbnN0IExpc3RJbmxpbmVJdGVtID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaSBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmVfX2l0ZW19ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImxpc3RJbmxpbmVcIjpcIkxpc3RJbmxpbmVfX2xpc3RJbmxpbmVfX18zR2podVwiLFwibGlzdElubGluZV9faXRlbVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9faXRlbV9fXzJLMWtRXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lZGlhLmNzcydcblxuY29uc3QgTWVkaWEgPSAoe1xuICBhbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYWxpZ25JdGVtc1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWF9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhQm9keSA9ICh7XG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2JvZHl9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhRmlndXJlID0gKHtcbiAgbiA9IDEsXG4gIG5sID0gMCxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiBgJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgJHtiYXNlbGluZSAqIG5sfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lZGlhX19maWd1cmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1lZGlhXCI6XCJNZWRpYV9fbWVkaWFfX18zYTAwR1wiLFwibWVkaWFfX2ZpZ3VyZVwiOlwiTWVkaWFfX21lZGlhX19maWd1cmVfX18yNFp3QVwiLFwibWVkaWFfX2JvZHlcIjpcIk1lZGlhX19tZWRpYV9fYm9keV9fXzNWZDItXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQYWdlID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IHtQYWdlLCBQYWdlQ29udGVudH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgV3JhcCA9ICh7XG4gIHdpZHRoID0gJzk1JScsXG4gIG1heFdpZHRoID0gJzgwcmVtJywgLy8gMTI4MHB4IHByb3ZpZGVkIDFlbSA9PT0gMTZweFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGgsXG4gICAgbWF4V2lkdGgsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL1dyYXAvV3JhcC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dERlY29yYXRvci5jc3MnXG5cbmNvbnN0IElucHV0RGVjb3JhdG9yID0gKHtcbiAgaW5wdXQsXG4gIHN1ZmZpeCxcbiAgcHJlZml4ID0gbnVsbFxufSkgPT4ge1xuICBsZXQgcHJlZml4RWwgPSBudWxsXG4gIGlmIChwcmVmaXgpIHtcbiAgICBwcmVmaXhFbCA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXREZWNvcmF0b3JfX3ByZWZpeH0+e3ByZWZpeH08L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXREZWNvcmF0b3J9PlxuICAgICAge3ByZWZpeEVsfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0RGVjb3JhdG9yX19pbnB1dH0+XG4gICAgICAgIHtpbnB1dH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0RGVjb3JhdG9yX19zdWZmaXh9PlxuICAgICAgICB7c3VmZml4fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXREZWNvcmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvSW5wdXREZWNvcmF0b3IvSW5wdXREZWNvcmF0b3IuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSW5wdXREZWNvcmF0b3JcIjpcIklucHV0RGVjb3JhdG9yX19JbnB1dERlY29yYXRvcl9fXzhvQ1ZtXCIsXCJJbnB1dERlY29yYXRvcl9fcHJlZml4XCI6XCJJbnB1dERlY29yYXRvcl9fSW5wdXREZWNvcmF0b3JfX3ByZWZpeF9fXzNtRnZIXCIsXCJJbnB1dERlY29yYXRvcl9faW5wdXRcIjpcIklucHV0RGVjb3JhdG9yX19JbnB1dERlY29yYXRvcl9faW5wdXRfX192blp3dlwiLFwiSW5wdXREZWNvcmF0b3JfX3N1ZmZpeFwiOlwiSW5wdXREZWNvcmF0b3JfX0lucHV0RGVjb3JhdG9yX19zdWZmaXhfX18zRWNLcVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9JbnB1dERlY29yYXRvci9JbnB1dERlY29yYXRvci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xhYmVsZWRJbnB1dC5jc3MnXG5cbmNvbnN0IExhYmVsZWRJbnB1dCA9ICh7XG4gIGxhYmVsLFxuICBpbnB1dCxcbiAgaW52ZXJzZSA9IGZhbHNlXG59KSA9PiB7XG4gIGxldCBjbGFzc2VzID0gW3N0eWxlcy5MYWJlbGVkSW5wdXRdXG4gIGlmIChpbnZlcnNlKSB7XG4gICAgY2xhc3Nlcy5wdXNoKHN0eWxlcy5MYWJlbGVkSW5wdXRfaW52ZXJzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5qb2luKCcgJyl9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxhYmVsZWRJbnB1dF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cblxuICAgICAge2lucHV0fVxuICAgIDwvbGFiZWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiZWxlZElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xhYmVsZWRJbnB1dC9MYWJlbGVkSW5wdXQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTGFiZWxlZElucHV0XCI6XCJMYWJlbGVkSW5wdXRfX0xhYmVsZWRJbnB1dF9fXzNfbDJSXCIsXCJMYWJlbGVkSW5wdXRfX2xhYmVsXCI6XCJMYWJlbGVkSW5wdXRfX0xhYmVsZWRJbnB1dF9fbGFiZWxfX18yX2U5c1wiLFwiTGFiZWxlZElucHV0X2ludmVyc2VcIjpcIkxhYmVsZWRJbnB1dF9fTGFiZWxlZElucHV0X2ludmVyc2VfX181OFU0UlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYWJlbGVkSW5wdXQvTGFiZWxlZElucHV0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CcmVhZGNydW1icy5jc3MnXG5cbmNvbnN0IEJyZWFkY3J1bWJzID0gKHtcbiAgaXRlbXNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkJyZWFkY3J1bWJzfT5cbiAgICAgIHtpdGVtcy5tYXAoaSA9PlxuICAgICAgICA8TGluayB0bz17aS5wYXRofSBjbGFzc05hbWU9e3N0eWxlcy5CcmVhZGNydW1ic19faXRlbX0+e2kubGFiZWx9PC9MaW5rPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1ic1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQnJlYWRjcnVtYnMvQnJlYWRjcnVtYnMuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQnJlYWRjcnVtYnNcIjpcIkJyZWFkY3J1bWJzX19CcmVhZGNydW1ic19fXzJXTGowXCIsXCJCcmVhZGNydW1ic19faXRlbVwiOlwiQnJlYWRjcnVtYnNfX0JyZWFkY3J1bWJzX19pdGVtX19fMURheUlcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0JyZWFkY3J1bWJzL0JyZWFkY3J1bWJzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLmNzcydcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sXG4gIG9uQ2xpY2ssXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIHRoZW1lID0gJ2FjY2VudDEnLFxuICBoYXNQcmVmaXggPSBmYWxzZSxcbiAgaGFzU3VmZml4ID0gZmFsc2Vcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5CdXR0b259XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQxJyA/IHN0eWxlcy5CdXR0b25fYWNjZW50MSA6IG51bGx9XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQyJyA/IHN0eWxlcy5CdXR0b25fYWNjZW50MiA6IG51bGx9XG4gICAgICAgICR7aGFzUHJlZml4ID8gc3R5bGVzLkJ1dHRvbl9oYXNQcmVmaXggOiBudWxsfVxuICAgICAgICAke2hhc1N1ZmZpeCA/IHN0eWxlcy5CdXR0b25faGFzU3VmZml4IDogbnVsbH1gfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgb25DbGljaz17b25DbGlja30+e2NoaWxkcmVufTwvYnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCdXR0b25cIjpcIkJ1dHRvbl9fQnV0dG9uX19fUUk3YjJcIixcIkJ1dHRvbl9hY2NlbnQxXCI6XCJCdXR0b25fX0J1dHRvbl9hY2NlbnQxX19fMWRmaHdcIixcIkJ1dHRvbl9hY2NlbnQyXCI6XCJCdXR0b25fX0J1dHRvbl9hY2NlbnQyX19fWm44ejlcIixcIkJ1dHRvbl9oYXNQcmVmaXhcIjpcIkJ1dHRvbl9fQnV0dG9uX2hhc1ByZWZpeF9fX2l6S1pxXCIsXCJCdXR0b21faGFzU3VmZml4XCI6XCJCdXR0b25fX0J1dHRvbV9oYXNTdWZmaXhfX19IV1hsYVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsV2luZG93LmNzcydcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgTW9kYWxXaW5kb3cgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgd2lkdGg6IDQwXG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke211bHRpcGxpZXJzLndpZHRoICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsfT5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvRmxleD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0hlYWRlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMixcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19oZWFkZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Qm9keSA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMyxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19fYm9keX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Rm9vdGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2Zvb3Rlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJNb2RhbFwiOlwiTW9kYWxXaW5kb3dfX01vZGFsX19fMmtsY2dcIixcIk1vZGFsV2luZG93XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX18ydFZ5WlwiLFwiTW9kYWxXaW5kb3dfX2hlYWRlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19oZWFkZXJfX18xUXJXSFwiLFwiTW9kYWxXaW5kb3dfX2JvZHlcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19fYm9keV9fXzNRdVFoXCIsXCJNb2RhbFdpbmRvd19fZm9vdGVyXCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2Zvb3Rlcl9fXzJJMFRGXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGluayBhcyBOYXRpdmVMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaW5rLmNzcydcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBMaW5rID0gKHtcbiAgY2hpbGRyZW4sXG4gIHNtYWxsLFxuICB0byxcbiAgZGlzYWJsZWQsXG4gIG9uQ2xpY2ssXG4gIGhyZWYsXG4gIHRoZW1lID0gJ2FjY2VudDEnXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBmb250U2l6ZTogJzFyZW0nXG4gIH1cblxuICBpZiAoc21hbGwpIHtcbiAgICBzdHlsZSA9IHtcbiAgICAgIGZvbnRTaXplOiBgJHsxLjE2NyAqIGJhc2VsaW5lfXJlbWBcbiAgICB9XG4gIH1cblxuICBsZXQgY2xhc3NOYW1lID0gW11cbiAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkxpbmspXG4gIHN3aXRjaCAodGhlbWUpIHtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBjbGFzc05hbWUucHVzaChzdHlsZXMuTGlua19lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWNjZW50JzpcbiAgICBkZWZhdWx0OlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkxpbmtfYWNjZW50KVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIGlmICh0bykge1xuICAgIHJldHVybiA8TmF0aXZlTGlua1xuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfWB9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICB0bz17dG99PntjaGlsZHJlbn08L05hdGl2ZUxpbms+XG4gIH0gZWxzZSBpZiAob25DbGljaykge1xuICAgIHJldHVybiA8YnV0dG9uXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZS5qb2luKCcgJyl9YH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L2J1dHRvbj5cbiAgfSBlbHNlIGlmIChocmVmKSB7XG4gICAgcmV0dXJuIDxhXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBocmVmPXtocmVmfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfWB9PntjaGlsZHJlbn08L2E+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvTGluay9MaW5rLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxpbmtcIjpcIkxpbmtfX0xpbmtfX18zaXNnWVwiLFwiTGlua19hY2NlbnRcIjpcIkxpbmtfX0xpbmtfYWNjZW50X19fQTgxSEhcIixcIkxpbmtfZXJyb3JcIjpcIkxpbmtfX0xpbmtfZXJyb3JfX18yaEtLY1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTGluay9MaW5rLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Bpbm5lci5jc3MnXG5cbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TcGlubmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcl9faW5uZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTJ9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUzfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNH1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTV9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU2fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlN31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTh9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU5fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTB9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEyfWB9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNwaW5uZXJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX18xZml5a1wiLFwiU3Bpbm5lcl9faW5uZXJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2lubmVyX19fNTh2Y1RcIixcIlNwaW5uZXJfX2NpcmNsZVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlX19fMlp1Z09cIixcInNrLWNpcmNsZUZhZGVEZWxheVwiOlwiU3Bpbm5lcl9fc2stY2lyY2xlRmFkZURlbGF5X19fMUV0bjhcIixcIlNwaW5uZXJfX2NpcmNsZTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTFfX19CT0Q3blwiLFwiU3Bpbm5lcl9fY2lyY2xlMlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMl9fXzJhQnRyXCIsXCJTcGlubmVyX19jaXJjbGUzXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUzX19fMUJhWmZcIixcIlNwaW5uZXJfX2NpcmNsZTRcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTRfX18zVjVyN1wiLFwiU3Bpbm5lcl9fY2lyY2xlNVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNV9fXzNESjVYXCIsXCJTcGlubmVyX19jaXJjbGU2XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU2X19fWnBVNW1cIixcIlNwaW5uZXJfX2NpcmNsZTdcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTdfX19YcG5LNVwiLFwiU3Bpbm5lcl9fY2lyY2xlOFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOF9fXzFfUlJYXCIsXCJTcGlubmVyX19jaXJjbGU5XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU5X19fZk8wT0dcIixcIlNwaW5uZXJfX2NpcmNsZTEwXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMF9fX25pMzVBXCIsXCJTcGlubmVyX19jaXJjbGUxMVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTFfX18xaGF2OVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTEyX19fMmlwelRcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7YW5jaG9ybWV9IGZyb20gJ2FuY2hvcm1lLmpzJ1xuaW1wb3J0IHN0cmlwdGFncyBmcm9tICdzdHJpcHRhZ3MnXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnXG5cbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJy4uL0lucHV0TGFiZWwnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dEFyZWEuY3NzJ1xuXG5jb25zdCBwbGFpblRvSHRtbCA9ICh0ZXh0KSA9PiBgPHA+JHthbmNob3JtZS5qcyh0ZXh0LnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+JykpfTwvcD5gXG5jb25zdCBodG1sVG9QbGFpbiA9IChodG1sKSA9PiBzdHJpcHRhZ3MoaHRtbC5yZXBsYWNlKC88YnIgXFwvPi9nLCAnXFxuJykpXG5cbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBwbGFpblRvSHRtbCh0aGlzLl9lbGVtZW50LnZhbHVlKVxuICAgIGNvbnN0IHtjaGFuZ2VDYWxsYmFja30gPSB0aGlzLnByb3BzXG5cbiAgICBjaGFuZ2VDYWxsYmFjayh2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2xhYmVsLCBlcnJvciwgdmFsdWUsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZCA9IGZhbHNlfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuVGV4dEFyZWF9PlxuICAgICAgICA8SW5wdXRMYWJlbCBsYWJlbD17bGFiZWx9IGVycm9yPXtlcnJvcn0gLz5cblxuICAgICAgICA8VGV4dGFyZWEgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIHZhbHVlPXtodG1sVG9QbGFpbih2YWx1ZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuVGV4dEFyZWFfX2lucHV0fSAke2Vycm9yID8gc3R5bGVzLlRleHRBcmVhX19pbnB1dF9lcnJvciA6IG51bGx9YH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgbWluUm93cz17NX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0TGFiZWwuY3NzJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgSW5wdXRMYWJlbCA9ICh7XG4gIGxhYmVsLFxuICBlcnJvclxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSW5wdXRMYWJlbH0gJHtlcnJvciA/IHN0eWxlcy5JbnB1dExhYmVsX2Vycm9yIDogJyd9YH0+XG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgID8gPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRMYWJlbF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB7ZXJyb3JcbiAgICAgICAgPyA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dExhYmVsX19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0TGFiZWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dExhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19fMUNlbUlcIixcIklucHV0TGFiZWxfX2xhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19sYWJlbF9fXzJZeV9QXCIsXCJJbnB1dExhYmVsX19lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9fZXJyb3JfX18yTUZOZFwiLFwiSW5wdXRMYWJlbF9lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9lcnJvcl9fXzNFcDVxXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUZXh0QXJlYVwiOlwiVGV4dEFyZWFfX1RleHRBcmVhX19fMTlpcDdcIixcIlRleHRBcmVhX19pbnB1dFwiOlwiVGV4dEFyZWFfX1RleHRBcmVhX19pbnB1dF9fX3g1QjRJXCIsXCJUZXh0QXJlYV9faW5wdXRfZXJyb3JcIjpcIlRleHRBcmVhX19UZXh0QXJlYV9faW5wdXRfZXJyb3JfX18zNjlnVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0SW5wdXQuY3NzJ1xuXG5jbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIG9uQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2VsZW1lbnQudmFsdWVcbiAgICBjb25zdCB7Y2hhbmdlQ2FsbGJhY2t9ID0gdGhpcy5wcm9wc1xuXG4gICAgY2hhbmdlQ2FsbGJhY2sodmFsdWUpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVycm9yLFxuICAgICAgdmFsdWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGhhc1ByZWZpeCA9IGZhbHNlLFxuICAgICAgaGFzU3VmZml4ID0gZmFsc2UsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgaW52ZXJzZSA9IGZhbHNlLFxuICAgICAgdHlwZSA9ICd0ZXh0J1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5UZXh0SW5wdXR9XG4gICAgICAgICAgJHtlcnJvciA/IHN0eWxlcy5UZXh0SW5wdXRfZXJyb3IgOiBudWxsfVxuICAgICAgICAgICR7aW52ZXJzZSA/IHN0eWxlcy5UZXh0SW5wdXRfaW52ZXJzZSA6IG51bGx9XG4gICAgICAgICAgJHtoYXNQcmVmaXggPyBzdHlsZXMuVGV4dElucHV0X3dpdGhQcmVmaXggOiBudWxsfVxuICAgICAgICAgICR7aGFzU3VmZml4ID8gc3R5bGVzLlRleHRJbnB1dF93aXRoU3VmZml4IDogbnVsbH1gfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUZXh0SW5wdXRcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X19fMUFDR1lcIixcIlRleHRJbnB1dF9lcnJvclwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfZXJyb3JfX18yZm5SblwiLFwiVGV4dElucHV0X2ludmVyc2VcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X2ludmVyc2VfX18zQS14OFwiLFwiVGV4dElucHV0X3dpdGhQcmVmaXhcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X3dpdGhQcmVmaXhfX18yLUd3M1wiLFwiVGV4dElucHV0X3dpdGhTdWZmaXhcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X3dpdGhTdWZmaXhfX18xWlROUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7RmxleCwgTGlzdCwgTGlzdEl0ZW0sIFBhZ2UsIFBhZ2VDb250ZW50fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXIsIFRleHRJbnB1dCwgQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCBGbGFzaE1lc3NhZ2UgZnJvbSAnLi4vRmxhc2hNZXNzYWdlJ1xuaW1wb3J0IHtsb2dpbldpdGhDcmVkZW50aWFsc30gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gdGhpcy5jaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWxFcnJvcjogJycsXG4gICAgICBwYXNzd29yZEVycm9yOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEZvcm0gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgZW1haWxFcnJvciA9ICcnXG4gICAgbGV0IHBhc3N3b3JkRXJyb3IgPSAnJ1xuXG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsID09PSAnJykge1xuICAgICAgZW1haWxFcnJvciA9ICdlbWFpbCBjYW5ub3QgYmUgZW1wdHknXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICBwYXNzd29yZEVycm9yID0gJ3Bhc3N3b3JkIGNhbm5vdCBiZSBibGFuaydcbiAgICB9XG5cbiAgICBpZiAoIWVtYWlsRXJyb3IgJiYgIXBhc3N3b3JkRXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKGxvZ2luV2l0aENyZWRlbnRpYWxzKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZW1haWxFcnJvcixcbiAgICAgICAgcGFzc3dvcmRFcnJvclxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VFbWFpbCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiB2YWx1ZSxcbiAgICAgIGVtYWlsRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFzc3dvcmQ6IHZhbHVlLFxuICAgICAgcGFzc3dvcmRFcnJvcjogJydcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNGZXRjaGluZ30gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxQYWdlQ29udGVudD5cbiAgICAgICAgICA8TW9kYWxXaW5kb3c+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfT5cbiAgICAgICAgICAgICAgPE1vZGFsV2luZG93SGVhZGVyPlxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+TG9naW48L0ZsZXg+XG4gICAgICAgICAgICAgIDwvTW9kYWxXaW5kb3dIZWFkZXI+XG5cbiAgICAgICAgICAgICAgPE1vZGFsV2luZG93Qm9keT5cbiAgICAgICAgICAgICAgICA8TGlzdCBuPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG49ezEuNX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsOlwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGNhc2V5QGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZW1haWxFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17dGhpcy5jaGFuZ2VFbWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZDpcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBCaWdTZWNyZXRcIlxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLnBhc3N3b3JkRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICA8L01vZGFsV2luZG93Qm9keT5cblxuICAgICAgICAgICAgICA8TW9kYWxXaW5kb3dGb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmV0Y2hpbmd9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvZ2luXCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Nb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L01vZGFsV2luZG93PlxuICAgICAgICA8L1BhZ2VDb250ZW50PlxuXG4gICAgICAgIDxGbGFzaE1lc3NhZ2UgLz5cbiAgICAgIDwvUGFnZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmdcbiAgICB9XG4gIH1cbikoTG9naW4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0FsZXJ0fSBmcm9tICcuLi9VSSdcblxuY29uc3QgRmxhc2hNZXNzYWdlID0gKHtcbiAgbWVzc2FnZSxcbiAgdHlwZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBbGVydCBtZXNzYWdlPXttZXNzYWdlfSB0aGVtZT17dHlwZX0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLmZsYXNoLm1lc3NhZ2UsXG4gICAgICB0eXBlOiBzdGF0ZS5mbGFzaC50eXBlXG4gICAgfVxuICB9XG4pKEZsYXNoTWVzc2FnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZGVyQ29udGFpbmVyIGZyb20gJy4uL0hlYWRlckNvbnRhaW5lcidcbi8vIGltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJ1xuaW1wb3J0IEZsYXNoTWVzc2FnZSBmcm9tICcuLi9GbGFzaE1lc3NhZ2UnXG5pbXBvcnQgTWFpbk5hdkNvbnRhaW5lciBmcm9tICcuLi9NYWluTmF2Q29udGFpbmVyJ1xuaW1wb3J0IHtQYWdlLCBQYWdlQ29udGVudH0gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgQXBwID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2F0aW9uLFxuICBwYXJhbXMsXG4gIHdpZHRoLFxuICB3aWR0aFRocmVzaG9sZFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAge3dpZHRoID49IHdpZHRoVGhyZXNob2xkXG4gICAgICAgID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZGVyQ29udGFpbmVyXG4gICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgICAgIDxNYWluTmF2Q29udGFpbmVyXG4gICAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWFpbk5hdkNvbnRhaW5lclxuICAgICAgICAgICAgICBwYXJhbXM9e3BhcmFtc30gLz5cbiAgICAgICAgICAgIDxIZWFkZXJDb250YWluZXJcbiAgICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIDxQYWdlQ29udGVudD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9QYWdlQ29udGVudD5cblxuICAgICAgPEZsYXNoTWVzc2FnZSAvPlxuICAgIDwvUGFnZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FwcC9BcHAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXJEZXNrdG9wLmNzcydcbmltcG9ydCB7RmxleCwgTWVkaWEsIE1lZGlhRmlndXJlLCBNZWRpYUJvZHl9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgTG9jYWxlIGZyb20gJy4uL0xvY2FsZSdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL1dyYXBwZXInXG5cbmltcG9ydCBpbWcgZnJvbSAnLi9sb2dvLnN2ZydcblxuY29uc3QgSGVhZGVyRGVza3RvcCA9ICh7XG4gIGxvY2F0aW9uXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJ9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPE1lZGlhIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPE1lZGlhRmlndXJlIG49XCIxLjVcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcl9fbG9nb30gLz5cbiAgICAgICAgICAgIDwvTWVkaWFGaWd1cmU+XG5cbiAgICAgICAgICAgIDxNZWRpYUJvZHk+XG4gICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX3RpdGxlfT5WYWNjaW5lIEFuc3dlcnM8L2gxPlxuICAgICAgICAgICAgICAgIDxMb2NhbGUgLz5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX19zdWJ0aXRsZX0+QSByZWxpYWJsZSBzb3VyY2Ugb2YgaW5mb3JtYXRpb24gYWJvdXQgdmFjY2luZXMgaW4gQ2FuYWRhPC9kaXY+XG4gICAgICAgICAgICA8L01lZGlhQm9keT5cbiAgICAgICAgICA8L01lZGlhPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX3NlYXJjaH0+XG4gICAgICAgICAgICA8U2VhcmNoQmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckRlc2t0b3BcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0hlYWRlckRlc2t0b3AvSGVhZGVyRGVza3RvcC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHticm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQge3NldFNlYXJjaFF1ZXJ5fSBmcm9tICcuLi8uLi9zdG9yZS9zZWFyY2hBY3Rpb25zJ1xuaW1wb3J0IHtUZXh0SW5wdXQsIEJ1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0xhYmVsZWRJbnB1dCwgSW5wdXREZWNvcmF0b3J9IGZyb20gJy4uL0xheW91dHMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWFyY2hCYXIuY3NzJ1xuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdWVyeTogdGhpcy5wcm9wcy5xdWVyeVxuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7c2V0U2VhcmNoUXVlcnksIGxvY2F0aW9uOiB7cXVlcnl9fSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChxdWVyeSAmJiBxdWVyeS5xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5LnFcbiAgICAgIH0pXG4gICAgICBzZXRTZWFyY2hRdWVyeShxdWVyeS5xKVxuICAgIH1cbiAgfVxuXG4gIHNlYXJjaCAoKSB7XG4gICAgY29uc3Qge3NldFNlYXJjaFF1ZXJ5fSA9IHRoaXMucHJvcHNcblxuICAgIHNldFNlYXJjaFF1ZXJ5KHRoaXMuc3RhdGUucXVlcnkpXG4gICAgYnJvd3Nlckhpc3RvcnkucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9zZWFyY2gnLFxuICAgICAgcXVlcnk6IHtxOiB0aGlzLnN0YXRlLnF1ZXJ5fVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtsYWJlbCA9IHRydWV9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNlYXJjaH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoQmFyfT5cbiAgICAgICAgPExhYmVsZWRJbnB1dFxuICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICA8SW5wdXREZWNvcmF0b3JcbiAgICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUucXVlcnl9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5pc0ZldGNoaW5nfVxuICAgICAgICAgICAgICAgICAgaGFzU3VmZml4XG4gICAgICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuc2V0U3RhdGUoe3F1ZXJ5OiB2fSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0aGUgd2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgc3VmZml4PXtcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzRmV0Y2hpbmd9XG4gICAgICAgICAgICAgICAgICBoYXNQcmVmaXg+U2VhcmNoPC9CdXR0b24+XG4gICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgIH0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeTogc3RhdGUuc2VhcmNoLnF1ZXJ5LFxuICAgICAgaXNGZXRjaGluZzogc3RhdGUuc2VhcmNoLmlzRmV0Y2hpbmdcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2V0U2VhcmNoUXVlcnk6IChxKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldFNlYXJjaFF1ZXJ5KHEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShTZWFyY2hCYXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNlYXJjaEJhclwiOlwiU2VhcmNoQmFyX19TZWFyY2hCYXJfX19kdGRUaFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRlclwiOlwiSGVhZGVyRGVza3RvcF9fSGVhZGVyX19fMXFnM0JcIixcIkhlYWRlcl9fbG9nb1wiOlwiSGVhZGVyRGVza3RvcF9fSGVhZGVyX19sb2dvX19fM2V5ejNcIixcIkhlYWRlcl9fdGl0bGVcIjpcIkhlYWRlckRlc2t0b3BfX0hlYWRlcl9fdGl0bGVfX19GTVZ0LVwiLFwiSGVhZGVyX19zdWJ0aXRsZVwiOlwiSGVhZGVyRGVza3RvcF9fSGVhZGVyX19zdWJ0aXRsZV9fXzVxUmRzXCIsXCJIZWFkZXJfX3NlYXJjaFwiOlwiSGVhZGVyRGVza3RvcF9fSGVhZGVyX19zZWFyY2hfX18zYjA1Z1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyRGVza3RvcC9IZWFkZXJEZXNrdG9wLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9jYWxlLmNzcydcblxuY29uc3QgTG9jYWxlID0gKHtcbiAgbG9jYXRpb25cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxvY2FsZX0+TWFuaXRvYmE8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xvY2FsZS9Mb2NhbGUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTG9jYWxlXCI6XCJMb2NhbGVfX0xvY2FsZV9fXzFDVEJwXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Mb2NhbGUvTG9jYWxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXcmFwcGVyID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGg6ICc5NSUnLFxuICAgIG1heFdpZHRoOiAnOTByZW0nLFxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xvZ28uOTZhNjExNzZkYjU0ZTIyNzQyMzYyNjc5OTc0NDIwMWUuc3ZnXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0hlYWRlckRlc2t0b3AvbG9nby5zdmdcbiAqKiBtb2R1bGUgaWQgPSA2NTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlck1vYmlsZS5jc3MnXG5pbXBvcnQge0ZsZXgsIE1lZGlhLCBNZWRpYUZpZ3VyZSwgTWVkaWFCb2R5fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IExvY2FsZSBmcm9tICcuLi9Mb2NhbGUnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9XcmFwcGVyJ1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9TZWFyY2hCYXInXG5cbmltcG9ydCBpbWcgZnJvbSAnLi9sb2dvLnN2ZydcblxuY29uc3QgSGVhZGVyTW9iaWxlID0gKHtcbiAgbG9jYXRpb24sXG4gIHRvZ2dsZU1haW5NZW51XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX25hdmlnYXRpb25CYXJ9PlxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX19tZW51QnRufVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNYWluTWVudX0gLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX3NlYXJjaH0+XG4gICAgICAgICAgICAgIDxTZWFyY2hCYXJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX2JvZHl9PlxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICA8TWVkaWEgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8TWVkaWFGaWd1cmUgbj1cIjEuNVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX19sb2dvfSAvPlxuICAgICAgICAgICAgPC9NZWRpYUZpZ3VyZT5cblxuICAgICAgICAgICAgPE1lZGlhQm9keT5cbiAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcl9fdGl0bGV9PlZhY2NpbmUgQW5zd2VyczwvaDE+XG4gICAgICAgICAgICAgICAgPExvY2FsZSAvPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX3N1YnRpdGxlfT5BIHJlbGlhYmxlIHNvdXJjZSBvZiBpbmZvcm1hdGlvbiBhYm91dCB2YWNjaW5lcyBpbiBDYW5hZGE8L2Rpdj5cbiAgICAgICAgICAgIDwvTWVkaWFCb2R5PlxuICAgICAgICAgIDwvTWVkaWE+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck1vYmlsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvSGVhZGVyTW9iaWxlL0hlYWRlck1vYmlsZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkZXJcIjpcIkhlYWRlck1vYmlsZV9fSGVhZGVyX19fMjhHaU5cIixcIkhlYWRlcl9fbmF2aWdhdGlvbkJhclwiOlwiSGVhZGVyTW9iaWxlX19IZWFkZXJfX25hdmlnYXRpb25CYXJfX18xa1ZtOFwiLFwiSGVhZGVyX19ib2R5XCI6XCJIZWFkZXJNb2JpbGVfX0hlYWRlcl9fYm9keV9fX3VHbFBrXCIsXCJIZWFkZXJfX2xvZ29cIjpcIkhlYWRlck1vYmlsZV9fSGVhZGVyX19sb2dvX19fM2pRTU1cIixcIkhlYWRlcl9fdGl0bGVcIjpcIkhlYWRlck1vYmlsZV9fSGVhZGVyX190aXRsZV9fXzJYeG1sXCIsXCJIZWFkZXJfX3N1YnRpdGxlXCI6XCJIZWFkZXJNb2JpbGVfX0hlYWRlcl9fc3VidGl0bGVfX18zZFVaelwiLFwiSGVhZGVyX19zZWFyY2hcIjpcIkhlYWRlck1vYmlsZV9fSGVhZGVyX19zZWFyY2hfX19heE9UMVwiLFwiSGVhZGVyX19tZW51QnRuXCI6XCJIZWFkZXJNb2JpbGVfX0hlYWRlcl9fbWVudUJ0bl9fXzNENmw0XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9IZWFkZXJNb2JpbGUvSGVhZGVyTW9iaWxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xvZ28uOTZhNjExNzZkYjU0ZTIyNzQyMzYyNjc5OTc0NDIwMWUuc3ZnXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0hlYWRlck1vYmlsZS9sb2dvLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDY1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHt0b2dnbGVNYWluTWVudX0gZnJvbSAnLi4vLi4vc3RvcmUvdWlBY3Rpb25zJ1xuXG5pbXBvcnQgTWFpbk5hdkRlc2t0b3AgZnJvbSAnLi4vTWFpbk5hdkRlc2t0b3AnXG5pbXBvcnQgTWFpbk5hdk1vYmlsZSBmcm9tICcuLi9NYWluTmF2TW9iaWxlJ1xuXG5jbGFzcyBNYWluTmF2Q29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7d2lkdGgsIHdpZHRoVGhyZXNob2xkLCB0b2dnbGVNYWluTWVudSwgbWFpbk1lbnVJc09wZW4sIHNlY3Rpb25zLCByb290U2VjdGlvbnMsIGN1cnJlbnRTZWN0aW9uLCBjdXJyZW50U3Vic2VjdGlvbnN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHdpZHRoID49IHdpZHRoVGhyZXNob2xkKSB7XG4gICAgICByZXR1cm4gPE1haW5OYXZEZXNrdG9wXG4gICAgICAgIHJvb3RTZWN0aW9ucz17cm9vdFNlY3Rpb25zfVxuICAgICAgICBjdXJyZW50U2VjdGlvbj17Y3VycmVudFNlY3Rpb259XG4gICAgICAgIGN1cnJlbnRTdWJzZWN0aW9ucz17Y3VycmVudFN1YnNlY3Rpb25zfSAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPE1haW5OYXZNb2JpbGVcbiAgICAgICAgcm9vdFNlY3Rpb25zPXtyb290U2VjdGlvbnN9XG4gICAgICAgIHRvZ2dsZU1haW5NZW51PXt0b2dnbGVNYWluTWVudX1cbiAgICAgICAgbWFpbk1lbnVJc09wZW49e21haW5NZW51SXNPcGVufVxuICAgICAgICBzZWN0aW9ucz17c2VjdGlvbnN9IC8+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBtZXRhU2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLnNlY3Rpb25UeXBlID09PSAnbWV0YScgJiYgcy51cmwgPT09ICdtYWluLW5hdicpXG4gICAgY29uc3Qgcm9vdFNlY3Rpb25zID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmlsdGVyKHMgPT4gbWV0YVNlY3Rpb24uY2hpbGRyZW4uaW5kZXhPZihzLl9pZCkgIT09IC0xKVxuICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gcm9vdFNlY3Rpb25zLmZpbmQocyA9PiBzLnVybCA9PT0gb3duUHJvcHMucGFyYW1zLnNlY3Rpb25VcmwpXG4gICAgY29uc3QgY3VycmVudFN1YnNlY3Rpb25zID0gY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUgPT09ICdwYXJlbnQnXG4gICAgICA/IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbHRlcihzID0+IGN1cnJlbnRTZWN0aW9uLmNoaWxkcmVuLmluZGV4T2Yocy5faWQpICE9PSAtMSlcbiAgICAgIDogbnVsbFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlY3Rpb25zOiBzdGF0ZS5zZWN0aW9ucy5pdGVtcyxcbiAgICAgIHJvb3RTZWN0aW9ucyxcbiAgICAgIGN1cnJlbnRTZWN0aW9uLFxuICAgICAgY3VycmVudFN1YnNlY3Rpb25zLFxuICAgICAgd2lkdGg6IHN0YXRlLnVpLndpbmRvd1dpZHRoLFxuICAgICAgd2lkdGhUaHJlc2hvbGQ6IHN0YXRlLnVpLndpZHRoVGhyZXNob2xkLFxuICAgICAgbWFpbk1lbnVJc09wZW46IHN0YXRlLnVpLm1haW5NZW51SXNPcGVuXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvZ2dsZU1haW5NZW51OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZU1haW5NZW51KCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKE1haW5OYXZDb250YWluZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9NYWluTmF2Q29udGFpbmVyL01haW5OYXZDb250YWluZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL1dyYXBwZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluTmF2RGVza3RvcC5jc3MnXG5cbmNvbnN0IE1haW5OYXZEZXNrdG9wID0gKHtcbiAgY3VycmVudFNlY3Rpb24sXG4gIHJvb3RTZWN0aW9ucyxcbiAgY3VycmVudFN1YnNlY3Rpb25zXG59KSA9PiB7XG4gIGxldCBzdWJOYXYgPSAnJ1xuICBpZiAoY3VycmVudFN1YnNlY3Rpb25zKSB7XG4gICAgc3ViTmF2ID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TdWJuYXZpZ2F0aW9ufT5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICB7Y3VycmVudFN1YnNlY3Rpb25zLm1hcCgocywgaW5kZXgpID0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5TdWJuYXZpZ2F0aW9uX19pdGVtfVxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLlN1Ym5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlfVxuICAgICAgICAgICAgICAgIHRvPXtgLyR7Y3VycmVudFNlY3Rpb24udXJsfS8ke3MudXJsfWB9PntzLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmlnYXRpb259PlxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgIHtyb290U2VjdGlvbnMubWFwKChzLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBhY3RpdmVDbGFzc05hbWVzID0gW3N0eWxlcy5OYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZV1cbiAgICAgICAgICAgICAgaWYgKHMuc2VjdGlvblR5cGUgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5OYXZpZ2F0aW9uX19pdGVtX3BhcmVudF9hY3RpdmUpXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICB0bz17YC8ke3MudXJsfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5OYXZpZ2F0aW9uX19pdGVtfVxuICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXthY3RpdmVDbGFzc05hbWVzLmpvaW4oJyAnKX0+e3MudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7c3ViTmF2fVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZEZXNrdG9wXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9NYWluTmF2RGVza3RvcC9NYWluTmF2RGVza3RvcC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJOYXZpZ2F0aW9uXCI6XCJNYWluTmF2RGVza3RvcF9fTmF2aWdhdGlvbl9fXzMyUHlCXCIsXCJOYXZpZ2F0aW9uX19pdGVtXCI6XCJNYWluTmF2RGVza3RvcF9fTmF2aWdhdGlvbl9faXRlbV9fXzEyRTlBXCIsXCJOYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZVwiOlwiTWFpbk5hdkRlc2t0b3BfX05hdmlnYXRpb25fX2l0ZW1fYWN0aXZlX19fMXBNR0VcIixcIk5hdmlnYXRpb25fX2l0ZW1fcGFyZW50X2FjdGl2ZVwiOlwiTWFpbk5hdkRlc2t0b3BfX05hdmlnYXRpb25fX2l0ZW1fcGFyZW50X2FjdGl2ZV9fXzFVekhTXCIsXCJTdWJuYXZpZ2F0aW9uXCI6XCJNYWluTmF2RGVza3RvcF9fU3VibmF2aWdhdGlvbl9fX2lVUDJ2XCIsXCJTdWJuYXZpZ2F0aW9uX19pdGVtXCI6XCJNYWluTmF2RGVza3RvcF9fU3VibmF2aWdhdGlvbl9faXRlbV9fXzJqSFVaXCIsXCJTdWJuYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZVwiOlwiTWFpbk5hdkRlc2t0b3BfX1N1Ym5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlX19fMzFmUU1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL01haW5OYXZEZXNrdG9wL01haW5OYXZEZXNrdG9wLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTZWN0aW9uQ29udGFpbmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBJIGFtIFNlY3Rpb25Db250YWluZXIgY29tcG9uZW50IVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25Db250YWluZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25Db250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFN1YnNlY3Rpb25Db250YWluZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIEkgYW0gU3Vic2VjdGlvbkNvbnRhaW5lciBjb21wb25lbnQhXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Vic2VjdGlvbkNvbnRhaW5lclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU3Vic2VjdGlvbkNvbnRhaW5lci9TdWJzZWN0aW9uQ29udGFpbmVyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQXJ0aWNsZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgSSBhbSBBcnRpY2xlQ29udGFpbmVyIGNvbXBvbmVudCFcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlQ29udGFpbmVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcnRpY2xlQ29udGFpbmVyL0FydGljbGVDb250YWluZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7RmxleCwgTGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluTmF2TW9iaWxlLmNzcydcblxuY29uc3QgTWFpbk5hdk1vYmlsZSA9ICh7XG4gIHJvb3RTZWN0aW9ucyxcbiAgc2VjdGlvbnMsXG4gIHRvZ2dsZU1haW5NZW51LFxuICBtYWluTWVudUlzT3BlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlBhbmVsfVxuICAgICAgICAke21haW5NZW51SXNPcGVuID8gc3R5bGVzLlBhbmVsX29wZW4gOiAnJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5QYW5lbF9faGVhZGVyfT5cbiAgICAgICAgICA8RmxleFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUGFuZWxfX3RpdGxlfT5OYXZpZ2F0aW9uPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuUGFuZWxfX2Nsb3NlQnRufVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNYWluTWVudX0gLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUGFuZWxfX2JvZHl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2aWdhdGlvbn0+XG4gICAgICAgICAgICA8TGlzdCBuPXsxLjV9PlxuICAgICAgICAgICAgICB7cm9vdFNlY3Rpb25zLm1hcChzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3VibmF2aWdhdGlvbiA9ICcnXG4gICAgICAgICAgICAgICAgaWYgKHMuc2VjdGlvblR5cGUgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzdWJzZWN0aW9ucyA9IHNlY3Rpb25zLmZpbHRlcihzdWIgPT4gcy5jaGlsZHJlbi5pbmRleE9mKHN1Yi5faWQpICE9PSAtMSlcblxuICAgICAgICAgICAgICAgICAgc3VibmF2aWdhdGlvbiA9IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TdWJuYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICB7c3Vic2VjdGlvbnMubWFwKHN1YiA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3ViLl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbj17MS41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNYWluTWVudX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5TdWJuYXZpZ2F0aW9uX19pdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLlN1Ym5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgLyR7cy51cmx9LyR7c3ViLnVybH1gfT57c3ViLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNYWluTWVudX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLk5hdmlnYXRpb25fX2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5OYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgLyR7cy51cmx9YH0+e3MudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIHtzdWJuYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAge21haW5NZW51SXNPcGVuXG4gICAgICAgID8gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1haW5NZW51fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuT3ZlcmxheX0gLz5cbiAgICAgICAgKVxuICAgICAgICA6ICcnXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdk1vYmlsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTWFpbk5hdk1vYmlsZS9NYWluTmF2TW9iaWxlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlBhbmVsXCI6XCJNYWluTmF2TW9iaWxlX19QYW5lbF9fXzFUSVVtXCIsXCJQYW5lbF9faGVhZGVyXCI6XCJNYWluTmF2TW9iaWxlX19QYW5lbF9faGVhZGVyX19fM0lhdHNcIixcIlBhbmVsX190aXRsZVwiOlwiTWFpbk5hdk1vYmlsZV9fUGFuZWxfX3RpdGxlX19fM0RXTWxcIixcIlBhbmVsX19ib2R5XCI6XCJNYWluTmF2TW9iaWxlX19QYW5lbF9fYm9keV9fXzFRVW5xXCIsXCJQYW5lbF9fY2xvc2VCdG5cIjpcIk1haW5OYXZNb2JpbGVfX1BhbmVsX19jbG9zZUJ0bl9fXzM0X0xGXCIsXCJQYW5lbF9vcGVuXCI6XCJNYWluTmF2TW9iaWxlX19QYW5lbF9vcGVuX19fMnMxSU5cIixcIk5hdmlnYXRpb25cIjpcIk1haW5OYXZNb2JpbGVfX05hdmlnYXRpb25fX18tMkdWOFwiLFwiTmF2aWdhdGlvbl9faXRlbVwiOlwiTWFpbk5hdk1vYmlsZV9fTmF2aWdhdGlvbl9faXRlbV9fXzN0LTV5XCIsXCJOYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZVwiOlwiTWFpbk5hdk1vYmlsZV9fTmF2aWdhdGlvbl9faXRlbV9hY3RpdmVfX19EQUZ1X1wiLFwiU3VibmF2aWdhdGlvblwiOlwiTWFpbk5hdk1vYmlsZV9fU3VibmF2aWdhdGlvbl9fXzF1VXQtXCIsXCJTdWJuYXZpZ2F0aW9uX19pdGVtXCI6XCJNYWluTmF2TW9iaWxlX19TdWJuYXZpZ2F0aW9uX19pdGVtX19fMXB3R3lcIixcIlN1Ym5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlXCI6XCJNYWluTmF2TW9iaWxlX19TdWJuYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZV9fXzJmRl9wXCIsXCJPdmVybGF5XCI6XCJNYWluTmF2TW9iaWxlX19PdmVybGF5X19fTlhucVdcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL01haW5OYXZNb2JpbGUvTWFpbk5hdk1vYmlsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7dG9nZ2xlTWFpbk1lbnV9IGZyb20gJy4uLy4uL3N0b3JlL3VpQWN0aW9ucydcblxuaW1wb3J0IEhlYWRlckRlc2t0b3AgZnJvbSAnLi4vSGVhZGVyRGVza3RvcCdcbmltcG9ydCBIZWFkZXJNb2JpbGUgZnJvbSAnLi4vSGVhZGVyTW9iaWxlJ1xuXG5jbGFzcyBIZWFkZXJDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHt3aWR0aFRocmVzaG9sZCwgd2luZG93V2lkdGgsIHRvZ2dsZU1haW5NZW51LCBsb2NhdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAod2luZG93V2lkdGggPiB3aWR0aFRocmVzaG9sZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEhlYWRlckRlc2t0b3BcbiAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259IC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxIZWFkZXJNb2JpbGVcbiAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgdG9nZ2xlTWFpbk1lbnU9e3RvZ2dsZU1haW5NZW51fSAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoVGhyZXNob2xkOiBzdGF0ZS51aS53aWR0aFRocmVzaG9sZCxcbiAgICAgIHdpbmRvd1dpZHRoOiBzdGF0ZS51aS53aW5kb3dXaWR0aFxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0b2dnbGVNYWluTWVudTogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVNYWluTWVudSgpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShIZWFkZXJDb250YWluZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9IZWFkZXJDb250YWluZXIvSGVhZGVyQ29udGFpbmVyLmpzeFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUhBO0FBREE7QUFEQTtBQURBOzs7Ozs7O0FDdERBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQW5DQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWJBO0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWEE7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBVkE7QUFZQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBMURBO0FBQ0E7QUE0REE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWNBOzs7Ozs7Ozs7Ozs7O0FDbEdBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFTQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNyQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7QUNsREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7Ozs7Ozs7O0FDOUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFIQTtBQU1BO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBTUE7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFQQTtBQVNBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FDdkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQURBO0FBaUJBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBOzs7O0FBL0JBO0FBQ0E7QUFpQ0E7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFUQTtBQURBO0FBa0JBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBdkNBO0FBQ0E7QUF5Q0E7Ozs7Ozs7QUM5Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBYUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVZBO0FBREE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQTVCQTtBQURBO0FBREE7QUF1Q0E7QUF4Q0E7QUEyQ0E7Ozs7QUF0R0E7QUFDQTtBQXdHQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQXhCQTtBQTJCQTtBQXhDQTtBQUNBO0FBQ0E7QUF3Q0E7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFQQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBcEJBO0FBREE7QUFEQTtBQTZCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFQQTtBQVFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFmQTtBQXFCQTs7OztBQXpEQTtBQUNBO0FBMkRBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7OztBQ25GQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNsQkE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBREE7QUFEQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUEE7QUFEQTtBQURBO0FBbkJBO0FBeUNBO0FBQ0E7Ozs7Ozs7O0FDekRBO0FBQ0E7Ozs7Ozs7QUNEQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBaEJBO0FBQ0E7QUFrQkE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBREE7QUFEQTtBQURBO0FBREE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBTUE7QUFkQTtBQURBO0FBREE7QUFxQkE7QUF0QkE7QUF5QkE7QUFDQTs7Ozs7Ozs7QUMzREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQVBBO0FBREE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUhBO0FBREE7QUFEQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFEQTtBQVFBO0FBVEE7QUFZQTtBQXBDQTtBQURBO0FBREE7QUFkQTtBQTBEQTtBQUdBO0FBQ0E7QUEvREE7QUFxRUE7QUFDQTs7Ozs7Ozs7QUNwRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFoQkE7QUFDQTtBQWtCQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9