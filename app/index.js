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

	var _AppContainer = __webpack_require__(603);

	var _AppContainer2 = _interopRequireDefault(_AppContainer);

	var _SubsectionContainer = __webpack_require__(691);

	var _SubsectionContainer2 = _interopRequireDefault(_SubsectionContainer);

	var _SectionContainer = __webpack_require__(669);

	var _SectionContainer2 = _interopRequireDefault(_SectionContainer);

	var _ArticlePage = __webpack_require__(838);

	var _ArticlePage2 = _interopRequireDefault(_ArticlePage);

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
	      _react2.default.createElement(_reactRouter.IndexRedirect, { to: 'home' }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: ':sectionUrl', component: _SectionContainer2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: 'articles/:articleUrl', component: _ArticlePage2.default }),
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: ':subsectionUrl', component: _SubsectionContainer2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: 'articles/:articleUrl', component: _ArticlePage2.default })
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

	var _searchReducer = __webpack_require__(561);

	var _searchReducer2 = _interopRequireDefault(_searchReducer);

	var _usersReducer = __webpack_require__(597);

	var _usersReducer2 = _interopRequireDefault(_usersReducer);

	var _sectionsReducer = __webpack_require__(599);

	var _sectionsReducer2 = _interopRequireDefault(_sectionsReducer);

	var _uiReducer = __webpack_require__(601);

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
	  question: {
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
	    layout: 's',
	    widthThreshold: 960,
	    mainMenuIsOpen: false
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
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.question : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _questionsActions.REQUEST_QUESTION_CREATE:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _questionsActions.CONFIRM_QUESTION_CREATE:
	      return _extends({}, _initialState2.default.question);
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

	var _commentsActions = __webpack_require__(559);

	var _repliesActions = __webpack_require__(560);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var INIT_ARTICLE = 'INIT_ARTICLE';
	var INIT_COMMENT = 'INIT_COMMENT';

	var newComment = function newComment(state, action) {
	  switch (action.type) {
	    case _commentsActions.REQUEST_COMMENT_CREATE:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _commentsActions.REJECT_COMMENT_CREATE:
	      return _extends({}, state, {
	        isUpdating: false,
	        errors: action.errors
	      });
	    case _commentsActions.CONFIRM_COMMENT_CREATE:
	      return _extends({}, _initialState2.default.newComment);
	    default:
	      return state;
	  }
	};

	var newReply = function newReply(state, action) {
	  switch (action.type) {
	    case _repliesActions.REQUEST_REPLY_CREATE:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _repliesActions.REJECT_REPLY_CREATE:
	      return _extends({}, state, {
	        isUpdating: false,
	        errors: action.errors
	      });
	    case _repliesActions.CONFIRM_REPLY_CREATE:
	      return _extends({}, _initialState2.default.newComment);
	    default:
	      return state;
	  }
	};

	var comment = function comment(state, action) {
	  switch (action.type) {
	    case INIT_COMMENT:
	      return _extends({}, action.comment, {
	        newReply: newReply(_extends({}, _initialState2.default.newComment), action)
	      });
	    case _commentsActions.CONFIRM_COMMENT_CREATE:
	      if (state._id === action.commentId) {
	        return _extends({}, action.comment, {
	          newReply: newReply(_extends({}, _initialState2.default.newComment), action)
	        });
	      } else {
	        return state;
	      }
	    case _repliesActions.CONFIRM_REPLY_CREATE:
	      if (state._id === action.commentId) {
	        return _extends({}, state, {
	          newReply: newReply(state.newReply, action),
	          replies: [].concat(_toConsumableArray(state.replies), [action.reply])
	        });
	      } else {
	        return state;
	      }
	    case _repliesActions.REQUEST_REPLY_CREATE:
	    case _repliesActions.REJECT_REPLY_CREATE:
	      if (state._id === action.commentId) {
	        return _extends({}, state, {
	          newReply: newReply(state.newReply, action)
	        });
	      } else {
	        return state;
	      }
	    default:
	      return state;
	  }
	};

	var article = function article(state, action) {
	  switch (action.type) {
	    case INIT_ARTICLE:
	      return _extends({}, action.article, {
	        comments: action.article.comments.map(function (c) {
	          return comment(undefined, {
	            type: INIT_COMMENT,
	            comment: c
	          });
	        }),
	        newComment: newComment(_extends({}, _initialState2.default.newComment), action)
	      });
	    case _commentsActions.CONFIRM_COMMENT_CREATE:
	      if (state._id === action.articleId) {
	        return _extends({}, state, {
	          newComment: newComment(state.newComment, action),
	          comments: [].concat(_toConsumableArray(state.comments), [comment(undefined, {
	            type: INIT_COMMENT,
	            comment: action.comment
	          })])
	        });
	      } else {
	        return state;
	      }
	    case _commentsActions.REQUEST_COMMENT_CREATE:
	    case _commentsActions.REJECT_COMMENT_CREATE:
	      if (state._id === action.articleId) {
	        return _extends({}, state, {
	          newComment: newComment(state.newComment, action)
	        });
	      } else {
	        return state;
	      }
	    case _repliesActions.REQUEST_REPLY_CREATE:
	    case _repliesActions.CONFIRM_REPLY_CREATE:
	    case _repliesActions.REJECT_REPLY_CREATE:
	      if (state._id === action.articleId) {
	        return _extends({}, state, {
	          comments: state.comments.map(function (c) {
	            return comment(c, action);
	          })
	        });
	      } else {
	        return state;
	      }
	    default:
	      return state;
	  }
	};

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
	        items: action.items.map(function (i) {
	          return article(undefined, {
	            type: INIT_ARTICLE,
	            article: i
	          });
	        })
	      });
	    case _commentsActions.REQUEST_COMMENT_CREATE:
	    case _commentsActions.REJECT_COMMENT_CREATE:
	    case _commentsActions.CONFIRM_COMMENT_CREATE:
	    case _repliesActions.REQUEST_REPLY_CREATE:
	    case _repliesActions.CONFIRM_REPLY_CREATE:
	    case _repliesActions.REJECT_REPLY_CREATE:
	      return _extends({}, state, {
	        items: state.items.map(function (i) {
	          return article(i, action);
	        })
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
	exports.createComment = exports.REJECT_COMMENT_CREATE = exports.CONFIRM_COMMENT_CREATE = exports.REQUEST_COMMENT_CREATE = undefined;

	__webpack_require__(551);

	var _flashActions = __webpack_require__(552);

	var _authActions = __webpack_require__(550);

	var REQUEST_COMMENT_CREATE = exports.REQUEST_COMMENT_CREATE = 'REQUEST_COMMENT_CREATE';
	var CONFIRM_COMMENT_CREATE = exports.CONFIRM_COMMENT_CREATE = 'CONFIRM_COMMENT_CREATE';
	var REJECT_COMMENT_CREATE = exports.REJECT_COMMENT_CREATE = 'REJECT_COMMENT_CREATE';

	var requestCreate = function requestCreate(articleId) {
	  return {
	    type: REQUEST_COMMENT_CREATE,
	    articleId: articleId
	  };
	};

	var confirmCreate = function confirmCreate(comment, articleId) {
	  return {
	    type: CONFIRM_COMMENT_CREATE,
	    comment: comment,
	    articleId: articleId
	  };
	};

	var rejectCreate = function rejectCreate(errors, articleId) {
	  return {
	    type: REJECT_COMMENT_CREATE,
	    errors: errors,
	    articleId: articleId
	  };
	};

	var createComment = exports.createComment = function createComment(data, articleId, successMessage) {
	  return function (dispatch, getState) {
	    dispatch(requestCreate(articleId));

	    fetch(("https://localhost.com") + '/articles/' + articleId + '/comments/', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        comment: data
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
	        dispatch(confirmCreate(json.data.comment, articleId));
	        if (successMessage) {
	          dispatch((0, _flashActions.flashMessage)(successMessage, 'log'));
	        }
	      } else if (json.data.name === 'ValidationError') {
	        var payload = {};

	        for (var prop in json.data.errors) {
	          var propComponents = prop.split('.');
	          var commentProp = propComponents[propComponents.length - 1];
	          payload[commentProp] = json.data.errors[prop].message;
	        }

	        dispatch(rejectCreate(payload, articleId));
	        dispatch((0, _flashActions.flashMessage)('Could not post comment due to errors', 'error'));
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

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createReply = exports.REJECT_REPLY_CREATE = exports.CONFIRM_REPLY_CREATE = exports.REQUEST_REPLY_CREATE = undefined;

	__webpack_require__(551);

	var _flashActions = __webpack_require__(552);

	var _authActions = __webpack_require__(550);

	var REQUEST_REPLY_CREATE = exports.REQUEST_REPLY_CREATE = 'REQUEST_REPLY_CREATE';
	var CONFIRM_REPLY_CREATE = exports.CONFIRM_REPLY_CREATE = 'CONFIRM_REPLY_CREATE';
	var REJECT_REPLY_CREATE = exports.REJECT_REPLY_CREATE = 'REJECT_REPLY_CREATE';

	var requestCreate = function requestCreate(articleId, commentId) {
	  return {
	    type: REQUEST_REPLY_CREATE,
	    articleId: articleId,
	    commentId: commentId
	  };
	};

	var confirmCreate = function confirmCreate(reply, articleId, commentId) {
	  return {
	    type: CONFIRM_REPLY_CREATE,
	    reply: reply,
	    articleId: articleId,
	    commentId: commentId
	  };
	};

	var rejectCreate = function rejectCreate(errors, articleId, commentId) {
	  return {
	    type: REJECT_REPLY_CREATE,
	    errors: errors,
	    articleId: articleId,
	    commentId: commentId
	  };
	};

	var createReply = exports.createReply = function createReply(data, articleId, commentId, successMessage) {
	  return function (dispatch, getState) {
	    dispatch(requestCreate(articleId, commentId));

	    fetch(("https://localhost.com") + '/articles/' + articleId + '/comments/' + commentId + '/replies', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        reply: data
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
	        dispatch(confirmCreate(json.data.reply, articleId, commentId));
	        if (successMessage) {
	          dispatch((0, _flashActions.flashMessage)(successMessage, 'log'));
	        }
	      } else if (json.data.name === 'ValidationError') {
	        var payload = {};

	        for (var prop in json.data.errors) {
	          var propComponents = prop.split('.');
	          var replyProp = propComponents[propComponents.length - 1];
	          payload[replyProp] = json.data.errors[prop].message;
	        }

	        dispatch(rejectCreate(payload, articleId, commentId));
	        dispatch((0, _flashActions.flashMessage)('Could not post comment due to errors', 'error'));
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

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _searchActions = __webpack_require__(562);

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

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchSearchResults = exports.setSearchQuery = exports.SET_SEARCH_QUERY = exports.RECEIVE_SEARCH_RESULTS = exports.REQUEST_SEARCH_RESULTS = undefined;

	var _algoliaSearch = __webpack_require__(563);

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

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _algoliasearch = __webpack_require__(564);

	var _algoliasearch2 = _interopRequireDefault(_algoliasearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var client = (0, _algoliasearch2.default)('74S1JNB1ZT', '3de6fdbafc477cf019673bb81043ae0d');
	var index = client.initIndex('pages');

	exports.default = index;

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _usersActions = __webpack_require__(598);

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

/***/ 598:
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

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _sectionsActions = __webpack_require__(600);

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

/***/ 600:
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

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _uiActions = __webpack_require__(602);

	var _initialState = __webpack_require__(553);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ui = function ui() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.ui : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _uiActions.SET_BREAKPOINT:
	      return _extends({}, state, {
	        windowWidth: action.width,
	        layout: action.layout
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

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toggleMainMenu = exports.setBreakpoint = exports.TOGGLE_MAIN_MENU = exports.SET_BREAKPOINT = undefined;

	__webpack_require__(551);

	var SET_BREAKPOINT = exports.SET_BREAKPOINT = 'SET_BREAKPOINT';
	var TOGGLE_MAIN_MENU = exports.TOGGLE_MAIN_MENU = 'TOGGLE_MAIN_MENU';

	var setBreakpoint = exports.setBreakpoint = function setBreakpoint(width, layout) {
	  return {
	    type: SET_BREAKPOINT,
	    width: width,
	    layout: layout
	  };
	};

	var toggleMainMenu = exports.toggleMainMenu = function toggleMainMenu() {
	  return {
	    type: TOGGLE_MAIN_MENU
	  };
		};

/***/ },

/***/ 603:
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

	var _sectionsActions = __webpack_require__(600);

	var _uiActions = __webpack_require__(602);

	var _Loading = __webpack_require__(604);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Login = __webpack_require__(648);

	var _Login2 = _interopRequireDefault(_Login);

	var _App = __webpack_require__(650);

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
	      var setBreakpoint = this.props.setBreakpoint;

	      var windowWidth = window.outerWidth;

	      var layout = 's';
	      if (windowWidth >= 700 && windowWidth < 1000) {
	        layout = 'm';
	      } else if (windowWidth >= 1000 && windowWidth < 1300) {
	        layout = 'l';
	      } else if (windowWidth >= 1300) {
	        layout = 'xl';
	      }

	      setBreakpoint(windowWidth, layout);
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
	    setBreakpoint: function setBreakpoint(width, layout) {
	      dispatch((0, _uiActions.setBreakpoint)(width, layout));
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

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Loading = __webpack_require__(605);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(606);

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

/***/ 605:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Loading":"Loading__Loading___3pycz"};

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = exports.Alert = exports.Breadcrumbs = exports.TextArea = exports.TextInput = exports.Link = exports.Button = exports.Spinner = exports.LinkButton = undefined;

	var _Alert = __webpack_require__(607);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Breadcrumbs = __webpack_require__(626);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _Button = __webpack_require__(628);

	var _Button2 = _interopRequireDefault(_Button);

	var _LinkButton = __webpack_require__(630);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _ModalWindow = __webpack_require__(632);

	var _Link = __webpack_require__(634);

	var _Link2 = _interopRequireDefault(_Link);

	var _Spinner = __webpack_require__(636);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _TextArea = __webpack_require__(638);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _TextInput = __webpack_require__(646);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.LinkButton = _LinkButton2.default;
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

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Alert = __webpack_require__(608);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Layouts = __webpack_require__(609);

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

/***/ 608:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Alert":"Alert__Alert___37_QC","Alert__message":"Alert__Alert__message___2wCZF","Alert__message_default":"Alert__Alert__message_default___n_R9C","Alert__message_error":"Alert__Alert__message_error___2id4W","alert-enter":"Alert__alert-enter___K6JdL","alert-enter-active":"Alert__alert-enter-active___3vlCw","alert-leave":"Alert__alert-leave___2PpYT","alert-leave-active":"Alert__alert-leave-active___2ha_Q"};

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LabeledInput = exports.InputDecorator = exports.PageContent = exports.Page = exports.MediaFigure = exports.MediaBody = exports.Media = exports.ListInlineItem = exports.ListInline = exports.ListItem = exports.List = exports.GridItem = exports.Grid = exports.Wrap = exports.Flex = exports.Block = undefined;

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Flex = __webpack_require__(611);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Grid = __webpack_require__(612);

	var _List = __webpack_require__(614);

	var _ListInline = __webpack_require__(616);

	var _Media = __webpack_require__(618);

	var _Page = __webpack_require__(620);

	var _Wrap = __webpack_require__(621);

	var _Wrap2 = _interopRequireDefault(_Wrap);

	var _InputDecorator = __webpack_require__(622);

	var _InputDecorator2 = _interopRequireDefault(_InputDecorator);

	var _LabeledInput = __webpack_require__(624);

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

/***/ 610:
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
	  var children = _ref.children;

	  var style = {
	    marginBottom: baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    children
	  );
	};

	exports.default = Block;

/***/ },

/***/ 611:
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

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GridItem = exports.Grid = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Grid = __webpack_require__(613);

	var _Grid2 = _interopRequireDefault(_Grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;

	var Grid = function Grid(_ref) {
	  var _ref$gutterBottom = _ref.gutterBottom;
	  var gutterBottom = _ref$gutterBottom === undefined ? 3 : _ref$gutterBottom;
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'stretch' : _ref$alignItems;
	  var _ref$justifyContent = _ref.justifyContent;
	  var justifyContent = _ref$justifyContent === undefined ? 'space-between' : _ref$justifyContent;
	  var _ref$alignContent = _ref.alignContent;
	  var alignContent = _ref$alignContent === undefined ? 'space-between' : _ref$alignContent;
	  var children = _ref.children;

	  var style = {
	    alignItems: alignItems,
	    justifyContent: justifyContent,
	    alignContent: alignContent,
	    marginBottom: '-' + gutterBottom * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: _Grid2.default.Grid },
	    children
	  );
	};

	var GridItem = function GridItem(_ref2) {
	  var _ref2$span = _ref2.span;
	  var span = _ref2$span === undefined ? 0 : _ref2$span;
	  var _ref2$outOf = _ref2.outOf;
	  var outOf = _ref2$outOf === undefined ? 12 : _ref2$outOf;
	  var _ref2$gutter = _ref2.gutter;
	  var gutter = _ref2$gutter === undefined ? 3 : _ref2$gutter;
	  var _ref2$gutterBottom = _ref2.gutterBottom;
	  var gutterBottom = _ref2$gutterBottom === undefined ? 3 : _ref2$gutterBottom;
	  var children = _ref2.children;

	  var style = {
	    flex: '1',
	    marginBottom: gutterBottom * baseline + 'rem'
	  };

	  if (span && outOf) {
	    style = _extends({}, style, {
	      flex: '0 0 auto',
	      width: span === outOf ? '100%' : 100 * span / outOf - gutter + '%'
	    });
	  }

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: _Grid2.default.GridItem },
	    children
	  );
	};

	exports.Grid = Grid;
		exports.GridItem = GridItem;

/***/ },

/***/ 613:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Grid":"Grid__Grid___27qPn"};

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItem = exports.List = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(615);

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

/***/ 615:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"List__list___2kBUd","list__item":"List__list__item___1D2VF"};

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListInlineItem = exports.ListInline = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _ListInline = __webpack_require__(617);

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

/***/ 617:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"listInline":"ListInline__listInline___3Gjhu","listInline__item":"ListInline__listInline__item___2K1kQ"};

/***/ },

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MediaFigure = exports.MediaBody = exports.Media = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Media = __webpack_require__(619);

	var _Media2 = _interopRequireDefault(_Media);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Media = function Media(_ref) {
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'flex-start' : _ref$alignItems;
	  var children = _ref.children;

	  var style = {
	    alignItems: alignItems
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: _Media2.default.media },
	    children
	  );
	};

	var MediaBody = function MediaBody(_ref2) {
	  var children = _ref2.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Media2.default.media__body },
	    children
	  );
	};

	var MediaFigure = function MediaFigure(_ref3) {
	  var _ref3$n = _ref3.n;
	  var n = _ref3$n === undefined ? 1 : _ref3$n;
	  var _ref3$nl = _ref3.nl;
	  var nl = _ref3$nl === undefined ? 0 : _ref3$nl;
	  var children = _ref3.children;

	  var style = {
	    marginRight: baseline * n + 'rem',
	    marginLeft: baseline * nl + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: _Media2.default.media__figure },
	    children
	  );
	};

	exports.Media = Media;
	exports.MediaBody = MediaBody;
		exports.MediaFigure = MediaFigure;

/***/ },

/***/ 619:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"media":"Media__media___3a00G","media__figure":"Media__media__figure___24ZwA","media__body":"Media__media__body___3Vd2-"};

/***/ },

/***/ 620:
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

/***/ 621:
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

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _InputDecorator = __webpack_require__(623);

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

/***/ 623:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InputDecorator":"InputDecorator__InputDecorator___8oCVm","InputDecorator__prefix":"InputDecorator__InputDecorator__prefix___3mFvH","InputDecorator__input":"InputDecorator__InputDecorator__input___vnZwv","InputDecorator__suffix":"InputDecorator__InputDecorator__suffix___3EcKq"};

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _LabeledInput = __webpack_require__(625);

	var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

	var _Flex = __webpack_require__(611);

	var _Flex2 = _interopRequireDefault(_Flex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LabeledInput = function LabeledInput(_ref) {
	  var input = _ref.input;
	  var label = _ref.label;
	  var _ref$error = _ref.error;
	  var error = _ref$error === undefined ? false : _ref$error;
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
	      _Flex2.default,
	      {
	        justifyContent: 'space-between',
	        alignItems: 'center' },
	      _react2.default.createElement(
	        'div',
	        { className: _LabeledInput2.default.LabeledInput__label },
	        label
	      ),
	      error ? _react2.default.createElement(
	        'div',
	        { className: _LabeledInput2.default.LabeledInput__error },
	        error
	      ) : ''
	    ),
	    input
	  );
	};

	exports.default = LabeledInput;

/***/ },

/***/ 625:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"LabeledInput":"LabeledInput__LabeledInput___3_l2R","LabeledInput__label":"LabeledInput__LabeledInput__label___2_e9s","LabeledInput__error":"LabeledInput__LabeledInput__error___1GWoQ","LabeledInput_inverse":"LabeledInput__LabeledInput_inverse___58U4R"};

/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Breadcrumbs = __webpack_require__(627);

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

/***/ 627:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Breadcrumbs":"Breadcrumbs__Breadcrumbs___2WLj0","Breadcrumbs__item":"Breadcrumbs__Breadcrumbs__item___1DayI"};

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Button = __webpack_require__(629);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Button = function Button(_ref) {
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'accent1' : _ref$theme;
	  var _ref$hasPrefix = _ref.hasPrefix;
	  var hasPrefix = _ref$hasPrefix === undefined ? false : _ref$hasPrefix;
	  var _ref$hasSuffix = _ref.hasSuffix;
	  var hasSuffix = _ref$hasSuffix === undefined ? false : _ref$hasSuffix;

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        className: _Button2.default.Button + '\n        ' + (theme === 'accent1' ? _Button2.default.Button_accent1 : null) + '\n        ' + (theme === 'accent2' ? _Button2.default.Button_accent2 : null) + '\n        ' + (hasPrefix ? _Button2.default.Button_hasPrefix : null) + '\n        ' + (hasSuffix ? _Button2.default.Button_hasSuffix : null),
	        to: to },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'button',
	      {
	        className: _Button2.default.Button + '\n        ' + (theme === 'accent1' ? _Button2.default.Button_accent1 : null) + '\n        ' + (theme === 'accent2' ? _Button2.default.Button_accent2 : null) + '\n        ' + (hasPrefix ? _Button2.default.Button_hasPrefix : null) + '\n        ' + (hasSuffix ? _Button2.default.Button_hasSuffix : null),
	        disabled: disabled,
	        onClick: onClick },
	      children
	    );
	  }
	};

	exports.default = Button;

/***/ },

/***/ 629:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Button":"Button__Button___QI7b2","Button_accent1":"Button__Button_accent1___1dfhw","Button_accent2":"Button__Button_accent2___Zn8z9","Button_hasPrefix":"Button__Button_hasPrefix___izKZq","Buttom_hasSuffix":"Button__Buttom_hasSuffix___HWXla"};

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _LinkButton = __webpack_require__(631);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LinkButton = function LinkButton(_ref) {
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'accent1' : _ref$theme;

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        className: _LinkButton2.default.LinkButton + '\n        ' + (theme === 'accent1' ? _LinkButton2.default.LinkButton_accent1 : null) + '\n        ' + (theme === 'accent2' ? _LinkButton2.default.LinkButton_accent2 : null),
	        disabled: disabled,
	        to: to },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'button',
	      {
	        className: _LinkButton2.default.LinkButton + '\n        ' + (theme === 'accent1' ? _LinkButton2.default.LinkButton_accent1 : null) + '\n        ' + (theme === 'accent2' ? _LinkButton2.default.LinkButton_accent2 : null),
	        disabled: disabled,
	        onClick: onClick },
	      children
	    );
	  }
	};

	exports.default = LinkButton;

/***/ },

/***/ 631:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"LinkButton":"LinkButton__LinkButton___2Flim","LinkButton_accent1":"LinkButton__LinkButton_accent1___2lc1T","LinkButton_accent2":"LinkButton__LinkButton_accent2___1zfwO"};

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _ModalWindow = __webpack_require__(633);

	var _ModalWindow2 = _interopRequireDefault(_ModalWindow);

	var _Layouts = __webpack_require__(609);

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

/***/ 633:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Modal":"ModalWindow__Modal___2klcg","ModalWindow":"ModalWindow__ModalWindow___2tVyZ","ModalWindow__header":"ModalWindow__ModalWindow__header___1QrWH","ModalWindow__body":"ModalWindow__ModalWindow__body___3QuQh","ModalWindow__footer":"ModalWindow__ModalWindow__footer___2I0TF"};

/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Link = __webpack_require__(635);

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
	        activeClassName: _Link2.default.Link_active,
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

/***/ 635:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Link":"Link__Link___3isgY","Link_accent":"Link__Link_accent___A81HH","Link_error":"Link__Link_error___2hKKc"};

/***/ },

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(637);

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

/***/ 637:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Spinner":"Spinner__Spinner___1fiyk","Spinner__inner":"Spinner__Spinner__inner___58vcT","Spinner__circle":"Spinner__Spinner__circle___2ZugO","sk-circleFadeDelay":"Spinner__sk-circleFadeDelay___1Etn8","Spinner__circle1":"Spinner__Spinner__circle1___BOD7n","Spinner__circle2":"Spinner__Spinner__circle2___2aBtr","Spinner__circle3":"Spinner__Spinner__circle3___1BaZf","Spinner__circle4":"Spinner__Spinner__circle4___3V5r7","Spinner__circle5":"Spinner__Spinner__circle5___3DJ5X","Spinner__circle6":"Spinner__Spinner__circle6___ZpU5m","Spinner__circle7":"Spinner__Spinner__circle7___XpnK5","Spinner__circle8":"Spinner__Spinner__circle8___1_RRX","Spinner__circle9":"Spinner__Spinner__circle9___fO0OG","Spinner__circle10":"Spinner__Spinner__circle10___ni35A","Spinner__circle11":"Spinner__Spinner__circle11___1hav9","Spinner__circle12":"Spinner__Spinner__circle12___2ipzT"};

/***/ },

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _anchorme = __webpack_require__(639);

	var _striptags = __webpack_require__(640);

	var _striptags2 = _interopRequireDefault(_striptags);

	var _reactTextareaAutosize = __webpack_require__(641);

	var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

	var _InputLabel = __webpack_require__(643);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _TextArea = __webpack_require__(645);

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
	      var error = _props.error;
	      var value = _props.value;
	      var placeholder = _props.placeholder;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;


	      return _react2.default.createElement(_reactTextareaAutosize2.default, { ref: function ref(el) {
	          _this2._element = el;
	        },
	        value: htmlToPlain(value),
	        className: _TextArea2.default.TextArea + ' ' + (error ? _TextArea2.default.TextArea_error : null),
	        disabled: disabled,
	        minRows: 5,
	        onChange: this.onChange,
	        placeholder: placeholder });
	    }
	  }]);

	  return TextArea;
	}(_react2.default.Component);

		exports.default = TextArea;

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(644);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _Layouts = __webpack_require__(609);

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

/***/ 644:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InputLabel":"InputLabel__InputLabel___1CemI","InputLabel__label":"InputLabel__InputLabel__label___2Yy_P","InputLabel__error":"InputLabel__InputLabel__error___2MFNd","InputLabel_error":"InputLabel__InputLabel_error___3Ep5q"};

/***/ },

/***/ 645:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextArea":"TextArea__TextArea___19ip7","TextArea_error":"TextArea__TextArea_error___1TuAz"};

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _TextInput = __webpack_require__(647);

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

/***/ 647:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextInput":"TextInput__TextInput___1ACGY","TextInput_error":"TextInput__TextInput_error___2fnRn","TextInput_inverse":"TextInput__TextInput_inverse___3A-x8","TextInput_withPrefix":"TextInput__TextInput_withPrefix___2-Gw3","TextInput_withSuffix":"TextInput__TextInput_withSuffix___1ZTNQ"};

/***/ },

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Layouts = __webpack_require__(609);

	var _UI = __webpack_require__(606);

	var _FlashMessage = __webpack_require__(649);

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

/***/ 649:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(606);

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

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(651);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(659);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _FlashMessage = __webpack_require__(649);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _MainNav = __webpack_require__(665);

	var _MainNav2 = _interopRequireDefault(_MainNav);

	var _Layouts = __webpack_require__(609);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(_ref) {
	  var children = _ref.children;
	  var location = _ref.location;
	  var params = _ref.params;

	  return _react2.default.createElement(
	    _Layouts.Page,
	    null,
	    _react2.default.createElement(_Header2.default, { location: location }),
	    _react2.default.createElement(_MainNav2.default, { params: params }),
	    _react2.default.createElement(
	      _Layouts.PageContent,
	      null,
	      children
	    ),
	    _react2.default.createElement(_Footer2.default, null),
	    _react2.default.createElement(_FlashMessage2.default, null)
	  );
	};

	exports.default = App;

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _SearchBar = __webpack_require__(652);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _Header = __webpack_require__(654);

	var _Header2 = _interopRequireDefault(_Header);

	var _Layouts = __webpack_require__(609);

	var _Locale = __webpack_require__(655);

	var _Locale2 = _interopRequireDefault(_Locale);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Grid = __webpack_require__(612);

	var _logo = __webpack_require__(658);

	var _logo2 = _interopRequireDefault(_logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = function Header(_ref) {
	  var location = _ref.location;
	  var layout = _ref.layout;

	  var gridSize = 0;
	  var sitenameSpan = 0;
	  var searchSpan = 0;

	  switch (layout) {
	    case 's':
	    case 'm':
	      gridSize = 1;
	      sitenameSpan = 1;
	      searchSpan = 1;
	      break;
	    case 'l':
	    case 'xl':
	      gridSize = 3;
	      sitenameSpan = 2;
	      searchSpan = 1;
	      break;
	    default:
	      console.error('unexpected layout type ' + layout);
	  }
	  return _react2.default.createElement(
	    'header',
	    { className: _Header2.default.Header },
	    _react2.default.createElement(
	      _Wrapper2.default,
	      null,
	      _react2.default.createElement(
	        _Grid.Grid,
	        {
	          alignItems: 'flex-end',
	          gutter: 0,
	          gutterBottom: 2 },
	        _react2.default.createElement(
	          _Grid.GridItem,
	          {
	            span: sitenameSpan,
	            outOf: gridSize,
	            gutter: 0,
	            gutterBottom: 2 },
	          _react2.default.createElement(
	            _Layouts.Media,
	            { alignItems: 'flex-end' },
	            _react2.default.createElement(
	              _Layouts.MediaFigure,
	              { n: '1.5' },
	              _react2.default.createElement('img', {
	                src: _logo2.default,
	                className: _Header2.default.Header__logo })
	            ),
	            _react2.default.createElement(
	              _Layouts.MediaBody,
	              null,
	              _react2.default.createElement(
	                _Layouts.Flex,
	                null,
	                _react2.default.createElement(
	                  'h1',
	                  { className: _Header2.default.Header__title },
	                  'Vaccine Answers'
	                ),
	                _react2.default.createElement(_Locale2.default, null)
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _Header2.default.Header__subtitle },
	                'A reliable source of information about vaccines in Canada'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Grid.GridItem,
	          {
	            span: searchSpan,
	            outOf: gridSize,
	            gutter: 0,
	            gutterBottom: 2 },
	          _react2.default.createElement(_SearchBar2.default, { location: location })
	        )
	      )
	    )
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    layout: state.ui.layout
	  };
		})(Header);

/***/ },

/***/ 652:
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

	var _searchActions = __webpack_require__(562);

	var _UI = __webpack_require__(606);

	var _Layouts = __webpack_require__(609);

	var _SearchBar = __webpack_require__(653);

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

/***/ 653:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SearchBar":"SearchBar__SearchBar___dtdTh"};

/***/ },

/***/ 654:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Header":"Header__Header___oE2FH","Header__logo":"Header__Header__logo___1rqU_","Header__title":"Header__Header__title___2tixa","Header__subtitle":"Header__Header__subtitle____Z_OB","Header__search":"Header__Header__search___16KbM"};

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Locale = __webpack_require__(656);

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

/***/ 656:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Locale":"Locale__Locale___1CTBp"};

/***/ },

/***/ 657:
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
	  var _ref$maxWidth = _ref.maxWidth;
	  var maxWidth = _ref$maxWidth === undefined ? 90 : _ref$maxWidth;
	  var _ref$width = _ref.width;
	  var width = _ref$width === undefined ? 90 : _ref$width;

	  var style = {
	    width: width + '%',
	    maxWidth: maxWidth + 'rem',
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

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.96a61176db54e227423626799744201e.svg";

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Footer = __webpack_require__(660);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Box = __webpack_require__(661);

	var _Box2 = _interopRequireDefault(_Box);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Flex = __webpack_require__(611);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _ListOfArticles = __webpack_require__(662);

	var _ListOfArticles2 = _interopRequireDefault(_ListOfArticles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Footer = function Footer(_ref) {
	  var articles = _ref.articles;

	  return _react2.default.createElement(
	    'div',
	    { className: _Footer2.default.Footer },
	    _react2.default.createElement(
	      _Wrapper2.default,
	      null,
	      _react2.default.createElement(
	        _Box2.default,
	        { n: 2 },
	        _react2.default.createElement(
	          _Flex2.default,
	          { justifyContent: 'space-between' },
	          _react2.default.createElement(
	            'div',
	            { className: _Footer2.default.Footer__text },
	            'Vaccine Answers © 2017'
	          ),
	          _react2.default.createElement(_ListOfArticles2.default, {
	            n: 1.5,
	            inverse: true,
	            small: true,
	            articles: articles,
	            layout: 'inline' })
	        )
	      )
	    )
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  var footerSection = state.sections.items.find(function (s) {
	    return s.customId === 'footer-nav';
	  });
	  var footerArticles = footerSection.articles.map(function (a) {
	    return state.articles.items.find(function (art) {
	      return art._id === a;
	    });
	  });

	  return {
	    articles: footerArticles
	  };
		})(Footer);

/***/ },

/***/ 660:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Footer":"Footer__Footer___268PT","Footer__text":"Footer__Footer__text___c0zmD"};

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

	var baseline = 0.750;

	var Box = function Box(_ref) {
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$nh = _ref.nh;
	  var nh = _ref$nh === undefined ? 0 : _ref$nh;
	  var children = _ref.children;

	  var style = {
	    paddingTop: baseline * n + 'rem',
	    paddingBottom: baseline * n + 'rem',
	    paddingLeft: baseline * nh + 'rem',
	    paddingRight: baseline * nh + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    children
	  );
	};

	exports.default = Box;

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Link = __webpack_require__(663);

	var _Link2 = _interopRequireDefault(_Link);

	var _Heading = __webpack_require__(680);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _List = __webpack_require__(614);

	var _ListInline = __webpack_require__(616);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var ListOfArticles = function ListOfArticles(_ref) {
	  var articleEntries = _ref.articleEntries;
	  var _ref$layout = _ref.layout;
	  var layout = _ref$layout === undefined ? 'stacked' : _ref$layout;
	  var _ref$inverse = _ref.inverse;
	  var inverse = _ref$inverse === undefined ? false : _ref$inverse;
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$small = _ref.small;
	  var small = _ref$small === undefined ? false : _ref$small;

	  if (layout === 'stacked') {
	    return _react2.default.createElement(
	      _List.List,
	      { n: n },
	      articleEntries.map(function (entry, index) {
	        var entryEl = '';
	        if (entry.article.articleType === 'heading') {
	          entryEl = _react2.default.createElement(
	            _Heading2.default,
	            null,
	            entry.article.title
	          );
	        } else if (entry.article.articleType === 'article') {
	          entryEl = _react2.default.createElement(
	            _Link2.default,
	            {
	              small: small,
	              inverse: inverse,
	              to: entry.url },
	            entry.article.title
	          );
	        } else {
	          console.error('unexpected article type ' + entry.article.articleType);
	        }

	        return _react2.default.createElement(
	          _List.ListItem,
	          {
	            n: n,
	            key: index },
	          entryEl
	        );
	      })
	    );
	  } else if (layout === 'inline') {
	    return _react2.default.createElement(
	      _ListInline.ListInline,
	      { n: n },
	      articleEntries.map(function (entry, index) {
	        var entryEl = '';
	        if (entry.article.articleType === 'heading') {
	          entryEl = _react2.default.createElement(
	            _Heading2.default,
	            null,
	            entry.article.title
	          );
	        } else if (entry.article.articleType === 'article') {
	          entryEl = _react2.default.createElement(
	            _Link2.default,
	            {
	              small: small,
	              inverse: inverse,
	              to: entry.url },
	            entry.article.title
	          );
	        } else {
	          console.error('unexpected article type ' + entry.article.articleType);
	        }

	        return _react2.default.createElement(
	          _ListInline.ListInlineItem,
	          {
	            key: index,
	            n: n },
	          entryEl
	        );
	      })
	    );
	  }
	};

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var articleEntries = [];

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    var _loop = function _loop() {
	      var article = _step.value;

	      var parents = [];

	      var currentParent = state.sections.items.find(function (s) {
	        return s._id === article.parent;
	      });
	      while (currentParent && !currentParent.meta) {
	        parents = [currentParent.url].concat(_toConsumableArray(parents));
	        currentParent = state.sections.items.find(function (s) {
	          return s._id === currentParent.parent;
	        });
	      }

	      var articleUrl = '/' + parents.join('/') + '/articles/' + article.url;

	      articleEntries.push({
	        article: article,
	        url: articleUrl
	      });
	    };

	    for (var _iterator = ownProps.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      _loop();
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  return {
	    articleEntries: articleEntries
	  };
		})(ListOfArticles);

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Link = __webpack_require__(664);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Link = function Link(_ref) {
	  var href = _ref.href;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$inverse = _ref.inverse;
	  var inverse = _ref$inverse === undefined ? false : _ref$inverse;
	  var _ref$small = _ref.small;
	  var small = _ref$small === undefined ? false : _ref$small;
	  var children = _ref.children;

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        className: _Link2.default.Link + '\n          ' + (inverse ? _Link2.default.Link_inverse : '') + '\n          ' + (small ? _Link2.default.Link_small : ''),
	        activeClassName: _Link2.default.Link_active,
	        to: to
	      },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'a',
	      {
	        className: _Link2.default.Link + '\n          ' + (inverse ? _Link2.default.Link_inverse : '') + '\n          ' + (small ? _Link2.default.Link_small : ''),
	        href: href },
	      children
	    );
	  }
	};

	exports.default = Link;

/***/ },

/***/ 664:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Link":"Link__Link___1kMBk","Link_active":"Link__Link_active___3tau-","Link_inverse":"Link__Link_inverse___32JA8","Link_small":"Link__Link_small___1-Xvh"};

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _reactRedux = __webpack_require__(470);

	var _Select = __webpack_require__(666);

	var _Select2 = _interopRequireDefault(_Select);

	var _Flex = __webpack_require__(611);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Box = __webpack_require__(661);

	var _Box2 = _interopRequireDefault(_Box);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _MainNav = __webpack_require__(668);

	var _MainNav2 = _interopRequireDefault(_MainNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainNav = function (_React$Component) {
	  _inherits(MainNav, _React$Component);

	  function MainNav(props) {
	    _classCallCheck(this, MainNav);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MainNav).call(this, props));

	    _this.navigate = _this.navigate.bind(_this);
	    return _this;
	  }

	  _createClass(MainNav, [{
	    key: 'navigate',
	    value: function navigate(url) {
	      _reactRouter.hashHistory.push(url);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var params = _props.params;
	      var layout = _props.layout;
	      var sections = _props.sections;

	      var metaSection = sections.find(function (s) {
	        return s.meta && s.url === 'main-nav';
	      });
	      var rootSections = metaSection.children.map(function (c) {
	        return sections.find(function (s) {
	          return s._id === c;
	        });
	      });

	      var _ret = function () {
	        switch (layout) {
	          case 's':
	            var flatNavigation = [];
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	              for (var _iterator = rootSections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var section = _step.value;

	                if (section.sectionType === 'parent') {
	                  var subsections = section.children.map(function (c) {
	                    return sections.find(function (s) {
	                      return s._id === c;
	                    });
	                  });

	                  var _iteratorNormalCompletion2 = true;
	                  var _didIteratorError2 = false;
	                  var _iteratorError2 = undefined;

	                  try {
	                    for (var _iterator2 = subsections[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                      var subsection = _step2.value;

	                      flatNavigation.push({
	                        label: section.title + ' / ' + subsection.title,
	                        id: '/' + section.url + '/' + subsection.url
	                      });
	                    }
	                  } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                  } finally {
	                    try {
	                      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                      }
	                    } finally {
	                      if (_didIteratorError2) {
	                        throw _iteratorError2;
	                      }
	                    }
	                  }
	                } else {
	                  flatNavigation.push({
	                    label: section.title,
	                    id: '/' + section.url
	                  });
	                }
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }

	            return {
	              v: _react2.default.createElement(
	                'div',
	                { className: _MainNav2.default.Navigation },
	                _react2.default.createElement(
	                  _Wrapper2.default,
	                  null,
	                  _react2.default.createElement(
	                    _Box2.default,
	                    { n: 1 },
	                    _react2.default.createElement(_Select2.default, {
	                      inverse: true,
	                      value: params.subsectionUrl ? '/' + params.sectionUrl + '/' + params.subsectionUrl : '/' + params.sectionUrl,
	                      options: flatNavigation,
	                      onChange: function onChange(url) {
	                        _this2.navigate(url);
	                      } })
	                  )
	                )
	              )
	            };
	          case 'm':
	          case 'l':
	          case 'xl':
	            var currentSection = rootSections.find(function (s) {
	              return s.url === params.sectionUrl;
	            });
	            var currentSubsections = currentSection && currentSection.sectionType === 'parent' ? currentSection.children.map(function (c) {
	              return sections.find(function (s) {
	                return s._id === c;
	              });
	            }) : null;

	            var currentSubNav = '';
	            if (currentSubsections) {
	              currentSubNav = _react2.default.createElement(
	                'div',
	                { className: _MainNav2.default.Subnavigation },
	                _react2.default.createElement(
	                  _Wrapper2.default,
	                  null,
	                  _react2.default.createElement(
	                    _Flex2.default,
	                    null,
	                    currentSubsections.map(function (s, index) {
	                      return _react2.default.createElement(
	                        _reactRouter.Link,
	                        {
	                          key: index,
	                          className: _MainNav2.default.Subnavigation__item,
	                          activeClassName: _MainNav2.default.Subnavigation__item_active,
	                          to: '/' + currentSection.url + '/' + s.url },
	                        s.title
	                      );
	                    })
	                  )
	                )
	              );
	            }

	            return {
	              v: _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  'div',
	                  { className: _MainNav2.default.Navigation },
	                  _react2.default.createElement(
	                    _Wrapper2.default,
	                    null,
	                    _react2.default.createElement(
	                      _Flex2.default,
	                      null,
	                      rootSections.map(function (s, i) {
	                        var activeClassNames = [_MainNav2.default.Navigation__item_active];
	                        if (s.sectionType === 'parent') {
	                          activeClassNames.push(_MainNav2.default.Navigation__item_parent_active);
	                        }

	                        return _react2.default.createElement(
	                          _reactRouter.Link,
	                          {
	                            key: i,
	                            to: '/' + s.url,
	                            className: _MainNav2.default.Navigation__item,
	                            activeClassName: activeClassNames.join(' ') },
	                          s.title
	                        );
	                      })
	                    )
	                  )
	                ),
	                currentSubNav
	              )
	            };
	          default:
	            console.error('unexpected layout type ' + layout);
	            return {
	              v: _react2.default.createElement('div', null)
	            };
	        }
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }
	  }]);

	  return MainNav;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    sections: state.sections.items,
	    layout: state.ui.layout
	  };
		})(MainNav);

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Select = __webpack_require__(667);

	var _Select2 = _interopRequireDefault(_Select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);

	  function Select() {
	    _classCallCheck(this, Select);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Select).apply(this, arguments));
	  }

	  _createClass(Select, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var options = _props.options;
	      var _onChange = _props.onChange;
	      var value = _props.value;
	      var _props$inverse = _props.inverse;
	      var inverse = _props$inverse === undefined ? false : _props$inverse;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;


	      var selectedOption = options.find(function (o) {
	        return o.id === value;
	      });
	      var inputLabel = selectedOption ? selectedOption.label : 'None';

	      return _react2.default.createElement(
	        'div',
	        { className: _Select2.default.Select + '\n        ' + (inverse ? _Select2.default.Select_inverse : '') },
	        _react2.default.createElement(
	          'div',
	          { className: _Select2.default.Select__fake },
	          inputLabel
	        ),
	        _react2.default.createElement(
	          'select',
	          { className: _Select2.default.Select__input,
	            ref: function ref(el) {
	              _this2._element = el;
	            },
	            value: value,
	            disabled: disabled,
	            onChange: function onChange(v) {
	              return _onChange(v.target.value);
	            } },
	          options.map(function (o, index) {
	            return _react2.default.createElement(
	              'option',
	              { key: index, value: o.id },
	              o.label
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Select;
	}(_react2.default.Component);

		exports.default = Select;

/***/ },

/***/ 667:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Select":"Select__Select___1rPbL","Select__fake":"Select__Select__fake___3wkdd","Select__input":"Select__Select__input___r7ey7","Select_inverse":"Select__Select_inverse___1kD9E"};

/***/ },

/***/ 668:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Navigation":"MainNav__Navigation___DD3ft","Navigation__item":"MainNav__Navigation__item___1g_6T","Navigation__item_active":"MainNav__Navigation__item_active___2iXCQ","Navigation__item_parent_active":"MainNav__Navigation__item_parent_active___2mNO8","Subnavigation":"MainNav__Subnavigation___5GroH","Subnavigation__item":"MainNav__Subnavigation__item___3tcZ4","Subnavigation__item_active":"MainNav__Subnavigation__item_active___2Wmgu"};

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _reactRedux = __webpack_require__(470);

	var _ArticlesPage = __webpack_require__(672);

	var _ArticlesPage2 = _interopRequireDefault(_ArticlesPage);

	var _CustomPageHome = __webpack_require__(674);

	var _CustomPageHome2 = _interopRequireDefault(_CustomPageHome);

	var _CustomPageAbout = __webpack_require__(687);

	var _CustomPageAbout2 = _interopRequireDefault(_CustomPageAbout);

	var _CustomPageSchedule = __webpack_require__(689);

	var _CustomPageSchedule2 = _interopRequireDefault(_CustomPageSchedule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SectionContainer = function (_React$Component) {
	  _inherits(SectionContainer, _React$Component);

	  function SectionContainer() {
	    _classCallCheck(this, SectionContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SectionContainer).apply(this, arguments));
	  }

	  _createClass(SectionContainer, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var params = _props.params;
	      var currentSection = _props.currentSection;
	      var firstSubsection = _props.firstSubsection;


	      if (firstSubsection && !params.subsectionUrl) {
	        _reactRouter.hashHistory.push('/' + currentSection.url + '/' + firstSubsection.url);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var params = newProps.params;
	      var currentSection = newProps.currentSection;
	      var firstSubsection = newProps.firstSubsection;


	      if (firstSubsection && !params.subsectionUrl) {
	        _reactRouter.hashHistory.push('/' + currentSection.url + '/' + firstSubsection.url);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var currentSection = _props2.currentSection;
	      var params = _props2.params;
	      var children = _props2.children;


	      switch (currentSection.sectionType) {
	        case 'parent':
	          return children;
	        case 'blogposts':
	        case 'articles':
	          return _react2.default.createElement(_ArticlesPage2.default, {
	            currentSection: currentSection,
	            children: children,
	            params: params });
	        case 'custom':
	          switch (currentSection.customId) {
	            case 'home':
	              return _react2.default.createElement(_CustomPageHome2.default, null);
	            case 'about':
	              return _react2.default.createElement(_CustomPageAbout2.default, null);
	            case 'schedule':
	              return _react2.default.createElement(_CustomPageSchedule2.default, null);
	            default:
	              console.error('unexpected custom section ' + currentSection.customId);
	              return _react2.default.createElement('div', null);
	          }
	        default:
	          console.error('unexpected section type on 1st level ' + currentSection.sectionType);
	          return _react2.default.createElement('div', null);
	      }
	    }
	  }]);

	  return SectionContainer;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var params = ownProps.params;

	  var currentSection = state.sections.items.find(function (s) {
	    return s.url === params.sectionUrl;
	  });
	  var firstSubsection = currentSection.sectionType === 'parent' && currentSection.children.length ? state.sections.items.find(function (s) {
	    return s._id === currentSection.children[0];
	  }) : null;

	  // const sectionBlogposts = currentSection.articles
	  // .map(a => articles.find(art => art._id === a))
	  // .filter(a => a.isPublished)

	  return {
	    currentSection: currentSection,
	    firstSubsection: firstSubsection
	  };
		})(SectionContainer);

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(699);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Box = __webpack_require__(661);

	var _Box2 = _interopRequireDefault(_Box);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Flex = __webpack_require__(611);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Grid = __webpack_require__(612);

	var _List = __webpack_require__(614);

	var _Heading = __webpack_require__(678);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Heading3 = __webpack_require__(680);

	var _Heading4 = _interopRequireDefault(_Heading3);

	var _Heading5 = __webpack_require__(834);

	var _Heading6 = _interopRequireDefault(_Heading5);

	var _Content = __webpack_require__(805);

	var _Content2 = _interopRequireDefault(_Content);

	var _Info = __webpack_require__(840);

	var _Info2 = _interopRequireDefault(_Info);

	var _LinkButton = __webpack_require__(630);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _AskQuestion = __webpack_require__(836);

	var _AskQuestion2 = _interopRequireDefault(_AskQuestion);

	var _ListOfArticles = __webpack_require__(662);

	var _ListOfArticles2 = _interopRequireDefault(_ListOfArticles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArticlesPage = function ArticlesPage(_ref) {
	  var parentSection = _ref.parentSection;
	  var currentSection = _ref.currentSection;
	  var articles = _ref.articles;
	  var layout = _ref.layout;
	  var children = _ref.children;
	  var params = _ref.params;

	  var gridSize = 0;
	  var articlesSpan = 0;
	  var questionsSpan = 0;
	  var boxSize = 0;
	  var questionsBoxSize = 0;
	  var formLayout = 'none';
	  var articlesGridSize = 0;

	  switch (layout) {
	    case 's':
	    case 'm':
	      gridSize = 1;
	      articlesSpan = 1;
	      questionsSpan = 1;
	      boxSize = 4;
	      questionsBoxSize = 2;
	      formLayout = 'full';
	      articlesGridSize = 1;
	      break;
	    case 'l':
	      gridSize = 12;
	      articlesSpan = 7;
	      questionsSpan = 5;
	      boxSize = parentSection ? 6 : 8;
	      questionsBoxSize = 6;
	      formLayout = 'stacked';
	      articlesGridSize = 1;
	      break;
	    case 'xl':
	      gridSize = 3;
	      articlesSpan = 2;
	      questionsSpan = 1;
	      boxSize = parentSection ? 6 : 8;
	      questionsBoxSize = 6;
	      formLayout = 'stacked';
	      articlesGridSize = 2;
	      break;
	    default:
	      console.error('unexpected layout type ' + layout);
	  }

	  var content = '';
	  if (currentSection.sectionType === 'articles') {
	    content = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _Block2.default,
	        { n: 2 },
	        parentSection ? _react2.default.createElement(
	          _Heading6.default,
	          null,
	          parentSection.title
	        ) : '',
	        _react2.default.createElement(
	          _Heading2.default,
	          { underline: true },
	          currentSection.title
	        )
	      ),
	      _react2.default.createElement(
	        _Grid.Grid,
	        {
	          gutterBottom: 1 },
	        _react2.default.createElement(
	          _Grid.GridItem,
	          {
	            gutterBottom: 1,
	            span: 1,
	            outOf: articlesGridSize },
	          _react2.default.createElement(_ListOfArticles2.default, { articles: articles.slice(0, articles.length / 2) })
	        ),
	        _react2.default.createElement(
	          _Grid.GridItem,
	          {
	            gutterBottom: 1,
	            span: 1,
	            outOf: articlesGridSize },
	          _react2.default.createElement(_ListOfArticles2.default, { articles: articles.slice(articles.length / 2) })
	        )
	      )
	    );
	  } else if (currentSection.sectionType === 'blogposts') {
	    content = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _Block2.default,
	        { n: 3 },
	        _react2.default.createElement(
	          _Heading2.default,
	          { underline: true },
	          currentSection.title
	        )
	      ),
	      _react2.default.createElement(
	        _List.List,
	        { n: 3 },
	        articles.map(function (a, index) {
	          var link = parentSection ? '/' + params.sectionUrl + '/' + params.subsectionUrl + '/articles/' + a.url : '/' + params.sectionUrl + '/articles/' + a.url;

	          return _react2.default.createElement(
	            _List.ListItem,
	            {
	              key: index,
	              n: 3 },
	            _react2.default.createElement(
	              _Flex2.default,
	              { justifyContent: 'space-between' },
	              _react2.default.createElement(
	                _Heading4.default,
	                null,
	                a.title
	              ),
	              _react2.default.createElement(
	                _Info2.default,
	                null,
	                'Posted on ',
	                _react2.default.createElement(_reactTime2.default, { value: new Date(a.createdAt), format: 'MMM Do, h:mA' })
	              )
	            ),
	            _react2.default.createElement(
	              _Block2.default,
	              null,
	              _react2.default.createElement(_Content2.default, { text: a.snippet })
	            ),
	            _react2.default.createElement(
	              _LinkButton2.default,
	              { to: link },
	              '» read full post'
	            )
	          );
	        })
	      )
	    );
	  }

	  return _react2.default.createElement(
	    'section',
	    null,
	    _react2.default.createElement(
	      _Wrapper2.default,
	      null,
	      _react2.default.createElement(
	        _Grid.Grid,
	        {
	          gutterBottom: 0 },
	        _react2.default.createElement(
	          _Grid.GridItem,
	          {
	            gutterBottom: 0,
	            span: articlesSpan,
	            outOf: gridSize },
	          _react2.default.createElement(
	            _Box2.default,
	            { n: boxSize },
	            params.articleUrl ? children : content
	          )
	        ),
	        _react2.default.createElement(
	          _Grid.GridItem,
	          {
	            gutterBottom: 0,
	            span: questionsSpan,
	            outOf: gridSize },
	          _react2.default.createElement(
	            _Box2.default,
	            { n: questionsBoxSize },
	            _react2.default.createElement(_AskQuestion2.default, { formLayout: formLayout })
	          )
	        )
	      )
	    )
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var currentSection = ownProps.currentSection;

	  var articles = currentSection.articles.map(function (a) {
	    return state.articles.items.find(function (art) {
	      return art._id === a;
	    });
	  }).filter(function (a) {
	    return a.isPublished;
	  });

	  return {
	    articles: articles,
	    layout: state.ui.layout
	  };
		})(ArticlesPage);

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Grid = __webpack_require__(612);

	var _Box = __webpack_require__(661);

	var _Box2 = _interopRequireDefault(_Box);

	var _Signature = __webpack_require__(675);

	var _Signature2 = _interopRequireDefault(_Signature);

	var _QuestionForm = __webpack_require__(677);

	var _QuestionForm2 = _interopRequireDefault(_QuestionForm);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(678);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Heading3 = __webpack_require__(680);

	var _Heading4 = _interopRequireDefault(_Heading3);

	var _HeadingLined = __webpack_require__(682);

	var _HeadingLined2 = _interopRequireDefault(_HeadingLined);

	var _Text = __webpack_require__(684);

	var _Text2 = _interopRequireDefault(_Text);

	var _ListOfArticles = __webpack_require__(662);

	var _ListOfArticles2 = _interopRequireDefault(_ListOfArticles);

	var _Button = __webpack_require__(628);

	var _Button2 = _interopRequireDefault(_Button);

	var _CustomPageHome = __webpack_require__(686);

	var _CustomPageHome2 = _interopRequireDefault(_CustomPageHome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CustomPageHome = function CustomPageHome(_ref) {
	  var frequentArticles = _ref.frequentArticles;
	  var frequentSection = _ref.frequentSection;
	  var frequentSubsecions = _ref.frequentSubsecions;
	  var articles = _ref.articles;
	  var layout = _ref.layout;

	  var WelcomeGridSize = 0;
	  var welcomeBox = 0;
	  var frequentGridSize = 0;
	  var frequentBox = 0;
	  var askQuestionGridSize = 0;
	  var askQuestionBox = 0;

	  switch (layout) {
	    case 's':
	      WelcomeGridSize = 1;
	      welcomeBox = 4;
	      frequentGridSize = 1;
	      frequentBox = 4;
	      askQuestionGridSize = 1;
	      askQuestionBox = 4;
	      break;
	    case 'm':
	      WelcomeGridSize = 1;
	      welcomeBox = 4;
	      frequentGridSize = 2;
	      frequentBox = 4;
	      askQuestionGridSize = 1;
	      askQuestionBox = 4;
	      break;
	    case 'l':
	      WelcomeGridSize = 2;
	      welcomeBox = 4;
	      frequentGridSize = 3;
	      frequentBox = 8;
	      askQuestionGridSize = 2;
	      askQuestionBox = 8;
	      break;
	    case 'xl':
	      WelcomeGridSize = 2;
	      welcomeBox = 8;
	      frequentGridSize = 4;
	      frequentBox = 8;
	      askQuestionGridSize = 2;
	      askQuestionBox = 8;
	      break;
	    default:
	      console.error('unexpected layout value ' + layout);
	  }

	  var frequentArticlesEl = _react2.default.createElement(
	    'section',
	    { className: _CustomPageHome2.default.FrequentSection },
	    _react2.default.createElement(
	      _Block2.default,
	      null,
	      _react2.default.createElement(
	        _HeadingLined2.default,
	        null,
	        'Frequent Questions'
	      )
	    ),
	    _react2.default.createElement(
	      _Wrapper2.default,
	      null,
	      _react2.default.createElement(
	        _Box2.default,
	        { n: frequentBox },
	        _react2.default.createElement(
	          _Grid.Grid,
	          {
	            gutterBottom: 4 },
	          frequentSubsecions.map(function (sub, index) {
	            var subSectionArticles = sub.articles.map(function (a) {
	              return articles.find(function (art) {
	                return art._id === a;
	              });
	            }).filter(function (a) {
	              return a.isPublished && a.articleType === 'article';
	            }).slice(0, 5);

	            return _react2.default.createElement(
	              _Grid.GridItem,
	              {
	                key: index,
	                gutterBottom: 4,
	                span: 1,
	                outOf: frequentGridSize },
	              _react2.default.createElement(
	                _Block2.default,
	                { n: 1 },
	                _react2.default.createElement(
	                  _Heading4.default,
	                  { underline: true },
	                  sub.title
	                )
	              ),
	              _react2.default.createElement(
	                _Block2.default,
	                { n: 2 },
	                _react2.default.createElement(_ListOfArticles2.default, { articles: subSectionArticles })
	              ),
	              _react2.default.createElement(
	                _Button2.default,
	                { to: '/' + frequentSection.url + '/' + sub.url },
	                'see more'
	              )
	            );
	          })
	        )
	      )
	    )
	  );

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'section',
	      { className: _CustomPageHome2.default.WelcomeSection },
	      _react2.default.createElement(
	        _Wrapper2.default,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _CustomPageHome2.default.WelcomeSection__body },
	          _react2.default.createElement(
	            _Grid.Grid,
	            {
	              justifyContent: 'flex-end' },
	            _react2.default.createElement(
	              _Grid.GridItem,
	              {
	                span: 1,
	                outOf: WelcomeGridSize },
	              _react2.default.createElement(
	                _Box2.default,
	                {
	                  n: welcomeBox },
	                _react2.default.createElement(
	                  _Block2.default,
	                  { n: 2 },
	                  _react2.default.createElement(
	                    _Heading2.default,
	                    null,
	                    'What is “Vaccine Answers”'
	                  )
	                ),
	                _react2.default.createElement(
	                  _Block2.default,
	                  null,
	                  _react2.default.createElement(
	                    _Text2.default,
	                    null,
	                    'The main purpose of our website is to provide people with valid information about vaccines, such as validity of vaccine myths and rumors, information on vaccine safety, vaccine schedule, etc. If you cannot find information you want, or you would rather just get a quick response to your specific question, please do not hesitate to send your question to me. I try to reply in a timely manner and I also provide list of official sources for your further exploration.'
	                  )
	                ),
	                _react2.default.createElement(_Signature2.default, null)
	              )
	            )
	          )
	        )
	      )
	    ),
	    _react2.default.createElement(
	      'section',
	      null,
	      _react2.default.createElement(
	        _Wrapper2.default,
	        null,
	        _react2.default.createElement(
	          _Box2.default,
	          { n: askQuestionBox },
	          _react2.default.createElement(
	            _Grid.Grid,
	            {
	              alignItems: 'center',
	              gutterBottom: 2 },
	            _react2.default.createElement(
	              _Grid.GridItem,
	              {
	                gutterBottom: 2,
	                span: 1,
	                outOf: askQuestionGridSize },
	              _react2.default.createElement(
	                _Block2.default,
	                { n: 2 },
	                _react2.default.createElement(
	                  _Heading2.default,
	                  null,
	                  'Have a Question?'
	                )
	              ),
	              _react2.default.createElement(
	                _Block2.default,
	                { n: 1 },
	                _react2.default.createElement(
	                  _Text2.default,
	                  null,
	                  'If you do not want to search through the website or cannot find answer to your question, please do not hesitate to send    your question directly to me. I will reply to you with all the information you should know as soon as I can.'
	                )
	              ),
	              _react2.default.createElement(_Signature2.default, null)
	            ),
	            _react2.default.createElement(
	              _Grid.GridItem,
	              {
	                gutterBottom: 2,
	                span: 1,
	                outOf: askQuestionGridSize },
	              _react2.default.createElement(_QuestionForm2.default, { type: 'full' })
	            )
	          )
	        )
	      )
	    ),
	    frequentArticlesEl
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  var frequentSection = state.sections.items.find(function (s) {
	    return s.customId === 'frequent-questions';
	  });
	  var frequentSubsecions = frequentSection.children.map(function (ch) {
	    return state.sections.items.find(function (s) {
	      return s._id === ch;
	    });
	  });

	  return {
	    frequentSection: frequentSection,
	    frequentSubsecions: frequentSubsecions,
	    articles: state.articles.items,
	    layout: state.ui.layout
	  };
		})(CustomPageHome);

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Signature = __webpack_require__(676);

	var _Signature2 = _interopRequireDefault(_Signature);

	var _Layouts = __webpack_require__(609);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Signature = function Signature() {
	  return _react2.default.createElement(
	    _Layouts.Flex,
	    { justifyContent: 'flex-end' },
	    _react2.default.createElement(
	      'div',
	      { className: _Signature2.default.Signature },
	      '– Dr. Jennifer Potter, MD'
	    )
	  );
	};

	exports.default = Signature;

/***/ },

/***/ 676:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Signature":"Signature__Signature___11CnF"};

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(606);

	var _LabeledInput = __webpack_require__(624);

	var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Grid = __webpack_require__(612);

	var _questionsActions = __webpack_require__(556);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionForm = function (_React$Component) {
	  _inherits(QuestionForm, _React$Component);

	  function QuestionForm(props) {
	    _classCallCheck(this, QuestionForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionForm).call(this, props));

	    _this.state = {
	      errors: {},
	      data: {
	        posterName: props.user.name,
	        posterEmail: props.user.email,
	        question: ''
	      }
	    };

	    _this.change = _this.change.bind(_this);
	    _this.create = _this.create.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionForm, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$question = newProps.question;
	      var errors = _newProps$question.errors;
	      var isUpdating = _newProps$question.isUpdating;


	      if (!isUpdating) {
	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          this.setState({
	            data: {
	              posterName: newProps.user.name,
	              posterEmail: newProps.user.email,
	              question: ''
	            }
	          });
	        } else {
	          this.setState({ errors: errors });
	        }
	      }
	    }
	  }, {
	    key: 'change',
	    value: function change(prop, value) {
	      var newData = _extends({}, this.state.data, _defineProperty({}, prop, value));

	      var newErrors = _extends({}, this.state.errors, _defineProperty({}, prop, null));

	      this.setState({
	        data: newData,
	        errors: newErrors
	      });
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      var createQuestion = this.props.createQuestion;


	      createQuestion(this.state.data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var isUpdating = _props.question.isUpdating;
	      var type = _props.type;
	      var layout = _props.layout;


	      var gridSize = 0;
	      switch (layout) {
	        case 's':
	          gridSize = 1;
	          break;
	        case 'm':
	        case 'l':
	        case 'xl':
	          gridSize = 2;
	          break;
	        default:
	          console.error('unexpected layout type ' + layout);
	      }

	      var inputs = '';
	      if (type === 'stacked') {
	        inputs = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _Block2.default,
	            null,
	            _react2.default.createElement(_LabeledInput2.default, {
	              label: 'Your name',
	              error: this.state.errors.posterName,
	              input: _react2.default.createElement(_UI.TextInput, {
	                value: this.state.data.posterName,
	                error: this.state.errors.posterName,
	                placeholder: 'e.g. Casey',
	                disabled: isUpdating,
	                changeCallback: function changeCallback(v) {
	                  return _this2.change('posterName', v);
	                } }) })
	          ),
	          _react2.default.createElement(
	            _Block2.default,
	            null,
	            _react2.default.createElement(_LabeledInput2.default, {
	              label: 'Your email',
	              error: this.state.errors.posterEmail,
	              input: _react2.default.createElement(_UI.TextInput, {
	                value: this.state.data.posterEmail,
	                error: this.state.errors.posterEmail,
	                placeholder: 'e.g. casey@gmail.com',
	                disabled: isUpdating,
	                changeCallback: function changeCallback(v) {
	                  return _this2.change('posterEmail', v);
	                } }) })
	          )
	        );
	      } else if (type === 'full') {
	        inputs = _react2.default.createElement(
	          _Block2.default,
	          null,
	          _react2.default.createElement(
	            _Grid.Grid,
	            { gutterBottom: 1 },
	            _react2.default.createElement(
	              _Grid.GridItem,
	              {
	                gutterBottom: 1,
	                span: 1,
	                outOf: gridSize },
	              _react2.default.createElement(_LabeledInput2.default, {
	                label: 'Your name',
	                error: this.state.errors.posterName,
	                input: _react2.default.createElement(_UI.TextInput, {
	                  value: this.state.data.posterName,
	                  error: this.state.errors.posterName,
	                  placeholder: 'e.g. Casey',
	                  disabled: isUpdating,
	                  changeCallback: function changeCallback(v) {
	                    return _this2.change('posterName', v);
	                  } }) })
	            ),
	            _react2.default.createElement(
	              _Grid.GridItem,
	              {
	                gutterBottom: 1,
	                span: 1,
	                outOf: gridSize },
	              _react2.default.createElement(_LabeledInput2.default, {
	                label: 'Your email',
	                error: this.state.errors.posterEmail,
	                input: _react2.default.createElement(_UI.TextInput, {
	                  value: this.state.data.posterEmail,
	                  error: this.state.errors.posterEmail,
	                  placeholder: 'e.g. casey@gmail.com',
	                  disabled: isUpdating,
	                  changeCallback: function changeCallback(v) {
	                    return _this2.change('posterEmail', v);
	                  } }) })
	            )
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'form',
	        null,
	        inputs,
	        _react2.default.createElement(
	          _Block2.default,
	          { n: 1.5 },
	          _react2.default.createElement(_LabeledInput2.default, {
	            label: 'Your question',
	            error: this.state.errors.question,
	            input: _react2.default.createElement(_UI.TextArea, {
	              value: this.state.data.question,
	              error: this.state.errors.question,
	              placeholder: 'e.g. which vaccines are safe for kids under 5 years?',
	              disabled: isUpdating,
	              changeCallback: function changeCallback(v) {
	                return _this2.change('question', v);
	              } }) })
	        ),
	        _react2.default.createElement(
	          _UI.Button,
	          {
	            onClick: this.create,
	            disabled: isUpdating },
	          'Ask question'
	        )
	      );
	    }
	  }]);

	  return QuestionForm;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.auth.user,
	    question: state.question,
	    layout: state.ui.layout
	  };
	}, function (dispatch) {
	  return {
	    createQuestion: function createQuestion(data) {
	      dispatch((0, _questionsActions.createQuestion)(data, 'Your question has been sent, we will reply to you as soon as we can!'));
	    }
	  };
		})(QuestionForm);

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(679);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Heading1 = function Heading1(_ref) {
	  var children = _ref.children;
	  var _ref$linkTo = _ref.linkTo;
	  var linkTo = _ref$linkTo === undefined ? null : _ref$linkTo;
	  var underline = _ref.underline;

	  if (linkTo) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        to: linkTo,
	        className: _Heading2.default.Heading1 + '\n          ' + _Heading2.default.Heading1_link + '\n          ' + (underline ? _Heading2.default.Heading1_underline : '') },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'h1',
	      { className: _Heading2.default.Heading1 + '\n        ' + (underline ? _Heading2.default.Heading1_underline : '') },
	      children
	    );
	  }
	};

	exports.default = Heading1;

/***/ },

/***/ 679:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading1":"Heading1__Heading1___3RGJF","Heading1_link":"Heading1__Heading1_link___1iSlt","Heading1_underline":"Heading1__Heading1_underline___1INkw"};

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(681);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Heading2 = function Heading2(_ref) {
	  var children = _ref.children;
	  var _ref$linkTo = _ref.linkTo;
	  var linkTo = _ref$linkTo === undefined ? null : _ref$linkTo;
	  var _ref$underline = _ref.underline;
	  var underline = _ref$underline === undefined ? false : _ref$underline;

	  if (linkTo) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        className: _Heading2.default.Heading2 + '\n          ' + _Heading2.default.Heading2_link + '\n          ' + (underline ? _Heading2.default.Heading2_underline : ''),
	        to: linkTo },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'h2',
	      {
	        className: _Heading2.default.Heading2 + '\n        ' + (underline ? _Heading2.default.Heading2_underline : '') },
	      children
	    );
	  }
	};

	exports.default = Heading2;

/***/ },

/***/ 681:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading2":"Heading2__Heading2___1lmJK","Heading2_link":"Heading2__Heading2_link___3_n-L","Heading2_underline":"Heading2__Heading2_underline___24TjP"};

/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _HeadingLined = __webpack_require__(683);

	var _HeadingLined2 = _interopRequireDefault(_HeadingLined);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HeadingLined = function HeadingLined(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _HeadingLined2.default.HeadingLined },
	    _react2.default.createElement(
	      'h1',
	      { className: _HeadingLined2.default.HeadingLined__title },
	      children
	    )
	  );
	};

	exports.default = HeadingLined;

/***/ },

/***/ 683:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"HeadingLined":"HeadingLined__HeadingLined___PAq13","HeadingLined__title":"HeadingLined__HeadingLined__title___1ue4l"};

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Text = __webpack_require__(685);

	var _Text2 = _interopRequireDefault(_Text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Heading3 = function Heading3(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Text2.default.Text },
	    children
	  );
	};

	exports.default = Heading3;

/***/ },

/***/ 685:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Text":"Text__Text___lWYAF"};

/***/ },

/***/ 686:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"WelcomeSection":"CustomPageHome__WelcomeSection___3G5DK","WelcomeSection__body":"CustomPageHome__WelcomeSection__body___2NnLW"};

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Grid = __webpack_require__(612);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Box = __webpack_require__(661);

	var _Box2 = _interopRequireDefault(_Box);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _HeadingLined = __webpack_require__(682);

	var _HeadingLined2 = _interopRequireDefault(_HeadingLined);

	var _Text = __webpack_require__(684);

	var _Text2 = _interopRequireDefault(_Text);

	var _CustomPageAbout = __webpack_require__(688);

	var _CustomPageAbout2 = _interopRequireDefault(_CustomPageAbout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CustomPageAbout = function CustomPageAbout(_ref) {
	  var layout = _ref.layout;

	  var gridSize = 0;
	  var boxSize = 0;

	  switch (layout) {
	    case 's':
	    case 'm':
	      gridSize = 1;
	      boxSize = 4;
	      break;
	    case 'l':
	    case 'xl':
	      gridSize = 2;
	      boxSize = 6;
	      break;
	    default:
	      console.error('unexpected layout value ' + layout);
	  }

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('div', { className: _CustomPageAbout2.default.AboutSection }),
	    _react2.default.createElement(
	      _Wrapper2.default,
	      null,
	      _react2.default.createElement(
	        _Grid.Grid,
	        {
	          gutterBottom: 0 },
	        _react2.default.createElement(
	          _Grid.GridItem,
	          {
	            gutterBottom: 0,
	            span: 1,
	            outOf: gridSize },
	          _react2.default.createElement(
	            _Box2.default,
	            { n: boxSize },
	            _react2.default.createElement(
	              'section',
	              null,
	              _react2.default.createElement(
	                _Block2.default,
	                { n: boxSize - 2 },
	                _react2.default.createElement(
	                  _HeadingLined2.default,
	                  null,
	                  'Who We Are'
	                )
	              ),
	              _react2.default.createElement(
	                _Text2.default,
	                null,
	                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Grid.GridItem,
	          {
	            gutterBottom: 0,
	            span: 1,
	            outOf: gridSize },
	          _react2.default.createElement(
	            _Box2.default,
	            { n: boxSize },
	            _react2.default.createElement(
	              'section',
	              null,
	              _react2.default.createElement(
	                _Block2.default,
	                { n: boxSize - 2 },
	                _react2.default.createElement(
	                  _HeadingLined2.default,
	                  null,
	                  'Funding for the project'
	                )
	              ),
	              _react2.default.createElement(
	                _Text2.default,
	                null,
	                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
	              )
	            )
	          )
	        )
	      )
	    )
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    layout: state.ui.layout
	  };
		})(CustomPageAbout);

/***/ },

/***/ 688:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AboutSection":"CustomPageAbout__AboutSection___3eneO"};

/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Box = __webpack_require__(661);

	var _Box2 = _interopRequireDefault(_Box);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(678);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Text = __webpack_require__(684);

	var _Text2 = _interopRequireDefault(_Text);

	var _Table = __webpack_require__(842);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CustomPageSchedule = function CustomPageSchedule(_ref) {
	  var layout = _ref.layout;

	  var vaccineColumnWidth = 0;
	  var showFullName = null;
	  var boxSize = 0;

	  switch (layout) {
	    case 's':
	    case 'm':
	      vaccineColumnWidth = '7rem';
	      showFullName = false;
	      boxSize = 4;
	      break;
	    case 'l':
	    case 'xl':
	      vaccineColumnWidth = '25rem';
	      showFullName = true;
	      boxSize = 8;
	      break;
	    default:
	      console.error('unexpeted layout type ' + layout);
	  }

	  return _react2.default.createElement(
	    _Wrapper2.default,
	    null,
	    _react2.default.createElement(
	      _Box2.default,
	      { n: boxSize },
	      _react2.default.createElement(
	        _Block2.default,
	        { n: 2 },
	        _react2.default.createElement(
	          _Heading2.default,
	          { underline: true },
	          'Vaccination Schedule'
	        )
	      ),
	      _react2.default.createElement(
	        _Block2.default,
	        { n: 2 },
	        _react2.default.createElement(
	          _Text2.default,
	          null,
	          'This is the recommended schedule for vaccinations in Manitoba.'
	        )
	      ),
	      _react2.default.createElement(
	        _Block2.default,
	        null,
	        _react2.default.createElement(
	          _Table.Row,
	          { heading: true, bt: true },
	          _react2.default.createElement(_Table.Column, { width: vaccineColumnWidth, bl: true }),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              { bb: true },
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '45%', br: true },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  { heading: true },
	                  'Months'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  { heading: true },
	                  'Years'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  { heading: true },
	                  'Grade'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  { heading: true },
	                  'Years'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { heading: true, bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right', heading: true },
	              'Vaccine'
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%' },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  null,
	                  '2'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%' },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  null,
	                  '4'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%' },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  null,
	                  '6'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%' },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  null,
	                  '12'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  null,
	                  '18'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  null,
	                  '4-6'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%' },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  null,
	                  '4'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  null,
	                  '6'
	                )
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(
	                  _Table.Cell,
	                  null,
	                  '14-16'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'DTaP-Hib-IPV ',
	              showFullName ? '(Diphtheria, Tetanus, Pertussis, Hemophilus influenzae type b, Polio)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'PCV ',
	              showFullName ? '(Pneumococcus conjugate vaccine)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'RV ',
	              showFullName ? '(Rotavirus vaccine)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'MMRV ',
	              showFullName ? '(Measles, mumps, rubella, varicella)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'MCV ',
	              showFullName ? '(Meningococcus conjugate vaccine)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'PCV ',
	              showFullName ? '(Pneumococcus conjugate vaccine)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'Tdap-IPV ',
	              showFullName ? '(Tetanus, Diphtheria, Pertussis, Polio)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'HBV ',
	              showFullName ? '(Hepatitis B)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'HPV ',
	              showFullName ? '(Human papilloma virus)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Table.Row,
	          { bb: true },
	          _react2.default.createElement(
	            _Table.Column,
	            { width: vaccineColumnWidth, bl: true },
	            _react2.default.createElement(
	              _Table.Cell,
	              { align: 'right' },
	              'Tdap ',
	              showFullName ? '(Tetanus, Diphtheria, Pertussis)' : ''
	            )
	          ),
	          _react2.default.createElement(
	            _Table.Column,
	            { width: 'stretch', bl: true },
	            _react2.default.createElement(
	              _Table.Row,
	              null,
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '18%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: '9%', br: true },
	                _react2.default.createElement(_Table.Cell, null)
	              ),
	              _react2.default.createElement(
	                _Table.Column,
	                { width: 'stretch', br: true },
	                _react2.default.createElement(_Table.Cell, { filled: true })
	              )
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(
	        _Text2.default,
	        null,
	        'Every fall, starting at 6 month, children are additionally scheduled for an Influenza vaccine (QIV, QLAIV)'
	      )
	    )
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    layout: state.ui.layout
	  };
		})(CustomPageSchedule);

/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _ArticlesPage = __webpack_require__(672);

	var _ArticlesPage2 = _interopRequireDefault(_ArticlesPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SectionContainer = function (_React$Component) {
	  _inherits(SectionContainer, _React$Component);

	  function SectionContainer() {
	    _classCallCheck(this, SectionContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SectionContainer).apply(this, arguments));
	  }

	  _createClass(SectionContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var currentSection = _props.currentSection;
	      var parentSection = _props.parentSection;
	      var params = _props.params;
	      var children = _props.children;


	      switch (currentSection.sectionType) {
	        case 'articles':
	        case 'blogposts':
	          return _react2.default.createElement(_ArticlesPage2.default, {
	            currentSection: currentSection,
	            parentSection: parentSection,
	            children: children,
	            params: params });
	        default:
	          console.error('unexpected section type on 2nd level ' + currentSection.sectionType);
	          return _react2.default.createElement('div', null);
	      }
	    }
	  }]);

	  return SectionContainer;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var params = ownProps.params;

	  var currentSection = state.sections.items.find(function (s) {
	    return s.url === params.subsectionUrl;
	  });
	  var parentSection = state.sections.items.find(function (s) {
	    return s.url === params.sectionUrl;
	  });

	  // const sectionBlogposts = currentSection.articles
	  // .map(a => articles.find(art => art._id === a))
	  // .filter(a => a.isPublished)

	  return {
	    currentSection: currentSection,
	    parentSection: parentSection
	  };
		})(SectionContainer);

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Content = __webpack_require__(806);

	var _Content2 = _interopRequireDefault(_Content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Content = function Content(_ref) {
	  var _ref$text = _ref.text;
	  var text = _ref$text === undefined ? '' : _ref$text;

	  return _react2.default.createElement('div', {
	    className: _Content2.default.Content,
	    dangerouslySetInnerHTML: { __html: text } });
	};

	exports.default = Content;

/***/ },

/***/ 806:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Content":"Content__Content___2RQ0U"};

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Layouts = __webpack_require__(609);

	var _Comment = __webpack_require__(813);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _CommentForm = __webpack_require__(818);

	var _CommentForm2 = _interopRequireDefault(_CommentForm);

	var _Comments = __webpack_require__(819);

	var _Comments2 = _interopRequireDefault(_Comments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comments = function Comments(_ref) {
	  var article = _ref.article;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _Layouts.Block,
	      { n: 6 },
	      _react2.default.createElement(_CommentForm2.default, { article: article })
	    ),
	    article.comments.length > 0 ? _react2.default.createElement(
	      'div',
	      { className: _Comments2.default.Comments },
	      _react2.default.createElement(
	        _Layouts.Block,
	        { n: 1.5 },
	        _react2.default.createElement(
	          'div',
	          { className: _Comments2.default.Comments__title },
	          'Comments'
	        )
	      ),
	      _react2.default.createElement(
	        _Layouts.Block,
	        { n: 1.5 },
	        article.comments.map(function (c, index) {
	          return _react2.default.createElement(_Comment2.default, {
	            key: index,
	            article: article,
	            comment: c });
	        })
	      )
	    ) : ''
	  );
	};

	exports.default = Comments;

/***/ },

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(699);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Layouts = __webpack_require__(609);

	var _Content = __webpack_require__(805);

	var _Content2 = _interopRequireDefault(_Content);

	var _Comment = __webpack_require__(814);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _CommentReply = __webpack_require__(815);

	var _CommentReply2 = _interopRequireDefault(_CommentReply);

	var _CommentReplyForm = __webpack_require__(817);

	var _CommentReplyForm2 = _interopRequireDefault(_CommentReplyForm);

	var _UI = __webpack_require__(606);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Comment = function (_React$Component) {
	  _inherits(Comment, _React$Component);

	  function Comment(props) {
	    _classCallCheck(this, Comment);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Comment).call(this, props));

	    _this.toggleForm = _this.toggleForm.bind(_this);

	    _this.state = {
	      showReplyForm: false
	    };
	    return _this;
	  }

	  _createClass(Comment, [{
	    key: 'toggleForm',
	    value: function toggleForm() {
	      this.setState({
	        showReplyForm: !this.state.showReplyForm
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var comment = _props.comment;
	      var article = _props.article;

	      var sortedReplies = comment.replies.sort(function (a, b) {
	        if (a.createdAt > b.createdAt) {
	          return -1;
	        } else if (a.createdAt < b.createdAt) {
	          return 1;
	        } else {
	          return 0;
	        }
	      });

	      var form = '';
	      if (this.state.showReplyForm) {
	        form = _react2.default.createElement(
	          _Layouts.Block,
	          { n: comment.replies.length ? 4 : 0 },
	          _react2.default.createElement(_CommentReplyForm2.default, {
	            cancelCallback: function cancelCallback() {
	              return _this2.toggleForm();
	            },
	            comment: comment,
	            articleId: article._id })
	        );
	      }

	      var replies = '';
	      if (comment.replies.length > 0) {
	        replies = _react2.default.createElement(
	          _Layouts.List,
	          { n: 2 },
	          sortedReplies.map(function (r, index) {
	            return _react2.default.createElement(
	              _Layouts.ListItem,
	              { n: 2, key: index },
	              _react2.default.createElement(_CommentReply2.default, { reply: r })
	            );
	          })
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: _Comment2.default.Comment },
	        _react2.default.createElement(
	          _Layouts.Block,
	          { n: this.state.showReplyForm || comment.replies.length > 0 ? 3 : 0 },
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 0.5 },
	            _react2.default.createElement(
	              'div',
	              { className: _Comment2.default.Comment__info },
	              'by ',
	              comment.createdBy,
	              ' on ',
	              _react2.default.createElement(_reactTime2.default, { value: comment.createdAt, format: 'MMM Do, h:mA' })
	            )
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_Content2.default, { text: comment.content })
	          ),
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { onClick: this.toggleForm },
	            'Reply to this comment'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _Comment2.default.Comment__replies },
	          form,
	          replies
	        )
	      );
	    }
	  }]);

	  return Comment;
	}(_react2.default.Component);

		exports.default = Comment;

/***/ },

/***/ 814:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comment":"Comment__Comment___CLS2w","Comment__info":"Comment__Comment__info___1rool","Comment__replies":"Comment__Comment__replies___PXLXR"};

/***/ },

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(699);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _CommentReply = __webpack_require__(816);

	var _CommentReply2 = _interopRequireDefault(_CommentReply);

	var _Content = __webpack_require__(805);

	var _Content2 = _interopRequireDefault(_Content);

	var _Layouts = __webpack_require__(609);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommentReply = function CommentReply(_ref) {
	  var reply = _ref.reply;

	  return _react2.default.createElement(
	    'div',
	    { className: _CommentReply2.default.CommentReply },
	    _react2.default.createElement(
	      _Layouts.Block,
	      { n: 0.5 },
	      _react2.default.createElement(
	        'div',
	        { className: _CommentReply2.default.CommentReply__info },
	        'by ',
	        reply.createdBy,
	        ' on ',
	        _react2.default.createElement(_reactTime2.default, { value: reply.createdAt, format: 'MMM Do, h:mA' })
	      )
	    ),
	    _react2.default.createElement(_Content2.default, { text: reply.content })
	  );
	};

	exports.default = CommentReply;

/***/ },

/***/ 816:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CommentReply":"CommentReply__CommentReply___1vEam","CommentReply__info":"CommentReply__CommentReply__info___2gLt5"};

/***/ },

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Layouts = __webpack_require__(609);

	var _TextArea = __webpack_require__(638);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _LinkButton = __webpack_require__(630);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _Button = __webpack_require__(628);

	var _Button2 = _interopRequireDefault(_Button);

	var _LabeledInput = __webpack_require__(624);

	var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

	var _repliesActions = __webpack_require__(560);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentReplyForm = function (_React$Component) {
	  _inherits(CommentReplyForm, _React$Component);

	  function CommentReplyForm(props) {
	    _classCallCheck(this, CommentReplyForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentReplyForm).call(this, props));

	    _this.state = {
	      data: {
	        content: ''
	      },
	      errors: {}
	    };

	    _this.change = _this.change.bind(_this);
	    _this.create = _this.create.bind(_this);
	    return _this;
	  }

	  _createClass(CommentReplyForm, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$comment$new = newProps.comment.newReply;
	      var errors = _newProps$comment$new.errors;
	      var isUpdating = _newProps$comment$new.isUpdating;


	      if (!isUpdating) {
	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          this.setState({
	            data: {
	              content: ''
	            }
	          });
	        } else {
	          this.setState({ errors: errors });
	        }
	      }
	    }
	  }, {
	    key: 'change',
	    value: function change(prop, value) {
	      var newData = _extends({}, this.state.data, _defineProperty({}, prop, value));

	      var newErrors = _extends({}, this.state.errors, _defineProperty({}, prop, null));

	      this.setState({
	        data: newData,
	        errors: newErrors
	      });
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      var _props = this.props;
	      var createReply = _props.createReply;
	      var cancelCallback = _props.cancelCallback;


	      createReply(this.state.data);
	      cancelCallback();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props;
	      var isUpdating = _props2.comment.newReply.isUpdating;
	      var cancelCallback = _props2.cancelCallback;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Layouts.Block,
	          { n: 1.5 },
	          _react2.default.createElement(_LabeledInput2.default, {
	            label: 'Your reply',
	            error: this.state.errors.content,
	            input: _react2.default.createElement(_TextArea2.default, {
	              value: this.state.data.content,
	              error: this.state.errors.content,
	              disabled: isUpdating,
	              changeCallback: function changeCallback(v) {
	                return _this2.change('content', v);
	              } }) })
	        ),
	        _react2.default.createElement(
	          _Layouts.ListInline,
	          { n: 2 },
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            { n: 2 },
	            _react2.default.createElement(
	              _Button2.default,
	              {
	                onClick: this.create,
	                disabled: isUpdating },
	              'Post reply'
	            )
	          ),
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            { n: 2 },
	            _react2.default.createElement(
	              _LinkButton2.default,
	              {
	                onClick: cancelCallback },
	              'Cancel'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return CommentReplyForm;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(null, function (dispatch, ownProps) {
	  var articleId = ownProps.articleId;
	  var comment = ownProps.comment;


	  return {
	    createReply: function createReply(data) {
	      dispatch((0, _repliesActions.createReply)(data, articleId, comment._id));
	    }
	  };
		})(CommentReplyForm);

/***/ },

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _TextArea = __webpack_require__(638);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Button = __webpack_require__(628);

	var _Button2 = _interopRequireDefault(_Button);

	var _LabeledInput = __webpack_require__(624);

	var _LabeledInput2 = _interopRequireDefault(_LabeledInput);

	var _commentsActions = __webpack_require__(559);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CommentForm = function (_React$Component) {
	  _inherits(CommentForm, _React$Component);

	  function CommentForm(props) {
	    _classCallCheck(this, CommentForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentForm).call(this, props));

	    _this.state = {
	      data: {
	        content: ''
	      },
	      errors: {}
	    };

	    _this.change = _this.change.bind(_this);
	    _this.create = _this.create.bind(_this);
	    return _this;
	  }

	  _createClass(CommentForm, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$article$new = newProps.article.newComment;
	      var errors = _newProps$article$new.errors;
	      var isUpdating = _newProps$article$new.isUpdating;


	      if (!isUpdating) {
	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          this.setState({
	            data: {
	              content: ''
	            }
	          });
	        } else {
	          this.setState({ errors: errors });
	        }
	      }
	    }
	  }, {
	    key: 'change',
	    value: function change(prop, value) {
	      var newData = _extends({}, this.state.data, _defineProperty({}, prop, value));

	      var newErrors = _extends({}, this.state.errors, _defineProperty({}, prop, null));

	      this.setState({
	        data: newData,
	        errors: newErrors
	      });
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      var createComment = this.props.createComment;


	      createComment(this.state.data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isUpdating = this.props.article.newComment.isUpdating;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Block2.default,
	          { n: 1 },
	          _react2.default.createElement(_LabeledInput2.default, {
	            label: 'Post a comment',
	            error: this.state.errors.content,
	            input: _react2.default.createElement(_TextArea2.default, {
	              value: this.state.data.content,
	              error: this.state.errors.content,
	              disabled: isUpdating,
	              changeCallback: function changeCallback(v) {
	                return _this2.change('content', v);
	              } }) })
	        ),
	        _react2.default.createElement(
	          _Button2.default,
	          {
	            onClick: this.create,
	            disabled: isUpdating },
	          'Post comment'
	        )
	      );
	    }
	  }]);

	  return CommentForm;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(null, function (dispatch, ownProps) {
	  var article = ownProps.article;


	  return {
	    createComment: function createComment(data) {
	      dispatch((0, _commentsActions.createComment)(data, article._id));
	    }
	  };
		})(CommentForm);

/***/ },

/***/ 819:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comments":"Comments__Comments___4WOT6","Comments__title":"Comments__Comments__title___3bVI0"};

/***/ },

/***/ 834:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(835);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Heading3 = function Heading3(_ref) {
	  var children = _ref.children;
	  var _ref$linkTo = _ref.linkTo;
	  var linkTo = _ref$linkTo === undefined ? null : _ref$linkTo;

	  if (linkTo) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { to: linkTo, className: _Heading2.default.Heading3 + ' ' + _Heading2.default.Heading3_link },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'h2',
	      { className: _Heading2.default.Heading3 },
	      children
	    );
	  }
	};

	exports.default = Heading3;

/***/ },

/***/ 835:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading3":"Heading3__Heading3___1kigK","Heading3Link":"Heading3__Heading3Link___1JCmL"};

/***/ },

/***/ 836:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(680);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Text = __webpack_require__(684);

	var _Text2 = _interopRequireDefault(_Text);

	var _Signature = __webpack_require__(675);

	var _Signature2 = _interopRequireDefault(_Signature);

	var _QuestionForm = __webpack_require__(677);

	var _QuestionForm2 = _interopRequireDefault(_QuestionForm);

	var _AskQuestion = __webpack_require__(837);

	var _AskQuestion2 = _interopRequireDefault(_AskQuestion);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AskQuestion = function AskQuestion(_ref) {
	  var formLayout = _ref.formLayout;

	  return _react2.default.createElement(
	    'div',
	    { className: _AskQuestion2.default.AskQuestion },
	    _react2.default.createElement(
	      _Block2.default,
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: _AskQuestion2.default.AskQuestion__header },
	        _react2.default.createElement(
	          _Heading2.default,
	          null,
	          'Ask a Question'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      _Block2.default,
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: _AskQuestion2.default.AskQuestion__body },
	        _react2.default.createElement(
	          _Block2.default,
	          { n: 0.5 },
	          _react2.default.createElement(
	            _Text2.default,
	            null,
	            'If you would rather ask your question than search the entire website, don’t hesitate to send your question to us!'
	          )
	        ),
	        _react2.default.createElement(_Signature2.default, null)
	      )
	    ),
	    _react2.default.createElement(_QuestionForm2.default, { type: formLayout })
	  );
	};

	exports.default = AskQuestion;

/***/ },

/***/ 837:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AskQuestion":"AskQuestion__AskQuestion___3Bk1-","AskQuestion__header":"AskQuestion__AskQuestion__header___7CQ_o","AskQuestion__body":"AskQuestion__AskQuestion__body___2DCYy"};

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(699);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(678);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Content = __webpack_require__(805);

	var _Content2 = _interopRequireDefault(_Content);

	var _Info = __webpack_require__(840);

	var _Info2 = _interopRequireDefault(_Info);

	var _Comments = __webpack_require__(812);

	var _Comments2 = _interopRequireDefault(_Comments);

	var _LinkButton = __webpack_require__(630);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArticlePage = function ArticlePage(_ref) {
	  var article = _ref.article;
	  var params = _ref.params;

	  var backLink = params.subsectionUrl ? '/' + params.sectionUrl + '/' + params.subsectionUrl : '/' + params.sectionUrl;

	  return _react2.default.createElement(
	    'article',
	    null,
	    article.articleType === 'blogpost' ? _react2.default.createElement(
	      _Block2.default,
	      { n: 0.5 },
	      _react2.default.createElement(
	        _Info2.default,
	        null,
	        'Posted on ',
	        _react2.default.createElement(_reactTime2.default, { value: new Date(article.createdAt), format: 'MMM Do, h:mA' })
	      )
	    ) : '',
	    _react2.default.createElement(
	      _Block2.default,
	      { n: 2 },
	      _react2.default.createElement(
	        _Heading2.default,
	        null,
	        article.title
	      )
	    ),
	    _react2.default.createElement(
	      _Block2.default,
	      { n: 2 },
	      _react2.default.createElement(_Content2.default, { text: article.content })
	    ),
	    _react2.default.createElement(
	      _Block2.default,
	      { n: article.articleType === 'blogpost' ? 4 : 0 },
	      _react2.default.createElement(
	        _LinkButton2.default,
	        { to: backLink },
	        '« Back to the list'
	      )
	    ),
	    article.articleType === 'blogpost' ? _react2.default.createElement(_Comments2.default, { article: article }) : ''
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var params = ownProps.params;

	  var article = state.articles.items.find(function (a) {
	    return a.url === params.articleUrl;
	  });

	  return {
	    article: article
	  };
		})(ArticlePage);

/***/ },

/***/ 840:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Info = __webpack_require__(841);

	var _Info2 = _interopRequireDefault(_Info);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Info = function Info(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Info2.default.Info },
	    children
	  );
	};

	exports.default = Info;

/***/ },

/***/ 841:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Info":"Info__Info___2Zp46"};

/***/ },

/***/ 842:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Cell = exports.Column = exports.Row = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(843);

	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Row = function Row(_ref) {
	  var _ref$bb = _ref.bb;
	  var bb = _ref$bb === undefined ? false : _ref$bb;
	  var _ref$bt = _ref.bt;
	  var bt = _ref$bt === undefined ? false : _ref$bt;
	  var _ref$br = _ref.br;
	  var br = _ref$br === undefined ? false : _ref$br;
	  var _ref$bl = _ref.bl;
	  var bl = _ref$bl === undefined ? false : _ref$bl;
	  var children = _ref.children;

	  var classNames = [_Table2.default.Row];
	  if (bt) {
	    classNames.push(_Table2.default.bt);
	  }
	  if (bb) {
	    classNames.push(_Table2.default.bb);
	  }
	  if (bl) {
	    classNames.push(_Table2.default.bl);
	  }
	  if (br) {
	    classNames.push(_Table2.default.br);
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: classNames.join(' ') },
	    children
	  );
	};

	var Column = function Column(_ref2) {
	  var _ref2$bb = _ref2.bb;
	  var bb = _ref2$bb === undefined ? false : _ref2$bb;
	  var _ref2$bt = _ref2.bt;
	  var bt = _ref2$bt === undefined ? false : _ref2$bt;
	  var _ref2$br = _ref2.br;
	  var br = _ref2$br === undefined ? false : _ref2$br;
	  var _ref2$bl = _ref2.bl;
	  var bl = _ref2$bl === undefined ? false : _ref2$bl;
	  var width = _ref2.width;
	  var children = _ref2.children;

	  var style = {};
	  if (width === 'stretch') {
	    style.flex = 1;
	  } else {
	    style.width = width;
	  }

	  var classNames = [_Table2.default.Column];
	  if (bt) {
	    classNames.push(_Table2.default.bt);
	  }
	  if (bb) {
	    classNames.push(_Table2.default.bb);
	  }
	  if (bl) {
	    classNames.push(_Table2.default.bl);
	  }
	  if (br) {
	    classNames.push(_Table2.default.br);
	  }

	  return _react2.default.createElement(
	    'div',
	    {
	      className: classNames.join(' '),
	      style: style },
	    children
	  );
	};

	var Cell = function Cell(_ref3) {
	  var _ref3$heading = _ref3.heading;
	  var heading = _ref3$heading === undefined ? false : _ref3$heading;
	  var _ref3$filled = _ref3.filled;
	  var filled = _ref3$filled === undefined ? false : _ref3$filled;
	  var _ref3$align = _ref3.align;
	  var align = _ref3$align === undefined ? 'center' : _ref3$align;
	  var children = _ref3.children;

	  var style = {
	    textAlign: align
	  };

	  var classNames = [_Table2.default.Cell];
	  if (heading) {
	    classNames.push(_Table2.default.Cell_heading);
	  }
	  if (filled) {
	    classNames.push(_Table2.default.Cell_filled);
	  }

	  return _react2.default.createElement(
	    'div',
	    {
	      style: style,
	      className: classNames.join(' ') },
	    children
	  );
	};

	exports.Row = Row;
	exports.Column = Column;
		exports.Cell = Cell;

/***/ },

/***/ 843:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Row":"Table__Row___1Ylmi","Column":"Table__Column___jTQcq","Cell":"Table__Cell___289FW","Cell_heading":"Table__Cell_heading___3Htll","Cell_filled":"Table__Cell_filled___2m5J-","bb":"Table__bb___1z4p_","bt":"Table__bt___10WQN","br":"Table__br___3U3r6","bl":"Table__bl___1vSU3"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2NvbW1lbnRzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3JlcGxpZXNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VhcmNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hbGdvbGlhU2VhcmNoLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvdXNlcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvdXNlcnNBY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlY3Rpb25zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlY3Rpb25zQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VpUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VpQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyL0FwcENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVUkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGF5b3V0cy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvRmxleC9GbGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvR3JpZC9HcmlkLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwL1dyYXAuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYWJlbGVkSW5wdXQvTGFiZWxlZElucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xhYmVsZWRJbnB1dC9MYWJlbGVkSW5wdXQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvQnJlYWRjcnVtYnMvQnJlYWRjcnVtYnMuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTGlua0J1dHRvbi9MaW5rQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9MaW5rL0xpbmsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0xpbmsvTGluay5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9jYWxlL0xvY2FsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9jYWxlL0xvY2FsZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcHBlci9XcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvbG9nby5zdmciLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0JveC9Cb3guanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MaXN0T2ZBcnRpY2xlcy9MaXN0T2ZBcnRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvTGluay9MaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0xpbmsvTGluay5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1NlbGVjdC9TZWxlY3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL1NlbGVjdC9TZWxlY3QuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb25Db250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FydGljbGVzUGFnZS9BcnRpY2xlc1BhZ2UuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NpZ25hdHVyZS9TaWduYXR1cmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZ25hdHVyZS9TaWduYXR1cmUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkZvcm0vUXVlc3Rpb25Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmdMaW5lZC9IZWFkaW5nTGluZWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZ0xpbmVkL0hlYWRpbmdMaW5lZC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvVGV4dC9UZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L1RleHQvVGV4dC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUhvbWUvQ3VzdG9tUGFnZUhvbWUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlQWJvdXQvQ3VzdG9tUGFnZUFib3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlQWJvdXQvQ3VzdG9tUGFnZUFib3V0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZVNjaGVkdWxlL0N1c3RvbVBhZ2VTY2hlZHVsZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1N1YnNlY3Rpb25Db250YWluZXIvU3Vic2VjdGlvbkNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQ29udGVudC9Db250ZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0NvbnRlbnQvQ29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudFJlcGx5Rm9ybS9Db21tZW50UmVwbHlGb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudEZvcm0vQ29tbWVudEZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMy9IZWFkaW5nMy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMy9IZWFkaW5nMy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uL0Fza1F1ZXN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bc2tRdWVzdGlvbi9Bc2tRdWVzdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FydGljbGVQYWdlL0FydGljbGVQYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9JbmZvL0luZm8uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSW5mby9JbmZvLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSZWRpcmVjdCwgaGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUnXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9BcHBDb250YWluZXInXG5pbXBvcnQgU3Vic2VjdGlvbkNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvU3Vic2VjdGlvbkNvbnRhaW5lcidcbmltcG9ydCBTZWN0aW9uQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9uQ29udGFpbmVyJ1xuaW1wb3J0IEFydGljbGVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlUGFnZSdcbi8vIGltcG9ydCBTZWN0aW9uQXJ0aWNsZSBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbkFydGljbGUnXG4vLyBpbXBvcnQgU2VjdGlvbkNhdGVnb3J5SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbkNhdGVnb3J5SXRlbSdcbi8vIGltcG9ydCBCbG9nIGZyb20gJy4vY29tcG9uZW50cy9CbG9nJ1xuLy8gaW1wb3J0IEJsb2dwb3N0IGZyb20gJy4vY29tcG9uZW50cy9CbG9ncG9zdCdcbi8vIGltcG9ydCBRdWVzdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL1F1ZXN0aW9ucydcbi8vIGltcG9ydCBGYXEgZnJvbSAnLi9jb21wb25lbnRzL0ZhcSdcbi8vIGltcG9ydCBDaGFuZ2VQYXNzd29yZCBmcm9tICcuL2NvbXBvbmVudHMvQ2hhbmdlUGFzc3dvcmQnXG4vLyBpbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cydcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpXG5cbi8vIFJlYWN0RE9NLnJlbmRlcigoXG4vLyAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuLy8gICAgIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuLy8gICAgICAgPFJvdXRlIHBhdGg9eycvJ30gY29tcG9uZW50PXtBcHB9PlxuLy8gICAgICAgICA8SW5kZXhSZWRpcmVjdCB0bz1cInF1ZXN0aW9uc1wiIC8+XG4vL1xuLy8gICAgICAgICA8Um91dGUgcGF0aD1cInNlYXJjaFwiIGNvbXBvbmVudD17U2VhcmNoUmVzdWx0c30gLz5cbi8vXG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiY2hhbmdlLXBhc3N3b3JkXCIgY29tcG9uZW50PXtDaGFuZ2VQYXNzd29yZH0gLz5cbi8vXG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwicXVlc3Rpb25zXCIgY29tcG9uZW50PXtRdWVzdGlvbnN9PlxuLy8gICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmZhcUlkXCIgY29tcG9uZW50PXtGYXF9IC8+XG4vLyAgICAgICAgIDwvUm91dGU+XG4vL1xuLy8gICAgICAgICA8Um91dGUgcGF0aD1cImJsb2dwb3N0c1wiIGNvbXBvbmVudD17QmxvZ30+XG4vLyAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6YmxvZ3Bvc3RJZFwiIGNvbXBvbmVudD17QmxvZ3Bvc3R9Lz5cbi8vICAgICAgICAgPC9Sb3V0ZT5cbi8vXG4vLyAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOnNlY3Rpb25JZFwiIGNvbXBvbmVudD17U2VjdGlvbn0+XG4vLyAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6YXJ0aWNsZUlkXCIgY29tcG9uZW50PXtTZWN0aW9uQXJ0aWNsZX0+XG4vLyAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIjppdGVtSWRcIiBjb21wb25lbnQ9e1NlY3Rpb25DYXRlZ29yeUl0ZW19IC8+XG4vLyAgICAgICAgICAgPC9Sb3V0ZT5cbi8vICAgICAgICAgPC9Sb3V0ZT5cbi8vICAgICAgIDwvUm91dGU+XG4vLyAgICAgPC9Sb3V0ZXI+XG4vLyAgIDwvUHJvdmlkZXI+XG4vLyApLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHBDb250YWluZXJ9PlxuICAgICAgICA8SW5kZXhSZWRpcmVjdCB0bz1cImhvbWVcIiAvPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiOnNlY3Rpb25VcmxcIiBjb21wb25lbnQ9e1NlY3Rpb25Db250YWluZXJ9PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXJ0aWNsZXMvOmFydGljbGVVcmxcIiBjb21wb25lbnQ9e0FydGljbGVQYWdlfSAvPlxuXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6c3Vic2VjdGlvblVybFwiIGNvbXBvbmVudD17U3Vic2VjdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cImFydGljbGVzLzphcnRpY2xlVXJsXCIgY29tcG9uZW50PXtBcnRpY2xlUGFnZX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pbmRleC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcidcblxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua01pZGRsZXdhcmVdXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoKVxuICBtaWRkbGV3YXJlLnB1c2gobG9nZ2VyKVxufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3N0b3JlLmpzXG4gKiovIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGhSZWR1Y2VyJ1xuaW1wb3J0IGZsYXNoIGZyb20gJy4vZmxhc2hSZWR1Y2VyJ1xuaW1wb3J0IHF1ZXN0aW9uIGZyb20gJy4vcXVlc3Rpb25zUmVkdWNlcidcbmltcG9ydCBhcnRpY2xlcyBmcm9tICcuL2FydGljbGVSZWR1Y2VyJ1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaFJlZHVjZXInXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXJzUmVkdWNlcidcbmltcG9ydCBzZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zUmVkdWNlcidcbmltcG9ydCB1aSBmcm9tICcuL3VpUmVkdWNlcidcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoLFxuICBmbGFzaCxcbiAgcXVlc3Rpb24sXG4gIGFydGljbGVzLFxuICBzZWFyY2gsXG4gIHVzZXIsXG4gIHNlY3Rpb25zLFxuICB1aVxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9yb290UmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9BVVRILCBMT0dJTiwgTE9HT1VUfSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgYXV0aCA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuYXV0aCxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9BVVRIOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5hdXRoLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBMT0dJTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBhY3Rpb24udXNlclxuICAgICAgfVxuICAgIGNhc2UgTE9HT1VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0aFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2F1dGhSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQVVUSCA9ICdSRVFVRVNUX0FVVEgnXG5leHBvcnQgY29uc3QgTE9HSU4gPSAnTE9HSU4nXG5leHBvcnQgY29uc3QgTE9HT1VUID0gJ0xPR09VVCdcblxuY29uc3QgcmVxdWVzdEF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9BVVRIXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICBkaXNwYXRjaCh7dHlwZTogTE9HT1VUfSlcbiAgfVxufVxuXG5jb25zdCBsb2dJbiA9IChcbiAgdXNlclxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HSU4sXG4gICAgdXNlclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhDcmVkZW50aWFscyA9IChcbiAgZW1haWwsXG4gIHBhc3N3b3JkXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXV0aCgpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vYXV0aC9hdXRoZW50aWNhdGUtY3JlZGVudGlhbHNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nLCBqc29uLmRhdGEudG9rZW4pXG4gICAgICAgICAgZGlzcGF0Y2gobG9nSW4oanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShqc29uLmRhdGEuZXJyb3IsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhUb2tlbiA9IChcbiAgdG9rZW5cbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBdXRoKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hdXRoL2F1dGhlbnRpY2F0ZS10b2tlbmAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlblxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2F1dGhBY3Rpb25zLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFNFVF9NRVNTQUdFID0gJ1NFVF9NRVNTQUdFJ1xuZXhwb3J0IGNvbnN0IFVOU0VUX01FU1NBR0UgPSAnVU5TRVRfTUVTU0FHRSdcblxuY29uc3Qgc2V0TWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGUsXG4gIHRpbWVvdXRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX01FU1NBR0UsXG4gICAgbWVzc2FnZSxcbiAgICBtZXNzYWdlVHlwZSxcbiAgICB0aW1lb3V0SWRcbiAgfVxufVxuXG5jb25zdCB1bnNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVTlNFVF9NRVNTQUdFXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZsYXNoTWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGVcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVuc2V0TWVzc2FnZSgpKVxuICAgIH0sIDIwMDApXG5cbiAgICBkaXNwYXRjaChzZXRNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2VUeXBlLCB0KSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXV0aDoge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIHVzZXI6IG51bGxcbiAgfSxcbiAgZmxhc2g6IHtcbiAgICBtZXNzYWdlOiBudWxsLFxuICAgIHR5cGU6IG51bGwsXG4gICAgdGltZW91dElkOiBudWxsXG4gIH0sXG4gIHF1ZXN0aW9uOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICBhcnRpY2xlczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdXG4gIH0sXG4gIG5ld0NvbW1lbnQ6IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBlcnJvcnM6IHt9XG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBxdWVyeTogJydcbiAgfSxcbiAgdXNlcjoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgc2VjdGlvbnM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXVxuICB9LFxuICB1aToge1xuICAgIHdpbmRvd1dpZHRoOiAwLFxuICAgIGxheW91dDogJ3MnLFxuICAgIHdpZHRoVGhyZXNob2xkOiA5NjAsXG4gICAgbWFpbk1lbnVJc09wZW46IGZhbHNlXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9pbml0aWFsU3RhdGUuanNcbiAqKi8iLCJpbXBvcnQge1NFVF9NRVNTQUdFLCBVTlNFVF9NRVNTQUdFfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGZsYXNoID0gKFxuICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaCksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlVHlwZSxcbiAgICAgICAgdGltZW91dElkOiBhY3Rpb24udGltZW91dElkXG4gICAgICB9KVxuICAgIGNhc2UgVU5TRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSwgQ09ORklSTV9RVUVTVElPTl9DUkVBVEUsIFJFSkVDVF9RVUVTVElPTl9DUkVBVEV9IGZyb20gJy4vcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHF1ZXN0aW9uID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5xdWVzdGlvbixcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTl9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fUVVFU1RJT05fQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5xdWVzdGlvbilcbiAgICBjYXNlIFJFSkVDVF9RVUVTVElPTl9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVlc3Rpb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSA9ICdSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX1FVRVNUSU9OX0NSRUFURSA9ICdDT05GSVJNX1FVRVNUSU9OX0NSRUFURSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFID0gJ1JFSkVDVF9RVUVTVElPTl9DUkVBVEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUVVFU1RJT05fQ1JFQVRFXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1FVRVNUSU9OX0NSRUFURVxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVRdWVzdGlvbiA9IChcbiAgZGF0YSxcbiAgc3VjY2Vzc01lc3NhZ2VcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDcmVhdGUoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L3F1ZXN0aW9ucy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVzdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHF1ZXN0aW9ucyBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0FSVElDTEVTLCBSRUNFSVZFX0FSVElDTEVTfSBmcm9tICcuL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IHtSRVFVRVNUX0NPTU1FTlRfQ1JFQVRFLCBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFLCBSRUpFQ1RfQ09NTUVOVF9DUkVBVEV9IGZyb20gJy4vY29tbWVudHNBY3Rpb25zJ1xuaW1wb3J0IHtSRVFVRVNUX1JFUExZX0NSRUFURSwgQ09ORklSTV9SRVBMWV9DUkVBVEUsIFJFSkVDVF9SRVBMWV9DUkVBVEV9IGZyb20gJy4vcmVwbGllc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBJTklUX0FSVElDTEUgPSAnSU5JVF9BUlRJQ0xFJ1xuY29uc3QgSU5JVF9DT01NRU5UID0gJ0lOSVRfQ09NTUVOVCdcblxuY29uc3QgbmV3Q29tbWVudCA9IChcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQ09NTUVOVF9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9DT01NRU5UX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DT01NRU5UX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUubmV3Q29tbWVudClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgbmV3UmVwbHkgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1JFUExZX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVKRUNUX1JFUExZX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLm5ld0NvbW1lbnQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGNvbW1lbnQgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJTklUX0NPTU1FTlQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmNvbW1lbnQsIHtcbiAgICAgICAgbmV3UmVwbHk6IG5ld1JlcGx5KE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5uZXdDb21tZW50KSwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ09NTUVOVF9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uY29tbWVudElkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24uY29tbWVudCwge1xuICAgICAgICAgIG5ld1JlcGx5OiBuZXdSZXBseShPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUubmV3Q29tbWVudCksIGFjdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uY29tbWVudElkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIG5ld1JlcGx5OiBuZXdSZXBseShzdGF0ZS5uZXdSZXBseSwgYWN0aW9uKSxcbiAgICAgICAgICByZXBsaWVzOiBbXG4gICAgICAgICAgICAuLi5zdGF0ZS5yZXBsaWVzLFxuICAgICAgICAgICAgYWN0aW9uLnJlcGx5XG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX1JFUExZX0NSRUFURTpcbiAgICBjYXNlIFJFSkVDVF9SRVBMWV9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uY29tbWVudElkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIG5ld1JlcGx5OiBuZXdSZXBseShzdGF0ZS5uZXdSZXBseSwgYWN0aW9uKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGFydGljbGUgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJTklUX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmFydGljbGUsIHtcbiAgICAgICAgY29tbWVudHM6IGFjdGlvbi5hcnRpY2xlLmNvbW1lbnRzLm1hcChjID0+IGNvbW1lbnQodW5kZWZpbmVkLCB7XG4gICAgICAgICAgdHlwZTogSU5JVF9DT01NRU5ULFxuICAgICAgICAgIGNvbW1lbnQ6IGNcbiAgICAgICAgfSkpLFxuICAgICAgICBuZXdDb21tZW50OiBuZXdDb21tZW50KE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5uZXdDb21tZW50KSwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ09NTUVOVF9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uYXJ0aWNsZUlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIG5ld0NvbW1lbnQ6IG5ld0NvbW1lbnQoc3RhdGUubmV3Q29tbWVudCwgYWN0aW9uKSxcbiAgICAgICAgICBjb21tZW50czogW1xuICAgICAgICAgICAgLi4uc3RhdGUuY29tbWVudHMsXG4gICAgICAgICAgICBjb21tZW50KHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICB0eXBlOiBJTklUX0NPTU1FTlQsXG4gICAgICAgICAgICAgIGNvbW1lbnQ6IGFjdGlvbi5jb21tZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9DT01NRU5UX0NSRUFURTpcbiAgICBjYXNlIFJFSkVDVF9DT01NRU5UX0NSRUFURTpcbiAgICAgIGlmIChzdGF0ZS5faWQgPT09IGFjdGlvbi5hcnRpY2xlSWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgbmV3Q29tbWVudDogbmV3Q29tbWVudChzdGF0ZS5uZXdDb21tZW50LCBhY3Rpb24pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfUkVQTFlfQ1JFQVRFOlxuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgY2FzZSBSRUpFQ1RfUkVQTFlfQ1JFQVRFOlxuICAgICAgaWYgKHN0YXRlLl9pZCA9PT0gYWN0aW9uLmFydGljbGVJZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBjb21tZW50czogc3RhdGUuY29tbWVudHMubWFwKGMgPT4gY29tbWVudChjLCBhY3Rpb24pKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGFydGljbGVzID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5hcnRpY2xlcyxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtcy5tYXAoaSA9PiBhcnRpY2xlKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IElOSVRfQVJUSUNMRSxcbiAgICAgICAgICBhcnRpY2xlOiBpXG4gICAgICAgIH0pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfQ09NTUVOVF9DUkVBVEU6XG4gICAgY2FzZSBSRUpFQ1RfQ09NTUVOVF9DUkVBVEU6XG4gICAgY2FzZSBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFOlxuICAgIGNhc2UgUkVRVUVTVF9SRVBMWV9DUkVBVEU6XG4gICAgY2FzZSBDT05GSVJNX1JFUExZX0NSRUFURTpcbiAgICBjYXNlIFJFSkVDVF9SRVBMWV9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcChpID0+IGFydGljbGUoaSwgYWN0aW9uKSlcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbmltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQVJUSUNMRVMgPSAnUkVRVUVTVF9BUlRJQ0xFUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX0FSVElDTEVTID0gJ1JFQ0VJVkVfQVJUSUNMRVMnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0QXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9BUlRJQ0xFU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVBcnRpY2xlcyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfQVJUSUNMRVMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hBcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXJ0aWNsZXMoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2FydGljbGVzL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUFydGljbGVzKGpzb24uZGF0YS5hcnRpY2xlcykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXJ0aWNsZUFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQ09NTUVOVF9DUkVBVEUgPSAnUkVRVUVTVF9DT01NRU5UX0NSRUFURSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFID0gJ0NPTkZJUk1fQ09NTUVOVF9DUkVBVEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX0NPTU1FTlRfQ1JFQVRFID0gJ1JFSkVDVF9DT01NRU5UX0NSRUFURSdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RDcmVhdGUgPSAoXG4gIGFydGljbGVJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9DT01NRU5UX0NSRUFURSxcbiAgICBhcnRpY2xlSWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKFxuICBjb21tZW50LFxuICBhcnRpY2xlSWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fQ09NTUVOVF9DUkVBVEUsXG4gICAgY29tbWVudCxcbiAgICBhcnRpY2xlSWRcbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9ycyxcbiAgYXJ0aWNsZUlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfQ09NTUVOVF9DUkVBVEUsXG4gICAgZXJyb3JzLFxuICAgIGFydGljbGVJZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb21tZW50ID0gKFxuICBkYXRhLFxuICBhcnRpY2xlSWQsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKGFydGljbGVJZCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hcnRpY2xlcy8ke2FydGljbGVJZH0vY29tbWVudHMvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29tbWVudDogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLmNvbW1lbnQsIGFydGljbGVJZCkpXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UsICdsb2cnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wQ29tcG9uZW50cyA9IHByb3Auc3BsaXQoJy4nKVxuICAgICAgICAgICAgY29uc3QgY29tbWVudFByb3AgPSBwcm9wQ29tcG9uZW50c1twcm9wQ29tcG9uZW50cy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgcGF5bG9hZFtjb21tZW50UHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCwgYXJ0aWNsZUlkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCBwb3N0IGNvbW1lbnQgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvY29tbWVudHNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1JFUExZX0NSRUFURSA9ICdSRVFVRVNUX1JFUExZX0NSRUFURSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX1JFUExZX0NSRUFURSA9ICdDT05GSVJNX1JFUExZX0NSRUFURSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfUkVQTFlfQ1JFQVRFID0gJ1JFSkVDVF9SRVBMWV9DUkVBVEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKFxuICBhcnRpY2xlSWQsXG4gIGNvbW1lbnRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9SRVBMWV9DUkVBVEUsXG4gICAgYXJ0aWNsZUlkLFxuICAgIGNvbW1lbnRJZFxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1DcmVhdGUgPSAoXG4gIHJlcGx5LFxuICBhcnRpY2xlSWQsXG4gIGNvbW1lbnRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9SRVBMWV9DUkVBVEUsXG4gICAgcmVwbHksXG4gICAgYXJ0aWNsZUlkLFxuICAgIGNvbW1lbnRJZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzLFxuICBhcnRpY2xlSWQsXG4gIGNvbW1lbnRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX1JFUExZX0NSRUFURSxcbiAgICBlcnJvcnMsXG4gICAgYXJ0aWNsZUlkLFxuICAgIGNvbW1lbnRJZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXBseSA9IChcbiAgZGF0YSxcbiAgYXJ0aWNsZUlkLFxuICBjb21tZW50SWQsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKGFydGljbGVJZCwgY29tbWVudElkKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2FydGljbGVzLyR7YXJ0aWNsZUlkfS9jb21tZW50cy8ke2NvbW1lbnRJZH0vcmVwbGllc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHJlcGx5OiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybUNyZWF0ZShqc29uLmRhdGEucmVwbHksIGFydGljbGVJZCwgY29tbWVudElkKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BDb21wb25lbnRzID0gcHJvcC5zcGxpdCgnLicpXG4gICAgICAgICAgICBjb25zdCByZXBseVByb3AgPSBwcm9wQ29tcG9uZW50c1twcm9wQ29tcG9uZW50cy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgcGF5bG9hZFtyZXBseVByb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQsIGFydGljbGVJZCwgY29tbWVudElkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCBwb3N0IGNvbW1lbnQgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcmVwbGllc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfU0VBUkNIX1JFU1VMVFMsIFJFQ0VJVkVfU0VBUkNIX1JFU1VMVFMsXG4gIFNFVF9TRUFSQ0hfUVVFUll9IGZyb20gJy4vc2VhcmNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHNlYXJjaCA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VhcmNoLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1NFQVJDSF9SRVNVTFRTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zXG4gICAgICB9KVxuICAgIGNhc2UgU0VUX1NFQVJDSF9RVUVSWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBxdWVyeTogYWN0aW9uLnF1ZXJ5XG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWFyY2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IGluZGV4IGZyb20gJy4vYWxnb2xpYVNlYXJjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU0VBUkNIX1JFU1VMVFMgPSAnUkVRVUVTVF9TRUFSQ0hfUkVTVUxUUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTID0gJ1JFQ0VJVkVfU0VBUkNIX1JFU1VMVFMnXG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9RVUVSWSA9ICdTRVRfU0VBUkNIX1FVRVJZJ1xuXG5leHBvcnQgY29uc3Qgc2V0U2VhcmNoUXVlcnkgPSAoXG4gIHFcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TRUFSQ0hfUVVFUlksXG4gICAgcXVlcnk6IHFcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0U2VhcmNoUmVzdWx0cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1NFQVJDSF9SRVNVTFRTXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVNlYXJjaFJlc3VsdHMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoUmVzdWx0cyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2VhcmNoUmVzdWx0cygpKVxuXG4gICAgcmV0dXJuIGluZGV4LnNlYXJjaChnZXRTdGF0ZSgpLnNlYXJjaC5xdWVyeSwgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgZGlzcGF0Y2gocmVjZWl2ZVNlYXJjaFJlc3VsdHMoY29udGVudC5oaXRzKSlcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VhcmNoQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gnXG5cbmNvbnN0IGNsaWVudCA9IGFsZ29saWFzZWFyY2goJzc0UzFKTkIxWlQnLCAnM2RlNmZkYmFmYzQ3N2NmMDE5NjczYmI4MTA0M2FlMGQnKVxuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdwYWdlcycpXG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYWxnb2xpYVNlYXJjaC5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9VUERBVEVfVVNFUiwgQ09ORklSTV9VUERBVEVfVVNFUiwgUkVKRUNUX1VQREFURV9VU0VSfSBmcm9tICcuL3VzZXJzQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHVzZXIgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnVzZXIsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUudXNlcilcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3VzZXJzUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEVfVVNFUiA9ICdSRVFVRVNUX1VQREFURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fVVBEQVRFX1VTRVIgPSAnQ09ORklSTV9VUERBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBSRUpFQ1RfVVBEQVRFX1VTRVIgPSAnUkVKRUNUX1VQREFURV9VU0VSJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtVXBkYXRlID0gKFxuICBpZCxcbiAgdXBkYXRlZEl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1VTRVIsXG4gICAgaWQsXG4gICAgdXBkYXRlZEl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RVcGRhdGUgPSAoXG4gIGlkLFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9VUERBVEVfVVNFUixcbiAgICBpZCxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IChcbiAgaWQsXG4gIGRhdGEsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKGlkKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L3VzZXJzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VyOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybVVwZGF0ZShpZCwganNvbi5kYXRhLnVzZXIpKVxuICAgICAgICAgIGlmIChzdWNjZXNzTWVzc2FnZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKHN1Y2Nlc3NNZXNzYWdlLCAnbG9nJykpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgcGF5bG9hZFtwcm9wXSA9IGpzb24uZGF0YS5lcnJvcnNbcHJvcF0ubWVzc2FnZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdFVwZGF0ZShpZCwgcGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgdXBkYXRlIHVzZXIgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS91c2Vyc0FjdGlvbnMuanN4XG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1NFQ1RJT05TLCBSRUNFSVZFX1NFQ1RJT05TfSBmcm9tICcuL3NlY3Rpb25zQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHNlY3Rpb25zID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5zZWN0aW9ucyxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9TRUNUSU9OUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9TRUNUSU9OUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtc1xuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VjdGlvbnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWN0aW9uc1JlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU0VDVElPTlMgPSAnUkVRVUVTVF9TRUNUSU9OUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1NFQ1RJT05TID0gJ1JFQ0VJVkVfU0VDVElPTlMnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0U2VjdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9TRUNUSU9OU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTZWN0aW9ucyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfU0VDVElPTlMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2VjdGlvbnMoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L3NlY3Rpb25zL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVNlY3Rpb25zKGpzb24uZGF0YS5pdGVtcykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VjdGlvbnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IHtTRVRfQlJFQUtQT0lOVCwgVE9HR0xFX01BSU5fTUVOVX0gZnJvbSAnLi91aUFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCB1aSA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUudWksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9CUkVBS1BPSU5UOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHdpbmRvd1dpZHRoOiBhY3Rpb24ud2lkdGgsXG4gICAgICAgIGxheW91dDogYWN0aW9uLmxheW91dFxuICAgICAgfSlcbiAgICBjYXNlIFRPR0dMRV9NQUlOX01FTlU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbWFpbk1lbnVJc09wZW46ICFzdGF0ZS5tYWluTWVudUlzT3BlblxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdWlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS91aVJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFNFVF9CUkVBS1BPSU5UID0gJ1NFVF9CUkVBS1BPSU5UJ1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9NQUlOX01FTlUgPSAnVE9HR0xFX01BSU5fTUVOVSdcblxuZXhwb3J0IGNvbnN0IHNldEJyZWFrcG9pbnQgPSAoXG4gIHdpZHRoLFxuICBsYXlvdXRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9CUkVBS1BPSU5ULFxuICAgIHdpZHRoLFxuICAgIGxheW91dFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVNYWluTWVudSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBUT0dHTEVfTUFJTl9NRU5VXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS91aUFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2xvZ2luV2l0aFRva2VufSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcbmltcG9ydCB7ZmV0Y2hBcnRpY2xlc30gZnJvbSAnLi4vLi4vc3RvcmUvYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQge2ZldGNoU2VjdGlvbnN9IGZyb20gJy4uLy4uL3N0b3JlL3NlY3Rpb25zQWN0aW9ucydcbmltcG9ydCB7c2V0QnJlYWtwb2ludH0gZnJvbSAnLi4vLi4vc3RvcmUvdWlBY3Rpb25zJ1xuXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luJ1xuaW1wb3J0IEFwcCBmcm9tICcuLi9BcHAnXG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5oYW5kbGVSZXNpemUgPSB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVSZXNpemUgKCkge1xuICAgIGNvbnN0IHtzZXRCcmVha3BvaW50fSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5vdXRlcldpZHRoXG5cbiAgICBsZXQgbGF5b3V0ID0gJ3MnXG4gICAgaWYgKHdpbmRvd1dpZHRoID49IDcwMCAmJiB3aW5kb3dXaWR0aCA8IDEwMDApIHtcbiAgICAgIGxheW91dCA9ICdtJ1xuICAgIH0gZWxzZSBpZiAod2luZG93V2lkdGggPj0gMTAwMCAmJiB3aW5kb3dXaWR0aCA8IDEzMDApIHtcbiAgICAgIGxheW91dCA9ICdsJ1xuICAgIH0gZWxzZSBpZiAod2luZG93V2lkdGggPj0gMTMwMCkge1xuICAgICAgbGF5b3V0ID0gJ3hsJ1xuICAgIH1cblxuICAgIHNldEJyZWFrcG9pbnQod2luZG93V2lkdGgsIGxheW91dClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgdGhpcy5wcm9wcy5hdHRlbXB0VG9rZW4odG9rZW4pXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxuICAgIHRoaXMuaGFuZGxlUmVzaXplKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHt1c2VyLCBmZXRjaFNlY3Rpb25zLCBmZXRjaEFydGljbGVzfSA9IG5ld1Byb3BzXG5cbiAgICBpZiAodXNlciAmJiAhdGhpcy5wcm9wcy51c2VyKSB7XG4gICAgICBmZXRjaFNlY3Rpb25zKClcbiAgICAgIGZldGNoQXJ0aWNsZXMoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzQXV0aG9yaXppbmcsIGlzRmV0Y2hpbmcsIHVzZXIsIHdpbmRvd1dpZHRoLCB3aWR0aFRocmVzaG9sZCwgY2hpbGRyZW4sIGxvY2F0aW9uLCBwYXJhbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzQXV0aG9yaXppbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBpZiAoaXNGZXRjaGluZykge1xuICAgICAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiA8QXBwIHVzZXI9e3VzZXJ9XG4gICAgICAgICAgICB3aWR0aD17d2luZG93V2lkdGh9XG4gICAgICAgICAgICB3aWR0aFRocmVzaG9sZD17d2lkdGhUaHJlc2hvbGR9XG4gICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgICBwYXJhbXM9e3BhcmFtc31cbiAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDxMb2dpbiAvPlxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpbmRvd1dpZHRoOiBzdGF0ZS51aS53aW5kb3dXaWR0aCxcbiAgICAgIHdpZHRoVGhyZXNob2xkOiBzdGF0ZS51aS53aWR0aFRocmVzaG9sZCxcbiAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLmFydGljbGVzLmlzRmV0Y2hpbmcgfHwgc3RhdGUuc2VjdGlvbnMuaXNGZXRjaGluZyxcbiAgICAgIGlzQXV0aG9yaXppbmc6IHN0YXRlLmF1dGguaXNGZXRjaGluZyxcbiAgICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlclxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRCcmVha3BvaW50OiAod2lkdGgsIGxheW91dCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRCcmVha3BvaW50KHdpZHRoLCBsYXlvdXQpKVxuICAgICAgfSxcbiAgICAgIGF0dGVtcHRUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luV2l0aFRva2VuKHRva2VuKSlcbiAgICAgIH0sXG4gICAgICBmZXRjaEFydGljbGVzOiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQXJ0aWNsZXMoKSlcbiAgICAgIH0sXG4gICAgICBmZXRjaFNlY3Rpb25zOiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2VjdGlvbnMoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQXBwQ29udGFpbmVyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyL0FwcENvbnRhaW5lci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2FkaW5nLmNzcydcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSAnLi4vVUknXG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2FkaW5nfT5cbiAgICAgIDxTcGlubmVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxvYWRpbmdcIjpcIkxvYWRpbmdfX0xvYWRpbmdfX18zcHljelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnLi9CcmVhZGNydW1icydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuL0xpbmtCdXR0b24nXG5pbXBvcnQge01vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3Rlcn0gZnJvbSAnLi9Nb2RhbFdpbmRvdydcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcidcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCdcblxuZXhwb3J0IHtMaW5rQnV0dG9uLCBTcGlubmVyLCBCdXR0b24sIExpbmssIFRleHRJbnB1dCwgVGV4dEFyZWEsIEJyZWFkY3J1bWJzLCBBbGVydCxcbiAgTW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvVUkuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BbGVydC5jc3MnXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi8uLi9MYXlvdXRzJ1xuXG5jb25zdCBBbGVydCA9ICh7XG4gIG1lc3NhZ2UsXG4gIHRoZW1lID0gJ2RlZmF1bHQnLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3QgbWVzc2FnZVN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICBjb25zdCBtZXNzYWdlQ2xhc3NOYW1lcyA9IFtzdHlsZXMuQWxlcnRfX21lc3NhZ2VdXG5cbiAgc3dpdGNoICh0aGVtZSkge1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWVzLnB1c2goc3R5bGVzLkFsZXJ0X19tZXNzYWdlX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdkZWZhdWx0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgbWVzc2FnZUNsYXNzTmFtZXMucHVzaChzdHlsZXMuQWxlcnRfX21lc3NhZ2VfZGVmYXVsdClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BbGVydH0+XG4gICAgICB7bWVzc2FnZVxuICAgICAgICA/IDxCbG9jaz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXttZXNzYWdlU3R5bGV9IGNsYXNzTmFtZT17bWVzc2FnZUNsYXNzTmFtZXMuam9pbignICcpfT57bWVzc2FnZX08L2Rpdj5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgOiBudWxsXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkFsZXJ0XCI6XCJBbGVydF9fQWxlcnRfX18zN19RQ1wiLFwiQWxlcnRfX21lc3NhZ2VcIjpcIkFsZXJ0X19BbGVydF9fbWVzc2FnZV9fXzJ3Q1pGXCIsXCJBbGVydF9fbWVzc2FnZV9kZWZhdWx0XCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZGVmYXVsdF9fX25fUjlDXCIsXCJBbGVydF9fbWVzc2FnZV9lcnJvclwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX2Vycm9yX19fMmlkNFdcIixcImFsZXJ0LWVudGVyXCI6XCJBbGVydF9fYWxlcnQtZW50ZXJfX19LNkpkTFwiLFwiYWxlcnQtZW50ZXItYWN0aXZlXCI6XCJBbGVydF9fYWxlcnQtZW50ZXItYWN0aXZlX19fM3ZsQ3dcIixcImFsZXJ0LWxlYXZlXCI6XCJBbGVydF9fYWxlcnQtbGVhdmVfX18yUHBZVFwiLFwiYWxlcnQtbGVhdmUtYWN0aXZlXCI6XCJBbGVydF9fYWxlcnQtbGVhdmUtYWN0aXZlX19fMmhhX1FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vQmxvY2snXG5pbXBvcnQgRmxleCBmcm9tICcuL0ZsZXgnXG5pbXBvcnQge0dyaWQsIEdyaWRJdGVtfSBmcm9tICcuL0dyaWQnXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtfSBmcm9tICcuL0xpc3QnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuL0xpc3RJbmxpbmUnXG5pbXBvcnQge01lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlfSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IHtQYWdlLCBQYWdlQ29udGVudH0gZnJvbSAnLi9QYWdlJ1xuaW1wb3J0IFdyYXAgZnJvbSAnLi9XcmFwJ1xuaW1wb3J0IElucHV0RGVjb3JhdG9yIGZyb20gJy4vSW5wdXREZWNvcmF0b3InXG5pbXBvcnQgTGFiZWxlZElucHV0IGZyb20gJy4vTGFiZWxlZElucHV0J1xuXG5leHBvcnQge0Jsb2NrLCBGbGV4LCBXcmFwLCBHcmlkLCBHcmlkSXRlbSxcbiAgTGlzdCwgTGlzdEl0ZW0sIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLFxuICBNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZSxcbiAgUGFnZSwgUGFnZUNvbnRlbnQsIElucHV0RGVjb3JhdG9yLCBMYWJlbGVkSW5wdXR9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgQmxvY2sgPSAoe1xuICBuID0gMSxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvQmxvY2svQmxvY2suanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGbGV4ID0gKHtcbiAganVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXMgPSAnY2VudGVyJyxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGZsZXhEaXJlY3Rpb24gPSAncm93JyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZmxleERpcmVjdGlvbixcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9GbGV4L0ZsZXguanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vR3JpZC5jc3MnXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IEdyaWQgPSAoe1xuICBndXR0ZXJCb3R0b20gPSAzLFxuICBhbGlnbkl0ZW1zID0gJ3N0cmV0Y2gnLFxuICBqdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYWxpZ25Db250ZW50ID0gJ3NwYWNlLWJldHdlZW4nLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50LFxuICAgIGFsaWduQ29udGVudCxcbiAgICBtYXJnaW5Cb3R0b206IGAtJHtndXR0ZXJCb3R0b20gKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5HcmlkfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBHcmlkSXRlbSA9ICh7XG4gIHNwYW4gPSAwLFxuICBvdXRPZiA9IDEyLFxuICBndXR0ZXIgPSAzLFxuICBndXR0ZXJCb3R0b20gPSAzLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgZmxleDogJzEnLFxuICAgIG1hcmdpbkJvdHRvbTogYCR7Z3V0dGVyQm90dG9tICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgaWYgKHNwYW4gJiYgb3V0T2YpIHtcbiAgICBzdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlLCB7XG4gICAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgICAgd2lkdGg6IHNwYW4gPT09IG91dE9mID8gJzEwMCUnIDogYCR7MTAwICogc3BhbiAvIG91dE9mIC0gZ3V0dGVyfSVgXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLkdyaWRJdGVtfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0dyaWQsIEdyaWRJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiR3JpZFwiOlwiR3JpZF9fR3JpZF9fXzI3cVBuXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpc3QuY3NzJ1xuXG5jb25zdCBMaXN0ID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAtJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0fSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3VsPlxuICApXG59XG5cbmNvbnN0IExpc3RJdGVtID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaSBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RfX2l0ZW19ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IHtMaXN0LCBMaXN0SXRlbX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImxpc3RcIjpcIkxpc3RfX2xpc3RfX18ya0JVZFwiLFwibGlzdF9faXRlbVwiOlwiTGlzdF9fbGlzdF9faXRlbV9fXzFEMlZGXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpc3RJbmxpbmUuY3NzJ1xuXG5jb25zdCBMaXN0SW5saW5lID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlbixcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxuICBqdXN0ZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYC0ke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAtJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RmeUNvbnRlbnRcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdElubGluZX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKVxufVxuXG5jb25zdCBMaXN0SW5saW5lSXRlbSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0SW5saW5lX19pdGVtfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaXN0SW5saW5lXCI6XCJMaXN0SW5saW5lX19saXN0SW5saW5lX19fM0dqaHVcIixcImxpc3RJbmxpbmVfX2l0ZW1cIjpcIkxpc3RJbmxpbmVfX2xpc3RJbmxpbmVfX2l0ZW1fX18ySzFrUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuY3NzXG4gKiogbW9kdWxlIGlkID0gNjE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZWRpYS5jc3MnXG5cbmNvbnN0IE1lZGlhID0gKHtcbiAgYWxpZ25JdGVtcyA9ICdmbGV4LXN0YXJ0JyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYWxpZ25JdGVtc1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMubWVkaWF9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhQm9keSA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYV9fYm9keX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFGaWd1cmUgPSAoe1xuICBuID0gMSxcbiAgbmwgPSAwLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5SaWdodDogYCR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYCR7YmFzZWxpbmUgKiBubH1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYV9fZmlndXJlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge01lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJtZWRpYVwiOlwiTWVkaWFfX21lZGlhX19fM2EwMEdcIixcIm1lZGlhX19maWd1cmVcIjpcIk1lZGlhX19tZWRpYV9fZmlndXJlX19fMjRad0FcIixcIm1lZGlhX19ib2R5XCI6XCJNZWRpYV9fbWVkaWFfX2JvZHlfX18zVmQyLVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgUGFnZSA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IFBhZ2VDb250ZW50ID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZmxleDogJzEnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuICApXG59XG5cbmV4cG9ydCB7UGFnZSwgUGFnZUNvbnRlbnR9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL1BhZ2UvUGFnZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFdyYXAgPSAoe1xuICB3aWR0aCA9ICc5NSUnLFxuICBtYXhXaWR0aCA9ICc4MHJlbScsIC8vIDEyODBweCBwcm92aWRlZCAxZW0gPT09IDE2cHhcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoLFxuICAgIG1heFdpZHRoLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JhcFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwL1dyYXAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5wdXREZWNvcmF0b3IuY3NzJ1xuXG5jb25zdCBJbnB1dERlY29yYXRvciA9ICh7XG4gIGlucHV0LFxuICBzdWZmaXgsXG4gIHByZWZpeCA9IG51bGxcbn0pID0+IHtcbiAgbGV0IHByZWZpeEVsID0gbnVsbFxuICBpZiAocHJlZml4KSB7XG4gICAgcHJlZml4RWwgPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0RGVjb3JhdG9yX19wcmVmaXh9PntwcmVmaXh9PC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0RGVjb3JhdG9yfT5cbiAgICAgIHtwcmVmaXhFbH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dERlY29yYXRvcl9faW5wdXR9PlxuICAgICAgICB7aW5wdXR9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dERlY29yYXRvcl9fc3VmZml4fT5cbiAgICAgICAge3N1ZmZpeH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RGVjb3JhdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIklucHV0RGVjb3JhdG9yXCI6XCJJbnB1dERlY29yYXRvcl9fSW5wdXREZWNvcmF0b3JfX184b0NWbVwiLFwiSW5wdXREZWNvcmF0b3JfX3ByZWZpeFwiOlwiSW5wdXREZWNvcmF0b3JfX0lucHV0RGVjb3JhdG9yX19wcmVmaXhfX18zbUZ2SFwiLFwiSW5wdXREZWNvcmF0b3JfX2lucHV0XCI6XCJJbnB1dERlY29yYXRvcl9fSW5wdXREZWNvcmF0b3JfX2lucHV0X19fdm5ad3ZcIixcIklucHV0RGVjb3JhdG9yX19zdWZmaXhcIjpcIklucHV0RGVjb3JhdG9yX19JbnB1dERlY29yYXRvcl9fc3VmZml4X19fM0VjS3FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvSW5wdXREZWNvcmF0b3IvSW5wdXREZWNvcmF0b3IuY3NzXG4gKiogbW9kdWxlIGlkID0gNjIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MYWJlbGVkSW5wdXQuY3NzJ1xuXG5pbXBvcnQgRmxleCBmcm9tICcuLi9GbGV4J1xuXG5jb25zdCBMYWJlbGVkSW5wdXQgPSAoe1xuICBpbnB1dCxcbiAgbGFiZWwsXG4gIGVycm9yID0gZmFsc2UsXG4gIGludmVyc2UgPSBmYWxzZVxufSkgPT4ge1xuICBsZXQgY2xhc3NlcyA9IFtzdHlsZXMuTGFiZWxlZElucHV0XVxuICBpZiAoaW52ZXJzZSkge1xuICAgIGNsYXNzZXMucHVzaChzdHlsZXMuTGFiZWxlZElucHV0X2ludmVyc2UpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsYWJlbCBjbGFzc05hbWU9e2Ake2NsYXNzZXMuam9pbignICcpfWB9PlxuICAgICAgPEZsZXhcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxhYmVsZWRJbnB1dF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cblxuICAgICAgICB7ZXJyb3JcbiAgICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGFiZWxlZElucHV0X19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgICAgICAgIDogJydcbiAgICAgICAgfVxuICAgICAgPC9GbGV4PlxuXG4gICAgICB7aW5wdXR9XG4gICAgPC9sYWJlbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYWJlbGVkSW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGFiZWxlZElucHV0L0xhYmVsZWRJbnB1dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMYWJlbGVkSW5wdXRcIjpcIkxhYmVsZWRJbnB1dF9fTGFiZWxlZElucHV0X19fM19sMlJcIixcIkxhYmVsZWRJbnB1dF9fbGFiZWxcIjpcIkxhYmVsZWRJbnB1dF9fTGFiZWxlZElucHV0X19sYWJlbF9fXzJfZTlzXCIsXCJMYWJlbGVkSW5wdXRfX2Vycm9yXCI6XCJMYWJlbGVkSW5wdXRfX0xhYmVsZWRJbnB1dF9fZXJyb3JfX18xR1dvUVwiLFwiTGFiZWxlZElucHV0X2ludmVyc2VcIjpcIkxhYmVsZWRJbnB1dF9fTGFiZWxlZElucHV0X2ludmVyc2VfX181OFU0UlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYWJlbGVkSW5wdXQvTGFiZWxlZElucHV0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CcmVhZGNydW1icy5jc3MnXG5cbmNvbnN0IEJyZWFkY3J1bWJzID0gKHtcbiAgaXRlbXNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkJyZWFkY3J1bWJzfT5cbiAgICAgIHtpdGVtcy5tYXAoaSA9PlxuICAgICAgICA8TGluayB0bz17aS5wYXRofSBjbGFzc05hbWU9e3N0eWxlcy5CcmVhZGNydW1ic19faXRlbX0+e2kubGFiZWx9PC9MaW5rPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1ic1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQnJlYWRjcnVtYnMvQnJlYWRjcnVtYnMuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQnJlYWRjcnVtYnNcIjpcIkJyZWFkY3J1bWJzX19CcmVhZGNydW1ic19fXzJXTGowXCIsXCJCcmVhZGNydW1ic19faXRlbVwiOlwiQnJlYWRjcnVtYnNfX0JyZWFkY3J1bWJzX19pdGVtX19fMURheUlcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0JyZWFkY3J1bWJzL0JyZWFkY3J1bWJzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24uY3NzJ1xuXG5jb25zdCBCdXR0b24gPSAoe1xuICBjaGlsZHJlbixcbiAgb25DbGljayxcbiAgdG8gPSBudWxsLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0aGVtZSA9ICdhY2NlbnQxJyxcbiAgaGFzUHJlZml4ID0gZmFsc2UsXG4gIGhhc1N1ZmZpeCA9IGZhbHNlXG59KSA9PiB7XG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5CdXR0b259XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQxJyA/IHN0eWxlcy5CdXR0b25fYWNjZW50MSA6IG51bGx9XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQyJyA/IHN0eWxlcy5CdXR0b25fYWNjZW50MiA6IG51bGx9XG4gICAgICAgICR7aGFzUHJlZml4ID8gc3R5bGVzLkJ1dHRvbl9oYXNQcmVmaXggOiBudWxsfVxuICAgICAgICAke2hhc1N1ZmZpeCA/IHN0eWxlcy5CdXR0b25faGFzU3VmZml4IDogbnVsbH1gfVxuICAgICAgICB0bz17dG99PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkJ1dHRvbn1cbiAgICAgICAgJHt0aGVtZSA9PT0gJ2FjY2VudDEnID8gc3R5bGVzLkJ1dHRvbl9hY2NlbnQxIDogbnVsbH1cbiAgICAgICAgJHt0aGVtZSA9PT0gJ2FjY2VudDInID8gc3R5bGVzLkJ1dHRvbl9hY2NlbnQyIDogbnVsbH1cbiAgICAgICAgJHtoYXNQcmVmaXggPyBzdHlsZXMuQnV0dG9uX2hhc1ByZWZpeCA6IG51bGx9XG4gICAgICAgICR7aGFzU3VmZml4ID8gc3R5bGVzLkJ1dHRvbl9oYXNTdWZmaXggOiBudWxsfWB9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgb25DbGljaz17b25DbGlja30+e2NoaWxkcmVufTwvYnV0dG9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQnV0dG9uXCI6XCJCdXR0b25fX0J1dHRvbl9fX1FJN2IyXCIsXCJCdXR0b25fYWNjZW50MVwiOlwiQnV0dG9uX19CdXR0b25fYWNjZW50MV9fXzFkZmh3XCIsXCJCdXR0b25fYWNjZW50MlwiOlwiQnV0dG9uX19CdXR0b25fYWNjZW50Ml9fX1puOHo5XCIsXCJCdXR0b25faGFzUHJlZml4XCI6XCJCdXR0b25fX0J1dHRvbl9oYXNQcmVmaXhfX19pektacVwiLFwiQnV0dG9tX2hhc1N1ZmZpeFwiOlwiQnV0dG9uX19CdXR0b21faGFzU3VmZml4X19fSFdYbGFcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNjI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmtCdXR0b24uY3NzJ1xuXG5jb25zdCBMaW5rQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sXG4gIG9uQ2xpY2ssXG4gIHRvID0gbnVsbCxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgdGhlbWUgPSAnYWNjZW50MSdcbn0pID0+IHtcbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkxpbmtCdXR0b259XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQxJyA/IHN0eWxlcy5MaW5rQnV0dG9uX2FjY2VudDEgOiBudWxsfVxuICAgICAgICAke3RoZW1lID09PSAnYWNjZW50MicgPyBzdHlsZXMuTGlua0J1dHRvbl9hY2NlbnQyIDogbnVsbH1gfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuTGlua0J1dHRvbn1cbiAgICAgICAgJHt0aGVtZSA9PT0gJ2FjY2VudDEnID8gc3R5bGVzLkxpbmtCdXR0b25fYWNjZW50MSA6IG51bGx9XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQyJyA/IHN0eWxlcy5MaW5rQnV0dG9uX2FjY2VudDIgOiBudWxsfWB9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgb25DbGljaz17b25DbGlja30+e2NoaWxkcmVufTwvYnV0dG9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTGlua0J1dHRvblwiOlwiTGlua0J1dHRvbl9fTGlua0J1dHRvbl9fXzJGbGltXCIsXCJMaW5rQnV0dG9uX2FjY2VudDFcIjpcIkxpbmtCdXR0b25fX0xpbmtCdXR0b25fYWNjZW50MV9fXzJsYzFUXCIsXCJMaW5rQnV0dG9uX2FjY2VudDJcIjpcIkxpbmtCdXR0b25fX0xpbmtCdXR0b25fYWNjZW50Ml9fXzF6ZndPXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNjMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbFdpbmRvdy5jc3MnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IE1vZGFsV2luZG93ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHdpZHRoOiA0MFxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHttdWx0aXBsaWVycy53aWR0aCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbH0+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dIZWFkZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDIsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19faGVhZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0JvZHkgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDMsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2JvZHl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0Zvb3RlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19mb290ZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTW9kYWxcIjpcIk1vZGFsV2luZG93X19Nb2RhbF9fXzJrbGNnXCIsXCJNb2RhbFdpbmRvd1wiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19fMnRWeVpcIixcIk1vZGFsV2luZG93X19oZWFkZXJcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19faGVhZGVyX19fMVFyV0hcIixcIk1vZGFsV2luZG93X19ib2R5XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2JvZHlfX18zUXVRaFwiLFwiTW9kYWxXaW5kb3dfX2Zvb3RlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19mb290ZXJfX18ySTBURlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmsgYXMgUm91dGVyTGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGluay5jc3MnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgTGluayA9ICh7XG4gIGNoaWxkcmVuLFxuICBzbWFsbCxcbiAgdG8sXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxuICBocmVmLFxuICB0aGVtZSA9ICdhY2NlbnQxJ1xufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgZm9udFNpemU6ICcxcmVtJ1xuICB9XG5cbiAgaWYgKHNtYWxsKSB7XG4gICAgc3R5bGUgPSB7XG4gICAgICBmb250U2l6ZTogYCR7MS4xNjcgKiBiYXNlbGluZX1yZW1gXG4gICAgfVxuICB9XG5cbiAgbGV0IGNsYXNzTmFtZSA9IFtdXG4gIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5MaW5rKVxuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkxpbmtfZXJyb3IpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FjY2VudCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5MaW5rX2FjY2VudClcbiAgICAgIGJyZWFrXG4gIH1cblxuICBpZiAodG8pIHtcbiAgICByZXR1cm4gPFJvdXRlckxpbmtcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lLmpvaW4oJyAnKX1gfVxuICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuTGlua19hY3RpdmV9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICB0bz17dG99PntjaGlsZHJlbn08L1JvdXRlckxpbms+XG4gIH0gZWxzZSBpZiAob25DbGljaykge1xuICAgIHJldHVybiA8YnV0dG9uXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZS5qb2luKCcgJyl9YH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L2J1dHRvbj5cbiAgfSBlbHNlIGlmIChocmVmKSB7XG4gICAgcmV0dXJuIDxhXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBocmVmPXtocmVmfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfWB9PntjaGlsZHJlbn08L2E+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvTGluay9MaW5rLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxpbmtcIjpcIkxpbmtfX0xpbmtfX18zaXNnWVwiLFwiTGlua19hY2NlbnRcIjpcIkxpbmtfX0xpbmtfYWNjZW50X19fQTgxSEhcIixcIkxpbmtfZXJyb3JcIjpcIkxpbmtfX0xpbmtfZXJyb3JfX18yaEtLY1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTGluay9MaW5rLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Bpbm5lci5jc3MnXG5cbmNvbnN0IFNwaW5uZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TcGlubmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcl9faW5uZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTJ9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUzfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNH1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTV9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU2fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlN31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTh9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU5fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTB9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEyfWB9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNwaW5uZXJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX18xZml5a1wiLFwiU3Bpbm5lcl9faW5uZXJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2lubmVyX19fNTh2Y1RcIixcIlNwaW5uZXJfX2NpcmNsZVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlX19fMlp1Z09cIixcInNrLWNpcmNsZUZhZGVEZWxheVwiOlwiU3Bpbm5lcl9fc2stY2lyY2xlRmFkZURlbGF5X19fMUV0bjhcIixcIlNwaW5uZXJfX2NpcmNsZTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTFfX19CT0Q3blwiLFwiU3Bpbm5lcl9fY2lyY2xlMlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMl9fXzJhQnRyXCIsXCJTcGlubmVyX19jaXJjbGUzXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUzX19fMUJhWmZcIixcIlNwaW5uZXJfX2NpcmNsZTRcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTRfX18zVjVyN1wiLFwiU3Bpbm5lcl9fY2lyY2xlNVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNV9fXzNESjVYXCIsXCJTcGlubmVyX19jaXJjbGU2XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU2X19fWnBVNW1cIixcIlNwaW5uZXJfX2NpcmNsZTdcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTdfX19YcG5LNVwiLFwiU3Bpbm5lcl9fY2lyY2xlOFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOF9fXzFfUlJYXCIsXCJTcGlubmVyX19jaXJjbGU5XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU5X19fZk8wT0dcIixcIlNwaW5uZXJfX2NpcmNsZTEwXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMF9fX25pMzVBXCIsXCJTcGlubmVyX19jaXJjbGUxMVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTFfX18xaGF2OVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTEyX19fMmlwelRcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7YW5jaG9ybWV9IGZyb20gJ2FuY2hvcm1lLmpzJ1xuaW1wb3J0IHN0cmlwdGFncyBmcm9tICdzdHJpcHRhZ3MnXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnXG5cbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJy4uL0lucHV0TGFiZWwnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dEFyZWEuY3NzJ1xuXG5jb25zdCBwbGFpblRvSHRtbCA9ICh0ZXh0KSA9PiBgPHA+JHthbmNob3JtZS5qcyh0ZXh0LnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+JykpfTwvcD5gXG5jb25zdCBodG1sVG9QbGFpbiA9IChodG1sKSA9PiBzdHJpcHRhZ3MoaHRtbC5yZXBsYWNlKC88YnIgXFwvPi9nLCAnXFxuJykpXG5cbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBwbGFpblRvSHRtbCh0aGlzLl9lbGVtZW50LnZhbHVlKVxuICAgIGNvbnN0IHtjaGFuZ2VDYWxsYmFja30gPSB0aGlzLnByb3BzXG5cbiAgICBjaGFuZ2VDYWxsYmFjayh2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2Vycm9yLCB2YWx1ZSwgcGxhY2Vob2xkZXIsIGRpc2FibGVkID0gZmFsc2V9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0YXJlYSByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgIHZhbHVlPXtodG1sVG9QbGFpbih2YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLlRleHRBcmVhfSAke2Vycm9yID8gc3R5bGVzLlRleHRBcmVhX2Vycm9yIDogbnVsbH1gfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG1pblJvd3M9ezV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9UZXh0QXJlYS9UZXh0QXJlYS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dExhYmVsLmNzcydcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IElucHV0TGFiZWwgPSAoe1xuICBsYWJlbCxcbiAgZXJyb3Jcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLklucHV0TGFiZWx9ICR7ZXJyb3IgPyBzdHlsZXMuSW5wdXRMYWJlbF9lcnJvciA6ICcnfWB9PlxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIHtsYWJlbFxuICAgICAgICA/IDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0TGFiZWxfX2xhYmVsfT57bGFiZWx9PC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAge2Vycm9yXG4gICAgICAgID8gPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRMYWJlbF9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dExhYmVsXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSW5wdXRMYWJlbFwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9fXzFDZW1JXCIsXCJJbnB1dExhYmVsX19sYWJlbFwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9fbGFiZWxfX18yWXlfUFwiLFwiSW5wdXRMYWJlbF9fZXJyb3JcIjpcIklucHV0TGFiZWxfX0lucHV0TGFiZWxfX2Vycm9yX19fMk1GTmRcIixcIklucHV0TGFiZWxfZXJyb3JcIjpcIklucHV0TGFiZWxfX0lucHV0TGFiZWxfZXJyb3JfX18zRXA1cVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXRMYWJlbC9JbnB1dExhYmVsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGV4dEFyZWFcIjpcIlRleHRBcmVhX19UZXh0QXJlYV9fXzE5aXA3XCIsXCJUZXh0QXJlYV9lcnJvclwiOlwiVGV4dEFyZWFfX1RleHRBcmVhX2Vycm9yX19fMVR1QXpcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dElucHV0LmNzcydcblxuY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9lbGVtZW50LnZhbHVlXG4gICAgY29uc3Qge2NoYW5nZUNhbGxiYWNrfSA9IHRoaXMucHJvcHNcblxuICAgIGNoYW5nZUNhbGxiYWNrKHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBlcnJvcixcbiAgICAgIHZhbHVlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBoYXNQcmVmaXggPSBmYWxzZSxcbiAgICAgIGhhc1N1ZmZpeCA9IGZhbHNlLFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgIGludmVyc2UgPSBmYWxzZSxcbiAgICAgIHR5cGUgPSAndGV4dCdcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dCByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuVGV4dElucHV0fVxuICAgICAgICAgICR7ZXJyb3IgPyBzdHlsZXMuVGV4dElucHV0X2Vycm9yIDogbnVsbH1cbiAgICAgICAgICAke2ludmVyc2UgPyBzdHlsZXMuVGV4dElucHV0X2ludmVyc2UgOiBudWxsfVxuICAgICAgICAgICR7aGFzUHJlZml4ID8gc3R5bGVzLlRleHRJbnB1dF93aXRoUHJlZml4IDogbnVsbH1cbiAgICAgICAgICAke2hhc1N1ZmZpeCA/IHN0eWxlcy5UZXh0SW5wdXRfd2l0aFN1ZmZpeCA6IG51bGx9YH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1RleHRJbnB1dC9UZXh0SW5wdXQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGV4dElucHV0XCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF9fXzFBQ0dZXCIsXCJUZXh0SW5wdXRfZXJyb3JcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X2Vycm9yX19fMmZuUm5cIixcIlRleHRJbnB1dF9pbnZlcnNlXCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF9pbnZlcnNlX19fM0EteDhcIixcIlRleHRJbnB1dF93aXRoUHJlZml4XCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF93aXRoUHJlZml4X19fMi1HdzNcIixcIlRleHRJbnB1dF93aXRoU3VmZml4XCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF93aXRoU3VmZml4X19fMVpUTlFcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1RleHRJbnB1dC9UZXh0SW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0ZsZXgsIExpc3QsIExpc3RJdGVtLCBQYWdlLCBQYWdlQ29udGVudH0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyLCBUZXh0SW5wdXQsIEJ1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQgRmxhc2hNZXNzYWdlIGZyb20gJy4uL0ZsYXNoTWVzc2FnZSdcbmltcG9ydCB7bG9naW5XaXRoQ3JlZGVudGlhbHN9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZUVtYWlsID0gdGhpcy5jaGFuZ2VFbWFpbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsRXJyb3I6ICcnLFxuICAgICAgcGFzc3dvcmRFcnJvcjogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gIH1cblxuICBzdWJtaXRGb3JtIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IGVtYWlsRXJyb3IgPSAnJ1xuICAgIGxldCBwYXNzd29yZEVycm9yID0gJydcblxuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PT0gJycpIHtcbiAgICAgIGVtYWlsRXJyb3IgPSAnZW1haWwgY2Fubm90IGJlIGVtcHR5J1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkID09PSAnJykge1xuICAgICAgcGFzc3dvcmRFcnJvciA9ICdwYXNzd29yZCBjYW5ub3QgYmUgYmxhbmsnXG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbEVycm9yICYmICFwYXNzd29yZEVycm9yKSB7XG4gICAgICBkaXNwYXRjaChsb2dpbldpdGhDcmVkZW50aWFscyh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVtYWlsRXJyb3IsXG4gICAgICAgIHBhc3N3b3JkRXJyb3JcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRW1haWwgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbDogdmFsdWUsXG4gICAgICBlbWFpbEVycm9yOiAnJ1xuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhc3N3b3JkOiB2YWx1ZSxcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmd9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlPlxuICAgICAgICA8UGFnZUNvbnRlbnQ+XG4gICAgICAgICAgPE1vZGFsV2luZG93PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XG4gICAgICAgICAgICAgIDxNb2RhbFdpbmRvd0hlYWRlcj5cbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPkxvZ2luPC9GbGV4PlxuICAgICAgICAgICAgICA8L01vZGFsV2luZG93SGVhZGVyPlxuXG4gICAgICAgICAgICAgIDxNb2RhbFdpbmRvd0JvZHk+XG4gICAgICAgICAgICAgICAgPExpc3Qgbj17MS41fT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbDpcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBjYXNleUBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVtYWlsRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9e3RoaXMuY2hhbmdlRW1haWx9IC8+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gbj17MS41fT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmQ6XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQmlnU2VjcmV0XCJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5wYXNzd29yZEVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXt0aGlzLmNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgPC9Nb2RhbFdpbmRvd0JvZHk+XG5cbiAgICAgICAgICAgICAgPE1vZGFsV2luZG93Rm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0ZldGNoaW5nfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb2dpblwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTW9kYWxXaW5kb3dGb290ZXI+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9Nb2RhbFdpbmRvdz5cbiAgICAgICAgPC9QYWdlQ29udGVudD5cblxuICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICA8L1BhZ2U+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuYXV0aC5pc0ZldGNoaW5nXG4gICAgfVxuICB9XG4pKExvZ2luKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtBbGVydH0gZnJvbSAnLi4vVUknXG5cbmNvbnN0IEZsYXNoTWVzc2FnZSA9ICh7XG4gIG1lc3NhZ2UsXG4gIHR5cGVcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWxlcnQgbWVzc2FnZT17bWVzc2FnZX0gdGhlbWU9e3R5cGV9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBzdGF0ZS5mbGFzaC5tZXNzYWdlLFxuICAgICAgdHlwZTogc3RhdGUuZmxhc2gudHlwZVxuICAgIH1cbiAgfVxuKShGbGFzaE1lc3NhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3RlcidcbmltcG9ydCBGbGFzaE1lc3NhZ2UgZnJvbSAnLi4vRmxhc2hNZXNzYWdlJ1xuaW1wb3J0IE1haW5OYXYgZnJvbSAnLi4vTWFpbk5hdidcbmltcG9ydCB7UGFnZSwgUGFnZUNvbnRlbnR9IGZyb20gJy4uL0xheW91dHMnXG5cbmNvbnN0IEFwcCA9ICh7XG4gIGNoaWxkcmVuLFxuICBsb2NhdGlvbixcbiAgcGFyYW1zXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFBhZ2U+XG4gICAgICA8SGVhZGVyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgIDxNYWluTmF2IHBhcmFtcz17cGFyYW1zfSAvPlxuXG4gICAgICA8UGFnZUNvbnRlbnQ+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvUGFnZUNvbnRlbnQ+XG5cbiAgICAgIDxGb290ZXIgLz5cbiAgICAgIDxGbGFzaE1lc3NhZ2UgLz5cbiAgICA8L1BhZ2U+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vU2VhcmNoQmFyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5jc3MnXG5pbXBvcnQge0ZsZXgsIE1lZGlhLCBNZWRpYUZpZ3VyZSwgTWVkaWFCb2R5fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IExvY2FsZSBmcm9tICcuLi9Mb2NhbGUnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9MYXlvdXRzL1dyYXBwZXInXG5pbXBvcnQge0dyaWQsIEdyaWRJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0dyaWQnXG5cbmltcG9ydCBpbWcgZnJvbSAnLi9sb2dvLnN2ZydcblxuY29uc3QgSGVhZGVyID0gKHtcbiAgbG9jYXRpb24sXG4gIGxheW91dFxufSkgPT4ge1xuICBsZXQgZ3JpZFNpemUgPSAwXG4gIGxldCBzaXRlbmFtZVNwYW4gPSAwXG4gIGxldCBzZWFyY2hTcGFuID0gMFxuXG4gIHN3aXRjaCAobGF5b3V0KSB7XG4gICAgY2FzZSAncyc6XG4gICAgY2FzZSAnbSc6XG4gICAgICBncmlkU2l6ZSA9IDFcbiAgICAgIHNpdGVuYW1lU3BhbiA9IDFcbiAgICAgIHNlYXJjaFNwYW4gPSAxXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2wnOlxuICAgIGNhc2UgJ3hsJzpcbiAgICAgIGdyaWRTaXplID0gM1xuICAgICAgc2l0ZW5hbWVTcGFuID0gMlxuICAgICAgc2VhcmNoU3BhbiA9IDFcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgbGF5b3V0IHR5cGUgJHtsYXlvdXR9YClcbiAgfVxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyfT5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiXG4gICAgICAgICAgZ3V0dGVyPXswfVxuICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn0+XG4gICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICBzcGFuPXtzaXRlbmFtZVNwYW59XG4gICAgICAgICAgICBvdXRPZj17Z3JpZFNpemV9XG4gICAgICAgICAgICBndXR0ZXI9ezB9XG4gICAgICAgICAgICBndXR0ZXJCb3R0b209ezJ9PlxuICAgICAgICAgICAgPE1lZGlhIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICA8TWVkaWFGaWd1cmUgbj1cIjEuNVwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX19sb2dvfSAvPlxuICAgICAgICAgICAgICA8L01lZGlhRmlndXJlPlxuXG4gICAgICAgICAgICAgIDxNZWRpYUJvZHk+XG4gICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX190aXRsZX0+VmFjY2luZSBBbnN3ZXJzPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxMb2NhbGUgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcl9fc3VidGl0bGV9PkEgcmVsaWFibGUgc291cmNlIG9mIGluZm9ybWF0aW9uIGFib3V0IHZhY2NpbmVzIGluIENhbmFkYTwvZGl2PlxuICAgICAgICAgICAgICA8L01lZGlhQm9keT5cbiAgICAgICAgICAgIDwvTWVkaWE+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgc3Bhbj17c2VhcmNoU3Bhbn1cbiAgICAgICAgICAgIG91dE9mPXtncmlkU2l6ZX1cbiAgICAgICAgICAgIGd1dHRlcj17MH1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn0+XG5cbiAgICAgICAgICAgIDxTZWFyY2hCYXIgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9XG4pKEhlYWRlcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHtzZXRTZWFyY2hRdWVyeX0gZnJvbSAnLi4vLi4vc3RvcmUvc2VhcmNoQWN0aW9ucydcbmltcG9ydCB7VGV4dElucHV0LCBCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtMYWJlbGVkSW5wdXQsIElucHV0RGVjb3JhdG9yfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoQmFyLmNzcydcblxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcXVlcnk6IHRoaXMucHJvcHMucXVlcnlcbiAgICB9XG5cbiAgICB0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge3NldFNlYXJjaFF1ZXJ5LCBsb2NhdGlvbjoge3F1ZXJ5fX0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAocXVlcnkgJiYgcXVlcnkucSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHF1ZXJ5OiBxdWVyeS5xXG4gICAgICB9KVxuICAgICAgc2V0U2VhcmNoUXVlcnkocXVlcnkucSlcbiAgICB9XG4gIH1cblxuICBzZWFyY2ggKCkge1xuICAgIGNvbnN0IHtzZXRTZWFyY2hRdWVyeX0gPSB0aGlzLnByb3BzXG5cbiAgICBzZXRTZWFyY2hRdWVyeSh0aGlzLnN0YXRlLnF1ZXJ5KVxuICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goe1xuICAgICAgcGF0aG5hbWU6ICcvc2VhcmNoJyxcbiAgICAgIHF1ZXJ5OiB7cTogdGhpcy5zdGF0ZS5xdWVyeX1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VhcmNofVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2hCYXJ9PlxuICAgICAgICA8TGFiZWxlZElucHV0XG4gICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgIGlucHV0PXtcbiAgICAgICAgICAgIDxJbnB1dERlY29yYXRvclxuICAgICAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5xdWVyeX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmlzRmV0Y2hpbmd9XG4gICAgICAgICAgICAgICAgICBoYXNTdWZmaXhcbiAgICAgICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5zZXRTdGF0ZSh7cXVlcnk6IHZ9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHRoZSB3ZWJzaXRlXCIgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e3RoaXMucHJvcHMuaXNGZXRjaGluZ31cbiAgICAgICAgICAgICAgICAgIGhhc1ByZWZpeD5TZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgICAgICAgfSAvPlxuICAgICAgICAgICAgfSAvPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5OiBzdGF0ZS5zZWFyY2gucXVlcnksXG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5zZWFyY2guaXNGZXRjaGluZ1xuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRTZWFyY2hRdWVyeTogKHEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0U2VhcmNoUXVlcnkocSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFNlYXJjaEJhcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2VhcmNoQmFyXCI6XCJTZWFyY2hCYXJfX1NlYXJjaEJhcl9fX2R0ZFRoXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSGVhZGVyXCI6XCJIZWFkZXJfX0hlYWRlcl9fX29FMkZIXCIsXCJIZWFkZXJfX2xvZ29cIjpcIkhlYWRlcl9fSGVhZGVyX19sb2dvX19fMXJxVV9cIixcIkhlYWRlcl9fdGl0bGVcIjpcIkhlYWRlcl9fSGVhZGVyX190aXRsZV9fXzJ0aXhhXCIsXCJIZWFkZXJfX3N1YnRpdGxlXCI6XCJIZWFkZXJfX0hlYWRlcl9fc3VidGl0bGVfX19fWl9PQlwiLFwiSGVhZGVyX19zZWFyY2hcIjpcIkhlYWRlcl9fSGVhZGVyX19zZWFyY2hfX18xNktiTVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvY2FsZS5jc3MnXG5cbmNvbnN0IExvY2FsZSA9ICh7XG4gIGxvY2F0aW9uXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2NhbGV9Pk1hbml0b2JhPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2NhbGUvTG9jYWxlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxvY2FsZVwiOlwiTG9jYWxlX19Mb2NhbGVfX18xQ1RCcFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9jYWxlL0xvY2FsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgV3JhcHBlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtYXhXaWR0aCA9IDkwLFxuICB3aWR0aCA9IDkwXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHt3aWR0aH0lYCxcbiAgICBtYXhXaWR0aDogYCR7bWF4V2lkdGh9cmVtYCxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwcGVyL1dyYXBwZXIuanN4XG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xvZ28uOTZhNjExNzZkYjU0ZTIyNzQyMzYyNjc5OTc0NDIwMWUuc3ZnXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDY1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5jc3MnXG5pbXBvcnQgQm94IGZyb20gJy4uL0xheW91dHMvQm94J1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vTGF5b3V0cy9XcmFwcGVyJ1xuaW1wb3J0IEZsZXggZnJvbSAnLi4vTGF5b3V0cy9GbGV4J1xuaW1wb3J0IExpc3RPZkFydGljbGVzIGZyb20gJy4uL0xpc3RPZkFydGljbGVzJ1xuXG5jb25zdCBGb290ZXIgPSAoe1xuICBhcnRpY2xlc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyfT5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8Qm94IG49ezJ9PlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJfX3RleHR9PlZhY2NpbmUgQW5zd2VycyAmIzE2OTsgMjAxNzwvZGl2PlxuXG4gICAgICAgICAgICA8TGlzdE9mQXJ0aWNsZXNcbiAgICAgICAgICAgICAgbj17MS41fVxuICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgIGFydGljbGVzPXthcnRpY2xlc31cbiAgICAgICAgICAgICAgbGF5b3V0PVwiaW5saW5lXCIgLz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICBjb25zdCBmb290ZXJTZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuY3VzdG9tSWQgPT09ICdmb290ZXItbmF2JylcbiAgICBjb25zdCBmb290ZXJBcnRpY2xlcyA9IGZvb3RlclNlY3Rpb24uYXJ0aWNsZXMubWFwKGEgPT4gc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmluZChhcnQgPT4gYXJ0Ll9pZCA9PT0gYSkpXG5cbiAgICByZXR1cm4ge1xuICAgICAgYXJ0aWNsZXM6IGZvb3RlckFydGljbGVzXG4gICAgfVxuICB9XG4pKEZvb3RlcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRm9vdGVyXCI6XCJGb290ZXJfX0Zvb3Rlcl9fXzI2OFBUXCIsXCJGb290ZXJfX3RleHRcIjpcIkZvb3Rlcl9fRm9vdGVyX190ZXh0X19fYzB6bURcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgQm94ID0gKHtcbiAgbiA9IDEsXG4gIG5oID0gMCxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZ1RvcDogYCR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgcGFkZGluZ0JvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgcGFkZGluZ0xlZnQ6IGAke2Jhc2VsaW5lICogbmh9cmVtYCxcbiAgICBwYWRkaW5nUmlnaHQ6IGAke2Jhc2VsaW5lICogbmh9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm94XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0JveC9Cb3guanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IExpbmsgZnJvbSAnLi4vVHlwb2dyYXBoeS9MaW5rJ1xuaW1wb3J0IEhlYWRpbmcyIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzInXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0xpc3QnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0xpc3RJbmxpbmUnXG5cbmNvbnN0IExpc3RPZkFydGljbGVzID0gKHtcbiAgYXJ0aWNsZUVudHJpZXMsXG4gIGxheW91dCA9ICdzdGFja2VkJyxcbiAgaW52ZXJzZSA9IGZhbHNlLFxuICBuID0gMSxcbiAgc21hbGwgPSBmYWxzZVxufSkgPT4ge1xuICBpZiAobGF5b3V0ID09PSAnc3RhY2tlZCcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3Qgbj17bn0+XG4gICAgICAgIHthcnRpY2xlRW50cmllcy5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBlbnRyeUVsID0gJydcbiAgICAgICAgICBpZiAoZW50cnkuYXJ0aWNsZS5hcnRpY2xlVHlwZSA9PT0gJ2hlYWRpbmcnKSB7XG4gICAgICAgICAgICBlbnRyeUVsID0gKFxuICAgICAgICAgICAgICA8SGVhZGluZzI+e2VudHJ5LmFydGljbGUudGl0bGV9PC9IZWFkaW5nMj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LmFydGljbGUuYXJ0aWNsZVR5cGUgPT09ICdhcnRpY2xlJykge1xuICAgICAgICAgICAgZW50cnlFbCA9IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBzbWFsbD17c21hbGx9XG4gICAgICAgICAgICAgICAgaW52ZXJzZT17aW52ZXJzZX1cbiAgICAgICAgICAgICAgICB0bz17ZW50cnkudXJsfT57ZW50cnkuYXJ0aWNsZS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgYXJ0aWNsZSB0eXBlICR7ZW50cnkuYXJ0aWNsZS5hcnRpY2xlVHlwZX1gKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgbj17bn1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIHtlbnRyeUVsfVxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9MaXN0PlxuICAgIClcbiAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbmxpbmUnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SW5saW5lIG49e259PlxuICAgICAgICB7YXJ0aWNsZUVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgZW50cnlFbCA9ICcnXG4gICAgICAgICAgaWYgKGVudHJ5LmFydGljbGUuYXJ0aWNsZVR5cGUgPT09ICdoZWFkaW5nJykge1xuICAgICAgICAgICAgZW50cnlFbCA9IChcbiAgICAgICAgICAgICAgPEhlYWRpbmcyPntlbnRyeS5hcnRpY2xlLnRpdGxlfTwvSGVhZGluZzI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5hcnRpY2xlLmFydGljbGVUeXBlID09PSAnYXJ0aWNsZScpIHtcbiAgICAgICAgICAgIGVudHJ5RWwgPSAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgc21hbGw9e3NtYWxsfVxuICAgICAgICAgICAgICAgIGludmVyc2U9e2ludmVyc2V9XG4gICAgICAgICAgICAgICAgdG89e2VudHJ5LnVybH0+e2VudHJ5LmFydGljbGUudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGFydGljbGUgdHlwZSAke2VudHJ5LmFydGljbGUuYXJ0aWNsZVR5cGV9YClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIG49e259PlxuICAgICAgICAgICAgICB7ZW50cnlFbH1cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGxldCBhcnRpY2xlRW50cmllcyA9IFtdXG5cbiAgICBmb3IgKGxldCBhcnRpY2xlIG9mIG93blByb3BzLmFydGljbGVzKSB7XG4gICAgICBsZXQgcGFyZW50cyA9IFtdXG5cbiAgICAgIGxldCBjdXJyZW50UGFyZW50ID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuX2lkID09PSBhcnRpY2xlLnBhcmVudClcbiAgICAgIHdoaWxlIChjdXJyZW50UGFyZW50ICYmICFjdXJyZW50UGFyZW50Lm1ldGEpIHtcbiAgICAgICAgcGFyZW50cyA9IFtjdXJyZW50UGFyZW50LnVybCwgLi4ucGFyZW50c11cbiAgICAgICAgY3VycmVudFBhcmVudCA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLl9pZCA9PT0gY3VycmVudFBhcmVudC5wYXJlbnQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFydGljbGVVcmwgPSBgLyR7cGFyZW50cy5qb2luKCcvJyl9L2FydGljbGVzLyR7YXJ0aWNsZS51cmx9YFxuXG4gICAgICBhcnRpY2xlRW50cmllcy5wdXNoKHtcbiAgICAgICAgYXJ0aWNsZSxcbiAgICAgICAgdXJsOiBhcnRpY2xlVXJsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlRW50cmllc1xuICAgIH1cbiAgfVxuKShMaXN0T2ZBcnRpY2xlcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xpc3RPZkFydGljbGVzL0xpc3RPZkFydGljbGVzLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGluayBhcyBSZWFjdExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmsuY3NzJ1xuXG5jb25zdCBMaW5rID0gKHtcbiAgaHJlZixcbiAgdG8gPSBudWxsLFxuICBpbnZlcnNlID0gZmFsc2UsXG4gIHNtYWxsID0gZmFsc2UsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkxpbmt9XG4gICAgICAgICAgJHtpbnZlcnNlID8gc3R5bGVzLkxpbmtfaW52ZXJzZSA6ICcnfVxuICAgICAgICAgICR7c21hbGwgPyBzdHlsZXMuTGlua19zbWFsbCA6ICcnfWB9XG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLkxpbmtfYWN0aXZlfVxuICAgICAgICB0bz17dG99XG4gICAgICAgID57Y2hpbGRyZW59PC9SZWFjdExpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5MaW5rfVxuICAgICAgICAgICR7aW52ZXJzZSA/IHN0eWxlcy5MaW5rX2ludmVyc2UgOiAnJ31cbiAgICAgICAgICAke3NtYWxsID8gc3R5bGVzLkxpbmtfc21hbGwgOiAnJ31gfVxuICAgICAgICBocmVmPXtocmVmfT57Y2hpbGRyZW59PC9hPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0xpbmsvTGluay5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMaW5rXCI6XCJMaW5rX19MaW5rX19fMWtNQmtcIixcIkxpbmtfYWN0aXZlXCI6XCJMaW5rX19MaW5rX2FjdGl2ZV9fXzN0YXUtXCIsXCJMaW5rX2ludmVyc2VcIjpcIkxpbmtfX0xpbmtfaW52ZXJzZV9fXzMySkE4XCIsXCJMaW5rX3NtYWxsXCI6XCJMaW5rX19MaW5rX3NtYWxsX19fMS1YdmhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvTGluay9MaW5rLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rLCBoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9VSS9TZWxlY3QnXG5pbXBvcnQgRmxleCBmcm9tICcuLi9MYXlvdXRzL0ZsZXgnXG5pbXBvcnQgQm94IGZyb20gJy4uL0xheW91dHMvQm94J1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vTGF5b3V0cy9XcmFwcGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFpbk5hdi5jc3MnXG5cbmNsYXNzIE1haW5OYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMubmF2aWdhdGUgPSB0aGlzLm5hdmlnYXRlLmJpbmQodGhpcylcbiAgfVxuXG4gIG5hdmlnYXRlICh1cmwpIHtcbiAgICBoYXNoSGlzdG9yeS5wdXNoKHVybClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3BhcmFtcywgbGF5b3V0LCBzZWN0aW9uc30gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgbWV0YVNlY3Rpb24gPSBzZWN0aW9ucy5maW5kKHMgPT4gcy5tZXRhICYmIHMudXJsID09PSAnbWFpbi1uYXYnKVxuICAgIGNvbnN0IHJvb3RTZWN0aW9ucyA9IG1ldGFTZWN0aW9uLmNoaWxkcmVuLm1hcChjID0+IHNlY3Rpb25zLmZpbmQocyA9PiBzLl9pZCA9PT0gYykpXG5cbiAgICBzd2l0Y2ggKGxheW91dCkge1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIGxldCBmbGF0TmF2aWdhdGlvbiA9IFtdXG4gICAgICAgIGZvciAobGV0IHNlY3Rpb24gb2Ygcm9vdFNlY3Rpb25zKSB7XG4gICAgICAgICAgaWYgKHNlY3Rpb24uc2VjdGlvblR5cGUgPT09ICdwYXJlbnQnKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzZWN0aW9ucyA9IHNlY3Rpb24uY2hpbGRyZW4ubWFwKGMgPT4gc2VjdGlvbnMuZmluZChzID0+IHMuX2lkID09PSBjKSlcblxuICAgICAgICAgICAgZm9yIChsZXQgc3Vic2VjdGlvbiBvZiBzdWJzZWN0aW9ucykge1xuICAgICAgICAgICAgICBmbGF0TmF2aWdhdGlvbi5wdXNoKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogYCR7c2VjdGlvbi50aXRsZX0gLyAke3N1YnNlY3Rpb24udGl0bGV9YCxcbiAgICAgICAgICAgICAgICBpZDogYC8ke3NlY3Rpb24udXJsfS8ke3N1YnNlY3Rpb24udXJsfWBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxhdE5hdmlnYXRpb24ucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiBzZWN0aW9uLnRpdGxlLFxuICAgICAgICAgICAgICBpZDogYC8ke3NlY3Rpb24udXJsfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hdmlnYXRpb259PlxuICAgICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICAgIDxCb3ggbj17MX0+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3BhcmFtcy5zdWJzZWN0aW9uVXJsXG4gICAgICAgICAgICAgICAgICAgID8gYC8ke3BhcmFtcy5zZWN0aW9uVXJsfS8ke3BhcmFtcy5zdWJzZWN0aW9uVXJsfWBcbiAgICAgICAgICAgICAgICAgICAgOiBgLyR7cGFyYW1zLnNlY3Rpb25Vcmx9YFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmxhdE5hdmlnYXRpb259XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXJsID0+IHsgdGhpcy5uYXZpZ2F0ZSh1cmwpIH19IC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICBjYXNlICdtJzpcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgY2FzZSAneGwnOlxuICAgICAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IHJvb3RTZWN0aW9ucy5maW5kKHMgPT4gcy51cmwgPT09IHBhcmFtcy5zZWN0aW9uVXJsKVxuICAgICAgICBjb25zdCBjdXJyZW50U3Vic2VjdGlvbnMgPSBjdXJyZW50U2VjdGlvbiAmJiBjdXJyZW50U2VjdGlvbi5zZWN0aW9uVHlwZSA9PT0gJ3BhcmVudCdcbiAgICAgICAgICA/IGN1cnJlbnRTZWN0aW9uLmNoaWxkcmVuLm1hcChjID0+IHNlY3Rpb25zLmZpbmQocyA9PiBzLl9pZCA9PT0gYykpXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgbGV0IGN1cnJlbnRTdWJOYXYgPSAnJ1xuICAgICAgICBpZiAoY3VycmVudFN1YnNlY3Rpb25zKSB7XG4gICAgICAgICAgY3VycmVudFN1Yk5hdiA9IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU3VibmF2aWdhdGlvbn0+XG4gICAgICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAge2N1cnJlbnRTdWJzZWN0aW9ucy5tYXAoKHMsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuU3VibmF2aWdhdGlvbl9faXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5TdWJuYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgICB0bz17YC8ke2N1cnJlbnRTZWN0aW9uLnVybH0vJHtzLnVybH1gfT57cy50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICB7cm9vdFNlY3Rpb25zLm1hcCgocywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aXZlQ2xhc3NOYW1lcyA9IFtzdHlsZXMuTmF2aWdhdGlvbl9faXRlbV9hY3RpdmVdXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLnNlY3Rpb25UeXBlID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZXMucHVzaChzdHlsZXMuTmF2aWdhdGlvbl9faXRlbV9wYXJlbnRfYWN0aXZlKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvJHtzLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuTmF2aWdhdGlvbl9faXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17YWN0aXZlQ2xhc3NOYW1lcy5qb2luKCcgJyl9PntzLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2N1cnJlbnRTdWJOYXZ9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgbGF5b3V0IHR5cGUgJHtsYXlvdXR9YClcbiAgICAgICAgcmV0dXJuIDxkaXYgLz5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzZWN0aW9uczogc3RhdGUuc2VjdGlvbnMuaXRlbXMsXG4gICAgICBsYXlvdXQ6IHN0YXRlLnVpLmxheW91dFxuICAgIH1cbiAgfVxuKShNYWluTmF2KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTWFpbk5hdi9NYWluTmF2LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5jc3MnXG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICBpbnZlcnNlID0gZmFsc2UsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9ucy5maW5kKG8gPT4gby5pZCA9PT0gdmFsdWUpXG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IHNlbGVjdGVkT3B0aW9uID8gc2VsZWN0ZWRPcHRpb24ubGFiZWwgOiAnTm9uZSdcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNlbGVjdH1cbiAgICAgICAgJHtpbnZlcnNlID8gc3R5bGVzLlNlbGVjdF9pbnZlcnNlIDogJyd9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0X19mYWtlfT57aW5wdXRMYWJlbH08L2Rpdj5cblxuICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9faW5wdXR9XG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiBvbkNoYW5nZSh2LnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgIHtvcHRpb25zLm1hcCgobywgaW5kZXgpID0+XG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvLmlkfT57by5sYWJlbH08L29wdGlvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NlbGVjdC9TZWxlY3QuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2VsZWN0XCI6XCJTZWxlY3RfX1NlbGVjdF9fXzFyUGJMXCIsXCJTZWxlY3RfX2Zha2VcIjpcIlNlbGVjdF9fU2VsZWN0X19mYWtlX19fM3drZGRcIixcIlNlbGVjdF9faW5wdXRcIjpcIlNlbGVjdF9fU2VsZWN0X19pbnB1dF9fX3I3ZXk3XCIsXCJTZWxlY3RfaW52ZXJzZVwiOlwiU2VsZWN0X19TZWxlY3RfaW52ZXJzZV9fXzFrRDlFXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTmF2aWdhdGlvblwiOlwiTWFpbk5hdl9fTmF2aWdhdGlvbl9fX0REM2Z0XCIsXCJOYXZpZ2F0aW9uX19pdGVtXCI6XCJNYWluTmF2X19OYXZpZ2F0aW9uX19pdGVtX19fMWdfNlRcIixcIk5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlXCI6XCJNYWluTmF2X19OYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZV9fXzJpWENRXCIsXCJOYXZpZ2F0aW9uX19pdGVtX3BhcmVudF9hY3RpdmVcIjpcIk1haW5OYXZfX05hdmlnYXRpb25fX2l0ZW1fcGFyZW50X2FjdGl2ZV9fXzJtTk84XCIsXCJTdWJuYXZpZ2F0aW9uXCI6XCJNYWluTmF2X19TdWJuYXZpZ2F0aW9uX19fNUdyb0hcIixcIlN1Ym5hdmlnYXRpb25fX2l0ZW1cIjpcIk1haW5OYXZfX1N1Ym5hdmlnYXRpb25fX2l0ZW1fX18zdGNaNFwiLFwiU3VibmF2aWdhdGlvbl9faXRlbV9hY3RpdmVcIjpcIk1haW5OYXZfX1N1Ym5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlX19fMldtZ3VcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBBcnRpY2xlc1BhZ2UgZnJvbSAnLi4vQXJ0aWNsZXNQYWdlJ1xuaW1wb3J0IEN1c3RvbVBhZ2VIb21lIGZyb20gJy4uL0N1c3RvbVBhZ2VIb21lJ1xuaW1wb3J0IEN1c3RvbVBhZ2VBYm91dCBmcm9tICcuLi9DdXN0b21QYWdlQWJvdXQnXG5pbXBvcnQgQ3VzdG9tUGFnZVNjaGVkdWxlIGZyb20gJy4uL0N1c3RvbVBhZ2VTY2hlZHVsZSdcblxuY2xhc3MgU2VjdGlvbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge3BhcmFtcywgY3VycmVudFNlY3Rpb24sIGZpcnN0U3Vic2VjdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoZmlyc3RTdWJzZWN0aW9uICYmICFwYXJhbXMuc3Vic2VjdGlvblVybCkge1xuICAgICAgaGFzaEhpc3RvcnkucHVzaChgLyR7Y3VycmVudFNlY3Rpb24udXJsfS8ke2ZpcnN0U3Vic2VjdGlvbi51cmx9YClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtwYXJhbXMsIGN1cnJlbnRTZWN0aW9uLCBmaXJzdFN1YnNlY3Rpb259ID0gbmV3UHJvcHNcblxuICAgIGlmIChmaXJzdFN1YnNlY3Rpb24gJiYgIXBhcmFtcy5zdWJzZWN0aW9uVXJsKSB7XG4gICAgICBoYXNoSGlzdG9yeS5wdXNoKGAvJHtjdXJyZW50U2VjdGlvbi51cmx9LyR7Zmlyc3RTdWJzZWN0aW9uLnVybH1gKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2N1cnJlbnRTZWN0aW9uLCBwYXJhbXMsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblxuICAgIHN3aXRjaCAoY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgJ3BhcmVudCc6XG4gICAgICAgIHJldHVybiBjaGlsZHJlblxuICAgICAgY2FzZSAnYmxvZ3Bvc3RzJzpcbiAgICAgIGNhc2UgJ2FydGljbGVzJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QXJ0aWNsZXNQYWdlXG4gICAgICAgICAgICBjdXJyZW50U2VjdGlvbj17Y3VycmVudFNlY3Rpb259XG4gICAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59XG4gICAgICAgICAgICBwYXJhbXM9e3BhcmFtc30gLz5cbiAgICAgICAgKVxuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgc3dpdGNoIChjdXJyZW50U2VjdGlvbi5jdXN0b21JZCkge1xuICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgcmV0dXJuIDxDdXN0b21QYWdlSG9tZSAvPlxuICAgICAgICAgIGNhc2UgJ2Fib3V0JzpcbiAgICAgICAgICAgIHJldHVybiA8Q3VzdG9tUGFnZUFib3V0IC8+XG4gICAgICAgICAgY2FzZSAnc2NoZWR1bGUnOlxuICAgICAgICAgICAgcmV0dXJuIDxDdXN0b21QYWdlU2NoZWR1bGUgLz5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBjdXN0b20gc2VjdGlvbiAke2N1cnJlbnRTZWN0aW9uLmN1c3RvbUlkfWApXG4gICAgICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBzZWN0aW9uIHR5cGUgb24gMXN0IGxldmVsICR7Y3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGV9YClcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy51cmwgPT09IHBhcmFtcy5zZWN0aW9uVXJsKVxuICAgIGNvbnN0IGZpcnN0U3Vic2VjdGlvbiA9IGN1cnJlbnRTZWN0aW9uLnNlY3Rpb25UeXBlID09PSAncGFyZW50JyAmJiBjdXJyZW50U2VjdGlvbi5jaGlsZHJlbi5sZW5ndGhcbiAgICAgID8gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuX2lkID09PSBjdXJyZW50U2VjdGlvbi5jaGlsZHJlblswXSlcbiAgICAgIDogbnVsbFxuXG4gICAgICAvLyBjb25zdCBzZWN0aW9uQmxvZ3Bvc3RzID0gY3VycmVudFNlY3Rpb24uYXJ0aWNsZXNcbiAgICAgIC8vIC5tYXAoYSA9PiBhcnRpY2xlcy5maW5kKGFydCA9PiBhcnQuX2lkID09PSBhKSlcbiAgICAgIC8vIC5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRTZWN0aW9uLFxuICAgICAgZmlyc3RTdWJzZWN0aW9uXG4gICAgfVxuICB9XG4pKFNlY3Rpb25Db250YWluZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uQ29udGFpbmVyL1NlY3Rpb25Db250YWluZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBGbGV4IGZyb20gJy4uL0xheW91dHMvRmxleCdcbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMvR3JpZCdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMvTGlzdCdcbmltcG9ydCBIZWFkaW5nMSBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcxJ1xuaW1wb3J0IEhlYWRpbmcyIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzInXG5pbXBvcnQgSGVhZGluZzMgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMydcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL1R5cG9ncmFwaHkvQ29udGVudCdcbmltcG9ydCBJbmZvIGZyb20gJy4uL1R5cG9ncmFwaHkvSW5mbydcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4uL1VJL0xpbmtCdXR0b24nXG5pbXBvcnQgQXNrUXVlc3Rpb24gZnJvbSAnLi4vQXNrUXVlc3Rpb24nXG5pbXBvcnQgTGlzdE9mQXJ0aWNsZXMgZnJvbSAnLi4vTGlzdE9mQXJ0aWNsZXMnXG5cbmNvbnN0IEFydGljbGVzUGFnZSA9ICh7XG4gIHBhcmVudFNlY3Rpb24sXG4gIGN1cnJlbnRTZWN0aW9uLFxuICBhcnRpY2xlcyxcbiAgbGF5b3V0LFxuICBjaGlsZHJlbixcbiAgcGFyYW1zXG59KSA9PiB7XG4gIGxldCBncmlkU2l6ZSA9IDBcbiAgbGV0IGFydGljbGVzU3BhbiA9IDBcbiAgbGV0IHF1ZXN0aW9uc1NwYW4gPSAwXG4gIGxldCBib3hTaXplID0gMFxuICBsZXQgcXVlc3Rpb25zQm94U2l6ZSA9IDBcbiAgbGV0IGZvcm1MYXlvdXQgPSAnbm9uZSdcbiAgbGV0IGFydGljbGVzR3JpZFNpemUgPSAwXG5cbiAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICBjYXNlICdzJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIGdyaWRTaXplID0gMVxuICAgICAgYXJ0aWNsZXNTcGFuID0gMVxuICAgICAgcXVlc3Rpb25zU3BhbiA9IDFcbiAgICAgIGJveFNpemUgPSA0XG4gICAgICBxdWVzdGlvbnNCb3hTaXplID0gMlxuICAgICAgZm9ybUxheW91dCA9ICdmdWxsJ1xuICAgICAgYXJ0aWNsZXNHcmlkU2l6ZSA9IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbCc6XG4gICAgICBncmlkU2l6ZSA9IDEyXG4gICAgICBhcnRpY2xlc1NwYW4gPSA3XG4gICAgICBxdWVzdGlvbnNTcGFuID0gNVxuICAgICAgYm94U2l6ZSA9IHBhcmVudFNlY3Rpb24gPyA2IDogOFxuICAgICAgcXVlc3Rpb25zQm94U2l6ZSA9IDZcbiAgICAgIGZvcm1MYXlvdXQgPSAnc3RhY2tlZCdcbiAgICAgIGFydGljbGVzR3JpZFNpemUgPSAxXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3hsJzpcbiAgICAgIGdyaWRTaXplID0gM1xuICAgICAgYXJ0aWNsZXNTcGFuID0gMlxuICAgICAgcXVlc3Rpb25zU3BhbiA9IDFcbiAgICAgIGJveFNpemUgPSBwYXJlbnRTZWN0aW9uID8gNiA6IDhcbiAgICAgIHF1ZXN0aW9uc0JveFNpemUgPSA2XG4gICAgICBmb3JtTGF5b3V0ID0gJ3N0YWNrZWQnXG4gICAgICBhcnRpY2xlc0dyaWRTaXplID0gMlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBsYXlvdXQgdHlwZSAke2xheW91dH1gKVxuICB9XG5cbiAgbGV0IGNvbnRlbnQgPSAnJ1xuICBpZiAoY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUgPT09ICdhcnRpY2xlcycpIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgIHtwYXJlbnRTZWN0aW9uXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEhlYWRpbmczPntwYXJlbnRTZWN0aW9uLnRpdGxlfTwvSGVhZGluZzM+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIDxIZWFkaW5nMSB1bmRlcmxpbmU+e2N1cnJlbnRTZWN0aW9uLnRpdGxlfTwvSGVhZGluZzE+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBndXR0ZXJCb3R0b209ezF9PlxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsxfVxuICAgICAgICAgICAgc3Bhbj17MX1cbiAgICAgICAgICAgIG91dE9mPXthcnRpY2xlc0dyaWRTaXplfT5cbiAgICAgICAgICAgIDxMaXN0T2ZBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXMuc2xpY2UoMCwgYXJ0aWNsZXMubGVuZ3RoIC8gMil9IC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsxfVxuICAgICAgICAgICAgc3Bhbj17MX1cbiAgICAgICAgICAgIG91dE9mPXthcnRpY2xlc0dyaWRTaXplfT5cbiAgICAgICAgICAgIDxMaXN0T2ZBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXMuc2xpY2UoYXJ0aWNsZXMubGVuZ3RoIC8gMil9IC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2UgaWYgKGN1cnJlbnRTZWN0aW9uLnNlY3Rpb25UeXBlID09PSAnYmxvZ3Bvc3RzJykge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2sgbj17M30+XG4gICAgICAgICAgPEhlYWRpbmcxIHVuZGVybGluZT57Y3VycmVudFNlY3Rpb24udGl0bGV9PC9IZWFkaW5nMT5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8TGlzdCBuPXszfT5cbiAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IHBhcmVudFNlY3Rpb25cbiAgICAgICAgICAgICAgPyBgLyR7cGFyYW1zLnNlY3Rpb25Vcmx9LyR7cGFyYW1zLnN1YnNlY3Rpb25Vcmx9L2FydGljbGVzLyR7YS51cmx9YFxuICAgICAgICAgICAgICA6IGAvJHtwYXJhbXMuc2VjdGlvblVybH0vYXJ0aWNsZXMvJHthLnVybH1gXG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgbj17M30+XG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZzI+e2EudGl0bGV9PC9IZWFkaW5nMj5cblxuICAgICAgICAgICAgICAgICAgPEluZm8+UG9zdGVkIG9uIDxUaW1lIHZhbHVlPXtuZXcgRGF0ZShhLmNyZWF0ZWRBdCl9IGZvcm1hdD1cIk1NTSBEbywgaDptQVwiIC8+PC9JbmZvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICAgIDxDb250ZW50IHRleHQ9e2Euc25pcHBldH0gLz5cbiAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgPExpbmtCdXR0b24gdG89e2xpbmt9PiYjMTg3OyByZWFkIGZ1bGwgcG9zdDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGd1dHRlckJvdHRvbT17MH0+XG4gICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICBndXR0ZXJCb3R0b209ezB9XG4gICAgICAgICAgICBzcGFuPXthcnRpY2xlc1NwYW59XG4gICAgICAgICAgICBvdXRPZj17Z3JpZFNpemV9PlxuICAgICAgICAgICAgPEJveCBuPXtib3hTaXplfT5cbiAgICAgICAgICAgICAge3BhcmFtcy5hcnRpY2xlVXJsXG4gICAgICAgICAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICAgICAgICAgIDogY29udGVudFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICBndXR0ZXJCb3R0b209ezB9XG4gICAgICAgICAgICBzcGFuPXtxdWVzdGlvbnNTcGFufVxuICAgICAgICAgICAgb3V0T2Y9e2dyaWRTaXplfT5cbiAgICAgICAgICAgIDxCb3ggbj17cXVlc3Rpb25zQm94U2l6ZX0+XG4gICAgICAgICAgICAgIDxBc2tRdWVzdGlvbiBmb3JtTGF5b3V0PXtmb3JtTGF5b3V0fSAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge2N1cnJlbnRTZWN0aW9ufSA9IG93blByb3BzXG4gICAgY29uc3QgYXJ0aWNsZXMgPSBjdXJyZW50U2VjdGlvbi5hcnRpY2xlc1xuICAgICAgLm1hcChhID0+IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbmQoYXJ0ID0+IGFydC5faWQgPT09IGEpKVxuICAgICAgLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgYXJ0aWNsZXMsXG4gICAgICBsYXlvdXQ6IHN0YXRlLnVpLmxheW91dFxuICAgIH1cbiAgfVxuKShBcnRpY2xlc1BhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcnRpY2xlc1BhZ2UvQXJ0aWNsZXNQYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMvR3JpZCdcbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgU2lnbmF0dXJlIGZyb20gJy4uL1NpZ25hdHVyZSdcbmltcG9ydCBRdWVzdGlvbkZvcm0gZnJvbSAnLi4vUXVlc3Rpb25Gb3JtJ1xuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgSGVhZGluZzEgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMSdcbmltcG9ydCBIZWFkaW5nMiBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcyJ1xuaW1wb3J0IEhlYWRpbmdMaW5lZCBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmdMaW5lZCdcbmltcG9ydCBUZXh0IGZyb20gJy4uL1R5cG9ncmFwaHkvVGV4dCdcbmltcG9ydCBMaXN0T2ZBcnRpY2xlcyBmcm9tICcuLi9MaXN0T2ZBcnRpY2xlcydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3VzdG9tUGFnZUhvbWUuY3NzJ1xuXG5jb25zdCBDdXN0b21QYWdlSG9tZSA9ICh7XG4gIGZyZXF1ZW50QXJ0aWNsZXMsXG4gIGZyZXF1ZW50U2VjdGlvbixcbiAgZnJlcXVlbnRTdWJzZWNpb25zLFxuICBhcnRpY2xlcyxcbiAgbGF5b3V0XG59KSA9PiB7XG4gIGxldCBXZWxjb21lR3JpZFNpemUgPSAwXG4gIGxldCB3ZWxjb21lQm94ID0gMFxuICBsZXQgZnJlcXVlbnRHcmlkU2l6ZSA9IDBcbiAgbGV0IGZyZXF1ZW50Qm94ID0gMFxuICBsZXQgYXNrUXVlc3Rpb25HcmlkU2l6ZSA9IDBcbiAgbGV0IGFza1F1ZXN0aW9uQm94ID0gMFxuXG4gIHN3aXRjaCAobGF5b3V0KSB7XG4gICAgY2FzZSAncyc6XG4gICAgICBXZWxjb21lR3JpZFNpemUgPSAxXG4gICAgICB3ZWxjb21lQm94ID0gNFxuICAgICAgZnJlcXVlbnRHcmlkU2l6ZSA9IDFcbiAgICAgIGZyZXF1ZW50Qm94ID0gNFxuICAgICAgYXNrUXVlc3Rpb25HcmlkU2l6ZSA9IDFcbiAgICAgIGFza1F1ZXN0aW9uQm94ID0gNFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdtJzpcbiAgICAgIFdlbGNvbWVHcmlkU2l6ZSA9IDFcbiAgICAgIHdlbGNvbWVCb3ggPSA0XG4gICAgICBmcmVxdWVudEdyaWRTaXplID0gMlxuICAgICAgZnJlcXVlbnRCb3ggPSA0XG4gICAgICBhc2tRdWVzdGlvbkdyaWRTaXplID0gMVxuICAgICAgYXNrUXVlc3Rpb25Cb3ggPSA0XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2wnOlxuICAgICAgV2VsY29tZUdyaWRTaXplID0gMlxuICAgICAgd2VsY29tZUJveCA9IDRcbiAgICAgIGZyZXF1ZW50R3JpZFNpemUgPSAzXG4gICAgICBmcmVxdWVudEJveCA9IDhcbiAgICAgIGFza1F1ZXN0aW9uR3JpZFNpemUgPSAyXG4gICAgICBhc2tRdWVzdGlvbkJveCA9IDhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAneGwnOlxuICAgICAgV2VsY29tZUdyaWRTaXplID0gMlxuICAgICAgd2VsY29tZUJveCA9IDhcbiAgICAgIGZyZXF1ZW50R3JpZFNpemUgPSA0XG4gICAgICBmcmVxdWVudEJveCA9IDhcbiAgICAgIGFza1F1ZXN0aW9uR3JpZFNpemUgPSAyXG4gICAgICBhc2tRdWVzdGlvbkJveCA9IDhcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgbGF5b3V0IHZhbHVlICR7bGF5b3V0fWApXG4gIH1cblxuICBjb25zdCBmcmVxdWVudEFydGljbGVzRWwgPSAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuRnJlcXVlbnRTZWN0aW9ufT5cbiAgICAgIDxCbG9jaz5cbiAgICAgICAgPEhlYWRpbmdMaW5lZD5GcmVxdWVudCBRdWVzdGlvbnM8L0hlYWRpbmdMaW5lZD5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8Qm94IG49e2ZyZXF1ZW50Qm94fT5cbiAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXs0fT5cbiAgICAgICAgICAgIHtmcmVxdWVudFN1YnNlY2lvbnMubWFwKChzdWIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YlNlY3Rpb25BcnRpY2xlcyA9IHN1Yi5hcnRpY2xlc1xuICAgICAgICAgICAgICAubWFwKGEgPT4gYXJ0aWNsZXMuZmluZChhcnQgPT4gYXJ0Ll9pZCA9PT0gYSkpXG4gICAgICAgICAgICAgIC5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEuYXJ0aWNsZVR5cGUgPT09ICdhcnRpY2xlJylcbiAgICAgICAgICAgICAgLnNsaWNlKDAsIDUpXG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b209ezR9XG4gICAgICAgICAgICAgICAgICBzcGFuPXsxfVxuICAgICAgICAgICAgICAgICAgb3V0T2Y9e2ZyZXF1ZW50R3JpZFNpemV9PlxuICAgICAgICAgICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZzIgdW5kZXJsaW5lPntzdWIudGl0bGV9PC9IZWFkaW5nMj5cbiAgICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3RPZkFydGljbGVzIGFydGljbGVzPXtzdWJTZWN0aW9uQXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHRvPXtgLyR7ZnJlcXVlbnRTZWN0aW9uLnVybH0vJHtzdWIudXJsfWB9PnNlZSBtb3JlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L3NlY3Rpb24+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5XZWxjb21lU2VjdGlvbn0+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuV2VsY29tZVNlY3Rpb25fX2JvZHl9PlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgICAgICBzcGFuPXsxfVxuICAgICAgICAgICAgICAgIG91dE9mPXtXZWxjb21lR3JpZFNpemV9PlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIG49e3dlbGNvbWVCb3h9PlxuICAgICAgICAgICAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZzE+V2hhdCBpcyDigJxWYWNjaW5lIEFuc3dlcnPigJ08L0hlYWRpbmcxPlxuICAgICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dD5UaGUgbWFpbiBwdXJwb3NlIG9mIG91ciB3ZWJzaXRlIGlzIHRvIHByb3ZpZGUgcGVvcGxlIHdpdGggdmFsaWQgaW5mb3JtYXRpb24gYWJvdXQgdmFjY2luZXMsIHN1Y2ggYXMgdmFsaWRpdHkgb2YgdmFjY2luZSBteXRocyBhbmQgcnVtb3JzLCBpbmZvcm1hdGlvbiBvbiB2YWNjaW5lIHNhZmV0eSwgdmFjY2luZSBzY2hlZHVsZSwgZXRjLiBJZiB5b3UgY2Fubm90IGZpbmQgaW5mb3JtYXRpb24geW91IHdhbnQsIG9yIHlvdSB3b3VsZCByYXRoZXIganVzdCBnZXQgYSBxdWljayByZXNwb25zZSB0byB5b3VyIHNwZWNpZmljIHF1ZXN0aW9uLCBwbGVhc2UgZG8gbm90IGhlc2l0YXRlIHRvIHNlbmQgeW91ciBxdWVzdGlvbiB0byBtZS4gSSB0cnkgdG8gcmVwbHkgaW4gYSB0aW1lbHkgbWFubmVyIGFuZCBJIGFsc28gcHJvdmlkZSBsaXN0IG9mIG9mZmljaWFsIHNvdXJjZXMgZm9yIHlvdXIgZnVydGhlciBleHBsb3JhdGlvbi48L1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgICA8U2lnbmF0dXJlIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxCb3ggbj17YXNrUXVlc3Rpb25Cb3h9PlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn1cbiAgICAgICAgICAgICAgICBzcGFuPXsxfVxuICAgICAgICAgICAgICAgIG91dE9mPXthc2tRdWVzdGlvbkdyaWRTaXplfT5cbiAgICAgICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZzE+SGF2ZSBhIFF1ZXN0aW9uPzwvSGVhZGluZzE+XG4gICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxUZXh0PklmIHlvdSBkbyBub3Qgd2FudCB0byBzZWFyY2ggdGhyb3VnaCB0aGUgd2Vic2l0ZSBvciBjYW5ub3QgZmluZCBhbnN3ZXIgdG8geW91ciBxdWVzdGlvbiwgcGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBzZW5kICAgIHlvdXIgcXVlc3Rpb24gZGlyZWN0bHkgdG8gbWUuIEkgd2lsbCByZXBseSB0byB5b3Ugd2l0aCBhbGwgdGhlIGluZm9ybWF0aW9uIHlvdSBzaG91bGQga25vdyBhcyBzb29uIGFzIEkgY2FuLjwvVGV4dD5cbiAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgPFNpZ25hdHVyZSAvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn1cbiAgICAgICAgICAgICAgICBzcGFuPXsxfVxuICAgICAgICAgICAgICAgIG91dE9mPXthc2tRdWVzdGlvbkdyaWRTaXplfT5cbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25Gb3JtIHR5cGU9XCJmdWxsXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7ZnJlcXVlbnRBcnRpY2xlc0VsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICBjb25zdCBmcmVxdWVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5jdXN0b21JZCA9PT0gJ2ZyZXF1ZW50LXF1ZXN0aW9ucycpXG4gICAgY29uc3QgZnJlcXVlbnRTdWJzZWNpb25zID0gZnJlcXVlbnRTZWN0aW9uLmNoaWxkcmVuLm1hcChjaCA9PiBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5faWQgPT09IGNoKSlcblxuICAgIHJldHVybiB7XG4gICAgICBmcmVxdWVudFNlY3Rpb24sXG4gICAgICBmcmVxdWVudFN1YnNlY2lvbnMsXG4gICAgICBhcnRpY2xlczogc3RhdGUuYXJ0aWNsZXMuaXRlbXMsXG4gICAgICBsYXlvdXQ6IHN0YXRlLnVpLmxheW91dFxuICAgIH1cbiAgfVxuKShDdXN0b21QYWdlSG9tZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VIb21lL0N1c3RvbVBhZ2VIb21lLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZ25hdHVyZS5jc3MnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uL0xheW91dHMnXG5cbmNvbnN0IFNpZ25hdHVyZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNpZ25hdHVyZX0+XG4gICAgICAgIOKAkyBEci4gSmVubmlmZXIgUG90dGVyLCBNRFxuICAgICAgPC9kaXY+XG4gICAgPC9GbGV4PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hdHVyZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2lnbmF0dXJlL1NpZ25hdHVyZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTaWduYXR1cmVcIjpcIlNpZ25hdHVyZV9fU2lnbmF0dXJlX19fMTFDbkZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NpZ25hdHVyZS9TaWduYXR1cmUuY3NzXG4gKiogbW9kdWxlIGlkID0gNjc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge1RleHRJbnB1dCwgVGV4dEFyZWEsIEJ1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQgTGFiZWxlZElucHV0IGZyb20gJy4uL0xheW91dHMvTGFiZWxlZElucHV0J1xuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQge0dyaWQsIEdyaWRJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0dyaWQnXG5cbmltcG9ydCB7Y3JlYXRlUXVlc3Rpb259IGZyb20gJy4uLy4uL3N0b3JlL3F1ZXN0aW9uc0FjdGlvbnMnXG5cbmNsYXNzIFF1ZXN0aW9uRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yczoge30sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBvc3Rlck5hbWU6IHByb3BzLnVzZXIubmFtZSxcbiAgICAgICAgcG9zdGVyRW1haWw6IHByb3BzLnVzZXIuZW1haWwsXG4gICAgICAgIHF1ZXN0aW9uOiAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuY3JlYXRlID0gdGhpcy5jcmVhdGUuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBpc1VwZGF0aW5nfSA9IG5ld1Byb3BzLnF1ZXN0aW9uXG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwb3N0ZXJOYW1lOiBuZXdQcm9wcy51c2VyLm5hbWUsXG4gICAgICAgICAgICBwb3N0ZXJFbWFpbDogbmV3UHJvcHMudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVRdWVzdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBjcmVhdGVRdWVzdGlvbih0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtxdWVzdGlvbjoge2lzVXBkYXRpbmd9LCB0eXBlLCBsYXlvdXR9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGdyaWRTaXplID0gMFxuICAgIHN3aXRjaCAobGF5b3V0KSB7XG4gICAgICBjYXNlICdzJzpcbiAgICAgICAgZ3JpZFNpemUgPSAxXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtJzpcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgY2FzZSAneGwnOlxuICAgICAgICBncmlkU2l6ZSA9IDJcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgbGF5b3V0IHR5cGUgJHtsYXlvdXR9YClcbiAgICB9XG5cbiAgICBsZXQgaW5wdXRzID0gJydcbiAgICBpZiAodHlwZSA9PT0gJ3N0YWNrZWQnKSB7XG4gICAgICBpbnB1dHMgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPExhYmVsZWRJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJOYW1lfVxuICAgICAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5wb3N0ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBvc3Rlck5hbWV9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQ2FzZXlcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdwb3N0ZXJOYW1lJywgdil9IC8+XG4gICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPExhYmVsZWRJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucG9zdGVyRW1haWx9XG4gICAgICAgICAgICAgIGlucHV0PXtcbiAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBvc3RlckVtYWlsfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBvc3RlckVtYWlsfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGNhc2V5QGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ3Bvc3RlckVtYWlsJywgdil9IC8+XG4gICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmdWxsJykge1xuICAgICAgaW5wdXRzID0gKFxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPEdyaWQgZ3V0dGVyQm90dG9tPXsxfT5cbiAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b209ezF9XG4gICAgICAgICAgICAgIHNwYW49ezF9XG4gICAgICAgICAgICAgIG91dE9mPXtncmlkU2l6ZX0+XG4gICAgICAgICAgICAgIDxMYWJlbGVkSW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBvc3Rlck5hbWV9XG4gICAgICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBvc3Rlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQ2FzZXlcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9eyh2KSA9PiB0aGlzLmNoYW5nZSgncG9zdGVyTmFtZScsIHYpfSAvPlxuICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b209ezF9XG4gICAgICAgICAgICAgIHNwYW49ezF9XG4gICAgICAgICAgICAgIG91dE9mPXtncmlkU2l6ZX0+XG4gICAgICAgICAgICAgIDxMYWJlbGVkSW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucG9zdGVyRW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGNhc2V5QGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdwb3N0ZXJFbWFpbCcsIHYpfSAvPlxuICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAge2lucHV0c31cblxuICAgICAgICA8QmxvY2sgbj17MS41fT5cbiAgICAgICAgICA8TGFiZWxlZElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgcXVlc3Rpb25cIlxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnF1ZXN0aW9ufVxuICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gd2hpY2ggdmFjY2luZXMgYXJlIHNhZmUgZm9yIGtpZHMgdW5kZXIgNSB5ZWFycz9cIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ3F1ZXN0aW9uJywgdil9IC8+XG4gICAgICAgICAgICB9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfT5Bc2sgcXVlc3Rpb248L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXIsXG4gICAgICBxdWVzdGlvbjogc3RhdGUucXVlc3Rpb24sXG4gICAgICBsYXlvdXQ6IHN0YXRlLnVpLmxheW91dFxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVRdWVzdGlvbjogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlUXVlc3Rpb24oZGF0YSwgJ1lvdXIgcXVlc3Rpb24gaGFzIGJlZW4gc2VudCwgd2Ugd2lsbCByZXBseSB0byB5b3UgYXMgc29vbiBhcyB3ZSBjYW4hJykpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFF1ZXN0aW9uRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uRm9ybS9RdWVzdGlvbkZvcm0uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nMS5jc3MnXG5cbmNvbnN0IEhlYWRpbmcxID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxpbmtUbyA9IG51bGwsXG4gIHVuZGVybGluZVxufSkgPT4ge1xuICBpZiAobGlua1RvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPXtsaW5rVG99XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmcxfVxuICAgICAgICAgICR7c3R5bGVzLkhlYWRpbmcxX2xpbmt9XG4gICAgICAgICAgJHt1bmRlcmxpbmUgPyBzdHlsZXMuSGVhZGluZzFfdW5kZXJsaW5lIDogJyd9YH0+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMX1cbiAgICAgICAgJHt1bmRlcmxpbmUgPyBzdHlsZXMuSGVhZGluZzFfdW5kZXJsaW5lIDogJyd9YH0+e2NoaWxkcmVufTwvaDE+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmcxXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcxL0hlYWRpbmcxLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRpbmcxXCI6XCJIZWFkaW5nMV9fSGVhZGluZzFfX18zUkdKRlwiLFwiSGVhZGluZzFfbGlua1wiOlwiSGVhZGluZzFfX0hlYWRpbmcxX2xpbmtfX18xaVNsdFwiLFwiSGVhZGluZzFfdW5kZXJsaW5lXCI6XCJIZWFkaW5nMV9fSGVhZGluZzFfdW5kZXJsaW5lX19fMUlOa3dcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzEvSGVhZGluZzEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRpbmcyLmNzcydcblxuY29uc3QgSGVhZGluZzIgPSAoe1xuICBjaGlsZHJlbixcbiAgbGlua1RvID0gbnVsbCxcbiAgdW5kZXJsaW5lID0gZmFsc2Vcbn0pID0+IHtcbiAgaWYgKGxpbmtUbykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMn1cbiAgICAgICAgICAke3N0eWxlcy5IZWFkaW5nMl9saW5rfVxuICAgICAgICAgICR7dW5kZXJsaW5lID8gc3R5bGVzLkhlYWRpbmcyX3VuZGVybGluZSA6ICcnfWB9XG4gICAgICAgIHRvPXtsaW5rVG99PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8aDJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSGVhZGluZzJ9XG4gICAgICAgICR7dW5kZXJsaW5lID8gc3R5bGVzLkhlYWRpbmcyX3VuZGVybGluZSA6ICcnfWB9PntjaGlsZHJlbn08L2gyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nMlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMi9IZWFkaW5nMi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nMlwiOlwiSGVhZGluZzJfX0hlYWRpbmcyX19fMWxtSktcIixcIkhlYWRpbmcyX2xpbmtcIjpcIkhlYWRpbmcyX19IZWFkaW5nMl9saW5rX19fM19uLUxcIixcIkhlYWRpbmcyX3VuZGVybGluZVwiOlwiSGVhZGluZzJfX0hlYWRpbmcyX3VuZGVybGluZV9fXzI0VGpQXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcyL0hlYWRpbmcyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGluZ0xpbmVkLmNzcydcblxuY29uc3QgSGVhZGluZ0xpbmVkID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdMaW5lZH0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZ0xpbmVkX190aXRsZX0+e2NoaWxkcmVufTwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZ0xpbmVkXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmdMaW5lZC9IZWFkaW5nTGluZWQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSGVhZGluZ0xpbmVkXCI6XCJIZWFkaW5nTGluZWRfX0hlYWRpbmdMaW5lZF9fX1BBcTEzXCIsXCJIZWFkaW5nTGluZWRfX3RpdGxlXCI6XCJIZWFkaW5nTGluZWRfX0hlYWRpbmdMaW5lZF9fdGl0bGVfX18xdWU0bFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nTGluZWQvSGVhZGluZ0xpbmVkLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dC5jc3MnXG5cbmNvbnN0IEhlYWRpbmczID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleHR9PntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nM1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9UZXh0L1RleHQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGV4dFwiOlwiVGV4dF9fVGV4dF9fX2xXWUFGXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L1RleHQvVGV4dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2ODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIldlbGNvbWVTZWN0aW9uXCI6XCJDdXN0b21QYWdlSG9tZV9fV2VsY29tZVNlY3Rpb25fX18zRzVES1wiLFwiV2VsY29tZVNlY3Rpb25fX2JvZHlcIjpcIkN1c3RvbVBhZ2VIb21lX19XZWxjb21lU2VjdGlvbl9fYm9keV9fXzJObkxXXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2ODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMvR3JpZCdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBIZWFkaW5nTGluZWQgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nTGluZWQnXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UeXBvZ3JhcGh5L1RleHQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DdXN0b21QYWdlQWJvdXQuY3NzJ1xuXG5jb25zdCBDdXN0b21QYWdlQWJvdXQgPSAoe1xuICBsYXlvdXRcbn0pID0+IHtcbiAgbGV0IGdyaWRTaXplID0gMFxuICBsZXQgYm94U2l6ZSA9IDBcblxuICBzd2l0Y2ggKGxheW91dCkge1xuICAgIGNhc2UgJ3MnOlxuICAgIGNhc2UgJ20nOlxuICAgICAgZ3JpZFNpemUgPSAxXG4gICAgICBib3hTaXplID0gNFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdsJzpcbiAgICBjYXNlICd4bCc6XG4gICAgICBncmlkU2l6ZSA9IDJcbiAgICAgIGJveFNpemUgPSA2XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGxheW91dCB2YWx1ZSAke2xheW91dH1gKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BYm91dFNlY3Rpb259IC8+XG5cbiAgICAgIDxXcmFwcGVyPlxuICAgICAgICA8R3JpZFxuICAgICAgICAgIGd1dHRlckJvdHRvbT17MH0+XG4gICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICBndXR0ZXJCb3R0b209ezB9XG4gICAgICAgICAgICBzcGFuPXsxfVxuICAgICAgICAgICAgb3V0T2Y9e2dyaWRTaXplfT5cbiAgICAgICAgICAgIDxCb3ggbj17Ym94U2l6ZX0+XG4gICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXtib3hTaXplIC0gMn0+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZ0xpbmVkPldobyBXZSBBcmU8L0hlYWRpbmdMaW5lZD5cbiAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgPFRleHQ+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS48L1RleHQ+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbT17MH1cbiAgICAgICAgICAgIHNwYW49ezF9XG4gICAgICAgICAgICBvdXRPZj17Z3JpZFNpemV9PlxuICAgICAgICAgICAgPEJveCBuPXtib3hTaXplfT5cbiAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPEJsb2NrIG49e2JveFNpemUgLSAyfT5cbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nTGluZWQ+RnVuZGluZyBmb3IgdGhlIHByb2plY3Q8L0hlYWRpbmdMaW5lZD5cbiAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgPFRleHQ+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS48L1RleHQ+XG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9XG4pKEN1c3RvbVBhZ2VBYm91dClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VBYm91dC9DdXN0b21QYWdlQWJvdXQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQWJvdXRTZWN0aW9uXCI6XCJDdXN0b21QYWdlQWJvdXRfX0Fib3V0U2VjdGlvbl9fXzNlbmVPXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlQWJvdXQvQ3VzdG9tUGFnZUFib3V0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEJveCBmcm9tICcuLi9MYXlvdXRzL0JveCdcbmltcG9ydCBCbG9jayBmcm9tICcuLi9MYXlvdXRzL0Jsb2NrJ1xuaW1wb3J0IEhlYWRpbmcxIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzEnXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UeXBvZ3JhcGh5L1RleHQnXG5pbXBvcnQge1JvdywgQ29sdW1uLCBDZWxsfSBmcm9tICcuLi9UYWJsZSdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcblxuY29uc3QgQ3VzdG9tUGFnZVNjaGVkdWxlID0gKHtcbiAgbGF5b3V0XG59KSA9PiB7XG4gIGxldCB2YWNjaW5lQ29sdW1uV2lkdGggPSAwXG4gIGxldCBzaG93RnVsbE5hbWUgPSBudWxsXG4gIGxldCBib3hTaXplID0gMFxuXG4gIHN3aXRjaCAobGF5b3V0KSB7XG4gICAgY2FzZSAncyc6XG4gICAgY2FzZSAnbSc6XG4gICAgICB2YWNjaW5lQ29sdW1uV2lkdGggPSAnN3JlbSdcbiAgICAgIHNob3dGdWxsTmFtZSA9IGZhbHNlXG4gICAgICBib3hTaXplID0gNFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdsJzpcbiAgICBjYXNlICd4bCc6XG4gICAgICB2YWNjaW5lQ29sdW1uV2lkdGggPSAnMjVyZW0nXG4gICAgICBzaG93RnVsbE5hbWUgPSB0cnVlXG4gICAgICBib3hTaXplID0gOFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcihgdW5leHBldGVkIGxheW91dCB0eXBlICR7bGF5b3V0fWApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPEJveCBuPXtib3hTaXplfT5cbiAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgIDxIZWFkaW5nMSB1bmRlcmxpbmU+VmFjY2luYXRpb24gU2NoZWR1bGU8L0hlYWRpbmcxPlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgICA8VGV4dD5UaGlzIGlzIHRoZSByZWNvbW1lbmRlZCBzY2hlZHVsZSBmb3IgdmFjY2luYXRpb25zIGluIE1hbml0b2JhLjwvVGV4dD5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPFJvdyBoZWFkaW5nIGJ0PlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibCAvPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI0NSVcIiBicj48Q2VsbCBoZWFkaW5nPk1vbnRoczwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgaGVhZGluZz5ZZWFyczwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgaGVhZGluZz5HcmFkZTwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIGhlYWRpbmc+WWVhcnM8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGhlYWRpbmcgYmI+XG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPXt2YWNjaW5lQ29sdW1uV2lkdGh9IGJsPlxuICAgICAgICAgICAgICA8Q2VsbCBhbGlnbj1cInJpZ2h0XCIgaGVhZGluZz5cbiAgICAgICAgICAgICAgICBWYWNjaW5lXG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiPjxDZWxsPjI8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCI+PENlbGw+NDwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIj48Q2VsbD42PC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiPjxDZWxsPjEyPC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsPjE4PC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbD40LTY8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCI+PENlbGw+NDwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbD42PC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGw+MTQtMTY8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIERUYVAtSGliLUlQViB7c2hvd0Z1bGxOYW1lID8gJyhEaXBodGhlcmlhLCBUZXRhbnVzLCBQZXJ0dXNzaXMsIEhlbW9waGlsdXMgaW5mbHVlbnphZSB0eXBlIGIsIFBvbGlvKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBQQ1Yge3Nob3dGdWxsTmFtZSA/ICcoUG5ldW1vY29jY3VzIGNvbmp1Z2F0ZSB2YWNjaW5lKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIFJWIHtzaG93RnVsbE5hbWUgPyAnKFJvdGF2aXJ1cyB2YWNjaW5lKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgYmI+XG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPXt2YWNjaW5lQ29sdW1uV2lkdGh9IGJsPlxuICAgICAgICAgICAgICA8Q2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgTU1SViB7c2hvd0Z1bGxOYW1lID8gJyhNZWFzbGVzLCBtdW1wcywgcnViZWxsYSwgdmFyaWNlbGxhKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgYmI+XG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPXt2YWNjaW5lQ29sdW1uV2lkdGh9IGJsPlxuICAgICAgICAgICAgICA8Q2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgTUNWIHtzaG93RnVsbE5hbWUgPyAnKE1lbmluZ29jb2NjdXMgY29uanVnYXRlIHZhY2NpbmUpJyA6ICcnfVxuICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBQQ1Yge3Nob3dGdWxsTmFtZSA/ICcoUG5ldW1vY29jY3VzIGNvbmp1Z2F0ZSB2YWNjaW5lKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIFRkYXAtSVBWIHtzaG93RnVsbE5hbWUgPyAnKFRldGFudXMsIERpcGh0aGVyaWEsIFBlcnR1c3NpcywgUG9saW8pJyA6ICcnfVxuICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIEhCViB7c2hvd0Z1bGxOYW1lID8gJyhIZXBhdGl0aXMgQiknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgYmI+XG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPXt2YWNjaW5lQ29sdW1uV2lkdGh9IGJsPlxuICAgICAgICAgICAgICA8Q2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgSFBWIHtzaG93RnVsbE5hbWUgPyAnKEh1bWFuIHBhcGlsbG9tYSB2aXJ1cyknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgYmI+XG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPXt2YWNjaW5lQ29sdW1uV2lkdGh9IGJsPlxuICAgICAgICAgICAgICA8Q2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgVGRhcCB7c2hvd0Z1bGxOYW1lID8gJyhUZXRhbnVzLCBEaXBodGhlcmlhLCBQZXJ0dXNzaXMpJyA6ICcnfVxuICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPFRleHQ+RXZlcnkgZmFsbCwgc3RhcnRpbmcgYXQgNiBtb250aCwgY2hpbGRyZW4gYXJlIGFkZGl0aW9uYWxseSBzY2hlZHVsZWQgZm9yIGFuIEluZmx1ZW56YSB2YWNjaW5lIChRSVYsIFFMQUlWKTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9XG4pKEN1c3RvbVBhZ2VTY2hlZHVsZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VTY2hlZHVsZS9DdXN0b21QYWdlU2NoZWR1bGUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEFydGljbGVzUGFnZSBmcm9tICcuLi9BcnRpY2xlc1BhZ2UnXG5cbmNsYXNzIFNlY3Rpb25Db250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtjdXJyZW50U2VjdGlvbiwgcGFyZW50U2VjdGlvbiwgcGFyYW1zLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzXG5cbiAgICBzd2l0Y2ggKGN1cnJlbnRTZWN0aW9uLnNlY3Rpb25UeXBlKSB7XG4gICAgICBjYXNlICdhcnRpY2xlcyc6XG4gICAgICBjYXNlICdibG9ncG9zdHMnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBcnRpY2xlc1BhZ2VcbiAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uPXtjdXJyZW50U2VjdGlvbn1cbiAgICAgICAgICAgIHBhcmVudFNlY3Rpb249e3BhcmVudFNlY3Rpb259XG4gICAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59XG4gICAgICAgICAgICBwYXJhbXM9e3BhcmFtc30gLz5cbiAgICAgICAgKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBzZWN0aW9uIHR5cGUgb24gMm5kIGxldmVsICR7Y3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGV9YClcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy51cmwgPT09IHBhcmFtcy5zdWJzZWN0aW9uVXJsKVxuICAgIGNvbnN0IHBhcmVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy51cmwgPT09IHBhcmFtcy5zZWN0aW9uVXJsKVxuXG4gICAgLy8gY29uc3Qgc2VjdGlvbkJsb2dwb3N0cyA9IGN1cnJlbnRTZWN0aW9uLmFydGljbGVzXG4gICAgLy8gLm1hcChhID0+IGFydGljbGVzLmZpbmQoYXJ0ID0+IGFydC5faWQgPT09IGEpKVxuICAgIC8vIC5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRTZWN0aW9uLFxuICAgICAgcGFyZW50U2VjdGlvblxuICAgIH1cbiAgfVxuKShTZWN0aW9uQ29udGFpbmVyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU3Vic2VjdGlvbkNvbnRhaW5lci9TdWJzZWN0aW9uQ29udGFpbmVyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRlbnQuY3NzJ1xuXG5jb25zdCBDb250ZW50ID0gKHtcbiAgdGV4dCA9ICcnXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuQ29udGVudH1cbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0ZXh0fX0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0NvbnRlbnQvQ29udGVudC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDb250ZW50XCI6XCJDb250ZW50X19Db250ZW50X19fMlJRMFVcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQ29udGVudC9Db250ZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vQ29tbWVudCdcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuLi9Db21tZW50Rm9ybSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbW1lbnRzLmNzcydcblxuY29uc3QgQ29tbWVudHMgPSAoe1xuICBhcnRpY2xlXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCbG9jayBuPXs2fT5cbiAgICAgICAgPENvbW1lbnRGb3JtIGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICB7YXJ0aWNsZS5jb21tZW50cy5sZW5ndGggPiAwXG4gICAgICAgID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudHN9PlxuICAgICAgICAgICAgPEJsb2NrIG49ezEuNX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudHNfX3RpdGxlfT5Db21tZW50czwvZGl2PlxuICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgPEJsb2NrIG49ezEuNX0+XG4gICAgICAgICAgICAgIHthcnRpY2xlLmNvbW1lbnRzLm1hcCgoYywgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgPENvbW1lbnRcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgY29tbWVudD17Y30gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgOiAnJ1xuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQge0Jsb2NrLCBMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL1R5cG9ncmFwaHkvQ29udGVudCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21tZW50LmNzcydcbmltcG9ydCBDb21tZW50UmVwbHkgZnJvbSAnLi4vQ29tbWVudFJlcGx5J1xuaW1wb3J0IENvbW1lbnRSZXBseUZvcm0gZnJvbSAnLi4vQ29tbWVudFJlcGx5Rm9ybSdcbmltcG9ydCB7TGlua0J1dHRvbn0gZnJvbSAnLi4vVUknXG5cbmNsYXNzIENvbW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudG9nZ2xlRm9ybSA9IHRoaXMudG9nZ2xlRm9ybS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1JlcGx5Rm9ybTogZmFsc2VcbiAgICB9XG4gIH1cblxuICB0b2dnbGVGb3JtICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dSZXBseUZvcm06ICF0aGlzLnN0YXRlLnNob3dSZXBseUZvcm1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y29tbWVudCwgYXJ0aWNsZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc29ydGVkUmVwbGllcyA9IGNvbW1lbnQucmVwbGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5jcmVhdGVkQXQgPiBiLmNyZWF0ZWRBdCkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0gZWxzZSBpZiAoYS5jcmVhdGVkQXQgPCBiLmNyZWF0ZWRBdCkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IGZvcm0gPSAnJ1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dSZXBseUZvcm0pIHtcbiAgICAgIGZvcm0gPSAoXG4gICAgICAgIDxCbG9jayBuPXtjb21tZW50LnJlcGxpZXMubGVuZ3RoID8gNCA6IDB9PlxuICAgICAgICAgIDxDb21tZW50UmVwbHlGb3JtXG4gICAgICAgICAgICBjYW5jZWxDYWxsYmFjaz17KCkgPT4gdGhpcy50b2dnbGVGb3JtKCl9XG4gICAgICAgICAgICBjb21tZW50PXtjb21tZW50fVxuICAgICAgICAgICAgYXJ0aWNsZUlkPXthcnRpY2xlLl9pZH0gLz5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgcmVwbGllcyA9ICcnXG4gICAgaWYgKGNvbW1lbnQucmVwbGllcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXBsaWVzID0gKFxuICAgICAgICA8TGlzdCBuPXsyfT5cbiAgICAgICAgICB7c29ydGVkUmVwbGllcy5tYXAoKHIsIGluZGV4KSA9PlxuICAgICAgICAgICAgPExpc3RJdGVtIG49ezJ9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8Q29tbWVudFJlcGx5IHJlcGx5PXtyfSAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudH0+XG4gICAgICAgIDxCbG9jayBuPXt0aGlzLnN0YXRlLnNob3dSZXBseUZvcm0gfHwgY29tbWVudC5yZXBsaWVzLmxlbmd0aCA+IDAgPyAzIDogMH0+XG4gICAgICAgICAgPEJsb2NrIG49ezAuNX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRfX2luZm99PmJ5IHtjb21tZW50LmNyZWF0ZWRCeX0gb24gPFRpbWUgdmFsdWU9e2NvbW1lbnQuY3JlYXRlZEF0fSBmb3JtYXQ9XCJNTU0gRG8sIGg6bUFcIiAvPjwvZGl2PlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8Q29udGVudCB0ZXh0PXtjb21tZW50LmNvbnRlbnR9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRm9ybX0+UmVwbHkgdG8gdGhpcyBjb21tZW50PC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudF9fcmVwbGllc30+XG4gICAgICAgICAge2Zvcm19XG5cbiAgICAgICAgICB7cmVwbGllc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvbW1lbnRcIjpcIkNvbW1lbnRfX0NvbW1lbnRfX19DTFMyd1wiLFwiQ29tbWVudF9faW5mb1wiOlwiQ29tbWVudF9fQ29tbWVudF9faW5mb19fXzFyb29sXCIsXCJDb21tZW50X19yZXBsaWVzXCI6XCJDb21tZW50X19Db21tZW50X19yZXBsaWVzX19fUFhMWFJcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21tZW50UmVwbHkuY3NzJ1xuXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBDb21tZW50UmVwbHkgPSAoe1xuICByZXBseVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudFJlcGx5fT5cbiAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRSZXBseV9faW5mb30+Ynkge3JlcGx5LmNyZWF0ZWRCeX0gb24gPFRpbWUgdmFsdWU9e3JlcGx5LmNyZWF0ZWRBdH0gZm9ybWF0PVwiTU1NIERvLCBoOm1BXCIgLz48L2Rpdj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxDb250ZW50IHRleHQ9e3JlcGx5LmNvbnRlbnR9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFJlcGx5XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvbW1lbnRSZXBseVwiOlwiQ29tbWVudFJlcGx5X19Db21tZW50UmVwbHlfX18xdkVhbVwiLFwiQ29tbWVudFJlcGx5X19pbmZvXCI6XCJDb21tZW50UmVwbHlfX0NvbW1lbnRSZXBseV9faW5mb19fXzJnTHQ1XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtCbG9jaywgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vVUkvVGV4dEFyZWEnXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuLi9VSS9MaW5rQnV0dG9uJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24nXG5pbXBvcnQgTGFiZWxlZElucHV0IGZyb20gJy4uL0xheW91dHMvTGFiZWxlZElucHV0J1xuXG5pbXBvcnQge2NyZWF0ZVJlcGx5fSBmcm9tICcuLi8uLi9zdG9yZS9yZXBsaWVzQWN0aW9ucydcblxuY2xhc3MgQ29tbWVudFJlcGx5Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29udGVudDogJydcbiAgICAgIH0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnMsIGlzVXBkYXRpbmd9ID0gbmV3UHJvcHMuY29tbWVudC5uZXdSZXBseVxuXG4gICAgaWYgKCFpc1VwZGF0aW5nKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDAgJiYgZXJyb3JzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29udGVudDogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXJyb3JzLCB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBuZXdEYXRhLFxuICAgICAgZXJyb3JzOiBuZXdFcnJvcnNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICBjb25zdCB7Y3JlYXRlUmVwbHksIGNhbmNlbENhbGxiYWNrfSA9IHRoaXMucHJvcHNcblxuICAgIGNyZWF0ZVJlcGx5KHRoaXMuc3RhdGUuZGF0YSlcbiAgICBjYW5jZWxDYWxsYmFjaygpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtjb21tZW50OiB7bmV3UmVwbHk6IHtpc1VwZGF0aW5nfX0sIGNhbmNlbENhbGxiYWNrfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2sgbj17MS41fT5cbiAgICAgICAgICA8TGFiZWxlZElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgcmVwbHlcIlxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICBpbnB1dD17KFxuICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9eyh2KSA9PiB0aGlzLmNoYW5nZSgnY29udGVudCcsIHYpfSAvPlxuICAgICAgICAgICAgKX0gLz5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8TGlzdElubGluZSBuPXsyfT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17Mn0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ30+UG9zdCByZXBseTwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17Mn0+XG4gICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxDYWxsYmFja30+Q2FuY2VsPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBudWxsLFxuICAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge2FydGljbGVJZCwgY29tbWVudH0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZVJlcGx5OiBkYXRhID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlUmVwbHkoZGF0YSwgYXJ0aWNsZUlkLCBjb21tZW50Ll9pZCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKENvbW1lbnRSZXBseUZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHlGb3JtL0NvbW1lbnRSZXBseUZvcm0uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vVUkvVGV4dEFyZWEnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbidcbmltcG9ydCBMYWJlbGVkSW5wdXQgZnJvbSAnLi4vTGF5b3V0cy9MYWJlbGVkSW5wdXQnXG5cbmltcG9ydCB7Y3JlYXRlQ29tbWVudH0gZnJvbSAnLi4vLi4vc3RvcmUvY29tbWVudHNBY3Rpb25zJ1xuXG5jbGFzcyBDb21tZW50Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29udGVudDogJydcbiAgICAgIH0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnMsIGlzVXBkYXRpbmd9ID0gbmV3UHJvcHMuYXJ0aWNsZS5uZXdDb21tZW50XG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVDb21tZW50fSA9IHRoaXMucHJvcHNcblxuICAgIGNyZWF0ZUNvbW1lbnQodGhpcy5zdGF0ZS5kYXRhKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7YXJ0aWNsZToge25ld0NvbW1lbnQ6IHtpc1VwZGF0aW5nfX19ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICA8TGFiZWxlZElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlBvc3QgYSBjb21tZW50XCJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgaW5wdXQ9eyhcbiAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ2NvbnRlbnQnLCB2KX0gLz5cbiAgICAgICAgICAgICl9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfT5Qb3N0IGNvbW1lbnQ8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBudWxsLFxuICAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge2FydGljbGV9ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVDb21tZW50OiBkYXRhID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlQ29tbWVudChkYXRhLCBhcnRpY2xlLl9pZCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKENvbW1lbnRGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ29tbWVudEZvcm0vQ29tbWVudEZvcm0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ29tbWVudHNcIjpcIkNvbW1lbnRzX19Db21tZW50c19fXzRXT1Q2XCIsXCJDb21tZW50c19fdGl0bGVcIjpcIkNvbW1lbnRzX19Db21tZW50c19fdGl0bGVfX18zYlZJMFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvQ29tbWVudHMuY3NzXG4gKiogbW9kdWxlIGlkID0gODE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRpbmczLmNzcydcblxuY29uc3QgSGVhZGluZzMgPSAoe1xuICBjaGlsZHJlbixcbiAgbGlua1RvID0gbnVsbFxufSkgPT4ge1xuICBpZiAobGlua1RvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXtsaW5rVG99IGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmczfSAke3N0eWxlcy5IZWFkaW5nM19saW5rfWB9PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZzN9PntjaGlsZHJlbn08L2gyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nM1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMy9IZWFkaW5nMy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nM1wiOlwiSGVhZGluZzNfX0hlYWRpbmczX19fMWtpZ0tcIixcIkhlYWRpbmczTGlua1wiOlwiSGVhZGluZzNfX0hlYWRpbmczTGlua19fXzFKQ21MXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBIZWFkaW5nMiBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcyJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vVHlwb2dyYXBoeS9UZXh0J1xuaW1wb3J0IFNpZ25hdHVyZSBmcm9tICcuLi9TaWduYXR1cmUnXG5pbXBvcnQgUXVlc3Rpb25Gb3JtIGZyb20gJy4uL1F1ZXN0aW9uRm9ybSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Fza1F1ZXN0aW9uLmNzcydcblxuY29uc3QgQXNrUXVlc3Rpb24gPSAoe1xuICBmb3JtTGF5b3V0XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Bc2tRdWVzdGlvbn0+XG4gICAgICA8QmxvY2s+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb25fX2hlYWRlcn0+XG4gICAgICAgICAgPEhlYWRpbmcyPkFzayBhIFF1ZXN0aW9uPC9IZWFkaW5nMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICA8QmxvY2s+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb25fX2JvZHl9PlxuICAgICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgICAgPFRleHQ+SWYgeW91IHdvdWxkIHJhdGhlciBhc2sgeW91ciBxdWVzdGlvbiB0aGFuIHNlYXJjaCB0aGUgZW50aXJlIHdlYnNpdGUsIGRvbuKAmXQgaGVzaXRhdGUgdG8gc2VuZCB5b3VyIHF1ZXN0aW9uIHRvIHVzITwvVGV4dD5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPFNpZ25hdHVyZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxRdWVzdGlvbkZvcm0gdHlwZT17Zm9ybUxheW91dH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc2tRdWVzdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXNrUXVlc3Rpb24vQXNrUXVlc3Rpb24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXNrUXVlc3Rpb25cIjpcIkFza1F1ZXN0aW9uX19Bc2tRdWVzdGlvbl9fXzNCazEtXCIsXCJBc2tRdWVzdGlvbl9faGVhZGVyXCI6XCJBc2tRdWVzdGlvbl9fQXNrUXVlc3Rpb25fX2hlYWRlcl9fXzdDUV9vXCIsXCJBc2tRdWVzdGlvbl9fYm9keVwiOlwiQXNrUXVlc3Rpb25fX0Fza1F1ZXN0aW9uX19ib2R5X19fMkRDWXlcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uL0Fza1F1ZXN0aW9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBCbG9jayBmcm9tICcuLi9MYXlvdXRzL0Jsb2NrJ1xuaW1wb3J0IEhlYWRpbmcxIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzEnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9UeXBvZ3JhcGh5L0luZm8nXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vQ29tbWVudHMnXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuLi9VSS9MaW5rQnV0dG9uJ1xuXG5jb25zdCBBcnRpY2xlUGFnZSA9ICh7XG4gIGFydGljbGUsXG4gIHBhcmFtc1xufSkgPT4ge1xuICBjb25zdCBiYWNrTGluayA9IHBhcmFtcy5zdWJzZWN0aW9uVXJsXG4gICAgPyBgLyR7cGFyYW1zLnNlY3Rpb25Vcmx9LyR7cGFyYW1zLnN1YnNlY3Rpb25Vcmx9YFxuICAgIDogYC8ke3BhcmFtcy5zZWN0aW9uVXJsfWBcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAge2FydGljbGUuYXJ0aWNsZVR5cGUgPT09ICdibG9ncG9zdCdcbiAgICAgICAgPyAoXG4gICAgICAgICAgPEJsb2NrIG49ezAuNX0+XG4gICAgICAgICAgICA8SW5mbz5Qb3N0ZWQgb24gPFRpbWUgdmFsdWU9e25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KX0gZm9ybWF0PVwiTU1NIERvLCBoOm1BXCIgLz48L0luZm8+XG4gICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgKVxuICAgICAgICA6ICcnXG4gICAgICB9XG4gICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgIDxIZWFkaW5nMT57YXJ0aWNsZS50aXRsZX08L0hlYWRpbmcxPlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICA8Q29udGVudCB0ZXh0PXthcnRpY2xlLmNvbnRlbnR9IC8+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICA8QmxvY2sgbj17YXJ0aWNsZS5hcnRpY2xlVHlwZSA9PT0gJ2Jsb2dwb3N0JyA/IDQgOiAwfT5cbiAgICAgICAgPExpbmtCdXR0b24gdG89e2JhY2tMaW5rfT4mIzE3MTsgQmFjayB0byB0aGUgbGlzdDwvTGlua0J1dHRvbj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIHthcnRpY2xlLmFydGljbGVUeXBlID09PSAnYmxvZ3Bvc3QnXG4gICAgICAgID8gPENvbW1lbnRzIGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgIDogJydcbiAgICAgIH1cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcbiAgICBjb25zdCBhcnRpY2xlID0gc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmluZChhID0+IGEudXJsID09PSBwYXJhbXMuYXJ0aWNsZVVybClcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlXG4gICAgfVxuICB9XG4pKEFydGljbGVQYWdlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXJ0aWNsZVBhZ2UvQXJ0aWNsZVBhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5mby5jc3MnXG5cbmNvbnN0IEluZm8gPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5mb30+e2NoaWxkcmVufTwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSW5mby9JbmZvLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkluZm9cIjpcIkluZm9fX0luZm9fX18yWnA0NlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9JbmZvL0luZm8uY3NzXG4gKiogbW9kdWxlIGlkID0gODQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWJsZS5jc3MnXG5cbmNvbnN0IFJvdyA9ICh7XG4gIGJiID0gZmFsc2UsXG4gIGJ0ID0gZmFsc2UsXG4gIGJyID0gZmFsc2UsXG4gIGJsID0gZmFsc2UsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5Sb3ddXG4gIGlmIChidCkgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJ0KSB9XG4gIGlmIChiYikgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJiKSB9XG4gIGlmIChibCkgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJsKSB9XG4gIGlmIChicikgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJyKSB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IENvbHVtbiA9ICh7XG4gIGJiID0gZmFsc2UsXG4gIGJ0ID0gZmFsc2UsXG4gIGJyID0gZmFsc2UsXG4gIGJsID0gZmFsc2UsXG4gIHdpZHRoLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7fVxuICBpZiAod2lkdGggPT09ICdzdHJldGNoJykge1xuICAgIHN0eWxlLmZsZXggPSAxXG4gIH0gZWxzZSB7XG4gICAgc3R5bGUud2lkdGggPSB3aWR0aFxuICB9XG5cbiAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLkNvbHVtbl1cbiAgaWYgKGJ0KSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYnQpIH1cbiAgaWYgKGJiKSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYmIpIH1cbiAgaWYgKGJsKSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYmwpIH1cbiAgaWYgKGJyKSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYnIpIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9XG4gICAgICBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IENlbGwgPSAoe1xuICBoZWFkaW5nID0gZmFsc2UsXG4gIGZpbGxlZCA9IGZhbHNlLFxuICBhbGlnbiA9ICdjZW50ZXInLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgdGV4dEFsaWduOiBhbGlnblxuICB9XG5cbiAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLkNlbGxdXG4gIGlmIChoZWFkaW5nKSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQ2VsbF9oZWFkaW5nKSB9XG4gIGlmIChmaWxsZWQpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5DZWxsX2ZpbGxlZCkgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtSb3csIENvbHVtbiwgQ2VsbH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlJvd1wiOlwiVGFibGVfX1Jvd19fXzFZbG1pXCIsXCJDb2x1bW5cIjpcIlRhYmxlX19Db2x1bW5fX19qVFFjcVwiLFwiQ2VsbFwiOlwiVGFibGVfX0NlbGxfX18yODlGV1wiLFwiQ2VsbF9oZWFkaW5nXCI6XCJUYWJsZV9fQ2VsbF9oZWFkaW5nX19fM0h0bGxcIixcIkNlbGxfZmlsbGVkXCI6XCJUYWJsZV9fQ2VsbF9maWxsZWRfX18ybTVKLVwiLFwiYmJcIjpcIlRhYmxlX19iYl9fXzF6NHBfXCIsXCJidFwiOlwiVGFibGVfX2J0X19fMTBXUU5cIixcImJyXCI6XCJUYWJsZV9fYnJfX18zVTNyNlwiLFwiYmxcIjpcIlRhYmxlX19ibF9fXzF2U1UzXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4NDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSEE7QUFIQTtBQURBO0FBREE7Ozs7Ozs7QUN0REE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFuQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBSUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRkE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1Q0E7QUE4Q0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2QkE7QUF5QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVhBO0FBYUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQVhBO0FBYUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFwRUE7QUFDQTtBQXNFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBU0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ3BEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ3JDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUMzQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7OztBQy9DQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTs7Ozs7Ozs7QUM5QkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVdBO0FBWkE7QUFlQTtBQUNBOzs7Ozs7OztBQ2xDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQU1BO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFQQTtBQVNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUxBO0FBT0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ3ZGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQURBO0FBaUJBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQTFCQTtBQUNBO0FBNEJBOzs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBVEE7QUFEQTtBQWtCQTtBQUNBOzs7Ozs7OztBQzdCQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQXZDQTtBQUNBO0FBeUNBOzs7Ozs7O0FDOUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFWQTtBQURBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUE1QkE7QUFEQTtBQURBO0FBdUNBO0FBeENBO0FBMkNBOzs7O0FBdEdBO0FBQ0E7QUF3R0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQVRBO0FBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBUEE7QUFMQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTkE7QUEzQkE7QUFEQTtBQURBO0FBeUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRkE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQVBBO0FBUUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFmQTtBQXFCQTs7OztBQXZEQTtBQUNBO0FBeURBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7OztBQ2pGQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ3BCQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQURBO0FBREE7QUFEQTtBQWlCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7OztBQ3hDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQXpCQTtBQTRCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUF6QkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQWRBO0FBQ0E7QUFFQTtBQUFBO0FBZUE7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbUJBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFMQTtBQU1BO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7OztBQ2hDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW1CQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBUkE7QUFEQTtBQURBO0FBREE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBREE7QUFEQTtBQURBO0FBREE7QUFjQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFNQTtBQWRBO0FBREE7QUFEQTtBQXFCQTtBQXRCQTtBQURBO0FBMEJBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUE1RkE7QUFMQTtBQUNBO0FBREE7QUFtR0E7Ozs7QUE5R0E7QUFDQTtBQWdIQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ2xJQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQUpBO0FBZUE7Ozs7QUE3QkE7QUFDQTtBQStCQTs7Ozs7OztBQ3BDQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTs7OztBQS9DQTtBQUNBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVRBO0FBWEE7QUE2QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiQTtBQWdCQTtBQXZCQTtBQUxBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQWRBO0FBREE7QUFEQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7QUNsTEE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbENBO0FBQ0E7QUFvQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkE7QUFnQkE7QUF6QkE7QUFEQTtBQURBO0FBTEE7QUFDQTtBQXNDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBVkE7QUFIQTtBQUZBO0FBREE7QUFEQTtBQURBO0FBMEJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQVpBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWxCQTtBQURBO0FBREE7QUFEQTtBQWdDQTtBQTNEQTtBQThEQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7Ozs7Ozs7Ozs7OztBQ3pMQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQUNBO0FBUUE7QUFDQTtBQWJBO0FBY0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFmQTtBQThCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFiQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBYkE7QUFsQkE7QUFEQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQWpCQTtBQXNCQTs7OztBQTNLQTtBQUNBO0FBNktBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7O0FDdE1BO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBREE7QUFKQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBSkE7QUFqQkE7QUFEQTtBQUhBO0FBdUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7O0FDaEZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQUhBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBMU9BO0FBaVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExUUE7QUFEQTtBQStRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDelRBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBWkE7QUFjQTs7OztBQWxCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBREE7QUFMQTtBQVBBO0FBMEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUxBO0FBUUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBYkE7QUFvQkE7Ozs7QUEzRUE7QUFDQTtBQTZFQTs7Ozs7OztBQ3hGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQVFBO0FBQ0E7Ozs7Ozs7O0FDckJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBWEE7QUFZQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVRBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBUEE7QUFkQTtBQTRCQTs7OztBQXJGQTtBQUNBO0FBdUZBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBWEE7QUFZQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBVEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQWRBO0FBbUJBOzs7O0FBM0VBO0FBQ0E7QUE2RUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7QUNsR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQURBO0FBVUE7QUFqQkE7QUFvQkE7QUFDQTs7Ozs7Ozs7QUNuQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBckJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7QUM3RUE7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=