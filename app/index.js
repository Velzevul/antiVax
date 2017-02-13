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

	var _SubsectionContainer = __webpack_require__(674);

	var _SubsectionContainer2 = _interopRequireDefault(_SubsectionContainer);

	var _SectionContainer = __webpack_require__(794);

	var _SectionContainer2 = _interopRequireDefault(_SectionContainer);

	var _ArticlePage = __webpack_require__(807);

	var _ArticlePage2 = _interopRequireDefault(_ArticlePage);

	var _SearchResults = __webpack_require__(816);

	var _SearchResults2 = _interopRequireDefault(_SearchResults);

	var _ChangePassword = __webpack_require__(819);

	var _ChangePassword2 = _interopRequireDefault(_ChangePassword);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { onUpdate: function onUpdate() {
	        return window.scrollTo(0, 0);
	      }, history: _reactRouter.browserHistory },
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
	      if (windowWidth >= 700 && windowWidth < 1024) {
	        layout = 'm';
	      } else if (windowWidth >= 1024 && windowWidth < 1300) {
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

	var _MainNav = __webpack_require__(670);

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
	    value: function doSearch(e) {
	      e.preventDefault();
	      _reactRouter.browserHistory.push('/search?q=' + this.state.query);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        { onSubmit: this.doSearch,
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
	              hasPrefix: true },
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

	var _ListOfArticles = __webpack_require__(669);

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
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading":"ListOfArticles__Heading___2iMNr"};

/***/ },

/***/ 670:
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

	var _Select = __webpack_require__(671);

	var _Select2 = _interopRequireDefault(_Select);

	var _Flex = __webpack_require__(611);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _MainNav = __webpack_require__(673);

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

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Select = __webpack_require__(672);

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

/***/ 672:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Select":"Select__Select___1rPbL","Select__fake":"Select__Select__fake___3wkdd","Select__input":"Select__Select__input___r7ey7","Select_inverse":"Select__Select_inverse___1kD9E"};

/***/ },

/***/ 673:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Navigation":"MainNav__Navigation___DD3ft","Navigation__item":"MainNav__Navigation__item___1g_6T","Navigation__item_active":"MainNav__Navigation__item_active___2iXCQ","Navigation__item_parent_active":"MainNav__Navigation__item_parent_active___2mNO8","Subnavigation":"MainNav__Subnavigation___5GroH","Subnavigation__item":"MainNav__Subnavigation__item___3tcZ4","Subnavigation__item_active":"MainNav__Subnavigation__item_active___2Wmgu"};

/***/ },

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _ArticlesPage = __webpack_require__(675);

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

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(676);

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

	var _Heading = __webpack_require__(781);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Heading3 = __webpack_require__(667);

	var _Heading4 = _interopRequireDefault(_Heading3);

	var _Heading5 = __webpack_require__(783);

	var _Heading6 = _interopRequireDefault(_Heading5);

	var _Content = __webpack_require__(785);

	var _Content2 = _interopRequireDefault(_Content);

	var _Info = __webpack_require__(787);

	var _Info2 = _interopRequireDefault(_Info);

	var _LinkButton = __webpack_require__(630);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _AskQuestion = __webpack_require__(789);

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
	      articlesGridSize = 1;
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

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(782);

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

/***/ 782:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading1":"Heading1__Heading1___3RGJF","Heading1_link":"Heading1__Heading1_link___1iSlt","Heading1_underline":"Heading1__Heading1_underline___1INkw"};

/***/ },

/***/ 783:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(784);

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

/***/ 784:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading3":"Heading3__Heading3___1kigK","Heading3Link":"Heading3__Heading3Link___1JCmL"};

/***/ },

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Content = __webpack_require__(786);

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

/***/ 786:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Content":"Content__Content___2RQ0U"};

/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Info = __webpack_require__(788);

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

/***/ 788:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Info":"Info__Info___2Zp46"};

/***/ },

/***/ 789:
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

	var _Content = __webpack_require__(785);

	var _Content2 = _interopRequireDefault(_Content);

	var _Signature = __webpack_require__(790);

	var _Signature2 = _interopRequireDefault(_Signature);

	var _QuestionForm = __webpack_require__(792);

	var _QuestionForm2 = _interopRequireDefault(_QuestionForm);

	var _AskQuestion = __webpack_require__(793);

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

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Signature = __webpack_require__(791);

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

/***/ 791:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Signature":"Signature__Signature___11CnF"};

/***/ },

/***/ 792:
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

/***/ 793:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AskQuestion":"AskQuestion__AskQuestion___3Bk1-","AskQuestion__header":"AskQuestion__AskQuestion__header___7CQ_o","AskQuestion__body":"AskQuestion__AskQuestion__body___2DCYy"};

/***/ },

/***/ 794:
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

	var _ArticlesPage = __webpack_require__(675);

	var _ArticlesPage2 = _interopRequireDefault(_ArticlesPage);

	var _CustomPageHome = __webpack_require__(795);

	var _CustomPageHome2 = _interopRequireDefault(_CustomPageHome);

	var _CustomPageAbout = __webpack_require__(799);

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

/***/ 795:
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

	var _Signature = __webpack_require__(790);

	var _Signature2 = _interopRequireDefault(_Signature);

	var _QuestionForm = __webpack_require__(792);

	var _QuestionForm2 = _interopRequireDefault(_QuestionForm);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(781);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Heading3 = __webpack_require__(667);

	var _Heading4 = _interopRequireDefault(_Heading3);

	var _HeadingLined = __webpack_require__(796);

	var _HeadingLined2 = _interopRequireDefault(_HeadingLined);

	var _Content = __webpack_require__(785);

	var _Content2 = _interopRequireDefault(_Content);

	var _ListOfArticles = __webpack_require__(664);

	var _ListOfArticles2 = _interopRequireDefault(_ListOfArticles);

	var _Button = __webpack_require__(628);

	var _Button2 = _interopRequireDefault(_Button);

	var _CustomPageHome = __webpack_require__(798);

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
	                  _react2.default.createElement(_Content2.default, { text: '\n                      <p>We know there’s a lot of info about childhood vaccination out there, and some of it can be confusing or conflicting. Our goal is to provide parents with reliable, evidence-based, up-to-date information about childhood vaccinations, and more importantly, to help you sort through the information you are finding, whether on our site or somewhere else.</p>\n                      <p>Feel free to browse around our site! If you can’t find the information you’re looking for, or you would rather just ask your question directly to me, send it in and I will email you back.</p>\n                    ' })
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

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _HeadingLined = __webpack_require__(797);

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

/***/ 797:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"HeadingLined":"HeadingLined__HeadingLined___PAq13","HeadingLined__title":"HeadingLined__HeadingLined__title___1ue4l"};

/***/ },

/***/ 798:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"WelcomeSection":"CustomPageHome__WelcomeSection___3G5DK","WelcomeSection__body":"CustomPageHome__WelcomeSection__body___2NnLW"};

/***/ },

/***/ 799:
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

	var _HeadingLined = __webpack_require__(796);

	var _HeadingLined2 = _interopRequireDefault(_HeadingLined);

	var _Content = __webpack_require__(785);

	var _Content2 = _interopRequireDefault(_Content);

	var _CustomPageAbout = __webpack_require__(800);

	var _CustomPageAbout2 = _interopRequireDefault(_CustomPageAbout);

	var _team = __webpack_require__(801);

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
	            _react2.default.createElement(_Content2.default, { text: '\n                  <p>This project was conceived based on the experiences of Dr. Potter when she was a new parent interacting with other new parents around vaccines, which involved similar questions she would answer for parents in her family practice. This motivated her to create the Vaccine Answers website for plain language information about vaccines for Manitoba parents, with an added “ask a question” feature to address issues that may be difficult for parents to find reliable information about.</p>\n                  <p>Based on the available evidence, we strongly feel that the benefits of vaccination greatly outweigh the risks for the vast majority of people, but we are not here to tell parents whether or not to vaccinate their children. Our goal is to provide reliable, evidence-based, up-to-date information about vaccination (both the pros and the cons) to help parents make their own decisions.</p>\n                  <p>The first phase of this study is designed to refine this website for parents\' use. It was funded by grants from the <a href="http://mmsf.ca/">Manitoba Medical Services Foundation</a> and <a href="http://www.wpgfdn.org/">The Winnipeg Foundation</a>. The second phase of this study will look at the effectiveness of the website to reduce parents\' hesitancy around childhood vaccination.</p>\n                  <p>Please note that we provide general information, not medical advice, on this site. If you have questions specific to your child, we will refer you to your primary care provider. (For example, “what are the side effects of the chicken pox vaccine?” is a question we can answer. “Should my child get the chicken pox vaccine?” should be directed to your health care provider.)</p>\n                ' })
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
	          _react2.default.createElement(_Content2.default, { text: '\n                <p><strong>Jen Potter MD B.Sc. CCFP</strong> is a family physician at Kildonan Medical Centre, where she teaches family medicine residents and other learners in the Department of Family Medicine with the University of Manitoba. She is the study lead for this project, which was born out of her experience as both a doctor and as a parent. Dr. Potter’s role as site moderator is to generate and maintain the information presented, to ensure that all information is based on proven evidence, and to answer questions from parents.</p>\n                <p><strong>S. Michelle Driedger</strong> is a Professor and Canada Research Chair in Environment and Health Risk Communication in the Department of Community Health Sciences at the University of Manitoba. There is a great deal of confusing and conflicting information out there, and fundamentally better communication and access to credible information is needed for Manitobans to feel comfortable in the decisions they make for themselves and their families. Dr. Driedger’s main area of research involves understanding people’s concerns about different public health issues and the recommendations that health professionals provide. In this project, she is working with parents involved in the testing phase of the website and for providing general guidance on plain language content.</p>\n                <p><strong>Ryan Maier</strong> is a research analyst and study coordinator in the Department of Community Health Sciences at the University of Manitoba. His current main areas of research and interest are in health history and policy as well as the factors that influence people’s beliefs and attitudes towards health topics, such as vaccines. His role in this project is to coordinate all aspects of the project’s procedures and in working with parents who are testing the website.</p>\n                ' })
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

/***/ 800:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AboutSection":"CustomPageAbout__AboutSection___3eneO","AboutSection__img":"CustomPageAbout__AboutSection__img___1JbQA","AboutSection__caption":"CustomPageAbout__AboutSection__caption___28bHJ"};

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/team.dfb2914296b6d5d5a8dfd7e5ad8c4a34.jpg";

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

	var _Heading = __webpack_require__(781);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Text = __webpack_require__(803);

	var _Text2 = _interopRequireDefault(_Text);

	var _Table = __webpack_require__(805);

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

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Text = __webpack_require__(804);

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

/***/ 804:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Text":"Text__Text___lWYAF"};

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Cell = exports.Column = exports.Row = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(806);

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

/***/ 806:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Row":"Table__Row___1Ylmi","Column":"Table__Column___jTQcq","Cell":"Table__Cell___289FW","Cell_heading":"Table__Cell_heading___3Htll","Cell_filled":"Table__Cell_filled___2m5J-","bb":"Table__bb___1z4p_","bt":"Table__bt___10WQN","br":"Table__br___3U3r6","bl":"Table__bl___1vSU3"};

/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(676);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Heading = __webpack_require__(781);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Content = __webpack_require__(785);

	var _Content2 = _interopRequireDefault(_Content);

	var _Info = __webpack_require__(787);

	var _Info2 = _interopRequireDefault(_Info);

	var _Comments = __webpack_require__(808);

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

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Layouts = __webpack_require__(609);

	var _Comment = __webpack_require__(809);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _CommentForm = __webpack_require__(814);

	var _CommentForm2 = _interopRequireDefault(_CommentForm);

	var _Comments = __webpack_require__(815);

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

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(676);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Layouts = __webpack_require__(609);

	var _Content = __webpack_require__(785);

	var _Content2 = _interopRequireDefault(_Content);

	var _Comment = __webpack_require__(810);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _CommentReply = __webpack_require__(811);

	var _CommentReply2 = _interopRequireDefault(_CommentReply);

	var _CommentReplyForm = __webpack_require__(813);

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

/***/ 810:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comment":"Comment__Comment___CLS2w","Comment__info":"Comment__Comment__info___1rool","Comment__replies":"Comment__Comment__replies___PXLXR"};

/***/ },

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(676);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _CommentReply = __webpack_require__(812);

	var _CommentReply2 = _interopRequireDefault(_CommentReply);

	var _Content = __webpack_require__(785);

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

/***/ 812:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CommentReply":"CommentReply__CommentReply___1vEam","CommentReply__info":"CommentReply__CommentReply__info___2gLt5"};

/***/ },

/***/ 813:
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

/***/ 814:
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

/***/ 815:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comments":"Comments__Comments___4WOT6","Comments__title":"Comments__Comments__title___3bVI0"};

/***/ },

/***/ 816:
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

	var _SearchResultsItem = __webpack_require__(817);

	var _SearchResultsItem2 = _interopRequireDefault(_SearchResultsItem);

	var _UI = __webpack_require__(606);

	var _SearchResults = __webpack_require__(818);

	var _SearchResults2 = _interopRequireDefault(_SearchResults);

	var _List = __webpack_require__(614);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Wrapper = __webpack_require__(657);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Box = __webpack_require__(663);

	var _Box2 = _interopRequireDefault(_Box);

	var _Heading = __webpack_require__(781);

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


	      this.updateTimeoutId = null;

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
	        clearTimeout(this.updateTimeoutId);
	        this.updateTimeoutId = setTimeout(function () {
	          fetchSearchResults();
	        }, 500);
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

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Block = __webpack_require__(610);

	var _Block2 = _interopRequireDefault(_Block);

	var _Content = __webpack_require__(785);

	var _Content2 = _interopRequireDefault(_Content);

	var _Heading = __webpack_require__(667);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Info = __webpack_require__(787);

	var _Info2 = _interopRequireDefault(_Info);

	var _LinkButton = __webpack_require__(630);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _SearchResultsItem = __webpack_require__(833);

	var _SearchResultsItem2 = _interopRequireDefault(_SearchResultsItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SearchResultsItem = function SearchResultsItem(_ref) {
	  var item = _ref.item;

	  return _react2.default.createElement(
	    'div',
	    { className: _SearchResultsItem2.default.SearchResultsItem },
	    _react2.default.createElement(
	      _Heading2.default,
	      null,
	      item.title
	    ),
	    _react2.default.createElement(
	      _Info2.default,
	      null,
	      item.url
	    ),
	    _react2.default.createElement(
	      _Block2.default,
	      { n: 0.5 },
	      _react2.default.createElement(_Content2.default, { text: item._snippetResult.content.value })
	    ),
	    _react2.default.createElement(
	      _LinkButton2.default,
	      { to: '' + item.url },
	      '» Go to the page'
	    )
	  );
	};

	exports.default = SearchResultsItem;

/***/ },

/***/ 818:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SearchResults":"SearchResults__SearchResults___2Jfl9","EmptySearchResults":"SearchResults__EmptySearchResults___F3xSV","EmptySearchResults__text":"SearchResults__EmptySearchResults__text___l-1SO"};

/***/ },

/***/ 819:
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

/***/ 833:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SearchResultsItem":"SearchResultsItem__SearchResultsItem___2dBdH"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2NvbW1lbnRzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3JlcGxpZXNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VhcmNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hbGdvbGlhU2VhcmNoLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvdXNlcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvdXNlcnNBY3Rpb25zLmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlY3Rpb25zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlY3Rpb25zQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VpUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VpQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwQ29udGFpbmVyL0FwcENvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVUkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGF5b3V0cy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvRmxleC9GbGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvR3JpZC9HcmlkLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwL1dyYXAuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0lucHV0RGVjb3JhdG9yL0lucHV0RGVjb3JhdG9yLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYWJlbGVkSW5wdXQvTGFiZWxlZElucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xhYmVsZWRJbnB1dC9MYWJlbGVkSW5wdXQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvQnJlYWRjcnVtYnMvQnJlYWRjcnVtYnMuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTGlua0J1dHRvbi9MaW5rQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9MaW5rL0xpbmsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0xpbmsvTGluay5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9jYWxlL0xvY2FsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9jYWxlL0xvY2FsZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcHBlci9XcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1cnJlbnRVc2VyL0N1cnJlbnRVc2VyLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvbG9nby5zdmciLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0JveC9Cb3guanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MaXN0T2ZBcnRpY2xlcy9MaXN0T2ZBcnRpY2xlcy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvTGluay9MaW5rLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0xpbmsvTGluay5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xpc3RPZkFydGljbGVzL0xpc3RPZkFydGljbGVzLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTWFpbk5hdi9NYWluTmF2LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdi9NYWluTmF2LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU3Vic2VjdGlvbkNvbnRhaW5lci9TdWJzZWN0aW9uQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZXNQYWdlL0FydGljbGVzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzEvSGVhZGluZzEuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzEvSGVhZGluZzEuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9Db250ZW50L0NvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQ29udGVudC9Db250ZW50LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9JbmZvL0luZm8uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSW5mby9JbmZvLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXNrUXVlc3Rpb24vQXNrUXVlc3Rpb24uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TaWduYXR1cmUvU2lnbmF0dXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWduYXR1cmUvU2lnbmF0dXJlLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25Gb3JtL1F1ZXN0aW9uRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXNrUXVlc3Rpb24vQXNrUXVlc3Rpb24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uQ29udGFpbmVyL1NlY3Rpb25Db250YWluZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZ0xpbmVkL0hlYWRpbmdMaW5lZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nTGluZWQvSGVhZGluZ0xpbmVkLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VBYm91dC9DdXN0b21QYWdlQWJvdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VBYm91dC9DdXN0b21QYWdlQWJvdXQuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VBYm91dC90ZWFtLmpwZyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZVNjaGVkdWxlL0N1c3RvbVBhZ2VTY2hlZHVsZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvVGV4dC9UZXh0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L1RleHQvVGV4dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FydGljbGVQYWdlL0FydGljbGVQYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvQ29tbWVudHMuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbW1lbnRSZXBseS9Db21tZW50UmVwbHkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbW1lbnRSZXBseS9Db21tZW50UmVwbHkuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHlGb3JtL0NvbW1lbnRSZXBseUZvcm0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50Rm9ybS9Db21tZW50Rm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvQ29tbWVudHMuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1NlYXJjaFJlc3VsdHMuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzSXRlbS9TZWFyY2hSZXN1bHRzSXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ2hhbmdlUGFzc3dvcmQvQ2hhbmdlUGFzc3dvcmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNJdGVtL1NlYXJjaFJlc3VsdHNJdGVtLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSZWRpcmVjdCwgYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUnXG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9BcHBDb250YWluZXInXG5pbXBvcnQgU3Vic2VjdGlvbkNvbnRhaW5lciBmcm9tICcuL2NvbXBvbmVudHMvU3Vic2VjdGlvbkNvbnRhaW5lcidcbmltcG9ydCBTZWN0aW9uQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9uQ29udGFpbmVyJ1xuaW1wb3J0IEFydGljbGVQYWdlIGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlUGFnZSdcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzJ1xuaW1wb3J0IENoYW5nZVBhc3N3b3JkIGZyb20gJy4vY29tcG9uZW50cy9DaGFuZ2VQYXNzd29yZCdcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpXG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgb25VcGRhdGU9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX0gaGlzdG9yeT17YnJvd3Nlckhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHBDb250YWluZXJ9PlxuICAgICAgICA8SW5kZXhSZWRpcmVjdCB0bz1cImhvbWVcIiAvPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiY2hhbmdlLXBhc3N3b3JkXCIgY29tcG9uZW50PXtDaGFuZ2VQYXNzd29yZH0gLz5cblxuICAgICAgICA8Um91dGUgcGF0aD1cInNlYXJjaFwiIGNvbXBvbmVudD17U2VhcmNoUmVzdWx0c30gLz5cblxuICAgICAgICA8Um91dGUgcGF0aD1cIjpzZWN0aW9uVXJsXCIgY29tcG9uZW50PXtTZWN0aW9uQ29udGFpbmVyfT5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cImFydGljbGVzLzphcnRpY2xlVXJsXCIgY29tcG9uZW50PXtBcnRpY2xlUGFnZX0gLz5cblxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOnN1YnNlY3Rpb25VcmxcIiBjb21wb25lbnQ9e1N1YnNlY3Rpb25Db250YWluZXJ9PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJhcnRpY2xlcy86YXJ0aWNsZVVybFwiIGNvbXBvbmVudD17QXJ0aWNsZVBhZ2V9IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaW5kZXguanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdFJlZHVjZXInXG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtNaWRkbGV3YXJlXVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKClcbiAgbWlkZGxld2FyZS5wdXNoKGxvZ2dlcilcbn1cblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zdG9yZS5qc1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoUmVkdWNlcidcbmltcG9ydCBmbGFzaCBmcm9tICcuL2ZsYXNoUmVkdWNlcidcbmltcG9ydCBxdWVzdGlvbiBmcm9tICcuL3F1ZXN0aW9uc1JlZHVjZXInXG5pbXBvcnQgYXJ0aWNsZXMgZnJvbSAnLi9hcnRpY2xlUmVkdWNlcidcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9zZWFyY2hSZWR1Y2VyJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2Vyc1JlZHVjZXInXG5pbXBvcnQgc2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9uc1JlZHVjZXInXG5pbXBvcnQgdWkgZnJvbSAnLi91aVJlZHVjZXInXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aCxcbiAgZmxhc2gsXG4gIHF1ZXN0aW9uLFxuICBhcnRpY2xlcyxcbiAgc2VhcmNoLFxuICB1c2VyLFxuICBzZWN0aW9ucyxcbiAgdWlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcm9vdFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfQVVUSCwgTE9HSU4sIExPR09VVH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGF1dGggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmF1dGgsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVVUSDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuYXV0aCwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgTE9HSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH1cbiAgICBjYXNlIExPR09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBudWxsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hdXRoUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FVVEggPSAnUkVRVUVTVF9BVVRIJ1xuZXhwb3J0IGNvbnN0IExPR0lOID0gJ0xPR0lOJ1xuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdMT0dPVVQnXG5cbmNvbnN0IHJlcXVlc3RBdXRoID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQVVUSFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgZGlzcGF0Y2goe3R5cGU6IExPR09VVH0pXG4gIH1cbn1cblxuY29uc3QgbG9nSW4gPSAoXG4gIHVzZXJcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR0lOLFxuICAgIHVzZXJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoQ3JlZGVudGlhbHMgPSAoXG4gIGVtYWlsLFxuICBwYXNzd29yZFxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEF1dGgoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2F1dGgvYXV0aGVudGljYXRlLWNyZWRlbnRpYWxzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoVG9rZW4gPSAoXG4gIHRva2VuXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXV0aCgpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vYXV0aC9hdXRoZW50aWNhdGUtdG9rZW5gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdG9rZW5cbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicsIGpzb24uZGF0YS50b2tlbilcbiAgICAgICAgICBkaXNwYXRjaChsb2dJbihqc29uLmRhdGEudXNlcikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKGpzb24uZGF0YS5lcnJvciwgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hdXRoQWN0aW9ucy5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBTRVRfTUVTU0FHRSA9ICdTRVRfTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBVTlNFVF9NRVNTQUdFID0gJ1VOU0VUX01FU1NBR0UnXG5cbmNvbnN0IHNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlLFxuICB0aW1lb3V0SWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9NRVNTQUdFLFxuICAgIG1lc3NhZ2UsXG4gICAgbWVzc2FnZVR5cGUsXG4gICAgdGltZW91dElkXG4gIH1cbn1cblxuY29uc3QgdW5zZXRNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVU5TRVRfTUVTU0FHRVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmbGFzaE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1bnNldE1lc3NhZ2UoKSlcbiAgICB9LCAyMDAwKVxuXG4gICAgZGlzcGF0Y2goc2V0TWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlVHlwZSwgdCkpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9mbGFzaEFjdGlvbnMuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGF1dGg6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsXG4gIH0sXG4gIGZsYXNoOiB7XG4gICAgbWVzc2FnZTogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHRpbWVvdXRJZDogbnVsbFxuICB9LFxuICBxdWVzdGlvbjoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgYXJ0aWNsZXM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXVxuICB9LFxuICBuZXdDb21tZW50OiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBpdGVtczogW10sXG4gICAgcXVlcnk6ICcnXG4gIH0sXG4gIHVzZXI6IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBlcnJvcnM6IHt9XG4gIH0sXG4gIHNlY3Rpb25zOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgdWk6IHtcbiAgICB3aW5kb3dXaWR0aDogMCxcbiAgICBsYXlvdXQ6ICdzJyxcbiAgICB3aWR0aFRocmVzaG9sZDogOTYwLFxuICAgIG1haW5NZW51SXNPcGVuOiBmYWxzZVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvaW5pdGlhbFN0YXRlLmpzXG4gKiovIiwiaW1wb3J0IHtTRVRfTUVTU0FHRSwgVU5TRVRfTUVTU0FHRX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBmbGFzaCA9IChcbiAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIG1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLFxuICAgICAgICB0eXBlOiBhY3Rpb24ubWVzc2FnZVR5cGUsXG4gICAgICAgIHRpbWVvdXRJZDogYWN0aW9uLnRpbWVvdXRJZFxuICAgICAgfSlcbiAgICBjYXNlIFVOU0VUX01FU1NBR0U6XG4gICAgICBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dElkKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLmZsYXNoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmbGFzaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9RVUVTVElPTl9DUkVBVEUsIENPTkZJUk1fUVVFU1RJT05fQ1JFQVRFLCBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFfSBmcm9tICcuL3F1ZXN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBxdWVzdGlvbiA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUucXVlc3Rpb24sXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfUVVFU1RJT05fQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX1FVRVNUSU9OX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUucXVlc3Rpb24pXG4gICAgY2FzZSBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXN0aW9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcXVlc3Rpb25zUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9RVUVTVElPTl9DUkVBVEUgPSAnUkVRVUVTVF9RVUVTVElPTl9DUkVBVEUnXG5leHBvcnQgY29uc3QgQ09ORklSTV9RVUVTVElPTl9DUkVBVEUgPSAnQ09ORklSTV9RVUVTVElPTl9DUkVBVEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX1FVRVNUSU9OX0NSRUFURSA9ICdSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdENyZWF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1FVRVNUSU9OX0NSRUFURVxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1DcmVhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9RVUVTVElPTl9DUkVBVEVcbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX1FVRVNUSU9OX0NSRUFURSxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUXVlc3Rpb24gPSAoXG4gIGRhdGEsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9xdWVzdGlvbnMvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcXVlc3Rpb246IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKCkpXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UsICdsb2cnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBxdWVzdGlvbnMgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcXVlc3Rpb25zQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9BUlRJQ0xFUywgUkVDRUlWRV9BUlRJQ0xFU30gZnJvbSAnLi9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCB7UkVRVUVTVF9DT01NRU5UX0NSRUFURSwgQ09ORklSTV9DT01NRU5UX0NSRUFURSwgUkVKRUNUX0NPTU1FTlRfQ1JFQVRFfSBmcm9tICcuL2NvbW1lbnRzQWN0aW9ucydcbmltcG9ydCB7UkVRVUVTVF9SRVBMWV9DUkVBVEUsIENPTkZJUk1fUkVQTFlfQ1JFQVRFLCBSRUpFQ1RfUkVQTFlfQ1JFQVRFfSBmcm9tICcuL3JlcGxpZXNBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgSU5JVF9BUlRJQ0xFID0gJ0lOSVRfQVJUSUNMRSdcbmNvbnN0IElOSVRfQ09NTUVOVCA9ICdJTklUX0NPTU1FTlQnXG5cbmNvbnN0IG5ld0NvbW1lbnQgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0NPTU1FTlRfQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUpFQ1RfQ09NTUVOVF9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ09NTUVOVF9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLm5ld0NvbW1lbnQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IG5ld1JlcGx5ID0gKFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9SRVBMWV9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9SRVBMWV9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fUkVQTFlfQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5uZXdDb21tZW50KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBjb21tZW50ID0gKFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSU5JVF9DT01NRU5UOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbi5jb21tZW50LCB7XG4gICAgICAgIG5ld1JlcGx5OiBuZXdSZXBseShPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUubmV3Q29tbWVudCksIGFjdGlvbilcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFOlxuICAgICAgaWYgKHN0YXRlLl9pZCA9PT0gYWN0aW9uLmNvbW1lbnRJZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmNvbW1lbnQsIHtcbiAgICAgICAgICBuZXdSZXBseTogbmV3UmVwbHkoT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLm5ld0NvbW1lbnQpLCBhY3Rpb24pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIENPTkZJUk1fUkVQTFlfQ1JFQVRFOlxuICAgICAgaWYgKHN0YXRlLl9pZCA9PT0gYWN0aW9uLmNvbW1lbnRJZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBuZXdSZXBseTogbmV3UmVwbHkoc3RhdGUubmV3UmVwbHksIGFjdGlvbiksXG4gICAgICAgICAgcmVwbGllczogW1xuICAgICAgICAgICAgLi4uc3RhdGUucmVwbGllcyxcbiAgICAgICAgICAgIGFjdGlvbi5yZXBseVxuICAgICAgICAgIF1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9SRVBMWV9DUkVBVEU6XG4gICAgY2FzZSBSRUpFQ1RfUkVQTFlfQ1JFQVRFOlxuICAgICAgaWYgKHN0YXRlLl9pZCA9PT0gYWN0aW9uLmNvbW1lbnRJZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBuZXdSZXBseTogbmV3UmVwbHkoc3RhdGUubmV3UmVwbHksIGFjdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBhcnRpY2xlID0gKFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgSU5JVF9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGFjdGlvbi5hcnRpY2xlLCB7XG4gICAgICAgIGNvbW1lbnRzOiBhY3Rpb24uYXJ0aWNsZS5jb21tZW50cy5tYXAoYyA9PiBjb21tZW50KHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IElOSVRfQ09NTUVOVCxcbiAgICAgICAgICBjb21tZW50OiBjXG4gICAgICAgIH0pKSxcbiAgICAgICAgbmV3Q29tbWVudDogbmV3Q29tbWVudChPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUubmV3Q29tbWVudCksIGFjdGlvbilcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFOlxuICAgICAgaWYgKHN0YXRlLl9pZCA9PT0gYWN0aW9uLmFydGljbGVJZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBuZXdDb21tZW50OiBuZXdDb21tZW50KHN0YXRlLm5ld0NvbW1lbnQsIGFjdGlvbiksXG4gICAgICAgICAgY29tbWVudHM6IFtcbiAgICAgICAgICAgIC4uLnN0YXRlLmNvbW1lbnRzLFxuICAgICAgICAgICAgY29tbWVudCh1bmRlZmluZWQsIHtcbiAgICAgICAgICAgICAgdHlwZTogSU5JVF9DT01NRU5ULFxuICAgICAgICAgICAgICBjb21tZW50OiBhY3Rpb24uY29tbWVudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfQ09NTUVOVF9DUkVBVEU6XG4gICAgY2FzZSBSRUpFQ1RfQ09NTUVOVF9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uYXJ0aWNsZUlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIG5ld0NvbW1lbnQ6IG5ld0NvbW1lbnQoc3RhdGUubmV3Q29tbWVudCwgYWN0aW9uKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX1JFUExZX0NSRUFURTpcbiAgICBjYXNlIENPTkZJUk1fUkVQTFlfQ1JFQVRFOlxuICAgIGNhc2UgUkVKRUNUX1JFUExZX0NSRUFURTpcbiAgICAgIGlmIChzdGF0ZS5faWQgPT09IGFjdGlvbi5hcnRpY2xlSWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgY29tbWVudHM6IHN0YXRlLmNvbW1lbnRzLm1hcChjID0+IGNvbW1lbnQoYywgYWN0aW9uKSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBhcnRpY2xlcyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuYXJ0aWNsZXMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVJUSUNMRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfQVJUSUNMRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMubWFwKGkgPT4gYXJ0aWNsZSh1bmRlZmluZWQsIHtcbiAgICAgICAgICB0eXBlOiBJTklUX0FSVElDTEUsXG4gICAgICAgICAgYXJ0aWNsZTogaVxuICAgICAgICB9KSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX0NPTU1FTlRfQ1JFQVRFOlxuICAgIGNhc2UgUkVKRUNUX0NPTU1FTlRfQ1JFQVRFOlxuICAgIGNhc2UgQ09ORklSTV9DT01NRU5UX0NSRUFURTpcbiAgICBjYXNlIFJFUVVFU1RfUkVQTFlfQ1JFQVRFOlxuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgY2FzZSBSRUpFQ1RfUkVQTFlfQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBhcnRpY2xlKGksIGFjdGlvbikpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2Jyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FSVElDTEVTID0gJ1JFUVVFU1RfQVJUSUNMRVMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9BUlRJQ0xFUyA9ICdSRUNFSVZFX0FSVElDTEVTJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdEFydGljbGVzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQVJUSUNMRVNcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlQXJ0aWNsZXMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX0FSVElDTEVTLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEFydGljbGVzKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hcnRpY2xlcy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVBcnRpY2xlcyhqc29uLmRhdGEuYXJ0aWNsZXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0NPTU1FTlRfQ1JFQVRFID0gJ1JFUVVFU1RfQ09NTUVOVF9DUkVBVEUnXG5leHBvcnQgY29uc3QgQ09ORklSTV9DT01NRU5UX0NSRUFURSA9ICdDT05GSVJNX0NPTU1FTlRfQ1JFQVRFJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9DT01NRU5UX0NSRUFURSA9ICdSRUpFQ1RfQ09NTUVOVF9DUkVBVEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKFxuICBhcnRpY2xlSWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQ09NTUVOVF9DUkVBVEUsXG4gICAgYXJ0aWNsZUlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9IChcbiAgY29tbWVudCxcbiAgYXJ0aWNsZUlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFLFxuICAgIGNvbW1lbnQsXG4gICAgYXJ0aWNsZUlkXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0Q3JlYXRlID0gKFxuICBlcnJvcnMsXG4gIGFydGljbGVJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0NPTU1FTlRfQ1JFQVRFLFxuICAgIGVycm9ycyxcbiAgICBhcnRpY2xlSWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudCA9IChcbiAgZGF0YSxcbiAgYXJ0aWNsZUlkLFxuICBzdWNjZXNzTWVzc2FnZVxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdENyZWF0ZShhcnRpY2xlSWQpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vYXJ0aWNsZXMvJHthcnRpY2xlSWR9L2NvbW1lbnRzL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbW1lbnQ6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKGpzb24uZGF0YS5jb21tZW50LCBhcnRpY2xlSWQpKVxuICAgICAgICAgIGlmIChzdWNjZXNzTWVzc2FnZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKHN1Y2Nlc3NNZXNzYWdlLCAnbG9nJykpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgY29uc3QgcHJvcENvbXBvbmVudHMgPSBwcm9wLnNwbGl0KCcuJylcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRQcm9wID0gcHJvcENvbXBvbmVudHNbcHJvcENvbXBvbmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIHBheWxvYWRbY29tbWVudFByb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQsIGFydGljbGVJZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgcG9zdCBjb21tZW50IGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2NvbW1lbnRzQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9SRVBMWV9DUkVBVEUgPSAnUkVRVUVTVF9SRVBMWV9DUkVBVEUnXG5leHBvcnQgY29uc3QgQ09ORklSTV9SRVBMWV9DUkVBVEUgPSAnQ09ORklSTV9SRVBMWV9DUkVBVEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX1JFUExZX0NSRUFURSA9ICdSRUpFQ1RfUkVQTFlfQ1JFQVRFJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdENyZWF0ZSA9IChcbiAgYXJ0aWNsZUlkLFxuICBjb21tZW50SWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUkVQTFlfQ1JFQVRFLFxuICAgIGFydGljbGVJZCxcbiAgICBjb21tZW50SWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKFxuICByZXBseSxcbiAgYXJ0aWNsZUlkLFxuICBjb21tZW50SWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fUkVQTFlfQ1JFQVRFLFxuICAgIHJlcGx5LFxuICAgIGFydGljbGVJZCxcbiAgICBjb21tZW50SWRcbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9ycyxcbiAgYXJ0aWNsZUlkLFxuICBjb21tZW50SWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9SRVBMWV9DUkVBVEUsXG4gICAgZXJyb3JzLFxuICAgIGFydGljbGVJZCxcbiAgICBjb21tZW50SWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUmVwbHkgPSAoXG4gIGRhdGEsXG4gIGFydGljbGVJZCxcbiAgY29tbWVudElkLFxuICBzdWNjZXNzTWVzc2FnZVxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdENyZWF0ZShhcnRpY2xlSWQsIGNvbW1lbnRJZCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hcnRpY2xlcy8ke2FydGljbGVJZH0vY29tbWVudHMvJHtjb21tZW50SWR9L3JlcGxpZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICByZXBseTogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLnJlcGx5LCBhcnRpY2xlSWQsIGNvbW1lbnRJZCkpXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UsICdsb2cnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wQ29tcG9uZW50cyA9IHByb3Auc3BsaXQoJy4nKVxuICAgICAgICAgICAgY29uc3QgcmVwbHlQcm9wID0gcHJvcENvbXBvbmVudHNbcHJvcENvbXBvbmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIHBheWxvYWRbcmVwbHlQcm9wXSA9IGpzb24uZGF0YS5lcnJvcnNbcHJvcF0ubWVzc2FnZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdENyZWF0ZShwYXlsb2FkLCBhcnRpY2xlSWQsIGNvbW1lbnRJZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgcG9zdCBjb21tZW50IGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3JlcGxpZXNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1NFQVJDSF9SRVNVTFRTLCBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTLFxuICBTRVRfU0VBUkNIX1FVRVJZfSBmcm9tICcuL3NlYXJjaEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzZWFyY2ggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNlYXJjaCxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9TRUFSQ0hfUkVTVUxUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtc1xuICAgICAgfSlcbiAgICBjYXNlIFNFVF9TRUFSQ0hfUVVFUlk6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcXVlcnk6IGFjdGlvbi5xdWVyeVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VhcmNoUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCBpbmRleCBmcm9tICcuL2FsZ29saWFTZWFyY2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NFQVJDSF9SRVNVTFRTID0gJ1JFUVVFU1RfU0VBUkNIX1JFU1VMVFMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUyA9ICdSRUNFSVZFX1NFQVJDSF9SRVNVTFRTJ1xuZXhwb3J0IGNvbnN0IFNFVF9TRUFSQ0hfUVVFUlkgPSAnU0VUX1NFQVJDSF9RVUVSWSdcblxuZXhwb3J0IGNvbnN0IHNldFNlYXJjaFF1ZXJ5ID0gKFxuICBxXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfU0VBUkNIX1FVRVJZLFxuICAgIHF1ZXJ5OiBxXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFNlYXJjaFJlc3VsdHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9TRUFSQ0hfUkVTVUxUU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTZWFyY2hSZXN1bHRzID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaFJlc3VsdHMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFNlYXJjaFJlc3VsdHMoKSlcblxuICAgIHJldHVybiBpbmRleC5zZWFyY2goZ2V0U3RhdGUoKS5zZWFyY2gucXVlcnksIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgIGRpc3BhdGNoKHJlY2VpdmVTZWFyY2hSZXN1bHRzKGNvbnRlbnQuaGl0cykpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlYXJjaEFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tICdhbGdvbGlhc2VhcmNoJ1xuXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCc3NFMxSk5CMVpUJywgJzNkZTZmZGJhZmM0NzdjZjAxOTY3M2JiODEwNDNhZTBkJylcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgncGFnZXMnKVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FsZ29saWFTZWFyY2guanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfVVBEQVRFX1VTRVIsIENPTkZJUk1fVVBEQVRFX1VTRVIsIFJFSkVDVF9VUERBVEVfVVNFUn0gZnJvbSAnLi91c2Vyc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCB1c2VyID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS51c2VyLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLnVzZXIpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS91c2Vyc1JlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbmltcG9ydCB7YnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX1VTRVIgPSAnUkVRVUVTVF9VUERBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9VU0VSID0gJ0NPTkZJUk1fVVBEQVRFX1VTRVInXG5leHBvcnQgY29uc3QgUkVKRUNUX1VQREFURV9VU0VSID0gJ1JFSkVDVF9VUERBVEVfVVNFUidcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RVcGRhdGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1VQREFURV9VU0VSLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybVVwZGF0ZSA9IChcbiAgaWQsXG4gIHVwZGF0ZWRJdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1VQREFURV9VU0VSLFxuICAgIGlkLFxuICAgIHVwZGF0ZWRJdGVtXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0VXBkYXRlID0gKFxuICBpZCxcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfVVBEQVRFX1VTRVIsXG4gICAgaWQsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAoXG4gIGlkLFxuICBkYXRhLFxuICBiYWNrbGlua1xuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVwZGF0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS91c2Vycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1VcGRhdGUoaWQsIGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1lvdXIgYWNjb3VudCBpbmZvcm1hdGlvbiBoYXMgYmVlbiB1cGRhdGVkJywgJ2xvZycpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0VXBkYXRlKGlkLCBwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCB1cGRhdGUgdXNlciBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3VzZXJzQWN0aW9ucy5qc3hcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfU0VDVElPTlMsIFJFQ0VJVkVfU0VDVElPTlN9IGZyb20gJy4vc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3Qgc2VjdGlvbnMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNlY3Rpb25zLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1NFQ1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1NFQ1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWN0aW9uc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlY3Rpb25zUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TRUNUSU9OUyA9ICdSRVFVRVNUX1NFQ1RJT05TJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfU0VDVElPTlMgPSAnUkVDRUlWRV9TRUNUSU9OUydcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RTZWN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1NFQ1RJT05TXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVNlY3Rpb25zID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9TRUNUSU9OUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlY3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RTZWN0aW9ucygpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vc2VjdGlvbnMvYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICBkaXNwYXRjaChyZWNlaXZlU2VjdGlvbnMoanNvbi5kYXRhLml0ZW1zKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWN0aW9uc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1NFVF9CUkVBS1BPSU5ULCBUT0dHTEVfTUFJTl9NRU5VfSBmcm9tICcuL3VpQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHVpID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS51aSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX0JSRUFLUE9JTlQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgd2luZG93V2lkdGg6IGFjdGlvbi53aWR0aCxcbiAgICAgICAgbGF5b3V0OiBhY3Rpb24ubGF5b3V0XG4gICAgICB9KVxuICAgIGNhc2UgVE9HR0xFX01BSU5fTUVOVTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtYWluTWVudUlzT3BlbjogIXN0YXRlLm1haW5NZW51SXNPcGVuXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1aVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3VpUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgU0VUX0JSRUFLUE9JTlQgPSAnU0VUX0JSRUFLUE9JTlQnXG5leHBvcnQgY29uc3QgVE9HR0xFX01BSU5fTUVOVSA9ICdUT0dHTEVfTUFJTl9NRU5VJ1xuXG5leHBvcnQgY29uc3Qgc2V0QnJlYWtwb2ludCA9IChcbiAgd2lkdGgsXG4gIGxheW91dFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0JSRUFLUE9JTlQsXG4gICAgd2lkdGgsXG4gICAgbGF5b3V0XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRvZ2dsZU1haW5NZW51ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFRPR0dMRV9NQUlOX01FTlVcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3VpQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7bG9naW5XaXRoVG9rZW59IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IHtmZXRjaEFydGljbGVzfSBmcm9tICcuLi8uLi9zdG9yZS9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCB7ZmV0Y2hTZWN0aW9uc30gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtzZXRCcmVha3BvaW50fSBmcm9tICcuLi8uLi9zdG9yZS91aUFjdGlvbnMnXG5cbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4nXG5pbXBvcnQgQXBwIGZyb20gJy4uL0FwcCdcblxuY2xhc3MgQXBwQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZVJlc2l6ZSAoKSB7XG4gICAgY29uc3Qge3NldEJyZWFrcG9pbnR9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gd2luZG93Lm91dGVyV2lkdGhcblxuICAgIGxldCBsYXlvdXQgPSAncydcbiAgICBpZiAod2luZG93V2lkdGggPj0gNzAwICYmIHdpbmRvd1dpZHRoIDwgMTAyNCkge1xuICAgICAgbGF5b3V0ID0gJ20nXG4gICAgfSBlbHNlIGlmICh3aW5kb3dXaWR0aCA+PSAxMDI0ICYmIHdpbmRvd1dpZHRoIDwgMTMwMCkge1xuICAgICAgbGF5b3V0ID0gJ2wnXG4gICAgfSBlbHNlIGlmICh3aW5kb3dXaWR0aCA+PSAxMzAwKSB7XG4gICAgICBsYXlvdXQgPSAneGwnXG4gICAgfVxuXG4gICAgc2V0QnJlYWtwb2ludCh3aW5kb3dXaWR0aCwgbGF5b3V0KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0aGlzLnByb3BzLmF0dGVtcHRUb2tlbih0b2tlbilcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpXG4gICAgdGhpcy5oYW5kbGVSZXNpemUoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge3VzZXIsIGZldGNoU2VjdGlvbnMsIGZldGNoQXJ0aWNsZXN9ID0gbmV3UHJvcHNcblxuICAgIGlmICh1c2VyICYmICF0aGlzLnByb3BzLnVzZXIpIHtcbiAgICAgIGZldGNoU2VjdGlvbnMoKVxuICAgICAgZmV0Y2hBcnRpY2xlcygpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNBdXRob3JpemluZywgaXNGZXRjaGluZywgdXNlciwgd2luZG93V2lkdGgsIHdpZHRoVGhyZXNob2xkLCBjaGlsZHJlbiwgbG9jYXRpb24sIHBhcmFtc30gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNBdXRob3JpemluZykge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIGlmIChpc0ZldGNoaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDxBcHAgdXNlcj17dXNlcn1cbiAgICAgICAgICAgIHdpZHRoPXt3aW5kb3dXaWR0aH1cbiAgICAgICAgICAgIHdpZHRoVGhyZXNob2xkPXt3aWR0aFRocmVzaG9sZH1cbiAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufSAvPlxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPExvZ2luIC8+XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgd2luZG93V2lkdGg6IHN0YXRlLnVpLndpbmRvd1dpZHRoLFxuICAgICAgd2lkdGhUaHJlc2hvbGQ6IHN0YXRlLnVpLndpZHRoVGhyZXNob2xkLFxuICAgICAgaXNGZXRjaGluZzogc3RhdGUuYXJ0aWNsZXMuaXNGZXRjaGluZyB8fCBzdGF0ZS5zZWN0aW9ucy5pc0ZldGNoaW5nLFxuICAgICAgaXNBdXRob3JpemluZzogc3RhdGUuYXV0aC5pc0ZldGNoaW5nLFxuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldEJyZWFrcG9pbnQ6ICh3aWR0aCwgbGF5b3V0KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldEJyZWFrcG9pbnQod2lkdGgsIGxheW91dCkpXG4gICAgICB9LFxuICAgICAgYXR0ZW1wdFRva2VuOiAodG9rZW4pID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5XaXRoVG9rZW4odG9rZW4pKVxuICAgICAgfSxcbiAgICAgIGZldGNoQXJ0aWNsZXM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hBcnRpY2xlcygpKVxuICAgICAgfSxcbiAgICAgIGZldGNoU2VjdGlvbnM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWN0aW9ucygpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShBcHBDb250YWluZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHBDb250YWluZXIvQXBwQ29udGFpbmVyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvYWRpbmcuY3NzJ1xuaW1wb3J0IHtTcGlubmVyfSBmcm9tICcuLi9VSSdcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxvYWRpbmd9PlxuICAgICAgPFNwaW5uZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTG9hZGluZ1wiOlwiTG9hZGluZ19fTG9hZGluZ19fXzNweWN6XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuY3NzXG4gKiogbW9kdWxlIGlkID0gNjA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCdcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICcuL0JyZWFkY3J1bWJzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4vTGlua0J1dHRvbidcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfSBmcm9tICcuL01vZGFsV2luZG93J1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJ1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vVGV4dEFyZWEnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4vVGV4dElucHV0J1xuXG5leHBvcnQge0xpbmtCdXR0b24sIFNwaW5uZXIsIEJ1dHRvbiwgTGluaywgVGV4dElucHV0LCBUZXh0QXJlYSwgQnJlYWRjcnVtYnMsIEFsZXJ0LFxuICBNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9VSS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsZXJ0LmNzcydcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IEFsZXJ0ID0gKHtcbiAgbWVzc2FnZSxcbiAgdGhlbWUgPSAnZGVmYXVsdCcsXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBtZXNzYWdlU3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VDbGFzc05hbWVzID0gW3N0eWxlcy5BbGVydF9fbWVzc2FnZV1cblxuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgbWVzc2FnZUNsYXNzTmFtZXMucHVzaChzdHlsZXMuQWxlcnRfX21lc3NhZ2VfZXJyb3IpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9kZWZhdWx0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFsZXJ0fT5cbiAgICAgIHttZXNzYWdlXG4gICAgICAgID8gPEJsb2NrPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e21lc3NhZ2VTdHlsZX0gY2xhc3NOYW1lPXttZXNzYWdlQ2xhc3NOYW1lcy5qb2luKCcgJyl9PnttZXNzYWdlfTwvZGl2PlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQWxlcnRcIjpcIkFsZXJ0X19BbGVydF9fXzM3X1FDXCIsXCJBbGVydF9fbWVzc2FnZVwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX19fMndDWkZcIixcIkFsZXJ0X19tZXNzYWdlX2RlZmF1bHRcIjpcIkFsZXJ0X19BbGVydF9fbWVzc2FnZV9kZWZhdWx0X19fbl9SOUNcIixcIkFsZXJ0X19tZXNzYWdlX2Vycm9yXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZXJyb3JfX18yaWQ0V1wiLFwiYWxlcnQtZW50ZXJcIjpcIkFsZXJ0X19hbGVydC1lbnRlcl9fX0s2SmRMXCIsXCJhbGVydC1lbnRlci1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1lbnRlci1hY3RpdmVfX18zdmxDd1wiLFwiYWxlcnQtbGVhdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZV9fXzJQcFlUXCIsXCJhbGVydC1sZWF2ZS1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZS1hY3RpdmVfX18yaGFfUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQmxvY2sgZnJvbSAnLi9CbG9jaydcbmltcG9ydCBGbGV4IGZyb20gJy4vRmxleCdcbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4vR3JpZCdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4vTGlzdCdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4vTGlzdElubGluZSdcbmltcG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9IGZyb20gJy4vTWVkaWEnXG5pbXBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fSBmcm9tICcuL1BhZ2UnXG5pbXBvcnQgV3JhcCBmcm9tICcuL1dyYXAnXG5pbXBvcnQgSW5wdXREZWNvcmF0b3IgZnJvbSAnLi9JbnB1dERlY29yYXRvcidcbmltcG9ydCBMYWJlbGVkSW5wdXQgZnJvbSAnLi9MYWJlbGVkSW5wdXQnXG5cbmV4cG9ydCB7QmxvY2ssIEZsZXgsIFdyYXAsIEdyaWQsIEdyaWRJdGVtLFxuICBMaXN0LCBMaXN0SXRlbSwgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW0sXG4gIE1lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlLFxuICBQYWdlLCBQYWdlQ29udGVudCwgSW5wdXREZWNvcmF0b3IsIExhYmVsZWRJbnB1dH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGF5b3V0cy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBCbG9jayA9ICh7XG4gIG4gPSAxLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgZmxleERpcmVjdGlvbiA9ICdyb3cnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9HcmlkLmNzcydcbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgR3JpZCA9ICh7XG4gIGd1dHRlckJvdHRvbSA9IDMsXG4gIGFsaWduSXRlbXMgPSAnc3RyZXRjaCcsXG4gIGp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nLFxuICBhbGlnbkNvbnRlbnQgPSAnc3BhY2UtYmV0d2VlbicsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgYWxpZ25Db250ZW50LFxuICAgIG1hcmdpbkJvdHRvbTogYC0ke2d1dHRlckJvdHRvbSAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLkdyaWR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdyaWRJdGVtID0gKHtcbiAgc3BhbiA9IDAsXG4gIG91dE9mID0gMTIsXG4gIGd1dHRlciA9IDMsXG4gIGd1dHRlckJvdHRvbSA9IDMsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBmbGV4OiAnMScsXG4gICAgbWFyZ2luQm90dG9tOiBgJHtndXR0ZXJCb3R0b20gKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICBpZiAoc3BhbiAmJiBvdXRPZikge1xuICAgIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHtcbiAgICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgICB3aWR0aDogc3BhbiA9PT0gb3V0T2YgPyAnMTAwJScgOiBgJHsxMDAgKiBzcGFuIC8gb3V0T2YgLSBndXR0ZXJ9JWBcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuR3JpZEl0ZW19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7R3JpZCwgR3JpZEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJHcmlkXCI6XCJHcmlkX19HcmlkX19fMjdxUG5cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvR3JpZC9HcmlkLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdC5jc3MnXG5cbmNvbnN0IExpc3QgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYC0ke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3R9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdF9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3QsIExpc3RJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdFwiOlwiTGlzdF9fbGlzdF9fXzJrQlVkXCIsXCJsaXN0X19pdGVtXCI6XCJMaXN0X19saXN0X19pdGVtX19fMUQyVkZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdElubGluZS5jc3MnXG5cbmNvbnN0IExpc3RJbmxpbmUgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGp1c3RmeUNvbnRlbnQgPSAnZmxleC1zdGFydCdcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYC0ke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGZ5Q29udGVudFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0SW5saW5lfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3VsPlxuICApXG59XG5cbmNvbnN0IExpc3RJbmxpbmVJdGVtID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaSBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmVfX2l0ZW19ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImxpc3RJbmxpbmVcIjpcIkxpc3RJbmxpbmVfX2xpc3RJbmxpbmVfX18zR2podVwiLFwibGlzdElubGluZV9faXRlbVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9faXRlbV9fXzJLMWtRXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lZGlhLmNzcydcblxuY29uc3QgTWVkaWEgPSAoe1xuICBhbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBhbGlnbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5tZWRpYX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFCb2R5ID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX19ib2R5fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNZWRpYUZpZ3VyZSA9ICh7XG4gIG4gPSAxLFxuICBubCA9IDAsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiBgJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgJHtiYXNlbGluZSAqIG5sfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLm1lZGlhX19maWd1cmV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1lZGlhXCI6XCJNZWRpYV9fbWVkaWFfX18zYTAwR1wiLFwibWVkaWFfX2ZpZ3VyZVwiOlwiTWVkaWFfX21lZGlhX19maWd1cmVfX18yNFp3QVwiLFwibWVkaWFfX2JvZHlcIjpcIk1lZGlhX19tZWRpYV9fYm9keV9fXzNWZDItXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQYWdlID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IHtQYWdlLCBQYWdlQ29udGVudH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgV3JhcCA9ICh7XG4gIHdpZHRoID0gJzk1JScsXG4gIG1heFdpZHRoID0gJzgwcmVtJywgLy8gMTI4MHB4IHByb3ZpZGVkIDFlbSA9PT0gMTZweFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGgsXG4gICAgbWF4V2lkdGgsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL1dyYXAvV3JhcC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dERlY29yYXRvci5jc3MnXG5cbmNvbnN0IElucHV0RGVjb3JhdG9yID0gKHtcbiAgaW5wdXQsXG4gIHN1ZmZpeCxcbiAgcHJlZml4ID0gbnVsbFxufSkgPT4ge1xuICBsZXQgcHJlZml4RWwgPSBudWxsXG4gIGlmIChwcmVmaXgpIHtcbiAgICBwcmVmaXhFbCA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXREZWNvcmF0b3JfX3ByZWZpeH0+e3ByZWZpeH08L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXREZWNvcmF0b3J9PlxuICAgICAge3ByZWZpeEVsfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0RGVjb3JhdG9yX19pbnB1dH0+XG4gICAgICAgIHtpbnB1dH1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0RGVjb3JhdG9yX19zdWZmaXh9PlxuICAgICAgICB7c3VmZml4fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXREZWNvcmF0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvSW5wdXREZWNvcmF0b3IvSW5wdXREZWNvcmF0b3IuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSW5wdXREZWNvcmF0b3JcIjpcIklucHV0RGVjb3JhdG9yX19JbnB1dERlY29yYXRvcl9fXzhvQ1ZtXCIsXCJJbnB1dERlY29yYXRvcl9fcHJlZml4XCI6XCJJbnB1dERlY29yYXRvcl9fSW5wdXREZWNvcmF0b3JfX3ByZWZpeF9fXzNtRnZIXCIsXCJJbnB1dERlY29yYXRvcl9faW5wdXRcIjpcIklucHV0RGVjb3JhdG9yX19JbnB1dERlY29yYXRvcl9faW5wdXRfX192blp3dlwiLFwiSW5wdXREZWNvcmF0b3JfX3N1ZmZpeFwiOlwiSW5wdXREZWNvcmF0b3JfX0lucHV0RGVjb3JhdG9yX19zdWZmaXhfX18zRWNLcVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9JbnB1dERlY29yYXRvci9JbnB1dERlY29yYXRvci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xhYmVsZWRJbnB1dC5jc3MnXG5cbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnXG5cbmNvbnN0IExhYmVsZWRJbnB1dCA9ICh7XG4gIGlucHV0LFxuICBsYWJlbCxcbiAgZXJyb3IgPSBmYWxzZSxcbiAgaW52ZXJzZSA9IGZhbHNlXG59KSA9PiB7XG4gIGxldCBjbGFzc2VzID0gW3N0eWxlcy5MYWJlbGVkSW5wdXRdXG4gIGlmIChpbnZlcnNlKSB7XG4gICAgY2xhc3Nlcy5wdXNoKHN0eWxlcy5MYWJlbGVkSW5wdXRfaW52ZXJzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5qb2luKCcgJyl9YH0+XG4gICAgICA8RmxleFxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTGFiZWxlZElucHV0X19sYWJlbH0+e2xhYmVsfTwvZGl2PlxuXG4gICAgICAgIHtlcnJvclxuICAgICAgICAgID8gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5MYWJlbGVkSW5wdXRfX2Vycm9yfT57ZXJyb3J9PC9kaXY+XG4gICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgICA8L0ZsZXg+XG5cbiAgICAgIHtpbnB1dH1cbiAgICA8L2xhYmVsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsZWRJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYWJlbGVkSW5wdXQvTGFiZWxlZElucHV0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxhYmVsZWRJbnB1dFwiOlwiTGFiZWxlZElucHV0X19MYWJlbGVkSW5wdXRfX18zX2wyUlwiLFwiTGFiZWxlZElucHV0X19sYWJlbFwiOlwiTGFiZWxlZElucHV0X19MYWJlbGVkSW5wdXRfX2xhYmVsX19fMl9lOXNcIixcIkxhYmVsZWRJbnB1dF9fZXJyb3JcIjpcIkxhYmVsZWRJbnB1dF9fTGFiZWxlZElucHV0X19lcnJvcl9fXzFHV29RXCIsXCJMYWJlbGVkSW5wdXRfaW52ZXJzZVwiOlwiTGFiZWxlZElucHV0X19MYWJlbGVkSW5wdXRfaW52ZXJzZV9fXzU4VTRSXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xhYmVsZWRJbnB1dC9MYWJlbGVkSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JyZWFkY3J1bWJzLmNzcydcblxuY29uc3QgQnJlYWRjcnVtYnMgPSAoe1xuICBpdGVtc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQnJlYWRjcnVtYnN9PlxuICAgICAge2l0ZW1zLm1hcChpID0+XG4gICAgICAgIDxMaW5rIHRvPXtpLnBhdGh9IGNsYXNzTmFtZT17c3R5bGVzLkJyZWFkY3J1bWJzX19pdGVtfT57aS5sYWJlbH08L0xpbms+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1bWJzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCcmVhZGNydW1ic1wiOlwiQnJlYWRjcnVtYnNfX0JyZWFkY3J1bWJzX19fMldMajBcIixcIkJyZWFkY3J1bWJzX19pdGVtXCI6XCJCcmVhZGNydW1ic19fQnJlYWRjcnVtYnNfX2l0ZW1fX18xRGF5SVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnJlYWRjcnVtYnMvQnJlYWRjcnVtYnMuY3NzXG4gKiogbW9kdWxlIGlkID0gNjI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrLFxuICB0byA9IG51bGwsXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIHRoZW1lID0gJ2FjY2VudDEnLFxuICBoYXNQcmVmaXggPSBmYWxzZSxcbiAgaGFzU3VmZml4ID0gZmFsc2Vcbn0pID0+IHtcbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkJ1dHRvbn1cbiAgICAgICAgJHt0aGVtZSA9PT0gJ2FjY2VudDEnID8gc3R5bGVzLkJ1dHRvbl9hY2NlbnQxIDogbnVsbH1cbiAgICAgICAgJHt0aGVtZSA9PT0gJ2FjY2VudDInID8gc3R5bGVzLkJ1dHRvbl9hY2NlbnQyIDogbnVsbH1cbiAgICAgICAgJHtoYXNQcmVmaXggPyBzdHlsZXMuQnV0dG9uX2hhc1ByZWZpeCA6IG51bGx9XG4gICAgICAgICR7aGFzU3VmZml4ID8gc3R5bGVzLkJ1dHRvbl9oYXNTdWZmaXggOiBudWxsfWB9XG4gICAgICAgIHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuQnV0dG9ufVxuICAgICAgICAke3RoZW1lID09PSAnYWNjZW50MScgPyBzdHlsZXMuQnV0dG9uX2FjY2VudDEgOiBudWxsfVxuICAgICAgICAke3RoZW1lID09PSAnYWNjZW50MicgPyBzdHlsZXMuQnV0dG9uX2FjY2VudDIgOiBudWxsfVxuICAgICAgICAke2hhc1ByZWZpeCA/IHN0eWxlcy5CdXR0b25faGFzUHJlZml4IDogbnVsbH1cbiAgICAgICAgJHtoYXNTdWZmaXggPyBzdHlsZXMuQnV0dG9uX2hhc1N1ZmZpeCA6IG51bGx9YH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCdXR0b25cIjpcIkJ1dHRvbl9fQnV0dG9uX19fUUk3YjJcIixcIkJ1dHRvbl9hY2NlbnQxXCI6XCJCdXR0b25fX0J1dHRvbl9hY2NlbnQxX19fMWRmaHdcIixcIkJ1dHRvbl9hY2NlbnQyXCI6XCJCdXR0b25fX0J1dHRvbl9hY2NlbnQyX19fWm44ejlcIixcIkJ1dHRvbl9oYXNQcmVmaXhcIjpcIkJ1dHRvbl9fQnV0dG9uX2hhc1ByZWZpeF9fX2l6S1pxXCIsXCJCdXR0b21faGFzU3VmZml4XCI6XCJCdXR0b25fX0J1dHRvbV9oYXNTdWZmaXhfX19IV1hsYVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlua0J1dHRvbi5jc3MnXG5cbmNvbnN0IExpbmtCdXR0b24gPSAoe1xuICBjaGlsZHJlbixcbiAgb25DbGljayxcbiAgdG8gPSBudWxsLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0aGVtZSA9ICdhY2NlbnQxJ1xufSkgPT4ge1xuICBpZiAodG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuTGlua0J1dHRvbn1cbiAgICAgICAgJHt0aGVtZSA9PT0gJ2FjY2VudDEnID8gc3R5bGVzLkxpbmtCdXR0b25fYWNjZW50MSA6IG51bGx9XG4gICAgICAgICR7dGhlbWUgPT09ICdhY2NlbnQyJyA/IHN0eWxlcy5MaW5rQnV0dG9uX2FjY2VudDIgOiBudWxsfWB9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgdG89e3RvfT57Y2hpbGRyZW59PC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5MaW5rQnV0dG9ufVxuICAgICAgICAke3RoZW1lID09PSAnYWNjZW50MScgPyBzdHlsZXMuTGlua0J1dHRvbl9hY2NlbnQxIDogbnVsbH1cbiAgICAgICAgJHt0aGVtZSA9PT0gJ2FjY2VudDInID8gc3R5bGVzLkxpbmtCdXR0b25fYWNjZW50MiA6IG51bGx9YH1cbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMaW5rQnV0dG9uXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX19fMkZsaW1cIixcIkxpbmtCdXR0b25fYWNjZW50MVwiOlwiTGlua0J1dHRvbl9fTGlua0J1dHRvbl9hY2NlbnQxX19fMmxjMVRcIixcIkxpbmtCdXR0b25fYWNjZW50MlwiOlwiTGlua0J1dHRvbl9fTGlua0J1dHRvbl9hY2NlbnQyX19fMXpmd09cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsV2luZG93LmNzcydcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgTW9kYWxXaW5kb3cgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgd2lkdGg6IDQwXG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke211bHRpcGxpZXJzLndpZHRoICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsfT5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvRmxleD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0hlYWRlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMixcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19oZWFkZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Qm9keSA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMyxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19fYm9keX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Rm9vdGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2Zvb3Rlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJNb2RhbFwiOlwiTW9kYWxXaW5kb3dfX01vZGFsX19fMmtsY2dcIixcIk1vZGFsV2luZG93XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX18ydFZ5WlwiLFwiTW9kYWxXaW5kb3dfX2hlYWRlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19oZWFkZXJfX18xUXJXSFwiLFwiTW9kYWxXaW5kb3dfX2JvZHlcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19fYm9keV9fXzNRdVFoXCIsXCJNb2RhbFdpbmRvd19fZm9vdGVyXCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2Zvb3Rlcl9fXzJJMFRGXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGluayBhcyBSb3V0ZXJMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaW5rLmNzcydcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBMaW5rID0gKHtcbiAgY2hpbGRyZW4sXG4gIHNtYWxsLFxuICB0byxcbiAgZGlzYWJsZWQsXG4gIG9uQ2xpY2ssXG4gIGhyZWYsXG4gIHRoZW1lID0gJ2FjY2VudDEnXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBmb250U2l6ZTogJzFyZW0nXG4gIH1cblxuICBpZiAoc21hbGwpIHtcbiAgICBzdHlsZSA9IHtcbiAgICAgIGZvbnRTaXplOiBgJHsxLjE2NyAqIGJhc2VsaW5lfXJlbWBcbiAgICB9XG4gIH1cblxuICBsZXQgY2xhc3NOYW1lID0gW11cbiAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkxpbmspXG4gIHN3aXRjaCAodGhlbWUpIHtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBjbGFzc05hbWUucHVzaChzdHlsZXMuTGlua19lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWNjZW50JzpcbiAgICBkZWZhdWx0OlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkxpbmtfYWNjZW50KVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIGlmICh0bykge1xuICAgIHJldHVybiA8Um91dGVyTGlua1xuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfWB9XG4gICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5MaW5rX2FjdGl2ZX1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIHRvPXt0b30+e2NoaWxkcmVufTwvUm91dGVyTGluaz5cbiAgfSBlbHNlIGlmIChvbkNsaWNrKSB7XG4gICAgcmV0dXJuIDxidXR0b25cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lLmpvaW4oJyAnKX1gfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgb25DbGljaz17b25DbGlja30+e2NoaWxkcmVufTwvYnV0dG9uPlxuICB9IGVsc2UgaWYgKGhyZWYpIHtcbiAgICByZXR1cm4gPGFcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZS5qb2luKCcgJyl9YH0+e2NoaWxkcmVufTwvYT5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9MaW5rL0xpbmsuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTGlua1wiOlwiTGlua19fTGlua19fXzNpc2dZXCIsXCJMaW5rX2FjY2VudFwiOlwiTGlua19fTGlua19hY2NlbnRfX19BODFISFwiLFwiTGlua19lcnJvclwiOlwiTGlua19fTGlua19lcnJvcl9fXzJoS0tjXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9MaW5rL0xpbmsuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcGlubmVyLmNzcydcblxuY29uc3QgU3Bpbm5lciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TcGlubmVyX19pbm5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTN9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU0fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTZ9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU3fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOH1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTl9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMH1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTExfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTJ9YH0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU3Bpbm5lclwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fXzFmaXlrXCIsXCJTcGlubmVyX19pbm5lclwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9faW5uZXJfX181OHZjVFwiLFwiU3Bpbm5lcl9fY2lyY2xlXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGVfX18yWnVnT1wiLFwic2stY2lyY2xlRmFkZURlbGF5XCI6XCJTcGlubmVyX19zay1jaXJjbGVGYWRlRGVsYXlfX18xRXRuOFwiLFwiU3Bpbm5lcl9fY2lyY2xlMVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMV9fX0JPRDduXCIsXCJTcGlubmVyX19jaXJjbGUyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUyX19fMmFCdHJcIixcIlNwaW5uZXJfX2NpcmNsZTNcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTNfX18xQmFaZlwiLFwiU3Bpbm5lcl9fY2lyY2xlNFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNF9fXzNWNXI3XCIsXCJTcGlubmVyX19jaXJjbGU1XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU1X19fM0RKNVhcIixcIlNwaW5uZXJfX2NpcmNsZTZcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTZfX19acFU1bVwiLFwiU3Bpbm5lcl9fY2lyY2xlN1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlN19fX1hwbks1XCIsXCJTcGlubmVyX19jaXJjbGU4XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU4X19fMV9SUlhcIixcIlNwaW5uZXJfX2NpcmNsZTlcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTlfX19mTzBPR1wiLFwiU3Bpbm5lcl9fY2lyY2xlMTBcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTEwX19fbmkzNUFcIixcIlNwaW5uZXJfX2NpcmNsZTExXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMV9fXzFoYXY5XCIsXCJTcGlubmVyX19jaXJjbGUxMlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTJfX18yaXB6VFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHthbmNob3JtZX0gZnJvbSAnYW5jaG9ybWUuanMnXG5pbXBvcnQgc3RyaXB0YWdzIGZyb20gJ3N0cmlwdGFncydcbmltcG9ydCBUZXh0YXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSdcblxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vSW5wdXRMYWJlbCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0QXJlYS5jc3MnXG5cbmNvbnN0IHBsYWluVG9IdG1sID0gKHRleHQpID0+IGA8cD4ke2FuY2hvcm1lLmpzKHRleHQucmVwbGFjZSgvXFxuL2csICc8YnIgLz4nKSl9PC9wPmBcbmNvbnN0IGh0bWxUb1BsYWluID0gKGh0bWwpID0+IHN0cmlwdGFncyhodG1sLnJlcGxhY2UoLzxiciBcXC8+L2csICdcXG4nKSlcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIG9uQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHBsYWluVG9IdG1sKHRoaXMuX2VsZW1lbnQudmFsdWUpXG4gICAgY29uc3Qge2NoYW5nZUNhbGxiYWNrfSA9IHRoaXMucHJvcHNcblxuICAgIGNoYW5nZUNhbGxiYWNrKHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7ZXJyb3IsIHZhbHVlLCBwbGFjZWhvbGRlciwgZGlzYWJsZWQgPSBmYWxzZX0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRleHRhcmVhIHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgdmFsdWU9e2h0bWxUb1BsYWluKHZhbHVlKX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuVGV4dEFyZWF9ICR7ZXJyb3IgPyBzdHlsZXMuVGV4dEFyZWFfZXJyb3IgOiBudWxsfWB9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgbWluUm93cz17NX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0TGFiZWwuY3NzJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgSW5wdXRMYWJlbCA9ICh7XG4gIGxhYmVsLFxuICBlcnJvclxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSW5wdXRMYWJlbH0gJHtlcnJvciA/IHN0eWxlcy5JbnB1dExhYmVsX2Vycm9yIDogJyd9YH0+XG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgID8gPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRMYWJlbF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB7ZXJyb3JcbiAgICAgICAgPyA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dExhYmVsX19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0TGFiZWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dExhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19fMUNlbUlcIixcIklucHV0TGFiZWxfX2xhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19sYWJlbF9fXzJZeV9QXCIsXCJJbnB1dExhYmVsX19lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9fZXJyb3JfX18yTUZOZFwiLFwiSW5wdXRMYWJlbF9lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9lcnJvcl9fXzNFcDVxXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUZXh0QXJlYVwiOlwiVGV4dEFyZWFfX1RleHRBcmVhX19fMTlpcDdcIixcIlRleHRBcmVhX2Vycm9yXCI6XCJUZXh0QXJlYV9fVGV4dEFyZWFfZXJyb3JfX18xVHVBelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0SW5wdXQuY3NzJ1xuXG5jbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIG9uQ2hhbmdlICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2VsZW1lbnQudmFsdWVcbiAgICBjb25zdCB7Y2hhbmdlQ2FsbGJhY2t9ID0gdGhpcy5wcm9wc1xuXG4gICAgY2hhbmdlQ2FsbGJhY2sodmFsdWUpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVycm9yLFxuICAgICAgdmFsdWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGhhc1ByZWZpeCA9IGZhbHNlLFxuICAgICAgaGFzU3VmZml4ID0gZmFsc2UsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgaW52ZXJzZSA9IGZhbHNlLFxuICAgICAgdHlwZSA9ICd0ZXh0J1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5UZXh0SW5wdXR9XG4gICAgICAgICAgJHtlcnJvciA/IHN0eWxlcy5UZXh0SW5wdXRfZXJyb3IgOiBudWxsfVxuICAgICAgICAgICR7aW52ZXJzZSA/IHN0eWxlcy5UZXh0SW5wdXRfaW52ZXJzZSA6IG51bGx9XG4gICAgICAgICAgJHtoYXNQcmVmaXggPyBzdHlsZXMuVGV4dElucHV0X3dpdGhQcmVmaXggOiBudWxsfVxuICAgICAgICAgICR7aGFzU3VmZml4ID8gc3R5bGVzLlRleHRJbnB1dF93aXRoU3VmZml4IDogbnVsbH1gfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUZXh0SW5wdXRcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X19fMUFDR1lcIixcIlRleHRJbnB1dF9lcnJvclwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfZXJyb3JfX18yZm5SblwiLFwiVGV4dElucHV0X2ludmVyc2VcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X2ludmVyc2VfX18zQS14OFwiLFwiVGV4dElucHV0X3dpdGhQcmVmaXhcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X3dpdGhQcmVmaXhfX18yLUd3M1wiLFwiVGV4dElucHV0X3dpdGhTdWZmaXhcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X3dpdGhTdWZmaXhfX18xWlROUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7RmxleCwgTGlzdCwgTGlzdEl0ZW0sIFBhZ2UsIFBhZ2VDb250ZW50fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXIsIFRleHRJbnB1dCwgQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCBGbGFzaE1lc3NhZ2UgZnJvbSAnLi4vRmxhc2hNZXNzYWdlJ1xuaW1wb3J0IHtsb2dpbldpdGhDcmVkZW50aWFsc30gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gdGhpcy5jaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWxFcnJvcjogJycsXG4gICAgICBwYXNzd29yZEVycm9yOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEZvcm0gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgZW1haWxFcnJvciA9ICcnXG4gICAgbGV0IHBhc3N3b3JkRXJyb3IgPSAnJ1xuXG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsID09PSAnJykge1xuICAgICAgZW1haWxFcnJvciA9ICdlbWFpbCBjYW5ub3QgYmUgZW1wdHknXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICBwYXNzd29yZEVycm9yID0gJ3Bhc3N3b3JkIGNhbm5vdCBiZSBibGFuaydcbiAgICB9XG5cbiAgICBpZiAoIWVtYWlsRXJyb3IgJiYgIXBhc3N3b3JkRXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKGxvZ2luV2l0aENyZWRlbnRpYWxzKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZW1haWxFcnJvcixcbiAgICAgICAgcGFzc3dvcmRFcnJvclxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VFbWFpbCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiB2YWx1ZSxcbiAgICAgIGVtYWlsRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFzc3dvcmQ6IHZhbHVlLFxuICAgICAgcGFzc3dvcmRFcnJvcjogJydcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNGZXRjaGluZ30gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhZ2U+XG4gICAgICAgIDxQYWdlQ29udGVudD5cbiAgICAgICAgICA8TW9kYWxXaW5kb3c+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfT5cbiAgICAgICAgICAgICAgPE1vZGFsV2luZG93SGVhZGVyPlxuICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+TG9naW48L0ZsZXg+XG4gICAgICAgICAgICAgIDwvTW9kYWxXaW5kb3dIZWFkZXI+XG5cbiAgICAgICAgICAgICAgPE1vZGFsV2luZG93Qm9keT5cbiAgICAgICAgICAgICAgICA8TGlzdCBuPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIG49ezEuNX0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsOlwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGNhc2V5QGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZW1haWxFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17dGhpcy5jaGFuZ2VFbWFpbH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZDpcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBCaWdTZWNyZXRcIlxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLnBhc3N3b3JkRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICA8L01vZGFsV2luZG93Qm9keT5cblxuICAgICAgICAgICAgICA8TW9kYWxXaW5kb3dGb290ZXI+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmV0Y2hpbmd9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvZ2luXCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9Nb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L01vZGFsV2luZG93PlxuICAgICAgICA8L1BhZ2VDb250ZW50PlxuXG4gICAgICAgIDxGbGFzaE1lc3NhZ2UgLz5cbiAgICAgIDwvUGFnZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmdcbiAgICB9XG4gIH1cbikoTG9naW4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0FsZXJ0fSBmcm9tICcuLi9VSSdcblxuY29uc3QgRmxhc2hNZXNzYWdlID0gKHtcbiAgbWVzc2FnZSxcbiAgdHlwZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBbGVydCBtZXNzYWdlPXttZXNzYWdlfSB0aGVtZT17dHlwZX0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLmZsYXNoLm1lc3NhZ2UsXG4gICAgICB0eXBlOiBzdGF0ZS5mbGFzaC50eXBlXG4gICAgfVxuICB9XG4pKEZsYXNoTWVzc2FnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJ1xuaW1wb3J0IEZsYXNoTWVzc2FnZSBmcm9tICcuLi9GbGFzaE1lc3NhZ2UnXG5pbXBvcnQgTWFpbk5hdiBmcm9tICcuLi9NYWluTmF2J1xuaW1wb3J0IHtQYWdlLCBQYWdlQ29udGVudH0gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgQXBwID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2F0aW9uLFxuICBwYXJhbXNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UGFnZT5cbiAgICAgIDxIZWFkZXIgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgPE1haW5OYXYgcGFyYW1zPXtwYXJhbXN9IC8+XG5cbiAgICAgIDxQYWdlQ29udGVudD5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9QYWdlQ29udGVudD5cblxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPEZsYXNoTWVzc2FnZSAvPlxuICAgIDwvUGFnZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FwcC9BcHAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9TZWFyY2hCYXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLmNzcydcbmltcG9ydCB7RmxleCwgTWVkaWEsIE1lZGlhRmlndXJlLCBNZWRpYUJvZHl9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgTG9jYWxlIGZyb20gJy4uL0xvY2FsZSdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMvR3JpZCdcbmltcG9ydCBDdXJyZW50VXNlciBmcm9tICcuLi9DdXJyZW50VXNlcidcblxuaW1wb3J0IGltZyBmcm9tICcuL2xvZ28uc3ZnJ1xuXG5jb25zdCBIZWFkZXIgPSAoe1xuICBsb2NhdGlvbixcbiAgbGF5b3V0XG59KSA9PiB7XG4gIGxldCBncmlkU2l6ZSA9IDBcbiAgbGV0IHNpdGVuYW1lU3BhbiA9IDBcbiAgbGV0IHNlYXJjaFNwYW4gPSAwXG5cbiAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICBjYXNlICdzJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIGdyaWRTaXplID0gMVxuICAgICAgc2l0ZW5hbWVTcGFuID0gMVxuICAgICAgc2VhcmNoU3BhbiA9IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbCc6XG4gICAgY2FzZSAneGwnOlxuICAgICAgZ3JpZFNpemUgPSAzXG4gICAgICBzaXRlbmFtZVNwYW4gPSAyXG4gICAgICBzZWFyY2hTcGFuID0gMVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBsYXlvdXQgdHlwZSAke2xheW91dH1gKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJ9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtZW5kXCJcbiAgICAgICAgICBndXR0ZXI9ezB9XG4gICAgICAgICAgZ3V0dGVyQm90dG9tPXsyfT5cbiAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgIHNwYW49e3NpdGVuYW1lU3Bhbn1cbiAgICAgICAgICAgIG91dE9mPXtncmlkU2l6ZX1cbiAgICAgICAgICAgIGd1dHRlcj17MH1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn0+XG4gICAgICAgICAgICA8Q3VycmVudFVzZXIgLz5cblxuICAgICAgICAgICAgPE1lZGlhIGFsaWduSXRlbXM9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICA8TWVkaWFGaWd1cmUgbj1cIjEuNVwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX19sb2dvfSAvPlxuICAgICAgICAgICAgICA8L01lZGlhRmlndXJlPlxuXG4gICAgICAgICAgICAgIDxNZWRpYUJvZHk+XG4gICAgICAgICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX190aXRsZX0+VmFjY2luZSBBbnN3ZXJzPC9oMT5cbiAgICAgICAgICAgICAgICAgIDxMb2NhbGUgLz5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcl9fc3VidGl0bGV9PkEgcmVsaWFibGUgc291cmNlIG9mIGluZm9ybWF0aW9uIGFib3V0IHZhY2NpbmVzIGluIENhbmFkYTwvZGl2PlxuICAgICAgICAgICAgICA8L01lZGlhQm9keT5cbiAgICAgICAgICAgIDwvTWVkaWE+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgc3Bhbj17c2VhcmNoU3Bhbn1cbiAgICAgICAgICAgIG91dE9mPXtncmlkU2l6ZX1cbiAgICAgICAgICAgIGd1dHRlcj17MH1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn0+XG5cbiAgICAgICAgICAgIDxTZWFyY2hCYXIgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9XG4pKEhlYWRlcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHticm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtzZXRTZWFyY2hRdWVyeX0gZnJvbSAnLi4vLi4vc3RvcmUvc2VhcmNoQWN0aW9ucydcbmltcG9ydCB7VGV4dElucHV0LCBCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IElucHV0RGVjb3JhdG9yIGZyb20gJy4uL0xheW91dHMvSW5wdXREZWNvcmF0b3InXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWFyY2hCYXIuY3NzJ1xuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBxdWVyeTogdGhpcy5wcm9wcy5xdWVyeVxuICAgIH1cblxuICAgIHRoaXMuc2V0UXVlcnkgPSB0aGlzLnNldFF1ZXJ5LmJpbmQodGhpcylcbiAgICB0aGlzLmRvU2VhcmNoID0gdGhpcy5kb1NlYXJjaC5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtxdWVyeX0gPSBuZXdQcm9wc1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBxdWVyeVxuICAgIH0pXG4gIH1cblxuICBzZXRRdWVyeSAodikge1xuICAgIGNvbnN0IHtzZXRTZWFyY2hRdWVyeX0gPSB0aGlzLnByb3BzXG5cbiAgICBzZXRTZWFyY2hRdWVyeSh2KVxuICB9XG5cbiAgZG9TZWFyY2ggKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBicm93c2VySGlzdG9yeS5wdXNoKGAvc2VhcmNoP3E9JHt0aGlzLnN0YXRlLnF1ZXJ5fWApXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5kb1NlYXJjaH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoQmFyfT5cblxuICAgICAgICA8SW5wdXREZWNvcmF0b3JcbiAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnF1ZXJ5fVxuICAgICAgICAgICAgICBoYXNTdWZmaXhcbiAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17dGhpcy5zZXRRdWVyeX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdGhlIHdlYnNpdGVcIiAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBzdWZmaXg9e1xuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBoYXNQcmVmaXg+U2VhcmNoPC9CdXR0b24+XG4gICAgICAgICAgfSAvPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5OiBzdGF0ZS5zZWFyY2gucXVlcnlcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2V0U2VhcmNoUXVlcnk6IChxKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldFNlYXJjaFF1ZXJ5KHEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShTZWFyY2hCYXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNlYXJjaEJhclwiOlwiU2VhcmNoQmFyX19TZWFyY2hCYXJfX19kdGRUaFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRlclwiOlwiSGVhZGVyX19IZWFkZXJfX19vRTJGSFwiLFwiSGVhZGVyX19sb2dvXCI6XCJIZWFkZXJfX0hlYWRlcl9fbG9nb19fXzFycVVfXCIsXCJIZWFkZXJfX3RpdGxlXCI6XCJIZWFkZXJfX0hlYWRlcl9fdGl0bGVfX18ydGl4YVwiLFwiSGVhZGVyX19zdWJ0aXRsZVwiOlwiSGVhZGVyX19IZWFkZXJfX3N1YnRpdGxlX19fX1pfT0JcIixcIkhlYWRlcl9fc2VhcmNoXCI6XCJIZWFkZXJfX0hlYWRlcl9fc2VhcmNoX19fMTZLYk1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2NhbGUuY3NzJ1xuXG5jb25zdCBMb2NhbGUgPSAoe1xuICBsb2NhdGlvblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTG9jYWxlfT5NYW5pdG9iYTwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9jYWxlL0xvY2FsZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMb2NhbGVcIjpcIkxvY2FsZV9fTG9jYWxlX19fMUNUQnBcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xvY2FsZS9Mb2NhbGUuY3NzXG4gKiogbW9kdWxlIGlkID0gNjU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFdyYXBwZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgbWF4V2lkdGggPSA5MCxcbiAgd2lkdGggPSA5MFxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB3aWR0aDogYCR7d2lkdGh9JWAsXG4gICAgbWF4V2lkdGg6IGAke21heFdpZHRofXJlbWAsXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcHBlci9XcmFwcGVyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DdXJyZW50VXNlci5jc3MnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuLi9VSS9MaW5rQnV0dG9uJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cy9MaXN0SW5saW5lJ1xuXG5jb25zdCBDdXJyZW50VXNlciA9ICh7XG4gIHVzZXIsXG4gIGxvZ091dFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3VycmVudFVzZXJ9PlxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkN1cnJlbnRVc2VyX19uYW1lfT5sb2dnZWQgaW4gYXMge3VzZXIubmFtZX08L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPExpbmtCdXR0b24gdGhlbWU9XCJhY2NlbnQyXCIgb25DbGljaz17bG9nT3V0fT5Mb2cgb3V0PC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ091dDogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQ3VycmVudFVzZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9DdXJyZW50VXNlci9DdXJyZW50VXNlci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDdXJyZW50VXNlclwiOlwiQ3VycmVudFVzZXJfX0N1cnJlbnRVc2VyX19fMVdhVTZcIixcIkN1cnJlbnRVc2VyX19uYW1lXCI6XCJDdXJyZW50VXNlcl9fQ3VycmVudFVzZXJfX25hbWVfX18xMmhJWlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nby45NmE2MTE3NmRiNTRlMjI3NDIzNjI2Nzk5NzQ0MjAxZS5zdmdcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2xvZ28uc3ZnXG4gKiogbW9kdWxlIGlkID0gNjYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLmNzcydcbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9MYXlvdXRzL1dyYXBwZXInXG5pbXBvcnQgRmxleCBmcm9tICcuLi9MYXlvdXRzL0ZsZXgnXG5pbXBvcnQgTGlzdE9mQXJ0aWNsZXMgZnJvbSAnLi4vTGlzdE9mQXJ0aWNsZXMnXG5cbmNvbnN0IEZvb3RlciA9ICh7XG4gIGFydGljbGVzXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJ9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxCb3ggbj17Mn0+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlcl9fdGV4dH0+VmFjY2luZSBBbnN3ZXJzICYjMTY5OyAyMDE3PC9kaXY+XG5cbiAgICAgICAgICAgIDxMaXN0T2ZBcnRpY2xlc1xuICAgICAgICAgICAgICBuPXsxLjV9XG4gICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgYXJ0aWNsZXM9e2FydGljbGVzfVxuICAgICAgICAgICAgICBsYXlvdXQ9XCJpbmxpbmVcIiAvPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIGNvbnN0IGZvb3RlclNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5jdXN0b21JZCA9PT0gJ2Zvb3Rlci1uYXYnKVxuICAgIGNvbnN0IGZvb3RlckFydGljbGVzID0gZm9vdGVyU2VjdGlvbi5hcnRpY2xlcy5tYXAoYSA9PiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maW5kKGFydCA9PiBhcnQuX2lkID09PSBhKSlcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlczogZm9vdGVyQXJ0aWNsZXNcbiAgICB9XG4gIH1cbikoRm9vdGVyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJGb290ZXJcIjpcIkZvb3Rlcl9fRm9vdGVyX19fMjY4UFRcIixcIkZvb3Rlcl9fdGV4dFwiOlwiRm9vdGVyX19Gb290ZXJfX3RleHRfX19jMHptRFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBCb3ggPSAoe1xuICBuID0gMSxcbiAgbmggPSAwLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nVG9wOiBgJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBwYWRkaW5nQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBwYWRkaW5nTGVmdDogYCR7YmFzZWxpbmUgKiBuaH1yZW1gLFxuICAgIHBhZGRpbmdSaWdodDogYCR7YmFzZWxpbmUgKiBuaH1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvQm94L0JveC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgTGluayBmcm9tICcuLi9UeXBvZ3JhcGh5L0xpbmsnXG5pbXBvcnQgSGVhZGluZzIgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMidcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMvTGlzdCdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMvTGlzdElubGluZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpc3RPZkFydGljbGVzLmNzcydcblxuY29uc3QgTGlzdE9mQXJ0aWNsZXMgPSAoe1xuICBhcnRpY2xlRW50cmllcyxcbiAgbGF5b3V0ID0gJ3N0YWNrZWQnLFxuICBpbnZlcnNlID0gZmFsc2UsXG4gIG4gPSAxLjI1LFxuICBzbWFsbCA9IGZhbHNlXG59KSA9PiB7XG4gIGlmIChsYXlvdXQgPT09ICdzdGFja2VkJykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdCBuPXtufT5cbiAgICAgICAge2FydGljbGVFbnRyaWVzLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGVudHJ5RWwgPSAnJ1xuICAgICAgICAgIGlmIChlbnRyeS5hcnRpY2xlLmFydGljbGVUeXBlID09PSAnaGVhZGluZycpIHtcbiAgICAgICAgICAgIGVudHJ5RWwgPSAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpbmRleCA+IDAgPyBzdHlsZXMuSGVhZGluZyA6ICcnfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZzI+e2VudHJ5LmFydGljbGUudGl0bGV9PC9IZWFkaW5nMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIGlmIChlbnRyeS5hcnRpY2xlLmFydGljbGVUeXBlID09PSAnYXJ0aWNsZScpIHtcbiAgICAgICAgICAgIGVudHJ5RWwgPSAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgc21hbGw9e3NtYWxsfVxuICAgICAgICAgICAgICAgIGludmVyc2U9e2ludmVyc2V9XG4gICAgICAgICAgICAgICAgdG89e2VudHJ5LnVybH0+e2VudHJ5LmFydGljbGUudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGFydGljbGUgdHlwZSAke2VudHJ5LmFydGljbGUuYXJ0aWNsZVR5cGV9YClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgIG49e259XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICB7ZW50cnlFbH1cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvTGlzdD5cbiAgICApXG4gIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW5saW5lJykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdElubGluZSBuPXtufT5cbiAgICAgICAge2FydGljbGVFbnRyaWVzLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IGVudHJ5RWwgPSAnJ1xuICAgICAgICAgIGlmIChlbnRyeS5hcnRpY2xlLmFydGljbGVUeXBlID09PSAnaGVhZGluZycpIHtcbiAgICAgICAgICAgIGVudHJ5RWwgPSAoXG4gICAgICAgICAgICAgIDxIZWFkaW5nMj57ZW50cnkuYXJ0aWNsZS50aXRsZX08L0hlYWRpbmcyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoZW50cnkuYXJ0aWNsZS5hcnRpY2xlVHlwZSA9PT0gJ2FydGljbGUnKSB7XG4gICAgICAgICAgICBlbnRyeUVsID0gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIHNtYWxsPXtzbWFsbH1cbiAgICAgICAgICAgICAgICBpbnZlcnNlPXtpbnZlcnNlfVxuICAgICAgICAgICAgICAgIHRvPXtlbnRyeS51cmx9PntlbnRyeS5hcnRpY2xlLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBhcnRpY2xlIHR5cGUgJHtlbnRyeS5hcnRpY2xlLmFydGljbGVUeXBlfWApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBuPXtufT5cbiAgICAgICAgICAgICAge2VudHJ5RWx9XG4gICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBsZXQgYXJ0aWNsZUVudHJpZXMgPSBbXVxuXG4gICAgZm9yIChsZXQgYXJ0aWNsZSBvZiBvd25Qcm9wcy5hcnRpY2xlcykge1xuICAgICAgbGV0IHBhcmVudHMgPSBbXVxuXG4gICAgICBsZXQgY3VycmVudFBhcmVudCA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLl9pZCA9PT0gYXJ0aWNsZS5wYXJlbnQpXG4gICAgICB3aGlsZSAoY3VycmVudFBhcmVudCAmJiAhY3VycmVudFBhcmVudC5tZXRhKSB7XG4gICAgICAgIHBhcmVudHMgPSBbY3VycmVudFBhcmVudC51cmwsIC4uLnBhcmVudHNdXG4gICAgICAgIGN1cnJlbnRQYXJlbnQgPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5faWQgPT09IGN1cnJlbnRQYXJlbnQucGFyZW50KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhcnRpY2xlVXJsID0gYC8ke3BhcmVudHMuam9pbignLycpfS9hcnRpY2xlcy8ke2FydGljbGUudXJsfWBcblxuICAgICAgYXJ0aWNsZUVudHJpZXMucHVzaCh7XG4gICAgICAgIGFydGljbGUsXG4gICAgICAgIHVybDogYXJ0aWNsZVVybFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgYXJ0aWNsZUVudHJpZXNcbiAgICB9XG4gIH1cbikoTGlzdE9mQXJ0aWNsZXMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MaXN0T2ZBcnRpY2xlcy9MaXN0T2ZBcnRpY2xlcy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmsgYXMgUmVhY3RMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaW5rLmNzcydcblxuY29uc3QgTGluayA9ICh7XG4gIGhyZWYsXG4gIHRvID0gbnVsbCxcbiAgaW52ZXJzZSA9IGZhbHNlLFxuICBzbWFsbCA9IGZhbHNlLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBpZiAodG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0TGlua1xuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5MaW5rfVxuICAgICAgICAgICR7aW52ZXJzZSA/IHN0eWxlcy5MaW5rX2ludmVyc2UgOiAnJ31cbiAgICAgICAgICAke3NtYWxsID8gc3R5bGVzLkxpbmtfc21hbGwgOiAnJ31gfVxuICAgICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5MaW5rX2FjdGl2ZX1cbiAgICAgICAgdG89e3RvfVxuICAgICAgICA+e2NoaWxkcmVufTwvUmVhY3RMaW5rPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuTGlua31cbiAgICAgICAgICAke2ludmVyc2UgPyBzdHlsZXMuTGlua19pbnZlcnNlIDogJyd9XG4gICAgICAgICAgJHtzbWFsbCA/IHN0eWxlcy5MaW5rX3NtYWxsIDogJyd9YH1cbiAgICAgICAgaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9MaW5rL0xpbmsuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTGlua1wiOlwiTGlua19fTGlua19fXzFrTUJrXCIsXCJMaW5rX2FjdGl2ZVwiOlwiTGlua19fTGlua19hY3RpdmVfX18zdGF1LVwiLFwiTGlua19pbnZlcnNlXCI6XCJMaW5rX19MaW5rX2ludmVyc2VfX18zMkpBOFwiLFwiTGlua19zbWFsbFwiOlwiTGlua19fTGlua19zbWFsbF9fXzEtWHZoXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0xpbmsvTGluay5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGluZzIuY3NzJ1xuXG5jb25zdCBIZWFkaW5nMiA9ICh7XG4gIGNoaWxkcmVuLFxuICB0byA9IG51bGwsXG4gIHVuZGVybGluZSA9IGZhbHNlXG59KSA9PiB7XG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMn1cbiAgICAgICAgICAke3N0eWxlcy5IZWFkaW5nMl9saW5rfVxuICAgICAgICAgICR7dW5kZXJsaW5lID8gc3R5bGVzLkhlYWRpbmcyX3VuZGVybGluZSA6ICcnfWB9XG4gICAgICAgIHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMlxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMn1cbiAgICAgICAgJHt1bmRlcmxpbmUgPyBzdHlsZXMuSGVhZGluZzJfdW5kZXJsaW5lIDogJyd9YH0+e2NoaWxkcmVufTwvaDI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmcyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcyL0hlYWRpbmcyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRpbmcyXCI6XCJIZWFkaW5nMl9fSGVhZGluZzJfX18xbG1KS1wiLFwiSGVhZGluZzJfbGlua1wiOlwiSGVhZGluZzJfX0hlYWRpbmcyX2xpbmtfX18zX24tTFwiLFwiSGVhZGluZzJfdW5kZXJsaW5lXCI6XCJIZWFkaW5nMl9fSGVhZGluZzJfdW5kZXJsaW5lX19fMjRUalBcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nXCI6XCJMaXN0T2ZBcnRpY2xlc19fSGVhZGluZ19fXzJpTU5yXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MaXN0T2ZBcnRpY2xlcy9MaXN0T2ZBcnRpY2xlcy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGluaywgYnJvd3Nlckhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vVUkvU2VsZWN0J1xuaW1wb3J0IEZsZXggZnJvbSAnLi4vTGF5b3V0cy9GbGV4J1xuaW1wb3J0IEJveCBmcm9tICcuLi9MYXlvdXRzL0JveCdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01haW5OYXYuY3NzJ1xuXG5jbGFzcyBNYWluTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm5hdmlnYXRlID0gdGhpcy5uYXZpZ2F0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBuYXZpZ2F0ZSAodXJsKSB7XG4gICAgYnJvd3Nlckhpc3RvcnkucHVzaCh1cmwpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtwYXJhbXMsIGxheW91dCwgc2VjdGlvbnN9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG1ldGFTZWN0aW9uID0gc2VjdGlvbnMuZmluZChzID0+IHMubWV0YSAmJiBzLnVybCA9PT0gJ21haW4tbmF2JylcbiAgICBjb25zdCByb290U2VjdGlvbnMgPSBtZXRhU2VjdGlvbi5jaGlsZHJlbi5tYXAoYyA9PiBzZWN0aW9ucy5maW5kKHMgPT4gcy5faWQgPT09IGMpKVxuXG4gICAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgICBsZXQgZmxhdE5hdmlnYXRpb24gPSBbXVxuICAgICAgICBmb3IgKGxldCBzZWN0aW9uIG9mIHJvb3RTZWN0aW9ucykge1xuICAgICAgICAgIGlmIChzZWN0aW9uLnNlY3Rpb25UeXBlID09PSAncGFyZW50Jykge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2VjdGlvbnMgPSBzZWN0aW9uLmNoaWxkcmVuLm1hcChjID0+IHNlY3Rpb25zLmZpbmQocyA9PiBzLl9pZCA9PT0gYykpXG5cbiAgICAgICAgICAgIGZvciAobGV0IHN1YnNlY3Rpb24gb2Ygc3Vic2VjdGlvbnMpIHtcbiAgICAgICAgICAgICAgZmxhdE5hdmlnYXRpb24ucHVzaCh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGAke3NlY3Rpb24udGl0bGV9IC8gJHtzdWJzZWN0aW9uLnRpdGxlfWAsXG4gICAgICAgICAgICAgICAgaWQ6IGAvJHtzZWN0aW9uLnVybH0vJHtzdWJzZWN0aW9uLnVybH1gXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZsYXROYXZpZ2F0aW9uLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogc2VjdGlvbi50aXRsZSxcbiAgICAgICAgICAgICAgaWQ6IGAvJHtzZWN0aW9uLnVybH1gXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZpZ2F0aW9ufT5cbiAgICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgICA8Qm94IG49ezF9PlxuICAgICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJhbXMuc3Vic2VjdGlvblVybFxuICAgICAgICAgICAgICAgICAgICA/IGAvJHtwYXJhbXMuc2VjdGlvblVybH0vJHtwYXJhbXMuc3Vic2VjdGlvblVybH1gXG4gICAgICAgICAgICAgICAgICAgIDogYC8ke3BhcmFtcy5zZWN0aW9uVXJsfWBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZsYXROYXZpZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3VybCA9PiB7IHRoaXMubmF2aWdhdGUodXJsKSB9fSAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgY2FzZSAnbSc6XG4gICAgICBjYXNlICdsJzpcbiAgICAgIGNhc2UgJ3hsJzpcbiAgICAgICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSByb290U2VjdGlvbnMuZmluZChzID0+IHMudXJsID09PSBwYXJhbXMuc2VjdGlvblVybClcbiAgICAgICAgY29uc3QgY3VycmVudFN1YnNlY3Rpb25zID0gY3VycmVudFNlY3Rpb24gJiYgY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUgPT09ICdwYXJlbnQnXG4gICAgICAgICAgPyBjdXJyZW50U2VjdGlvbi5jaGlsZHJlbi5tYXAoYyA9PiBzZWN0aW9ucy5maW5kKHMgPT4gcy5faWQgPT09IGMpKVxuICAgICAgICAgIDogbnVsbFxuXG4gICAgICAgIGxldCBjdXJyZW50U3ViTmF2ID0gJydcbiAgICAgICAgaWYgKGN1cnJlbnRTdWJzZWN0aW9ucykge1xuICAgICAgICAgIGN1cnJlbnRTdWJOYXYgPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlN1Ym5hdmlnYXRpb259PlxuICAgICAgICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICAgIHtjdXJyZW50U3Vic2VjdGlvbnMubWFwKChzLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlN1Ym5hdmlnYXRpb25fX2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuU3VibmF2aWdhdGlvbl9faXRlbV9hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgdG89e2AvJHtjdXJyZW50U2VjdGlvbi51cmx9LyR7cy51cmx9YH0+e3MudGl0bGV9PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2aWdhdGlvbn0+XG4gICAgICAgICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAge3Jvb3RTZWN0aW9ucy5tYXAoKHMsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGl2ZUNsYXNzTmFtZXMgPSBbc3R5bGVzLk5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlXVxuICAgICAgICAgICAgICAgICAgICBpZiAocy5zZWN0aW9uVHlwZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWVzLnB1c2goc3R5bGVzLk5hdmlnYXRpb25fX2l0ZW1fcGFyZW50X2FjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgLyR7cy51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLk5hdmlnYXRpb25fX2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e2FjdGl2ZUNsYXNzTmFtZXMuam9pbignICcpfT57cy50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtjdXJyZW50U3ViTmF2fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGxheW91dCB0eXBlICR7bGF5b3V0fWApXG4gICAgICAgIHJldHVybiA8ZGl2IC8+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VjdGlvbnM6IHN0YXRlLnNlY3Rpb25zLml0ZW1zLFxuICAgICAgbGF5b3V0OiBzdGF0ZS51aS5sYXlvdXRcbiAgICB9XG4gIH1cbikoTWFpbk5hdilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QuY3NzJ1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW52ZXJzZSA9IGZhbHNlLFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IG9wdGlvbnMuZmluZChvID0+IG8uaWQgPT09IHZhbHVlKVxuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBzZWxlY3RlZE9wdGlvbiA/IHNlbGVjdGVkT3B0aW9uLmxhYmVsIDogJ05vbmUnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TZWxlY3R9XG4gICAgICAgICR7aW52ZXJzZSA/IHN0eWxlcy5TZWxlY3RfaW52ZXJzZSA6ICcnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9fZmFrZX0+e2lucHV0TGFiZWx9PC9kaXY+XG5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5TZWxlY3RfX2lucHV0fVxuICAgICAgICAgIHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gb25DaGFuZ2Uodi50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICB7b3B0aW9ucy5tYXAoKG8sIGluZGV4KSA9PlxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17by5pZH0+e28ubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNlbGVjdFwiOlwiU2VsZWN0X19TZWxlY3RfX18xclBiTFwiLFwiU2VsZWN0X19mYWtlXCI6XCJTZWxlY3RfX1NlbGVjdF9fZmFrZV9fXzN3a2RkXCIsXCJTZWxlY3RfX2lucHV0XCI6XCJTZWxlY3RfX1NlbGVjdF9faW5wdXRfX19yN2V5N1wiLFwiU2VsZWN0X2ludmVyc2VcIjpcIlNlbGVjdF9fU2VsZWN0X2ludmVyc2VfX18xa0Q5RVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIk5hdmlnYXRpb25cIjpcIk1haW5OYXZfX05hdmlnYXRpb25fX19ERDNmdFwiLFwiTmF2aWdhdGlvbl9faXRlbVwiOlwiTWFpbk5hdl9fTmF2aWdhdGlvbl9faXRlbV9fXzFnXzZUXCIsXCJOYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZVwiOlwiTWFpbk5hdl9fTmF2aWdhdGlvbl9faXRlbV9hY3RpdmVfX18yaVhDUVwiLFwiTmF2aWdhdGlvbl9faXRlbV9wYXJlbnRfYWN0aXZlXCI6XCJNYWluTmF2X19OYXZpZ2F0aW9uX19pdGVtX3BhcmVudF9hY3RpdmVfX18ybU5POFwiLFwiU3VibmF2aWdhdGlvblwiOlwiTWFpbk5hdl9fU3VibmF2aWdhdGlvbl9fXzVHcm9IXCIsXCJTdWJuYXZpZ2F0aW9uX19pdGVtXCI6XCJNYWluTmF2X19TdWJuYXZpZ2F0aW9uX19pdGVtX19fM3RjWjRcIixcIlN1Ym5hdmlnYXRpb25fX2l0ZW1fYWN0aXZlXCI6XCJNYWluTmF2X19TdWJuYXZpZ2F0aW9uX19pdGVtX2FjdGl2ZV9fXzJXbWd1XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9NYWluTmF2L01haW5OYXYuY3NzXG4gKiogbW9kdWxlIGlkID0gNjczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgQXJ0aWNsZXNQYWdlIGZyb20gJy4uL0FydGljbGVzUGFnZSdcblxuY2xhc3MgU2VjdGlvbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2N1cnJlbnRTZWN0aW9uLCBwYXJlbnRTZWN0aW9uLCBwYXJhbXMsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblxuICAgIHN3aXRjaCAoY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUpIHtcbiAgICAgIGNhc2UgJ2FydGljbGVzJzpcbiAgICAgIGNhc2UgJ2Jsb2dwb3N0cyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEFydGljbGVzUGFnZVxuICAgICAgICAgICAgY3VycmVudFNlY3Rpb249e2N1cnJlbnRTZWN0aW9ufVxuICAgICAgICAgICAgcGFyZW50U2VjdGlvbj17cGFyZW50U2VjdGlvbn1cbiAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfSAvPlxuICAgICAgICApXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIHNlY3Rpb24gdHlwZSBvbiAybmQgbGV2ZWwgJHtjdXJyZW50U2VjdGlvbi5zZWN0aW9uVHlwZX1gKVxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcbiAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLnVybCA9PT0gcGFyYW1zLnN1YnNlY3Rpb25VcmwpXG4gICAgY29uc3QgcGFyZW50U2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLnVybCA9PT0gcGFyYW1zLnNlY3Rpb25VcmwpXG5cbiAgICAvLyBjb25zdCBzZWN0aW9uQmxvZ3Bvc3RzID0gY3VycmVudFNlY3Rpb24uYXJ0aWNsZXNcbiAgICAvLyAubWFwKGEgPT4gYXJ0aWNsZXMuZmluZChhcnQgPT4gYXJ0Ll9pZCA9PT0gYSkpXG4gICAgLy8gLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFNlY3Rpb24sXG4gICAgICBwYXJlbnRTZWN0aW9uXG4gICAgfVxuICB9XG4pKFNlY3Rpb25Db250YWluZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TdWJzZWN0aW9uQ29udGFpbmVyL1N1YnNlY3Rpb25Db250YWluZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL0xheW91dHMvV3JhcHBlcidcbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBGbGV4IGZyb20gJy4uL0xheW91dHMvRmxleCdcbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMvR3JpZCdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMvTGlzdCdcbmltcG9ydCBIZWFkaW5nMSBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcxJ1xuaW1wb3J0IEhlYWRpbmcyIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzInXG5pbXBvcnQgSGVhZGluZzMgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMydcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL1R5cG9ncmFwaHkvQ29udGVudCdcbmltcG9ydCBJbmZvIGZyb20gJy4uL1R5cG9ncmFwaHkvSW5mbydcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4uL1VJL0xpbmtCdXR0b24nXG5pbXBvcnQgQXNrUXVlc3Rpb24gZnJvbSAnLi4vQXNrUXVlc3Rpb24nXG5pbXBvcnQgTGlzdE9mQXJ0aWNsZXMgZnJvbSAnLi4vTGlzdE9mQXJ0aWNsZXMnXG5cbmNvbnN0IEFydGljbGVzUGFnZSA9ICh7XG4gIHBhcmVudFNlY3Rpb24sXG4gIGN1cnJlbnRTZWN0aW9uLFxuICBhcnRpY2xlcyxcbiAgbGF5b3V0LFxuICBjaGlsZHJlbixcbiAgcGFyYW1zXG59KSA9PiB7XG4gIGxldCBncmlkU2l6ZSA9IDBcbiAgbGV0IGFydGljbGVzU3BhbiA9IDBcbiAgbGV0IHF1ZXN0aW9uc1NwYW4gPSAwXG4gIGxldCBib3hTaXplID0gMFxuICBsZXQgcXVlc3Rpb25zQm94U2l6ZSA9IDBcbiAgbGV0IGZvcm1MYXlvdXQgPSAnbm9uZSdcbiAgbGV0IGFydGljbGVzR3JpZFNpemUgPSAwXG5cbiAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICBjYXNlICdzJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIGdyaWRTaXplID0gMVxuICAgICAgYXJ0aWNsZXNTcGFuID0gMVxuICAgICAgcXVlc3Rpb25zU3BhbiA9IDFcbiAgICAgIGJveFNpemUgPSA0XG4gICAgICBxdWVzdGlvbnNCb3hTaXplID0gMlxuICAgICAgZm9ybUxheW91dCA9ICdmdWxsJ1xuICAgICAgYXJ0aWNsZXNHcmlkU2l6ZSA9IDFcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbCc6XG4gICAgICBncmlkU2l6ZSA9IDEyXG4gICAgICBhcnRpY2xlc1NwYW4gPSA3XG4gICAgICBxdWVzdGlvbnNTcGFuID0gNVxuICAgICAgYm94U2l6ZSA9IHBhcmVudFNlY3Rpb24gPyA2IDogOFxuICAgICAgcXVlc3Rpb25zQm94U2l6ZSA9IDZcbiAgICAgIGZvcm1MYXlvdXQgPSAnc3RhY2tlZCdcbiAgICAgIGFydGljbGVzR3JpZFNpemUgPSAxXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3hsJzpcbiAgICAgIGdyaWRTaXplID0gM1xuICAgICAgYXJ0aWNsZXNTcGFuID0gMlxuICAgICAgcXVlc3Rpb25zU3BhbiA9IDFcbiAgICAgIGJveFNpemUgPSBwYXJlbnRTZWN0aW9uID8gNiA6IDhcbiAgICAgIHF1ZXN0aW9uc0JveFNpemUgPSA2XG4gICAgICBmb3JtTGF5b3V0ID0gJ3N0YWNrZWQnXG4gICAgICBhcnRpY2xlc0dyaWRTaXplID0gMVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBsYXlvdXQgdHlwZSAke2xheW91dH1gKVxuICB9XG5cbiAgbGV0IGNvbnRlbnQgPSAnJ1xuICBpZiAoY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUgPT09ICdhcnRpY2xlcycpIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgIHtwYXJlbnRTZWN0aW9uXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEhlYWRpbmczPntwYXJlbnRTZWN0aW9uLnRpdGxlfTwvSGVhZGluZzM+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIDxIZWFkaW5nMSB1bmRlcmxpbmU+e2N1cnJlbnRTZWN0aW9uLnRpdGxlfTwvSGVhZGluZzE+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBndXR0ZXJCb3R0b209ezF9PlxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsxfVxuICAgICAgICAgICAgc3Bhbj17MX1cbiAgICAgICAgICAgIG91dE9mPXthcnRpY2xlc0dyaWRTaXplfT5cbiAgICAgICAgICAgIDxMaXN0T2ZBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXMuc2xpY2UoMCwgYXJ0aWNsZXMubGVuZ3RoIC8gMil9IC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXsxfVxuICAgICAgICAgICAgc3Bhbj17MX1cbiAgICAgICAgICAgIG91dE9mPXthcnRpY2xlc0dyaWRTaXplfT5cbiAgICAgICAgICAgIDxMaXN0T2ZBcnRpY2xlcyBhcnRpY2xlcz17YXJ0aWNsZXMuc2xpY2UoYXJ0aWNsZXMubGVuZ3RoIC8gMil9IC8+XG4gICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2UgaWYgKGN1cnJlbnRTZWN0aW9uLnNlY3Rpb25UeXBlID09PSAnYmxvZ3Bvc3RzJykge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2sgbj17M30+XG4gICAgICAgICAgPEhlYWRpbmcxIHVuZGVybGluZT57Y3VycmVudFNlY3Rpb24udGl0bGV9PC9IZWFkaW5nMT5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8TGlzdCBuPXszfT5cbiAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IHBhcmVudFNlY3Rpb25cbiAgICAgICAgICAgICAgPyBgLyR7cGFyYW1zLnNlY3Rpb25Vcmx9LyR7cGFyYW1zLnN1YnNlY3Rpb25Vcmx9L2FydGljbGVzLyR7YS51cmx9YFxuICAgICAgICAgICAgICA6IGAvJHtwYXJhbXMuc2VjdGlvblVybH0vYXJ0aWNsZXMvJHthLnVybH1gXG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgbj17M30+XG4gICAgICAgICAgICAgICAgPEluZm8+UG9zdGVkIG9uIDxUaW1lIHZhbHVlPXtuZXcgRGF0ZShhLmNyZWF0ZWRBdCl9IGZvcm1hdD1cIk1NTSBEbywgaDptQVwiIC8+IGJ5IHthLmxhc3RNb2RpZmllZEJ5fTwvSW5mbz5cbiAgICAgICAgICAgICAgICA8SGVhZGluZzI+e2EudGl0bGV9PC9IZWFkaW5nMj5cblxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgICAgICAgICAgPENvbnRlbnQgdGV4dD17YS5zbmlwcGV0fSAvPlxuICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17bGlua30+JiMxODc7IHJlYWQgZnVsbCBwb3N0PC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgZ3V0dGVyQm90dG9tPXswfT5cbiAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbT17MH1cbiAgICAgICAgICAgIHNwYW49e2FydGljbGVzU3Bhbn1cbiAgICAgICAgICAgIG91dE9mPXtncmlkU2l6ZX0+XG4gICAgICAgICAgICA8Qm94IG49e2JveFNpemV9PlxuICAgICAgICAgICAgICB7cGFyYW1zLmFydGljbGVVcmxcbiAgICAgICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgOiBjb250ZW50XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbT17MH1cbiAgICAgICAgICAgIHNwYW49e3F1ZXN0aW9uc1NwYW59XG4gICAgICAgICAgICBvdXRPZj17Z3JpZFNpemV9PlxuICAgICAgICAgICAgPEJveCBuPXtxdWVzdGlvbnNCb3hTaXplfT5cbiAgICAgICAgICAgICAgPEFza1F1ZXN0aW9uIGZvcm1MYXlvdXQ9e2Zvcm1MYXlvdXR9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7Y3VycmVudFNlY3Rpb259ID0gb3duUHJvcHNcbiAgICBjb25zdCBhcnRpY2xlcyA9IGN1cnJlbnRTZWN0aW9uLmFydGljbGVzXG4gICAgICAubWFwKGEgPT4gc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmluZChhcnQgPT4gYXJ0Ll9pZCA9PT0gYSkpXG4gICAgICAuZmlsdGVyKGEgPT4gYS5pc1B1Ymxpc2hlZClcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlcyxcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9XG4pKEFydGljbGVzUGFnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FydGljbGVzUGFnZS9BcnRpY2xlc1BhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nMS5jc3MnXG5cbmNvbnN0IEhlYWRpbmcxID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxpbmtUbyA9IG51bGwsXG4gIHVuZGVybGluZVxufSkgPT4ge1xuICBpZiAobGlua1RvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rXG4gICAgICAgIHRvPXtsaW5rVG99XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmcxfVxuICAgICAgICAgICR7c3R5bGVzLkhlYWRpbmcxX2xpbmt9XG4gICAgICAgICAgJHt1bmRlcmxpbmUgPyBzdHlsZXMuSGVhZGluZzFfdW5kZXJsaW5lIDogJyd9YH0+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMX1cbiAgICAgICAgJHt1bmRlcmxpbmUgPyBzdHlsZXMuSGVhZGluZzFfdW5kZXJsaW5lIDogJyd9YH0+e2NoaWxkcmVufTwvaDE+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmcxXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcxL0hlYWRpbmcxLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRpbmcxXCI6XCJIZWFkaW5nMV9fSGVhZGluZzFfX18zUkdKRlwiLFwiSGVhZGluZzFfbGlua1wiOlwiSGVhZGluZzFfX0hlYWRpbmcxX2xpbmtfX18xaVNsdFwiLFwiSGVhZGluZzFfdW5kZXJsaW5lXCI6XCJIZWFkaW5nMV9fSGVhZGluZzFfdW5kZXJsaW5lX19fMUlOa3dcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzEvSGVhZGluZzEuY3NzXG4gKiogbW9kdWxlIGlkID0gNzgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRpbmczLmNzcydcblxuY29uc3QgSGVhZGluZzMgPSAoe1xuICBjaGlsZHJlbixcbiAgbGlua1RvID0gbnVsbFxufSkgPT4ge1xuICBpZiAobGlua1RvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXtsaW5rVG99IGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmczfSAke3N0eWxlcy5IZWFkaW5nM19saW5rfWB9PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZzN9PntjaGlsZHJlbn08L2gyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nM1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMy9IZWFkaW5nMy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nM1wiOlwiSGVhZGluZzNfX0hlYWRpbmczX19fMWtpZ0tcIixcIkhlYWRpbmczTGlua1wiOlwiSGVhZGluZzNfX0hlYWRpbmczTGlua19fXzFKQ21MXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGVudC5jc3MnXG5cbmNvbnN0IENvbnRlbnQgPSAoe1xuICB0ZXh0ID0gJydcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5Db250ZW50fVxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRleHR9fSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQ29udGVudC9Db250ZW50LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvbnRlbnRcIjpcIkNvbnRlbnRfX0NvbnRlbnRfX18yUlEwVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9Db250ZW50L0NvbnRlbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNzg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbmZvLmNzcydcblxuY29uc3QgSW5mbyA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbmZvfT57Y2hpbGRyZW59PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5mb1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9JbmZvL0luZm8uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSW5mb1wiOlwiSW5mb19fSW5mb19fXzJacDQ2XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0luZm8vSW5mby5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgSGVhZGluZzIgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMidcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL1R5cG9ncmFwaHkvQ29udGVudCdcbmltcG9ydCBTaWduYXR1cmUgZnJvbSAnLi4vU2lnbmF0dXJlJ1xuaW1wb3J0IFF1ZXN0aW9uRm9ybSBmcm9tICcuLi9RdWVzdGlvbkZvcm0nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Bc2tRdWVzdGlvbi5jc3MnXG5cbmNvbnN0IEFza1F1ZXN0aW9uID0gKHtcbiAgZm9ybUxheW91dFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb259PlxuICAgICAgPEJsb2NrPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFza1F1ZXN0aW9uX19oZWFkZXJ9PlxuICAgICAgICAgIDxIZWFkaW5nMj5Bc2sgYSBRdWVzdGlvbjwvSGVhZGluZzI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPEJsb2NrPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFza1F1ZXN0aW9uX19ib2R5fT5cbiAgICAgICAgICA8QmxvY2sgbj17MC41fT5cbiAgICAgICAgICAgIDxDb250ZW50IHRleHQ9e2BcbiAgICAgICAgICAgICAgICA8cD5Ob3QgcXVpdGUgZmluZGluZyB3aGF0IHlvdeKAmXJlIGxvb2tpbmcgZm9yPyBXYW50IHNvbWV0aGluZyBleHBsYWluZWQgZnVydGhlcj8gSGF2ZSBhIHF1ZXN0aW9uIGFib3V0IHNvbWV0aGluZyB5b3UgZm91bmQgZWxzZXdoZXJlPyBXYW50IGEgY29weSBvZiBhIHN0dWR5IHdl4oCZdmUgY2l0ZWQ/IFNlbmQgaW4geW91ciBxdWVzdGlvbiBhbmQgSeKAmWxsIGVtYWlsIHlvdSBiYWNrLjwvcD5cbiAgICAgICAgICAgICAgYH0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPFNpZ25hdHVyZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxRdWVzdGlvbkZvcm0gdHlwZT17Zm9ybUxheW91dH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc2tRdWVzdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXNrUXVlc3Rpb24vQXNrUXVlc3Rpb24uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWduYXR1cmUuY3NzJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBTaWduYXR1cmUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgPExpbmtcbiAgICAgICAgdG89XCIvd2hvLXdlLWFyZVwiXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlNpZ25hdHVyZX0+XG4gICAgICAgIOKAkyBKZW4gUG90dGVyIE1EIEIuU2MuIENDRlA8YnIgLz5GYW1pbHkgcGh5c2ljaWFuXG4gICAgICA8L0xpbms+XG4gICAgPC9GbGV4PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hdHVyZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2lnbmF0dXJlL1NpZ25hdHVyZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTaWduYXR1cmVcIjpcIlNpZ25hdHVyZV9fU2lnbmF0dXJlX19fMTFDbkZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NpZ25hdHVyZS9TaWduYXR1cmUuY3NzXG4gKiogbW9kdWxlIGlkID0gNzkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge1RleHRJbnB1dCwgVGV4dEFyZWEsIEJ1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQgTGFiZWxlZElucHV0IGZyb20gJy4uL0xheW91dHMvTGFiZWxlZElucHV0J1xuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQge0dyaWQsIEdyaWRJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0dyaWQnXG5cbmltcG9ydCB7Y3JlYXRlUXVlc3Rpb259IGZyb20gJy4uLy4uL3N0b3JlL3F1ZXN0aW9uc0FjdGlvbnMnXG5cbmNsYXNzIFF1ZXN0aW9uRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yczoge30sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBvc3Rlck5hbWU6IHByb3BzLnVzZXIubmFtZSxcbiAgICAgICAgcG9zdGVyRW1haWw6IHByb3BzLnVzZXIuZW1haWwsXG4gICAgICAgIHF1ZXN0aW9uOiAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuY3JlYXRlID0gdGhpcy5jcmVhdGUuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBpc1VwZGF0aW5nfSA9IG5ld1Byb3BzLnF1ZXN0aW9uXG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwb3N0ZXJOYW1lOiBuZXdQcm9wcy51c2VyLm5hbWUsXG4gICAgICAgICAgICBwb3N0ZXJFbWFpbDogbmV3UHJvcHMudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVRdWVzdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBjcmVhdGVRdWVzdGlvbih0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtxdWVzdGlvbjoge2lzVXBkYXRpbmd9LCB0eXBlLCBsYXlvdXR9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGdyaWRTaXplID0gMFxuICAgIHN3aXRjaCAobGF5b3V0KSB7XG4gICAgICBjYXNlICdzJzpcbiAgICAgICAgZ3JpZFNpemUgPSAxXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtJzpcbiAgICAgIGNhc2UgJ2wnOlxuICAgICAgY2FzZSAneGwnOlxuICAgICAgICBncmlkU2l6ZSA9IDJcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgbGF5b3V0IHR5cGUgJHtsYXlvdXR9YClcbiAgICB9XG5cbiAgICBsZXQgaW5wdXRzID0gJydcbiAgICBpZiAodHlwZSA9PT0gJ3N0YWNrZWQnKSB7XG4gICAgICBpbnB1dHMgPSAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPExhYmVsZWRJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJOYW1lfVxuICAgICAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5wb3N0ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBvc3Rlck5hbWV9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQ2FzZXlcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdwb3N0ZXJOYW1lJywgdil9IC8+XG4gICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPExhYmVsZWRJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucG9zdGVyRW1haWx9XG4gICAgICAgICAgICAgIGlucHV0PXtcbiAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBvc3RlckVtYWlsfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBvc3RlckVtYWlsfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGNhc2V5QGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ3Bvc3RlckVtYWlsJywgdil9IC8+XG4gICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmdWxsJykge1xuICAgICAgaW5wdXRzID0gKFxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPEdyaWQgZ3V0dGVyQm90dG9tPXsxfT5cbiAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b209ezF9XG4gICAgICAgICAgICAgIHNwYW49ezF9XG4gICAgICAgICAgICAgIG91dE9mPXtncmlkU2l6ZX0+XG4gICAgICAgICAgICAgIDxMYWJlbGVkSW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBvc3Rlck5hbWV9XG4gICAgICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBvc3Rlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQ2FzZXlcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9eyh2KSA9PiB0aGlzLmNoYW5nZSgncG9zdGVyTmFtZScsIHYpfSAvPlxuICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICBndXR0ZXJCb3R0b209ezF9XG4gICAgICAgICAgICAgIHNwYW49ezF9XG4gICAgICAgICAgICAgIG91dE9mPXtncmlkU2l6ZX0+XG4gICAgICAgICAgICAgIDxMYWJlbGVkSW5wdXRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgICAgICBpbnB1dD17XG4gICAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucG9zdGVyRW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGNhc2V5QGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdwb3N0ZXJFbWFpbCcsIHYpfSAvPlxuICAgICAgICAgICAgICAgIH0gLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAge2lucHV0c31cblxuICAgICAgICA8QmxvY2sgbj17MS41fT5cbiAgICAgICAgICA8TGFiZWxlZElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIllvdXIgcXVlc3Rpb25cIlxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnF1ZXN0aW9ufVxuICAgICAgICAgICAgaW5wdXQ9e1xuICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4sIEFyZSB0aGVyZSBhbnkgZGFuZ2Vyb3VzIHNpZGUgZWZmZWN0cyB0byB0aGUgY2hpY2tlbiBwb3ggdmFjY2luZT9cIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ3F1ZXN0aW9uJywgdil9IC8+XG4gICAgICAgICAgICB9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfT5Bc2sgcXVlc3Rpb248L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXIsXG4gICAgICBxdWVzdGlvbjogc3RhdGUucXVlc3Rpb24sXG4gICAgICBsYXlvdXQ6IHN0YXRlLnVpLmxheW91dFxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVRdWVzdGlvbjogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlUXVlc3Rpb24oZGF0YSwgJ1lvdXIgcXVlc3Rpb24gaGFzIGJlZW4gc2VudCwgd2Ugd2lsbCByZXBseSB0byB5b3UgYXMgc29vbiBhcyB3ZSBjYW4hJykpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFF1ZXN0aW9uRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uRm9ybS9RdWVzdGlvbkZvcm0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXNrUXVlc3Rpb25cIjpcIkFza1F1ZXN0aW9uX19Bc2tRdWVzdGlvbl9fXzNCazEtXCIsXCJBc2tRdWVzdGlvbl9faGVhZGVyXCI6XCJBc2tRdWVzdGlvbl9fQXNrUXVlc3Rpb25fX2hlYWRlcl9fXzdDUV9vXCIsXCJBc2tRdWVzdGlvbl9fYm9keVwiOlwiQXNrUXVlc3Rpb25fX0Fza1F1ZXN0aW9uX19ib2R5X19fMkRDWXlcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uL0Fza1F1ZXN0aW9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHticm93c2VySGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEFydGljbGVzUGFnZSBmcm9tICcuLi9BcnRpY2xlc1BhZ2UnXG5pbXBvcnQgQ3VzdG9tUGFnZUhvbWUgZnJvbSAnLi4vQ3VzdG9tUGFnZUhvbWUnXG5pbXBvcnQgQ3VzdG9tUGFnZUFib3V0IGZyb20gJy4uL0N1c3RvbVBhZ2VBYm91dCdcbmltcG9ydCBDdXN0b21QYWdlU2NoZWR1bGUgZnJvbSAnLi4vQ3VzdG9tUGFnZVNjaGVkdWxlJ1xuXG5jbGFzcyBTZWN0aW9uQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7cGFyYW1zLCBjdXJyZW50U2VjdGlvbiwgZmlyc3RTdWJzZWN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChmaXJzdFN1YnNlY3Rpb24gJiYgIXBhcmFtcy5zdWJzZWN0aW9uVXJsKSB7XG4gICAgICBicm93c2VySGlzdG9yeS5wdXNoKGAvJHtjdXJyZW50U2VjdGlvbi51cmx9LyR7Zmlyc3RTdWJzZWN0aW9uLnVybH1gKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge3BhcmFtcywgY3VycmVudFNlY3Rpb24sIGZpcnN0U3Vic2VjdGlvbn0gPSBuZXdQcm9wc1xuXG4gICAgaWYgKGZpcnN0U3Vic2VjdGlvbiAmJiAhcGFyYW1zLnN1YnNlY3Rpb25VcmwpIHtcbiAgICAgIGJyb3dzZXJIaXN0b3J5LnB1c2goYC8ke2N1cnJlbnRTZWN0aW9uLnVybH0vJHtmaXJzdFN1YnNlY3Rpb24udXJsfWApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y3VycmVudFNlY3Rpb24sIHBhcmFtcywgY2hpbGRyZW59ID0gdGhpcy5wcm9wc1xuXG4gICAgc3dpdGNoIChjdXJyZW50U2VjdGlvbi5zZWN0aW9uVHlwZSkge1xuICAgICAgY2FzZSAncGFyZW50JzpcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgICBjYXNlICdibG9ncG9zdHMnOlxuICAgICAgY2FzZSAnYXJ0aWNsZXMnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxBcnRpY2xlc1BhZ2VcbiAgICAgICAgICAgIGN1cnJlbnRTZWN0aW9uPXtjdXJyZW50U2VjdGlvbn1cbiAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfSAvPlxuICAgICAgICApXG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRTZWN0aW9uLmN1c3RvbUlkKSB7XG4gICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICByZXR1cm4gPEN1c3RvbVBhZ2VIb21lIC8+XG4gICAgICAgICAgY2FzZSAnYWJvdXQnOlxuICAgICAgICAgICAgcmV0dXJuIDxDdXN0b21QYWdlQWJvdXQgLz5cbiAgICAgICAgICBjYXNlICdzY2hlZHVsZSc6XG4gICAgICAgICAgICByZXR1cm4gPEN1c3RvbVBhZ2VTY2hlZHVsZSAvPlxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGN1c3RvbSBzZWN0aW9uICR7Y3VycmVudFNlY3Rpb24uY3VzdG9tSWR9YClcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PlxuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIHNlY3Rpb24gdHlwZSBvbiAxc3QgbGV2ZWwgJHtjdXJyZW50U2VjdGlvbi5zZWN0aW9uVHlwZX1gKVxuICAgICAgICByZXR1cm4gPGRpdj48L2Rpdj5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcbiAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLnVybCA9PT0gcGFyYW1zLnNlY3Rpb25VcmwpXG4gICAgY29uc3QgZmlyc3RTdWJzZWN0aW9uID0gY3VycmVudFNlY3Rpb24uc2VjdGlvblR5cGUgPT09ICdwYXJlbnQnICYmIGN1cnJlbnRTZWN0aW9uLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgPyBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5faWQgPT09IGN1cnJlbnRTZWN0aW9uLmNoaWxkcmVuWzBdKVxuICAgICAgOiBudWxsXG5cbiAgICAgIC8vIGNvbnN0IHNlY3Rpb25CbG9ncG9zdHMgPSBjdXJyZW50U2VjdGlvbi5hcnRpY2xlc1xuICAgICAgLy8gLm1hcChhID0+IGFydGljbGVzLmZpbmQoYXJ0ID0+IGFydC5faWQgPT09IGEpKVxuICAgICAgLy8gLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudFNlY3Rpb24sXG4gICAgICBmaXJzdFN1YnNlY3Rpb25cbiAgICB9XG4gIH1cbikoU2VjdGlvbkNvbnRhaW5lcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25Db250YWluZXIvU2VjdGlvbkNvbnRhaW5lci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9MYXlvdXRzL1dyYXBwZXInXG5pbXBvcnQge0dyaWQsIEdyaWRJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0dyaWQnXG5pbXBvcnQgQm94IGZyb20gJy4uL0xheW91dHMvQm94J1xuaW1wb3J0IFNpZ25hdHVyZSBmcm9tICcuLi9TaWduYXR1cmUnXG5pbXBvcnQgUXVlc3Rpb25Gb3JtIGZyb20gJy4uL1F1ZXN0aW9uRm9ybSdcbmltcG9ydCBCbG9jayBmcm9tICcuLi9MYXlvdXRzL0Jsb2NrJ1xuaW1wb3J0IEhlYWRpbmcxIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzEnXG5pbXBvcnQgSGVhZGluZzIgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMidcbmltcG9ydCBIZWFkaW5nTGluZWQgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nTGluZWQnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5pbXBvcnQgTGlzdE9mQXJ0aWNsZXMgZnJvbSAnLi4vTGlzdE9mQXJ0aWNsZXMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0N1c3RvbVBhZ2VIb21lLmNzcydcblxuY29uc3QgQ3VzdG9tUGFnZUhvbWUgPSAoe1xuICBmcmVxdWVudEFydGljbGVzLFxuICBmcmVxdWVudFNlY3Rpb24sXG4gIGZyZXF1ZW50U3Vic2VjaW9ucyxcbiAgYXJ0aWNsZXMsXG4gIGxheW91dFxufSkgPT4ge1xuICBsZXQgV2VsY29tZUdyaWRTaXplID0gMFxuICBsZXQgd2VsY29tZUJveCA9IDBcbiAgbGV0IGZyZXF1ZW50R3JpZFNpemUgPSAwXG4gIGxldCBmcmVxdWVudEJveCA9IDBcbiAgbGV0IGFza1F1ZXN0aW9uR3JpZFNpemUgPSAwXG4gIGxldCBhc2tRdWVzdGlvbkJveCA9IDBcblxuICBzd2l0Y2ggKGxheW91dCkge1xuICAgIGNhc2UgJ3MnOlxuICAgICAgV2VsY29tZUdyaWRTaXplID0gMVxuICAgICAgd2VsY29tZUJveCA9IDRcbiAgICAgIGZyZXF1ZW50R3JpZFNpemUgPSAxXG4gICAgICBmcmVxdWVudEJveCA9IDRcbiAgICAgIGFza1F1ZXN0aW9uR3JpZFNpemUgPSAxXG4gICAgICBhc2tRdWVzdGlvbkJveCA9IDRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbSc6XG4gICAgICBXZWxjb21lR3JpZFNpemUgPSAxXG4gICAgICB3ZWxjb21lQm94ID0gNFxuICAgICAgZnJlcXVlbnRHcmlkU2l6ZSA9IE1hdGgubWluKGZyZXF1ZW50U3Vic2VjaW9ucy5sZW5ndGgsIDIpXG4gICAgICBmcmVxdWVudEJveCA9IDRcbiAgICAgIGFza1F1ZXN0aW9uR3JpZFNpemUgPSAxXG4gICAgICBhc2tRdWVzdGlvbkJveCA9IDRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbCc6XG4gICAgICBXZWxjb21lR3JpZFNpemUgPSAyXG4gICAgICB3ZWxjb21lQm94ID0gNFxuICAgICAgZnJlcXVlbnRHcmlkU2l6ZSA9IE1hdGgubWluKGZyZXF1ZW50U3Vic2VjaW9ucy5sZW5ndGgsIDMpXG4gICAgICBmcmVxdWVudEJveCA9IDhcbiAgICAgIGFza1F1ZXN0aW9uR3JpZFNpemUgPSAyXG4gICAgICBhc2tRdWVzdGlvbkJveCA9IDhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAneGwnOlxuICAgICAgV2VsY29tZUdyaWRTaXplID0gMlxuICAgICAgd2VsY29tZUJveCA9IDZcbiAgICAgIGZyZXF1ZW50R3JpZFNpemUgPSBNYXRoLm1pbihmcmVxdWVudFN1YnNlY2lvbnMubGVuZ3RoLCA0KVxuICAgICAgZnJlcXVlbnRCb3ggPSA4XG4gICAgICBhc2tRdWVzdGlvbkdyaWRTaXplID0gMlxuICAgICAgYXNrUXVlc3Rpb25Cb3ggPSA4XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGxheW91dCB2YWx1ZSAke2xheW91dH1gKVxuICB9XG5cbiAgY29uc3QgZnJlcXVlbnRBcnRpY2xlc0VsID0gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLkZyZXF1ZW50U2VjdGlvbn0+XG4gICAgICA8QmxvY2s+XG4gICAgICAgIDxIZWFkaW5nTGluZWQ+RnJlcXVlbnQgUXVlc3Rpb25zPC9IZWFkaW5nTGluZWQ+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICA8V3JhcHBlcj5cbiAgICAgICAgPEJveCBuPXtmcmVxdWVudEJveH0+XG4gICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgIGd1dHRlckJvdHRvbT17NH0+XG4gICAgICAgICAgICB7ZnJlcXVlbnRTdWJzZWNpb25zLm1hcCgoc3ViLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdWJTZWN0aW9uQXJ0aWNsZXMgPSBzdWIuYXJ0aWNsZXNcbiAgICAgICAgICAgICAgLm1hcChhID0+IGFydGljbGVzLmZpbmQoYXJ0ID0+IGFydC5faWQgPT09IGEpKVxuICAgICAgICAgICAgICAuZmlsdGVyKGEgPT4gYS5pc1B1Ymxpc2hlZCAmJiBhLmFydGljbGVUeXBlID09PSAnYXJ0aWNsZScpXG4gICAgICAgICAgICAgIC5zbGljZSgwLCA1KVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgZ3V0dGVyQm90dG9tPXs0fVxuICAgICAgICAgICAgICAgICAgc3Bhbj17MX1cbiAgICAgICAgICAgICAgICAgIG91dE9mPXtmcmVxdWVudEdyaWRTaXplfT5cbiAgICAgICAgICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcyIHVuZGVybGluZT57c3ViLnRpdGxlfTwvSGVhZGluZzI+XG4gICAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0T2ZBcnRpY2xlcyBhcnRpY2xlcz17c3ViU2VjdGlvbkFydGljbGVzfSAvPlxuICAgICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0bz17YC8ke2ZyZXF1ZW50U2VjdGlvbi51cmx9LyR7c3ViLnVybH1gfT5zZWUgbW9yZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9zZWN0aW9uPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuV2VsY29tZVNlY3Rpb259PlxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLldlbGNvbWVTZWN0aW9uX19ib2R5fT5cbiAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtXG4gICAgICAgICAgICAgICAgc3Bhbj17MX1cbiAgICAgICAgICAgICAgICBvdXRPZj17V2VsY29tZUdyaWRTaXplfT5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBuPXt3ZWxjb21lQm94fT5cbiAgICAgICAgICAgICAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcxPldoYXQgaXMg4oCcVmFjY2luZSBBbnN3ZXJz4oCdPC9IZWFkaW5nMT5cbiAgICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQgdGV4dD17YFxuICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGtub3cgdGhlcmXigJlzIGEgbG90IG9mIGluZm8gYWJvdXQgY2hpbGRob29kIHZhY2NpbmF0aW9uIG91dCB0aGVyZSwgYW5kIHNvbWUgb2YgaXQgY2FuIGJlIGNvbmZ1c2luZyBvciBjb25mbGljdGluZy4gT3VyIGdvYWwgaXMgdG8gcHJvdmlkZSBwYXJlbnRzIHdpdGggcmVsaWFibGUsIGV2aWRlbmNlLWJhc2VkLCB1cC10by1kYXRlIGluZm9ybWF0aW9uIGFib3V0IGNoaWxkaG9vZCB2YWNjaW5hdGlvbnMsIGFuZCBtb3JlIGltcG9ydGFudGx5LCB0byBoZWxwIHlvdSBzb3J0IHRocm91Z2ggdGhlIGluZm9ybWF0aW9uIHlvdSBhcmUgZmluZGluZywgd2hldGhlciBvbiBvdXIgc2l0ZSBvciBzb21ld2hlcmUgZWxzZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+RmVlbCBmcmVlIHRvIGJyb3dzZSBhcm91bmQgb3VyIHNpdGUhIElmIHlvdSBjYW7igJl0IGZpbmQgdGhlIGluZm9ybWF0aW9uIHlvdeKAmXJlIGxvb2tpbmcgZm9yLCBvciB5b3Ugd291bGQgcmF0aGVyIGp1c3QgYXNrIHlvdXIgcXVlc3Rpb24gZGlyZWN0bHkgdG8gbWUsIHNlbmQgaXQgaW4gYW5kIEkgd2lsbCBlbWFpbCB5b3UgYmFjay48L3A+XG4gICAgICAgICAgICAgICAgICAgIGB9IC8+XG4gICAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgICA8U2lnbmF0dXJlIC8+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxCb3ggbj17YXNrUXVlc3Rpb25Cb3h9PlxuICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbVxuICAgICAgICAgICAgICAgIGd1dHRlckJvdHRvbT17Mn1cbiAgICAgICAgICAgICAgICBzcGFuPXsxfVxuICAgICAgICAgICAgICAgIG91dE9mPXthc2tRdWVzdGlvbkdyaWRTaXplfT5cbiAgICAgICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgICAgICA8SGVhZGluZzE+SGF2ZSBhIFF1ZXN0aW9uPzwvSGVhZGluZzE+XG4gICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgICAgICAgICAgIDxDb250ZW50IHRleHQ9e2BcbiAgICAgICAgICAgICAgICAgICAgICA8cD5Ob3QgcXVpdGUgZmluZGluZyB3aGF0IHlvdeKAmXJlIGxvb2tpbmcgZm9yPyBXYW50IHNvbWV0aGluZyBleHBsYWluZWQgZnVydGhlcj8gSGF2ZSBhIHF1ZXN0aW9uIGFib3V0IHNvbWV0aGluZyB5b3UgZm91bmQgZWxzZXdoZXJlPyBXYW50IGEgY29weSBvZiBhIHN0dWR5IHdl4oCZdmUgY2l0ZWQ/IFNlbmQgaW4geW91ciBxdWVzdGlvbiBhbmQgSeKAmWxsIGVtYWlsIHlvdSBiYWNrLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5JZiB3ZSByZWNlaXZlIHRoZSBzYW1lIG9yIHNpbWlsYXIgcXVlc3Rpb24gc2V2ZXJhbCB0aW1lcywgd2UgbWF5IGFkZCBpdCB0byBvdXIgRnJlcXVlbnQgUXVlc3Rpb25zIHBhZ2UuIE5vdGhpbmcgdGhhdCBpZGVudGlmaWVzIHRoZSBxdWVzdGlvbi1hc2tlcnMgd2lsbCBldmVyIGJlIHBvc3RlZC48L3A+XG4gICAgICAgICAgICAgICAgICAgIGB9IC8+XG4gICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgIDxTaWduYXR1cmUgLz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICA8R3JpZEl0ZW1cbiAgICAgICAgICAgICAgICBndXR0ZXJCb3R0b209ezJ9XG4gICAgICAgICAgICAgICAgc3Bhbj17MX1cbiAgICAgICAgICAgICAgICBvdXRPZj17YXNrUXVlc3Rpb25HcmlkU2l6ZX0+XG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uRm9ybSB0eXBlPVwiZnVsbFwiIC8+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAge2ZyZXF1ZW50QXJ0aWNsZXNFbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgY29uc3QgZnJlcXVlbnRTZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuY3VzdG9tSWQgPT09ICdmcmVxdWVudC1xdWVzdGlvbnMnKVxuICAgIGNvbnN0IGZyZXF1ZW50U3Vic2VjaW9ucyA9IGZyZXF1ZW50U2VjdGlvbi5jaGlsZHJlbi5tYXAoY2ggPT4gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuX2lkID09PSBjaCkpXG5cbiAgICByZXR1cm4ge1xuICAgICAgZnJlcXVlbnRTZWN0aW9uLFxuICAgICAgZnJlcXVlbnRTdWJzZWNpb25zLFxuICAgICAgYXJ0aWNsZXM6IHN0YXRlLmFydGljbGVzLml0ZW1zLFxuICAgICAgbGF5b3V0OiBzdGF0ZS51aS5sYXlvdXRcbiAgICB9XG4gIH1cbikoQ3VzdG9tUGFnZUhvbWUpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nTGluZWQuY3NzJ1xuXG5jb25zdCBIZWFkaW5nTGluZWQgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZ0xpbmVkfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nTGluZWRfX3RpdGxlfT57Y2hpbGRyZW59PC9oMT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nTGluZWRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZ0xpbmVkL0hlYWRpbmdMaW5lZC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nTGluZWRcIjpcIkhlYWRpbmdMaW5lZF9fSGVhZGluZ0xpbmVkX19fUEFxMTNcIixcIkhlYWRpbmdMaW5lZF9fdGl0bGVcIjpcIkhlYWRpbmdMaW5lZF9fSGVhZGluZ0xpbmVkX190aXRsZV9fXzF1ZTRsXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmdMaW5lZC9IZWFkaW5nTGluZWQuY3NzXG4gKiogbW9kdWxlIGlkID0gNzk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJXZWxjb21lU2VjdGlvblwiOlwiQ3VzdG9tUGFnZUhvbWVfX1dlbGNvbWVTZWN0aW9uX19fM0c1REtcIixcIldlbGNvbWVTZWN0aW9uX19ib2R5XCI6XCJDdXN0b21QYWdlSG9tZV9fV2VsY29tZVNlY3Rpb25fX2JvZHlfX18yTm5MV1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUhvbWUvQ3VzdG9tUGFnZUhvbWUuY3NzXG4gKiogbW9kdWxlIGlkID0gNzk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0dyaWQsIEdyaWRJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0dyaWQnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9MYXlvdXRzL1dyYXBwZXInXG5pbXBvcnQgQm94IGZyb20gJy4uL0xheW91dHMvQm94J1xuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgSGVhZGluZ0xpbmVkIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZ0xpbmVkJ1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vVHlwb2dyYXBoeS9Db250ZW50J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3VzdG9tUGFnZUFib3V0LmNzcydcbmltcG9ydCBpbWcgZnJvbSAnLi90ZWFtLmpwZydcblxuY29uc3QgQ3VzdG9tUGFnZUFib3V0ID0gKHtcbiAgbGF5b3V0XG59KSA9PiB7XG4gIGxldCBncmlkU2l6ZSA9IDBcbiAgbGV0IGJveFNpemUgPSAwXG5cbiAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICBjYXNlICdzJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIGdyaWRTaXplID0gMVxuICAgICAgYm94U2l6ZSA9IDRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbCc6XG4gICAgY2FzZSAneGwnOlxuICAgICAgZ3JpZFNpemUgPSAxXG4gICAgICBib3hTaXplID0gNlxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBsYXlvdXQgdmFsdWUgJHtsYXlvdXR9YClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8ZmlndXJlIGNsYXNzTmFtZT17c3R5bGVzLkFib3V0U2VjdGlvbn0+XG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGNsYXNzTmFtZT17c3R5bGVzLkFib3V0U2VjdGlvbl9faW1nfSAvPlxuXG4gICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT17c3R5bGVzLkFib3V0U2VjdGlvbl9fY2FwdGlvbn0+XG4gICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICBUaGUgVmFjY2luZSBBbnN3ZXJzIHRlYW0gKEwtUik6IFJ5YW4gTWFpZXIsIE1pY2hlbGxlIERyaWVkZ2VyLCBBbmRyZWEgQnVudCBhbmQgSmVuIFBvdHRlci5cbiAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgIDwvZmlnY2FwdGlvbj5cbiAgICAgIDwvZmlndXJlPlxuXG4gICAgICA8V3JhcHBlciBtYXhXaWR0aD1cIjUwXCI+XG4gICAgICAgIDxCb3ggbj17Ym94U2l6ZX0+XG4gICAgICAgICAgPEJsb2NrIG49e2JveFNpemV9PlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIDxCbG9jayBuPXtib3hTaXplIC0gMn0+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmdMaW5lZD5BYm91dCBUaGUgUHJvamVjdDwvSGVhZGluZ0xpbmVkPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgIDxDb250ZW50IHRleHQ9e2BcbiAgICAgICAgICAgICAgICAgIDxwPlRoaXMgcHJvamVjdCB3YXMgY29uY2VpdmVkIGJhc2VkIG9uIHRoZSBleHBlcmllbmNlcyBvZiBEci4gUG90dGVyIHdoZW4gc2hlIHdhcyBhIG5ldyBwYXJlbnQgaW50ZXJhY3Rpbmcgd2l0aCBvdGhlciBuZXcgcGFyZW50cyBhcm91bmQgdmFjY2luZXMsIHdoaWNoIGludm9sdmVkIHNpbWlsYXIgcXVlc3Rpb25zIHNoZSB3b3VsZCBhbnN3ZXIgZm9yIHBhcmVudHMgaW4gaGVyIGZhbWlseSBwcmFjdGljZS4gVGhpcyBtb3RpdmF0ZWQgaGVyIHRvIGNyZWF0ZSB0aGUgVmFjY2luZSBBbnN3ZXJzIHdlYnNpdGUgZm9yIHBsYWluIGxhbmd1YWdlIGluZm9ybWF0aW9uIGFib3V0IHZhY2NpbmVzIGZvciBNYW5pdG9iYSBwYXJlbnRzLCB3aXRoIGFuIGFkZGVkIOKAnGFzayBhIHF1ZXN0aW9u4oCdIGZlYXR1cmUgdG8gYWRkcmVzcyBpc3N1ZXMgdGhhdCBtYXkgYmUgZGlmZmljdWx0IGZvciBwYXJlbnRzIHRvIGZpbmQgcmVsaWFibGUgaW5mb3JtYXRpb24gYWJvdXQuPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+QmFzZWQgb24gdGhlIGF2YWlsYWJsZSBldmlkZW5jZSwgd2Ugc3Ryb25nbHkgZmVlbCB0aGF0IHRoZSBiZW5lZml0cyBvZiB2YWNjaW5hdGlvbiBncmVhdGx5IG91dHdlaWdoIHRoZSByaXNrcyBmb3IgdGhlIHZhc3QgbWFqb3JpdHkgb2YgcGVvcGxlLCBidXQgd2UgYXJlIG5vdCBoZXJlIHRvIHRlbGwgcGFyZW50cyB3aGV0aGVyIG9yIG5vdCB0byB2YWNjaW5hdGUgdGhlaXIgY2hpbGRyZW4uIE91ciBnb2FsIGlzIHRvIHByb3ZpZGUgcmVsaWFibGUsIGV2aWRlbmNlLWJhc2VkLCB1cC10by1kYXRlIGluZm9ybWF0aW9uIGFib3V0IHZhY2NpbmF0aW9uIChib3RoIHRoZSBwcm9zIGFuZCB0aGUgY29ucykgdG8gaGVscCBwYXJlbnRzIG1ha2UgdGhlaXIgb3duIGRlY2lzaW9ucy48L3A+XG4gICAgICAgICAgICAgICAgICA8cD5UaGUgZmlyc3QgcGhhc2Ugb2YgdGhpcyBzdHVkeSBpcyBkZXNpZ25lZCB0byByZWZpbmUgdGhpcyB3ZWJzaXRlIGZvciBwYXJlbnRzJyB1c2UuIEl0IHdhcyBmdW5kZWQgYnkgZ3JhbnRzIGZyb20gdGhlIDxhIGhyZWY9XCJodHRwOi8vbW1zZi5jYS9cIj5NYW5pdG9iYSBNZWRpY2FsIFNlcnZpY2VzIEZvdW5kYXRpb248L2E+IGFuZCA8YSBocmVmPVwiaHR0cDovL3d3dy53cGdmZG4ub3JnL1wiPlRoZSBXaW5uaXBlZyBGb3VuZGF0aW9uPC9hPi4gVGhlIHNlY29uZCBwaGFzZSBvZiB0aGlzIHN0dWR5IHdpbGwgbG9vayBhdCB0aGUgZWZmZWN0aXZlbmVzcyBvZiB0aGUgd2Vic2l0ZSB0byByZWR1Y2UgcGFyZW50cycgaGVzaXRhbmN5IGFyb3VuZCBjaGlsZGhvb2QgdmFjY2luYXRpb24uPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIG5vdGUgdGhhdCB3ZSBwcm92aWRlIGdlbmVyYWwgaW5mb3JtYXRpb24sIG5vdCBtZWRpY2FsIGFkdmljZSwgb24gdGhpcyBzaXRlLiBJZiB5b3UgaGF2ZSBxdWVzdGlvbnMgc3BlY2lmaWMgdG8geW91ciBjaGlsZCwgd2Ugd2lsbCByZWZlciB5b3UgdG8geW91ciBwcmltYXJ5IGNhcmUgcHJvdmlkZXIuIChGb3IgZXhhbXBsZSwg4oCcd2hhdCBhcmUgdGhlIHNpZGUgZWZmZWN0cyBvZiB0aGUgY2hpY2tlbiBwb3ggdmFjY2luZT/igJ0gaXMgYSBxdWVzdGlvbiB3ZSBjYW4gYW5zd2VyLiDigJxTaG91bGQgbXkgY2hpbGQgZ2V0IHRoZSBjaGlja2VuIHBveCB2YWNjaW5lP+KAnSBzaG91bGQgYmUgZGlyZWN0ZWQgdG8geW91ciBoZWFsdGggY2FyZSBwcm92aWRlci4pPC9wPlxuICAgICAgICAgICAgICAgIGB9IC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPEJsb2NrIG49e2JveFNpemUgLSAyfT5cbiAgICAgICAgICAgICAgPEhlYWRpbmdMaW5lZD5BYm91dCBVczwvSGVhZGluZ0xpbmVkPlxuICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgPENvbnRlbnQgdGV4dD17YFxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+SmVuIFBvdHRlciBNRCBCLlNjLiBDQ0ZQPC9zdHJvbmc+IGlzIGEgZmFtaWx5IHBoeXNpY2lhbiBhdCBLaWxkb25hbiBNZWRpY2FsIENlbnRyZSwgd2hlcmUgc2hlIHRlYWNoZXMgZmFtaWx5IG1lZGljaW5lIHJlc2lkZW50cyBhbmQgb3RoZXIgbGVhcm5lcnMgaW4gdGhlIERlcGFydG1lbnQgb2YgRmFtaWx5IE1lZGljaW5lIHdpdGggdGhlIFVuaXZlcnNpdHkgb2YgTWFuaXRvYmEuIFNoZSBpcyB0aGUgc3R1ZHkgbGVhZCBmb3IgdGhpcyBwcm9qZWN0LCB3aGljaCB3YXMgYm9ybiBvdXQgb2YgaGVyIGV4cGVyaWVuY2UgYXMgYm90aCBhIGRvY3RvciBhbmQgYXMgYSBwYXJlbnQuIERyLiBQb3R0ZXLigJlzIHJvbGUgYXMgc2l0ZSBtb2RlcmF0b3IgaXMgdG8gZ2VuZXJhdGUgYW5kIG1haW50YWluIHRoZSBpbmZvcm1hdGlvbiBwcmVzZW50ZWQsIHRvIGVuc3VyZSB0aGF0IGFsbCBpbmZvcm1hdGlvbiBpcyBiYXNlZCBvbiBwcm92ZW4gZXZpZGVuY2UsIGFuZCB0byBhbnN3ZXIgcXVlc3Rpb25zIGZyb20gcGFyZW50cy48L3A+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5TLiBNaWNoZWxsZSBEcmllZGdlcjwvc3Ryb25nPiBpcyBhIFByb2Zlc3NvciBhbmQgQ2FuYWRhIFJlc2VhcmNoIENoYWlyIGluIEVudmlyb25tZW50IGFuZCBIZWFsdGggUmlzayBDb21tdW5pY2F0aW9uIGluIHRoZSBEZXBhcnRtZW50IG9mIENvbW11bml0eSBIZWFsdGggU2NpZW5jZXMgYXQgdGhlIFVuaXZlcnNpdHkgb2YgTWFuaXRvYmEuIFRoZXJlIGlzIGEgZ3JlYXQgZGVhbCBvZiBjb25mdXNpbmcgYW5kIGNvbmZsaWN0aW5nIGluZm9ybWF0aW9uIG91dCB0aGVyZSwgYW5kIGZ1bmRhbWVudGFsbHkgYmV0dGVyIGNvbW11bmljYXRpb24gYW5kIGFjY2VzcyB0byBjcmVkaWJsZSBpbmZvcm1hdGlvbiBpcyBuZWVkZWQgZm9yIE1hbml0b2JhbnMgdG8gZmVlbCBjb21mb3J0YWJsZSBpbiB0aGUgZGVjaXNpb25zIHRoZXkgbWFrZSBmb3IgdGhlbXNlbHZlcyBhbmQgdGhlaXIgZmFtaWxpZXMuIERyLiBEcmllZGdlcuKAmXMgbWFpbiBhcmVhIG9mIHJlc2VhcmNoIGludm9sdmVzIHVuZGVyc3RhbmRpbmcgcGVvcGxl4oCZcyBjb25jZXJucyBhYm91dCBkaWZmZXJlbnQgcHVibGljIGhlYWx0aCBpc3N1ZXMgYW5kIHRoZSByZWNvbW1lbmRhdGlvbnMgdGhhdCBoZWFsdGggcHJvZmVzc2lvbmFscyBwcm92aWRlLiBJbiB0aGlzIHByb2plY3QsIHNoZSBpcyB3b3JraW5nIHdpdGggcGFyZW50cyBpbnZvbHZlZCBpbiB0aGUgdGVzdGluZyBwaGFzZSBvZiB0aGUgd2Vic2l0ZSBhbmQgZm9yIHByb3ZpZGluZyBnZW5lcmFsIGd1aWRhbmNlIG9uIHBsYWluIGxhbmd1YWdlIGNvbnRlbnQuPC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UnlhbiBNYWllcjwvc3Ryb25nPiBpcyBhIHJlc2VhcmNoIGFuYWx5c3QgYW5kIHN0dWR5IGNvb3JkaW5hdG9yIGluIHRoZSBEZXBhcnRtZW50IG9mIENvbW11bml0eSBIZWFsdGggU2NpZW5jZXMgYXQgdGhlIFVuaXZlcnNpdHkgb2YgTWFuaXRvYmEuIEhpcyBjdXJyZW50IG1haW4gYXJlYXMgb2YgcmVzZWFyY2ggYW5kIGludGVyZXN0IGFyZSBpbiBoZWFsdGggaGlzdG9yeSBhbmQgcG9saWN5IGFzIHdlbGwgYXMgdGhlIGZhY3RvcnMgdGhhdCBpbmZsdWVuY2UgcGVvcGxl4oCZcyBiZWxpZWZzIGFuZCBhdHRpdHVkZXMgdG93YXJkcyBoZWFsdGggdG9waWNzLCBzdWNoIGFzIHZhY2NpbmVzLiBIaXMgcm9sZSBpbiB0aGlzIHByb2plY3QgaXMgdG8gY29vcmRpbmF0ZSBhbGwgYXNwZWN0cyBvZiB0aGUgcHJvamVjdOKAmXMgcHJvY2VkdXJlcyBhbmQgaW4gd29ya2luZyB3aXRoIHBhcmVudHMgd2hvIGFyZSB0ZXN0aW5nIHRoZSB3ZWJzaXRlLjwvcD5cbiAgICAgICAgICAgICAgICBgfSAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0OiBzdGF0ZS51aS5sYXlvdXRcbiAgICB9XG4gIH1cbikoQ3VzdG9tUGFnZUFib3V0KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBYm91dFNlY3Rpb25cIjpcIkN1c3RvbVBhZ2VBYm91dF9fQWJvdXRTZWN0aW9uX19fM2VuZU9cIixcIkFib3V0U2VjdGlvbl9faW1nXCI6XCJDdXN0b21QYWdlQWJvdXRfX0Fib3V0U2VjdGlvbl9faW1nX19fMUpiUUFcIixcIkFib3V0U2VjdGlvbl9fY2FwdGlvblwiOlwiQ3VzdG9tUGFnZUFib3V0X19BYm91dFNlY3Rpb25fX2NhcHRpb25fX18yOGJISlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy90ZWFtLmRmYjI5MTQyOTZiNmQ1ZDVhOGRmZDdlNWFkOGM0YTM0LmpwZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlQWJvdXQvdGVhbS5qcGdcbiAqKiBtb2R1bGUgaWQgPSA4MDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vTGF5b3V0cy9Cb3gnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcbmltcG9ydCBIZWFkaW5nMSBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcxJ1xuaW1wb3J0IFRleHQgZnJvbSAnLi4vVHlwb2dyYXBoeS9UZXh0J1xuaW1wb3J0IHtSb3csIENvbHVtbiwgQ2VsbH0gZnJvbSAnLi4vVGFibGUnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9MYXlvdXRzL1dyYXBwZXInXG5cbmNvbnN0IEN1c3RvbVBhZ2VTY2hlZHVsZSA9ICh7XG4gIGxheW91dFxufSkgPT4ge1xuICBsZXQgdmFjY2luZUNvbHVtbldpZHRoID0gMFxuICBsZXQgc2hvd0Z1bGxOYW1lID0gbnVsbFxuICBsZXQgYm94U2l6ZSA9IDBcblxuICBzd2l0Y2ggKGxheW91dCkge1xuICAgIGNhc2UgJ3MnOlxuICAgIGNhc2UgJ20nOlxuICAgICAgdmFjY2luZUNvbHVtbldpZHRoID0gJzdyZW0nXG4gICAgICBzaG93RnVsbE5hbWUgPSBmYWxzZVxuICAgICAgYm94U2l6ZSA9IDRcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbCc6XG4gICAgY2FzZSAneGwnOlxuICAgICAgdmFjY2luZUNvbHVtbldpZHRoID0gJzI1cmVtJ1xuICAgICAgc2hvd0Z1bGxOYW1lID0gdHJ1ZVxuICAgICAgYm94U2l6ZSA9IDhcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZXRlZCBsYXlvdXQgdHlwZSAke2xheW91dH1gKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxCb3ggbj17Ym94U2l6ZX0+XG4gICAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgICA8SGVhZGluZzEgdW5kZXJsaW5lPlZhY2NpbmF0aW9uIFNjaGVkdWxlPC9IZWFkaW5nMT5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgPFRleHQ+VGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgc2NoZWR1bGUgZm9yIHZhY2NpbmF0aW9ucyBpbiBNYW5pdG9iYS48L1RleHQ+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxSb3cgaGVhZGluZyBidD5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmwgLz5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiNDUlXCIgYnI+PENlbGwgaGVhZGluZz5Nb250aHM8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIGhlYWRpbmc+WWVhcnM8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIGhlYWRpbmc+R3JhZGU8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCBoZWFkaW5nPlllYXJzPC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBoZWFkaW5nIGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiIGhlYWRpbmc+XG4gICAgICAgICAgICAgICAgVmFjY2luZVxuICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIj48Q2VsbD4yPC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiPjxDZWxsPjQ8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCI+PENlbGw+NjwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIj48Q2VsbD4xMjwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbD4xODwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGw+NC02PC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiPjxDZWxsPjQ8L0NlbGw+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGw+NjwvQ2VsbD48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsPjE0LTE2PC9DZWxsPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBEVGFQLUhpYi1JUFYge3Nob3dGdWxsTmFtZSA/ICcoRGlwaHRoZXJpYSwgVGV0YW51cywgUGVydHVzc2lzLCBIZW1vcGhpbHVzIGluZmx1ZW56YWUgdHlwZSBiLCBQb2xpbyknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgYmI+XG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPXt2YWNjaW5lQ29sdW1uV2lkdGh9IGJsPlxuICAgICAgICAgICAgICA8Q2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgUENWIHtzaG93RnVsbE5hbWUgPyAnKFBuZXVtb2NvY2N1cyBjb25qdWdhdGUgdmFjY2luZSknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBSViB7c2hvd0Z1bGxOYW1lID8gJyhSb3RhdmlydXMgdmFjY2luZSknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIE1NUlYge3Nob3dGdWxsTmFtZSA/ICcoTWVhc2xlcywgbXVtcHMsIHJ1YmVsbGEsIHZhcmljZWxsYSknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIE1DViB7c2hvd0Z1bGxOYW1lID8gJyhNZW5pbmdvY29jY3VzIGNvbmp1Z2F0ZSB2YWNjaW5lKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxSb3cgYmI+XG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPXt2YWNjaW5lQ29sdW1uV2lkdGh9IGJsPlxuICAgICAgICAgICAgICA8Q2VsbCBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgUENWIHtzaG93RnVsbE5hbWUgPyAnKFBuZXVtb2NvY2N1cyBjb25qdWdhdGUgdmFjY2luZSknIDogJyd9XG4gICAgICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuXG4gICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJsPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgZmlsbGVkIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiMTglXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBUZGFwLUlQViB7c2hvd0Z1bGxOYW1lID8gJyhUZXRhbnVzLCBEaXBodGhlcmlhLCBQZXJ0dXNzaXMsIFBvbGlvKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPFJvdyBiYj5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9e3ZhY2NpbmVDb2x1bW5XaWR0aH0gYmw+XG4gICAgICAgICAgICAgIDxDZWxsIGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICBIQlYge3Nob3dGdWxsTmFtZSA/ICcoSGVwYXRpdGlzIEIpJyA6ICcnfVxuICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIEhQViB7c2hvd0Z1bGxOYW1lID8gJyhIdW1hbiBwYXBpbGxvbWEgdmlydXMpJyA6ICcnfVxuICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICA8L0NvbHVtbj5cblxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIiBibD5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjE4JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCBmaWxsZWQgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG5cbiAgICAgICAgICA8Um93IGJiPlxuICAgICAgICAgICAgPENvbHVtbiB3aWR0aD17dmFjY2luZUNvbHVtbldpZHRofSBibD5cbiAgICAgICAgICAgICAgPENlbGwgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIFRkYXAge3Nob3dGdWxsTmFtZSA/ICcoVGV0YW51cywgRGlwaHRoZXJpYSwgUGVydHVzc2lzKScgOiAnJ31cbiAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgPC9Db2x1bW4+XG5cbiAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCIgYmw+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwiOSVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCIxOCVcIiBicj48Q2VsbCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICAgIDxDb2x1bW4gd2lkdGg9XCI5JVwiIGJyPjxDZWxsIC8+PC9Db2x1bW4+XG4gICAgICAgICAgICAgICAgPENvbHVtbiB3aWR0aD1cIjklXCIgYnI+PENlbGwgLz48L0NvbHVtbj5cbiAgICAgICAgICAgICAgICA8Q29sdW1uIHdpZHRoPVwic3RyZXRjaFwiIGJyPjxDZWxsIGZpbGxlZCAvPjwvQ29sdW1uPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxUZXh0PkluZmx1ZW56YSAoUUlWIG9yIFFBSVYpIHZhY2NpbmF0aW9uIGlzIHJlY29tbWVuZGVkIGV2ZXJ5IGZhbGwgZm9yIGFueW9uZSBhZ2VkIDYgbW9udGhzIG9yIG9sZGVyLjwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9XG4pKEN1c3RvbVBhZ2VTY2hlZHVsZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VTY2hlZHVsZS9DdXN0b21QYWdlU2NoZWR1bGUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dC5jc3MnXG5cbmNvbnN0IEhlYWRpbmczID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRleHR9PntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nM1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9UZXh0L1RleHQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGV4dFwiOlwiVGV4dF9fVGV4dF9fX2xXWUFGXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L1RleHQvVGV4dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYmxlLmNzcydcblxuY29uc3QgUm93ID0gKHtcbiAgYmIgPSBmYWxzZSxcbiAgYnQgPSBmYWxzZSxcbiAgYnIgPSBmYWxzZSxcbiAgYmwgPSBmYWxzZSxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLlJvd11cbiAgaWYgKGJ0KSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYnQpIH1cbiAgaWYgKGJiKSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYmIpIH1cbiAgaWYgKGJsKSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYmwpIH1cbiAgaWYgKGJyKSB7IGNsYXNzTmFtZXMucHVzaChzdHlsZXMuYnIpIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQ29sdW1uID0gKHtcbiAgYmIgPSBmYWxzZSxcbiAgYnQgPSBmYWxzZSxcbiAgYnIgPSBmYWxzZSxcbiAgYmwgPSBmYWxzZSxcbiAgd2lkdGgsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHt9XG4gIGlmICh3aWR0aCA9PT0gJ3N0cmV0Y2gnKSB7XG4gICAgc3R5bGUuZmxleCA9IDFcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS53aWR0aCA9IHdpZHRoXG4gIH1cblxuICBsZXQgY2xhc3NOYW1lcyA9IFtzdHlsZXMuQ29sdW1uXVxuICBpZiAoYnQpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5idCkgfVxuICBpZiAoYmIpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5iYikgfVxuICBpZiAoYmwpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5ibCkgfVxuICBpZiAoYnIpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5icikgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQ2VsbCA9ICh7XG4gIGhlYWRpbmcgPSBmYWxzZSxcbiAgZmlsbGVkID0gZmFsc2UsXG4gIGFsaWduID0gJ2NlbnRlcicsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICB0ZXh0QWxpZ246IGFsaWduXG4gIH1cblxuICBsZXQgY2xhc3NOYW1lcyA9IFtzdHlsZXMuQ2VsbF1cbiAgaWYgKGhlYWRpbmcpIHsgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5DZWxsX2hlYWRpbmcpIH1cbiAgaWYgKGZpbGxlZCkgeyBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkNlbGxfZmlsbGVkKSB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge1JvdywgQ29sdW1uLCBDZWxsfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiUm93XCI6XCJUYWJsZV9fUm93X19fMVlsbWlcIixcIkNvbHVtblwiOlwiVGFibGVfX0NvbHVtbl9fX2pUUWNxXCIsXCJDZWxsXCI6XCJUYWJsZV9fQ2VsbF9fXzI4OUZXXCIsXCJDZWxsX2hlYWRpbmdcIjpcIlRhYmxlX19DZWxsX2hlYWRpbmdfX18zSHRsbFwiLFwiQ2VsbF9maWxsZWRcIjpcIlRhYmxlX19DZWxsX2ZpbGxlZF9fXzJtNUotXCIsXCJiYlwiOlwiVGFibGVfX2JiX19fMXo0cF9cIixcImJ0XCI6XCJUYWJsZV9fYnRfX18xMFdRTlwiLFwiYnJcIjpcIlRhYmxlX19icl9fXzNVM3I2XCIsXCJibFwiOlwiVGFibGVfX2JsX19fMXZTVTNcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBCbG9jayBmcm9tICcuLi9MYXlvdXRzL0Jsb2NrJ1xuaW1wb3J0IEhlYWRpbmcxIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzEnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9UeXBvZ3JhcGh5L0luZm8nXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vQ29tbWVudHMnXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuLi9VSS9MaW5rQnV0dG9uJ1xuXG5jb25zdCBBcnRpY2xlUGFnZSA9ICh7XG4gIGFydGljbGUsXG4gIHBhcmFtc1xufSkgPT4ge1xuICBjb25zdCBiYWNrTGluayA9IHBhcmFtcy5zdWJzZWN0aW9uVXJsXG4gICAgPyBgLyR7cGFyYW1zLnNlY3Rpb25Vcmx9LyR7cGFyYW1zLnN1YnNlY3Rpb25Vcmx9YFxuICAgIDogYC8ke3BhcmFtcy5zZWN0aW9uVXJsfWBcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAge2FydGljbGUuYXJ0aWNsZVR5cGUgPT09ICdibG9ncG9zdCdcbiAgICAgICAgPyAoXG4gICAgICAgICAgPEJsb2NrIG49ezAuNX0+XG4gICAgICAgICAgICA8SW5mbz5Qb3N0ZWQgb24gPFRpbWUgdmFsdWU9e25ldyBEYXRlKGFydGljbGUuY3JlYXRlZEF0KX0gZm9ybWF0PVwiTU1NIERvLCBoOm1BXCIgLz4gYnkge2FydGljbGUubGFzdE1vZGlmaWVkQnl9PC9JbmZvPlxuICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgIClcbiAgICAgICAgOiAnJ1xuICAgICAgfVxuICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICA8SGVhZGluZzE+e2FydGljbGUudGl0bGV9PC9IZWFkaW5nMT5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgPENvbnRlbnQgdGV4dD17YXJ0aWNsZS5jb250ZW50fSAvPlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPEJsb2NrIG49e2FydGljbGUuYXJ0aWNsZVR5cGUgPT09ICdibG9ncG9zdCcgPyA0IDogMH0+XG4gICAgICAgIDxMaW5rQnV0dG9uIHRvPXtiYWNrTGlua30+JiMxNzE7IEJhY2sgdG8gdGhlIGxpc3Q8L0xpbmtCdXR0b24+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICB7YXJ0aWNsZS5hcnRpY2xlVHlwZSA9PT0gJ2Jsb2dwb3N0J1xuICAgICAgICA/IDxDb21tZW50cyBhcnRpY2xlPXthcnRpY2xlfSAvPlxuICAgICAgICA6ICcnXG4gICAgICB9XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3QgYXJ0aWNsZSA9IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbmQoYSA9PiBhLnVybCA9PT0gcGFyYW1zLmFydGljbGVVcmwpXG5cbiAgICByZXR1cm4ge1xuICAgICAgYXJ0aWNsZVxuICAgIH1cbiAgfVxuKShBcnRpY2xlUGFnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FydGljbGVQYWdlL0FydGljbGVQYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBDb21tZW50IGZyb20gJy4uL0NvbW1lbnQnXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi4vQ29tbWVudEZvcm0nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21tZW50cy5jc3MnXG5cbmNvbnN0IENvbW1lbnRzID0gKHtcbiAgYXJ0aWNsZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QmxvY2sgbj17Nn0+XG4gICAgICAgIDxDb21tZW50Rm9ybSBhcnRpY2xlPXthcnRpY2xlfSAvPlxuICAgICAgPC9CbG9jaz5cblxuICAgICAge2FydGljbGUuY29tbWVudHMubGVuZ3RoID4gMFxuICAgICAgICA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRzfT5cbiAgICAgICAgICAgIDxCbG9jayBuPXsxLjV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRzX190aXRsZX0+Q29tbWVudHM8L2Rpdj5cbiAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgIDxCbG9jayBuPXsxLjV9PlxuICAgICAgICAgICAgICB7YXJ0aWNsZS5jb21tZW50cy5tYXAoKGMsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIDxDb21tZW50XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgYXJ0aWNsZT17YXJ0aWNsZX1cbiAgICAgICAgICAgICAgICAgIGNvbW1lbnQ9e2N9IC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0Jsb2NrPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDogJydcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvQ29tbWVudHMuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IHtCbG9jaywgTGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29tbWVudC5jc3MnXG5pbXBvcnQgQ29tbWVudFJlcGx5IGZyb20gJy4uL0NvbW1lbnRSZXBseSdcbmltcG9ydCBDb21tZW50UmVwbHlGb3JtIGZyb20gJy4uL0NvbW1lbnRSZXBseUZvcm0nXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuXG5jbGFzcyBDb21tZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnRvZ2dsZUZvcm0gPSB0aGlzLnRvZ2dsZUZvcm0uYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dSZXBseUZvcm06IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRm9ybSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UmVwbHlGb3JtOiAhdGhpcy5zdGF0ZS5zaG93UmVwbHlGb3JtXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2NvbW1lbnQsIGFydGljbGV9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHNvcnRlZFJlcGxpZXMgPSBjb21tZW50LnJlcGxpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGEuY3JlYXRlZEF0ID4gYi5jcmVhdGVkQXQpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9IGVsc2UgaWYgKGEuY3JlYXRlZEF0IDwgYi5jcmVhdGVkQXQpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgfSlcblxuICAgIGxldCBmb3JtID0gJydcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG93UmVwbHlGb3JtKSB7XG4gICAgICBmb3JtID0gKFxuICAgICAgICA8QmxvY2sgbj17Y29tbWVudC5yZXBsaWVzLmxlbmd0aCA/IDQgOiAwfT5cbiAgICAgICAgICA8Q29tbWVudFJlcGx5Rm9ybVxuICAgICAgICAgICAgY2FuY2VsQ2FsbGJhY2s9eygpID0+IHRoaXMudG9nZ2xlRm9ybSgpfVxuICAgICAgICAgICAgY29tbWVudD17Y29tbWVudH1cbiAgICAgICAgICAgIGFydGljbGVJZD17YXJ0aWNsZS5faWR9IC8+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IHJlcGxpZXMgPSAnJ1xuICAgIGlmIChjb21tZW50LnJlcGxpZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmVwbGllcyA9IChcbiAgICAgICAgPExpc3Qgbj17Mn0+XG4gICAgICAgICAge3NvcnRlZFJlcGxpZXMubWFwKChyLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsyfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPENvbW1lbnRSZXBseSByZXBseT17cn0gLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnR9PlxuICAgICAgICA8QmxvY2sgbj17dGhpcy5zdGF0ZS5zaG93UmVwbHlGb3JtIHx8IGNvbW1lbnQucmVwbGllcy5sZW5ndGggPiAwID8gMyA6IDB9PlxuICAgICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19pbmZvfT5ieSB7Y29tbWVudC5jcmVhdGVkQnl9IG9uIDxUaW1lIHZhbHVlPXtjb21tZW50LmNyZWF0ZWRBdH0gZm9ybWF0PVwiTU1NIERvLCBoOm1BXCIgLz48L2Rpdj5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPENvbnRlbnQgdGV4dD17Y29tbWVudC5jb250ZW50fSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8TGlua0J1dHRvbiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUZvcm19PlJlcGx5IHRvIHRoaXMgY29tbWVudDwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRfX3JlcGxpZXN9PlxuICAgICAgICAgIHtmb3JtfVxuXG4gICAgICAgICAge3JlcGxpZXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDb21tZW50XCI6XCJDb21tZW50X19Db21tZW50X19fQ0xTMndcIixcIkNvbW1lbnRfX2luZm9cIjpcIkNvbW1lbnRfX0NvbW1lbnRfX2luZm9fX18xcm9vbFwiLFwiQ29tbWVudF9fcmVwbGllc1wiOlwiQ29tbWVudF9fQ29tbWVudF9fcmVwbGllc19fX1BYTFhSXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gODEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29tbWVudFJlcGx5LmNzcydcblxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vVHlwb2dyYXBoeS9Db250ZW50J1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgQ29tbWVudFJlcGx5ID0gKHtcbiAgcmVwbHlcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRSZXBseX0+XG4gICAgICA8QmxvY2sgbj17MC41fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50UmVwbHlfX2luZm99PmJ5IHtyZXBseS5jcmVhdGVkQnl9IG9uIDxUaW1lIHZhbHVlPXtyZXBseS5jcmVhdGVkQXR9IGZvcm1hdD1cIk1NTSBEbywgaDptQVwiIC8+PC9kaXY+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICA8Q29udGVudCB0ZXh0PXtyZXBseS5jb250ZW50fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRSZXBseVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ29tbWVudFJlcGx5L0NvbW1lbnRSZXBseS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDb21tZW50UmVwbHlcIjpcIkNvbW1lbnRSZXBseV9fQ29tbWVudFJlcGx5X19fMXZFYW1cIixcIkNvbW1lbnRSZXBseV9faW5mb1wiOlwiQ29tbWVudFJlcGx5X19Db21tZW50UmVwbHlfX2luZm9fX18yZ0x0NVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ29tbWVudFJlcGx5L0NvbW1lbnRSZXBseS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7QmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4uL1VJL1RleHRBcmVhJ1xuaW1wb3J0IExpbmtCdXR0b24gZnJvbSAnLi4vVUkvTGlua0J1dHRvbidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vVUkvQnV0dG9uJ1xuaW1wb3J0IExhYmVsZWRJbnB1dCBmcm9tICcuLi9MYXlvdXRzL0xhYmVsZWRJbnB1dCdcblxuaW1wb3J0IHtjcmVhdGVSZXBseX0gZnJvbSAnLi4vLi4vc3RvcmUvcmVwbGllc0FjdGlvbnMnXG5cbmNsYXNzIENvbW1lbnRSZXBseUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICB9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuY3JlYXRlID0gdGhpcy5jcmVhdGUuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBpc1VwZGF0aW5nfSA9IG5ld1Byb3BzLmNvbW1lbnQubmV3UmVwbHlcblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwge1xuICAgICAgW3Byb3BdOiB2YWx1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBuZXdFcnJvcnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogbmV3RGF0YSxcbiAgICAgIGVycm9yczogbmV3RXJyb3JzXG4gICAgfSlcbiAgfVxuXG4gIGNyZWF0ZSAoKSB7XG4gICAgY29uc3Qge2NyZWF0ZVJlcGx5LCBjYW5jZWxDYWxsYmFja30gPSB0aGlzLnByb3BzXG5cbiAgICBjcmVhdGVSZXBseSh0aGlzLnN0YXRlLmRhdGEpXG4gICAgY2FuY2VsQ2FsbGJhY2soKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y29tbWVudDoge25ld1JlcGx5OiB7aXNVcGRhdGluZ319LCBjYW5jZWxDYWxsYmFja30gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJsb2NrIG49ezEuNX0+XG4gICAgICAgICAgPExhYmVsZWRJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJZb3VyIHJlcGx5XCJcbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgaW5wdXQ9eyhcbiAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ2NvbnRlbnQnLCB2KX0gLz5cbiAgICAgICAgICAgICl9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPExpc3RJbmxpbmUgbj17Mn0+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezJ9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNyZWF0ZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9PlBvc3QgcmVwbHk8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezJ9PlxuICAgICAgICAgICAgPExpbmtCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQ2FsbGJhY2t9PkNhbmNlbDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbnVsbCxcbiAgKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHthcnRpY2xlSWQsIGNvbW1lbnR9ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVSZXBseTogZGF0YSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZVJlcGx5KGRhdGEsIGFydGljbGVJZCwgY29tbWVudC5faWQpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShDb21tZW50UmVwbHlGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ29tbWVudFJlcGx5Rm9ybS9Db21tZW50UmVwbHlGb3JtLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBCbG9jayBmcm9tICcuLi9MYXlvdXRzL0Jsb2NrJ1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4uL1VJL1RleHRBcmVhJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24nXG5pbXBvcnQgTGFiZWxlZElucHV0IGZyb20gJy4uL0xheW91dHMvTGFiZWxlZElucHV0J1xuXG5pbXBvcnQge2NyZWF0ZUNvbW1lbnR9IGZyb20gJy4uLy4uL3N0b3JlL2NvbW1lbnRzQWN0aW9ucydcblxuY2xhc3MgQ29tbWVudEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbnRlbnQ6ICcnXG4gICAgICB9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuY3JlYXRlID0gdGhpcy5jcmVhdGUuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBpc1VwZGF0aW5nfSA9IG5ld1Byb3BzLmFydGljbGUubmV3Q29tbWVudFxuXG4gICAgaWYgKCFpc1VwZGF0aW5nKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDAgJiYgZXJyb3JzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgY29udGVudDogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXJyb3JzLCB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBuZXdEYXRhLFxuICAgICAgZXJyb3JzOiBuZXdFcnJvcnNcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlICgpIHtcbiAgICBjb25zdCB7Y3JlYXRlQ29tbWVudH0gPSB0aGlzLnByb3BzXG5cbiAgICBjcmVhdGVDb21tZW50KHRoaXMuc3RhdGUuZGF0YSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2FydGljbGU6IHtuZXdDb21tZW50OiB7aXNVcGRhdGluZ319fSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgPExhYmVsZWRJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJQb3N0IGEgY29tbWVudFwiXG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuY29udGVudH1cbiAgICAgICAgICAgIGlucHV0PXsoXG4gICAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuY29udGVudH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdjb250ZW50Jywgdil9IC8+XG4gICAgICAgICAgICApfSAvPlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNyZWF0ZX1cbiAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ30+UG9zdCBjb21tZW50PC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbnVsbCxcbiAgKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHthcnRpY2xlfSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlQ29tbWVudDogZGF0YSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZUNvbW1lbnQoZGF0YSwgYXJ0aWNsZS5faWQpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShDb21tZW50Rm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0NvbW1lbnRGb3JtL0NvbW1lbnRGb3JtLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvbW1lbnRzXCI6XCJDb21tZW50c19fQ29tbWVudHNfX180V09UNlwiLFwiQ29tbWVudHNfX3RpdGxlXCI6XCJDb21tZW50c19fQ29tbWVudHNfX3RpdGxlX19fM2JWSTBcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQge3NldFNlYXJjaFF1ZXJ5LCBmZXRjaFNlYXJjaFJlc3VsdHN9IGZyb20gJy4uLy4uL3N0b3JlL3NlYXJjaEFjdGlvbnMnXG5pbXBvcnQgU2VhcmNoUmVzdWx0c0l0ZW0gZnJvbSAnLi4vU2VhcmNoUmVzdWx0c0l0ZW0nXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaFJlc3VsdHMuY3NzJ1xuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cy9MaXN0J1xuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9MYXlvdXRzL1dyYXBwZXInXG5pbXBvcnQgQm94IGZyb20gJy4uL0xheW91dHMvQm94J1xuaW1wb3J0IEhlYWRpbmcxIGZyb20gJy4uL1R5cG9ncmFwaHkvSGVhZGluZzEnXG5cbmNsYXNzIFNlYXJjaFJlc3VsdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgY29uc3Qge3NldFNlYXJjaFF1ZXJ5fSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMudXBkYXRlVGltZW91dElkID0gbnVsbFxuXG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIuc2V0Um91dGVMZWF2ZUhvb2sodGhpcy5wcm9wcy5yb3V0ZSwgKCkgPT4ge1xuICAgICAgc2V0U2VhcmNoUXVlcnkoJycpXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge2ZldGNoU2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUXVlcnksIHF1ZXJ5LCBsb2NhdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoIXF1ZXJ5ICYmIGxvY2F0aW9uLnF1ZXJ5LnEpIHtcbiAgICAgIHNldFNlYXJjaFF1ZXJ5KGxvY2F0aW9uLnF1ZXJ5LnEpXG4gICAgfVxuXG4gICAgZmV0Y2hTZWFyY2hSZXN1bHRzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2ZldGNoU2VhcmNoUmVzdWx0cywgcXVlcnl9ID0gbmV3UHJvcHNcblxuICAgIGlmIChxdWVyeSAhPT0gdGhpcy5wcm9wcy5xdWVyeSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlVGltZW91dElkKVxuICAgICAgdGhpcy51cGRhdGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hTZWFyY2hSZXN1bHRzKClcbiAgICAgIH0sIDUwMClcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpdGVtcywgcXVlcnksIGxvY2F0aW9uLCBpc0ZldGNoaW5nLCBsYXlvdXR9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGJveFNpemUgPSAwXG4gICAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgY2FzZSAnbSc6XG4gICAgICAgIGJveFNpemUgPSA0XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdsJzpcbiAgICAgIGNhc2UgJ3hsJzpcbiAgICAgICAgYm94U2l6ZSA9IDhcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgbGF5b3V0IHR5cGUgJHtsYXlvdXR9YClcbiAgICB9XG5cbiAgICBpZiAoaXNGZXRjaGluZykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNwaW5uZXIgLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxXcmFwcGVyIG1heFdpZHRoPVwiNTBcIj5cbiAgICAgICAgICAgIDxCb3ggbj17Ym94U2l6ZX0+XG4gICAgICAgICAgICAgIDxCbG9jayBuPXszfT5cbiAgICAgICAgICAgICAgICA8SGVhZGluZzEgdW5kZXJsaW5lPntpdGVtcy5sZW5ndGh9IHBhZ2VzIG1lbnRpb24gJ3txdWVyeX0nPC9IZWFkaW5nMT5cbiAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICA8TGlzdCBuPXszfT5cbiAgICAgICAgICAgICAgICB7aXRlbXMubWFwKHAgPT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXszfSBrZXk9e3Aub2JqZWN0SUR9PlxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoUmVzdWx0c0l0ZW0gaXRlbT17cH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW1wdHlTZWFyY2hSZXN1bHRzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW1wdHlTZWFyY2hSZXN1bHRzX190ZXh0fT5cbiAgICAgICAgICAgICAgV2UgY291bGQgbm90IGZpbmQgPHN0cm9uZz4ne2xvY2F0aW9uLnF1ZXJ5LnF9Jzwvc3Ryb25nPiBvbiBvdXIgd2Vic2l0ZVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgU2VhcmNoUmVzdWx0c1dpdGhSb3V0ZXIgPSB3aXRoUm91dGVyKFNlYXJjaFJlc3VsdHMpXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuc2VhcmNoLmlzRmV0Y2hpbmcsXG4gICAgICBpdGVtczogc3RhdGUuc2VhcmNoLml0ZW1zLFxuICAgICAgcXVlcnk6IHN0YXRlLnNlYXJjaC5xdWVyeSxcbiAgICAgIGxheW91dDogc3RhdGUudWkubGF5b3V0XG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNldFNlYXJjaFF1ZXJ5OiAocSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRTZWFyY2hRdWVyeShxKSlcbiAgICAgIH0sXG4gICAgICBmZXRjaFNlYXJjaFJlc3VsdHM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hSZXN1bHRzKCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFNlYXJjaFJlc3VsdHNXaXRoUm91dGVyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5pbXBvcnQgSGVhZGluZzIgZnJvbSAnLi4vVHlwb2dyYXBoeS9IZWFkaW5nMidcbmltcG9ydCBJbmZvIGZyb20gJy4uL1R5cG9ncmFwaHkvSW5mbydcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gJy4uL1VJL0xpbmtCdXR0b24nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWFyY2hSZXN1bHRzSXRlbS5jc3MnXG5cbmNvbnN0IFNlYXJjaFJlc3VsdHNJdGVtID0gKHtcbiAgaXRlbVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoUmVzdWx0c0l0ZW19PlxuICAgICAgPEhlYWRpbmcyPntpdGVtLnRpdGxlfTwvSGVhZGluZzI+XG4gICAgICA8SW5mbz57aXRlbS51cmx9PC9JbmZvPlxuICAgICAgPEJsb2NrIG49ezAuNX0+XG4gICAgICAgIDxDb250ZW50IHRleHQ9e2l0ZW0uX3NuaXBwZXRSZXN1bHQuY29udGVudC52YWx1ZX0gLz5cbiAgICAgIDwvQmxvY2s+XG4gICAgICA8TGlua0J1dHRvbiB0bz17YCR7aXRlbS51cmx9YH0+JiMxODc7IEdvIHRvIHRoZSBwYWdlPC9MaW5rQnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFJlc3VsdHNJdGVtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzSXRlbS9TZWFyY2hSZXN1bHRzSXRlbS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWFyY2hSZXN1bHRzXCI6XCJTZWFyY2hSZXN1bHRzX19TZWFyY2hSZXN1bHRzX19fMkpmbDlcIixcIkVtcHR5U2VhcmNoUmVzdWx0c1wiOlwiU2VhcmNoUmVzdWx0c19fRW1wdHlTZWFyY2hSZXN1bHRzX19fRjN4U1ZcIixcIkVtcHR5U2VhcmNoUmVzdWx0c19fdGV4dFwiOlwiU2VhcmNoUmVzdWx0c19fRW1wdHlTZWFyY2hSZXN1bHRzX190ZXh0X19fbC0xU09cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMvU2VhcmNoUmVzdWx0cy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7dXBkYXRlVXNlcn0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9MYXlvdXRzL1dyYXBwZXInXG5pbXBvcnQgQm94IGZyb20gJy4uL0xheW91dHMvQm94J1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi9VSS9UZXh0SW5wdXQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbidcbmltcG9ydCBIZWFkaW5nMiBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcyJ1xuXG5jbGFzcyBDaGFuZ2VQYXNzd29yZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yczoge30sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2huYWdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc3VibWl0ID0gdGhpcy5zdWJtaXQuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBpc1VwZGF0aW5nfSA9IG5ld1Byb3BzLnVzZXJcblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBzdWJtaXQgKCkge1xuICAgIGNvbnN0IHt1cGRhdGVQYXNzd29yZCwgY3VycmVudFVzZXJ9ID0gdGhpcy5wcm9wc1xuXG4gICAgdXBkYXRlUGFzc3dvcmQoY3VycmVudFVzZXIuaWQsIHRoaXMuc3RhdGUuZGF0YSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzVXBkYXRpbmd9ID0gdGhpcy5wcm9wcy51c2VyXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgbWF4V2lkdGg9XCIyNVwiPlxuICAgICAgICA8Qm94IG49ezh9PlxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxIZWFkaW5nMj5DaGFuZ2UgcGFzc3dvcmQ8L0hlYWRpbmcyPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIk5ldyBwYXNzd29yZDpcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9eyh2KSA9PiB0aGlzLmNoYW5nZSgncGFzc3dvcmQnLCB2KX0gLz5cbiAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zdWJtaXR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfT5VcGRhdGUgcGFzc3dvcmQ8L0J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9XcmFwcGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGN1cnJlbnRVc2VyOiBzdGF0ZS5hdXRoLnVzZXIsXG4gICAgICB1c2VyOiBzdGF0ZS51c2VyXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgY29uc3QgYmFja2xpbmsgPSAnLydcblxuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVQYXNzd29yZDogKGlkLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVVzZXIoaWQsIHBheWxvYWQsIGJhY2tsaW5rKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQ2hhbmdlUGFzc3dvcmQpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9DaGFuZ2VQYXNzd29yZC9DaGFuZ2VQYXNzd29yZC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWFyY2hSZXN1bHRzSXRlbVwiOlwiU2VhcmNoUmVzdWx0c0l0ZW1fX1NlYXJjaFJlc3VsdHNJdGVtX19fMmRCZEhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNJdGVtL1NlYXJjaFJlc3VsdHNJdGVtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFIQTtBQVBBO0FBREE7QUFEQTs7Ozs7OztBQ3BCQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFVQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWhCQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBTkE7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQW5DQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWJBO0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakZBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQTtBQXFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFJQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVDQTtBQThDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZCQTtBQXlCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvS0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWEE7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBWEE7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQXBFQTtBQUNBO0FBc0VBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFTQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDcERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDckNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7O0FDL0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBOzs7Ozs7OztBQzlCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU5BO0FBV0E7QUFaQTtBQWVBO0FBQ0E7Ozs7Ozs7O0FDbENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBTUE7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQVBBO0FBU0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FDdkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBREE7QUFpQkE7QUFDQTs7Ozs7Ozs7QUN4QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBMUJBO0FBQ0E7QUE0QkE7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFUQTtBQURBO0FBa0JBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBdkNBO0FBQ0E7QUF5Q0E7Ozs7Ozs7QUM5Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBYUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVZBO0FBREE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQTVCQTtBQURBO0FBREE7QUF1Q0E7QUF4Q0E7QUEyQ0E7Ozs7QUF0R0E7QUFDQTtBQXdHQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDdEhBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBVEE7QUFZQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVBBO0FBUEE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BO0FBN0JBO0FBREE7QUFEQTtBQTJDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBUkE7QUFTQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFiQTtBQWtCQTs7OztBQW5EQTtBQUNBO0FBcURBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7QUM1RUE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7O0FDdkNBO0FBQ0E7Ozs7Ozs7QUNEQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQURBO0FBREE7QUFEQTtBQWlCQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7OztBQ3hDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBM0JBO0FBOEJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQXpCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBZEE7QUFDQTtBQUVBO0FBQUE7QUFlQTtBQWxCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFtQkE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBTUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQkE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBbUJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFSQTtBQURBO0FBREE7QUFEQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFEQTtBQURBO0FBREE7QUFEQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQU1BO0FBZEE7QUFEQTtBQURBO0FBcUJBO0FBdEJBO0FBREE7QUEwQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQTVGQTtBQUxBO0FBQ0E7QUFEQTtBQW1HQTs7OztBQTlHQTtBQUNBO0FBZ0hBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBSkE7QUFlQTs7OztBQTdCQTtBQUNBO0FBK0JBOzs7Ozs7O0FDcENBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7Ozs7QUFsQkE7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5QkE7QUFDQTtBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFUQTtBQVhBO0FBNkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWQTtBQWFBO0FBcEJBO0FBTEE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUpBO0FBZEE7QUFEQTtBQURBO0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7OztBQy9LQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3pCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBUEE7QUFEQTtBQVlBO0FBbkJBO0FBc0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBSEE7QUFBQTtBQURBO0FBUUE7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQUNBO0FBUUE7QUFDQTtBQWJBO0FBY0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFmQTtBQThCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFiQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBYkE7QUFsQkE7QUFEQTtBQXNDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBVkE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQWpCQTtBQXNCQTs7OztBQTNLQTtBQUNBO0FBNktBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7O0FDdE1BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUF6QkE7QUEyQkE7Ozs7QUEvQ0E7QUFDQTtBQWlEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFDQTtBQW9DQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFiQTtBQWdCQTtBQXpCQTtBQURBO0FBREE7QUFMQTtBQUNBO0FBc0NBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBYkE7QUFIQTtBQUZBO0FBREE7QUFEQTtBQURBO0FBNkJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFmQTtBQWtCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBckJBO0FBREE7QUFEQTtBQURBO0FBbUNBO0FBakVBO0FBb0VBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQ0E7QUFjQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUhBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQURBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQWhCQTtBQURBO0FBWEE7QUEyQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7QUNyRkE7QUFDQTs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpBO0FBREE7QUFIQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBREE7QUFQQTtBQTFPQTtBQWlRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMVFBO0FBREE7QUErUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7QUN6VEE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7OztBQzdFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBckJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQUxBO0FBUEE7QUEwQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFiQTtBQW9CQTs7OztBQTNFQTtBQUNBO0FBNkVBOzs7Ozs7O0FDeEZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBUUE7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFYQTtBQVlBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBVEE7QUFhQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFQQTtBQWRBO0FBNEJBOzs7O0FBckZBO0FBQ0E7QUF1RkE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3R0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFYQTtBQVlBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFUQTtBQWFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBZEE7QUFtQkE7Ozs7QUEzRUE7QUFDQTtBQTZFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7OztBQ2xHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFDQTtBQVlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQUxBO0FBREE7QUFnQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQURBO0FBTUE7QUFDQTtBQUNBOzs7O0FBbEZBO0FBQ0E7QUFvRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQ0E7QUFNQTtBQUNBO0FBWEE7QUFZQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQVZBO0FBTEE7QUFEQTtBQXVCQTs7OztBQS9FQTtBQUNBO0FBaUZBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7QUM1R0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=