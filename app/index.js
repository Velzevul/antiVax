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

	var _SubsectionContainer = __webpack_require__(673);

	var _SubsectionContainer2 = _interopRequireDefault(_SubsectionContainer);

	var _SectionContainer = __webpack_require__(795);

	var _SectionContainer2 = _interopRequireDefault(_SectionContainer);

	var _ArticlePage = __webpack_require__(805);

	var _ArticlePage2 = _interopRequireDefault(_ArticlePage);

	var _SearchResults = __webpack_require__(814);

	var _SearchResults2 = _interopRequireDefault(_SearchResults);

	var _ChangePassword = __webpack_require__(817);

	var _ChangePassword2 = _interopRequireDefault(_ChangePassword);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _AppContainer2.default },
	      _react2.default.createElement(_reactRouter.IndexRedirect, { to: 'home' }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'change-password', component: _ChangePassword2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'search', component: _SearchResults2.default }),
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

	    fetch(("https://vdziubak.com/vaccineAnswersServer") + '/auth/authenticate-credentials', {
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

	    fetch(("https://vdziubak.com/vaccineAnswersServer") + '/auth/authenticate-token', {
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

	    fetch(("https://vdziubak.com/vaccineAnswersServer") + '/questions/', {
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

	    fetch(("https://vdziubak.com/vaccineAnswersServer") + '/articles/', {
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

	    fetch(("https://vdziubak.com/vaccineAnswersServer") + '/articles/' + articleId + '/comments/', {
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

	    fetch(("https://vdziubak.com/vaccineAnswersServer") + '/articles/' + articleId + '/comments/' + commentId + '/replies', {
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

	var _reactRouter = __webpack_require__(492);

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

	var updateUser = exports.updateUser = function updateUser(id, data, backlink) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://vdziubak.com/vaccineAnswersServer") + '/users/' + id, {
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
	        dispatch((0, _flashActions.flashMessage)('Your account information has been updated', 'log'));
	        if (backlink) {
	          _reactRouter.browserHistory.push(backlink);
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

	    fetch(("https://vdziubak.com/vaccineAnswersServer") + '/sections/', {
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

	var _Footer = __webpack_require__(661);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _FlashMessage = __webpack_require__(649);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _MainNav = __webpack_require__(669);

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

	var _CurrentUser = __webpack_require__(658);

	var _CurrentUser2 = _interopRequireDefault(_CurrentUser);

	var _logo = __webpack_require__(660);

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
	          _react2.default.createElement(_CurrentUser2.default, null),
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

	var _reactRouter = __webpack_require__(492);

	var _reactRedux = __webpack_require__(470);

	var _searchActions = __webpack_require__(562);

	var _UI = __webpack_require__(606);

	var _InputDecorator = __webpack_require__(622);

	var _InputDecorator2 = _interopRequireDefault(_InputDecorator);

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

	    _this.setQuery = _this.setQuery.bind(_this);
	    _this.doSearch = _this.doSearch.bind(_this);
	    return _this;
	  }

	  _createClass(SearchBar, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var query = newProps.query;


	      this.setState({
	        query: query
	      });
	    }
	  }, {
	    key: 'setQuery',
	    value: function setQuery(v) {
	      var setSearchQuery = this.props.setSearchQuery;


	      setSearchQuery(v);
	    }
	  }, {
	    key: 'doSearch',
	    value: function doSearch() {
	      _reactRouter.browserHistory.push('/search?q=' + this.state.query);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.search,
	          className: _SearchBar2.default.SearchBar },
	        _react2.default.createElement(_InputDecorator2.default, {
	          input: _react2.default.createElement(_UI.TextInput, {
	            value: this.state.query,
	            hasSuffix: true,
	            inverse: true,
	            changeCallback: this.setQuery,
	            placeholder: 'Search the website' }),
	          suffix: _react2.default.createElement(
	            _UI.Button,
	            {
	              hasPrefix: true,
	              onClick: this.doSearch },
	            'Search'
	          ) })
	      );
	    }
	  }]);

	  return SearchBar;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    query: state.search.query
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _CurrentUser = __webpack_require__(659);

	var _CurrentUser2 = _interopRequireDefault(_CurrentUser);

	var _authActions = __webpack_require__(550);

	var _LinkButton = __webpack_require__(630);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _ListInline = __webpack_require__(616);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CurrentUser = function CurrentUser(_ref) {
	  var user = _ref.user;
	  var logOut = _ref.logOut;

	  return _react2.default.createElement(
	    'div',
	    { className: _CurrentUser2.default.CurrentUser },
	    _react2.default.createElement(
	      _ListInline.ListInline,
	      null,
	      _react2.default.createElement(
	        _ListInline.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _CurrentUser2.default.CurrentUser__name },
	          'logged in as ',
	          user.name
	        )
	      ),
	      _react2.default.createElement(
	        _ListInline.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          _LinkButton2.default,
	          { theme: 'accent2', onClick: logOut },
	          'Log out'
	        )
	      )
	    )
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.auth.user
	  };
	}, function (dispatch) {
	  return {
	    logOut: function logOut() {
	      dispatch((0, _authActions.logOut)());
	    }
	  };
		})(CurrentUser);

/***/ },

/***/ 659:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CurrentUser":"CurrentUser__CurrentUser___1WaU6","CurrentUser__name":"CurrentUser__CurrentUser__name___12hIZ"};

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.96a61176db54e227423626799744201e.svg";

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Footer = __webpack_require__(662);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Flex = __webpack_require__(611);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _ListOfArticles = __webpack_require__(664);

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

/***/ 662:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Footer":"Footer__Footer___268PT","Footer__text":"Footer__Footer__text___c0zmD"};

/***/ },

/***/ 663:
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

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Link = __webpack_require__(665);

	var _Link2 = _interopRequireDefault(_Link);

	var _Heading = __webpack_require__(667);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _List = __webpack_require__(614);

	var _ListInline = __webpack_require__(616);

	var _ListOfArticles = __webpack_require__(832);

	var _ListOfArticles2 = _interopRequireDefault(_ListOfArticles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var ListOfArticles = function ListOfArticles(_ref) {
	  var articleEntries = _ref.articleEntries;
	  var _ref$layout = _ref.layout;
	  var layout = _ref$layout === undefined ? 'stacked' : _ref$layout;
	  var _ref$inverse = _ref.inverse;
	  var inverse = _ref$inverse === undefined ? false : _ref$inverse;
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1.25 : _ref$n;
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
	            'div',
	            { className: index > 0 ? _ListOfArticles2.default.Heading : '' },
	            _react2.default.createElement(
	              _Heading2.default,
	              null,
	              entry.article.title
	            )
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

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Link = __webpack_require__(666);

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

/***/ 666:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Link":"Link__Link___1kMBk","Link_active":"Link__Link_active___3tau-","Link_inverse":"Link__Link_inverse___32JA8","Link_small":"Link__Link_small___1-Xvh"};

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(668);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Heading2 = function Heading2(_ref) {
	  var children = _ref.children;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$underline = _ref.underline;
	  var underline = _ref$underline === undefined ? false : _ref$underline;

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        className: _Heading2.default.Heading2 + '\n          ' + _Heading2.default.Heading2_link + '\n          ' + (underline ? _Heading2.default.Heading2_underline : ''),
	        to: to },
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

/***/ 668:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading2":"Heading2__Heading2___1lmJK","Heading2_link":"Heading2__Heading2_link___3_n-L","Heading2_underline":"Heading2__Heading2_underline___24TjP"};

/***/ },

/***/ 669:
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

	var _Select = __webpack_require__(670);

	var _Select2 = _interopRequireDefault(_Select);

	var _Flex = __webpack_require__(611);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _MainNav = __webpack_require__(672);

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
	      _reactRouter.browserHistory.push(url);
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

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Select = __webpack_require__(671);

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

/***/ 671:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Select":"Select__Select___1rPbL","Select__fake":"Select__Select__fake___3wkdd","Select__input":"Select__Select__input___r7ey7","Select_inverse":"Select__Select_inverse___1kD9E"};

/***/ },

/***/ 672:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Navigation":"MainNav__Navigation___DD3ft","Navigation__item":"MainNav__Navigation__item___1g_6T","Navigation__item_active":"MainNav__Navigation__item_active___2iXCQ","Navigation__item_parent_active":"MainNav__Navigation__item_parent_active___2mNO8","Subnavigation":"MainNav__Subnavigation___5GroH","Subnavigation__item":"MainNav__Subnavigation__item___3tcZ4","Subnavigation__item_active":"MainNav__Subnavigation__item_active___2Wmgu"};

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _ArticlesPage = __webpack_require__(674);

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

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(675);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Flex = __webpack_require__(611);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Grid = __webpack_require__(612);

	var _List = __webpack_require__(614);

	var _Heading = __webpack_require__(780);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Heading3 = __webpack_require__(667);

	var _Heading4 = _interopRequireDefault(_Heading3);

	var _Heading5 = __webpack_require__(782);

	var _Heading6 = _interopRequireDefault(_Heading5);

	var _Content = __webpack_require__(784);

	var _Content2 = _interopRequireDefault(_Content);

	var _Info = __webpack_require__(786);

	var _Info2 = _interopRequireDefault(_Info);

	var _LinkButton = __webpack_require__(630);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _AskQuestion = __webpack_require__(788);

	var _AskQuestion2 = _interopRequireDefault(_AskQuestion);

	var _ListOfArticles = __webpack_require__(664);

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
	              _Info2.default,
	              null,
	              'Posted on ',
	              _react2.default.createElement(_reactTime2.default, { value: new Date(a.createdAt), format: 'MMM Do, h:mA' }),
	              ' by ',
	              a.lastModifiedBy
	            ),
	            _react2.default.createElement(
	              _Heading4.default,
	              null,
	              a.title
	            ),
	            _react2.default.createElement(
	              _Block2.default,
	              { n: 0.5 },
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

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(781);

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

/***/ 781:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading1":"Heading1__Heading1___3RGJF","Heading1_link":"Heading1__Heading1_link___1iSlt","Heading1_underline":"Heading1__Heading1_underline___1INkw"};

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(783);

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

/***/ 783:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading3":"Heading3__Heading3___1kigK","Heading3Link":"Heading3__Heading3Link___1JCmL"};

/***/ },

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Content = __webpack_require__(785);

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

/***/ 785:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Content":"Content__Content___2RQ0U"};

/***/ },

/***/ 786:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Info = __webpack_require__(787);

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

/***/ 787:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Info":"Info__Info___2Zp46"};

/***/ },

/***/ 788:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(667);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Content = __webpack_require__(784);

	var _Content2 = _interopRequireDefault(_Content);

	var _Signature = __webpack_require__(791);

	var _Signature2 = _interopRequireDefault(_Signature);

	var _QuestionForm = __webpack_require__(793);

	var _QuestionForm2 = _interopRequireDefault(_QuestionForm);

	var _AskQuestion = __webpack_require__(794);

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
	          _react2.default.createElement(_Content2.default, { text: '\n                <p>Not quite finding what you’re looking for? Want something explained further? Have a question about something you found elsewhere? Want a copy of a study we’ve cited? Send in your question and I’ll email you back.</p>\n              ' })
	        ),
	        _react2.default.createElement(_Signature2.default, null)
	      )
	    ),
	    _react2.default.createElement(_QuestionForm2.default, { type: formLayout })
	  );
	};

	exports.default = AskQuestion;

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Text = __webpack_require__(790);

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

/***/ 790:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Text":"Text__Text___lWYAF"};

/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Signature = __webpack_require__(792);

	var _Signature2 = _interopRequireDefault(_Signature);

	var _Layouts = __webpack_require__(609);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Signature = function Signature() {
	  return _react2.default.createElement(
	    _Layouts.Flex,
	    { justifyContent: 'flex-end' },
	    _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        to: '/who-we-are',
	        className: _Signature2.default.Signature },
	      '– Jen Potter MD B.Sc. CCFP',
	      _react2.default.createElement('br', null),
	      'Family physician'
	    )
	  );
	};

	exports.default = Signature;

/***/ },

/***/ 792:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Signature":"Signature__Signature___11CnF"};

/***/ },

/***/ 793:
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
	              placeholder: 'e.g., Are there any dangerous side effects to the chicken pox vaccine?',
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

/***/ 794:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AskQuestion":"AskQuestion__AskQuestion___3Bk1-","AskQuestion__header":"AskQuestion__AskQuestion__header___7CQ_o","AskQuestion__body":"AskQuestion__AskQuestion__body___2DCYy"};

/***/ },

/***/ 795:
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

	var _ArticlesPage = __webpack_require__(674);

	var _ArticlesPage2 = _interopRequireDefault(_ArticlesPage);

	var _CustomPageHome = __webpack_require__(796);

	var _CustomPageHome2 = _interopRequireDefault(_CustomPageHome);

	var _CustomPageAbout = __webpack_require__(800);

	var _CustomPageAbout2 = _interopRequireDefault(_CustomPageAbout);

	var _CustomPageSchedule = __webpack_require__(802);

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
	        _reactRouter.browserHistory.push('/' + currentSection.url + '/' + firstSubsection.url);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var params = newProps.params;
	      var currentSection = newProps.currentSection;
	      var firstSubsection = newProps.firstSubsection;


	      if (firstSubsection && !params.subsectionUrl) {
	        _reactRouter.browserHistory.push('/' + currentSection.url + '/' + firstSubsection.url);
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

/***/ 796:
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

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _Signature = __webpack_require__(791);

	var _Signature2 = _interopRequireDefault(_Signature);

	var _QuestionForm = __webpack_require__(793);

	var _QuestionForm2 = _interopRequireDefault(_QuestionForm);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(780);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Heading3 = __webpack_require__(667);

	var _Heading4 = _interopRequireDefault(_Heading3);

	var _HeadingLined = __webpack_require__(797);

	var _HeadingLined2 = _interopRequireDefault(_HeadingLined);

	var _Content = __webpack_require__(784);

	var _Content2 = _interopRequireDefault(_Content);

	var _ListOfArticles = __webpack_require__(664);

	var _ListOfArticles2 = _interopRequireDefault(_ListOfArticles);

	var _Button = __webpack_require__(628);

	var _Button2 = _interopRequireDefault(_Button);

	var _CustomPageHome = __webpack_require__(799);

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
	      frequentGridSize = Math.min(frequentSubsecions.length, 2);
	      frequentBox = 4;
	      askQuestionGridSize = 1;
	      askQuestionBox = 4;
	      break;
	    case 'l':
	      WelcomeGridSize = 2;
	      welcomeBox = 4;
	      frequentGridSize = Math.min(frequentSubsecions.length, 3);
	      frequentBox = 8;
	      askQuestionGridSize = 2;
	      askQuestionBox = 8;
	      break;
	    case 'xl':
	      WelcomeGridSize = 2;
	      welcomeBox = 6;
	      frequentGridSize = Math.min(frequentSubsecions.length, 4);
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
	                  { n: 2 },
	                  _react2.default.createElement(_Content2.default, { text: '\n                      <p>We know there’s a lot of info about childhood vaccination out there, and some of it can be confusing or conflicting. Our goal is to provide parents with reliable, evidence-based, up-to- date information about childhood vaccinations, and more importantly, to help you sort through the information you are finding, whether on our site or somewhere else.</p>\n                      <p>Feel free to browse around our site! If you can’t find the information you’re looking for, or you would rather just ask your question directly to me, send it in and I will email you back.</p>\n                    ' })
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
	                { n: 2 },
	                _react2.default.createElement(_Content2.default, { text: '\n                      <p>Not quite finding what you’re looking for? Want something explained further? Have a question about something you found elsewhere? Want a copy of a study we’ve cited? Send in your question and I’ll email you back.</p>\n                      <p>If we receive the same or similar question several times, we may add it to our Frequent Questions page. Nothing that identifies the question-askers will ever be posted.</p>\n                    ' })
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

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _HeadingLined = __webpack_require__(798);

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

/***/ 798:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"HeadingLined":"HeadingLined__HeadingLined___PAq13","HeadingLined__title":"HeadingLined__HeadingLined__title___1ue4l"};

/***/ },

/***/ 799:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"WelcomeSection":"CustomPageHome__WelcomeSection___3G5DK","WelcomeSection__body":"CustomPageHome__WelcomeSection__body___2NnLW"};

/***/ },

/***/ 800:
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

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _HeadingLined = __webpack_require__(797);

	var _HeadingLined2 = _interopRequireDefault(_HeadingLined);

	var _Content = __webpack_require__(784);

	var _Content2 = _interopRequireDefault(_Content);

	var _CustomPageAbout = __webpack_require__(801);

	var _CustomPageAbout2 = _interopRequireDefault(_CustomPageAbout);

	var _team = __webpack_require__(831);

	var _team2 = _interopRequireDefault(_team);

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
	      gridSize = 1;
	      boxSize = 6;
	      break;
	    default:
	      console.error('unexpected layout value ' + layout);
	  }

	  return _react2.default.createElement(
	    'article',
	    null,
	    _react2.default.createElement(
	      'figure',
	      { className: _CustomPageAbout2.default.AboutSection },
	      _react2.default.createElement('img', { src: _team2.default, className: _CustomPageAbout2.default.AboutSection__img }),
	      _react2.default.createElement(
	        'figcaption',
	        { className: _CustomPageAbout2.default.AboutSection__caption },
	        _react2.default.createElement(
	          _Wrapper2.default,
	          null,
	          'The Vaccine Answers team (L-R): Ryan Maier, Michelle Driedger, Andrea Bunt and Jen Potter.'
	        )
	      )
	    ),
	    _react2.default.createElement(
	      _Wrapper2.default,
	      { maxWidth: '50' },
	      _react2.default.createElement(
	        _Box2.default,
	        { n: boxSize },
	        _react2.default.createElement(
	          _Block2.default,
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
	                'About The Project'
	              )
	            ),
	            _react2.default.createElement(_Content2.default, { text: '\n                  <p>Vaccine Answers is a website being developed to try to address parental concerns about childhood vaccinations. Based on the available evidence, we strongly feel that the benefits of vaccination greatly outweigh the risks for the vast majority of people, but we are not here to tell parents whether or not to vaccinate their children. Our goal is to provide reliable, evidence-based, up-to- date information about vaccination (both the pros and the cons) to help parents make their own decisions.</p>\n                  <p>This project was conceived based on the experiences of Jen Potter (site moderator and principal investigator of this study) when she was a new parent. The first phase of this study is designed to refine this website for parents\' use. It was funded by grants from the <a href="http://mmsf.ca/">Manitoba Medical Services Foundation</a> and The <a href="http://www.wpgfdn.org/">Winnipeg Foundation</a>. The second phase of this study will look at the effectiveness of the website to reduce parents\' hesitancy around childhood vaccination.</p>\n                  <p>Please note that we provide general information, not medical advice, on this site. If you have questions specific to your child, we will refer you to your primary care provider. (For example, “what are the side effects of the chicken pox vaccine?” is a question we can answer. “Should my child get the chicken pox vaccine?” should be directed to your health care provider.)</p>\n                ' })
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            _Block2.default,
	            { n: boxSize - 2 },
	            _react2.default.createElement(
	              _HeadingLined2.default,
	              null,
	              'About Us'
	            )
	          ),
	          _react2.default.createElement(_Content2.default, { text: '\n                <p><strong>Jen Potter MD B.Sc. CCFP</strong> is a family physician at Kildonan Medical Centre, where she teaches family medicine residents and other learners in the Department of Family Medicine with the University of Manitoba. She lives in Winnipeg with her husband, three daughters and a cat. She enjoys canoeing, music, knitting and going to the lake (ideally all at the same time!). Jen’s role on this site is to generate and maintain the information presented, and to answer questions from parents.</p>\n                ' })
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

/***/ 801:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AboutSection":"CustomPageAbout__AboutSection___3eneO","AboutSection__img":"CustomPageAbout__AboutSection__img___1JbQA","AboutSection__caption":"CustomPageAbout__AboutSection__caption___28bHJ"};

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(780);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Text = __webpack_require__(789);

	var _Text2 = _interopRequireDefault(_Text);

	var _Table = __webpack_require__(803);

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
	        'Influenza (QIV or QAIV) vaccination is recommended every fall for anyone aged 6 months or older.'
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

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Cell = exports.Column = exports.Row = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(804);

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

/***/ 804:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Row":"Table__Row___1Ylmi","Column":"Table__Column___jTQcq","Cell":"Table__Cell___289FW","Cell_heading":"Table__Cell_heading___3Htll","Cell_filled":"Table__Cell_filled___2m5J-","bb":"Table__bb___1z4p_","bt":"Table__bt___10WQN","br":"Table__br___3U3r6","bl":"Table__bl___1vSU3"};

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(675);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(780);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Content = __webpack_require__(784);

	var _Content2 = _interopRequireDefault(_Content);

	var _Info = __webpack_require__(786);

	var _Info2 = _interopRequireDefault(_Info);

	var _Comments = __webpack_require__(806);

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
	        _react2.default.createElement(_reactTime2.default, { value: new Date(article.createdAt), format: 'MMM Do, h:mA' }),
	        ' by ',
	        article.lastModifiedBy
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

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Layouts = __webpack_require__(609);

	var _Comment = __webpack_require__(807);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _CommentForm = __webpack_require__(812);

	var _CommentForm2 = _interopRequireDefault(_CommentForm);

	var _Comments = __webpack_require__(813);

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

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(675);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Layouts = __webpack_require__(609);

	var _Content = __webpack_require__(784);

	var _Content2 = _interopRequireDefault(_Content);

	var _Comment = __webpack_require__(808);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _CommentReply = __webpack_require__(809);

	var _CommentReply2 = _interopRequireDefault(_CommentReply);

	var _CommentReplyForm = __webpack_require__(811);

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

/***/ 808:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comment":"Comment__Comment___CLS2w","Comment__info":"Comment__Comment__info___1rool","Comment__replies":"Comment__Comment__replies___PXLXR"};

/***/ },

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(675);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _CommentReply = __webpack_require__(810);

	var _CommentReply2 = _interopRequireDefault(_CommentReply);

	var _Content = __webpack_require__(784);

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

/***/ 810:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CommentReply":"CommentReply__CommentReply___1vEam","CommentReply__info":"CommentReply__CommentReply__info___2gLt5"};

/***/ },

/***/ 811:
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

/***/ 812:
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

/***/ 813:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comments":"Comments__Comments___4WOT6","Comments__title":"Comments__Comments__title___3bVI0"};

/***/ },

/***/ 814:
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

	var _SearchResultsItem = __webpack_require__(815);

	var _SearchResultsItem2 = _interopRequireDefault(_SearchResultsItem);

	var _UI = __webpack_require__(606);

	var _SearchResults = __webpack_require__(816);

	var _SearchResults2 = _interopRequireDefault(_SearchResults);

	var _List = __webpack_require__(614);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _Heading = __webpack_require__(780);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchResults = function (_React$Component) {
	  _inherits(SearchResults, _React$Component);

	  function SearchResults() {
	    _classCallCheck(this, SearchResults);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchResults).apply(this, arguments));
	  }

	  _createClass(SearchResults, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var setSearchQuery = this.props.setSearchQuery;


	      this.props.router.setRouteLeaveHook(this.props.route, function () {
	        setSearchQuery('');
	      });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var fetchSearchResults = _props.fetchSearchResults;
	      var setSearchQuery = _props.setSearchQuery;
	      var query = _props.query;
	      var location = _props.location;


	      if (!query && location.query.q) {
	        setSearchQuery(location.query.q);
	      }

	      fetchSearchResults();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var fetchSearchResults = newProps.fetchSearchResults;
	      var query = newProps.query;


	      if (query !== this.props.query) {
	        fetchSearchResults();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var items = _props2.items;
	      var query = _props2.query;
	      var location = _props2.location;
	      var isFetching = _props2.isFetching;
	      var layout = _props2.layout;


	      var boxSize = 0;
	      switch (layout) {
	        case 's':
	        case 'm':
	          boxSize = 4;
	          break;
	        case 'l':
	        case 'xl':
	          boxSize = 8;
	          break;
	        default:
	          console.error('unexpected layout type ' + layout);
	      }

	      if (isFetching) {
	        return _react2.default.createElement(_UI.Spinner, null);
	      } else {
	        if (items.length) {
	          return _react2.default.createElement(
	            _Wrapper2.default,
	            { maxWidth: '50' },
	            _react2.default.createElement(
	              _Box2.default,
	              { n: boxSize },
	              _react2.default.createElement(
	                _Block2.default,
	                { n: 3 },
	                _react2.default.createElement(
	                  _Heading2.default,
	                  { underline: true },
	                  items.length,
	                  ' pages mention \'',
	                  query,
	                  '\''
	                )
	              ),
	              _react2.default.createElement(
	                _List.List,
	                { n: 3 },
	                items.map(function (p) {
	                  return _react2.default.createElement(
	                    _List.ListItem,
	                    { n: 3, key: p.objectID },
	                    _react2.default.createElement(_SearchResultsItem2.default, { item: p })
	                  );
	                })
	              )
	            )
	          );
	        } else {
	          return _react2.default.createElement(
	            'div',
	            { className: _SearchResults2.default.EmptySearchResults },
	            _react2.default.createElement(
	              'div',
	              { className: _SearchResults2.default.EmptySearchResults__text },
	              'We could not find ',
	              _react2.default.createElement(
	                'strong',
	                null,
	                '\'',
	                location.query.q,
	                '\''
	              ),
	              ' on our website'
	            )
	          );
	        }
	      }
	    }
	  }]);

	  return SearchResults;
	}(_react2.default.Component);

	var SearchResultsWithRouter = (0, _reactRouter.withRouter)(SearchResults);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.search.isFetching,
	    items: state.search.items,
	    query: state.search.query,
	    layout: state.ui.layout
	  };
	}, function (dispatch) {
	  return {
	    setSearchQuery: function setSearchQuery(q) {
	      dispatch((0, _searchActions.setSearchQuery)(q));
	    },
	    fetchSearchResults: function fetchSearchResults() {
	      dispatch((0, _searchActions.fetchSearchResults)());
	    }
	  };
		})(SearchResultsWithRouter);

/***/ },

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Content = __webpack_require__(784);

	var _Content2 = _interopRequireDefault(_Content);

	var _Heading = __webpack_require__(667);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Info = __webpack_require__(786);

	var _Info2 = _interopRequireDefault(_Info);

	var _LinkButton = __webpack_require__(630);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchResultsItem = function SearchResultsItem(_ref) {
	  var item = _ref.item;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _Heading2.default,
	      null,
	      item.title
	    ),
	    _react2.default.createElement(_Content2.default, { text: item._snippetResult.content.value }),
	    _react2.default.createElement(
	      _LinkButton2.default,
	      { to: '/' + item.url },
	      item.url
	    )
	  );
	};

	exports.default = SearchResultsItem;

/***/ },

/***/ 816:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SearchResults":"SearchResults__SearchResults___2Jfl9","EmptySearchResults":"SearchResults__EmptySearchResults___F3xSV","EmptySearchResults__text":"SearchResults__EmptySearchResults__text___l-1SO"};

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

	var _usersActions = __webpack_require__(598);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _TextInput = __webpack_require__(646);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	var _Button = __webpack_require__(628);

	var _Button2 = _interopRequireDefault(_Button);

	var _Heading = __webpack_require__(667);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChangePassword = function (_React$Component) {
	  _inherits(ChangePassword, _React$Component);

	  function ChangePassword(props) {
	    _classCallCheck(this, ChangePassword);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChangePassword).call(this, props));

	    _this.state = {
	      errors: {},
	      data: {
	        password: ''
	      }
	    };

	    _this.chnage = _this.change.bind(_this);
	    _this.submit = _this.submit.bind(_this);
	    return _this;
	  }

	  _createClass(ChangePassword, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$user = newProps.user;
	      var errors = _newProps$user.errors;
	      var isUpdating = _newProps$user.isUpdating;


	      if (!isUpdating) {
	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          this.setState({
	            data: {
	              password: ''
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
	    key: 'submit',
	    value: function submit() {
	      var _props = this.props;
	      var updatePassword = _props.updatePassword;
	      var currentUser = _props.currentUser;


	      updatePassword(currentUser.id, this.state.data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isUpdating = this.props.user.isUpdating;


	      return _react2.default.createElement(
	        _Wrapper2.default,
	        { maxWidth: '25' },
	        _react2.default.createElement(
	          _Box2.default,
	          { n: 8 },
	          _react2.default.createElement(
	            _Block2.default,
	            null,
	            _react2.default.createElement(
	              _Heading2.default,
	              null,
	              'Change password'
	            )
	          ),
	          _react2.default.createElement(
	            'form',
	            null,
	            _react2.default.createElement(
	              _Block2.default,
	              null,
	              _react2.default.createElement(_TextInput2.default, { label: 'New password:',
	                value: this.state.data.password,
	                error: this.state.errors.password,
	                disabled: isUpdating,
	                type: 'password',
	                changeCallback: function changeCallback(v) {
	                  return _this2.change('password', v);
	                } })
	            ),
	            _react2.default.createElement(
	              _Button2.default,
	              {
	                onClick: this.submit,
	                disabled: isUpdating },
	              'Update password'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ChangePassword;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    currentUser: state.auth.user,
	    user: state.user
	  };
	}, function (dispatch) {
	  var backlink = '/';

	  return {
	    updatePassword: function updatePassword(id, payload) {
	      dispatch((0, _usersActions.updateUser)(id, payload, backlink));
	    }
	  };
		})(ChangePassword);

/***/ },

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/team.dfb2914296b6d5d5a8dfd7e5ad8c4a34.jpg";

/***/ },

/***/ 832:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading":"ListOfArticles__Heading___2iMNr"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2NvbW1lbnRzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3JlcGxpZXNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VhcmNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hbGdvbGlhU2VhcmNoLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvdXNlcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvdXNlcnNBY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlY3Rpb25zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlY3Rpb25zQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VpUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VpQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyL0FwcENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVUkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGF5b3V0cy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvRmxleC9GbGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvR3JpZC9HcmlkLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwL1dyYXAuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYWJlbGVkSW5wdXQvTGFiZWxlZElucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xhYmVsZWRJbnB1dC9MYWJlbGVkSW5wdXQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvQnJlYWRjcnVtYnMvQnJlYWRjcnVtYnMuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTGlua0J1dHRvbi9MaW5rQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9MaW5rL0xpbmsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0xpbmsvTGluay5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9jYWxlL0xvY2FsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9jYWxlL0xvY2FsZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcHBlci9XcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1cnJlbnRVc2VyL0N1cnJlbnRVc2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvbG9nby5zdmciLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0JveC9Cb3guanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MaXN0T2ZBcnRpY2xlcy9MaXN0T2ZBcnRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvTGluay9MaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0xpbmsvTGluay5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9NYWluTmF2L01haW5OYXYuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluTmF2L01haW5OYXYuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TdWJzZWN0aW9uQ29udGFpbmVyL1N1YnNlY3Rpb25Db250YWluZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcnRpY2xlc1BhZ2UvQXJ0aWNsZXNQYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzMvSGVhZGluZzMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzMvSGVhZGluZzMuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0NvbnRlbnQvQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9Db250ZW50L0NvbnRlbnQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0luZm8vSW5mby5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9JbmZvL0luZm8uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Bc2tRdWVzdGlvbi9Bc2tRdWVzdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvVGV4dC9UZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L1RleHQvVGV4dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NpZ25hdHVyZS9TaWduYXR1cmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZ25hdHVyZS9TaWduYXR1cmUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkZvcm0vUXVlc3Rpb25Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Bc2tRdWVzdGlvbi9Bc2tRdWVzdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb25Db250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VIb21lL0N1c3RvbVBhZ2VIb21lLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nTGluZWQvSGVhZGluZ0xpbmVkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmdMaW5lZC9IZWFkaW5nTGluZWQuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VIb21lL0N1c3RvbVBhZ2VIb21lLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VTY2hlZHVsZS9DdXN0b21QYWdlU2NoZWR1bGUuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcnRpY2xlUGFnZS9BcnRpY2xlUGFnZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudFJlcGx5Rm9ybS9Db21tZW50UmVwbHlGb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudEZvcm0vQ29tbWVudEZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c0l0ZW0vU2VhcmNoUmVzdWx0c0l0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvU2VhcmNoUmVzdWx0cy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NoYW5nZVBhc3N3b3JkL0NoYW5nZVBhc3N3b3JkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlQWJvdXQvdGVhbS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGlzdE9mQXJ0aWNsZXMvTGlzdE9mQXJ0aWNsZXMuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5cbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLmNzcydcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtSb3V0ZXIsIFJvdXRlLCBJbmRleFJlZGlyZWN0LCBoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCBBcHBDb250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL0FwcENvbnRhaW5lcidcbmltcG9ydCBTdWJzZWN0aW9uQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9TdWJzZWN0aW9uQ29udGFpbmVyJ1xuaW1wb3J0IFNlY3Rpb25Db250YWluZXIgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25Db250YWluZXInXG5pbXBvcnQgQXJ0aWNsZVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVQYWdlJ1xuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMnXG5pbXBvcnQgQ2hhbmdlUGFzc3dvcmQgZnJvbSAnLi9jb21wb25lbnRzL0NoYW5nZVBhc3N3b3JkJ1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKClcblxuUmVhY3RET00ucmVuZGVyKChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcENvbnRhaW5lcn0+XG4gICAgICAgIDxJbmRleFJlZGlyZWN0IHRvPVwiaG9tZVwiIC8+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJjaGFuZ2UtcGFzc3dvcmRcIiBjb21wb25lbnQ9e0NoYW5nZVBhc3N3b3JkfSAvPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwic2VhcmNoXCIgY29tcG9uZW50PXtTZWFyY2hSZXN1bHRzfSAvPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiOnNlY3Rpb25VcmxcIiBjb21wb25lbnQ9e1NlY3Rpb25Db250YWluZXJ9PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXJ0aWNsZXMvOmFydGljbGVVcmxcIiBjb21wb25lbnQ9e0FydGljbGVQYWdlfSAvPlxuXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6c3Vic2VjdGlvblVybFwiIGNvbXBvbmVudD17U3Vic2VjdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cImFydGljbGVzLzphcnRpY2xlVXJsXCIgY29tcG9uZW50PXtBcnRpY2xlUGFnZX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pbmRleC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSAyOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcidcblxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua01pZGRsZXdhcmVdXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoKVxuICBtaWRkbGV3YXJlLnB1c2gobG9nZ2VyKVxufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3N0b3JlLmpzXG4gKiovIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGhSZWR1Y2VyJ1xuaW1wb3J0IGZsYXNoIGZyb20gJy4vZmxhc2hSZWR1Y2VyJ1xuaW1wb3J0IHF1ZXN0aW9uIGZyb20gJy4vcXVlc3Rpb25zUmVkdWNlcidcbmltcG9ydCBhcnRpY2xlcyBmcm9tICcuL2FydGljbGVSZWR1Y2VyJ1xuaW1wb3J0IHNlYXJjaCBmcm9tICcuL3NlYXJjaFJlZHVjZXInXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXJzUmVkdWNlcidcbmltcG9ydCBzZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zUmVkdWNlcidcbmltcG9ydCB1aSBmcm9tICcuL3VpUmVkdWNlcidcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoLFxuICBmbGFzaCxcbiAgcXVlc3Rpb24sXG4gIGFydGljbGVzLFxuICBzZWFyY2gsXG4gIHVzZXIsXG4gIHNlY3Rpb25zLFxuICB1aVxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9yb290UmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9BVVRILCBMT0dJTiwgTE9HT1VUfSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgYXV0aCA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuYXV0aCxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9BVVRIOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5hdXRoLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBMT0dJTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBhY3Rpb24udXNlclxuICAgICAgfVxuICAgIGNhc2UgTE9HT1VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0aFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2F1dGhSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQVVUSCA9ICdSRVFVRVNUX0FVVEgnXG5leHBvcnQgY29uc3QgTE9HSU4gPSAnTE9HSU4nXG5leHBvcnQgY29uc3QgTE9HT1VUID0gJ0xPR09VVCdcblxuY29uc3QgcmVxdWVzdEF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9BVVRIXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICBkaXNwYXRjaCh7dHlwZTogTE9HT1VUfSlcbiAgfVxufVxuXG5jb25zdCBsb2dJbiA9IChcbiAgdXNlclxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HSU4sXG4gICAgdXNlclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhDcmVkZW50aWFscyA9IChcbiAgZW1haWwsXG4gIHBhc3N3b3JkXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXV0aCgpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vYXV0aC9hdXRoZW50aWNhdGUtY3JlZGVudGlhbHNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nLCBqc29uLmRhdGEudG9rZW4pXG4gICAgICAgICAgZGlzcGF0Y2gobG9nSW4oanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShqc29uLmRhdGEuZXJyb3IsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhUb2tlbiA9IChcbiAgdG9rZW5cbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBdXRoKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hdXRoL2F1dGhlbnRpY2F0ZS10b2tlbmAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlblxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2F1dGhBY3Rpb25zLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFNFVF9NRVNTQUdFID0gJ1NFVF9NRVNTQUdFJ1xuZXhwb3J0IGNvbnN0IFVOU0VUX01FU1NBR0UgPSAnVU5TRVRfTUVTU0FHRSdcblxuY29uc3Qgc2V0TWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGUsXG4gIHRpbWVvdXRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX01FU1NBR0UsXG4gICAgbWVzc2FnZSxcbiAgICBtZXNzYWdlVHlwZSxcbiAgICB0aW1lb3V0SWRcbiAgfVxufVxuXG5jb25zdCB1bnNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVTlNFVF9NRVNTQUdFXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZsYXNoTWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGVcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVuc2V0TWVzc2FnZSgpKVxuICAgIH0sIDIwMDApXG5cbiAgICBkaXNwYXRjaChzZXRNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2VUeXBlLCB0KSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXV0aDoge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIHVzZXI6IG51bGxcbiAgfSxcbiAgZmxhc2g6IHtcbiAgICBtZXNzYWdlOiBudWxsLFxuICAgIHR5cGU6IG51bGwsXG4gICAgdGltZW91dElkOiBudWxsXG4gIH0sXG4gIHF1ZXN0aW9uOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICBhcnRpY2xlczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdXG4gIH0sXG4gIG5ld0NvbW1lbnQ6IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBlcnJvcnM6IHt9XG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBxdWVyeTogJydcbiAgfSxcbiAgdXNlcjoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgc2VjdGlvbnM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXVxuICB9LFxuICB1aToge1xuICAgIHdpbmRvd1dpZHRoOiAwLFxuICAgIGxheW91dDogJ3MnLFxuICAgIHdpZHRoVGhyZXNob2xkOiA5NjAsXG4gICAgbWFpbk1lbnVJc09wZW46IGZhbHNlXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9pbml0aWFsU3RhdGUuanNcbiAqKi8iLCJpbXBvcnQge1NFVF9NRVNTQUdFLCBVTlNFVF9NRVNTQUdFfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGZsYXNoID0gKFxuICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaCksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlVHlwZSxcbiAgICAgICAgdGltZW91dElkOiBhY3Rpb24udGltZW91dElkXG4gICAgICB9KVxuICAgIGNhc2UgVU5TRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSwgQ09ORklSTV9RVUVTVElPTl9DUkVBVEUsIFJFSkVDVF9RVUVTVElPTl9DUkVBVEV9IGZyb20gJy4vcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHF1ZXN0aW9uID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5xdWVzdGlvbixcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTl9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fUVVFU1RJT05fQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5xdWVzdGlvbilcbiAgICBjYXNlIFJFSkVDVF9RVUVTVElPTl9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVlc3Rpb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSA9ICdSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX1FVRVNUSU9OX0NSRUFURSA9ICdDT05GSVJNX1FVRVNUSU9OX0NSRUFURSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFID0gJ1JFSkVDVF9RVUVTVElPTl9DUkVBVEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUVVFU1RJT05fQ1JFQVRFXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1FVRVNUSU9OX0NSRUFURVxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVRdWVzdGlvbiA9IChcbiAgZGF0YSxcbiAgc3VjY2Vzc01lc3NhZ2VcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDcmVhdGUoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L3F1ZXN0aW9ucy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVzdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHF1ZXN0aW9ucyBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0FSVElDTEVTLCBSRUNFSVZFX0FSVElDTEVTfSBmcm9tICcuL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IHtSRVFVRVNUX0NPTU1FTlRfQ1JFQVRFLCBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFLCBSRUpFQ1RfQ09NTUVOVF9DUkVBVEV9IGZyb20gJy4vY29tbWVudHNBY3Rpb25zJ1xuaW1wb3J0IHtSRVFVRVNUX1JFUExZX0NSRUFURSwgQ09ORklSTV9SRVBMWV9DUkVBVEUsIFJFSkVDVF9SRVBMWV9DUkVBVEV9IGZyb20gJy4vcmVwbGllc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBJTklUX0FSVElDTEUgPSAnSU5JVF9BUlRJQ0xFJ1xuY29uc3QgSU5JVF9DT01NRU5UID0gJ0lOSVRfQ09NTUVOVCdcblxuY29uc3QgbmV3Q29tbWVudCA9IChcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQ09NTUVOVF9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9DT01NRU5UX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DT01NRU5UX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUubmV3Q29tbWVudClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgbmV3UmVwbHkgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1JFUExZX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVKRUNUX1JFUExZX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLm5ld0NvbW1lbnQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGNvbW1lbnQgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJTklUX0NPTU1FTlQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmNvbW1lbnQsIHtcbiAgICAgICAgbmV3UmVwbHk6IG5ld1JlcGx5KE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5uZXdDb21tZW50KSwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ09NTUVOVF9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uY29tbWVudElkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24uY29tbWVudCwge1xuICAgICAgICAgIG5ld1JlcGx5OiBuZXdSZXBseShPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUubmV3Q29tbWVudCksIGFjdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uY29tbWVudElkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIG5ld1JlcGx5OiBuZXdSZXBseShzdGF0ZS5uZXdSZXBseSwgYWN0aW9uKSxcbiAgICAgICAgICByZXBsaWVzOiBbXG4gICAgICAgICAgICAuLi5zdGF0ZS5yZXBsaWVzLFxuICAgICAgICAgICAgYWN0aW9uLnJlcGx5XG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX1JFUExZX0NSRUFURTpcbiAgICBjYXNlIFJFSkVDVF9SRVBMWV9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uY29tbWVudElkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIG5ld1JlcGx5OiBuZXdSZXBseShzdGF0ZS5uZXdSZXBseSwgYWN0aW9uKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGFydGljbGUgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBJTklUX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmFydGljbGUsIHtcbiAgICAgICAgY29tbWVudHM6IGFjdGlvbi5hcnRpY2xlLmNvbW1lbnRzLm1hcChjID0+IGNvbW1lbnQodW5kZWZpbmVkLCB7XG4gICAgICAgICAgdHlwZTogSU5JVF9DT01NRU5ULFxuICAgICAgICAgIGNvbW1lbnQ6IGNcbiAgICAgICAgfSkpLFxuICAgICAgICBuZXdDb21tZW50OiBuZXdDb21tZW50KE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5uZXdDb21tZW50KSwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ09NTUVOVF9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uYXJ0aWNsZUlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIG5ld0NvbW1lbnQ6IG5ld0NvbW1lbnQoc3RhdGUubmV3Q29tbWVudCwgYWN0aW9uKSxcbiAgICAgICAgICBjb21tZW50czogW1xuICAgICAgICAgICAgLi4uc3RhdGUuY29tbWVudHMsXG4gICAgICAgICAgICBjb21tZW50KHVuZGVmaW5lZCwge1xuICAgICAgICAgICAgICB0eXBlOiBJTklUX0NPTU1FTlQsXG4gICAgICAgICAgICAgIGNvbW1lbnQ6IGFjdGlvbi5jb21tZW50XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9DT01NRU5UX0NSRUFURTpcbiAgICBjYXNlIFJFSkVDVF9DT01NRU5UX0NSRUFURTpcbiAgICAgIGlmIChzdGF0ZS5faWQgPT09IGFjdGlvbi5hcnRpY2xlSWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgbmV3Q29tbWVudDogbmV3Q29tbWVudChzdGF0ZS5uZXdDb21tZW50LCBhY3Rpb24pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfUkVQTFlfQ1JFQVRFOlxuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgY2FzZSBSRUpFQ1RfUkVQTFlfQ1JFQVRFOlxuICAgICAgaWYgKHN0YXRlLl9pZCA9PT0gYWN0aW9uLmFydGljbGVJZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBjb21tZW50czogc3RhdGUuY29tbWVudHMubWFwKGMgPT4gY29tbWVudChjLCBhY3Rpb24pKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGFydGljbGVzID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5hcnRpY2xlcyxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtcy5tYXAoaSA9PiBhcnRpY2xlKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IElOSVRfQVJUSUNMRSxcbiAgICAgICAgICBhcnRpY2xlOiBpXG4gICAgICAgIH0pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfQ09NTUVOVF9DUkVBVEU6XG4gICAgY2FzZSBSRUpFQ1RfQ09NTUVOVF9DUkVBVEU6XG4gICAgY2FzZSBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFOlxuICAgIGNhc2UgUkVRVUVTVF9SRVBMWV9DUkVBVEU6XG4gICAgY2FzZSBDT05GSVJNX1JFUExZX0NSRUFURTpcbiAgICBjYXNlIFJFSkVDVF9SRVBMWV9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcChpID0+IGFydGljbGUoaSwgYWN0aW9uKSlcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQVJUSUNMRVMgPSAnUkVRVUVTVF9BUlRJQ0xFUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX0FSVElDTEVTID0gJ1JFQ0VJVkVfQVJUSUNMRVMnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0QXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9BUlRJQ0xFU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVBcnRpY2xlcyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfQVJUSUNMRVMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hBcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXJ0aWNsZXMoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2FydGljbGVzL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUFydGljbGVzKGpzb24uZGF0YS5hcnRpY2xlcykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXJ0aWNsZUFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQ09NTUVOVF9DUkVBVEUgPSAnUkVRVUVTVF9DT01NRU5UX0NSRUFURSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFID0gJ0NPTkZJUk1fQ09NTUVOVF9DUkVBVEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX0NPTU1FTlRfQ1JFQVRFID0gJ1JFSkVDVF9DT01NRU5UX0NSRUFURSdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RDcmVhdGUgPSAoXG4gIGFydGljbGVJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9DT01NRU5UX0NSRUFURSxcbiAgICBhcnRpY2xlSWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKFxuICBjb21tZW50LFxuICBhcnRpY2xlSWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fQ09NTUVOVF9DUkVBVEUsXG4gICAgY29tbWVudCxcbiAgICBhcnRpY2xlSWRcbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9ycyxcbiAgYXJ0aWNsZUlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfQ09NTUVOVF9DUkVBVEUsXG4gICAgZXJyb3JzLFxuICAgIGFydGljbGVJZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb21tZW50ID0gKFxuICBkYXRhLFxuICBhcnRpY2xlSWQsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKGFydGljbGVJZCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hcnRpY2xlcy8ke2FydGljbGVJZH0vY29tbWVudHMvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgY29tbWVudDogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLmNvbW1lbnQsIGFydGljbGVJZCkpXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UsICdsb2cnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wQ29tcG9uZW50cyA9IHByb3Auc3BsaXQoJy4nKVxuICAgICAgICAgICAgY29uc3QgY29tbWVudFByb3AgPSBwcm9wQ29tcG9uZW50c1twcm9wQ29tcG9uZW50cy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgcGF5bG9hZFtjb21tZW50UHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCwgYXJ0aWNsZUlkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCBwb3N0IGNvbW1lbnQgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvY29tbWVudHNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1JFUExZX0NSRUFURSA9ICdSRVFVRVNUX1JFUExZX0NSRUFURSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX1JFUExZX0NSRUFURSA9ICdDT05GSVJNX1JFUExZX0NSRUFURSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfUkVQTFlfQ1JFQVRFID0gJ1JFSkVDVF9SRVBMWV9DUkVBVEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKFxuICBhcnRpY2xlSWQsXG4gIGNvbW1lbnRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9SRVBMWV9DUkVBVEUsXG4gICAgYXJ0aWNsZUlkLFxuICAgIGNvbW1lbnRJZFxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1DcmVhdGUgPSAoXG4gIHJlcGx5LFxuICBhcnRpY2xlSWQsXG4gIGNvbW1lbnRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9SRVBMWV9DUkVBVEUsXG4gICAgcmVwbHksXG4gICAgYXJ0aWNsZUlkLFxuICAgIGNvbW1lbnRJZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzLFxuICBhcnRpY2xlSWQsXG4gIGNvbW1lbnRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX1JFUExZX0NSRUFURSxcbiAgICBlcnJvcnMsXG4gICAgYXJ0aWNsZUlkLFxuICAgIGNvbW1lbnRJZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSZXBseSA9IChcbiAgZGF0YSxcbiAgYXJ0aWNsZUlkLFxuICBjb21tZW50SWQsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKGFydGljbGVJZCwgY29tbWVudElkKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2FydGljbGVzLyR7YXJ0aWNsZUlkfS9jb21tZW50cy8ke2NvbW1lbnRJZH0vcmVwbGllc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHJlcGx5OiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybUNyZWF0ZShqc29uLmRhdGEucmVwbHksIGFydGljbGVJZCwgY29tbWVudElkKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BDb21wb25lbnRzID0gcHJvcC5zcGxpdCgnLicpXG4gICAgICAgICAgICBjb25zdCByZXBseVByb3AgPSBwcm9wQ29tcG9uZW50c1twcm9wQ29tcG9uZW50cy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgcGF5bG9hZFtyZXBseVByb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQsIGFydGljbGVJZCwgY29tbWVudElkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCBwb3N0IGNvbW1lbnQgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcmVwbGllc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfU0VBUkNIX1JFU1VMVFMsIFJFQ0VJVkVfU0VBUkNIX1JFU1VMVFMsXG4gIFNFVF9TRUFSQ0hfUVVFUll9IGZyb20gJy4vc2VhcmNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHNlYXJjaCA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VhcmNoLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1NFQVJDSF9SRVNVTFRTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zXG4gICAgICB9KVxuICAgIGNhc2UgU0VUX1NFQVJDSF9RVUVSWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBxdWVyeTogYWN0aW9uLnF1ZXJ5XG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWFyY2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IGluZGV4IGZyb20gJy4vYWxnb2xpYVNlYXJjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU0VBUkNIX1JFU1VMVFMgPSAnUkVRVUVTVF9TRUFSQ0hfUkVTVUxUUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTID0gJ1JFQ0VJVkVfU0VBUkNIX1JFU1VMVFMnXG5leHBvcnQgY29uc3QgU0VUX1NFQVJDSF9RVUVSWSA9ICdTRVRfU0VBUkNIX1FVRVJZJ1xuXG5leHBvcnQgY29uc3Qgc2V0U2VhcmNoUXVlcnkgPSAoXG4gIHFcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9TRUFSQ0hfUVVFUlksXG4gICAgcXVlcnk6IHFcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0U2VhcmNoUmVzdWx0cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1NFQVJDSF9SRVNVTFRTXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVNlYXJjaFJlc3VsdHMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoUmVzdWx0cyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2VhcmNoUmVzdWx0cygpKVxuXG4gICAgcmV0dXJuIGluZGV4LnNlYXJjaChnZXRTdGF0ZSgpLnNlYXJjaC5xdWVyeSwgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgZGlzcGF0Y2gocmVjZWl2ZVNlYXJjaFJlc3VsdHMoY29udGVudC5oaXRzKSlcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VhcmNoQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gnXG5cbmNvbnN0IGNsaWVudCA9IGFsZ29saWFzZWFyY2goJzc0UzFKTkIxWlQnLCAnM2RlNmZkYmFmYzQ3N2NmMDE5NjczYmI4MTA0M2FlMGQnKVxuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdwYWdlcycpXG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYWxnb2xpYVNlYXJjaC5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9VUERBVEVfVVNFUiwgQ09ORklSTV9VUERBVEVfVVNFUiwgUkVKRUNUX1VQREFURV9VU0VSfSBmcm9tICcuL3VzZXJzQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHVzZXIgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnVzZXIsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUudXNlcilcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3VzZXJzUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEVfVVNFUiA9ICdSRVFVRVNUX1VQREFURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fVVBEQVRFX1VTRVIgPSAnQ09ORklSTV9VUERBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBSRUpFQ1RfVVBEQVRFX1VTRVIgPSAnUkVKRUNUX1VQREFURV9VU0VSJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtVXBkYXRlID0gKFxuICBpZCxcbiAgdXBkYXRlZEl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1VTRVIsXG4gICAgaWQsXG4gICAgdXBkYXRlZEl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RVcGRhdGUgPSAoXG4gIGlkLFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9VUERBVEVfVVNFUixcbiAgICBpZCxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IChcbiAgaWQsXG4gIGRhdGEsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKGlkKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L3VzZXJzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VyOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybVVwZGF0ZShpZCwganNvbi5kYXRhLnVzZXIpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnWW91ciBhY2NvdW50IGluZm9ybWF0aW9uIGhhcyBiZWVuIHVwZGF0ZWQnLCAnbG9nJykpXG4gICAgICAgICAgaWYgKGJhY2tsaW5rKSB7XG4gICAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKGJhY2tsaW5rKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RVcGRhdGUoaWQsIHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHVwZGF0ZSB1c2VyIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdXNlcnNBY3Rpb25zLmpzeFxuICoqLyIsImltcG9ydCB7UkVRVUVTVF9TRUNUSU9OUywgUkVDRUlWRV9TRUNUSU9OU30gZnJvbSAnLi9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzZWN0aW9ucyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VjdGlvbnMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXNcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlY3Rpb25zXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VjdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NFQ1RJT05TID0gJ1JFUVVFU1RfU0VDVElPTlMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9TRUNUSU9OUyA9ICdSRUNFSVZFX1NFQ1RJT05TJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdFNlY3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfU0VDVElPTlNcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlU2VjdGlvbnMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1NFQ1RJT05TLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VjdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFNlY3Rpb25zKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9zZWN0aW9ucy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVTZWN0aW9ucyhqc29uLmRhdGEuaXRlbXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlY3Rpb25zQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCB7U0VUX0JSRUFLUE9JTlQsIFRPR0dMRV9NQUlOX01FTlV9IGZyb20gJy4vdWlBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgdWkgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnVpLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQlJFQUtQT0lOVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB3aW5kb3dXaWR0aDogYWN0aW9uLndpZHRoLFxuICAgICAgICBsYXlvdXQ6IGFjdGlvbi5sYXlvdXRcbiAgICAgIH0pXG4gICAgY2FzZSBUT0dHTEVfTUFJTl9NRU5VOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1haW5NZW51SXNPcGVuOiAhc3RhdGUubWFpbk1lbnVJc09wZW5cbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdWlSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBTRVRfQlJFQUtQT0lOVCA9ICdTRVRfQlJFQUtQT0lOVCdcbmV4cG9ydCBjb25zdCBUT0dHTEVfTUFJTl9NRU5VID0gJ1RPR0dMRV9NQUlOX01FTlUnXG5cbmV4cG9ydCBjb25zdCBzZXRCcmVha3BvaW50ID0gKFxuICB3aWR0aCxcbiAgbGF5b3V0XG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfQlJFQUtQT0lOVCxcbiAgICB3aWR0aCxcbiAgICBsYXlvdXRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdG9nZ2xlTWFpbk1lbnUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVE9HR0xFX01BSU5fTUVOVVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdWlBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtsb2dpbldpdGhUb2tlbn0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5pbXBvcnQge2ZldGNoQXJ0aWNsZXN9IGZyb20gJy4uLy4uL3N0b3JlL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IHtmZXRjaFNlY3Rpb25zfSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQge3NldEJyZWFrcG9pbnR9IGZyb20gJy4uLy4uL3N0b3JlL3VpQWN0aW9ucydcblxuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbidcbmltcG9ydCBBcHAgZnJvbSAnLi4vQXBwJ1xuXG5jbGFzcyBBcHBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuaGFuZGxlUmVzaXplID0gdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlUmVzaXplICgpIHtcbiAgICBjb25zdCB7c2V0QnJlYWtwb2ludH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgd2luZG93V2lkdGggPSB3aW5kb3cub3V0ZXJXaWR0aFxuXG4gICAgbGV0IGxheW91dCA9ICdzJ1xuICAgIGlmICh3aW5kb3dXaWR0aCA+PSA3MDAgJiYgd2luZG93V2lkdGggPCAxMDAwKSB7XG4gICAgICBsYXlvdXQgPSAnbSdcbiAgICB9IGVsc2UgaWYgKHdpbmRvd1dpZHRoID49IDEwMDAgJiYgd2luZG93V2lkdGggPCAxMzAwKSB7XG4gICAgICBsYXlvdXQgPSAnbCdcbiAgICB9IGVsc2UgaWYgKHdpbmRvd1dpZHRoID49IDEzMDApIHtcbiAgICAgIGxheW91dCA9ICd4bCdcbiAgICB9XG5cbiAgICBzZXRCcmVha3BvaW50KHdpbmRvd1dpZHRoLCBsYXlvdXQpXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHRoaXMucHJvcHMuYXR0ZW1wdFRva2VuKHRva2VuKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSgpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7dXNlciwgZmV0Y2hTZWN0aW9ucywgZmV0Y2hBcnRpY2xlc30gPSBuZXdQcm9wc1xuXG4gICAgaWYgKHVzZXIgJiYgIXRoaXMucHJvcHMudXNlcikge1xuICAgICAgZmV0Y2hTZWN0aW9ucygpXG4gICAgICBmZXRjaEFydGljbGVzKClcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc0F1dGhvcml6aW5nLCBpc0ZldGNoaW5nLCB1c2VyLCB3aW5kb3dXaWR0aCwgd2lkdGhUaHJlc2hvbGQsIGNoaWxkcmVuLCBsb2NhdGlvbiwgcGFyYW1zfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChpc0F1dGhvcml6aW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gPEFwcCB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgd2lkdGg9e3dpbmRvd1dpZHRofVxuICAgICAgICAgICAgd2lkdGhUaHJlc2hvbGQ9e3dpZHRoVGhyZXNob2xkfVxuICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufVxuICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XG4gICAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8TG9naW4gLz5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB3aW5kb3dXaWR0aDogc3RhdGUudWkud2luZG93V2lkdGgsXG4gICAgICB3aWR0aFRocmVzaG9sZDogc3RhdGUudWkud2lkdGhUaHJlc2hvbGQsXG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5hcnRpY2xlcy5pc0ZldGNoaW5nIHx8IHN0YXRlLnNlY3Rpb25zLmlzRmV0Y2hpbmcsXG4gICAgICBpc0F1dGhvcml6aW5nOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmcsXG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXJcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2V0QnJlYWtwb2ludDogKHdpZHRoLCBsYXlvdXQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0QnJlYWtwb2ludCh3aWR0aCwgbGF5b3V0KSlcbiAgICAgIH0sXG4gICAgICBhdHRlbXB0VG9rZW46ICh0b2tlbikgPT4ge1xuICAgICAgICBkaXNwYXRjaChsb2dpbldpdGhUb2tlbih0b2tlbikpXG4gICAgICB9LFxuICAgICAgZmV0Y2hBcnRpY2xlczogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEFydGljbGVzKCkpXG4gICAgICB9LFxuICAgICAgZmV0Y2hTZWN0aW9uczogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNlY3Rpb25zKCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKEFwcENvbnRhaW5lcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FwcENvbnRhaW5lci9BcHBDb250YWluZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9hZGluZy5jc3MnXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTG9hZGluZ30+XG4gICAgICA8U3Bpbm5lciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMb2FkaW5nXCI6XCJMb2FkaW5nX19Mb2FkaW5nX19fM3B5Y3pcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0J1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4vQnJlYWRjcnVtYnMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IExpbmtCdXR0b24gZnJvbSAnLi9MaW5rQnV0dG9uJ1xuaW1wb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9IGZyb20gJy4vTW9kYWxXaW5kb3cnXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9UZXh0QXJlYSdcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi9UZXh0SW5wdXQnXG5cbmV4cG9ydCB7TGlua0J1dHRvbiwgU3Bpbm5lciwgQnV0dG9uLCBMaW5rLCBUZXh0SW5wdXQsIFRleHRBcmVhLCBCcmVhZGNydW1icywgQWxlcnQsXG4gIE1vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3Rlcn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1VJLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWxlcnQuY3NzJ1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgQWxlcnQgPSAoe1xuICBtZXNzYWdlLFxuICB0aGVtZSA9ICdkZWZhdWx0JyxcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDEsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgY29uc3QgbWVzc2FnZUNsYXNzTmFtZXMgPSBbc3R5bGVzLkFsZXJ0X19tZXNzYWdlXVxuXG4gIHN3aXRjaCAodGhlbWUpIHtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWVzLnB1c2goc3R5bGVzLkFsZXJ0X19tZXNzYWdlX2RlZmF1bHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWxlcnR9PlxuICAgICAge21lc3NhZ2VcbiAgICAgICAgPyA8QmxvY2s+XG4gICAgICAgICAgPGRpdiBzdHlsZT17bWVzc2FnZVN0eWxlfSBjbGFzc05hbWU9e21lc3NhZ2VDbGFzc05hbWVzLmpvaW4oJyAnKX0+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBbGVydFwiOlwiQWxlcnRfX0FsZXJ0X19fMzdfUUNcIixcIkFsZXJ0X19tZXNzYWdlXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfX18yd0NaRlwiLFwiQWxlcnRfX21lc3NhZ2VfZGVmYXVsdFwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX2RlZmF1bHRfX19uX1I5Q1wiLFwiQWxlcnRfX21lc3NhZ2VfZXJyb3JcIjpcIkFsZXJ0X19BbGVydF9fbWVzc2FnZV9lcnJvcl9fXzJpZDRXXCIsXCJhbGVydC1lbnRlclwiOlwiQWxlcnRfX2FsZXJ0LWVudGVyX19fSzZKZExcIixcImFsZXJ0LWVudGVyLWFjdGl2ZVwiOlwiQWxlcnRfX2FsZXJ0LWVudGVyLWFjdGl2ZV9fXzN2bEN3XCIsXCJhbGVydC1sZWF2ZVwiOlwiQWxlcnRfX2FsZXJ0LWxlYXZlX19fMlBwWVRcIixcImFsZXJ0LWxlYXZlLWFjdGl2ZVwiOlwiQWxlcnRfX2FsZXJ0LWxlYXZlLWFjdGl2ZV9fXzJoYV9RXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBCbG9jayBmcm9tICcuL0Jsb2NrJ1xuaW1wb3J0IEZsZXggZnJvbSAnLi9GbGV4J1xuaW1wb3J0IHtHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi9HcmlkJ1xuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi9MaXN0J1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi9MaXN0SW5saW5lJ1xuaW1wb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX0gZnJvbSAnLi9NZWRpYSdcbmltcG9ydCB7UGFnZSwgUGFnZUNvbnRlbnR9IGZyb20gJy4vUGFnZSdcbmltcG9ydCBXcmFwIGZyb20gJy4vV3JhcCdcbmltcG9ydCBJbnB1dERlY29yYXRvciBmcm9tICcuL0lucHV0RGVjb3JhdG9yJ1xuaW1wb3J0IExhYmVsZWRJbnB1dCBmcm9tICcuL0xhYmVsZWRJbnB1dCdcblxuZXhwb3J0IHtCbG9jaywgRmxleCwgV3JhcCwgR3JpZCwgR3JpZEl0ZW0sXG4gIExpc3QsIExpc3RJdGVtLCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSxcbiAgTWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmUsXG4gIFBhZ2UsIFBhZ2VDb250ZW50LCBJbnB1dERlY29yYXRvciwgTGFiZWxlZElucHV0fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYXlvdXRzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IEJsb2NrID0gKHtcbiAgbiA9IDEsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0Jsb2NrL0Jsb2NrLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgRmxleCA9ICh7XG4gIGp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBmbGV4RGlyZWN0aW9uID0gJ3JvdycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsZXhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvRmxleC9GbGV4LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dyaWQuY3NzJ1xuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBHcmlkID0gKHtcbiAgZ3V0dGVyQm90dG9tID0gMyxcbiAgYWxpZ25JdGVtcyA9ICdzdHJldGNoJyxcbiAganVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYmV0d2VlbicsXG4gIGFsaWduQ29udGVudCA9ICdzcGFjZS1iZXR3ZWVuJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBhbGlnbkNvbnRlbnQsXG4gICAgbWFyZ2luQm90dG9tOiBgLSR7Z3V0dGVyQm90dG9tICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuR3JpZH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgR3JpZEl0ZW0gPSAoe1xuICBzcGFuID0gMCxcbiAgb3V0T2YgPSAxMixcbiAgZ3V0dGVyID0gMyxcbiAgZ3V0dGVyQm90dG9tID0gMyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgbGV0IHN0eWxlID0ge1xuICAgIGZsZXg6ICcxJyxcbiAgICBtYXJnaW5Cb3R0b206IGAke2d1dHRlckJvdHRvbSAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIGlmIChzcGFuICYmIG91dE9mKSB7XG4gICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwge1xuICAgICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICAgIHdpZHRoOiBzcGFuID09PSBvdXRPZiA/ICcxMDAlJyA6IGAkezEwMCAqIHNwYW4gLyBvdXRPZiAtIGd1dHRlcn0lYFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5HcmlkSXRlbX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtHcmlkLCBHcmlkSXRlbX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvR3JpZC9HcmlkLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkdyaWRcIjpcIkdyaWRfX0dyaWRfX18yN3FQblwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0LmNzcydcblxuY29uc3QgTGlzdCA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdH0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKVxufVxuXG5jb25zdCBMaXN0SXRlbSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0X19pdGVtfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCB7TGlzdCwgTGlzdEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaXN0XCI6XCJMaXN0X19saXN0X19fMmtCVWRcIixcImxpc3RfX2l0ZW1cIjpcIkxpc3RfX2xpc3RfX2l0ZW1fX18xRDJWRlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNjE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0SW5saW5lLmNzcydcblxuY29uc3QgTGlzdElubGluZSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW4sXG4gIGFsaWduSXRlbXMgPSAnY2VudGVyJyxcbiAganVzdGZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0J1xufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAtJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0ZnlDb250ZW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdElubGluZUl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdElubGluZV9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdElubGluZVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9fXzNHamh1XCIsXCJsaXN0SW5saW5lX19pdGVtXCI6XCJMaXN0SW5saW5lX19saXN0SW5saW5lX19pdGVtX19fMksxa1FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVkaWEuY3NzJ1xuXG5jb25zdCBNZWRpYSA9ICh7XG4gIGFsaWduSXRlbXMgPSAnZmxleC1zdGFydCcsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGFsaWduSXRlbXNcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNZWRpYUJvZHkgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFfX2JvZHl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhRmlndXJlID0gKHtcbiAgbiA9IDEsXG4gIG5sID0gMCxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbmx9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMubWVkaWFfX2ZpZ3VyZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWVkaWFcIjpcIk1lZGlhX19tZWRpYV9fXzNhMDBHXCIsXCJtZWRpYV9fZmlndXJlXCI6XCJNZWRpYV9fbWVkaWFfX2ZpZ3VyZV9fXzI0WndBXCIsXCJtZWRpYV9fYm9keVwiOlwiTWVkaWFfX21lZGlhX19ib2R5X19fM1ZkMi1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBhZ2UgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXg6ICcxJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXcmFwID0gKHtcbiAgd2lkdGggPSAnOTUlJyxcbiAgbWF4V2lkdGggPSAnODByZW0nLCAvLyAxMjgwcHggcHJvdmlkZWQgMWVtID09PSAxNnB4XG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB3aWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0RGVjb3JhdG9yLmNzcydcblxuY29uc3QgSW5wdXREZWNvcmF0b3IgPSAoe1xuICBpbnB1dCxcbiAgc3VmZml4LFxuICBwcmVmaXggPSBudWxsXG59KSA9PiB7XG4gIGxldCBwcmVmaXhFbCA9IG51bGxcbiAgaWYgKHByZWZpeCkge1xuICAgIHByZWZpeEVsID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dERlY29yYXRvcl9fcHJlZml4fT57cHJlZml4fTwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dERlY29yYXRvcn0+XG4gICAgICB7cHJlZml4RWx9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXREZWNvcmF0b3JfX2lucHV0fT5cbiAgICAgICAge2lucHV0fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXREZWNvcmF0b3JfX3N1ZmZpeH0+XG4gICAgICAgIHtzdWZmaXh9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dERlY29yYXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9JbnB1dERlY29yYXRvci9JbnB1dERlY29yYXRvci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dERlY29yYXRvclwiOlwiSW5wdXREZWNvcmF0b3JfX0lucHV0RGVjb3JhdG9yX19fOG9DVm1cIixcIklucHV0RGVjb3JhdG9yX19wcmVmaXhcIjpcIklucHV0RGVjb3JhdG9yX19JbnB1dERlY29yYXRvcl9fcHJlZml4X19fM21GdkhcIixcIklucHV0RGVjb3JhdG9yX19pbnB1dFwiOlwiSW5wdXREZWNvcmF0b3JfX0lucHV0RGVjb3JhdG9yX19pbnB1dF9fX3ZuWnd2XCIsXCJJbnB1dERlY29yYXRvcl9fc3VmZml4XCI6XCJJbnB1dERlY29yYXRvcl9fSW5wdXREZWNvcmF0b3JfX3N1ZmZpeF9fXzNFY0txXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGFiZWxlZElucHV0LmNzcydcblxuaW1wb3J0IEZsZXggZnJvbSAnLi4vRmxleCdcblxuY29uc3QgTGFiZWxlZElucHV0ID0gKHtcbiAgaW5wdXQsXG4gIGxhYmVsLFxuICBlcnJvciA9IGZhbHNlLFxuICBpbnZlcnNlID0gZmFsc2Vcbn0pID0+IHtcbiAgbGV0IGNsYXNzZXMgPSBbc3R5bGVzLkxhYmVsZWRJbnB1dF1cbiAgaWYgKGludmVyc2UpIHtcbiAgICBjbGFzc2VzLnB1c2goc3R5bGVzLkxhYmVsZWRJbnB1dF9pbnZlcnNlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmpvaW4oJyAnKX1gfT5cbiAgICAgIDxGbGV4XG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5MYWJlbGVkSW5wdXRfX2xhYmVsfT57bGFiZWx9PC9kaXY+XG5cbiAgICAgICAge2Vycm9yXG4gICAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxhYmVsZWRJbnB1dF9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cbiAgICAgIDwvRmxleD5cblxuICAgICAge2lucHV0fVxuICAgIDwvbGFiZWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiZWxlZElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xhYmVsZWRJbnB1dC9MYWJlbGVkSW5wdXQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTGFiZWxlZElucHV0XCI6XCJMYWJlbGVkSW5wdXRfX0xhYmVsZWRJbnB1dF9fXzNfbDJSXCIsXCJMYWJlbGVkSW5wdXRfX2xhYmVsXCI6XCJMYWJlbGVkSW5wdXRfX0xhYmVsZWRJbnB1dF9fbGFiZWxfX18yX2U5c1wiLFwiTGFiZWxlZElucHV0X19lcnJvclwiOlwiTGFiZWxlZElucHV0X19MYWJlbGVkSW5wdXRfX2Vycm9yX19fMUdXb1FcIixcIkxhYmVsZWRJbnB1dF9pbnZlcnNlXCI6XCJMYWJlbGVkSW5wdXRfX0xhYmVsZWRJbnB1dF9pbnZlcnNlX19fNThVNFJcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGFiZWxlZElucHV0L0xhYmVsZWRJbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnJlYWRjcnVtYnMuY3NzJ1xuXG5jb25zdCBCcmVhZGNydW1icyA9ICh7XG4gIGl0ZW1zXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CcmVhZGNydW1ic30+XG4gICAgICB7aXRlbXMubWFwKGkgPT5cbiAgICAgICAgPExpbmsgdG89e2kucGF0aH0gY2xhc3NOYW1lPXtzdHlsZXMuQnJlYWRjcnVtYnNfX2l0ZW19PntpLmxhYmVsfTwvTGluaz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0JyZWFkY3J1bWJzL0JyZWFkY3J1bWJzLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJyZWFkY3J1bWJzXCI6XCJCcmVhZGNydW1ic19fQnJlYWRjcnVtYnNfX18yV0xqMFwiLFwiQnJlYWRjcnVtYnNfX2l0ZW1cIjpcIkJyZWFkY3J1bWJzX19CcmVhZGNydW1ic19faXRlbV9fXzFEYXlJXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLmNzcydcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sXG4gIG9uQ2xpY2ssXG4gIHRvID0gbnVsbCxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgdGhlbWUgPSAnYWNjZW50MScsXG4gIGhhc1ByZWZpeCA9IGZhbHNlLFxuICBoYXNTdWZmaXggPSBmYWxzZVxufSkgPT4ge1xuICBpZiAodG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuQnV0dG9ufVxuICAgICAgICAke3RoZW1lID09PSAnYWNjZW50MScgPyBzdHlsZXMuQnV0dG9uX2FjY2VudDEgOiBudWxsfVxuICAgICAgICAke3RoZW1lID09PSAnYWNjZW50MicgPyBzdHlsZXMuQnV0dG9uX2FjY2VudDIgOiBudWxsfVxuICAgICAgICAke2hhc1ByZWZpeCA/IHN0eWxlcy5CdXR0b25faGFzUHJlZml4IDogbnVsbH1cbiAgICAgICAgJHtoYXNTdWZmaXggPyBzdHlsZXMuQnV0dG9uX2hhc1N1ZmZpeCA6IG51bGx9YH1cbiAgICAgICAgdG89e3RvfT57Y2hpbGRyZW59PC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5CdXR0b259XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQxJyA/IHN0eWxlcy5CdXR0b25fYWNjZW50MSA6IG51bGx9XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQyJyA/IHN0eWxlcy5CdXR0b25fYWNjZW50MiA6IG51bGx9XG4gICAgICAgICR7aGFzUHJlZml4ID8gc3R5bGVzLkJ1dHRvbl9oYXNQcmVmaXggOiBudWxsfVxuICAgICAgICAke2hhc1N1ZmZpeCA/IHN0eWxlcy5CdXR0b25faGFzU3VmZml4IDogbnVsbH1gfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJ1dHRvblwiOlwiQnV0dG9uX19CdXR0b25fX19RSTdiMlwiLFwiQnV0dG9uX2FjY2VudDFcIjpcIkJ1dHRvbl9fQnV0dG9uX2FjY2VudDFfX18xZGZod1wiLFwiQnV0dG9uX2FjY2VudDJcIjpcIkJ1dHRvbl9fQnV0dG9uX2FjY2VudDJfX19abjh6OVwiLFwiQnV0dG9uX2hhc1ByZWZpeFwiOlwiQnV0dG9uX19CdXR0b25faGFzUHJlZml4X19faXpLWnFcIixcIkJ1dHRvbV9oYXNTdWZmaXhcIjpcIkJ1dHRvbl9fQnV0dG9tX2hhc1N1ZmZpeF9fX0hXWGxhXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaW5rQnV0dG9uLmNzcydcblxuY29uc3QgTGlua0J1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrLFxuICB0byA9IG51bGwsXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIHRoZW1lID0gJ2FjY2VudDEnXG59KSA9PiB7XG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5MaW5rQnV0dG9ufVxuICAgICAgICAke3RoZW1lID09PSAnYWNjZW50MScgPyBzdHlsZXMuTGlua0J1dHRvbl9hY2NlbnQxIDogbnVsbH1cbiAgICAgICAgJHt0aGVtZSA9PT0gJ2FjY2VudDInID8gc3R5bGVzLkxpbmtCdXR0b25fYWNjZW50MiA6IG51bGx9YH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICB0bz17dG99PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkxpbmtCdXR0b259XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQxJyA/IHN0eWxlcy5MaW5rQnV0dG9uX2FjY2VudDEgOiBudWxsfVxuICAgICAgICAke3RoZW1lID09PSAnYWNjZW50MicgPyBzdHlsZXMuTGlua0J1dHRvbl9hY2NlbnQyIDogbnVsbH1gfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua0J1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvTGlua0J1dHRvbi9MaW5rQnV0dG9uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxpbmtCdXR0b25cIjpcIkxpbmtCdXR0b25fX0xpbmtCdXR0b25fX18yRmxpbVwiLFwiTGlua0J1dHRvbl9hY2NlbnQxXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX2FjY2VudDFfX18ybGMxVFwiLFwiTGlua0J1dHRvbl9hY2NlbnQyXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX2FjY2VudDJfX18xemZ3T1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTGlua0J1dHRvbi9MaW5rQnV0dG9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9kYWxXaW5kb3cuY3NzJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi8uLi9MYXlvdXRzJ1xuXG5jb25zdCBNb2RhbFdpbmRvdyA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICB3aWR0aDogNDBcbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB3aWR0aDogYCR7bXVsdGlwbGllcnMud2lkdGggKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWx9PlxuICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgIDxzZWN0aW9uIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3d9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9GbGV4PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93SGVhZGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAyLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2hlYWRlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dCb2R5ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAzLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19ib2R5fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dGb290ZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDEsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19fZm9vdGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuXG5leHBvcnQge01vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3Rlcn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIk1vZGFsXCI6XCJNb2RhbFdpbmRvd19fTW9kYWxfX18ya2xjZ1wiLFwiTW9kYWxXaW5kb3dcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19fXzJ0VnlaXCIsXCJNb2RhbFdpbmRvd19faGVhZGVyXCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2hlYWRlcl9fXzFRcldIXCIsXCJNb2RhbFdpbmRvd19fYm9keVwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19ib2R5X19fM1F1UWhcIixcIk1vZGFsV2luZG93X19mb290ZXJcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19fZm9vdGVyX19fMkkwVEZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rIGFzIFJvdXRlckxpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmsuY3NzJ1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IExpbmsgPSAoe1xuICBjaGlsZHJlbixcbiAgc21hbGwsXG4gIHRvLFxuICBkaXNhYmxlZCxcbiAgb25DbGljayxcbiAgaHJlZixcbiAgdGhlbWUgPSAnYWNjZW50MSdcbn0pID0+IHtcbiAgbGV0IHN0eWxlID0ge1xuICAgIGZvbnRTaXplOiAnMXJlbSdcbiAgfVxuXG4gIGlmIChzbWFsbCkge1xuICAgIHN0eWxlID0ge1xuICAgICAgZm9udFNpemU6IGAkezEuMTY3ICogYmFzZWxpbmV9cmVtYFxuICAgIH1cbiAgfVxuXG4gIGxldCBjbGFzc05hbWUgPSBbXVxuICBjbGFzc05hbWUucHVzaChzdHlsZXMuTGluaylcbiAgc3dpdGNoICh0aGVtZSkge1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5MaW5rX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhY2NlbnQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBjbGFzc05hbWUucHVzaChzdHlsZXMuTGlua19hY2NlbnQpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIDxSb3V0ZXJMaW5rXG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZS5qb2luKCcgJyl9YH1cbiAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLkxpbmtfYWN0aXZlfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgdG89e3RvfT57Y2hpbGRyZW59PC9Sb3V0ZXJMaW5rPlxuICB9IGVsc2UgaWYgKG9uQ2xpY2spIHtcbiAgICByZXR1cm4gPGJ1dHRvblxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfWB9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiA8YVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lLmpvaW4oJyAnKX1gfT57Y2hpbGRyZW59PC9hPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0xpbmsvTGluay5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMaW5rXCI6XCJMaW5rX19MaW5rX19fM2lzZ1lcIixcIkxpbmtfYWNjZW50XCI6XCJMaW5rX19MaW5rX2FjY2VudF9fX0E4MUhIXCIsXCJMaW5rX2Vycm9yXCI6XCJMaW5rX19MaW5rX2Vycm9yX19fMmhLS2NcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0xpbmsvTGluay5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NwaW5uZXIuY3NzJ1xuXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJfX2lubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUyfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlM31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTR9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU1fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTd9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU4fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEwfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMn1gfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTcGlubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19fMWZpeWtcIixcIlNwaW5uZXJfX2lubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19pbm5lcl9fXzU4dmNUXCIsXCJTcGlubmVyX19jaXJjbGVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZV9fXzJadWdPXCIsXCJzay1jaXJjbGVGYWRlRGVsYXlcIjpcIlNwaW5uZXJfX3NrLWNpcmNsZUZhZGVEZWxheV9fXzFFdG44XCIsXCJTcGlubmVyX19jaXJjbGUxXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxX19fQk9EN25cIixcIlNwaW5uZXJfX2NpcmNsZTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTJfX18yYUJ0clwiLFwiU3Bpbm5lcl9fY2lyY2xlM1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlM19fXzFCYVpmXCIsXCJTcGlubmVyX19jaXJjbGU0XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU0X19fM1Y1cjdcIixcIlNwaW5uZXJfX2NpcmNsZTVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTVfX18zREo1WFwiLFwiU3Bpbm5lcl9fY2lyY2xlNlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNl9fX1pwVTVtXCIsXCJTcGlubmVyX19jaXJjbGU3XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU3X19fWHBuSzVcIixcIlNwaW5uZXJfX2NpcmNsZThcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZThfX18xX1JSWFwiLFwiU3Bpbm5lcl9fY2lyY2xlOVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOV9fX2ZPME9HXCIsXCJTcGlubmVyX19jaXJjbGUxMFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTBfX19uaTM1QVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTExX19fMWhhdjlcIixcIlNwaW5uZXJfX2NpcmNsZTEyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMl9fXzJpcHpUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2FuY2hvcm1lfSBmcm9tICdhbmNob3JtZS5qcydcbmltcG9ydCBzdHJpcHRhZ3MgZnJvbSAnc3RyaXB0YWdzJ1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJ1xuXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICcuLi9JbnB1dExhYmVsJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRBcmVhLmNzcydcblxuY29uc3QgcGxhaW5Ub0h0bWwgPSAodGV4dCkgPT4gYDxwPiR7YW5jaG9ybWUuanModGV4dC5yZXBsYWNlKC9cXG4vZywgJzxiciAvPicpKX08L3A+YFxuY29uc3QgaHRtbFRvUGxhaW4gPSAoaHRtbCkgPT4gc3RyaXB0YWdzKGh0bWwucmVwbGFjZSgvPGJyIFxcLz4vZywgJ1xcbicpKVxuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgb25DaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gcGxhaW5Ub0h0bWwodGhpcy5fZWxlbWVudC52YWx1ZSlcbiAgICBjb25zdCB7Y2hhbmdlQ2FsbGJhY2t9ID0gdGhpcy5wcm9wc1xuXG4gICAgY2hhbmdlQ2FsbGJhY2sodmFsdWUpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtlcnJvciwgdmFsdWUsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZCA9IGZhbHNlfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VGV4dGFyZWEgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICB2YWx1ZT17aHRtbFRvUGxhaW4odmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5UZXh0QXJlYX0gJHtlcnJvciA/IHN0eWxlcy5UZXh0QXJlYV9lcnJvciA6IG51bGx9YH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBtaW5Sb3dzPXs1fVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5wdXRMYWJlbC5jc3MnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi8uLi9MYXlvdXRzJ1xuXG5jb25zdCBJbnB1dExhYmVsID0gKHtcbiAgbGFiZWwsXG4gIGVycm9yXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5JbnB1dExhYmVsfSAke2Vycm9yID8gc3R5bGVzLklucHV0TGFiZWxfZXJyb3IgOiAnJ31gfT5cbiAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICB7bGFiZWxcbiAgICAgICAgPyA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dExhYmVsX19sYWJlbH0+e2xhYmVsfTwvZGl2PlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHtlcnJvclxuICAgICAgICA/IDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0TGFiZWxfX2Vycm9yfT57ZXJyb3J9PC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDogbnVsbFxuICAgICAgICB9XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRMYWJlbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvSW5wdXRMYWJlbC9JbnB1dExhYmVsLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIklucHV0TGFiZWxcIjpcIklucHV0TGFiZWxfX0lucHV0TGFiZWxfX18xQ2VtSVwiLFwiSW5wdXRMYWJlbF9fbGFiZWxcIjpcIklucHV0TGFiZWxfX0lucHV0TGFiZWxfX2xhYmVsX19fMll5X1BcIixcIklucHV0TGFiZWxfX2Vycm9yXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19lcnJvcl9fXzJNRk5kXCIsXCJJbnB1dExhYmVsX2Vycm9yXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX2Vycm9yX19fM0VwNXFcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRleHRBcmVhXCI6XCJUZXh0QXJlYV9fVGV4dEFyZWFfX18xOWlwN1wiLFwiVGV4dEFyZWFfZXJyb3JcIjpcIlRleHRBcmVhX19UZXh0QXJlYV9lcnJvcl9fXzFUdUF6XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9UZXh0QXJlYS9UZXh0QXJlYS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRJbnB1dC5jc3MnXG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgb25DaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZWxlbWVudC52YWx1ZVxuICAgIGNvbnN0IHtjaGFuZ2VDYWxsYmFja30gPSB0aGlzLnByb3BzXG5cbiAgICBjaGFuZ2VDYWxsYmFjayh2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZXJyb3IsXG4gICAgICB2YWx1ZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgaGFzUHJlZml4ID0gZmFsc2UsXG4gICAgICBoYXNTdWZmaXggPSBmYWxzZSxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBpbnZlcnNlID0gZmFsc2UsXG4gICAgICB0eXBlID0gJ3RleHQnXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXQgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLlRleHRJbnB1dH1cbiAgICAgICAgICAke2Vycm9yID8gc3R5bGVzLlRleHRJbnB1dF9lcnJvciA6IG51bGx9XG4gICAgICAgICAgJHtpbnZlcnNlID8gc3R5bGVzLlRleHRJbnB1dF9pbnZlcnNlIDogbnVsbH1cbiAgICAgICAgICAke2hhc1ByZWZpeCA/IHN0eWxlcy5UZXh0SW5wdXRfd2l0aFByZWZpeCA6IG51bGx9XG4gICAgICAgICAgJHtoYXNTdWZmaXggPyBzdHlsZXMuVGV4dElucHV0X3dpdGhTdWZmaXggOiBudWxsfWB9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRleHRJbnB1dFwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfX18xQUNHWVwiLFwiVGV4dElucHV0X2Vycm9yXCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF9lcnJvcl9fXzJmblJuXCIsXCJUZXh0SW5wdXRfaW52ZXJzZVwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfaW52ZXJzZV9fXzNBLXg4XCIsXCJUZXh0SW5wdXRfd2l0aFByZWZpeFwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfd2l0aFByZWZpeF9fXzItR3czXCIsXCJUZXh0SW5wdXRfd2l0aFN1ZmZpeFwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfd2l0aFN1ZmZpeF9fXzFaVE5RXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtGbGV4LCBMaXN0LCBMaXN0SXRlbSwgUGFnZSwgUGFnZUNvbnRlbnR9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge01vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3RlciwgVGV4dElucHV0LCBCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IEZsYXNoTWVzc2FnZSBmcm9tICcuLi9GbGFzaE1lc3NhZ2UnXG5pbXBvcnQge2xvZ2luV2l0aENyZWRlbnRpYWxzfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VFbWFpbCA9IHRoaXMuY2hhbmdlRW1haWwuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSB0aGlzLmNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbEVycm9yOiAnJyxcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfVxuICB9XG5cbiAgc3VibWl0Rm9ybSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCBlbWFpbEVycm9yID0gJydcbiAgICBsZXQgcGFzc3dvcmRFcnJvciA9ICcnXG5cbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgPT09ICcnKSB7XG4gICAgICBlbWFpbEVycm9yID0gJ2VtYWlsIGNhbm5vdCBiZSBlbXB0eSdcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCA9PT0gJycpIHtcbiAgICAgIHBhc3N3b3JkRXJyb3IgPSAncGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rJ1xuICAgIH1cblxuICAgIGlmICghZW1haWxFcnJvciAmJiAhcGFzc3dvcmRFcnJvcikge1xuICAgICAgZGlzcGF0Y2gobG9naW5XaXRoQ3JlZGVudGlhbHModGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlbWFpbEVycm9yLFxuICAgICAgICBwYXNzd29yZEVycm9yXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUVtYWlsICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZW1haWw6IHZhbHVlLFxuICAgICAgZW1haWxFcnJvcjogJydcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYXNzd29yZDogdmFsdWUsXG4gICAgICBwYXNzd29yZEVycm9yOiAnJ1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc0ZldGNoaW5nfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8UGFnZT5cbiAgICAgICAgPFBhZ2VDb250ZW50PlxuICAgICAgICAgIDxNb2RhbFdpbmRvdz5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19PlxuICAgICAgICAgICAgICA8TW9kYWxXaW5kb3dIZWFkZXI+XG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5Mb2dpbjwvRmxleD5cbiAgICAgICAgICAgICAgPC9Nb2RhbFdpbmRvd0hlYWRlcj5cblxuICAgICAgICAgICAgICA8TW9kYWxXaW5kb3dCb2R5PlxuICAgICAgICAgICAgICAgIDxMaXN0IG49ezEuNX0+XG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gbj17MS41fT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWw6XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gY2FzZXlAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lbWFpbEVycm9yfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXt0aGlzLmNoYW5nZUVtYWlsfSAvPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG49ezEuNX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkOlwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEJpZ1NlY3JldFwiXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUucGFzc3dvcmRFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17dGhpcy5jaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgIDwvTW9kYWxXaW5kb3dCb2R5PlxuXG4gICAgICAgICAgICAgIDxNb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNGZXRjaGluZ31cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTG9naW5cIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L01vZGFsV2luZG93Rm9vdGVyPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3c+XG4gICAgICAgIDwvUGFnZUNvbnRlbnQ+XG5cbiAgICAgICAgPEZsYXNoTWVzc2FnZSAvPlxuICAgICAgPC9QYWdlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLmF1dGguaXNGZXRjaGluZ1xuICAgIH1cbiAgfVxuKShMb2dpbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7QWxlcnR9IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBGbGFzaE1lc3NhZ2UgPSAoe1xuICBtZXNzYWdlLFxuICB0eXBlXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0IG1lc3NhZ2U9e21lc3NhZ2V9IHRoZW1lPXt0eXBlfSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogc3RhdGUuZmxhc2gubWVzc2FnZSxcbiAgICAgIHR5cGU6IHN0YXRlLmZsYXNoLnR5cGVcbiAgICB9XG4gIH1cbikoRmxhc2hNZXNzYWdlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRmxhc2hNZXNzYWdlL0ZsYXNoTWVzc2FnZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXInXG5pbXBvcnQgRmxhc2hNZXNzYWdlIGZyb20gJy4uL0ZsYXNoTWVzc2FnZSdcbmltcG9ydCBNYWluTmF2IGZyb20gJy4uL01haW5OYXYnXG5pbXBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBBcHAgPSAoe1xuICBjaGlsZHJlbixcbiAgbG9jYXRpb24sXG4gIHBhcmFtc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQYWdlPlxuICAgICAgPEhlYWRlciBsb2NhdGlvbj17bG9jYXRpb259IC8+XG4gICAgICA8TWFpbk5hdiBwYXJhbXM9e3BhcmFtc30gLz5cblxuICAgICAgPFBhZ2VDb250ZW50PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1BhZ2VDb250ZW50PlxuXG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgPC9QYWdlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIuY3NzJ1xuaW1wb3J0IHtGbGV4LCBNZWRpYSwgTWVkaWFGaWd1cmUsIE1lZGlhQm9keX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBMb2NhbGUgZnJvbSAnLi4vTG9jYWxlJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vTGF5b3V0cy9XcmFwcGVyJ1xuaW1wb3J0IHtHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi4vTGF5b3V0cy9HcmlkJ1xuaW1wb3J0IEN1cnJlbnRVc2VyIGZyb20gJy4uL0N1cnJlbnRVc2VyJ1xuXG5pbXBvcnQgaW1nIGZyb20gJy4vbG9nby5zdmcnXG5cbmNvbnN0IEhlYWRlciA9ICh7XG4gIGxvY2F0aW9uLFxuICBsYXlvdXRcbn0pID0+IHtcbiAgbGV0IGdyaWRTaXplID0gMFxuICBsZXQgc2l0ZW5hbWVTcGFuID0gMFxuICBsZXQgc2VhcmNoU3BhbiA9IDBcblxuICBzd2l0Y2ggKGxheW91dCkge1xuICAgIGNhc2UgJ3MnOlxuICAgIGNhc2UgJ20nOlxuICAgICAgZ3JpZFNpemUgPSAxXG4gICAgICBzaXRlbmFtZVNwYW4gPSAxXG4gICAgICBzZWFyY2hTcGFuID0gMVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdsJzpcbiAgICBjYXNlICd4bCc6XG4gICAgICBncmlkU2l6ZSA9IDNcbiAgICAgIHNpdGVuYW1lU3BhbiA9IDJcbiAgICAgIHNlYXJjaFNwYW4gPSAxXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGxheW91dCB0eXBlICR7bGF5b3V0fWApXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcn0+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIlxuICAgICAgICAgIGd1dHRlcj17MH1cbiAgICAgICAgICBndXR0ZXJCb3R0b209ezJ9PlxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgc3Bhbj17c2l0ZW5hbWVTcGFufVxuICAgICAgICAgICAgb3V0T2Y9e2dyaWRTaXplfVxuICAgICAgICAgICAgZ3V0dGVyPXswfVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsyfT5cbiAgICAgICAgICAgIDxDdXJyZW50VXNlciAvPlxuXG4gICAgICAgICAgICA8TWVkaWEgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgIDxNZWRpYUZpZ3VyZSBuPVwiMS41XCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX2xvZ299IC8+XG4gICAgICAgICAgICAgIDwvTWVkaWFGaWd1cmU+XG5cbiAgICAgICAgICAgICAgPE1lZGlhQm9keT5cbiAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX3RpdGxlfT5WYWNjaW5lIEFuc3dlcnM8L2gxPlxuICAgICAgICAgICAgICAgICAgPExvY2FsZSAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX19zdWJ0aXRsZX0+QSByZWxpYWJsZSBzb3VyY2Ugb2YgaW5mb3JtYXRpb24gYWJvdXQgdmFjY2luZXMgaW4gQ2FuYWRhPC9kaXY+XG4gICAgICAgICAgICAgIDwvTWVkaWFCb2R5PlxuICAgICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICBzcGFuPXtzZWFyY2hTcGFufVxuICAgICAgICAgICAgb3V0T2Y9e2dyaWRTaXplfVxuICAgICAgICAgICAgZ3V0dGVyPXswfVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsyfT5cblxuICAgICAgICAgICAgPFNlYXJjaEJhciBsb2NhdGlvbj17bG9jYXRpb259IC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0OiBzdGF0ZS51aS5sYXlvdXRcbiAgICB9XG4gIH1cbikoSGVhZGVyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3NldFNlYXJjaFF1ZXJ5fSBmcm9tICcuLi8uLi9zdG9yZS9zZWFyY2hBY3Rpb25zJ1xuaW1wb3J0IHtUZXh0SW5wdXQsIEJ1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQgSW5wdXREZWNvcmF0b3IgZnJvbSAnLi4vTGF5b3V0cy9JbnB1dERlY29yYXRvcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaEJhci5jc3MnXG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHF1ZXJ5OiB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgfVxuXG4gICAgdGhpcy5zZXRRdWVyeSA9IHRoaXMuc2V0UXVlcnkuYmluZCh0aGlzKVxuICAgIHRoaXMuZG9TZWFyY2ggPSB0aGlzLmRvU2VhcmNoLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge3F1ZXJ5fSA9IG5ld1Byb3BzXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHF1ZXJ5XG4gICAgfSlcbiAgfVxuXG4gIHNldFF1ZXJ5ICh2KSB7XG4gICAgY29uc3Qge3NldFNlYXJjaFF1ZXJ5fSA9IHRoaXMucHJvcHNcblxuICAgIHNldFNlYXJjaFF1ZXJ5KHYpXG4gIH1cblxuICBkb1NlYXJjaCAoKSB7XG4gICAgaGFzaEhpc3RvcnkucHVzaChgL3NlYXJjaD9xPSR7dGhpcy5zdGF0ZS5xdWVyeX1gKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2VhcmNofVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2hCYXJ9PlxuXG4gICAgICAgIDxJbnB1dERlY29yYXRvclxuICAgICAgICAgIGlucHV0PXtcbiAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVlcnl9XG4gICAgICAgICAgICAgIGhhc1N1ZmZpeFxuICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXt0aGlzLnNldFF1ZXJ5fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0aGUgd2Vic2l0ZVwiIC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIHN1ZmZpeD17XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGhhc1ByZWZpeFxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRvU2VhcmNofT5TZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgICB9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6IHN0YXRlLnNlYXJjaC5xdWVyeVxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBzZXRTZWFyY2hRdWVyeTogKHEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0U2VhcmNoUXVlcnkocSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFNlYXJjaEJhcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2VhcmNoQmFyXCI6XCJTZWFyY2hCYXJfX1NlYXJjaEJhcl9fX2R0ZFRoXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSGVhZGVyXCI6XCJIZWFkZXJfX0hlYWRlcl9fX29FMkZIXCIsXCJIZWFkZXJfX2xvZ29cIjpcIkhlYWRlcl9fSGVhZGVyX19sb2dvX19fMXJxVV9cIixcIkhlYWRlcl9fdGl0bGVcIjpcIkhlYWRlcl9fSGVhZGVyX190aXRsZV9fXzJ0aXhhXCIsXCJIZWFkZXJfX3N1YnRpdGxlXCI6XCJIZWFkZXJfX0hlYWRlcl9fc3VidGl0bGVfX19fWl9PQlwiLFwiSGVhZGVyX19zZWFyY2hcIjpcIkhlYWRlcl9fSGVhZGVyX19zZWFyY2hfX18xNktiTVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvY2FsZS5jc3MnXG5cbmNvbnN0IExvY2FsZSA9ICh7XG4gIGxvY2F0aW9uXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2NhbGV9Pk1hbml0b2JhPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2NhbGUvTG9jYWxlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxvY2FsZVwiOlwiTG9jYWxlX19Mb2NhbGVfX18xQ1RCcFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9jYWxlL0xvY2FsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgV3JhcHBlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtYXhXaWR0aCA9IDkwLFxuICB3aWR0aCA9IDkwXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHt3aWR0aH0lYCxcbiAgICBtYXhXaWR0aDogYCR7bWF4V2lkdGh9cmVtYCxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwcGVyL1dyYXBwZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0N1cnJlbnRVc2VyLmNzcydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4uL1VJL0xpbmtCdXR0b24nXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0xpc3RJbmxpbmUnXG5cbmNvbnN0IEN1cnJlbnRVc2VyID0gKHtcbiAgdXNlcixcbiAgbG9nT3V0XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DdXJyZW50VXNlcn0+XG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3VycmVudFVzZXJfX25hbWV9PmxvZ2dlZCBpbiBhcyB7dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8TGlua0J1dHRvbiB0aGVtZT1cImFjY2VudDJcIiBvbkNsaWNrPXtsb2dPdXR9PkxvZyBvdXQ8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXJcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nT3V0OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShDdXJyZW50VXNlcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1cnJlbnRVc2VyL0N1cnJlbnRVc2VyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkN1cnJlbnRVc2VyXCI6XCJDdXJyZW50VXNlcl9fQ3VycmVudFVzZXJfX18xV2FVNlwiLFwiQ3VycmVudFVzZXJfX25hbWVcIjpcIkN1cnJlbnRVc2VyX19DdXJyZW50VXNlcl9fbmFtZV9fXzEyaElaXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9DdXJyZW50VXNlci9DdXJyZW50VXNlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sb2dvLjk2YTYxMTc2ZGI1NGUyMjc0MjM2MjY3OTk3NDQyMDFlLnN2Z1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvbG9nby5zdmdcbiAqKiBtb2R1bGUgaWQgPSA2NjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIuY3NzJ1xuaW1wb3J0IEJveCBmcm9tICcuLi9MYXlvdXRzL0JveCdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcbmltcG9ydCBGbGV4IGZyb20gJy4uL0xheW91dHMvRmxleCdcbmltcG9ydCBMaXN0T2ZBcnRpY2xlcyBmcm9tICcuLi9MaXN0T2ZBcnRpY2xlcydcblxuY29uc3QgRm9vdGVyID0gKHtcbiAgYXJ0aWNsZXNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlcn0+XG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPEJveCBuPXsyfT5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyX190ZXh0fT5WYWNjaW5lIEFuc3dlcnMgJiMxNjk7IDIwMTc8L2Rpdj5cblxuICAgICAgICAgICAgPExpc3RPZkFydGljbGVzXG4gICAgICAgICAgICAgIG49ezEuNX1cbiAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICBhcnRpY2xlcz17YXJ0aWNsZXN9XG4gICAgICAgICAgICAgIGxheW91dD1cImlubGluZVwiIC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgY29uc3QgZm9vdGVyU2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLmN1c3RvbUlkID09PSAnZm9vdGVyLW5hdicpXG4gICAgY29uc3QgZm9vdGVyQXJ0aWNsZXMgPSBmb290ZXJTZWN0aW9uLmFydGljbGVzLm1hcChhID0+IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbmQoYXJ0ID0+IGFydC5faWQgPT09IGEpKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFydGljbGVzOiBmb290ZXJBcnRpY2xlc1xuICAgIH1cbiAgfVxuKShGb290ZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkZvb3RlclwiOlwiRm9vdGVyX19Gb290ZXJfX18yNjhQVFwiLFwiRm9vdGVyX190ZXh0XCI6XCJGb290ZXJfX0Zvb3Rlcl9fdGV4dF9fX2Mwem1EXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IEJveCA9ICh7XG4gIG4gPSAxLFxuICBuaCA9IDAsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmdUb3A6IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIHBhZGRpbmdCb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIHBhZGRpbmdMZWZ0OiBgJHtiYXNlbGluZSAqIG5ofXJlbWAsXG4gICAgcGFkZGluZ1JpZ2h0OiBgJHtiYXNlbGluZSAqIG5ofXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJveFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9Cb3gvQm94LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBMaW5rIGZyb20gJy4uL1R5cG9ncmFwaHkvTGluaydcbmltcG9ydCBIZWFkaW5nMiBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcyJ1xuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cy9MaXN0J1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cy9MaXN0SW5saW5lJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdE9mQXJ0aWNsZXMuY3NzJ1xuXG5jb25zdCBMaXN0T2ZBcnRpY2xlcyA9ICh7XG4gIGFydGljbGVFbnRyaWVzLFxuICBsYXlvdXQgPSAnc3RhY2tlZCcsXG4gIGludmVyc2UgPSBmYWxzZSxcbiAgbiA9IDEuMjUsXG4gIHNtYWxsID0gZmFsc2Vcbn0pID0+IHtcbiAgaWYgKGxheW91dCA9PT0gJ3N0YWNrZWQnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0IG49e259PlxuICAgICAgICB7YXJ0aWNsZUVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgZW50cnlFbCA9ICcnXG4gICAgICAgICAgaWYgKGVudHJ5LmFydGljbGUuYXJ0aWNsZVR5cGUgPT09ICdoZWFkaW5nJykge1xuICAgICAgICAgICAgZW50cnlFbCA9IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2luZGV4ID4gMCA/IHN0eWxlcy5IZWFkaW5nIDogJyd9PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nMj57ZW50cnkuYXJ0aWNsZS50aXRsZX08L0hlYWRpbmcyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2UgaWYgKGVudHJ5LmFydGljbGUuYXJ0aWNsZVR5cGUgPT09ICdhcnRpY2xlJykge1xuICAgICAgICAgICAgZW50cnlFbCA9IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBzbWFsbD17c21hbGx9XG4gICAgICAgICAgICAgICAgaW52ZXJzZT17aW52ZXJzZX1cbiAgICAgICAgICAgICAgICB0bz17ZW50cnkudXJsfT57ZW50cnkuYXJ0aWNsZS50aXRsZX08L0xpbms+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgYXJ0aWNsZSB0eXBlICR7ZW50cnkuYXJ0aWNsZS5hcnRpY2xlVHlwZX1gKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgbj17bn1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIHtlbnRyeUVsfVxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9MaXN0PlxuICAgIClcbiAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbmxpbmUnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SW5saW5lIG49e259PlxuICAgICAgICB7YXJ0aWNsZUVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgZW50cnlFbCA9ICcnXG4gICAgICAgICAgaWYgKGVudHJ5LmFydGljbGUuYXJ0aWNsZVR5cGUgPT09ICdoZWFkaW5nJykge1xuICAgICAgICAgICAgZW50cnlFbCA9IChcbiAgICAgICAgICAgICAgPEhlYWRpbmcyPntlbnRyeS5hcnRpY2xlLnRpdGxlfTwvSGVhZGluZzI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5hcnRpY2xlLmFydGljbGVUeXBlID09PSAnYXJ0aWNsZScpIHtcbiAgICAgICAgICAgIGVudHJ5RWwgPSAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgc21hbGw9e3NtYWxsfVxuICAgICAgICAgICAgICAgIGludmVyc2U9e2ludmVyc2V9XG4gICAgICAgICAgICAgICAgdG89e2VudHJ5LnVybH0+e2VudHJ5LmFydGljbGUudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGFydGljbGUgdHlwZSAke2VudHJ5LmFydGljbGUuYXJ0aWNsZVR5cGV9YClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIG49e259PlxuICAgICAgICAgICAgICB7ZW50cnlFbH1cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGxldCBhcnRpY2xlRW50cmllcyA9IFtdXG5cbiAgICBmb3IgKGxldCBhcnRpY2xlIG9mIG93blByb3BzLmFydGljbGVzKSB7XG4gICAgICBsZXQgcGFyZW50cyA9IFtdXG5cbiAgICAgIGxldCBjdXJyZW50UGFyZW50ID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuX2lkID09PSBhcnRpY2xlLnBhcmVudClcbiAgICAgIHdoaWxlIChjdXJyZW50UGFyZW50ICYmICFjdXJyZW50UGFyZW50Lm1ldGEpIHtcbiAgICAgICAgcGFyZW50cyA9IFtjdXJyZW50UGFyZW50LnVybCwgLi4ucGFyZW50c11cbiAgICAgICAgY3VycmVudFBhcmVudCA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLl9pZCA9PT0gY3VycmVudFBhcmVudC5wYXJlbnQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFydGljbGVVcmwgPSBgLyR7cGFyZW50cy5qb2luKCcvJyl9L2FydGljbGVzLyR7YXJ0aWNsZS51cmx9YFxuXG4gICAgICBhcnRpY2xlRW50cmllcy5wdXNoKHtcbiAgICAgICAgYXJ0aWNsZSxcbiAgICAgICAgdXJsOiBhcnRpY2xlVXJsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlRW50cmllc1xuICAgIH1cbiAgfVxuKShMaXN0T2ZBcnRpY2xlcylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xpc3RPZkFydGljbGVzL0xpc3RPZkFydGljbGVzLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGluayBhcyBSZWFjdExpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmsuY3NzJ1xuXG5jb25zdCBMaW5rID0gKHtcbiAgaHJlZixcbiAgdG8gPSBudWxsLFxuICBpbnZlcnNlID0gZmFsc2UsXG4gIHNtYWxsID0gZmFsc2UsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkxpbmt9XG4gICAgICAgICAgJHtpbnZlcnNlID8gc3R5bGVzLkxpbmtfaW52ZXJzZSA6ICcnfVxuICAgICAgICAgICR7c21hbGwgPyBzdHlsZXMuTGlua19zbWFsbCA6ICcnfWB9XG4gICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLkxpbmtfYWN0aXZlfVxuICAgICAgICB0bz17dG99XG4gICAgICAgID57Y2hpbGRyZW59PC9SZWFjdExpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5MaW5rfVxuICAgICAgICAgICR7aW52ZXJzZSA/IHN0eWxlcy5MaW5rX2ludmVyc2UgOiAnJ31cbiAgICAgICAgICAke3NtYWxsID8gc3R5bGVzLkxpbmtfc21hbGwgOiAnJ31gfVxuICAgICAgICBocmVmPXtocmVmfT57Y2hpbGRyZW59PC9hPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0xpbmsvTGluay5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMaW5rXCI6XCJMaW5rX19MaW5rX19fMWtNQmtcIixcIkxpbmtfYWN0aXZlXCI6XCJMaW5rX19MaW5rX2FjdGl2ZV9fXzN0YXUtXCIsXCJMaW5rX2ludmVyc2VcIjpcIkxpbmtfX0xpbmtfaW52ZXJzZV9fXzMySkE4XCIsXCJMaW5rX3NtYWxsXCI6XCJMaW5rX19MaW5rX3NtYWxsX19fMS1YdmhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvTGluay9MaW5rLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nMi5jc3MnXG5cbmNvbnN0IEhlYWRpbmcyID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRvID0gbnVsbCxcbiAgdW5kZXJsaW5lID0gZmFsc2Vcbn0pID0+IHtcbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmcyfVxuICAgICAgICAgICR7c3R5bGVzLkhlYWRpbmcyX2xpbmt9XG4gICAgICAgICAgJHt1bmRlcmxpbmUgPyBzdHlsZXMuSGVhZGluZzJfdW5kZXJsaW5lIDogJyd9YH1cbiAgICAgICAgdG89e3RvfT57Y2hpbGRyZW59PC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmcyfVxuICAgICAgICAke3VuZGVybGluZSA/IHN0eWxlcy5IZWFkaW5nMl91bmRlcmxpbmUgOiAnJ31gfT57Y2hpbGRyZW59PC9oMj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZzJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSGVhZGluZzJcIjpcIkhlYWRpbmcyX19IZWFkaW5nMl9fXzFsbUpLXCIsXCJIZWFkaW5nMl9saW5rXCI6XCJIZWFkaW5nMl9fSGVhZGluZzJfbGlua19fXzNfbi1MXCIsXCJIZWFkaW5nMl91bmRlcmxpbmVcIjpcIkhlYWRpbmcyX19IZWFkaW5nMl91bmRlcmxpbmVfX18yNFRqUFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMi9IZWFkaW5nMi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGluaywgaGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vVUkvU2VsZWN0J1xuaW1wb3J0IEZsZXggZnJvbSAnLi4vTGF5b3V0cy9GbGV4J1xuaW1wb3J0IEJveCBmcm9tICcuLi9MYXlvdXRzL0JveCdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01haW5OYXYuY3NzJ1xuXG5jbGFzcyBNYWluTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm5hdmlnYXRlID0gdGhpcy5uYXZpZ2F0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBuYXZpZ2F0ZSAodXJsKSB7XG4gICAgaGFzaEhpc3RvcnkucHVzaCh1cmwpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtwYXJhbXMsIGxheW91dCwgc2VjdGlvbnN9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGFTZWN0aW9uID0gc2VjdGlvbnMuZmluZChzID0+IHMubWV0YSAmJiBzLnVybCA9PT0gJ21haW4tbmF2JylcbiAgICBjb25zdCByb290U2VjdGlvbnMgPSBtZXRhU2VjdGlvbi5jaGlsZHJlbi5tYXAoYyA9PiBzZWN0aW9ucy5maW5kKHMgPT4gcy5faWQgPT09IGMpKVxuXG4gICAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBsZXQgZmxhdE5hdmlnYXRpb24gPSBbXVxuICAgICAgICBmb3IgKGxldCBzZWN0aW9uIG9mIHJvb3RTZWN0aW9ucykge1xuICAgICAgICAgIGlmIChzZWN0aW9uLnNlY3Rpb25UeXBlID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2VjdGlvbnMgPSBzZWN0aW9uLmNoaWxkcmVuLm1hcChjID0+IHNlY3Rpb25zLmZpbmQocyA9PiBzLl9pZCA9PT0gYykpXG5cbiAgICAgICAgICAgIGZvciAobGV0IHN1YnNlY3Rpb24gb2Ygc3Vic2VjdGlvbnMpIHtcbiAgICAgICAgICAgICAgZmxhdE5hdmlnYXRpb24ucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGAke3NlY3Rpb24udGl0bGV9IC8gJHtzdWJzZWN0aW9uLnRpdGxlfWAsXG4gICAgICAgICAgICAgICAgaWQ6IGAvJHtzZWN0aW9uLnVybH0vJHtzdWJzZWN0aW9uLnVybH1gXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZsYXROYXZpZ2F0aW9uLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogc2VjdGlvbi50aXRsZSxcbiAgICAgICAgICAgICAgaWQ6IGAvJHtzZWN0aW9uLnVybH1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgICA8Qm94IG49ezF9PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJhbXMuc3Vic2VjdGlvblVybFxuICAgICAgICAgICAgICAgICAgICA/IGAvJHtwYXJhbXMuc2VjdGlvblVybH0vJHtwYXJhbXMuc3Vic2VjdGlvblVybH1gXG4gICAgICAgICAgICAgICAgICAgIDogYC8ke3BhcmFtcy5zZWN0aW9uVXJsfWBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZsYXROYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VybCA9PiB7IHRoaXMubmF2aWdhdGUodXJsKSB9fSAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgY2FzZSAnbSc6XG4gICAgICBjYXNlICdsJzpcbiAgICAgIGNhc2UgJ3hsJzpcbiAgICAgICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSByb290U2VjdGlvbnMuZmluZChzID0+IHMudXJsID09PSBwYXJhbXMuc2VjdGlvblVybClcbiAgICAgICAgY29uc3QgY3VycmVudFN1YnNlY3Rpb25zID0gY3VycmVudFNlY3Rpb24gJiYgY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUgPT09ICdwYXJlbnQnXG4gICAgICAgICAgPyBjdXJyZW50U2VjdGlvbi5jaGlsZHJlbi5tYXAoYyA9PiBzZWN0aW9ucy5maW5kKHMgPT4gcy5faWQgPT09IGMpKVxuICAgICAgICAgIDogbnVsbFxuXG4gICAgICAgIGxldCBjdXJyZW50U3ViTmF2ID0gJydcbiAgICAgICAgaWYgKGN1cnJlbnRTdWJzZWN0aW9ucykge1xuICAgICAgICAgIGN1cnJlbnRTdWJOYXYgPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlN1Ym5hdmlnYXRpb259PlxuICAgICAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50U3Vic2VjdGlvbnMubWFwKChzLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlN1Ym5hdmlnYXRpb25fX2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuU3VibmF2aWdhdGlvbl9faXRlbV9hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgdG89e2AvJHtjdXJyZW50U2VjdGlvbi51cmx9LyR7cy51cmx9YH0+e3MudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2aWdhdGlvbn0+XG4gICAgICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAge3Jvb3RTZWN0aW9ucy5tYXAoKHMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUNsYXNzTmFtZXMgPSBbc3R5bGVzLk5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlXVxuICAgICAgICAgICAgICAgICAgICBpZiAocy5zZWN0aW9uVHlwZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWVzLnB1c2goc3R5bGVzLk5hdmlnYXRpb25fX2l0ZW1fcGFyZW50X2FjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgLyR7cy51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLk5hdmlnYXRpb25fX2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e2FjdGl2ZUNsYXNzTmFtZXMuam9pbignICcpfT57cy50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtjdXJyZW50U3ViTmF2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGxheW91dCB0eXBlICR7bGF5b3V0fWApXG4gICAgICAgIHJldHVybiA8ZGl2IC8+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VjdGlvbnM6IHN0YXRlLnNlY3Rpb25zLml0ZW1zLFxuICAgICAgbGF5b3V0OiBzdGF0ZS51aS5sYXlvdXRcbiAgICB9XG4gIH1cbikoTWFpbk5hdilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QuY3NzJ1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW52ZXJzZSA9IGZhbHNlLFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnMuZmluZChvID0+IG8uaWQgPT09IHZhbHVlKVxuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBzZWxlY3RlZE9wdGlvbiA/IHNlbGVjdGVkT3B0aW9uLmxhYmVsIDogJ05vbmUnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TZWxlY3R9XG4gICAgICAgICR7aW52ZXJzZSA/IHN0eWxlcy5TZWxlY3RfaW52ZXJzZSA6ICcnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9fZmFrZX0+e2lucHV0TGFiZWx9PC9kaXY+XG5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5TZWxlY3RfX2lucHV0fVxuICAgICAgICAgIHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gb25DaGFuZ2Uodi50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICB7b3B0aW9ucy5tYXAoKG8sIGluZGV4KSA9PlxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17by5pZH0+e28ubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNlbGVjdFwiOlwiU2VsZWN0X19TZWxlY3RfX18xclBiTFwiLFwiU2VsZWN0X19mYWtlXCI6XCJTZWxlY3RfX1NlbGVjdF9fZmFrZV9fXzN3a2RkXCIsXCJTZWxlY3RfX2lucHV0XCI6XCJTZWxlY3RfX1NlbGVjdF9faW5wdXRfX19yN2V5N1wiLFwiU2VsZWN0X2ludmVyc2VcIjpcIlNlbGVjdF9fU2VsZWN0X2ludmVyc2VfX18xa0Q5RVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIk5hdmlnYXRpb25cIjpcIk1haW5OYXZfX05hdmlnYXRpb25fX19ERDNmdFwiLFwiTmF2aWdhdGlvbl9faXRlbVwiOlwiTWFpbk5hdl9fTmF2aWdhdGlvbl9faXRlbV9fXzFnXzZUXCIsXCJOYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZVwiOlwiTWFpbk5hdl9fTmF2aWdhdGlvbl9faXRlbV9hY3RpdmVfX18yaVhDUVwiLFwiTmF2aWdhdGlvbl9faXRlbV9wYXJlbnRfYWN0aXZlXCI6XCJNYWluTmF2X19OYXZpZ2F0aW9uX19pdGVtX3BhcmVudF9hY3RpdmVfX18ybU5POFwiLFwiU3VibmF2aWdhdGlvblwiOlwiTWFpbk5hdl9fU3VibmF2aWdhdGlvbl9fXzVHcm9IXCIsXCJTdWJuYXZpZ2F0aW9uX19pdGVtXCI6XCJNYWluTmF2X19TdWJuYXZpZ2F0aW9uX19pdGVtX19fM3RjWjRcIixcIlN1Ym5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlXCI6XCJNYWluTmF2X19TdWJuYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZV9fXzJXbWd1XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9NYWluTmF2L01haW5OYXYuY3NzXG4gKiogbW9kdWxlIGlkID0gNjcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgQXJ0aWNsZXNQYWdlIGZyb20gJy4uL0FydGljbGVzUGFnZSdcblxuY2xhc3MgU2VjdGlvbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2N1cnJlbnRTZWN0aW9uLCBwYXJlbnRTZWN0aW9uLCBwYXJhbXMsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblxuICAgIHN3aXRjaCAoY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgJ2FydGljbGVzJzpcbiAgICAgIGNhc2UgJ2Jsb2dwb3N0cyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEFydGljbGVzUGFnZVxuICAgICAgICAgICAgY3VycmVudFNlY3Rpb249e2N1cnJlbnRTZWN0aW9ufVxuICAgICAgICAgICAgcGFyZW50U2VjdGlvbj17cGFyZW50U2VjdGlvbn1cbiAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfSAvPlxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIHNlY3Rpb24gdHlwZSBvbiAybmQgbGV2ZWwgJHtjdXJyZW50U2VjdGlvbi5zZWN0aW9uVHlwZX1gKVxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcbiAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLnVybCA9PT0gcGFyYW1zLnN1YnNlY3Rpb25VcmwpXG4gICAgY29uc3QgcGFyZW50U2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLnVybCA9PT0gcGFyYW1zLnNlY3Rpb25VcmwpXG5cbiAgICAvLyBjb25zdCBzZWN0aW9uQmxvZ3Bvc3RzID0gY3VycmVudFNlY3Rpb24uYXJ0aWNsZXNcbiAgICAvLyAubWFwKGEgPT4gYXJ0aWNsZXMuZmluZChhcnQgPT4gYXJ0Ll9pZCA9PT0gYSkpXG4gICAgLy8gLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFNlY3Rpb24sXG4gICAgICBwYXJlbnRTZWN0aW9uXG4gICAgfVxuICB9XG4pKFNlY3Rpb25Db250YWluZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TdWJzZWN0aW9uQ29udGFpbmVyL1N1YnNlY3Rpb25Db250YWluZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBGbGV4IGZyb20gJy4uL0xheW91dHMvRmxleCdcbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMvR3JpZCdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMvTGlzdCdcbmltcG9ydCBIZWFkaW5nMSBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcxJ1xuaW1wb3J0IEhlYWRpbmcyIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzInXG5pbXBvcnQgSGVhZGluZzMgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMydcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL1R5cG9ncmFwaHkvQ29udGVudCdcbmltcG9ydCBJbmZvIGZyb20gJy4uL1R5cG9ncmFwaHkvSW5mbydcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4uL1VJL0xpbmtCdXR0b24nXG5pbXBvcnQgQXNrUXVlc3Rpb24gZnJvbSAnLi4vQXNrUXVlc3Rpb24nXG5pbXBvcnQgTGlzdE9mQXJ0aWNsZXMgZnJvbSAnLi4vTGlzdE9mQXJ0aWNsZXMnXG5cbmNvbnN0IEFydGljbGVzUGFnZSA9ICh7XG4gIHBhcmVudFNlY3Rpb24sXG4gIGN1cnJlbnRTZWN0aW9uLFxuICBhcnRpY2xlcyxcbiAgbGF5b3V0LFxuICBjaGlsZHJlbixcbiAgcGFyYW1zXG59KSA9PiB7XG4gIGxldCBncmlkU2l6ZSA9IDBcbiAgbGV0IGFydGljbGVzU3BhbiA9IDBcbiAgbGV0IHF1ZXN0aW9uc1NwYW4gPSAwXG4gIGxldCBib3hTaXplID0gMFxuICBsZXQgcXVlc3Rpb25zQm94U2l6ZSA9IDBcbiAgbGV0IGZvcm1MYXlvdXQgPSAnbm9uZSdcbiAgbGV0IGFydGljbGVzR3JpZFNpemUgPSAwXG5cbiAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICBjYXNlICdzJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIGdyaWRTaXplID0gMVxuICAgICAgYXJ0aWNsZXNTcGFuID0gMVxuICAgICAgcXVlc3Rpb25zU3BhbiA9IDFcbiAgICAgIGJveFNpemUgPSA0XG4gICAgICBxdWVzdGlvbnNCb3hTaXplID0gMlxuICAgICAgZm9ybUxheW91dCA9ICdmdWxsJ1xuICAgICAgYXJ0aWNsZXNHcmlkU2l6ZSA9IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbCc6XG4gICAgICBncmlkU2l6ZSA9IDEyXG4gICAgICBhcnRpY2xlc1NwYW4gPSA3XG4gICAgICBxdWVzdGlvbnNTcGFuID0gNVxuICAgICAgYm94U2l6ZSA9IHBhcmVudFNlY3Rpb24gPyA2IDogOFxuICAgICAgcXVlc3Rpb25zQm94U2l6ZSA9IDZcbiAgICAgIGZvcm1MYXlvdXQgPSAnc3RhY2tlZCdcbiAgICAgIGFydGljbGVzR3JpZFNpemUgPSAxXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3hsJzpcbiAgICAgIGdyaWRTaXplID0gM1xuICAgICAgYXJ0aWNsZXNTcGFuID0gMlxuICAgICAgcXVlc3Rpb25zU3BhbiA9IDFcbiAgICAgIGJveFNpemUgPSBwYXJlbnRTZWN0aW9uID8gNiA6IDhcbiAgICAgIHF1ZXN0aW9uc0JveFNpemUgPSA2XG4gICAgICBmb3JtTGF5b3V0ID0gJ3N0YWNrZWQnXG4gICAgICBhcnRpY2xlc0dyaWRTaXplID0gMlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBsYXlvdXQgdHlwZSAke2xheW91dH1gKVxuICB9XG5cbiAgbGV0IGNvbnRlbnQgPSAnJ1xuICBpZiAoY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUgPT09ICdhcnRpY2xlcycpIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgIHtwYXJlbnRTZWN0aW9uXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEhlYWRpbmczPntwYXJlbnRTZWN0aW9uLnRpdGxlfTwvSGVhZGluZzM+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIDxIZWFkaW5nMSB1bmRlcmxpbmU+e2N1cnJlbnRTZWN0aW9uLnRpdGxlfTwvSGVhZGluZzE+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBndXR0ZXJCb3R0b209ezF9PlxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsxfVxuICAgICAgICAgICAgc3Bhbj17MX1cbiAgICAgICAgICAgIG91dE9mPXthcnRpY2xlc0dyaWRTaXplfT5cbiAgICAgICAgICAgIDxMaXN0T2ZBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXMuc2xpY2UoMCwgYXJ0aWNsZXMubGVuZ3RoIC8gMil9IC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsxfVxuICAgICAgICAgICAgc3Bhbj17MX1cbiAgICAgICAgICAgIG91dE9mPXthcnRpY2xlc0dyaWRTaXplfT5cbiAgICAgICAgICAgIDxMaXN0T2ZBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXMuc2xpY2UoYXJ0aWNsZXMubGVuZ3RoIC8gMil9IC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2UgaWYgKGN1cnJlbnRTZWN0aW9uLnNlY3Rpb25UeXBlID09PSAnYmxvZ3Bvc3RzJykge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2sgbj17M30+XG4gICAgICAgICAgPEhlYWRpbmcxIHVuZGVybGluZT57Y3VycmVudFNlY3Rpb24udGl0bGV9PC9IZWFkaW5nMT5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8TGlzdCBuPXszfT5cbiAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IHBhcmVudFNlY3Rpb25cbiAgICAgICAgICAgICAgPyBgLyR7cGFyYW1zLnNlY3Rpb25Vcmx9LyR7cGFyYW1zLnN1YnNlY3Rpb25Vcmx9L2FydGljbGVzLyR7YS51cmx9YFxuICAgICAgICAgICAgICA6IGAvJHtwYXJhbXMuc2VjdGlvblVybH0vYXJ0aWNsZXMvJHthLnVybH1gXG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgbj17M30+XG4gICAgICAgICAgICAgICAgPEluZm8+UG9zdGVkIG9uIDxUaW1lIHZhbHVlPXtuZXcgRGF0ZShhLmNyZWF0ZWRBdCl9IGZvcm1hdD1cIk1NTSBEbywgaDptQVwiIC8+IGJ5IHthLmxhc3RNb2RpZmllZEJ5fTwvSW5mbz5cbiAgICAgICAgICAgICAgICA8SGVhZGluZzI+e2EudGl0bGV9PC9IZWFkaW5nMj5cblxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgICAgICAgICAgPENvbnRlbnQgdGV4dD17YS5zbmlwcGV0fSAvPlxuICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17bGlua30+JiMxODc7IHJlYWQgZnVsbCBwb3N0PC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgZ3V0dGVyQm90dG9tPXswfT5cbiAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbT17MH1cbiAgICAgICAgICAgIHNwYW49e2FydGljbGVzU3Bhbn1cbiAgICAgICAgICAgIG91dE9mPXtncmlkU2l6ZX0+XG4gICAgICAgICAgICA8Qm94IG49e2JveFNpemV9PlxuICAgICAgICAgICAgICB7cGFyYW1zLmFydGljbGVVcmxcbiAgICAgICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgOiBjb250ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbT17MH1cbiAgICAgICAgICAgIHNwYW49e3F1ZXN0aW9uc1NwYW59XG4gICAgICAgICAgICBvdXRPZj17Z3JpZFNpemV9PlxuICAgICAgICAgICAgPEJveCBuPXtxdWVzdGlvbnNCb3hTaXplfT5cbiAgICAgICAgICAgICAgPEFza1F1ZXN0aW9uIGZvcm1MYXlvdXQ9e2Zvcm1MYXlvdXR9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7Y3VycmVudFNlY3Rpb259ID0gb3duUHJvcHNcbiAgICBjb25zdCBhcnRpY2xlcyA9IGN1cnJlbnRTZWN0aW9uLmFydGljbGVzXG4gICAgICAubWFwKGEgPT4gc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmluZChhcnQgPT4gYXJ0Ll9pZCA9PT0gYSkpXG4gICAgICAuZmlsdGVyKGEgPT4gYS5pc1B1Ymxpc2hlZClcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlcyxcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9XG4pKEFydGljbGVzUGFnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FydGljbGVzUGFnZS9BcnRpY2xlc1BhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nMS5jc3MnXG5cbmNvbnN0IEhlYWRpbmcxID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxpbmtUbyA9IG51bGwsXG4gIHVuZGVybGluZVxufSkgPT4ge1xuICBpZiAobGlua1RvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPXtsaW5rVG99XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmcxfVxuICAgICAgICAgICR7c3R5bGVzLkhlYWRpbmcxX2xpbmt9XG4gICAgICAgICAgJHt1bmRlcmxpbmUgPyBzdHlsZXMuSGVhZGluZzFfdW5kZXJsaW5lIDogJyd9YH0+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMX1cbiAgICAgICAgJHt1bmRlcmxpbmUgPyBzdHlsZXMuSGVhZGluZzFfdW5kZXJsaW5lIDogJyd9YH0+e2NoaWxkcmVufTwvaDE+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmcxXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcxL0hlYWRpbmcxLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRpbmcxXCI6XCJIZWFkaW5nMV9fSGVhZGluZzFfX18zUkdKRlwiLFwiSGVhZGluZzFfbGlua1wiOlwiSGVhZGluZzFfX0hlYWRpbmcxX2xpbmtfX18xaVNsdFwiLFwiSGVhZGluZzFfdW5kZXJsaW5lXCI6XCJIZWFkaW5nMV9fSGVhZGluZzFfdW5kZXJsaW5lX19fMUlOa3dcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzEvSGVhZGluZzEuY3NzXG4gKiogbW9kdWxlIGlkID0gNzgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRpbmczLmNzcydcblxuY29uc3QgSGVhZGluZzMgPSAoe1xuICBjaGlsZHJlbixcbiAgbGlua1RvID0gbnVsbFxufSkgPT4ge1xuICBpZiAobGlua1RvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXtsaW5rVG99IGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmczfSAke3N0eWxlcy5IZWFkaW5nM19saW5rfWB9PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZzN9PntjaGlsZHJlbn08L2gyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nM1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMy9IZWFkaW5nMy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nM1wiOlwiSGVhZGluZzNfX0hlYWRpbmczX19fMWtpZ0tcIixcIkhlYWRpbmczTGlua1wiOlwiSGVhZGluZzNfX0hlYWRpbmczTGlua19fXzFKQ21MXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGVudC5jc3MnXG5cbmNvbnN0IENvbnRlbnQgPSAoe1xuICB0ZXh0ID0gJydcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5Db250ZW50fVxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRleHR9fSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQ29udGVudC9Db250ZW50LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvbnRlbnRcIjpcIkNvbnRlbnRfX0NvbnRlbnRfX18yUlEwVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9Db250ZW50L0NvbnRlbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNzg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbmZvLmNzcydcblxuY29uc3QgSW5mbyA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmZvfT57Y2hpbGRyZW59PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9JbmZvL0luZm8uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSW5mb1wiOlwiSW5mb19fSW5mb19fXzJacDQ2XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0luZm8vSW5mby5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgSGVhZGluZzIgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMidcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL1R5cG9ncmFwaHkvQ29udGVudCdcbmltcG9ydCBTaWduYXR1cmUgZnJvbSAnLi4vU2lnbmF0dXJlJ1xuaW1wb3J0IFF1ZXN0aW9uRm9ybSBmcm9tICcuLi9RdWVzdGlvbkZvcm0nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Bc2tRdWVzdGlvbi5jc3MnXG5cbmNvbnN0IEFza1F1ZXN0aW9uID0gKHtcbiAgZm9ybUxheW91dFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb259PlxuICAgICAgPEJsb2NrPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFza1F1ZXN0aW9uX19oZWFkZXJ9PlxuICAgICAgICAgIDxIZWFkaW5nMj5Bc2sgYSBRdWVzdGlvbjwvSGVhZGluZzI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPEJsb2NrPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFza1F1ZXN0aW9uX19ib2R5fT5cbiAgICAgICAgICA8QmxvY2sgbj17MC41fT5cbiAgICAgICAgICAgIDxDb250ZW50IHRleHQ9e2BcbiAgICAgICAgICAgICAgICA8cD5Ob3QgcXVpdGUgZmluZGluZyB3aGF0IHlvdeKAmXJlIGxvb2tpbmcgZm9yPyBXYW50IHNvbWV0aGluZyBleHBsYWluZWQgZnVydGhlcj8gSGF2ZSBhIHF1ZXN0aW9uIGFib3V0IHNvbWV0aGluZyB5b3UgZm91bmQgZWxzZXdoZXJlPyBXYW50IGEgY29weSBvZiBhIHN0dWR5IHdl4oCZdmUgY2l0ZWQ/IFNlbmQgaW4geW91ciBxdWVzdGlvbiBhbmQgSeKAmWxsIGVtYWlsIHlvdSBiYWNrLjwvcD5cbiAgICAgICAgICAgICAgYH0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPFNpZ25hdHVyZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxRdWVzdGlvbkZvcm0gdHlwZT17Zm9ybUxheW91dH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc2tRdWVzdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXNrUXVlc3Rpb24vQXNrUXVlc3Rpb24uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dC5jc3MnXG5cbmNvbnN0IEhlYWRpbmczID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleHR9PntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nM1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9UZXh0L1RleHQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGV4dFwiOlwiVGV4dF9fVGV4dF9fX2xXWUFGXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L1RleHQvVGV4dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3OTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2lnbmF0dXJlLmNzcydcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgU2lnbmF0dXJlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPVwiL3doby13ZS1hcmVcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5TaWduYXR1cmV9PlxuICAgICAgICDigJMgSmVuIFBvdHRlciBNRCBCLlNjLiBDQ0ZQPGJyIC8+RmFtaWx5IHBoeXNpY2lhblxuICAgICAgPC9MaW5rPlxuICAgIDwvRmxleD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduYXR1cmVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NpZ25hdHVyZS9TaWduYXR1cmUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2lnbmF0dXJlXCI6XCJTaWduYXR1cmVfX1NpZ25hdHVyZV9fXzExQ25GXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TaWduYXR1cmUvU2lnbmF0dXJlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtUZXh0SW5wdXQsIFRleHRBcmVhLCBCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IExhYmVsZWRJbnB1dCBmcm9tICcuLi9MYXlvdXRzL0xhYmVsZWRJbnB1dCdcbmltcG9ydCBCbG9jayBmcm9tICcuLi9MYXlvdXRzL0Jsb2NrJ1xuaW1wb3J0IHtHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi4vTGF5b3V0cy9HcmlkJ1xuXG5pbXBvcnQge2NyZWF0ZVF1ZXN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zJ1xuXG5jbGFzcyBRdWVzdGlvbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcnM6IHt9LFxuICAgICAgZGF0YToge1xuICAgICAgICBwb3N0ZXJOYW1lOiBwcm9wcy51c2VyLm5hbWUsXG4gICAgICAgIHBvc3RlckVtYWlsOiBwcm9wcy51c2VyLmVtYWlsLFxuICAgICAgICBxdWVzdGlvbjogJydcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmNyZWF0ZSA9IHRoaXMuY3JlYXRlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2Vycm9ycywgaXNVcGRhdGluZ30gPSBuZXdQcm9wcy5xdWVzdGlvblxuXG4gICAgaWYgKCFpc1VwZGF0aW5nKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDAgJiYgZXJyb3JzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcG9zdGVyTmFtZTogbmV3UHJvcHMudXNlci5uYW1lLFxuICAgICAgICAgICAgcG9zdGVyRW1haWw6IG5ld1Byb3BzLnVzZXIuZW1haWwsXG4gICAgICAgICAgICBxdWVzdGlvbjogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXJyb3JzLCB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBuZXdEYXRhLFxuICAgICAgZXJyb3JzOiBuZXdFcnJvcnNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICBjb25zdCB7Y3JlYXRlUXVlc3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgY3JlYXRlUXVlc3Rpb24odGhpcy5zdGF0ZS5kYXRhKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7cXVlc3Rpb246IHtpc1VwZGF0aW5nfSwgdHlwZSwgbGF5b3V0fSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBncmlkU2l6ZSA9IDBcbiAgICBzd2l0Y2ggKGxheW91dCkge1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIGdyaWRTaXplID0gMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbSc6XG4gICAgICBjYXNlICdsJzpcbiAgICAgIGNhc2UgJ3hsJzpcbiAgICAgICAgZ3JpZFNpemUgPSAyXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGxheW91dCB0eXBlICR7bGF5b3V0fWApXG4gICAgfVxuXG4gICAgbGV0IGlucHV0cyA9ICcnXG4gICAgaWYgKHR5cGUgPT09ICdzdGFja2VkJykge1xuICAgICAgaW5wdXRzID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxMYWJlbGVkSW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWVcIlxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucG9zdGVyTmFtZX1cbiAgICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucG9zdGVyTmFtZX1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIENhc2V5XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9eyh2KSA9PiB0aGlzLmNoYW5nZSgncG9zdGVyTmFtZScsIHYpfSAvPlxuICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxMYWJlbGVkSW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBvc3RlckVtYWlsfVxuICAgICAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBjYXNleUBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdwb3N0ZXJFbWFpbCcsIHYpfSAvPlxuICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZnVsbCcpIHtcbiAgICAgIGlucHV0cyA9IChcbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxHcmlkIGd1dHRlckJvdHRvbT17MX0+XG4gICAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsxfVxuICAgICAgICAgICAgICBzcGFuPXsxfVxuICAgICAgICAgICAgICBvdXRPZj17Z3JpZFNpemV9PlxuICAgICAgICAgICAgICA8TGFiZWxlZElucHV0XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJOYW1lfVxuICAgICAgICAgICAgICAgIGlucHV0PXtcbiAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5wb3N0ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucG9zdGVyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIENhc2V5XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ3Bvc3Rlck5hbWUnLCB2KX0gLz5cbiAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsxfVxuICAgICAgICAgICAgICBzcGFuPXsxfVxuICAgICAgICAgICAgICBvdXRPZj17Z3JpZFNpemV9PlxuICAgICAgICAgICAgICA8TGFiZWxlZElucHV0XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucG9zdGVyRW1haWx9XG4gICAgICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBvc3RlckVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucG9zdGVyRW1haWx9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBjYXNleUBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9eyh2KSA9PiB0aGlzLmNoYW5nZSgncG9zdGVyRW1haWwnLCB2KX0gLz5cbiAgICAgICAgICAgICAgICB9IC8+XG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0+XG4gICAgICAgIHtpbnB1dHN9XG5cbiAgICAgICAgPEJsb2NrIG49ezEuNX0+XG4gICAgICAgICAgPExhYmVsZWRJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJZb3VyIHF1ZXN0aW9uXCJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5xdWVzdGlvbn1cbiAgICAgICAgICAgIGlucHV0PXtcbiAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucXVlc3Rpb259XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuLCBBcmUgdGhlcmUgYW55IGRhbmdlcm91cyBzaWRlIGVmZmVjdHMgdG8gdGhlIGNoaWNrZW4gcG94IHZhY2NpbmU/XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdxdWVzdGlvbicsIHYpfSAvPlxuICAgICAgICAgICAgfSAvPlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNyZWF0ZX1cbiAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ30+QXNrIHF1ZXN0aW9uPC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyLFxuICAgICAgcXVlc3Rpb246IHN0YXRlLnF1ZXN0aW9uLFxuICAgICAgbGF5b3V0OiBzdGF0ZS51aS5sYXlvdXRcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlUXVlc3Rpb246IChkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZVF1ZXN0aW9uKGRhdGEsICdZb3VyIHF1ZXN0aW9uIGhhcyBiZWVuIHNlbnQsIHdlIHdpbGwgcmVwbHkgdG8geW91IGFzIHNvb24gYXMgd2UgY2FuIScpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShRdWVzdGlvbkZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbkZvcm0vUXVlc3Rpb25Gb3JtLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkFza1F1ZXN0aW9uXCI6XCJBc2tRdWVzdGlvbl9fQXNrUXVlc3Rpb25fX18zQmsxLVwiLFwiQXNrUXVlc3Rpb25fX2hlYWRlclwiOlwiQXNrUXVlc3Rpb25fX0Fza1F1ZXN0aW9uX19oZWFkZXJfX183Q1Ffb1wiLFwiQXNrUXVlc3Rpb25fX2JvZHlcIjpcIkFza1F1ZXN0aW9uX19Bc2tRdWVzdGlvbl9fYm9keV9fXzJEQ1l5XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Bc2tRdWVzdGlvbi9Bc2tRdWVzdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3OTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBBcnRpY2xlc1BhZ2UgZnJvbSAnLi4vQXJ0aWNsZXNQYWdlJ1xuaW1wb3J0IEN1c3RvbVBhZ2VIb21lIGZyb20gJy4uL0N1c3RvbVBhZ2VIb21lJ1xuaW1wb3J0IEN1c3RvbVBhZ2VBYm91dCBmcm9tICcuLi9DdXN0b21QYWdlQWJvdXQnXG5pbXBvcnQgQ3VzdG9tUGFnZVNjaGVkdWxlIGZyb20gJy4uL0N1c3RvbVBhZ2VTY2hlZHVsZSdcblxuY2xhc3MgU2VjdGlvbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge3BhcmFtcywgY3VycmVudFNlY3Rpb24sIGZpcnN0U3Vic2VjdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoZmlyc3RTdWJzZWN0aW9uICYmICFwYXJhbXMuc3Vic2VjdGlvblVybCkge1xuICAgICAgaGFzaEhpc3RvcnkucHVzaChgLyR7Y3VycmVudFNlY3Rpb24udXJsfS8ke2ZpcnN0U3Vic2VjdGlvbi51cmx9YClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtwYXJhbXMsIGN1cnJlbnRTZWN0aW9uLCBmaXJzdFN1YnNlY3Rpb259ID0gbmV3UHJvcHNcblxuICAgIGlmIChmaXJzdFN1YnNlY3Rpb24gJiYgIXBhcmFtcy5zdWJzZWN0aW9uVXJsKSB7XG4gICAgICBoYXNoSGlzdG9yeS5wdXNoKGAvJHtjdXJyZW50U2VjdGlvbi51cmx9LyR7Zmlyc3RTdWJzZWN0aW9uLnVybH1gKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2N1cnJlbnRTZWN0aW9uLCBwYXJhbXMsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblxuICAgIHN3aXRjaCAoY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgJ3BhcmVudCc6XG4gICAgICAgIHJldHVybiBjaGlsZHJlblxuICAgICAgY2FzZSAnYmxvZ3Bvc3RzJzpcbiAgICAgIGNhc2UgJ2FydGljbGVzJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8QXJ0aWNsZXNQYWdlXG4gICAgICAgICAgICBjdXJyZW50U2VjdGlvbj17Y3VycmVudFNlY3Rpb259XG4gICAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59XG4gICAgICAgICAgICBwYXJhbXM9e3BhcmFtc30gLz5cbiAgICAgICAgKVxuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgc3dpdGNoIChjdXJyZW50U2VjdGlvbi5jdXN0b21JZCkge1xuICAgICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgcmV0dXJuIDxDdXN0b21QYWdlSG9tZSAvPlxuICAgICAgICAgIGNhc2UgJ2Fib3V0JzpcbiAgICAgICAgICAgIHJldHVybiA8Q3VzdG9tUGFnZUFib3V0IC8+XG4gICAgICAgICAgY2FzZSAnc2NoZWR1bGUnOlxuICAgICAgICAgICAgcmV0dXJuIDxDdXN0b21QYWdlU2NoZWR1bGUgLz5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBjdXN0b20gc2VjdGlvbiAke2N1cnJlbnRTZWN0aW9uLmN1c3RvbUlkfWApXG4gICAgICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBzZWN0aW9uIHR5cGUgb24gMXN0IGxldmVsICR7Y3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGV9YClcbiAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy51cmwgPT09IHBhcmFtcy5zZWN0aW9uVXJsKVxuICAgIGNvbnN0IGZpcnN0U3Vic2VjdGlvbiA9IGN1cnJlbnRTZWN0aW9uLnNlY3Rpb25UeXBlID09PSAncGFyZW50JyAmJiBjdXJyZW50U2VjdGlvbi5jaGlsZHJlbi5sZW5ndGhcbiAgICAgID8gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuX2lkID09PSBjdXJyZW50U2VjdGlvbi5jaGlsZHJlblswXSlcbiAgICAgIDogbnVsbFxuXG4gICAgICAvLyBjb25zdCBzZWN0aW9uQmxvZ3Bvc3RzID0gY3VycmVudFNlY3Rpb24uYXJ0aWNsZXNcbiAgICAgIC8vIC5tYXAoYSA9PiBhcnRpY2xlcy5maW5kKGFydCA9PiBhcnQuX2lkID09PSBhKSlcbiAgICAgIC8vIC5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRTZWN0aW9uLFxuICAgICAgZmlyc3RTdWJzZWN0aW9uXG4gICAgfVxuICB9XG4pKFNlY3Rpb25Db250YWluZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uQ29udGFpbmVyL1NlY3Rpb25Db250YWluZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vTGF5b3V0cy9XcmFwcGVyJ1xuaW1wb3J0IHtHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi4vTGF5b3V0cy9HcmlkJ1xuaW1wb3J0IEJveCBmcm9tICcuLi9MYXlvdXRzL0JveCdcbmltcG9ydCBTaWduYXR1cmUgZnJvbSAnLi4vU2lnbmF0dXJlJ1xuaW1wb3J0IFF1ZXN0aW9uRm9ybSBmcm9tICcuLi9RdWVzdGlvbkZvcm0nXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBIZWFkaW5nMSBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcxJ1xuaW1wb3J0IEhlYWRpbmcyIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzInXG5pbXBvcnQgSGVhZGluZ0xpbmVkIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZ0xpbmVkJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vVHlwb2dyYXBoeS9Db250ZW50J1xuaW1wb3J0IExpc3RPZkFydGljbGVzIGZyb20gJy4uL0xpc3RPZkFydGljbGVzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DdXN0b21QYWdlSG9tZS5jc3MnXG5cbmNvbnN0IEN1c3RvbVBhZ2VIb21lID0gKHtcbiAgZnJlcXVlbnRBcnRpY2xlcyxcbiAgZnJlcXVlbnRTZWN0aW9uLFxuICBmcmVxdWVudFN1YnNlY2lvbnMsXG4gIGFydGljbGVzLFxuICBsYXlvdXRcbn0pID0+IHtcbiAgbGV0IFdlbGNvbWVHcmlkU2l6ZSA9IDBcbiAgbGV0IHdlbGNvbWVCb3ggPSAwXG4gIGxldCBmcmVxdWVudEdyaWRTaXplID0gMFxuICBsZXQgZnJlcXVlbnRCb3ggPSAwXG4gIGxldCBhc2tRdWVzdGlvbkdyaWRTaXplID0gMFxuICBsZXQgYXNrUXVlc3Rpb25Cb3ggPSAwXG5cbiAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICBjYXNlICdzJzpcbiAgICAgIFdlbGNvbWVHcmlkU2l6ZSA9IDFcbiAgICAgIHdlbGNvbWVCb3ggPSA0XG4gICAgICBmcmVxdWVudEdyaWRTaXplID0gMVxuICAgICAgZnJlcXVlbnRCb3ggPSA0XG4gICAgICBhc2tRdWVzdGlvbkdyaWRTaXplID0gMVxuICAgICAgYXNrUXVlc3Rpb25Cb3ggPSA0XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgV2VsY29tZUdyaWRTaXplID0gMVxuICAgICAgd2VsY29tZUJveCA9IDRcbiAgICAgIGZyZXF1ZW50R3JpZFNpemUgPSBNYXRoLm1pbihmcmVxdWVudFN1YnNlY2lvbnMubGVuZ3RoLCAyKVxuICAgICAgZnJlcXVlbnRCb3ggPSA0XG4gICAgICBhc2tRdWVzdGlvbkdyaWRTaXplID0gMVxuICAgICAgYXNrUXVlc3Rpb25Cb3ggPSA0XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2wnOlxuICAgICAgV2VsY29tZUdyaWRTaXplID0gMlxuICAgICAgd2VsY29tZUJveCA9IDRcbiAgICAgIGZyZXF1ZW50R3JpZFNpemUgPSBNYXRoLm1pbihmcmVxdWVudFN1YnNlY2lvbnMubGVuZ3RoLCAzKVxuICAgICAgZnJlcXVlbnRCb3ggPSA4XG4gICAgICBhc2tRdWVzdGlvbkdyaWRTaXplID0gMlxuICAgICAgYXNrUXVlc3Rpb25Cb3ggPSA4XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3hsJzpcbiAgICAgIFdlbGNvbWVHcmlkU2l6ZSA9IDJcbiAgICAgIHdlbGNvbWVCb3ggPSA2XG4gICAgICBmcmVxdWVudEdyaWRTaXplID0gTWF0aC5taW4oZnJlcXVlbnRTdWJzZWNpb25zLmxlbmd0aCwgNClcbiAgICAgIGZyZXF1ZW50Qm94ID0gOFxuICAgICAgYXNrUXVlc3Rpb25HcmlkU2l6ZSA9IDJcbiAgICAgIGFza1F1ZXN0aW9uQm94ID0gOFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBsYXlvdXQgdmFsdWUgJHtsYXlvdXR9YClcbiAgfVxuXG4gIGNvbnN0IGZyZXF1ZW50QXJ0aWNsZXNFbCA9IChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5GcmVxdWVudFNlY3Rpb259PlxuICAgICAgPEJsb2NrPlxuICAgICAgICA8SGVhZGluZ0xpbmVkPkZyZXF1ZW50IFF1ZXN0aW9uczwvSGVhZGluZ0xpbmVkPlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxCb3ggbj17ZnJlcXVlbnRCb3h9PlxuICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICBndXR0ZXJCb3R0b209ezR9PlxuICAgICAgICAgICAge2ZyZXF1ZW50U3Vic2VjaW9ucy5tYXAoKHN1YiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3ViU2VjdGlvbkFydGljbGVzID0gc3ViLmFydGljbGVzXG4gICAgICAgICAgICAgIC5tYXAoYSA9PiBhcnRpY2xlcy5maW5kKGFydCA9PiBhcnQuX2lkID09PSBhKSlcbiAgICAgICAgICAgICAgLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQgJiYgYS5hcnRpY2xlVHlwZSA9PT0gJ2FydGljbGUnKVxuICAgICAgICAgICAgICAuc2xpY2UoMCwgNSlcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbT17NH1cbiAgICAgICAgICAgICAgICAgIHNwYW49ezF9XG4gICAgICAgICAgICAgICAgICBvdXRPZj17ZnJlcXVlbnRHcmlkU2l6ZX0+XG4gICAgICAgICAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nMiB1bmRlcmxpbmU+e3N1Yi50aXRsZX08L0hlYWRpbmcyPlxuICAgICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdE9mQXJ0aWNsZXMgYXJ0aWNsZXM9e3N1YlNlY3Rpb25BcnRpY2xlc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdG89e2AvJHtmcmVxdWVudFNlY3Rpb24udXJsfS8ke3N1Yi51cmx9YH0+c2VlIG1vcmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLldlbGNvbWVTZWN0aW9ufT5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5XZWxjb21lU2VjdGlvbl9fYm9keX0+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICAgIHNwYW49ezF9XG4gICAgICAgICAgICAgICAgb3V0T2Y9e1dlbGNvbWVHcmlkU2l6ZX0+XG4gICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgbj17d2VsY29tZUJveH0+XG4gICAgICAgICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nMT5XaGF0IGlzIOKAnFZhY2NpbmUgQW5zd2Vyc+KAnTwvSGVhZGluZzE+XG4gICAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50IHRleHQ9e2BcbiAgICAgICAgICAgICAgICAgICAgICA8cD5XZSBrbm93IHRoZXJl4oCZcyBhIGxvdCBvZiBpbmZvIGFib3V0IGNoaWxkaG9vZCB2YWNjaW5hdGlvbiBvdXQgdGhlcmUsIGFuZCBzb21lIG9mIGl0IGNhbiBiZSBjb25mdXNpbmcgb3IgY29uZmxpY3RpbmcuIE91ciBnb2FsIGlzIHRvIHByb3ZpZGUgcGFyZW50cyB3aXRoIHJlbGlhYmxlLCBldmlkZW5jZS1iYXNlZCwgdXAtdG8tIGRhdGUgaW5mb3JtYXRpb24gYWJvdXQgY2hpbGRob29kIHZhY2NpbmF0aW9ucywgYW5kIG1vcmUgaW1wb3J0YW50bHksIHRvIGhlbHAgeW91IHNvcnQgdGhyb3VnaCB0aGUgaW5mb3JtYXRpb24geW91IGFyZSBmaW5kaW5nLCB3aGV0aGVyIG9uIG91ciBzaXRlIG9yIHNvbWV3aGVyZSBlbHNlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5GZWVsIGZyZWUgdG8gYnJvd3NlIGFyb3VuZCBvdXIgc2l0ZSEgSWYgeW91IGNhbuKAmXQgZmluZCB0aGUgaW5mb3JtYXRpb24geW914oCZcmUgbG9va2luZyBmb3IsIG9yIHlvdSB3b3VsZCByYXRoZXIganVzdCBhc2sgeW91ciBxdWVzdGlvbiBkaXJlY3RseSB0byBtZSwgc2VuZCBpdCBpbiBhbmQgSSB3aWxsIGVtYWlsIHlvdSBiYWNrLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgYH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICAgIDxTaWduYXR1cmUgLz5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPEJveCBuPXthc2tRdWVzdGlvbkJveH0+XG4gICAgICAgICAgICA8R3JpZFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsyfT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsyfVxuICAgICAgICAgICAgICAgIHNwYW49ezF9XG4gICAgICAgICAgICAgICAgb3V0T2Y9e2Fza1F1ZXN0aW9uR3JpZFNpemV9PlxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nMT5IYXZlIGEgUXVlc3Rpb24/PC9IZWFkaW5nMT5cbiAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgICAgICAgICAgPENvbnRlbnQgdGV4dD17YFxuICAgICAgICAgICAgICAgICAgICAgIDxwPk5vdCBxdWl0ZSBmaW5kaW5nIHdoYXQgeW914oCZcmUgbG9va2luZyBmb3I/IFdhbnQgc29tZXRoaW5nIGV4cGxhaW5lZCBmdXJ0aGVyPyBIYXZlIGEgcXVlc3Rpb24gYWJvdXQgc29tZXRoaW5nIHlvdSBmb3VuZCBlbHNld2hlcmU/IFdhbnQgYSBjb3B5IG9mIGEgc3R1ZHkgd2XigJl2ZSBjaXRlZD8gU2VuZCBpbiB5b3VyIHF1ZXN0aW9uIGFuZCBJ4oCZbGwgZW1haWwgeW91IGJhY2suPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPklmIHdlIHJlY2VpdmUgdGhlIHNhbWUgb3Igc2ltaWxhciBxdWVzdGlvbiBzZXZlcmFsIHRpbWVzLCB3ZSBtYXkgYWRkIGl0IHRvIG91ciBGcmVxdWVudCBRdWVzdGlvbnMgcGFnZS4gTm90aGluZyB0aGF0IGlkZW50aWZpZXMgdGhlIHF1ZXN0aW9uLWFza2VycyB3aWxsIGV2ZXIgYmUgcG9zdGVkLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgYH0gLz5cbiAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgPFNpZ25hdHVyZSAvPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn1cbiAgICAgICAgICAgICAgICBzcGFuPXsxfVxuICAgICAgICAgICAgICAgIG91dE9mPXthc2tRdWVzdGlvbkdyaWRTaXplfT5cbiAgICAgICAgICAgICAgICA8UXVlc3Rpb25Gb3JtIHR5cGU9XCJmdWxsXCIgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7ZnJlcXVlbnRBcnRpY2xlc0VsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICBjb25zdCBmcmVxdWVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5jdXN0b21JZCA9PT0gJ2ZyZXF1ZW50LXF1ZXN0aW9ucycpXG4gICAgY29uc3QgZnJlcXVlbnRTdWJzZWNpb25zID0gZnJlcXVlbnRTZWN0aW9uLmNoaWxkcmVuLm1hcChjaCA9PiBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5faWQgPT09IGNoKSlcblxuICAgIHJldHVybiB7XG4gICAgICBmcmVxdWVudFNlY3Rpb24sXG4gICAgICBmcmVxdWVudFN1YnNlY2lvbnMsXG4gICAgICBhcnRpY2xlczogc3RhdGUuYXJ0aWNsZXMuaXRlbXMsXG4gICAgICBsYXlvdXQ6IHN0YXRlLnVpLmxheW91dFxuICAgIH1cbiAgfVxuKShDdXN0b21QYWdlSG9tZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VIb21lL0N1c3RvbVBhZ2VIb21lLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRpbmdMaW5lZC5jc3MnXG5cbmNvbnN0IEhlYWRpbmdMaW5lZCA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nTGluZWR9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdMaW5lZF9fdGl0bGV9PntjaGlsZHJlbn08L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmdMaW5lZFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nTGluZWQvSGVhZGluZ0xpbmVkLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRpbmdMaW5lZFwiOlwiSGVhZGluZ0xpbmVkX19IZWFkaW5nTGluZWRfX19QQXExM1wiLFwiSGVhZGluZ0xpbmVkX190aXRsZVwiOlwiSGVhZGluZ0xpbmVkX19IZWFkaW5nTGluZWRfX3RpdGxlX19fMXVlNGxcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZ0xpbmVkL0hlYWRpbmdMaW5lZC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3OThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIldlbGNvbWVTZWN0aW9uXCI6XCJDdXN0b21QYWdlSG9tZV9fV2VsY29tZVNlY3Rpb25fX18zRzVES1wiLFwiV2VsY29tZVNlY3Rpb25fX2JvZHlcIjpcIkN1c3RvbVBhZ2VIb21lX19XZWxjb21lU2VjdGlvbl9fYm9keV9fXzJObkxXXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3OTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMvR3JpZCdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBIZWFkaW5nTGluZWQgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nTGluZWQnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DdXN0b21QYWdlQWJvdXQuY3NzJ1xuaW1wb3J0IGltZyBmcm9tICcuL3RlYW0uanBnJ1xuXG5jb25zdCBDdXN0b21QYWdlQWJvdXQgPSAoe1xuICBsYXlvdXRcbn0pID0+IHtcbiAgbGV0IGdyaWRTaXplID0gMFxuICBsZXQgYm94U2l6ZSA9IDBcblxuICBzd2l0Y2ggKGxheW91dCkge1xuICAgIGNhc2UgJ3MnOlxuICAgIGNhc2UgJ20nOlxuICAgICAgZ3JpZFNpemUgPSAxXG4gICAgICBib3hTaXplID0gNFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdsJzpcbiAgICBjYXNlICd4bCc6XG4gICAgICBncmlkU2l6ZSA9IDFcbiAgICAgIGJveFNpemUgPSA2XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGxheW91dCB2YWx1ZSAke2xheW91dH1gKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtzdHlsZXMuQWJvdXRTZWN0aW9ufT5cbiAgICAgICAgPGltZyBzcmM9e2ltZ30gY2xhc3NOYW1lPXtzdHlsZXMuQWJvdXRTZWN0aW9uX19pbWd9IC8+XG5cbiAgICAgICAgPGZpZ2NhcHRpb24gY2xhc3NOYW1lPXtzdHlsZXMuQWJvdXRTZWN0aW9uX19jYXB0aW9ufT5cbiAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIFRoZSBWYWNjaW5lIEFuc3dlcnMgdGVhbSAoTC1SKTogUnlhbiBNYWllciwgTWljaGVsbGUgRHJpZWRnZXIsIEFuZHJlYSBCdW50IGFuZCBKZW4gUG90dGVyLlxuICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgPC9maWdjYXB0aW9uPlxuICAgICAgPC9maWd1cmU+XG5cbiAgICAgIDxXcmFwcGVyIG1heFdpZHRoPVwiNTBcIj5cbiAgICAgICAgPEJveCBuPXtib3hTaXplfT5cbiAgICAgICAgICA8QmxvY2sgbj17Ym94U2l6ZX0+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPEJsb2NrIG49e2JveFNpemUgLSAyfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZ0xpbmVkPkFib3V0IFRoZSBQcm9qZWN0PC9IZWFkaW5nTGluZWQ+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgPENvbnRlbnQgdGV4dD17YFxuICAgICAgICAgICAgICAgICAgPHA+VmFjY2luZSBBbnN3ZXJzIGlzIGEgd2Vic2l0ZSBiZWluZyBkZXZlbG9wZWQgdG8gdHJ5IHRvIGFkZHJlc3MgcGFyZW50YWwgY29uY2VybnMgYWJvdXQgY2hpbGRob29kIHZhY2NpbmF0aW9ucy4gQmFzZWQgb24gdGhlIGF2YWlsYWJsZSBldmlkZW5jZSwgd2Ugc3Ryb25nbHkgZmVlbCB0aGF0IHRoZSBiZW5lZml0cyBvZiB2YWNjaW5hdGlvbiBncmVhdGx5IG91dHdlaWdoIHRoZSByaXNrcyBmb3IgdGhlIHZhc3QgbWFqb3JpdHkgb2YgcGVvcGxlLCBidXQgd2UgYXJlIG5vdCBoZXJlIHRvIHRlbGwgcGFyZW50cyB3aGV0aGVyIG9yIG5vdCB0byB2YWNjaW5hdGUgdGhlaXIgY2hpbGRyZW4uIE91ciBnb2FsIGlzIHRvIHByb3ZpZGUgcmVsaWFibGUsIGV2aWRlbmNlLWJhc2VkLCB1cC10by0gZGF0ZSBpbmZvcm1hdGlvbiBhYm91dCB2YWNjaW5hdGlvbiAoYm90aCB0aGUgcHJvcyBhbmQgdGhlIGNvbnMpIHRvIGhlbHAgcGFyZW50cyBtYWtlIHRoZWlyIG93biBkZWNpc2lvbnMuPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+VGhpcyBwcm9qZWN0IHdhcyBjb25jZWl2ZWQgYmFzZWQgb24gdGhlIGV4cGVyaWVuY2VzIG9mIEplbiBQb3R0ZXIgKHNpdGUgbW9kZXJhdG9yIGFuZCBwcmluY2lwYWwgaW52ZXN0aWdhdG9yIG9mIHRoaXMgc3R1ZHkpIHdoZW4gc2hlIHdhcyBhIG5ldyBwYXJlbnQuIFRoZSBmaXJzdCBwaGFzZSBvZiB0aGlzIHN0dWR5IGlzIGRlc2lnbmVkIHRvIHJlZmluZSB0aGlzIHdlYnNpdGUgZm9yIHBhcmVudHMnIHVzZS4gSXQgd2FzIGZ1bmRlZCBieSBncmFudHMgZnJvbSB0aGUgPGEgaHJlZj1cImh0dHA6Ly9tbXNmLmNhL1wiPk1hbml0b2JhIE1lZGljYWwgU2VydmljZXMgRm91bmRhdGlvbjwvYT4gYW5kIFRoZSA8YSBocmVmPVwiaHR0cDovL3d3dy53cGdmZG4ub3JnL1wiPldpbm5pcGVnIEZvdW5kYXRpb248L2E+LiBUaGUgc2Vjb25kIHBoYXNlIG9mIHRoaXMgc3R1ZHkgd2lsbCBsb29rIGF0IHRoZSBlZmZlY3RpdmVuZXNzIG9mIHRoZSB3ZWJzaXRlIHRvIHJlZHVjZSBwYXJlbnRzJyBoZXNpdGFuY3kgYXJvdW5kIGNoaWxkaG9vZCB2YWNjaW5hdGlvbi48L3A+XG4gICAgICAgICAgICAgICAgICA8cD5QbGVhc2Ugbm90ZSB0aGF0IHdlIHByb3ZpZGUgZ2VuZXJhbCBpbmZvcm1hdGlvbiwgbm90IG1lZGljYWwgYWR2aWNlLCBvbiB0aGlzIHNpdGUuIElmIHlvdSBoYXZlIHF1ZXN0aW9ucyBzcGVjaWZpYyB0byB5b3VyIGNoaWxkLCB3ZSB3aWxsIHJlZmVyIHlvdSB0byB5b3VyIHByaW1hcnkgY2FyZSBwcm92aWRlci4gKEZvciBleGFtcGxlLCDigJx3aGF0IGFyZSB0aGUgc2lkZSBlZmZlY3RzIG9mIHRoZSBjaGlja2VuIHBveCB2YWNjaW5lP+KAnSBpcyBhIHF1ZXN0aW9uIHdlIGNhbiBhbnN3ZXIuIOKAnFNob3VsZCBteSBjaGlsZCBnZXQgdGhlIGNoaWNrZW4gcG94IHZhY2NpbmU/4oCdIHNob3VsZCBiZSBkaXJlY3RlZCB0byB5b3VyIGhlYWx0aCBjYXJlIHByb3ZpZGVyLik8L3A+XG4gICAgICAgICAgICAgICAgYH0gLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8QmxvY2sgbj17Ym94U2l6ZSAtIDJ9PlxuICAgICAgICAgICAgICA8SGVhZGluZ0xpbmVkPkFib3V0IFVzPC9IZWFkaW5nTGluZWQ+XG4gICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICA8Q29udGVudCB0ZXh0PXtgXG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5KZW4gUG90dGVyIE1EIEIuU2MuIENDRlA8L3N0cm9uZz4gaXMgYSBmYW1pbHkgcGh5c2ljaWFuIGF0IEtpbGRvbmFuIE1lZGljYWwgQ2VudHJlLCB3aGVyZSBzaGUgdGVhY2hlcyBmYW1pbHkgbWVkaWNpbmUgcmVzaWRlbnRzIGFuZCBvdGhlciBsZWFybmVycyBpbiB0aGUgRGVwYXJ0bWVudCBvZiBGYW1pbHkgTWVkaWNpbmUgd2l0aCB0aGUgVW5pdmVyc2l0eSBvZiBNYW5pdG9iYS4gU2hlIGxpdmVzIGluIFdpbm5pcGVnIHdpdGggaGVyIGh1c2JhbmQsIHRocmVlIGRhdWdodGVycyBhbmQgYSBjYXQuIFNoZSBlbmpveXMgY2Fub2VpbmcsIG11c2ljLCBrbml0dGluZyBhbmQgZ29pbmcgdG8gdGhlIGxha2UgKGlkZWFsbHkgYWxsIGF0IHRoZSBzYW1lIHRpbWUhKS4gSmVu4oCZcyByb2xlIG9uIHRoaXMgc2l0ZSBpcyB0byBnZW5lcmF0ZSBhbmQgbWFpbnRhaW4gdGhlIGluZm9ybWF0aW9uIHByZXNlbnRlZCwgYW5kIHRvIGFuc3dlciBxdWVzdGlvbnMgZnJvbSBwYXJlbnRzLjwvcD5cbiAgICAgICAgICAgICAgICBgfSAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0OiBzdGF0ZS51aS5sYXlvdXRcbiAgICB9XG4gIH1cbikoQ3VzdG9tUGFnZUFib3V0KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBYm91dFNlY3Rpb25cIjpcIkN1c3RvbVBhZ2VBYm91dF9fQWJvdXRTZWN0aW9uX19fM2VuZU9cIixcIkFib3V0U2VjdGlvbl9faW1nXCI6XCJDdXN0b21QYWdlQWJvdXRfX0Fib3V0U2VjdGlvbl9faW1nX19fMUpiUUFcIixcIkFib3V0U2VjdGlvbl9fY2FwdGlvblwiOlwiQ3VzdG9tUGFnZUFib3V0X19BYm91dFNlY3Rpb25fX2NhcHRpb25fX18yOGJISlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBIZWFkaW5nMSBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcxJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vVHlwb2dyYXBoeS9UZXh0J1xuaW1wb3J0IHtSb3csIENvbHVtbiwgQ2VsbH0gZnJvbSAnLi4vVGFibGUnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9MYXlvdXRzL1dyYXBwZXInXG5cbmNvbnN0IEN1c3RvbVBhZ2VTY2hlZHVsZSA9ICh7XG4gIGxheW91dFxufSkgPT4ge1xuICBsZXQgdmFjY2luZUNvbHVtbldpZHRoID0gMFxuICBsZXQgc2hvd0Z1bGxOYW1lID0gbnVsbFxuICBsZXQgYm94U2l6ZSA9IDBcblxuICBzd2l0Y2ggKGxheW91dCkge1xuICAgIGNhc2UgJ3MnOlxuICAgIGNhc2UgJ20nOlxuICAgICAgdmFjY2luZUNvbHVtbldpZHRoID0gJzdyZW0nXG4gICAgICBzaG93RnVsbE5hbWUgPSBmYWxzZVxuICAgICAgYm94U2l6ZSA9IDRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbCc6XG4gICAgY2FzZSAneGwnOlxuICAgICAgdmFjY2luZUNvbHVtbldpZHRoID0gJzI1cmVtJ1xuICAgICAgc2hvd0Z1bGxOYW1lID0gdHJ1ZVxuICAgICAgYm94U2l6ZSA9IDhcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZXRlZCBsYXlvdXQgdHlwZSAke2xheW91dH1gKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxCb3ggbj17Ym94U2l6ZX0+XG4gICAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgICA8SGVhZGluZzEgdW5kZXJsaW5lPlZhY2NpbmF0aW9uIFNjaGVkdWxlPC9IZWFkaW5nMT5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgPFRleHQ+VGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgc2NoZWR1bGUgZm9yIHZhY2NpbmF0aW9ucyBpbiBNYW5pdG9iYS48L1RleHQ+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxSb3cgaGVhZGluZyBidD5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmwgLz5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiNDUlXCIgYnI+PENlbGwgaGVhZGluZz5Nb250aHM8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIGhlYWRpbmc+WWVhcnM8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIGhlYWRpbmc+R3JhZGU8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCBoZWFkaW5nPlllYXJzPC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBoZWFkaW5nIGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiIGhlYWRpbmc+XG4gICAgICAgICAgICAgICAgVmFjY2luZVxuICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIj48Q2VsbD4yPC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiPjxDZWxsPjQ8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCI+PENlbGw+NjwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIj48Q2VsbD4xMjwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbD4xODwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGw+NC02PC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiPjxDZWxsPjQ8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGw+NjwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsPjE0LTE2PC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBEVGFQLUhpYi1JUFYge3Nob3dGdWxsTmFtZSA/ICcoRGlwaHRoZXJpYSwgVGV0YW51cywgUGVydHVzc2lzLCBIZW1vcGhpbHVzIGluZmx1ZW56YWUgdHlwZSBiLCBQb2xpbyknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgYmI+XG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPXt2YWNjaW5lQ29sdW1uV2lkdGh9IGJsPlxuICAgICAgICAgICAgICA8Q2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgUENWIHtzaG93RnVsbE5hbWUgPyAnKFBuZXVtb2NvY2N1cyBjb25qdWdhdGUgdmFjY2luZSknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBSViB7c2hvd0Z1bGxOYW1lID8gJyhSb3RhdmlydXMgdmFjY2luZSknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIE1NUlYge3Nob3dGdWxsTmFtZSA/ICcoTWVhc2xlcywgbXVtcHMsIHJ1YmVsbGEsIHZhcmljZWxsYSknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIE1DViB7c2hvd0Z1bGxOYW1lID8gJyhNZW5pbmdvY29jY3VzIGNvbmp1Z2F0ZSB2YWNjaW5lKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgYmI+XG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPXt2YWNjaW5lQ29sdW1uV2lkdGh9IGJsPlxuICAgICAgICAgICAgICA8Q2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgUENWIHtzaG93RnVsbE5hbWUgPyAnKFBuZXVtb2NvY2N1cyBjb25qdWdhdGUgdmFjY2luZSknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBUZGFwLUlQViB7c2hvd0Z1bGxOYW1lID8gJyhUZXRhbnVzLCBEaXBodGhlcmlhLCBQZXJ0dXNzaXMsIFBvbGlvKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBIQlYge3Nob3dGdWxsTmFtZSA/ICcoSGVwYXRpdGlzIEIpJyA6ICcnfVxuICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIEhQViB7c2hvd0Z1bGxOYW1lID8gJyhIdW1hbiBwYXBpbGxvbWEgdmlydXMpJyA6ICcnfVxuICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIFRkYXAge3Nob3dGdWxsTmFtZSA/ICcoVGV0YW51cywgRGlwaHRoZXJpYSwgUGVydHVzc2lzKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxUZXh0PkluZmx1ZW56YSAoUUlWIG9yIFFBSVYpIHZhY2NpbmF0aW9uIGlzIHJlY29tbWVuZGVkIGV2ZXJ5IGZhbGwgZm9yIGFueW9uZSBhZ2VkIDYgbW9udGhzIG9yIG9sZGVyLjwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9XG4pKEN1c3RvbVBhZ2VTY2hlZHVsZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VTY2hlZHVsZS9DdXN0b21QYWdlU2NoZWR1bGUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFibGUuY3NzJ1xuXG5jb25zdCBSb3cgPSAoe1xuICBiYiA9IGZhbHNlLFxuICBidCA9IGZhbHNlLFxuICBiciA9IGZhbHNlLFxuICBibCA9IGZhbHNlLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lcyA9IFtzdHlsZXMuUm93XVxuICBpZiAoYnQpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5idCkgfVxuICBpZiAoYmIpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5iYikgfVxuICBpZiAoYmwpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5ibCkgfVxuICBpZiAoYnIpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5icikgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDb2x1bW4gPSAoe1xuICBiYiA9IGZhbHNlLFxuICBidCA9IGZhbHNlLFxuICBiciA9IGZhbHNlLFxuICBibCA9IGZhbHNlLFxuICB3aWR0aCxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgbGV0IHN0eWxlID0ge31cbiAgaWYgKHdpZHRoID09PSAnc3RyZXRjaCcpIHtcbiAgICBzdHlsZS5mbGV4ID0gMVxuICB9IGVsc2Uge1xuICAgIHN0eWxlLndpZHRoID0gd2lkdGhcbiAgfVxuXG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5Db2x1bW5dXG4gIGlmIChidCkgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJ0KSB9XG4gIGlmIChiYikgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJiKSB9XG4gIGlmIChibCkgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJsKSB9XG4gIGlmIChicikgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLmJyKSB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfVxuICAgICAgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBDZWxsID0gKHtcbiAgaGVhZGluZyA9IGZhbHNlLFxuICBmaWxsZWQgPSBmYWxzZSxcbiAgYWxpZ24gPSAnY2VudGVyJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgbGV0IHN0eWxlID0ge1xuICAgIHRleHRBbGlnbjogYWxpZ25cbiAgfVxuXG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5DZWxsXVxuICBpZiAoaGVhZGluZykgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkNlbGxfaGVhZGluZykgfVxuICBpZiAoZmlsbGVkKSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQ2VsbF9maWxsZWQpIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7Um93LCBDb2x1bW4sIENlbGx9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJSb3dcIjpcIlRhYmxlX19Sb3dfX18xWWxtaVwiLFwiQ29sdW1uXCI6XCJUYWJsZV9fQ29sdW1uX19falRRY3FcIixcIkNlbGxcIjpcIlRhYmxlX19DZWxsX19fMjg5RldcIixcIkNlbGxfaGVhZGluZ1wiOlwiVGFibGVfX0NlbGxfaGVhZGluZ19fXzNIdGxsXCIsXCJDZWxsX2ZpbGxlZFwiOlwiVGFibGVfX0NlbGxfZmlsbGVkX19fMm01Si1cIixcImJiXCI6XCJUYWJsZV9fYmJfX18xejRwX1wiLFwiYnRcIjpcIlRhYmxlX19idF9fXzEwV1FOXCIsXCJiclwiOlwiVGFibGVfX2JyX19fM1UzcjZcIixcImJsXCI6XCJUYWJsZV9fYmxfX18xdlNVM1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gODA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgSGVhZGluZzEgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMSdcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL1R5cG9ncmFwaHkvQ29udGVudCdcbmltcG9ydCBJbmZvIGZyb20gJy4uL1R5cG9ncmFwaHkvSW5mbydcbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi9Db21tZW50cydcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4uL1VJL0xpbmtCdXR0b24nXG5cbmNvbnN0IEFydGljbGVQYWdlID0gKHtcbiAgYXJ0aWNsZSxcbiAgcGFyYW1zXG59KSA9PiB7XG4gIGNvbnN0IGJhY2tMaW5rID0gcGFyYW1zLnN1YnNlY3Rpb25VcmxcbiAgICA/IGAvJHtwYXJhbXMuc2VjdGlvblVybH0vJHtwYXJhbXMuc3Vic2VjdGlvblVybH1gXG4gICAgOiBgLyR7cGFyYW1zLnNlY3Rpb25Vcmx9YFxuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICB7YXJ0aWNsZS5hcnRpY2xlVHlwZSA9PT0gJ2Jsb2dwb3N0J1xuICAgICAgICA/IChcbiAgICAgICAgICA8QmxvY2sgbj17MC41fT5cbiAgICAgICAgICAgIDxJbmZvPlBvc3RlZCBvbiA8VGltZSB2YWx1ZT17bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpfSBmb3JtYXQ9XCJNTU0gRG8sIGg6bUFcIiAvPiBieSB7YXJ0aWNsZS5sYXN0TW9kaWZpZWRCeX08L0luZm8+XG4gICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgKVxuICAgICAgICA6ICcnXG4gICAgICB9XG4gICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgIDxIZWFkaW5nMT57YXJ0aWNsZS50aXRsZX08L0hlYWRpbmcxPlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICA8Q29udGVudCB0ZXh0PXthcnRpY2xlLmNvbnRlbnR9IC8+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICA8QmxvY2sgbj17YXJ0aWNsZS5hcnRpY2xlVHlwZSA9PT0gJ2Jsb2dwb3N0JyA/IDQgOiAwfT5cbiAgICAgICAgPExpbmtCdXR0b24gdG89e2JhY2tMaW5rfT4mIzE3MTsgQmFjayB0byB0aGUgbGlzdDwvTGlua0J1dHRvbj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIHthcnRpY2xlLmFydGljbGVUeXBlID09PSAnYmxvZ3Bvc3QnXG4gICAgICAgID8gPENvbW1lbnRzIGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgIDogJydcbiAgICAgIH1cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcbiAgICBjb25zdCBhcnRpY2xlID0gc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmluZChhID0+IGEudXJsID09PSBwYXJhbXMuYXJ0aWNsZVVybClcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlXG4gICAgfVxuICB9XG4pKEFydGljbGVQYWdlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXJ0aWNsZVBhZ2UvQXJ0aWNsZVBhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vQ29tbWVudCdcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuLi9Db21tZW50Rm9ybSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbW1lbnRzLmNzcydcblxuY29uc3QgQ29tbWVudHMgPSAoe1xuICBhcnRpY2xlXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCbG9jayBuPXs2fT5cbiAgICAgICAgPENvbW1lbnRGb3JtIGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICB7YXJ0aWNsZS5jb21tZW50cy5sZW5ndGggPiAwXG4gICAgICAgID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudHN9PlxuICAgICAgICAgICAgPEJsb2NrIG49ezEuNX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudHNfX3RpdGxlfT5Db21tZW50czwvZGl2PlxuICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgPEJsb2NrIG49ezEuNX0+XG4gICAgICAgICAgICAgIHthcnRpY2xlLmNvbW1lbnRzLm1hcCgoYywgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgPENvbW1lbnRcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgY29tbWVudD17Y30gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgOiAnJ1xuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQge0Jsb2NrLCBMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL1R5cG9ncmFwaHkvQ29udGVudCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21tZW50LmNzcydcbmltcG9ydCBDb21tZW50UmVwbHkgZnJvbSAnLi4vQ29tbWVudFJlcGx5J1xuaW1wb3J0IENvbW1lbnRSZXBseUZvcm0gZnJvbSAnLi4vQ29tbWVudFJlcGx5Rm9ybSdcbmltcG9ydCB7TGlua0J1dHRvbn0gZnJvbSAnLi4vVUknXG5cbmNsYXNzIENvbW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudG9nZ2xlRm9ybSA9IHRoaXMudG9nZ2xlRm9ybS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1JlcGx5Rm9ybTogZmFsc2VcbiAgICB9XG4gIH1cblxuICB0b2dnbGVGb3JtICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dSZXBseUZvcm06ICF0aGlzLnN0YXRlLnNob3dSZXBseUZvcm1cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y29tbWVudCwgYXJ0aWNsZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qgc29ydGVkUmVwbGllcyA9IGNvbW1lbnQucmVwbGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICBpZiAoYS5jcmVhdGVkQXQgPiBiLmNyZWF0ZWRBdCkge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH0gZWxzZSBpZiAoYS5jcmVhdGVkQXQgPCBiLmNyZWF0ZWRBdCkge1xuICAgICAgICByZXR1cm4gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IGZvcm0gPSAnJ1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dSZXBseUZvcm0pIHtcbiAgICAgIGZvcm0gPSAoXG4gICAgICAgIDxCbG9jayBuPXtjb21tZW50LnJlcGxpZXMubGVuZ3RoID8gNCA6IDB9PlxuICAgICAgICAgIDxDb21tZW50UmVwbHlGb3JtXG4gICAgICAgICAgICBjYW5jZWxDYWxsYmFjaz17KCkgPT4gdGhpcy50b2dnbGVGb3JtKCl9XG4gICAgICAgICAgICBjb21tZW50PXtjb21tZW50fVxuICAgICAgICAgICAgYXJ0aWNsZUlkPXthcnRpY2xlLl9pZH0gLz5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgcmVwbGllcyA9ICcnXG4gICAgaWYgKGNvbW1lbnQucmVwbGllcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXBsaWVzID0gKFxuICAgICAgICA8TGlzdCBuPXsyfT5cbiAgICAgICAgICB7c29ydGVkUmVwbGllcy5tYXAoKHIsIGluZGV4KSA9PlxuICAgICAgICAgICAgPExpc3RJdGVtIG49ezJ9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8Q29tbWVudFJlcGx5IHJlcGx5PXtyfSAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudH0+XG4gICAgICAgIDxCbG9jayBuPXt0aGlzLnN0YXRlLnNob3dSZXBseUZvcm0gfHwgY29tbWVudC5yZXBsaWVzLmxlbmd0aCA+IDAgPyAzIDogMH0+XG4gICAgICAgICAgPEJsb2NrIG49ezAuNX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRfX2luZm99PmJ5IHtjb21tZW50LmNyZWF0ZWRCeX0gb24gPFRpbWUgdmFsdWU9e2NvbW1lbnQuY3JlYXRlZEF0fSBmb3JtYXQ9XCJNTU0gRG8sIGg6bUFcIiAvPjwvZGl2PlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8Q29udGVudCB0ZXh0PXtjb21tZW50LmNvbnRlbnR9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxMaW5rQnV0dG9uIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRm9ybX0+UmVwbHkgdG8gdGhpcyBjb21tZW50PC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudF9fcmVwbGllc30+XG4gICAgICAgICAge2Zvcm19XG5cbiAgICAgICAgICB7cmVwbGllc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvbW1lbnRcIjpcIkNvbW1lbnRfX0NvbW1lbnRfX19DTFMyd1wiLFwiQ29tbWVudF9faW5mb1wiOlwiQ29tbWVudF9fQ29tbWVudF9faW5mb19fXzFyb29sXCIsXCJDb21tZW50X19yZXBsaWVzXCI6XCJDb21tZW50X19Db21tZW50X19yZXBsaWVzX19fUFhMWFJcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21tZW50UmVwbHkuY3NzJ1xuXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBDb21tZW50UmVwbHkgPSAoe1xuICByZXBseVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudFJlcGx5fT5cbiAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRSZXBseV9faW5mb30+Ynkge3JlcGx5LmNyZWF0ZWRCeX0gb24gPFRpbWUgdmFsdWU9e3JlcGx5LmNyZWF0ZWRBdH0gZm9ybWF0PVwiTU1NIERvLCBoOm1BXCIgLz48L2Rpdj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxDb250ZW50IHRleHQ9e3JlcGx5LmNvbnRlbnR9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFJlcGx5XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvbW1lbnRSZXBseVwiOlwiQ29tbWVudFJlcGx5X19Db21tZW50UmVwbHlfX18xdkVhbVwiLFwiQ29tbWVudFJlcGx5X19pbmZvXCI6XCJDb21tZW50UmVwbHlfX0NvbW1lbnRSZXBseV9faW5mb19fXzJnTHQ1XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtCbG9jaywgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vVUkvVGV4dEFyZWEnXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuLi9VSS9MaW5rQnV0dG9uJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24nXG5pbXBvcnQgTGFiZWxlZElucHV0IGZyb20gJy4uL0xheW91dHMvTGFiZWxlZElucHV0J1xuXG5pbXBvcnQge2NyZWF0ZVJlcGx5fSBmcm9tICcuLi8uLi9zdG9yZS9yZXBsaWVzQWN0aW9ucydcblxuY2xhc3MgQ29tbWVudFJlcGx5Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29udGVudDogJydcbiAgICAgIH0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnMsIGlzVXBkYXRpbmd9ID0gbmV3UHJvcHMuY29tbWVudC5uZXdSZXBseVxuXG4gICAgaWYgKCFpc1VwZGF0aW5nKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDAgJiYgZXJyb3JzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29udGVudDogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXJyb3JzLCB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBuZXdEYXRhLFxuICAgICAgZXJyb3JzOiBuZXdFcnJvcnNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICBjb25zdCB7Y3JlYXRlUmVwbHksIGNhbmNlbENhbGxiYWNrfSA9IHRoaXMucHJvcHNcblxuICAgIGNyZWF0ZVJlcGx5KHRoaXMuc3RhdGUuZGF0YSlcbiAgICBjYW5jZWxDYWxsYmFjaygpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtjb21tZW50OiB7bmV3UmVwbHk6IHtpc1VwZGF0aW5nfX0sIGNhbmNlbENhbGxiYWNrfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2sgbj17MS41fT5cbiAgICAgICAgICA8TGFiZWxlZElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgcmVwbHlcIlxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICBpbnB1dD17KFxuICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9eyh2KSA9PiB0aGlzLmNoYW5nZSgnY29udGVudCcsIHYpfSAvPlxuICAgICAgICAgICAgKX0gLz5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8TGlzdElubGluZSBuPXsyfT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17Mn0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ30+UG9zdCByZXBseTwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17Mn0+XG4gICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxDYWxsYmFja30+Q2FuY2VsPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBudWxsLFxuICAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge2FydGljbGVJZCwgY29tbWVudH0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZVJlcGx5OiBkYXRhID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlUmVwbHkoZGF0YSwgYXJ0aWNsZUlkLCBjb21tZW50Ll9pZCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKENvbW1lbnRSZXBseUZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHlGb3JtL0NvbW1lbnRSZXBseUZvcm0uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vVUkvVGV4dEFyZWEnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbidcbmltcG9ydCBMYWJlbGVkSW5wdXQgZnJvbSAnLi4vTGF5b3V0cy9MYWJlbGVkSW5wdXQnXG5cbmltcG9ydCB7Y3JlYXRlQ29tbWVudH0gZnJvbSAnLi4vLi4vc3RvcmUvY29tbWVudHNBY3Rpb25zJ1xuXG5jbGFzcyBDb21tZW50Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29udGVudDogJydcbiAgICAgIH0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnMsIGlzVXBkYXRpbmd9ID0gbmV3UHJvcHMuYXJ0aWNsZS5uZXdDb21tZW50XG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVDb21tZW50fSA9IHRoaXMucHJvcHNcblxuICAgIGNyZWF0ZUNvbW1lbnQodGhpcy5zdGF0ZS5kYXRhKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7YXJ0aWNsZToge25ld0NvbW1lbnQ6IHtpc1VwZGF0aW5nfX19ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICA8TGFiZWxlZElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlBvc3QgYSBjb21tZW50XCJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgaW5wdXQ9eyhcbiAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ2NvbnRlbnQnLCB2KX0gLz5cbiAgICAgICAgICAgICl9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfT5Qb3N0IGNvbW1lbnQ8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBudWxsLFxuICAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge2FydGljbGV9ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVDb21tZW50OiBkYXRhID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlQ29tbWVudChkYXRhLCBhcnRpY2xlLl9pZCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKENvbW1lbnRGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ29tbWVudEZvcm0vQ29tbWVudEZvcm0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ29tbWVudHNcIjpcIkNvbW1lbnRzX19Db21tZW50c19fXzRXT1Q2XCIsXCJDb21tZW50c19fdGl0bGVcIjpcIkNvbW1lbnRzX19Db21tZW50c19fdGl0bGVfX18zYlZJMFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvQ29tbWVudHMuY3NzXG4gKiogbW9kdWxlIGlkID0gODEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7c2V0U2VhcmNoUXVlcnksIGZldGNoU2VhcmNoUmVzdWx0c30gZnJvbSAnLi4vLi4vc3RvcmUvc2VhcmNoQWN0aW9ucydcbmltcG9ydCBTZWFyY2hSZXN1bHRzSXRlbSBmcm9tICcuLi9TZWFyY2hSZXN1bHRzSXRlbSdcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSAnLi4vVUknXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoUmVzdWx0cy5jc3MnXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0xpc3QnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgSGVhZGluZzEgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMSdcblxuY2xhc3MgU2VhcmNoUmVzdWx0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCB7c2V0U2VhcmNoUXVlcnl9ID0gdGhpcy5wcm9wc1xuXG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVMZWF2ZUhvb2sodGhpcy5wcm9wcy5yb3V0ZSwgKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUXVlcnkoJycpXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge2ZldGNoU2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUXVlcnksIHF1ZXJ5LCBsb2NhdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoIXF1ZXJ5ICYmIGxvY2F0aW9uLnF1ZXJ5LnEpIHtcbiAgICAgIHNldFNlYXJjaFF1ZXJ5KGxvY2F0aW9uLnF1ZXJ5LnEpXG4gICAgfVxuXG4gICAgZmV0Y2hTZWFyY2hSZXN1bHRzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2ZldGNoU2VhcmNoUmVzdWx0cywgcXVlcnl9ID0gbmV3UHJvcHNcblxuICAgIGlmIChxdWVyeSAhPT0gdGhpcy5wcm9wcy5xdWVyeSkge1xuICAgICAgZmV0Y2hTZWFyY2hSZXN1bHRzKClcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpdGVtcywgcXVlcnksIGxvY2F0aW9uLCBpc0ZldGNoaW5nLCBsYXlvdXR9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGJveFNpemUgPSAwXG4gICAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgY2FzZSAnbSc6XG4gICAgICAgIGJveFNpemUgPSA0XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdsJzpcbiAgICAgIGNhc2UgJ3hsJzpcbiAgICAgICAgYm94U2l6ZSA9IDhcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgbGF5b3V0IHR5cGUgJHtsYXlvdXR9YClcbiAgICB9XG5cbiAgICBpZiAoaXNGZXRjaGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxXcmFwcGVyIG1heFdpZHRoPVwiNTBcIj5cbiAgICAgICAgICAgIDxCb3ggbj17Ym94U2l6ZX0+XG4gICAgICAgICAgICAgIDxCbG9jayBuPXszfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZzEgdW5kZXJsaW5lPntpdGVtcy5sZW5ndGh9IHBhZ2VzIG1lbnRpb24gJ3txdWVyeX0nPC9IZWFkaW5nMT5cbiAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICA8TGlzdCBuPXszfT5cbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKHAgPT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXszfSBrZXk9e3Aub2JqZWN0SUR9PlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoUmVzdWx0c0l0ZW0gaXRlbT17cH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW1wdHlTZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW1wdHlTZWFyY2hSZXN1bHRzX190ZXh0fT5cbiAgICAgICAgICAgICAgV2UgY291bGQgbm90IGZpbmQgPHN0cm9uZz4ne2xvY2F0aW9uLnF1ZXJ5LnF9Jzwvc3Ryb25nPiBvbiBvdXIgd2Vic2l0ZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgU2VhcmNoUmVzdWx0c1dpdGhSb3V0ZXIgPSB3aXRoUm91dGVyKFNlYXJjaFJlc3VsdHMpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuc2VhcmNoLmlzRmV0Y2hpbmcsXG4gICAgICBpdGVtczogc3RhdGUuc2VhcmNoLml0ZW1zLFxuICAgICAgcXVlcnk6IHN0YXRlLnNlYXJjaC5xdWVyeSxcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldFNlYXJjaFF1ZXJ5OiAocSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRTZWFyY2hRdWVyeShxKSlcbiAgICAgIH0sXG4gICAgICBmZXRjaFNlYXJjaFJlc3VsdHM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hSZXN1bHRzKCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFNlYXJjaFJlc3VsdHNXaXRoUm91dGVyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL1R5cG9ncmFwaHkvQ29udGVudCdcbmltcG9ydCBIZWFkaW5nMiBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcyJ1xuaW1wb3J0IEluZm8gZnJvbSAnLi4vVHlwb2dyYXBoeS9JbmZvJ1xuaW1wb3J0IExpbmtCdXR0b24gZnJvbSAnLi4vVUkvTGlua0J1dHRvbidcblxuY29uc3QgU2VhcmNoUmVzdWx0c0l0ZW0gPSAoe1xuICBpdGVtXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkaW5nMj57aXRlbS50aXRsZX08L0hlYWRpbmcyPlxuICAgICAgPENvbnRlbnQgdGV4dD17aXRlbS5fc25pcHBldFJlc3VsdC5jb250ZW50LnZhbHVlfSAvPlxuICAgICAgPExpbmtCdXR0b24gdG89e2AvJHtpdGVtLnVybH1gfT57aXRlbS51cmx9PC9MaW5rQnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHNJdGVtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzSXRlbS9TZWFyY2hSZXN1bHRzSXRlbS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWFyY2hSZXN1bHRzXCI6XCJTZWFyY2hSZXN1bHRzX19TZWFyY2hSZXN1bHRzX19fMkpmbDlcIixcIkVtcHR5U2VhcmNoUmVzdWx0c1wiOlwiU2VhcmNoUmVzdWx0c19fRW1wdHlTZWFyY2hSZXN1bHRzX19fRjN4U1ZcIixcIkVtcHR5U2VhcmNoUmVzdWx0c19fdGV4dFwiOlwiU2VhcmNoUmVzdWx0c19fRW1wdHlTZWFyY2hSZXN1bHRzX190ZXh0X19fbC0xU09cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvU2VhcmNoUmVzdWx0cy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7dXBkYXRlVXNlcn0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9MYXlvdXRzL1dyYXBwZXInXG5pbXBvcnQgQm94IGZyb20gJy4uL0xheW91dHMvQm94J1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi9VSS9UZXh0SW5wdXQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbidcbmltcG9ydCBIZWFkaW5nMiBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcyJ1xuXG5jbGFzcyBDaGFuZ2VQYXNzd29yZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yczoge30sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2huYWdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBpc1VwZGF0aW5nfSA9IG5ld1Byb3BzLnVzZXJcblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBzdWJtaXQgKCkge1xuICAgIGNvbnN0IHt1cGRhdGVQYXNzd29yZCwgY3VycmVudFVzZXJ9ID0gdGhpcy5wcm9wc1xuXG4gICAgdXBkYXRlUGFzc3dvcmQoY3VycmVudFVzZXIuaWQsIHRoaXMuc3RhdGUuZGF0YSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzVXBkYXRpbmd9ID0gdGhpcy5wcm9wcy51c2VyXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgbWF4V2lkdGg9XCIyNVwiPlxuICAgICAgICA8Qm94IG49ezh9PlxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxIZWFkaW5nMj5DaGFuZ2UgcGFzc3dvcmQ8L0hlYWRpbmcyPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIk5ldyBwYXNzd29yZDpcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9eyh2KSA9PiB0aGlzLmNoYW5nZSgncGFzc3dvcmQnLCB2KX0gLz5cbiAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdWJtaXR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfT5VcGRhdGUgcGFzc3dvcmQ8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5hdXRoLnVzZXIsXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgY29uc3QgYmFja2xpbmsgPSAnLydcblxuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVQYXNzd29yZDogKGlkLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVVzZXIoaWQsIHBheWxvYWQsIGJhY2tsaW5rKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQ2hhbmdlUGFzc3dvcmQpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9DaGFuZ2VQYXNzd29yZC9DaGFuZ2VQYXNzd29yZC5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvdGVhbS5kZmIyOTE0Mjk2YjZkNWQ1YThkZmQ3ZTVhZDhjNGEzNC5qcGdcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L3RlYW0uanBnXG4gKiogbW9kdWxlIGlkID0gODMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nXCI6XCJMaXN0T2ZBcnRpY2xlc19fSGVhZGluZ19fXzJpTU5yXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MaXN0T2ZBcnRpY2xlcy9MaXN0T2ZBcnRpY2xlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFIQTtBQVBBO0FBREE7QUFEQTs7Ozs7OztBQ3BCQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWhCQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBTkE7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQW5DQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWJBO0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQXFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFJQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVDQTtBQThDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZCQTtBQXlCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvS0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWEE7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBWEE7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQXBFQTtBQUNBO0FBc0VBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFTQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDcERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDckNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7O0FDL0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBOzs7Ozs7OztBQzlCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBV0E7QUFaQTtBQWVBO0FBQ0E7Ozs7Ozs7O0FDbENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBTUE7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQVBBO0FBU0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FDdkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBREE7QUFpQkE7QUFDQTs7Ozs7Ozs7QUN4QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBMUJBO0FBQ0E7QUE0QkE7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFUQTtBQURBO0FBa0JBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBdkNBO0FBQ0E7QUF5Q0E7Ozs7Ozs7QUM5Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBYUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVZBO0FBREE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQTVCQTtBQURBO0FBREE7QUF1Q0E7QUF4Q0E7QUEyQ0E7Ozs7QUF0R0E7QUFDQTtBQXdHQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBVEE7QUFZQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVBBO0FBUEE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BO0FBN0JBO0FBREE7QUFEQTtBQTJDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFTQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFiQTtBQW1CQTs7OztBQW5EQTtBQUNBO0FBcURBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7QUM1RUE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7O0FDdkNBO0FBQ0E7Ozs7Ozs7QUNEQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQURBO0FBREE7QUFEQTtBQWlCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7OztBQ3hDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBM0JBO0FBOEJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQXpCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBZEE7QUFDQTtBQUVBO0FBQUE7QUFlQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFtQkE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBTUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFtQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBREE7QUFEQTtBQURBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQURBO0FBREE7QUFEQTtBQURBO0FBY0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBTUE7QUFkQTtBQURBO0FBREE7QUFxQkE7QUF0QkE7QUFEQTtBQTBCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBNUZBO0FBTEE7QUFDQTtBQURBO0FBbUdBOzs7O0FBOUdBO0FBQ0E7QUFnSEE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUNsSUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFKQTtBQWVBOzs7O0FBN0JBO0FBQ0E7QUErQkE7Ozs7Ozs7QUNwQ0E7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBWkE7QUFjQTs7OztBQWxCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVRBO0FBWEE7QUE2QkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZBO0FBYUE7QUFwQkE7QUFMQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFkQTtBQURBO0FBREE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDL0tBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFQQTtBQURBO0FBWUE7QUFuQkE7QUFzQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFIQTtBQUFBO0FBREE7QUFRQTtBQUNBOzs7Ozs7OztBQ2pCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQ0E7QUFRQTtBQUNBO0FBYkE7QUFjQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFWQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFWQTtBQWZBO0FBOEJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQWJBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFiQTtBQWxCQTtBQURBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFWQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBakJBO0FBc0JBOzs7O0FBM0tBO0FBQ0E7QUE2S0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7QUN0TUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTs7OztBQS9DQTtBQUNBO0FBaURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDQTtBQUNBO0FBb0NBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWJBO0FBZ0JBO0FBekJBO0FBREE7QUFEQTtBQUxBO0FBQ0E7QUFzQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFiQTtBQUhBO0FBRkE7QUFEQTtBQURBO0FBREE7QUE2QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQWZBO0FBa0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFyQkE7QUFEQTtBQURBO0FBREE7QUFtQ0E7QUFqRUE7QUFvRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7Ozs7Ozs7Ozs7QUMvTEE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFDQTtBQWNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBZkE7QUFEQTtBQVhBO0FBd0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7O0FDbEZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFEQTtBQUhBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFEQTtBQVBBO0FBMU9BO0FBaVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExUUE7QUFEQTtBQStRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUN6VEE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7O0FDN0VBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFyQkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBTEE7QUFQQTtBQTBCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFMQTtBQVFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQWJBO0FBb0JBOzs7O0FBM0VBO0FBQ0E7QUE2RUE7Ozs7Ozs7QUN4RkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBTEE7QUFRQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQVhBO0FBWUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFUQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQVBBO0FBZEE7QUE0QkE7Ozs7QUFyRkE7QUFDQTtBQXVGQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQVhBO0FBWUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVRBO0FBYUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFkQTtBQW1CQTs7OztBQTNFQTtBQUNBO0FBNkVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7O0FDbEdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFMQTtBQURBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFEQTtBQU1BO0FBQ0E7QUFDQTs7OztBQTdFQTtBQUNBO0FBK0VBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFDQTtBQU1BO0FBQ0E7QUFYQTtBQVlBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBVkE7QUFMQTtBQURBO0FBdUJBOzs7O0FBL0VBO0FBQ0E7QUFpRkE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7OztBQzVHQTs7Ozs7OztBQ0FBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9