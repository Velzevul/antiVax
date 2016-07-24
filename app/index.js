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

	var _store = __webpack_require__(552);

	var _store2 = _interopRequireDefault(_store);

	var _App = __webpack_require__(605);

	var _App2 = _interopRequireDefault(_App);

	var _Section = __webpack_require__(658);

	var _Section2 = _interopRequireDefault(_Section);

	var _SectionArticle = __webpack_require__(676);

	var _SectionArticle2 = _interopRequireDefault(_SectionArticle);

	var _SectionCategoryItem = __webpack_require__(681);

	var _SectionCategoryItem2 = _interopRequireDefault(_SectionCategoryItem);

	var _Blog = __webpack_require__(696);

	var _Blog2 = _interopRequireDefault(_Blog);

	var _Blogpost = __webpack_require__(803);

	var _Blogpost2 = _interopRequireDefault(_Blogpost);

	var _Questions = __webpack_require__(812);

	var _Questions2 = _interopRequireDefault(_Questions);

	var _Faq = __webpack_require__(819);

	var _Faq2 = _interopRequireDefault(_Faq);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '' + ("/app"), component: _App2.default },
	      _react2.default.createElement(_reactRouter.IndexRedirect, { to: 'questions' }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'questions', component: _Questions2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: ':faqId', component: _Faq2.default })
	      ),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'blog', component: _Blog2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: ':blogpostId', component: _Blogpost2.default })
	      ),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: ':sectionId', component: _Section2.default },
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: ':articleId', component: _SectionArticle2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: ':itemId', component: _SectionCategoryItem2.default })
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

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(477);

	var _reduxLogger = __webpack_require__(553);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxThunk = __webpack_require__(554);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _rootReducer = __webpack_require__(555);

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

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(477);

	var _authReducer = __webpack_require__(556);

	var _authReducer2 = _interopRequireDefault(_authReducer);

	var _flashReducer = __webpack_require__(561);

	var _flashReducer2 = _interopRequireDefault(_flashReducer);

	var _questionsReducer = __webpack_require__(562);

	var _questionsReducer2 = _interopRequireDefault(_questionsReducer);

	var _articleReducer = __webpack_require__(564);

	var _articleReducer2 = _interopRequireDefault(_articleReducer);

	var _scheduleReducer = __webpack_require__(567);

	var _scheduleReducer2 = _interopRequireDefault(_scheduleReducer);

	var _searchReducer = __webpack_require__(569);

	var _searchReducer2 = _interopRequireDefault(_searchReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  auth: _authReducer2.default,
	  flash: _flashReducer2.default,
	  question: _questionsReducer2.default,
	  articles: _articleReducer2.default,
	  schedule: _scheduleReducer2.default,
	  search: _searchReducer2.default
	});

		exports.default = rootReducer;

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _authActions = __webpack_require__(557);

	var _initialState = __webpack_require__(560);

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

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loginWithToken = exports.loginWithCredentials = exports.logOut = exports.LOGOUT = exports.LOGIN = exports.REQUEST_AUTH = undefined;

	__webpack_require__(558);

	var _flashActions = __webpack_require__(559);

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

	    fetch(("https://vdziubak.com/antiVaxServer") + '/auth/authenticate-credentials', {
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

	    fetch(("https://vdziubak.com/antiVaxServer") + '/auth/authenticate-token', {
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

/***/ 559:
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

/***/ 560:
/***/ function(module, exports) {

	"use strict";

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
	    isFetching: false,
	    items: []
	  },
	  newComment: {
	    isUpdating: false,
	    errors: {}
	  },
	  schedule: {
	    isFetching: false,
	    items: [],
	    postScheduleContent: null
	  },
	  search: {
	    isFetching: false,
	    items: []
	  }
		};

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _flashActions = __webpack_require__(559);

	var _initialState = __webpack_require__(560);

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

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _questionsActions = __webpack_require__(563);

	var _initialState = __webpack_require__(560);

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

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createQuestion = exports.REJECT_QUESTION_CREATE = exports.CONFIRM_QUESTION_CREATE = exports.REQUEST_QUESTION_CREATE = undefined;

	__webpack_require__(558);

	var _flashActions = __webpack_require__(559);

	var _authActions = __webpack_require__(557);

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

	    fetch(("https://vdziubak.com/antiVaxServer") + '/questions/', {
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

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _articleActions = __webpack_require__(565);

	var _commentsActions = __webpack_require__(566);

	var _repliesActions = __webpack_require__(820);

	var _initialState = __webpack_require__(560);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var newComment = function newComment(state, action) {
	  switch (action.type) {
	    case _commentsActions.REQUEST_COMMENT_CREATE:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _commentsActions.CONFIRM_COMMENT_CREATE:
	      return _extends({}, _initialState2.default.newComment);
	    case _commentsActions.REJECT_COMMENT_CREATE:
	      return _extends({}, state, {
	        isUpdating: false,
	        errors: action.errors
	      });
	    default:
	      return state;
	  }
	};

	var newReply = function newReply(state, action) {
	  switch (action.type) {
	    case _repliesActions.CONFIRM_REPLY_CREATE:
	      return _extends({}, _initialState2.default.newComment);
	    case _repliesActions.REQUEST_REPLY_CREATE:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _repliesActions.REJECT_REPLY_CREATE:
	      return _extends({}, state, {
	        isUpdating: false,
	        errors: action.errors
	      });
	    default:
	      return state;
	  }
	};

	var comment = function comment(state, action) {
	  switch (action.type) {
	    case _articleActions.RECEIVE_ARTICLES:
	      return _extends({}, state, {
	        newReply: _extends({}, _initialState2.default.newComment)
	      });
	    case _repliesActions.CONFIRM_REPLY_CREATE:
	      return _extends({}, state, {
	        newReply: newReply(state.newReply, action),
	        replies: [].concat(_toConsumableArray(state.replies), [action.reply])
	      });
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
	    case _articleActions.RECEIVE_ARTICLES:
	      return _extends({}, state, {
	        newComment: _extends({}, _initialState2.default.newComment),
	        comments: state.comments.map(function (c) {
	          return comment(c, action);
	        })
	      });
	    case _commentsActions.CONFIRM_COMMENT_CREATE:
	      if (state._id === action.articleId) {
	        return _extends({}, state, {
	          newComment: newComment(state.newComment, action),
	          comments: [].concat(_toConsumableArray(state.comments), [comment(action.comment, action)])
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
	          return article(i, action);
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

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchArticles = exports.RECEIVE_ARTICLES = exports.REQUEST_ARTICLES = undefined;

	__webpack_require__(558);

	var _reactRouter = __webpack_require__(492);

	var _flashActions = __webpack_require__(559);

	var _authActions = __webpack_require__(557);

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

	    fetch(("https://vdziubak.com/antiVaxServer") + '/articles/', {
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

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createComment = exports.REJECT_COMMENT_CREATE = exports.CONFIRM_COMMENT_CREATE = exports.REQUEST_COMMENT_CREATE = undefined;

	__webpack_require__(558);

	var _flashActions = __webpack_require__(559);

	var _authActions = __webpack_require__(557);

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

	    fetch(("https://vdziubak.com/antiVaxServer") + '/articles/' + articleId + '/comments/', {
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

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _scheduleActions = __webpack_require__(568);

	var _initialState = __webpack_require__(560);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var schedule = function schedule() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.schedule : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _scheduleActions.REQUEST_SCHEDULE:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _scheduleActions.RECEIVE_SCHEDULE:
	      return _extends({}, state, {
	        isFetching: false,
	        items: action.items,
	        postScheduleContent: action.postScheduleContent
	      });
	    default:
	      return state;
	  }
	};

	exports.default = schedule;

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchSchedule = exports.RECEIVE_SCHEDULE = exports.REQUEST_SCHEDULE = undefined;

	__webpack_require__(558);

	var _flashActions = __webpack_require__(559);

	var _authActions = __webpack_require__(557);

	var REQUEST_SCHEDULE = exports.REQUEST_SCHEDULE = 'REQUEST_SCHEDULE';
	var RECEIVE_SCHEDULE = exports.RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE';

	var requestSchedule = function requestSchedule() {
	  return {
	    type: REQUEST_SCHEDULE
	  };
	};

	var receiveSchedule = function receiveSchedule(items, postScheduleContent) {
	  return {
	    type: RECEIVE_SCHEDULE,
	    items: items,
	    postScheduleContent: postScheduleContent
	  };
	};

	var fetchSchedule = exports.fetchSchedule = function fetchSchedule() {
	  return function (dispatch, getState) {
	    dispatch(requestSchedule());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/schedule', {
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
	        dispatch(receiveSchedule(json.data.schedule.items, json.data.schedule.postScheduleContent));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _searchActions = __webpack_require__(570);

	var _initialState = __webpack_require__(560);

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
	    default:
	      return state;
	  }
	};

	exports.default = search;

/***/ },

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchSearchResults = exports.RECEIVE_SEARCH_RESULTS = exports.REQUEST_SEARCH_RESULTS = undefined;

	var _algoliaSearch = __webpack_require__(571);

	var _algoliaSearch2 = _interopRequireDefault(_algoliaSearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REQUEST_SEARCH_RESULTS = exports.REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS';
	var RECEIVE_SEARCH_RESULTS = exports.RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

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

	var fetchSearchResults = exports.fetchSearchResults = function fetchSearchResults(query) {
	  return function (dispatch) {
	    dispatch(requestSearchResults());

	    return _algoliaSearch2.default.search(query, function (err, content) {
	      dispatch(receiveSearchResults(content.hits));
	    });
	  };
	};

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _algoliasearch = __webpack_require__(572);

	var _algoliasearch2 = _interopRequireDefault(_algoliasearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var client = (0, _algoliasearch2.default)('74S1JNB1ZT', '3de6fdbafc477cf019673bb81043ae0d');
	var index = client.initIndex('pages');

	exports.default = index;

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Login = __webpack_require__(606);

	var _Login2 = _interopRequireDefault(_Login);

	var _Header = __webpack_require__(642);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(651);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _FlashMessage = __webpack_require__(655);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _Loading = __webpack_require__(656);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Layouts = __webpack_require__(607);

	var _authActions = __webpack_require__(557);

	var _articleActions = __webpack_require__(565);

	var _scheduleActions = __webpack_require__(568);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var token = localStorage.getItem('antiVax_auth_token');

	      if (token) {
	        this.props.attemptToken(token);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (!this.props.user && newProps.user) {
	        this.props.fetchArticles();
	        this.props.fetchSchedule();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var user = _props.user;
	      var attemptingLogin = _props.attemptingLogin;
	      var isFetchingArticles = _props.isFetchingArticles;
	      var isFetchingSchedule = _props.isFetchingSchedule;
	      var children = _props.children;
	      var location = _props.location;


	      if (attemptingLogin || isFetchingArticles || isFetchingSchedule) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        if (user) {
	          return _react2.default.createElement(
	            _Layouts.Page,
	            null,
	            _react2.default.createElement(_Header2.default, { location: location }),
	            _react2.default.createElement(
	              _Layouts.PageContent,
	              null,
	              children
	            ),
	            _react2.default.createElement(_Footer2.default, null),
	            _react2.default.createElement(_FlashMessage2.default, null)
	          );
	        } else {
	          return _react2.default.createElement(
	            _Layouts.Page,
	            null,
	            _react2.default.createElement(
	              _Layouts.PageContent,
	              null,
	              _react2.default.createElement(_Login2.default, null)
	            ),
	            _react2.default.createElement(_FlashMessage2.default, null)
	          );
	        }
	      }
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetchingSchedule: state.schedule.isFetching,
	    isFetchingArticles: state.articles.isFetching,
	    attemptingLogin: state.auth.isFetching,
	    user: state.auth.user
	  };
	}, function (dispatch) {
	  return {
	    attemptToken: function attemptToken(token) {
	      dispatch((0, _authActions.loginWithToken)(token));
	    },
	    fetchArticles: function fetchArticles() {
	      dispatch((0, _articleActions.fetchArticles)());
	    },
	    fetchSchedule: function fetchSchedule() {
	      dispatch((0, _scheduleActions.fetchSchedule)());
	    }
	  };
		})(App);

/***/ },

/***/ 606:
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

	var _UI = __webpack_require__(619);

	var _authActions = __webpack_require__(557);

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

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageContent = exports.Page = exports.MediaFigure = exports.MediaBody = exports.Media = exports.ListInlineItem = exports.ListInline = exports.ListItem = exports.List = exports.GridItem = exports.Grid = exports.Wrap = exports.Flex = exports.Block = undefined;

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
	  var width = _ref$width === undefined ? '90%' : _ref$width;
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
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = exports.Alert = exports.Breadcrumbs = exports.TextArea = exports.TextInput = exports.Link = exports.Button = exports.Spinner = undefined;

	var _Alert = __webpack_require__(620);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Breadcrumbs = __webpack_require__(622);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _Button = __webpack_require__(624);

	var _Button2 = _interopRequireDefault(_Button);

	var _ModalWindow = __webpack_require__(626);

	var _Link = __webpack_require__(628);

	var _Link2 = _interopRequireDefault(_Link);

	var _Spinner = __webpack_require__(630);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _TextArea = __webpack_require__(632);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _TextInput = __webpack_require__(640);

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

/***/ 620:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Alert = __webpack_require__(621);

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

/***/ 621:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Alert":"Alert__Alert___37_QC","Alert__message":"Alert__Alert__message___2wCZF","Alert__message_default":"Alert__Alert__message_default___n_R9C","Alert__message_error":"Alert__Alert__message_error___2id4W","alert-enter":"Alert__alert-enter___K6JdL","alert-enter-active":"Alert__alert-enter-active___3vlCw","alert-leave":"Alert__alert-leave___2PpYT","alert-leave-active":"Alert__alert-leave-active___2ha_Q"};

/***/ },

/***/ 622:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Breadcrumbs = __webpack_require__(623);

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

/***/ 623:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Breadcrumbs":"Breadcrumbs__Breadcrumbs___2WLj0","Breadcrumbs__item":"Breadcrumbs__Breadcrumbs__item___1DayI"};

/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Button = __webpack_require__(625);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Button = function Button(_ref) {
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	  var _ref$fullWidth = _ref.fullWidth;
	  var fullWidth = _ref$fullWidth === undefined ? false : _ref$fullWidth;
	  var _ref$small = _ref.small;
	  var small = _ref$small === undefined ? false : _ref$small;
	  var _ref$large = _ref.large;
	  var large = _ref$large === undefined ? false : _ref$large;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$href = _ref.href;
	  var href = _ref$href === undefined ? null : _ref$href;
	  var _ref$inverse = _ref.inverse;
	  var inverse = _ref$inverse === undefined ? false : _ref$inverse;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'accent1' : _ref$theme;
	  var extraClassNames = _ref.extraClassNames;

	  var style = {
	    padding: baseline * 0.75 + 'rem ' + baseline * 1.5 + 'rem',
	    lineHeight: 1.7 * baseline + 'rem',
	    fontSize: 1.167 * baseline + 'rem'
	  };

	  if (small) {
	    style = {
	      padding: baseline * 0.3 + 'rem ' + baseline * 1 + 'rem',
	      lineHeight: 1.5 * baseline + 'rem',
	      fontSize: 0.917 * baseline + 'rem'
	    };
	  }

	  if (fullWidth) {
	    style.width = '100%';
	  }

	  var className = [];

	  className.push(inverse ? _Button2.default.InverseButton : _Button2.default.Button);

	  switch (theme) {
	    case 'error':
	      className.push(inverse ? _Button2.default.InverseButton_error : _Button2.default.Button_error);
	      break;
	    case 'accent':
	    default:
	      className.push(inverse ? _Button2.default.InverseButton_accent : _Button2.default.Button_accent);
	      break;
	  }

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      {
	        style: style,
	        disabled: disabled,
	        className: className.join(' ') + ' ' + extraClassNames,
	        to: to },
	      children
	    );
	  } else if (href) {
	    return _react2.default.createElement(
	      'a',
	      {
	        style: style,
	        disabled: disabled,
	        className: className.join(' ') + ' ' + extraClassNames,
	        href: href },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'button',
	      {
	        style: style,
	        disabled: disabled,
	        className: className.join(' ') + ' ' + extraClassNames,
	        onClick: onClick },
	      children
	    );
	  }
	};

	exports.default = Button;

/***/ },

/***/ 625:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InverseButton":"Button__InverseButton___3OQXU","InverseButton_accent":"Button__InverseButton_accent___13osz","InverseButton_error":"Button__InverseButton_error___3idBZ","Button":"Button__Button___QI7b2","Button_accent":"Button__Button_accent___33NpS","Button_error":"Button__Button_error___3PSUX"};

/***/ },

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _ModalWindow = __webpack_require__(627);

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

/***/ 627:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Modal":"ModalWindow__Modal___2klcg","ModalWindow":"ModalWindow__ModalWindow___2tVyZ","ModalWindow__header":"ModalWindow__ModalWindow__header___1QrWH","ModalWindow__body":"ModalWindow__ModalWindow__body___3QuQh","ModalWindow__footer":"ModalWindow__ModalWindow__footer___2I0TF"};

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

	var _Link = __webpack_require__(629);

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

/***/ 629:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Link":"Link__Link___3isgY","Link_accent":"Link__Link_accent___A81HH","Link_error":"Link__Link_error___2hKKc"};

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(631);

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

/***/ 631:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Spinner":"Spinner__Spinner___1fiyk","Spinner__inner":"Spinner__Spinner__inner___58vcT","Spinner__circle":"Spinner__Spinner__circle___2ZugO","sk-circleFadeDelay":"Spinner__sk-circleFadeDelay___1Etn8","Spinner__circle1":"Spinner__Spinner__circle1___BOD7n","Spinner__circle2":"Spinner__Spinner__circle2___2aBtr","Spinner__circle3":"Spinner__Spinner__circle3___1BaZf","Spinner__circle4":"Spinner__Spinner__circle4___3V5r7","Spinner__circle5":"Spinner__Spinner__circle5___3DJ5X","Spinner__circle6":"Spinner__Spinner__circle6___ZpU5m","Spinner__circle7":"Spinner__Spinner__circle7___XpnK5","Spinner__circle8":"Spinner__Spinner__circle8___1_RRX","Spinner__circle9":"Spinner__Spinner__circle9___fO0OG","Spinner__circle10":"Spinner__Spinner__circle10___ni35A","Spinner__circle11":"Spinner__Spinner__circle11___1hav9","Spinner__circle12":"Spinner__Spinner__circle12___2ipzT"};

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _anchorme = __webpack_require__(633);

	var _striptags = __webpack_require__(634);

	var _striptags2 = _interopRequireDefault(_striptags);

	var _reactTextareaAutosize = __webpack_require__(635);

	var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

	var _InputLabel = __webpack_require__(637);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _TextArea = __webpack_require__(639);

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

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(638);

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

/***/ 638:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InputLabel":"InputLabel__InputLabel___1CemI","InputLabel__label":"InputLabel__InputLabel__label___2Yy_P","InputLabel__error":"InputLabel__InputLabel__error___2MFNd","InputLabel_error":"InputLabel__InputLabel_error___3Ep5q"};

/***/ },

/***/ 639:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextArea":"TextArea__TextArea___19ip7","TextArea__input":"TextArea__TextArea__input___x5B4I","TextArea__input_error":"TextArea__TextArea__input_error___369gU"};

/***/ },

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(637);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _TextInput = __webpack_require__(641);

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
	      var label = _props.label;
	      var error = _props.error;
	      var value = _props.value;
	      var placeholder = _props.placeholder;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;
	      var _props$type = _props.type;
	      var type = _props$type === undefined ? 'text' : _props$type;


	      return _react2.default.createElement(
	        'label',
	        { className: _TextInput2.default.TextInput },
	        label ? _react2.default.createElement(_InputLabel2.default, { label: label, error: error }) : null,
	        _react2.default.createElement('input', { ref: function ref(el) {
	            _this2._element = el;
	          },
	          value: value,
	          className: _TextInput2.default.TextInput__input + ' ' + (error ? _TextInput2.default.TextInput__input_error : null),
	          disabled: disabled,
	          type: type,
	          onChange: this.onChange,
	          placeholder: placeholder })
	      );
	    }
	  }]);

	  return TextInput;
	}(_react2.default.Component);

		exports.default = TextInput;

/***/ },

/***/ 641:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextInput":"TextInput__TextInput___1ACGY","TextInput__input":"TextInput__TextInput__input___1ryf3","TextInput__input_error":"TextInput__TextInput__input_error___3pTJz"};

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _MainNav = __webpack_require__(643);

	var _MainNav2 = _interopRequireDefault(_MainNav);

	var _SearchBar = __webpack_require__(645);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _Header = __webpack_require__(647);

	var _Header2 = _interopRequireDefault(_Header);

	var _Layouts = __webpack_require__(607);

	var _CurrentUser = __webpack_require__(648);

	var _CurrentUser2 = _interopRequireDefault(_CurrentUser);

	var _logo = __webpack_require__(650);

	var _logo2 = _interopRequireDefault(_logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = function Header(_ref) {
	  var location = _ref.location;

	  return _react2.default.createElement(
	    'header',
	    null,
	    _react2.default.createElement(
	      'div',
	      { className: _Header2.default.CoverImg },
	      _react2.default.createElement(_CurrentUser2.default, null),
	      _react2.default.createElement(
	        'div',
	        { className: _Header2.default.CoverImg__body },
	        _react2.default.createElement(
	          _Layouts.Wrap,
	          { maxWidth: '80rem' },
	          _react2.default.createElement(
	            'div',
	            { className: _Header2.default.Header },
	            _react2.default.createElement(
	              _Layouts.Grid,
	              { alignItems: 'center' },
	              _react2.default.createElement(
	                _Layouts.GridItem,
	                { span: 1, outOf: 5 },
	                _react2.default.createElement('img', { src: _logo2.default, className: _Header2.default.Header__logo })
	              ),
	              _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                  _Layouts.Block,
	                  { n: 2 },
	                  _react2.default.createElement(
	                    _Layouts.Block,
	                    null,
	                    _react2.default.createElement(
	                      'h1',
	                      { className: _Header2.default.Header__title },
	                      'Vaccination Information Center'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    'h2',
	                    { className: _Header2.default.Header__subtitle },
	                    'All the information you need to know about vaccines and vaccination in Manitoba'
	                  )
	                ),
	                _react2.default.createElement(_SearchBar2.default, { location: location })
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(_MainNav2.default, { location: location })
	      )
	    )
	  );
	};

	exports.default = Header;

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Layouts = __webpack_require__(607);

	var _MainNav = __webpack_require__(644);

	var _MainNav2 = _interopRequireDefault(_MainNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navItems = [{
	  label: 'Ask a Question',
	  path: ("/app") + '/questions'
	}, {
	  label: 'About Vaccines',
	  path: ("/app") + '/about-vaccines'
	}, {
	  label: 'Vaccine Safety',
	  path: ("/app") + '/vaccine-safety'
	}, {
	  label: 'Vaccination Schedule',
	  path: ("/app") + '/vaccination-schedule'
	}, {
	  label: 'Blog',
	  path: ("/app") + '/blog'
	}];

	var MainNav = function MainNav(_ref) {
	  var location = _ref.location;

	  var routeStateMap = {
	    'questions': { left: 0, opacity: 1 },
	    'about-vaccines': { left: '20%', opacity: 1 },
	    'vaccine-safety': { left: '40%', opacity: 1 },
	    'vaccination-schedule': { left: '60%', opacity: 1 },
	    'blog': { left: '80%', opacity: 1 }
	  };

	  var currentSection = location.pathname.split('/')[2];
	  var indicatorStyle = routeStateMap[currentSection];

	  return _react2.default.createElement(
	    'div',
	    { className: _MainNav2.default.Bg },
	    _react2.default.createElement(
	      _Layouts.Wrap,
	      { maxWidth: '80rem' },
	      _react2.default.createElement(
	        'div',
	        { className: _MainNav2.default.MainNav },
	        _react2.default.createElement('div', { style: indicatorStyle, className: _MainNav2.default.MainNav__indicator }),
	        _react2.default.createElement(
	          _Layouts.Grid,
	          null,
	          navItems.map(function (item) {
	            return _react2.default.createElement(
	              _Layouts.GridItem,
	              { key: item.path },
	              _react2.default.createElement(
	                _reactRouter.Link,
	                { to: item.path, className: _MainNav2.default.MainNav__item,
	                  activeClassName: _MainNav2.default.MainNav__item_active },
	                item.label
	              )
	            );
	          })
	        )
	      )
	    )
	  );
	};

	exports.default = MainNav;

/***/ },

/***/ 644:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Bg":"MainNav__Bg___2OOEx","MainNav":"MainNav__MainNav___4WNh6","MainNav__indicator":"MainNav__MainNav__indicator___3cTcw","MainNav__indicator_active":"MainNav__MainNav__indicator_active___22mIC","MainNav__item":"MainNav__MainNav__item___1_Fro","MainNav__item_active":"MainNav__MainNav__item_active___1oBuu"};

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _SearchBar = __webpack_require__(646);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var typeDelay = 500;

	var SearchBar = function (_React$Component) {
	  _inherits(SearchBar, _React$Component);

	  function SearchBar(props) {
	    _classCallCheck(this, SearchBar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));

	    _this.handleType = _this.handleType.bind(_this);
	    _this.state = {
	      timeoutId: 0
	    };
	    return _this;
	  }

	  _createClass(SearchBar, [{
	    key: 'handleType',
	    value: function handleType() {
	      var _this2 = this;

	      clearTimeout(this.state.timeoutId);
	      var timeoutId = setTimeout(function () {
	        var query = _this2._input.value;

	        if (query) {
	          _reactRouter.hashHistory.push({
	            pathname: ("/app") + '/search',
	            query: { q: query }
	          });
	        } else {
	          _reactRouter.hashHistory.push(("/app") + '/questions');
	        }
	      }, typeDelay);

	      this.setState({ timeoutId: timeoutId });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var query = this.props.location.query;


	      return _react2.default.createElement(
	        'div',
	        { className: _SearchBar2.default.SearchBar },
	        _react2.default.createElement('input', { type: 'text',
	          className: _SearchBar2.default.SearchBar__input,
	          defaultValue: query.q ? query.q : '',
	          ref: function ref(el) {
	            _this3._input = el;
	          },
	          onChange: this.handleType,
	          placeholder: 'search for keywords, e.g. \'polio vaccine\'' })
	      );
	    }
	  }]);

	  return SearchBar;
	}(_react2.default.Component);

		exports.default = SearchBar;

/***/ },

/***/ 646:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SearchBar":"SearchBar__SearchBar___dtdTh","SearchBar__input":"SearchBar__SearchBar__input___gwQMh"};

/***/ },

/***/ 647:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CoverImg":"Header__CoverImg___31A8B","CoverImg__body":"Header__CoverImg__body___2bO8r","Header":"Header__Header___oE2FH","Header__logo":"Header__Header__logo___1rqU_","Header__title":"Header__Header__title___2tixa","Header__subtitle":"Header__Header__subtitle____Z_OB"};

/***/ },

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _CurrentUser = __webpack_require__(649);

	var _CurrentUser2 = _interopRequireDefault(_CurrentUser);

	var _authActions = __webpack_require__(557);

	var _UI = __webpack_require__(619);

	var _Layouts = __webpack_require__(607);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CurrentUser = function CurrentUser(_ref) {
	  var user = _ref.user;
	  var logOut = _ref.logOut;

	  return _react2.default.createElement(
	    'div',
	    { className: _CurrentUser2.default.CurrentUser },
	    _react2.default.createElement(
	      _Layouts.ListInline,
	      null,
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _CurrentUser2.default.CurrentUser__name },
	          'logged in as ',
	          user.name
	        )
	      ),
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          _UI.Button,
	          { onClick: logOut },
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

/***/ 649:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CurrentUser":"CurrentUser__CurrentUser___1WaU6","CurrentUser__name":"CurrentUser__CurrentUser__name___12hIZ"};

/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.2b9f6da2b3664dbec7b1bcf2b91b608a.svg";

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

	var _Footer = __webpack_require__(652);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _FooterNav = __webpack_require__(653);

	var _FooterNav2 = _interopRequireDefault(_FooterNav);

	var _Layouts = __webpack_require__(607);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var contactNav = [{
	  label: 'Jennifer Potter',
	  emph: true
	}, {
	  label: '(204) 140-3849'
	}, {
	  label: 'jpotter@umanitoba.ca'
	}];

	var Footer = function Footer(_ref) {
	  var aboutProjectArticles = _ref.aboutProjectArticles;
	  var additionalInformationArticles = _ref.additionalInformationArticles;

	  var aboutNav = aboutProjectArticles.map(function (a) {
	    return {
	      label: a.title,
	      path: ("/app") + '/' + a.type.id + '/' + a.url
	    };
	  });

	  var infoNav = additionalInformationArticles.map(function (a) {
	    return {
	      label: a.title,
	      path: ("/app") + '/' + a.type.id + '/' + a.url
	    };
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: _Footer2.default.Bg },
	    _react2.default.createElement(
	      _Layouts.Wrap,
	      { maxWidth: '40rem' },
	      _react2.default.createElement(
	        'div',
	        { className: _Footer2.default.Footer },
	        _react2.default.createElement(
	          _Layouts.Grid,
	          null,
	          _react2.default.createElement(
	            _Layouts.GridItem,
	            null,
	            _react2.default.createElement(_FooterNav2.default, { items: contactNav, title: 'Contact' })
	          ),
	          _react2.default.createElement(
	            _Layouts.GridItem,
	            null,
	            _react2.default.createElement(_FooterNav2.default, { items: aboutNav, title: 'About Project' })
	          ),
	          _react2.default.createElement(
	            _Layouts.GridItem,
	            null,
	            _react2.default.createElement(_FooterNav2.default, { items: infoNav, title: 'Additional' })
	          )
	        )
	      )
	    )
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    aboutProjectArticles: state.articles.items.filter(function (i) {
	      return i.isPublished && i.type.id === 'about-project';
	    }),
	    additionalInformationArticles: state.articles.items.filter(function (i) {
	      return i.isPublished && i.type.id === 'additional-information';
	    })
	  };
		})(Footer);

/***/ },

/***/ 652:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Bg":"Footer__Bg___17iby","Footer":"Footer__Footer___268PT"};

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Layouts = __webpack_require__(607);

	var _FooterNav = __webpack_require__(654);

	var _FooterNav2 = _interopRequireDefault(_FooterNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FooterNav = function FooterNav(_ref) {
	  var items = _ref.items;
	  var title = _ref.title;

	  var menu = items.map(function (i) {
	    return _react2.default.createElement(
	      _Layouts.ListItem,
	      { key: i.label },
	      _react2.default.createElement(
	        'div',
	        { className: _FooterNav2.default.FooterNav__item + ' ' + (i.emph ? _FooterNav2.default.FooterNav__item_emph : null) },
	        i.path ? _react2.default.createElement(
	          _reactRouter.Link,
	          { className: _FooterNav2.default.FooterNav__link, to: i.path },
	          i.label
	        ) : i.label
	      )
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: _FooterNav2.default.FooterNav },
	    _react2.default.createElement(
	      _Layouts.Block,
	      null,
	      _react2.default.createElement(
	        'div',
	        { className: _FooterNav2.default.FooterNav__title },
	        title
	      )
	    ),
	    _react2.default.createElement(
	      _Layouts.List,
	      null,
	      menu
	    )
	  );
	};

	exports.default = FooterNav;

/***/ },

/***/ 654:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"FooterNav":"FooterNav__FooterNav___39W3R","FooterNav__title":"FooterNav__FooterNav__title___1lOWc","FooterNav__item":"FooterNav__FooterNav__item___2e4X2","FooterNav__link":"FooterNav__FooterNav__link___KUOZh"};

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(619);

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

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Loading = __webpack_require__(657);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(619);

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

/***/ 657:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Loading":"Loading__Loading___3pycz"};

/***/ },

/***/ 658:
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

	var _Layouts = __webpack_require__(607);

	var _SideBar = __webpack_require__(659);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	var _SideNav = __webpack_require__(661);

	var _SideNav2 = _interopRequireDefault(_SideNav);

	var _Body = __webpack_require__(672);

	var _Body2 = _interopRequireDefault(_Body);

	var _NotFound = __webpack_require__(673);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _config = __webpack_require__(675);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Section = function (_React$Component) {
	  _inherits(Section, _React$Component);

	  function Section(props) {
	    _classCallCheck(this, Section);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Section).call(this, props));

	    _this.state = {
	      notFound: false
	    };
	    return _this;
	  }

	  _createClass(Section, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var _props$params = _props.params;
	      var sectionId = _props$params.sectionId;
	      var articleId = _props$params.articleId;
	      var articles = _props.articles;


	      if ((0, _config.isSection)(sectionId)) {
	        if (!articleId) {
	          this.setState({
	            notFound: false
	          }, function () {
	            _reactRouter.hashHistory.push(("/app") + '/' + sectionId + '/' + articles[0].url);
	          });
	        }
	      } else {
	        this.setState({
	          notFound: true
	        });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$params = newProps.params;
	      var sectionId = _newProps$params.sectionId;
	      var articleId = _newProps$params.articleId;
	      var articles = newProps.articles;


	      if ((0, _config.isSection)(sectionId)) {
	        if (!articleId) {
	          this.setState({
	            notFound: false
	          }, function () {
	            _reactRouter.hashHistory.push(("/app") + '/' + sectionId + '/' + articles[0].url);
	          });
	        }
	      } else {
	        this.setState({
	          notFound: true
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.state.notFound) {
	        return _react2.default.createElement(_NotFound2.default, null);
	      } else {
	        var _props2 = this.props;
	        var sectionId = _props2.params.sectionId;
	        var children = _props2.children;
	        var articles = _props2.articles;

	        var currentSection = (0, _config.getCurrentSection)(sectionId);

	        var navItems = articles.map(function (a) {
	          return {
	            url: ("/app") + '/' + a.type.id + '/' + a.url,
	            title: a.title
	          };
	        });

	        return _react2.default.createElement(
	          _Layouts.Wrap,
	          null,
	          _react2.default.createElement(
	            _Layouts.Grid,
	            null,
	            _react2.default.createElement(
	              _Layouts.GridItem,
	              { span: 1, outOf: 4 },
	              _react2.default.createElement(
	                _SideBar2.default,
	                null,
	                _react2.default.createElement(_SideNav2.default, { title: currentSection.label, navItems: navItems })
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.GridItem,
	              null,
	              _react2.default.createElement(
	                _Body2.default,
	                null,
	                children
	              )
	            )
	          )
	        );
	      }
	    }
	  }]);

	  return Section;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var sectionId = ownProps.params.sectionId;


	  return {
	    articles: state.articles.items.filter(function (a) {
	      return a.isPublished && a.type.id === sectionId;
	    })
	  };
		})(Section);

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _SideBar = __webpack_require__(660);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SideBar = function SideBar(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _SideBar2.default.SideBar },
	    children
	  );
	};

	exports.default = SideBar;

/***/ },

/***/ 660:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SideBar":"SideBar__SideBar___3o3NU"};

/***/ },

/***/ 661:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Layouts = __webpack_require__(607);

	var _Typography = __webpack_require__(662);

	var _SideNav = __webpack_require__(671);

	var _SideNav2 = _interopRequireDefault(_SideNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SideNav = function SideNav(_ref) {
	  var title = _ref.title;
	  var navItems = _ref.navItems;

	  return _react2.default.createElement(
	    'aside',
	    { className: _SideNav2.default.SideNav },
	    _react2.default.createElement(
	      _Layouts.Block,
	      { n: 2 },
	      _react2.default.createElement(
	        'div',
	        { className: _SideNav2.default.SideNav__title },
	        _react2.default.createElement(
	          _Typography.Heading2,
	          null,
	          title
	        )
	      )
	    ),
	    navItems.map(function (i) {
	      return _react2.default.createElement(
	        _reactRouter.Link,
	        {
	          to: i.url,
	          key: i.url,
	          activeClassName: _SideNav2.default.SideNav__item_active,
	          className: _SideNav2.default.SideNav__item },
	        i.title
	      );
	    })
	  );
	};

	exports.default = SideNav;

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.Content = undefined;

	var _Content = __webpack_require__(663);

	var _Content2 = _interopRequireDefault(_Content);

	var _Heading = __webpack_require__(665);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Heading3 = __webpack_require__(667);

	var _Heading4 = _interopRequireDefault(_Heading3);

	var _Heading5 = __webpack_require__(669);

	var _Heading6 = _interopRequireDefault(_Heading5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Content = _Content2.default;
	exports.Heading1 = _Heading2.default;
	exports.Heading2 = _Heading4.default;
	exports.Heading3 = _Heading6.default;

/***/ },

/***/ 663:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Content = __webpack_require__(664);

	var _Content2 = _interopRequireDefault(_Content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Content = function Content(_ref) {
	  var children = _ref.children;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var _ref$text = _ref.text;
	  var text = _ref$text === undefined ? '' : _ref$text;

	  return _react2.default.createElement('div', { className: _Content2.default.Content + ' ' + extraClassNames,
	    dangerouslySetInnerHTML: { __html: text } });
	};

	exports.default = Content;

/***/ },

/***/ 664:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Content":"Content__Content___2RQ0U"};

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

	var _Heading = __webpack_require__(666);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Heading1 = function Heading1(_ref) {
	  var children = _ref.children;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var _ref$linkTo = _ref.linkTo;
	  var linkTo = _ref$linkTo === undefined ? null : _ref$linkTo;

	  if (linkTo) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { to: linkTo, className: _Heading2.default.Heading1Link },
	      _react2.default.createElement(
	        'h1',
	        { className: _Heading2.default.Heading1 + ' ' + extraClassNames },
	        children
	      )
	    );
	  } else {
	    return _react2.default.createElement(
	      'h1',
	      { className: _Heading2.default.Heading1 + ' ' + extraClassNames },
	      children
	    );
	  }
	};

	exports.default = Heading1;

/***/ },

/***/ 666:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading1":"Heading1__Heading1___3RGJF","Heading1Link":"Heading1__Heading1Link___26Q0_"};

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
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var _ref$linkTo = _ref.linkTo;
	  var linkTo = _ref$linkTo === undefined ? null : _ref$linkTo;

	  if (linkTo) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { to: linkTo, className: _Heading2.default.Heading2Link },
	      _react2.default.createElement(
	        'h2',
	        { className: _Heading2.default.Heading2 + ' ' + extraClassNames },
	        children
	      )
	    );
	  } else {
	    return _react2.default.createElement(
	      'h2',
	      { className: _Heading2.default.Heading2 + ' ' + extraClassNames },
	      children
	    );
	  }
	};

	exports.default = Heading2;

/***/ },

/***/ 668:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading2":"Heading2__Heading2___1lmJK","Heading2Link":"Heading2__Heading2Link___1uax0"};

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(670);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Heading3 = function Heading3(_ref) {
	  var children = _ref.children;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var _ref$linkTo = _ref.linkTo;
	  var linkTo = _ref$linkTo === undefined ? null : _ref$linkTo;

	  if (linkTo) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { to: linkTo, className: _Heading2.default.Heading3 + ' ' + _Heading2.default.Heading3Link + ' ' + extraClassNames },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'h2',
	      { className: _Heading2.default.Heading3 + ' ' + extraClassNames },
	      children
	    );
	  }
	};

	exports.default = Heading3;

/***/ },

/***/ 670:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading3":"Heading3__Heading3___1kigK","Heading3Link":"Heading3__Heading3Link___1JCmL"};

/***/ },

/***/ 671:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SideNav":"SideNav__SideNav___3OINv","SideNav__title":"SideNav__SideNav__title___3D0x3","SideNav__item":"SideNav__SideNav__item___1jV4V","SideNav__item_active":"SideNav__SideNav__item_active___1jplP"};

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;

	var Body = function Body(_ref) {
	  var _ref$pv = _ref.pv;
	  var pv = _ref$pv === undefined ? 6 : _ref$pv;
	  var _ref$ph = _ref.ph;
	  var ph = _ref$ph === undefined ? 6 : _ref$ph;
	  var children = _ref.children;

	  var style = {
	    height: '100%',
	    paddingTop: pv * baseline + 'rem',
	    paddingBottom: pv * baseline + 'rem',
	    paddingLeft: ph * baseline + 'rem',
	    paddingRight: ph * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    children
	  );
	};

	exports.default = Body;

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _NotFound = __webpack_require__(674);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Layouts = __webpack_require__(607);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotFound = function NotFound() {
	  return _react2.default.createElement(
	    'div',
	    { className: _NotFound2.default.NotFound },
	    _react2.default.createElement(
	      _Layouts.Block,
	      { n: 3 },
	      _react2.default.createElement(
	        'div',
	        { className: _NotFound2.default.NotFound__title },
	        '404'
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: _NotFound2.default.NotFound__body },
	      'Sorry, but the page you are looking for does not seem to exist...'
	    )
	  );
	};

	exports.default = NotFound;

/***/ },

/***/ 674:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"NotFound":"NotFound__NotFound___31Cli","NotFound__title":"NotFound__NotFound__title___ryUEC","NotFound__body":"NotFound__NotFound__body___C99Bz"};

/***/ },

/***/ 675:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var blogposts = exports.blogposts = {
	  id: 'blog',
	  label: 'Blog'
	};

	var sections = exports.sections = [{
	  id: 'faqs',
	  label: 'FAQs'
	}, {
	  id: 'about-vaccines',
	  label: 'About Vaccines'
	}, {
	  id: 'vaccine-safety',
	  label: 'Vaccine Safety'
	}, {
	  id: 'vaccination-schedule',
	  label: 'Vaccination Schedule'
	}, {
	  id: 'about-project',
	  label: 'About Project'
	}, {
	  id: 'additional-information',
	  label: 'Additional Information'
	}];

	var categories = exports.categories = [{
	  id: 'diseases',
	  label: 'Diseases'
	}, {
	  id: 'vaccines',
	  label: 'Vaccines'
	}, {
	  id: 'ingridients',
	  label: 'Ingridients'
	}];

	var isSection = exports.isSection = function isSection(id) {
	  return sections.map(function (s) {
	    return s.id;
	  }).indexOf(id) !== -1;
	};

	var isBlogpost = exports.isBlogpost = function isBlogpost(id) {
	  return id === blogposts.id;
	};

	var isCategory = exports.isCategory = function isCategory(id) {
	  return categories.map(function (c) {
	    return c.id;
	  }).indexOf(id) !== -1;
	};

	var getCurrentSection = exports.getCurrentSection = function getCurrentSection(id) {
	  return sections.concat(categories).concat([blogposts]).filter(function (s) {
	    return s.id === id;
	  })[0];
	};

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Article = __webpack_require__(677);

	var _Article2 = _interopRequireDefault(_Article);

	var _CategoryDirectory = __webpack_require__(678);

	var _CategoryDirectory2 = _interopRequireDefault(_CategoryDirectory);

	var _VaccinationSchedule = __webpack_require__(679);

	var _VaccinationSchedule2 = _interopRequireDefault(_VaccinationSchedule);

	var _Layouts = __webpack_require__(607);

	var _NotFound = __webpack_require__(673);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SectionArticle = function SectionArticle(_ref) {
	  var article = _ref.article;
	  var children = _ref.children;
	  var params = _ref.params;

	  if (article) {
	    if (params.itemId) {
	      return children;
	    } else {
	      var attachment = '';
	      switch (article.attachment) {
	        case 'vaccines':
	        case 'diseases':
	        case 'ingridients':
	          attachment = _react2.default.createElement(_CategoryDirectory2.default, {
	            sectionId: params.sectionId,
	            articleId: params.articleId,
	            category: article.attachment });
	          break;
	        case 'schedule':
	          attachment = _react2.default.createElement(_VaccinationSchedule2.default, null);
	          break;
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Layouts.Block,
	          { n: article.attachment ? 3 : 0 },
	          _react2.default.createElement(_Article2.default, { article: article })
	        ),
	        attachment
	      );
	    }
	  } else {
	    return _react2.default.createElement(_NotFound2.default, null);
	  }
	};

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var articleId = ownProps.params.articleId;


	  return {
	    article: state.articles.items.filter(function (a) {
	      return a.isPublished && a.url === articleId;
	    })[0]
	  };
		})(SectionArticle);

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Layouts = __webpack_require__(607);

	var _Typography = __webpack_require__(662);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Article = function Article(_ref) {
	  var article = _ref.article;

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _Layouts.Block,
	      { n: 3 },
	      _react2.default.createElement(
	        _Typography.Heading1,
	        null,
	        article.title
	      )
	    ),
	    _react2.default.createElement(_Typography.Content, { text: article.content })
	  );
	};

	exports.default = Article;

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(619);

	var _Layouts = __webpack_require__(607);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CategoryDirectory = function CategoryDirectory(_ref) {
	  var items = _ref.items;
	  var sectionId = _ref.sectionId;
	  var articleId = _ref.articleId;

	  return _react2.default.createElement(
	    _Layouts.List,
	    null,
	    items.map(function (i) {
	      return _react2.default.createElement(
	        _Layouts.ListItem,
	        { key: i._id },
	        _react2.default.createElement(
	          _UI.Link,
	          { to: ("/app") + '/' + sectionId + '/' + articleId + '/' + i.url },
	          i.title
	        )
	      );
	    })
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var category = ownProps.category;


	  return {
	    items: state.articles.items.filter(function (a) {
	      return a.isPublished && a.type.id === category;
	    })
	  };
		})(CategoryDirectory);

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(619);

	var _Layouts = __webpack_require__(607);

	var _VaccinationSchedule = __webpack_require__(680);

	var _VaccinationSchedule2 = _interopRequireDefault(_VaccinationSchedule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VaccinationSchedule = function VaccinationSchedule(_ref) {
	  var items = _ref.items;
	  var vaccineArticle = _ref.vaccineArticle;

	  return _react2.default.createElement(
	    'div',
	    { className: _VaccinationSchedule2.default.Schedule },
	    _react2.default.createElement(
	      _Layouts.List,
	      { n: 0 },
	      _react2.default.createElement(
	        _Layouts.ListItem,
	        { n: 0 },
	        _react2.default.createElement(
	          'div',
	          { className: _VaccinationSchedule2.default.ScheduleItem + ' ' + _VaccinationSchedule2.default.ScheduleItem_header },
	          _react2.default.createElement(
	            _Layouts.Media,
	            null,
	            _react2.default.createElement(
	              _Layouts.MediaFigure,
	              { span: 1, outOf: 5 },
	              _react2.default.createElement(
	                'div',
	                { className: _VaccinationSchedule2.default.ScheduleItem__age },
	                'Child\'s age'
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.MediaBody,
	              null,
	              _react2.default.createElement(
	                'div',
	                { className: _VaccinationSchedule2.default.ScheduleItem__vaccines },
	                'Suggested vaccination(s)'
	              )
	            )
	          )
	        )
	      ),
	      items.map(function (i, k) {
	        return _react2.default.createElement(
	          _Layouts.ListItem,
	          { key: k, n: 0 },
	          _react2.default.createElement(
	            'div',
	            { className: _VaccinationSchedule2.default.ScheduleItem },
	            _react2.default.createElement(
	              _Layouts.Media,
	              null,
	              _react2.default.createElement(
	                _Layouts.MediaFigure,
	                { span: 1, outOf: 5 },
	                _react2.default.createElement(
	                  'div',
	                  { className: _VaccinationSchedule2.default.ScheduleItem__age },
	                  i.age
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.MediaBody,
	                null,
	                _react2.default.createElement(
	                  'div',
	                  { className: _VaccinationSchedule2.default.ScheduleItem__vaccines },
	                  _react2.default.createElement(
	                    _Layouts.List,
	                    { n: 0.5 },
	                    i.vaccines.map(function (v, j) {
	                      return _react2.default.createElement(
	                        _Layouts.ListItem,
	                        { key: j, n: 0.5 },
	                        _react2.default.createElement(
	                          _UI.Link,
	                          { to: ("/app") + '/' + vaccineArticle.type.id + '/' + vaccineArticle.url + '/' + v.url },
	                          v.title
	                        )
	                      );
	                    })
	                  )
	                )
	              )
	            )
	          )
	        );
	      })
	    )
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    items: state.schedule.items,
	    vaccineArticle: state.articles.items.filter(function (i) {
	      return i.isPublished && i.attachment === 'vaccines';
	    })[0]
	  };
		})(VaccinationSchedule);

/***/ },

/***/ 680:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Schedule":"VaccinationSchedule__Schedule___1jugB","ScheduleItem":"VaccinationSchedule__ScheduleItem___3xmtb","ScheduleItem__age":"VaccinationSchedule__ScheduleItem__age___1bAI1","ScheduleItem__vaccines":"VaccinationSchedule__ScheduleItem__vaccines___mHA4I","ScheduleItem_header":"VaccinationSchedule__ScheduleItem_header___1wdr4"};

/***/ },

/***/ 681:
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

	var _reactScroll = __webpack_require__(682);

	var _SectionCategoryItem = __webpack_require__(695);

	var _SectionCategoryItem2 = _interopRequireDefault(_SectionCategoryItem);

	var _Article = __webpack_require__(677);

	var _Article2 = _interopRequireDefault(_Article);

	var _NotFound = __webpack_require__(673);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SectionCategoryItem = function (_React$Component) {
	  _inherits(SectionCategoryItem, _React$Component);

	  function SectionCategoryItem() {
	    _classCallCheck(this, SectionCategoryItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SectionCategoryItem).apply(this, arguments));
	  }

	  _createClass(SectionCategoryItem, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      _reactScroll.animateScroll.scrollTo(this._element.offsetTop - 100, {
	        duration: 500
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      _reactScroll.animateScroll.scrollTo(this._element.offsetTop - 100, {
	        duration: 500
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var item = _props.item;
	      var _props$params = _props.params;
	      var sectionId = _props$params.sectionId;
	      var articleId = _props$params.articleId;


	      if (item) {
	        return _react2.default.createElement(
	          'div',
	          { ref: function ref(el) {
	              _this2._element = el;
	            }, className: _SectionCategoryItem2.default.SectionCategoryItem },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            {
	              to: ("/app") + '/' + sectionId + '/' + articleId,
	              className: _SectionCategoryItem2.default.SectionCategoryItem__backlink },
	            'back'
	          ),
	          _react2.default.createElement(_Article2.default, { article: item })
	        );
	      } else {
	        return _react2.default.createElement(_NotFound2.default, null);
	      }
	    }
	  }]);

	  return SectionCategoryItem;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var itemId = ownProps.params.itemId;


	  return {
	    item: state.articles.items.filter(function (a) {
	      return a.isPublished && a.url === itemId;
	    })[0]
	  };
		})(SectionCategoryItem);

/***/ },

/***/ 695:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SectionCategoryItem":"SectionCategoryItem__SectionCategoryItem___1tRod","SectionCategoryItem__backlink":"SectionCategoryItem__SectionCategoryItem__backlink___1xm4s"};

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(697);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Typography = __webpack_require__(662);

	var _Layouts = __webpack_require__(607);

	var _UI = __webpack_require__(619);

	var _Blog = __webpack_require__(802);

	var _Blog2 = _interopRequireDefault(_Blog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Blog = function Blog(_ref) {
	  var blogposts = _ref.blogposts;
	  var params = _ref.params;
	  var children = _ref.children;

	  if (params.blogpostId) {
	    return children;
	  } else {
	    return _react2.default.createElement(
	      _Layouts.Wrap,
	      { maxWidth: '45rem' },
	      _react2.default.createElement(
	        'div',
	        { className: _Blog2.default.page },
	        blogposts.map(function (p) {
	          return _react2.default.createElement(
	            _Layouts.Block,
	            { key: p._id, n: 6 },
	            _react2.default.createElement(
	              'div',
	              { className: _Blog2.default.entry },
	              _react2.default.createElement(
	                _Layouts.Block,
	                { n: 1 },
	                _react2.default.createElement(
	                  'div',
	                  { className: _Blog2.default.entry__date },
	                  'Posted on ',
	                  _react2.default.createElement(_reactTime2.default, { value: new Date(p.createdAt), format: 'MMM Do, h:mA' })
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.Block,
	                { n: 1.5 },
	                _react2.default.createElement(
	                  _Typography.Heading1,
	                  { linkTo: ("/app") + '/blog/' + p.url },
	                  p.title
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.Block,
	                { n: 2 },
	                _react2.default.createElement(
	                  'div',
	                  { className: _Blog2.default.entry__body },
	                  _react2.default.createElement(_Typography.Content, { text: p.snippet })
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _Blog2.default.entry__footer },
	                _react2.default.createElement(
	                  _UI.Button,
	                  {
	                    to: ("/app") + '/blog/' + p.url },
	                  'Read full post'
	                )
	              )
	            )
	          );
	        })
	      )
	    );
	  }
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    blogposts: state.articles.items.filter(function (a) {
	      return a.isPublished && a.type.id === 'blogposts';
	    })
	  };
		})(Blog);

/***/ },

/***/ 802:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"page":"Blog__page___sQp_f","entry":"Blog__entry___zzZzn","entry__body":"Blog__entry__body___3sC_A","entry__footer":"Blog__entry__footer___3kFL0","entry__date":"Blog__entry__date___37Agc"};

/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(697);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _reactScroll = __webpack_require__(682);

	var _reactRedux = __webpack_require__(470);

	var _Typography = __webpack_require__(662);

	var _Layouts = __webpack_require__(607);

	var _UI = __webpack_require__(619);

	var _NotFound = __webpack_require__(673);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Comments = __webpack_require__(804);

	var _Comments2 = _interopRequireDefault(_Comments);

	var _Blogpost = __webpack_require__(811);

	var _Blogpost2 = _interopRequireDefault(_Blogpost);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Blogpost = function (_React$Component) {
	  _inherits(Blogpost, _React$Component);

	  function Blogpost() {
	    _classCallCheck(this, Blogpost);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Blogpost).apply(this, arguments));
	  }

	  _createClass(Blogpost, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this._element) {
	        _reactScroll.animateScroll.scrollTo(this._element.offsetTop - 100, {
	          duration: 500
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var blogpost = this.props.blogpost;


	      if (blogpost) {
	        var sortedComments = blogpost.comments.sort(function (a, b) {
	          if (a.createdAt > b.createdAt) {
	            return -1;
	          } else if (a.createdAt < b.createdAt) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });

	        return _react2.default.createElement(
	          _Layouts.Wrap,
	          { maxWidth: '45rem' },
	          _react2.default.createElement(
	            'div',
	            { className: _Blogpost2.default.blogpost, ref: function ref(el) {
	                _this2._element = el;
	              } },
	            _react2.default.createElement(
	              _Layouts.Block,
	              { n: 1 },
	              _react2.default.createElement(
	                _Layouts.Flex,
	                { justifyContent: 'space-between' },
	                _react2.default.createElement(
	                  'div',
	                  { className: _Blogpost2.default.blogpost__date },
	                  'Posted on ',
	                  _react2.default.createElement(_reactTime2.default, { value: new Date(blogpost.createdAt), format: 'MMM Do, h:mA' })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.Block,
	              { n: 1.5 },
	              _react2.default.createElement(
	                _Typography.Heading1,
	                null,
	                blogpost.title
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.Block,
	              { n: 6 },
	              _react2.default.createElement(_Typography.Content, { text: blogpost.content })
	            ),
	            _react2.default.createElement(
	              _Layouts.Block,
	              { n: 6 },
	              _react2.default.createElement(_Comments2.default, { blogpost: blogpost, comments: sortedComments })
	            ),
	            _react2.default.createElement(
	              _Layouts.Flex,
	              { justifyContent: 'center' },
	              _react2.default.createElement(
	                _UI.Button,
	                {
	                  to: ("/app") + '/blog' },
	                'back to all posts'
	              )
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(_NotFound2.default, null);
	      }
	    }
	  }]);

	  return Blogpost;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var blogpostId = ownProps.params.blogpostId;


	  return {
	    blogpost: state.articles.items.filter(function (a) {
	      return a.isPublished && a.url === blogpostId;
	    })[0]
	  };
		})(Blogpost);

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Block = __webpack_require__(608);

	var _Block2 = _interopRequireDefault(_Block);

	var _Comment = __webpack_require__(805);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _CommentForm = __webpack_require__(810);

	var _CommentForm2 = _interopRequireDefault(_CommentForm);

	var _Heading = __webpack_require__(667);

	var _Heading2 = _interopRequireDefault(_Heading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comments = function Comments(_ref) {
	  var comments = _ref.comments;
	  var blogpost = _ref.blogpost;

	  var body = '';
	  if (comments.length > 0) {
	    body = _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        _Block2.default,
	        { n: 1.5 },
	        _react2.default.createElement(
	          _Heading2.default,
	          null,
	          'Comments'
	        )
	      ),
	      _react2.default.createElement(
	        _Block2.default,
	        { n: 6 },
	        comments.map(function (c, index) {
	          return _react2.default.createElement(_Comment2.default, { key: index, blogpost: blogpost, comment: c });
	        })
	      )
	    );
	  }

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _Block2.default,
	      { n: 6 },
	      _react2.default.createElement(_CommentForm2.default, { blogpost: blogpost })
	    ),
	    body
	  );
	};

	exports.default = Comments;

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(697);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Block = __webpack_require__(608);

	var _Block2 = _interopRequireDefault(_Block);

	var _List = __webpack_require__(611);

	var _Content = __webpack_require__(663);

	var _Content2 = _interopRequireDefault(_Content);

	var _Comment = __webpack_require__(806);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _CommentReply = __webpack_require__(807);

	var _CommentReply2 = _interopRequireDefault(_CommentReply);

	var _CommentReplyForm = __webpack_require__(809);

	var _CommentReplyForm2 = _interopRequireDefault(_CommentReplyForm);

	var _Link = __webpack_require__(628);

	var _Link2 = _interopRequireDefault(_Link);

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
	      var blogpost = _props.blogpost;

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
	          _Block2.default,
	          { n: comment.replies.length > 0 ? 3 : 0 },
	          _react2.default.createElement(_CommentReplyForm2.default, {
	            cancelCallback: function cancelCallback() {
	              return _this2.toggleForm();
	            },
	            comment: comment,
	            blogpostId: blogpost._id })
	        );
	      }

	      var replies = '';
	      if (comment.replies.length > 0) {
	        replies = _react2.default.createElement(
	          _List.List,
	          { n: 1.5 },
	          sortedReplies.map(function (r, index) {
	            return _react2.default.createElement(
	              _List.ListItem,
	              { n: 1.5, key: index },
	              _react2.default.createElement(_CommentReply2.default, { reply: r })
	            );
	          })
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: _Comment2.default.Comment },
	        _react2.default.createElement(
	          _Block2.default,
	          { n: this.state.showReplyForm || comment.replies.length > 0 ? 3 : 0 },
	          _react2.default.createElement(
	            _Block2.default,
	            { n: 1 },
	            _react2.default.createElement(
	              'div',
	              { className: _Comment2.default.Comment__info },
	              'by ',
	              comment.lastModifiedBy,
	              ' on ',
	              _react2.default.createElement(_reactTime2.default, { value: comment.lastModifiedAt, format: 'MMM Do, h:mA' })
	            )
	          ),
	          _react2.default.createElement(
	            _Block2.default,
	            { n: 1 },
	            _react2.default.createElement(_Content2.default, { text: comment.content })
	          ),
	          _react2.default.createElement(
	            _Link2.default,
	            { small: true, onClick: this.toggleForm },
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

/***/ 806:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comment":"Comment__Comment___CLS2w","Comment__info":"Comment__Comment__info___1rool","Comment__replies":"Comment__Comment__replies___PXLXR"};

/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(697);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _CommentReply = __webpack_require__(808);

	var _CommentReply2 = _interopRequireDefault(_CommentReply);

	var _Content = __webpack_require__(663);

	var _Content2 = _interopRequireDefault(_Content);

	var _Block = __webpack_require__(608);

	var _Block2 = _interopRequireDefault(_Block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CommentReply = function CommentReply(_ref) {
	  var reply = _ref.reply;

	  return _react2.default.createElement(
	    'div',
	    { className: _CommentReply2.default.CommentReply },
	    _react2.default.createElement(
	      _Block2.default,
	      { n: 1 },
	      _react2.default.createElement(
	        'div',
	        { className: _CommentReply2.default.CommentReply__info },
	        reply.lastModifiedBy,
	        ' on ',
	        _react2.default.createElement(_reactTime2.default, { value: reply.lastModifiedAt, format: 'MMM Do, h:mA' })
	      )
	    ),
	    _react2.default.createElement(_Content2.default, { text: reply.content })
	  );
	};

	exports.default = CommentReply;

/***/ },

/***/ 808:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CommentReply":"CommentReply__CommentReply___1vEam","CommentReply__info":"CommentReply__CommentReply__info___2gLt5"};

/***/ },

/***/ 809:
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

	var _ListInline = __webpack_require__(613);

	var _Block = __webpack_require__(608);

	var _Block2 = _interopRequireDefault(_Block);

	var _TextArea = __webpack_require__(632);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Link = __webpack_require__(628);

	var _Link2 = _interopRequireDefault(_Link);

	var _Button = __webpack_require__(624);

	var _Button2 = _interopRequireDefault(_Button);

	var _repliesActions = __webpack_require__(820);

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
	          _Block2.default,
	          { n: 1.5 },
	          _react2.default.createElement(_TextArea2.default, {
	            label: 'Your reply',
	            value: this.state.data.content,
	            error: this.state.errors.content,
	            disabled: isUpdating,
	            changeCallback: function changeCallback(v) {
	              return _this2.change('content', v);
	            } })
	        ),
	        _react2.default.createElement(
	          _ListInline.ListInline,
	          { n: 2 },
	          _react2.default.createElement(
	            _ListInline.ListInlineItem,
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
	            _ListInline.ListInlineItem,
	            { n: 2 },
	            _react2.default.createElement(
	              _Link2.default,
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
	  var blogpostId = ownProps.blogpostId;
	  var comment = ownProps.comment;


	  return {
	    createReply: function createReply(data) {
	      dispatch((0, _repliesActions.createReply)(data, blogpostId, comment._id));
	    }
	  };
		})(CommentReplyForm);

/***/ },

/***/ 810:
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

	var _Block = __webpack_require__(608);

	var _Block2 = _interopRequireDefault(_Block);

	var _TextArea = __webpack_require__(632);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Button = __webpack_require__(624);

	var _Button2 = _interopRequireDefault(_Button);

	var _commentsActions = __webpack_require__(566);

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
	      var _newProps$blogpost$ne = newProps.blogpost.newComment;
	      var errors = _newProps$blogpost$ne.errors;
	      var isUpdating = _newProps$blogpost$ne.isUpdating;


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

	      var isUpdating = this.props.blogpost.newComment.isUpdating;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Block2.default,
	          { n: 1 },
	          _react2.default.createElement(_TextArea2.default, {
	            label: 'Post a comment',
	            value: this.state.data.content,
	            error: this.state.errors.content,
	            disabled: isUpdating,
	            changeCallback: function changeCallback(v) {
	              return _this2.change('content', v);
	            } })
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
	  var blogpost = ownProps.blogpost;


	  return {
	    createComment: function createComment(data) {
	      dispatch((0, _commentsActions.createComment)(data, blogpost._id));
	    }
	  };
		})(CommentForm);

/***/ },

/***/ 811:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"blogpost":"Blogpost__blogpost___32jYF","blogpost__date":"Blogpost__blogpost__date___3wpGU"};

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Questions = __webpack_require__(813);

	var _Questions2 = _interopRequireDefault(_Questions);

	var _Layouts = __webpack_require__(607);

	var _Typography = __webpack_require__(662);

	var _SideNav = __webpack_require__(661);

	var _SideNav2 = _interopRequireDefault(_SideNav);

	var _SideBar = __webpack_require__(659);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	var _Body = __webpack_require__(672);

	var _Body2 = _interopRequireDefault(_Body);

	var _AskQuestionSide = __webpack_require__(814);

	var _AskQuestionSide2 = _interopRequireDefault(_AskQuestionSide);

	var _QuestionForm = __webpack_require__(817);

	var _QuestionForm2 = _interopRequireDefault(_QuestionForm);

	var _jen = __webpack_require__(818);

	var _jen2 = _interopRequireDefault(_jen);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Questions = function Questions(_ref) {
	  var faqs = _ref.faqs;
	  var children = _ref.children;
	  var params = _ref.params;

	  var navItems = faqs.map(function (f) {
	    return {
	      url: ("/app") + '/questions/' + f.url,
	      title: f.title
	    };
	  });

	  var content = '';
	  if (params.faqId) {
	    content = children;
	  } else {
	    content = _react2.default.createElement(
	      'div',
	      { className: _Questions2.default.QuestionsIntro },
	      _react2.default.createElement(
	        _Layouts.Block,
	        { n: 3 },
	        _react2.default.createElement(
	          _Layouts.Media,
	          { alignItems: 'center' },
	          _react2.default.createElement(
	            _Layouts.MediaFigure,
	            { n: 3 },
	            _react2.default.createElement('img', { src: _jen2.default, className: _Questions2.default.QuestionsIntro__image })
	          ),
	          _react2.default.createElement(
	            _Layouts.MediaBody,
	            null,
	            _react2.default.createElement(
	              _Layouts.Block,
	              null,
	              _react2.default.createElement(
	                _Typography.Heading1,
	                null,
	                'Have a question?'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Questions2.default.QuestionsIntro__text },
	              _react2.default.createElement(
	                'strong',
	                null,
	                'Dr. Jennifer Potter'
	              ),
	              ', our vaccine specialist,',
	              _react2.default.createElement('br', null),
	              'will be glad to assist you with your questions'
	            )
	          )
	        )
	      ),
	      _react2.default.createElement(_QuestionForm2.default, null)
	    );
	  }

	  return _react2.default.createElement(
	    _Layouts.Wrap,
	    null,
	    _react2.default.createElement(
	      _Layouts.Grid,
	      null,
	      _react2.default.createElement(
	        _Layouts.GridItem,
	        { span: 1, outOf: 3 },
	        _react2.default.createElement(
	          _SideBar2.default,
	          null,
	          params.faqId ? _react2.default.createElement(
	            _Layouts.Block,
	            { n: 6 },
	            _react2.default.createElement(_AskQuestionSide2.default, null)
	          ) : null,
	          _react2.default.createElement(_SideNav2.default, {
	            title: 'Frequently Asked Questions',
	            navItems: navItems })
	        )
	      ),
	      _react2.default.createElement(
	        _Layouts.GridItem,
	        null,
	        _react2.default.createElement(
	          _Body2.default,
	          null,
	          content
	        )
	      )
	    )
	  );
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    faqs: state.articles.items.filter(function (a) {
	      return a.isPublished && a.type.id === 'faqs';
	    })
	  };
		})(Questions);

/***/ },

/***/ 813:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"QuestionsIntro":"Questions__QuestionsIntro___1g-Jv","QuestionsIntro__image":"Questions__QuestionsIntro__image___1XAPZ","QuestionsIntro__text":"Questions__QuestionsIntro__text___1F9uK"};

/***/ },

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _AskQuestionSide = __webpack_require__(815);

	var _AskQuestionSide2 = _interopRequireDefault(_AskQuestionSide);

	var _Layouts = __webpack_require__(607);

	var _UI = __webpack_require__(619);

	var _jen = __webpack_require__(816);

	var _jen2 = _interopRequireDefault(_jen);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AskQuestionSide = function AskQuestionSide() {
	  return _react2.default.createElement(
	    'aside',
	    { className: _AskQuestionSide2.default.AskQuestionSide },
	    _react2.default.createElement(
	      _Layouts.Media,
	      { alignItems: 'center' },
	      _react2.default.createElement(
	        _Layouts.MediaFigure,
	        { n: 2 },
	        _react2.default.createElement('img', { src: _jen2.default, className: _AskQuestionSide2.default.AskQuestionSide__image })
	      ),
	      _react2.default.createElement(
	        _Layouts.MediaBody,
	        null,
	        _react2.default.createElement(
	          _Layouts.Block,
	          { n: 1.5 },
	          _react2.default.createElement(
	            'h1',
	            { className: _AskQuestionSide2.default.AskQuestionSide__title },
	            'Jennifer Potter'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _AskQuestionSide2.default.AskQuestionSide__text },
	            'Our vaccine specialist will be glad to assist you'
	          )
	        ),
	        _react2.default.createElement(
	          _UI.Button,
	          { to: ("/app") + '/questions' },
	          'Ask a Question'
	        )
	      )
	    )
	  );
	};

	exports.default = AskQuestionSide;

/***/ },

/***/ 815:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AskQuestionSide":"AskQuestionSide__AskQuestionSide___8F461","AskQuestionSide__image":"AskQuestionSide__AskQuestionSide__image___b5q8O","AskQuestionSide__text":"AskQuestionSide__AskQuestionSide__text___3Q75k","AskQuestionSide__title":"AskQuestionSide__AskQuestionSide__title___1JzpX"};

/***/ },

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/jen.3bb35a7c69e53c83a2d39cdf16bf6ecf.jpg";

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

	var _Layouts = __webpack_require__(607);

	var _UI = __webpack_require__(619);

	var _questionsActions = __webpack_require__(563);

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
	      var data = _newProps$question.data;
	      var isUpdating = _newProps$question.isUpdating;


	      if (!isUpdating) {
	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          this.setState({
	            data: {
	              posterName: data.user.name,
	              posterEmail: data.user.email,
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

	      var isUpdating = this.props.question.isUpdating;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Layouts.Block,
	          null,
	          _react2.default.createElement(_UI.TextInput, { label: 'Your name',
	            value: this.state.data.posterName,
	            error: this.state.errors.posterName,
	            placeholder: 'e.g. Casey',
	            disabled: isUpdating,
	            changeCallback: function changeCallback(v) {
	              return _this2.change('posterName', v);
	            } })
	        ),
	        _react2.default.createElement(
	          _Layouts.Block,
	          null,
	          _react2.default.createElement(_UI.TextInput, { label: 'Your email',
	            value: this.state.data.posterEmail,
	            error: this.state.errors.posterEmail,
	            placeholder: 'e.g. casey@gmail.com',
	            disabled: isUpdating,
	            changeCallback: function changeCallback(v) {
	              return _this2.change('posterEmail', v);
	            } })
	        ),
	        _react2.default.createElement(
	          _Layouts.Block,
	          { n: 1.5 },
	          _react2.default.createElement(_UI.TextArea, { label: 'Your question',
	            value: this.state.data.question,
	            error: this.state.errors.question,
	            placeholder: 'e.g. which vaccines are safe for kids under 5 years?',
	            disabled: isUpdating,
	            changeCallback: function changeCallback(v) {
	              return _this2.change('question', v);
	            } })
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
	    question: state.question
	  };
	}, function (dispatch) {
	  return {
	    createQuestion: function createQuestion(data) {
	      dispatch((0, _questionsActions.createQuestion)(data, 'You question has been sent, we will get back to you very soon :)'));
	    }
	  };
		})(QuestionForm);

/***/ },

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/jen.3bb35a7c69e53c83a2d39cdf16bf6ecf.jpg";

/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _NotFound = __webpack_require__(673);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Article = __webpack_require__(677);

	var _Article2 = _interopRequireDefault(_Article);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Faq = function Faq(_ref) {
	  var faq = _ref.faq;

	  if (faq) {
	    return _react2.default.createElement(_Article2.default, { article: faq });
	  } else {
	    return _react2.default.createElement(_NotFound2.default, null);
	  }
	};

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var faqId = ownProps.params.faqId;


	  return {
	    faq: state.articles.items.filter(function (a) {
	      return a.isPublished && a.url === faqId;
	    })[0]
	  };
		})(Faq);

/***/ },

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createReply = exports.REJECT_REPLY_CREATE = exports.CONFIRM_REPLY_CREATE = exports.REQUEST_REPLY_CREATE = undefined;

	__webpack_require__(558);

	var _flashActions = __webpack_require__(559);

	var _authActions = __webpack_require__(557);

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

	    fetch(("https://vdziubak.com/antiVaxServer") + '/articles/' + articleId + '/comments/' + commentId + '/replies', {
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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2NvbW1lbnRzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NjaGVkdWxlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NjaGVkdWxlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zZWFyY2hBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYWxnb2xpYVNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYXlvdXRzLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0Jsb2NrL0Jsb2NrLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9GbGV4L0ZsZXguanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL1BhZ2UvUGFnZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVUkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0JyZWFkY3J1bWJzL0JyZWFkY3J1bWJzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9MaW5rL0xpbmsuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0xpbmsvTGluay5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdi9NYWluTmF2LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0N1cnJlbnRVc2VyL0N1cnJlbnRVc2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdXJyZW50VXNlci9DdXJyZW50VXNlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2xvZ28uc3ZnIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRm9vdGVyTmF2L0Zvb3Rlck5hdi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyTmF2L0Zvb3Rlck5hdi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2lkZU5hdi9TaWRlTmF2LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0NvbnRlbnQvQ29udGVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9Db250ZW50L0NvbnRlbnQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcxL0hlYWRpbmcxLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcxL0hlYWRpbmcxLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMi9IZWFkaW5nMi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMi9IZWFkaW5nMi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzMvSGVhZGluZzMuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzMvSGVhZGluZzMuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVOYXYvU2lkZU5hdi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0JvZHkvQm9keS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb25BcnRpY2xlL1NlY3Rpb25BcnRpY2xlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZS9BcnRpY2xlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlEaXJlY3RvcnkvQ2F0ZWdvcnlEaXJlY3RvcnkuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9WYWNjaW5hdGlvblNjaGVkdWxlL1ZhY2NpbmF0aW9uU2NoZWR1bGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZhY2NpbmF0aW9uU2NoZWR1bGUvVmFjY2luYXRpb25TY2hlZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb25DYXRlZ29yeUl0ZW0vU2VjdGlvbkNhdGVnb3J5SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbkNhdGVnb3J5SXRlbS9TZWN0aW9uQ2F0ZWdvcnlJdGVtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQmxvZy9CbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CbG9nL0Jsb2cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9CbG9ncG9zdC9CbG9ncG9zdC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudFJlcGx5Rm9ybS9Db21tZW50UmVwbHlGb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ29tbWVudEZvcm0vQ29tbWVudEZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jsb2dwb3N0L0Jsb2dwb3N0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zL1F1ZXN0aW9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zL1F1ZXN0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9Bc2tRdWVzdGlvblNpZGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9Bc2tRdWVzdGlvblNpZGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9qZW4uanBnIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkZvcm0vUXVlc3Rpb25Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnMvamVuLmpwZyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRmFxL0ZhcS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9yZXBsaWVzQWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSZWRpcmVjdCwgaGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUnXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbidcbmltcG9ydCBTZWN0aW9uQXJ0aWNsZSBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbkFydGljbGUnXG5pbXBvcnQgU2VjdGlvbkNhdGVnb3J5SXRlbSBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbkNhdGVnb3J5SXRlbSdcbmltcG9ydCBCbG9nIGZyb20gJy4vY29tcG9uZW50cy9CbG9nJ1xuaW1wb3J0IEJsb2dwb3N0IGZyb20gJy4vY29tcG9uZW50cy9CbG9ncG9zdCdcbmltcG9ydCBRdWVzdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL1F1ZXN0aW9ucydcbmltcG9ydCBGYXEgZnJvbSAnLi9jb21wb25lbnRzL0ZhcSdcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpXG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9e2Ake1BVQkxJQ19QQVRIfWB9IGNvbXBvbmVudD17QXBwfT5cbiAgICAgICAgPEluZGV4UmVkaXJlY3QgdG89XCJxdWVzdGlvbnNcIiAvPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwicXVlc3Rpb25zXCIgY29tcG9uZW50PXtRdWVzdGlvbnN9PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmZhcUlkXCIgY29tcG9uZW50PXtGYXF9IC8+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJibG9nXCIgY29tcG9uZW50PXtCbG9nfT5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIjpibG9ncG9zdElkXCIgY29tcG9uZW50PXtCbG9ncG9zdH0vPlxuICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiOnNlY3Rpb25JZFwiIGNvbXBvbmVudD17U2VjdGlvbn0+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6YXJ0aWNsZUlkXCIgY29tcG9uZW50PXtTZWN0aW9uQXJ0aWNsZX0+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIjppdGVtSWRcIiBjb21wb25lbnQ9e1NlY3Rpb25DYXRlZ29yeUl0ZW19IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaW5kZXguanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gMjk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdFJlZHVjZXInXG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtNaWRkbGV3YXJlXVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKClcbiAgbWlkZGxld2FyZS5wdXNoKGxvZ2dlcilcbn1cblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zdG9yZS5qc1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoUmVkdWNlcidcbmltcG9ydCBmbGFzaCBmcm9tICcuL2ZsYXNoUmVkdWNlcidcbmltcG9ydCBxdWVzdGlvbiBmcm9tICcuL3F1ZXN0aW9uc1JlZHVjZXInXG5pbXBvcnQgYXJ0aWNsZXMgZnJvbSAnLi9hcnRpY2xlUmVkdWNlcidcbmltcG9ydCBzY2hlZHVsZSBmcm9tICcuL3NjaGVkdWxlUmVkdWNlcidcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi9zZWFyY2hSZWR1Y2VyJ1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGF1dGgsXG4gIGZsYXNoLFxuICBxdWVzdGlvbixcbiAgYXJ0aWNsZXMsXG4gIHNjaGVkdWxlLFxuICBzZWFyY2hcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcm9vdFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfQVVUSCwgTE9HSU4sIExPR09VVH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGF1dGggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmF1dGgsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVVUSDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuYXV0aCwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgTE9HSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH1cbiAgICBjYXNlIExPR09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBudWxsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hdXRoUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FVVEggPSAnUkVRVUVTVF9BVVRIJ1xuZXhwb3J0IGNvbnN0IExPR0lOID0gJ0xPR0lOJ1xuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdMT0dPVVQnXG5cbmNvbnN0IHJlcXVlc3RBdXRoID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQVVUSFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgZGlzcGF0Y2goe3R5cGU6IExPR09VVH0pXG4gIH1cbn1cblxuY29uc3QgbG9nSW4gPSAoXG4gIHVzZXJcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR0lOLFxuICAgIHVzZXJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoQ3JlZGVudGlhbHMgPSAoXG4gIGVtYWlsLFxuICBwYXNzd29yZFxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEF1dGgoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2F1dGgvYXV0aGVudGljYXRlLWNyZWRlbnRpYWxzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoVG9rZW4gPSAoXG4gIHRva2VuXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXV0aCgpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vYXV0aC9hdXRoZW50aWNhdGUtdG9rZW5gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdG9rZW5cbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicsIGpzb24uZGF0YS50b2tlbilcbiAgICAgICAgICBkaXNwYXRjaChsb2dJbihqc29uLmRhdGEudXNlcikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKGpzb24uZGF0YS5lcnJvciwgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hdXRoQWN0aW9ucy5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBTRVRfTUVTU0FHRSA9ICdTRVRfTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBVTlNFVF9NRVNTQUdFID0gJ1VOU0VUX01FU1NBR0UnXG5cbmNvbnN0IHNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlLFxuICB0aW1lb3V0SWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9NRVNTQUdFLFxuICAgIG1lc3NhZ2UsXG4gICAgbWVzc2FnZVR5cGUsXG4gICAgdGltZW91dElkXG4gIH1cbn1cblxuY29uc3QgdW5zZXRNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVU5TRVRfTUVTU0FHRVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmbGFzaE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1bnNldE1lc3NhZ2UoKSlcbiAgICB9LCAyMDAwKVxuXG4gICAgZGlzcGF0Y2goc2V0TWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlVHlwZSwgdCkpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9mbGFzaEFjdGlvbnMuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGF1dGg6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsXG4gIH0sXG4gIGZsYXNoOiB7XG4gICAgbWVzc2FnZTogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHRpbWVvdXRJZDogbnVsbFxuICB9LFxuICBuZXdRdWVzdGlvbjoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgYXJ0aWNsZXM6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgbmV3Q29tbWVudDoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgc2NoZWR1bGU6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBpdGVtczogW10sXG4gICAgcG9zdFNjaGVkdWxlQ29udGVudDogbnVsbFxuICB9LFxuICBzZWFyY2g6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICBpdGVtczogW11cbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qc1xuICoqLyIsImltcG9ydCB7U0VUX01FU1NBR0UsIFVOU0VUX01FU1NBR0V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgZmxhc2ggPSAoXG4gIHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLmZsYXNoKSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01FU1NBR0U6XG4gICAgICBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dElkKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgICAgdHlwZTogYWN0aW9uLm1lc3NhZ2VUeXBlLFxuICAgICAgICB0aW1lb3V0SWQ6IGFjdGlvbi50aW1lb3V0SWRcbiAgICAgIH0pXG4gICAgY2FzZSBVTlNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxhc2hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9mbGFzaFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfUVVFU1RJT05fQ1JFQVRFLCBDT05GSVJNX1FVRVNUSU9OX0NSRUFURSwgUkVKRUNUX1FVRVNUSU9OX0NSRUFURX0gZnJvbSAnLi9xdWVzdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgcXVlc3Rpb24gPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLm5ld1F1ZXN0aW9uLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1FVRVNUSU9OX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9RVUVTVElPTl9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLm5ld1F1ZXN0aW9uKVxuICAgIGNhc2UgUkVKRUNUX1FVRVNUSU9OX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBxdWVzdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUVVFU1RJT05fQ1JFQVRFID0gJ1JFUVVFU1RfUVVFU1RJT05fQ1JFQVRFJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fUVVFU1RJT05fQ1JFQVRFID0gJ0NPTkZJUk1fUVVFU1RJT05fQ1JFQVRFJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9RVUVTVElPTl9DUkVBVEUgPSAnUkVKRUNUX1FVRVNUSU9OX0NSRUFURSdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RDcmVhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9RVUVTVElPTl9DUkVBVEVcbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fUVVFU1RJT05fQ1JFQVRFXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0Q3JlYXRlID0gKFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9RVUVTVElPTl9DUkVBVEUsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVF1ZXN0aW9uID0gKFxuICBkYXRhLFxuICBzdWNjZXNzTWVzc2FnZVxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdENyZWF0ZSgpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vcXVlc3Rpb25zL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHF1ZXN0aW9uOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybUNyZWF0ZSgpKVxuICAgICAgICAgIGlmIChzdWNjZXNzTWVzc2FnZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKHN1Y2Nlc3NNZXNzYWdlLCAnbG9nJykpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgcGF5bG9hZFtwcm9wXSA9IGpzb24uZGF0YS5lcnJvcnNbcHJvcF0ubWVzc2FnZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdENyZWF0ZShwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgcXVlc3Rpb25zIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3F1ZXN0aW9uc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfQVJUSUNMRVMsIFJFQ0VJVkVfQVJUSUNMRVN9IGZyb20gJy4vYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQge1JFUVVFU1RfQ09NTUVOVF9DUkVBVEUsIENPTkZJUk1fQ09NTUVOVF9DUkVBVEUsIFJFSkVDVF9DT01NRU5UX0NSRUFURX0gZnJvbSAnLi9jb21tZW50c0FjdGlvbnMnXG5pbXBvcnQge1JFUVVFU1RfUkVQTFlfQ1JFQVRFLCBDT05GSVJNX1JFUExZX0NSRUFURSwgUkVKRUNUX1JFUExZX0NSRUFURX0gZnJvbSAnLi9yZXBsaWVzQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IG5ld0NvbW1lbnQgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0NPTU1FTlRfQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5uZXdDb21tZW50KVxuICAgIGNhc2UgUkVKRUNUX0NPTU1FTlRfQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IG5ld1JlcGx5ID0gKFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLm5ld0NvbW1lbnQpXG4gICAgY2FzZSBSRVFVRVNUX1JFUExZX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVKRUNUX1JFUExZX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBjb21tZW50ID0gKFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVDRUlWRV9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdSZXBseTogT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLm5ld0NvbW1lbnQpXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3UmVwbHk6IG5ld1JlcGx5KHN0YXRlLm5ld1JlcGx5LCBhY3Rpb24pLFxuICAgICAgICByZXBsaWVzOiBbXG4gICAgICAgICAgLi4uc3RhdGUucmVwbGllcyxcbiAgICAgICAgICBhY3Rpb24ucmVwbHlcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfUkVQTFlfQ1JFQVRFOlxuICAgIGNhc2UgUkVKRUNUX1JFUExZX0NSRUFURTpcbiAgICAgIGlmIChzdGF0ZS5faWQgPT09IGFjdGlvbi5jb21tZW50SWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgbmV3UmVwbHk6IG5ld1JlcGx5KHN0YXRlLm5ld1JlcGx5LCBhY3Rpb24pXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgYXJ0aWNsZSA9IChcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfQVJUSUNMRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3Q29tbWVudDogT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLm5ld0NvbW1lbnQpLFxuICAgICAgICBjb21tZW50czogc3RhdGUuY29tbWVudHMubWFwKGMgPT4gY29tbWVudChjLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ09NTUVOVF9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uYXJ0aWNsZUlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIG5ld0NvbW1lbnQ6IG5ld0NvbW1lbnQoc3RhdGUubmV3Q29tbWVudCwgYWN0aW9uKSxcbiAgICAgICAgICBjb21tZW50czogW1xuICAgICAgICAgICAgLi4uc3RhdGUuY29tbWVudHMsXG4gICAgICAgICAgICBjb21tZW50KGFjdGlvbi5jb21tZW50LCBhY3Rpb24pXG4gICAgICAgICAgXVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX0NPTU1FTlRfQ1JFQVRFOlxuICAgIGNhc2UgUkVKRUNUX0NPTU1FTlRfQ1JFQVRFOlxuICAgICAgaWYgKHN0YXRlLl9pZCA9PT0gYWN0aW9uLmFydGljbGVJZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBuZXdDb21tZW50OiBuZXdDb21tZW50KHN0YXRlLm5ld0NvbW1lbnQsIGFjdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9SRVBMWV9DUkVBVEU6XG4gICAgY2FzZSBDT05GSVJNX1JFUExZX0NSRUFURTpcbiAgICBjYXNlIFJFSkVDVF9SRVBMWV9DUkVBVEU6XG4gICAgICBpZiAoc3RhdGUuX2lkID09PSBhY3Rpb24uYXJ0aWNsZUlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGNvbW1lbnRzOiBzdGF0ZS5jb21tZW50cy5tYXAoYyA9PiBjb21tZW50KGMsIGFjdGlvbikpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgYXJ0aWNsZXMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmFydGljbGVzLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLm1hcChpID0+IGFydGljbGUoaSwgYWN0aW9uKSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX0NPTU1FTlRfQ1JFQVRFOlxuICAgIGNhc2UgUkVKRUNUX0NPTU1FTlRfQ1JFQVRFOlxuICAgIGNhc2UgQ09ORklSTV9DT01NRU5UX0NSRUFURTpcbiAgICBjYXNlIFJFUVVFU1RfUkVQTFlfQ1JFQVRFOlxuICAgIGNhc2UgQ09ORklSTV9SRVBMWV9DUkVBVEU6XG4gICAgY2FzZSBSRUpFQ1RfUkVQTFlfQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBhcnRpY2xlKGksIGFjdGlvbikpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FSVElDTEVTID0gJ1JFUVVFU1RfQVJUSUNMRVMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9BUlRJQ0xFUyA9ICdSRUNFSVZFX0FSVElDTEVTJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdEFydGljbGVzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQVJUSUNMRVNcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlQXJ0aWNsZXMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX0FSVElDTEVTLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEFydGljbGVzKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hcnRpY2xlcy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVBcnRpY2xlcyhqc29uLmRhdGEuYXJ0aWNsZXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0NPTU1FTlRfQ1JFQVRFID0gJ1JFUVVFU1RfQ09NTUVOVF9DUkVBVEUnXG5leHBvcnQgY29uc3QgQ09ORklSTV9DT01NRU5UX0NSRUFURSA9ICdDT05GSVJNX0NPTU1FTlRfQ1JFQVRFJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9DT01NRU5UX0NSRUFURSA9ICdSRUpFQ1RfQ09NTUVOVF9DUkVBVEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKFxuICBhcnRpY2xlSWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQ09NTUVOVF9DUkVBVEUsXG4gICAgYXJ0aWNsZUlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9IChcbiAgY29tbWVudCxcbiAgYXJ0aWNsZUlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0NPTU1FTlRfQ1JFQVRFLFxuICAgIGNvbW1lbnQsXG4gICAgYXJ0aWNsZUlkXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0Q3JlYXRlID0gKFxuICBlcnJvcnMsXG4gIGFydGljbGVJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0NPTU1FTlRfQ1JFQVRFLFxuICAgIGVycm9ycyxcbiAgICBhcnRpY2xlSWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29tbWVudCA9IChcbiAgZGF0YSxcbiAgYXJ0aWNsZUlkLFxuICBzdWNjZXNzTWVzc2FnZVxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdENyZWF0ZShhcnRpY2xlSWQpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vYXJ0aWNsZXMvJHthcnRpY2xlSWR9L2NvbW1lbnRzL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbW1lbnQ6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKGpzb24uZGF0YS5jb21tZW50LCBhcnRpY2xlSWQpKVxuICAgICAgICAgIGlmIChzdWNjZXNzTWVzc2FnZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKHN1Y2Nlc3NNZXNzYWdlLCAnbG9nJykpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgY29uc3QgcHJvcENvbXBvbmVudHMgPSBwcm9wLnNwbGl0KCcuJylcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRQcm9wID0gcHJvcENvbXBvbmVudHNbcHJvcENvbXBvbmVudHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIHBheWxvYWRbY29tbWVudFByb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQsIGFydGljbGVJZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgcG9zdCBjb21tZW50IGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2NvbW1lbnRzQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9TQ0hFRFVMRSwgUkVDRUlWRV9TQ0hFRFVMRX0gZnJvbSAnLi9zY2hlZHVsZUFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzY2hlZHVsZSA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2NoZWR1bGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfU0NIRURVTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfU0NIRURVTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMsXG4gICAgICAgIHBvc3RTY2hlZHVsZUNvbnRlbnQ6IGFjdGlvbi5wb3N0U2NoZWR1bGVDb250ZW50XG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzY2hlZHVsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NjaGVkdWxlUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TQ0hFRFVMRSA9ICdSRVFVRVNUX1NDSEVEVUxFJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfU0NIRURVTEUgPSAnUkVDRUlWRV9TQ0hFRFVMRSdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RTY2hlZHVsZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1NDSEVEVUxFXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVNjaGVkdWxlID0gKFxuICBpdGVtcyxcbiAgcG9zdFNjaGVkdWxlQ29udGVudFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9TQ0hFRFVMRSxcbiAgICBpdGVtcyxcbiAgICBwb3N0U2NoZWR1bGVDb250ZW50XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2NoZWR1bGUgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFNjaGVkdWxlKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9zY2hlZHVsZWAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlU2NoZWR1bGUoanNvbi5kYXRhLnNjaGVkdWxlLml0ZW1zLCBqc29uLmRhdGEuc2NoZWR1bGUucG9zdFNjaGVkdWxlQ29udGVudCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NjaGVkdWxlQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9TRUFSQ0hfUkVTVUxUUywgUkVDRUlWRV9TRUFSQ0hfUkVTVUxUU30gZnJvbSAnLi9zZWFyY2hBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3Qgc2VhcmNoID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5zZWFyY2gsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfU0VBUkNIX1JFU1VMVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfU0VBUkNIX1JFU1VMVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXNcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlYXJjaFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgaW5kZXggZnJvbSAnLi9hbGdvbGlhU2VhcmNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TRUFSQ0hfUkVTVUxUUyA9ICdSRVFVRVNUX1NFQVJDSF9SRVNVTFRTJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfU0VBUkNIX1JFU1VMVFMgPSAnUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUydcblxuY29uc3QgcmVxdWVzdFNlYXJjaFJlc3VsdHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9TRUFSQ0hfUkVTVUxUU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTZWFyY2hSZXN1bHRzID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaFJlc3VsdHMgPSAoXG4gIHF1ZXJ5XG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2VhcmNoUmVzdWx0cygpKVxuXG4gICAgcmV0dXJuIGluZGV4LnNlYXJjaChxdWVyeSwgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgZGlzcGF0Y2gocmVjZWl2ZVNlYXJjaFJlc3VsdHMoY29udGVudC5oaXRzKSlcbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VhcmNoQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBhbGdvbGlhc2VhcmNoIGZyb20gJ2FsZ29saWFzZWFyY2gnXG5cbmNvbnN0IGNsaWVudCA9IGFsZ29saWFzZWFyY2goJzc0UzFKTkIxWlQnLCAnM2RlNmZkYmFmYzQ3N2NmMDE5NjczYmI4MTA0M2FlMGQnKVxuY29uc3QgaW5kZXggPSBjbGllbnQuaW5pdEluZGV4KCdwYWdlcycpXG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYWxnb2xpYVNlYXJjaC5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbidcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vSGVhZGVyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Gb290ZXInXG5pbXBvcnQgRmxhc2hNZXNzYWdlIGZyb20gJy4uL0ZsYXNoTWVzc2FnZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtsb2dpbldpdGhUb2tlbn0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5pbXBvcnQge2ZldGNoQXJ0aWNsZXN9IGZyb20gJy4uLy4uL3N0b3JlL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IHtmZXRjaFNjaGVkdWxlfSBmcm9tICcuLi8uLi9zdG9yZS9zY2hlZHVsZUFjdGlvbnMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgdGhpcy5wcm9wcy5hdHRlbXB0VG9rZW4odG9rZW4pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudXNlciAmJiBuZXdQcm9wcy51c2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmZldGNoQXJ0aWNsZXMoKVxuICAgICAgdGhpcy5wcm9wcy5mZXRjaFNjaGVkdWxlKClcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHVzZXIsXG4gICAgICBhdHRlbXB0aW5nTG9naW4sXG4gICAgICBpc0ZldGNoaW5nQXJ0aWNsZXMsXG4gICAgICBpc0ZldGNoaW5nU2NoZWR1bGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGxvY2F0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChhdHRlbXB0aW5nTG9naW4gfHwgaXNGZXRjaGluZ0FydGljbGVzIHx8IGlzRmV0Y2hpbmdTY2hlZHVsZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxIZWFkZXIgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuXG4gICAgICAgICAgICA8UGFnZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XG5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cblxuICAgICAgICAgICAgPEZsYXNoTWVzc2FnZSAvPlxuICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxQYWdlQ29udGVudD5cbiAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxuXG4gICAgICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZ1NjaGVkdWxlOiBzdGF0ZS5zY2hlZHVsZS5pc0ZldGNoaW5nLFxuICAgICAgaXNGZXRjaGluZ0FydGljbGVzOiBzdGF0ZS5hcnRpY2xlcy5pc0ZldGNoaW5nLFxuICAgICAgYXR0ZW1wdGluZ0xvZ2luOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmcsXG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXJcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0ZW1wdFRva2VuOiAodG9rZW4pID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5XaXRoVG9rZW4odG9rZW4pKVxuICAgICAgfSxcbiAgICAgIGZldGNoQXJ0aWNsZXM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hBcnRpY2xlcygpKVxuICAgICAgfSxcbiAgICAgIGZldGNoU2NoZWR1bGU6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTY2hlZHVsZSgpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShBcHApXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7RmxleCwgTGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge01vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3RlciwgVGV4dElucHV0LCBCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtsb2dpbldpdGhDcmVkZW50aWFsc30gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gdGhpcy5jaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWxFcnJvcjogJycsXG4gICAgICBwYXNzd29yZEVycm9yOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEZvcm0gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgZW1haWxFcnJvciA9ICcnXG4gICAgbGV0IHBhc3N3b3JkRXJyb3IgPSAnJ1xuXG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsID09PSAnJykge1xuICAgICAgZW1haWxFcnJvciA9ICdlbWFpbCBjYW5ub3QgYmUgZW1wdHknXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICBwYXNzd29yZEVycm9yID0gJ3Bhc3N3b3JkIGNhbm5vdCBiZSBibGFuaydcbiAgICB9XG5cbiAgICBpZiAoIWVtYWlsRXJyb3IgJiYgIXBhc3N3b3JkRXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKGxvZ2luV2l0aENyZWRlbnRpYWxzKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZW1haWxFcnJvcixcbiAgICAgICAgcGFzc3dvcmRFcnJvclxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VFbWFpbCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiB2YWx1ZSxcbiAgICAgIGVtYWlsRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFzc3dvcmQ6IHZhbHVlLFxuICAgICAgcGFzc3dvcmRFcnJvcjogJydcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNGZXRjaGluZ30gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsV2luZG93PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfT5cbiAgICAgICAgICA8TW9kYWxXaW5kb3dIZWFkZXI+XG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPkxvZ2luPC9GbGV4PlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dIZWFkZXI+XG5cbiAgICAgICAgICA8TW9kYWxXaW5kb3dCb2R5PlxuICAgICAgICAgICAgPExpc3Qgbj17MS41fT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtIG49ezEuNX0+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsOlwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gY2FzZXlAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVtYWlsRXJyb3J9XG4gICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17dGhpcy5jaGFuZ2VFbWFpbH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gbj17MS41fT5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmQ6XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBCaWdTZWNyZXRcIlxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUucGFzc3dvcmRFcnJvcn1cbiAgICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXt0aGlzLmNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICA8L01vZGFsV2luZG93Qm9keT5cblxuICAgICAgICAgIDxNb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmV0Y2hpbmd9XG4gICAgICAgICAgICAgIGxhYmVsPVwiTG9naW5cIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dGb290ZXI+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvTW9kYWxXaW5kb3c+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuYXV0aC5pc0ZldGNoaW5nXG4gICAgfVxuICB9XG4pKExvZ2luKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4XG4gKiovIiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vQmxvY2snXG5pbXBvcnQgRmxleCBmcm9tICcuL0ZsZXgnXG5pbXBvcnQge0dyaWQsIEdyaWRJdGVtfSBmcm9tICcuL0dyaWQnXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtfSBmcm9tICcuL0xpc3QnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuL0xpc3RJbmxpbmUnXG5pbXBvcnQge01lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlfSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IHtQYWdlLCBQYWdlQ29udGVudH0gZnJvbSAnLi9QYWdlJ1xuaW1wb3J0IFdyYXAgZnJvbSAnLi9XcmFwJ1xuXG5leHBvcnQge0Jsb2NrLCBGbGV4LCBXcmFwLCBHcmlkLCBHcmlkSXRlbSxcbiAgTGlzdCwgTGlzdEl0ZW0sIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLFxuICBNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZSxcbiAgUGFnZSwgUGFnZUNvbnRlbnR9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgQmxvY2sgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgZmxleERpcmVjdGlvbiA9ICdyb3cnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgR3JpZCA9ICh7XG4gIGd1dHRlciA9IDAsXG4gIGFsaWduSXRlbXMgPSAnc3RyZXRjaCcsXG4gIGp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgbWFyZ2luUmlnaHQ6IGAtJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdyaWRJdGVtID0gKHtcbiAgc3BhbiA9IDAsXG4gIG91dE9mID0gMTIsXG4gIGd1dHRlciA9IDAsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgcGFkZGluZ0xlZnQ6IGAke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gLFxuICAgIHBhZGRpbmdSaWdodDogYCR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgZmxleDogJzEnXG4gIH1cblxuICBpZiAoc3BhbiAmJiBvdXRPZikge1xuICAgIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHtcbiAgICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgICB3aWR0aDogYCR7MTAwICogc3BhbiAvIG91dE9mfSVgXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0dyaWQsIEdyaWRJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdC5jc3MnXG5cbmNvbnN0IExpc3QgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYC0ke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3R9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdF9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3QsIExpc3RJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdFwiOlwiTGlzdF9fbGlzdF9fXzJrQlVkXCIsXCJsaXN0X19pdGVtXCI6XCJMaXN0X19saXN0X19pdGVtX19fMUQyVkZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdElubGluZS5jc3MnXG5cbmNvbnN0IExpc3RJbmxpbmUgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGp1c3RmeUNvbnRlbnQgPSAnZmxleC1zdGFydCdcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYC0ke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGZ5Q29udGVudFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0SW5saW5lfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3VsPlxuICApXG59XG5cbmNvbnN0IExpc3RJbmxpbmVJdGVtID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaSBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmVfX2l0ZW19ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImxpc3RJbmxpbmVcIjpcIkxpc3RJbmxpbmVfX2xpc3RJbmxpbmVfX18zR2podVwiLFwibGlzdElubGluZV9faXRlbVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9faXRlbV9fXzJLMWtRXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lZGlhLmNzcydcblxuY29uc3QgTWVkaWEgPSAoe1xuICBhbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYWxpZ25JdGVtc1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWF9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhQm9keSA9ICh7XG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2JvZHl9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhRmlndXJlID0gKHtcbiAgbiA9IDEsXG4gIG5sID0gMCxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiBgJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgJHtiYXNlbGluZSAqIG5sfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lZGlhX19maWd1cmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1lZGlhXCI6XCJNZWRpYV9fbWVkaWFfX18zYTAwR1wiLFwibWVkaWFfX2ZpZ3VyZVwiOlwiTWVkaWFfX21lZGlhX19maWd1cmVfX18yNFp3QVwiLFwibWVkaWFfX2JvZHlcIjpcIk1lZGlhX19tZWRpYV9fYm9keV9fXzNWZDItXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQYWdlID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IHtQYWdlLCBQYWdlQ29udGVudH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgV3JhcCA9ICh7XG4gIHdpZHRoID0gJzkwJScsXG4gIG1heFdpZHRoID0gJzgwcmVtJywgLy8gMTI4MHB4IHByb3ZpZGVkIDFlbSA9PT0gMTZweFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGgsXG4gICAgbWF4V2lkdGgsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL1dyYXAvV3JhcC5qc3hcbiAqKi8iLCJpbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCdcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICcuL0JyZWFkY3J1bWJzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfSBmcm9tICcuL01vZGFsV2luZG93J1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJ1xuaW1wb3J0IFRleHRBcmVhIGZyb20gJy4vVGV4dEFyZWEnXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4vVGV4dElucHV0J1xuXG5leHBvcnQge1NwaW5uZXIsIEJ1dHRvbiwgTGluaywgVGV4dElucHV0LCBUZXh0QXJlYSwgQnJlYWRjcnVtYnMsIEFsZXJ0LFxuICBNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9VSS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsZXJ0LmNzcydcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IEFsZXJ0ID0gKHtcbiAgbWVzc2FnZSxcbiAgdGhlbWUgPSAnZGVmYXVsdCcsXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBtZXNzYWdlU3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VDbGFzc05hbWVzID0gW3N0eWxlcy5BbGVydF9fbWVzc2FnZV1cblxuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgbWVzc2FnZUNsYXNzTmFtZXMucHVzaChzdHlsZXMuQWxlcnRfX21lc3NhZ2VfZXJyb3IpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9kZWZhdWx0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFsZXJ0fT5cbiAgICAgIHttZXNzYWdlXG4gICAgICAgID8gPEJsb2NrPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e21lc3NhZ2VTdHlsZX0gY2xhc3NOYW1lPXttZXNzYWdlQ2xhc3NOYW1lcy5qb2luKCcgJyl9PnttZXNzYWdlfTwvZGl2PlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQWxlcnRcIjpcIkFsZXJ0X19BbGVydF9fXzM3X1FDXCIsXCJBbGVydF9fbWVzc2FnZVwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX19fMndDWkZcIixcIkFsZXJ0X19tZXNzYWdlX2RlZmF1bHRcIjpcIkFsZXJ0X19BbGVydF9fbWVzc2FnZV9kZWZhdWx0X19fbl9SOUNcIixcIkFsZXJ0X19tZXNzYWdlX2Vycm9yXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZXJyb3JfX18yaWQ0V1wiLFwiYWxlcnQtZW50ZXJcIjpcIkFsZXJ0X19hbGVydC1lbnRlcl9fX0s2SmRMXCIsXCJhbGVydC1lbnRlci1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1lbnRlci1hY3RpdmVfX18zdmxDd1wiLFwiYWxlcnQtbGVhdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZV9fXzJQcFlUXCIsXCJhbGVydC1sZWF2ZS1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZS1hY3RpdmVfX18yaGFfUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JyZWFkY3J1bWJzLmNzcydcblxuY29uc3QgQnJlYWRjcnVtYnMgPSAoe1xuICBpdGVtc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQnJlYWRjcnVtYnN9PlxuICAgICAge2l0ZW1zLm1hcChpID0+XG4gICAgICAgIDxMaW5rIHRvPXtpLnBhdGh9IGNsYXNzTmFtZT17c3R5bGVzLkJyZWFkY3J1bWJzX19pdGVtfT57aS5sYWJlbH08L0xpbms+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1bWJzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCcmVhZGNydW1ic1wiOlwiQnJlYWRjcnVtYnNfX0JyZWFkY3J1bWJzX19fMldMajBcIixcIkJyZWFkY3J1bWJzX19pdGVtXCI6XCJCcmVhZGNydW1ic19fQnJlYWRjcnVtYnNfX2l0ZW1fX18xRGF5SVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnJlYWRjcnVtYnMvQnJlYWRjcnVtYnMuY3NzXG4gKiogbW9kdWxlIGlkID0gNjIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrLFxuICBmdWxsV2lkdGggPSBmYWxzZSxcbiAgc21hbGwgPSBmYWxzZSxcbiAgbGFyZ2UgPSBmYWxzZSxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgdG8gPSBudWxsLFxuICBocmVmID0gbnVsbCxcbiAgaW52ZXJzZSA9IGZhbHNlLFxuICB0aGVtZSA9ICdhY2NlbnQxJyxcbiAgZXh0cmFDbGFzc05hbWVzXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHtiYXNlbGluZSAqIDAuNzV9cmVtICR7YmFzZWxpbmUgKiAxLjV9cmVtYCxcbiAgICBsaW5lSGVpZ2h0OiBgJHsxLjcgKiBiYXNlbGluZX1yZW1gLFxuICAgIGZvbnRTaXplOiBgJHsxLjE2NyAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIGlmIChzbWFsbCkge1xuICAgIHN0eWxlID0ge1xuICAgICAgcGFkZGluZzogYCR7YmFzZWxpbmUgKiAwLjN9cmVtICR7YmFzZWxpbmUgKiAxfXJlbWAsXG4gICAgICBsaW5lSGVpZ2h0OiBgJHsxLjUgKiBiYXNlbGluZX1yZW1gLFxuICAgICAgZm9udFNpemU6IGAkezAuOTE3ICogYmFzZWxpbmV9cmVtYFxuICAgIH1cbiAgfVxuXG4gIGlmIChmdWxsV2lkdGgpIHtcbiAgICBzdHlsZS53aWR0aCA9ICcxMDAlJ1xuICB9XG5cbiAgbGV0IGNsYXNzTmFtZSA9IFtdXG5cbiAgY2xhc3NOYW1lLnB1c2goaW52ZXJzZSA/IHN0eWxlcy5JbnZlcnNlQnV0dG9uIDogc3R5bGVzLkJ1dHRvbilcblxuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgY2xhc3NOYW1lLnB1c2goaW52ZXJzZSA/IHN0eWxlcy5JbnZlcnNlQnV0dG9uX2Vycm9yIDogc3R5bGVzLkJ1dHRvbl9lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWNjZW50JzpcbiAgICBkZWZhdWx0OlxuICAgICAgY2xhc3NOYW1lLnB1c2goaW52ZXJzZSA/IHN0eWxlcy5JbnZlcnNlQnV0dG9uX2FjY2VudCA6IHN0eWxlcy5CdXR0b25fYWNjZW50KVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlua1xuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfSAke2V4dHJhQ2xhc3NOYW1lc31gfVxuICAgICAgICB0bz17dG99PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2UgaWYgKGhyZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGFcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lLmpvaW4oJyAnKX0gJHtleHRyYUNsYXNzTmFtZXN9YH1cbiAgICAgICAgaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lLmpvaW4oJyAnKX0gJHtleHRyYUNsYXNzTmFtZXN9YH1cbiAgICAgICAgb25DbGljaz17b25DbGlja30+e2NoaWxkcmVufTwvYnV0dG9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSW52ZXJzZUJ1dHRvblwiOlwiQnV0dG9uX19JbnZlcnNlQnV0dG9uX19fM09RWFVcIixcIkludmVyc2VCdXR0b25fYWNjZW50XCI6XCJCdXR0b25fX0ludmVyc2VCdXR0b25fYWNjZW50X19fMTNvc3pcIixcIkludmVyc2VCdXR0b25fZXJyb3JcIjpcIkJ1dHRvbl9fSW52ZXJzZUJ1dHRvbl9lcnJvcl9fXzNpZEJaXCIsXCJCdXR0b25cIjpcIkJ1dHRvbl9fQnV0dG9uX19fUUk3YjJcIixcIkJ1dHRvbl9hY2NlbnRcIjpcIkJ1dHRvbl9fQnV0dG9uX2FjY2VudF9fXzMzTnBTXCIsXCJCdXR0b25fZXJyb3JcIjpcIkJ1dHRvbl9fQnV0dG9uX2Vycm9yX19fM1BTVVhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNjI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbFdpbmRvdy5jc3MnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IE1vZGFsV2luZG93ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHdpZHRoOiA0MFxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHttdWx0aXBsaWVycy53aWR0aCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbH0+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dIZWFkZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDIsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19faGVhZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0JvZHkgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDMsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2JvZHl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0Zvb3RlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19mb290ZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTW9kYWxcIjpcIk1vZGFsV2luZG93X19Nb2RhbF9fXzJrbGNnXCIsXCJNb2RhbFdpbmRvd1wiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19fMnRWeVpcIixcIk1vZGFsV2luZG93X19oZWFkZXJcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19faGVhZGVyX19fMVFyV0hcIixcIk1vZGFsV2luZG93X19ib2R5XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2JvZHlfX18zUXVRaFwiLFwiTW9kYWxXaW5kb3dfX2Zvb3RlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19mb290ZXJfX18ySTBURlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gNjI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmsgYXMgTmF0aXZlTGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGluay5jc3MnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgTGluayA9ICh7XG4gIGNoaWxkcmVuLFxuICBzbWFsbCxcbiAgdG8sXG4gIGRpc2FibGVkLFxuICBvbkNsaWNrLFxuICBocmVmLFxuICB0aGVtZSA9ICdhY2NlbnQxJ1xufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgZm9udFNpemU6ICcxcmVtJ1xuICB9XG5cbiAgaWYgKHNtYWxsKSB7XG4gICAgc3R5bGUgPSB7XG4gICAgICBmb250U2l6ZTogYCR7MS4xNjcgKiBiYXNlbGluZX1yZW1gXG4gICAgfVxuICB9XG5cbiAgbGV0IGNsYXNzTmFtZSA9IFtdXG4gIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5MaW5rKVxuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkxpbmtfZXJyb3IpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FjY2VudCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5MaW5rX2FjY2VudClcbiAgICAgIGJyZWFrXG4gIH1cblxuICBpZiAodG8pIHtcbiAgICByZXR1cm4gPE5hdGl2ZUxpbmtcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lLmpvaW4oJyAnKX1gfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgdG89e3RvfT57Y2hpbGRyZW59PC9OYXRpdmVMaW5rPlxuICB9IGVsc2UgaWYgKG9uQ2xpY2spIHtcbiAgICByZXR1cm4gPGJ1dHRvblxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfWB9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiA8YVxuICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgaHJlZj17aHJlZn1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lLmpvaW4oJyAnKX1gfT57Y2hpbGRyZW59PC9hPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0xpbmsvTGluay5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMaW5rXCI6XCJMaW5rX19MaW5rX19fM2lzZ1lcIixcIkxpbmtfYWNjZW50XCI6XCJMaW5rX19MaW5rX2FjY2VudF9fX0E4MUhIXCIsXCJMaW5rX2Vycm9yXCI6XCJMaW5rX19MaW5rX2Vycm9yX19fMmhLS2NcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0xpbmsvTGluay5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NwaW5uZXIuY3NzJ1xuXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJfX2lubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUyfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlM31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTR9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU1fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTd9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU4fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEwfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMn1gfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTcGlubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19fMWZpeWtcIixcIlNwaW5uZXJfX2lubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19pbm5lcl9fXzU4dmNUXCIsXCJTcGlubmVyX19jaXJjbGVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZV9fXzJadWdPXCIsXCJzay1jaXJjbGVGYWRlRGVsYXlcIjpcIlNwaW5uZXJfX3NrLWNpcmNsZUZhZGVEZWxheV9fXzFFdG44XCIsXCJTcGlubmVyX19jaXJjbGUxXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxX19fQk9EN25cIixcIlNwaW5uZXJfX2NpcmNsZTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTJfX18yYUJ0clwiLFwiU3Bpbm5lcl9fY2lyY2xlM1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlM19fXzFCYVpmXCIsXCJTcGlubmVyX19jaXJjbGU0XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU0X19fM1Y1cjdcIixcIlNwaW5uZXJfX2NpcmNsZTVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTVfX18zREo1WFwiLFwiU3Bpbm5lcl9fY2lyY2xlNlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNl9fX1pwVTVtXCIsXCJTcGlubmVyX19jaXJjbGU3XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU3X19fWHBuSzVcIixcIlNwaW5uZXJfX2NpcmNsZThcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZThfX18xX1JSWFwiLFwiU3Bpbm5lcl9fY2lyY2xlOVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOV9fX2ZPME9HXCIsXCJTcGlubmVyX19jaXJjbGUxMFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTBfX19uaTM1QVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTExX19fMWhhdjlcIixcIlNwaW5uZXJfX2NpcmNsZTEyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMl9fXzJpcHpUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2FuY2hvcm1lfSBmcm9tICdhbmNob3JtZS5qcydcbmltcG9ydCBzdHJpcHRhZ3MgZnJvbSAnc3RyaXB0YWdzJ1xuaW1wb3J0IFRleHRhcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJ1xuXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICcuLi9JbnB1dExhYmVsJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRBcmVhLmNzcydcblxuY29uc3QgcGxhaW5Ub0h0bWwgPSAodGV4dCkgPT4gYDxwPiR7YW5jaG9ybWUuanModGV4dC5yZXBsYWNlKC9cXG4vZywgJzxiciAvPicpKX08L3A+YFxuY29uc3QgaHRtbFRvUGxhaW4gPSAoaHRtbCkgPT4gc3RyaXB0YWdzKGh0bWwucmVwbGFjZSgvPGJyIFxcLz4vZywgJ1xcbicpKVxuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgb25DaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gcGxhaW5Ub0h0bWwodGhpcy5fZWxlbWVudC52YWx1ZSlcbiAgICBjb25zdCB7Y2hhbmdlQ2FsbGJhY2t9ID0gdGhpcy5wcm9wc1xuXG4gICAgY2hhbmdlQ2FsbGJhY2sodmFsdWUpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtsYWJlbCwgZXJyb3IsIHZhbHVlLCBwbGFjZWhvbGRlciwgZGlzYWJsZWQgPSBmYWxzZX0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLlRleHRBcmVhfT5cbiAgICAgICAgPElucHV0TGFiZWwgbGFiZWw9e2xhYmVsfSBlcnJvcj17ZXJyb3J9IC8+XG5cbiAgICAgICAgPFRleHRhcmVhIHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgICB2YWx1ZT17aHRtbFRvUGxhaW4odmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLlRleHRBcmVhX19pbnB1dH0gJHtlcnJvciA/IHN0eWxlcy5UZXh0QXJlYV9faW5wdXRfZXJyb3IgOiBudWxsfWB9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG1pblJvd3M9ezV9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn0gLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9UZXh0QXJlYS9UZXh0QXJlYS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dExhYmVsLmNzcydcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IElucHV0TGFiZWwgPSAoe1xuICBsYWJlbCxcbiAgZXJyb3Jcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLklucHV0TGFiZWx9ICR7ZXJyb3IgPyBzdHlsZXMuSW5wdXRMYWJlbF9lcnJvciA6ICcnfWB9PlxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIHtsYWJlbFxuICAgICAgICA/IDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0TGFiZWxfX2xhYmVsfT57bGFiZWx9PC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAge2Vycm9yXG4gICAgICAgID8gPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRMYWJlbF9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgOiBudWxsXG4gICAgICAgIH1cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dExhYmVsXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSW5wdXRMYWJlbFwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9fXzFDZW1JXCIsXCJJbnB1dExhYmVsX19sYWJlbFwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9fbGFiZWxfX18yWXlfUFwiLFwiSW5wdXRMYWJlbF9fZXJyb3JcIjpcIklucHV0TGFiZWxfX0lucHV0TGFiZWxfX2Vycm9yX19fMk1GTmRcIixcIklucHV0TGFiZWxfZXJyb3JcIjpcIklucHV0TGFiZWxfX0lucHV0TGFiZWxfZXJyb3JfX18zRXA1cVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXRMYWJlbC9JbnB1dExhYmVsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGV4dEFyZWFcIjpcIlRleHRBcmVhX19UZXh0QXJlYV9fXzE5aXA3XCIsXCJUZXh0QXJlYV9faW5wdXRcIjpcIlRleHRBcmVhX19UZXh0QXJlYV9faW5wdXRfX194NUI0SVwiLFwiVGV4dEFyZWFfX2lucHV0X2Vycm9yXCI6XCJUZXh0QXJlYV9fVGV4dEFyZWFfX2lucHV0X2Vycm9yX19fMzY5Z1VcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICcuLi9JbnB1dExhYmVsJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRJbnB1dC5jc3MnXG5cbmNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgb25DaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZWxlbWVudC52YWx1ZVxuICAgIGNvbnN0IHtjaGFuZ2VDYWxsYmFja30gPSB0aGlzLnByb3BzXG5cbiAgICBjaGFuZ2VDYWxsYmFjayh2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGFiZWwsXG4gICAgICBlcnJvcixcbiAgICAgIHZhbHVlLFxuICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgdHlwZSA9ICd0ZXh0J1xuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLlRleHRJbnB1dH0+XG4gICAgICAgIHtsYWJlbFxuICAgICAgICAgID8gPElucHV0TGFiZWwgbGFiZWw9e2xhYmVsfSBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICAgICAgOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICA8aW5wdXQgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5UZXh0SW5wdXRfX2lucHV0fSAke2Vycm9yID8gc3R5bGVzLlRleHRJbnB1dF9faW5wdXRfZXJyb3IgOiBudWxsfWB9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRleHRJbnB1dFwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfX18xQUNHWVwiLFwiVGV4dElucHV0X19pbnB1dFwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfX2lucHV0X19fMXJ5ZjNcIixcIlRleHRJbnB1dF9faW5wdXRfZXJyb3JcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X19pbnB1dF9lcnJvcl9fXzNwVEp6XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgTWFpbk5hdiBmcm9tICcuLi9NYWluTmF2J1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9TZWFyY2hCYXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLmNzcydcbmltcG9ydCB7QmxvY2ssIFdyYXAsIEdyaWQsIEdyaWRJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IEN1cnJlbnRVc2VyIGZyb20gJy4uL0N1cnJlbnRVc2VyJ1xuXG5pbXBvcnQgaW1nIGZyb20gJy4vbG9nby5zdmcnXG5cbmNvbnN0IEhlYWRlciA9ICh7XG4gIGxvY2F0aW9uXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ292ZXJJbWd9PlxuICAgICAgICA8Q3VycmVudFVzZXIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvdmVySW1nX19ib2R5fT5cbiAgICAgICAgICA8V3JhcCBtYXhXaWR0aD1cIjgwcmVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcn0+XG4gICAgICAgICAgICAgIDxHcmlkIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8R3JpZEl0ZW0gc3Bhbj17MX0gb3V0T2Y9ezV9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX19sb2dvfSAvPlxuICAgICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcl9fdGl0bGV9PlZhY2NpbmF0aW9uIEluZm9ybWF0aW9uIENlbnRlcjwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLkhlYWRlcl9fc3VidGl0bGV9PkFsbCB0aGUgaW5mb3JtYXRpb24geW91IG5lZWQgdG8ga25vdyBhYm91dCB2YWNjaW5lcyBhbmQgdmFjY2luYXRpb24gaW4gTWFuaXRvYmE8L2gyPlxuICAgICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgICAgPFNlYXJjaEJhciBsb2NhdGlvbj17bG9jYXRpb259IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvV3JhcD5cblxuICAgICAgICAgIDxNYWluTmF2IGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7V3JhcCwgR3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFpbk5hdi5jc3MnXG5cbmNvbnN0IG5hdkl0ZW1zID0gW1xuICB7XG4gICAgbGFiZWw6ICdBc2sgYSBRdWVzdGlvbicsXG4gICAgcGF0aDogYCR7UFVCTElDX1BBVEh9L3F1ZXN0aW9uc2BcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnQWJvdXQgVmFjY2luZXMnLFxuICAgIHBhdGg6IGAke1BVQkxJQ19QQVRIfS9hYm91dC12YWNjaW5lc2BcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnVmFjY2luZSBTYWZldHknLFxuICAgIHBhdGg6IGAke1BVQkxJQ19QQVRIfS92YWNjaW5lLXNhZmV0eWBcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnVmFjY2luYXRpb24gU2NoZWR1bGUnLFxuICAgIHBhdGg6IGAke1BVQkxJQ19QQVRIfS92YWNjaW5hdGlvbi1zY2hlZHVsZWBcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnQmxvZycsXG4gICAgcGF0aDogYCR7UFVCTElDX1BBVEh9L2Jsb2dgXG4gIH1cbl1cblxuY29uc3QgTWFpbk5hdiA9ICh7XG4gIGxvY2F0aW9uXG59KSA9PiB7XG4gIGNvbnN0IHJvdXRlU3RhdGVNYXAgPSB7XG4gICAgJ3F1ZXN0aW9ucyc6IHtsZWZ0OiAwLCBvcGFjaXR5OiAxfSxcbiAgICAnYWJvdXQtdmFjY2luZXMnOiB7bGVmdDogJzIwJScsIG9wYWNpdHk6IDF9LFxuICAgICd2YWNjaW5lLXNhZmV0eSc6IHtsZWZ0OiAnNDAlJywgb3BhY2l0eTogMX0sXG4gICAgJ3ZhY2NpbmF0aW9uLXNjaGVkdWxlJzoge2xlZnQ6ICc2MCUnLCBvcGFjaXR5OiAxfSxcbiAgICAnYmxvZyc6IHtsZWZ0OiAnODAlJywgb3BhY2l0eTogMX1cbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKVsyXVxuICBjb25zdCBpbmRpY2F0b3JTdHlsZSA9IHJvdXRlU3RhdGVNYXBbY3VycmVudFNlY3Rpb25dXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkJnfT5cbiAgICAgIDxXcmFwIG1heFdpZHRoPVwiODByZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5NYWluTmF2fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtpbmRpY2F0b3JTdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTWFpbk5hdl9faW5kaWNhdG9yfT48L2Rpdj5cblxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAge25hdkl0ZW1zLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgIDxHcmlkSXRlbSBrZXk9e2l0ZW0ucGF0aH0+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2l0ZW0ucGF0aH0gY2xhc3NOYW1lPXtzdHlsZXMuTWFpbk5hdl9faXRlbX1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLk1haW5OYXZfX2l0ZW1fYWN0aXZlfT57aXRlbS5sYWJlbH08L0xpbms+XG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dyYXA+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTWFpbk5hdi9NYWluTmF2LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJnXCI6XCJNYWluTmF2X19CZ19fXzJPT0V4XCIsXCJNYWluTmF2XCI6XCJNYWluTmF2X19NYWluTmF2X19fNFdOaDZcIixcIk1haW5OYXZfX2luZGljYXRvclwiOlwiTWFpbk5hdl9fTWFpbk5hdl9faW5kaWNhdG9yX19fM2NUY3dcIixcIk1haW5OYXZfX2luZGljYXRvcl9hY3RpdmVcIjpcIk1haW5OYXZfX01haW5OYXZfX2luZGljYXRvcl9hY3RpdmVfX18yMm1JQ1wiLFwiTWFpbk5hdl9faXRlbVwiOlwiTWFpbk5hdl9fTWFpbk5hdl9faXRlbV9fXzFfRnJvXCIsXCJNYWluTmF2X19pdGVtX2FjdGl2ZVwiOlwiTWFpbk5hdl9fTWFpbk5hdl9faXRlbV9hY3RpdmVfX18xb0J1dVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTWFpbk5hdi9NYWluTmF2LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoQmFyLmNzcydcblxuY29uc3QgdHlwZURlbGF5ID0gNTAwXG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5oYW5kbGVUeXBlID0gdGhpcy5oYW5kbGVUeXBlLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGltZW91dElkOiAwXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVHlwZSAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudGltZW91dElkKVxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLl9pbnB1dC52YWx1ZVxuXG4gICAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgaGFzaEhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgcGF0aG5hbWU6IGAke1BVQkxJQ19QQVRIfS9zZWFyY2hgLFxuICAgICAgICAgIHF1ZXJ5OiB7cTogcXVlcnl9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKGAke1BVQkxJQ19QQVRIfS9xdWVzdGlvbnNgKVxuICAgICAgfVxuICAgIH0sIHR5cGVEZWxheSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe3RpbWVvdXRJZH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtxdWVyeX0gPSB0aGlzLnByb3BzLmxvY2F0aW9uXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2hCYXJ9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaEJhcl9faW5wdXR9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtxdWVyeS5xID8gcXVlcnkucSA6ICcnfVxuICAgICAgICAgIHJlZj17ZWwgPT4geyB0aGlzLl9pbnB1dCA9IGVsIH19XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVHlwZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCBmb3Iga2V5d29yZHMsIGUuZy4gJ3BvbGlvIHZhY2NpbmUnXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2VhcmNoQmFyXCI6XCJTZWFyY2hCYXJfX1NlYXJjaEJhcl9fX2R0ZFRoXCIsXCJTZWFyY2hCYXJfX2lucHV0XCI6XCJTZWFyY2hCYXJfX1NlYXJjaEJhcl9faW5wdXRfX19nd1FNaFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvdmVySW1nXCI6XCJIZWFkZXJfX0NvdmVySW1nX19fMzFBOEJcIixcIkNvdmVySW1nX19ib2R5XCI6XCJIZWFkZXJfX0NvdmVySW1nX19ib2R5X19fMmJPOHJcIixcIkhlYWRlclwiOlwiSGVhZGVyX19IZWFkZXJfX19vRTJGSFwiLFwiSGVhZGVyX19sb2dvXCI6XCJIZWFkZXJfX0hlYWRlcl9fbG9nb19fXzFycVVfXCIsXCJIZWFkZXJfX3RpdGxlXCI6XCJIZWFkZXJfX0hlYWRlcl9fdGl0bGVfX18ydGl4YVwiLFwiSGVhZGVyX19zdWJ0aXRsZVwiOlwiSGVhZGVyX19IZWFkZXJfX3N1YnRpdGxlX19fX1pfT0JcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3VycmVudFVzZXIuY3NzJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgQ3VycmVudFVzZXIgPSAoe1xuICB1c2VyLFxuICBsb2dPdXRcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkN1cnJlbnRVc2VyfT5cbiAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DdXJyZW50VXNlcl9fbmFtZX0+bG9nZ2VkIGluIGFzIHt1c2VyLm5hbWV9PC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17bG9nT3V0fT5Mb2cgb3V0PC9CdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXJcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nT3V0OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShDdXJyZW50VXNlcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1cnJlbnRVc2VyL0N1cnJlbnRVc2VyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkN1cnJlbnRVc2VyXCI6XCJDdXJyZW50VXNlcl9fQ3VycmVudFVzZXJfX18xV2FVNlwiLFwiQ3VycmVudFVzZXJfX25hbWVcIjpcIkN1cnJlbnRVc2VyX19DdXJyZW50VXNlcl9fbmFtZV9fXzEyaElaXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9DdXJyZW50VXNlci9DdXJyZW50VXNlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9sb2dvLjJiOWY2ZGEyYjM2NjRkYmVjN2IxYmNmMmI5MWI2MDhhLnN2Z1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvbG9nby5zdmdcbiAqKiBtb2R1bGUgaWQgPSA2NTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIuY3NzJ1xuaW1wb3J0IEZvb3Rlck5hdiBmcm9tICcuLi9Gb290ZXJOYXYnXG5pbXBvcnQge1dyYXAsIEdyaWQsIEdyaWRJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBjb250YWN0TmF2ID0gW1xuICB7XG4gICAgbGFiZWw6ICdKZW5uaWZlciBQb3R0ZXInLFxuICAgIGVtcGg6IHRydWVcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnKDIwNCkgMTQwLTM4NDknXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2pwb3R0ZXJAdW1hbml0b2JhLmNhJ1xuICB9XG5dXG5cbmNvbnN0IEZvb3RlciA9ICh7XG4gIGFib3V0UHJvamVjdEFydGljbGVzLFxuICBhZGRpdGlvbmFsSW5mb3JtYXRpb25BcnRpY2xlc1xufSkgPT4ge1xuICBjb25zdCBhYm91dE5hdiA9IGFib3V0UHJvamVjdEFydGljbGVzLm1hcChhID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IGEudGl0bGUsXG4gICAgICBwYXRoOiBgJHtQVUJMSUNfUEFUSH0vJHthLnR5cGUuaWR9LyR7YS51cmx9YFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBpbmZvTmF2ID0gYWRkaXRpb25hbEluZm9ybWF0aW9uQXJ0aWNsZXMubWFwKGEgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogYS50aXRsZSxcbiAgICAgIHBhdGg6IGAke1BVQkxJQ19QQVRIfS8ke2EudHlwZS5pZH0vJHthLnVybH1gXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CZ30+XG4gICAgICA8V3JhcCBtYXhXaWR0aD1cIjQwcmVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyfT5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxHcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEZvb3Rlck5hdiBpdGVtcz17Y29udGFjdE5hdn0gdGl0bGU9XCJDb250YWN0XCIgLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgIDxHcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEZvb3Rlck5hdiBpdGVtcz17YWJvdXROYXZ9IHRpdGxlPVwiQWJvdXQgUHJvamVjdFwiIC8+XG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICA8R3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxGb290ZXJOYXYgaXRlbXM9e2luZm9OYXZ9IHRpdGxlPVwiQWRkaXRpb25hbFwiIC8+XG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dyYXA+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBhYm91dFByb2plY3RBcnRpY2xlczogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGkgPT4gaS5pc1B1Ymxpc2hlZCAmJiBpLnR5cGUuaWQgPT09ICdhYm91dC1wcm9qZWN0JyksXG4gICAgICBhZGRpdGlvbmFsSW5mb3JtYXRpb25BcnRpY2xlczogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGkgPT4gaS5pc1B1Ymxpc2hlZCAmJiBpLnR5cGUuaWQgPT09ICdhZGRpdGlvbmFsLWluZm9ybWF0aW9uJylcbiAgICB9XG4gIH1cbikoRm9vdGVyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCZ1wiOlwiRm9vdGVyX19CZ19fXzE3aWJ5XCIsXCJGb290ZXJcIjpcIkZvb3Rlcl9fRm9vdGVyX19fMjY4UFRcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHtCbG9jaywgTGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyTmF2LmNzcydcblxuY29uc3QgRm9vdGVyTmF2ID0gKHtcbiAgaXRlbXMsXG4gIHRpdGxlXG59KSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBpdGVtcy5tYXAoaSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SXRlbSBrZXk9e2kubGFiZWx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLkZvb3Rlck5hdl9faXRlbX0gJHtpLmVtcGggPyBzdHlsZXMuRm9vdGVyTmF2X19pdGVtX2VtcGggOiBudWxsfWB9PlxuICAgICAgICAgIHtpLnBhdGhcbiAgICAgICAgICAgID8gPExpbmsgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyTmF2X19saW5rfSB0bz17aS5wYXRofT57aS5sYWJlbH08L0xpbms+XG4gICAgICAgICAgICA6IGkubGFiZWxcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICApXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlck5hdn0+XG4gICAgICA8QmxvY2s+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyTmF2X190aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPExpc3Q+XG4gICAgICAgIHttZW51fVxuICAgICAgPC9MaXN0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3Rlck5hdlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRm9vdGVyTmF2L0Zvb3Rlck5hdi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJGb290ZXJOYXZcIjpcIkZvb3Rlck5hdl9fRm9vdGVyTmF2X19fMzlXM1JcIixcIkZvb3Rlck5hdl9fdGl0bGVcIjpcIkZvb3Rlck5hdl9fRm9vdGVyTmF2X190aXRsZV9fXzFsT1djXCIsXCJGb290ZXJOYXZfX2l0ZW1cIjpcIkZvb3Rlck5hdl9fRm9vdGVyTmF2X19pdGVtX19fMmU0WDJcIixcIkZvb3Rlck5hdl9fbGlua1wiOlwiRm9vdGVyTmF2X19Gb290ZXJOYXZfX2xpbmtfX19LVU9aaFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9vdGVyTmF2L0Zvb3Rlck5hdi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7QWxlcnR9IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBGbGFzaE1lc3NhZ2UgPSAoe1xuICBtZXNzYWdlLFxuICB0eXBlXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0IG1lc3NhZ2U9e21lc3NhZ2V9IHRoZW1lPXt0eXBlfSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogc3RhdGUuZmxhc2gubWVzc2FnZSxcbiAgICAgIHR5cGU6IHN0YXRlLmZsYXNoLnR5cGVcbiAgICB9XG4gIH1cbikoRmxhc2hNZXNzYWdlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRmxhc2hNZXNzYWdlL0ZsYXNoTWVzc2FnZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2FkaW5nLmNzcydcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSAnLi4vVUknXG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2FkaW5nfT5cbiAgICAgIDxTcGlubmVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxvYWRpbmdcIjpcIkxvYWRpbmdfX0xvYWRpbmdfX18zcHljelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge1dyYXAsIEdyaWQsIEdyaWRJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi4vU2lkZUJhcidcbmltcG9ydCBTaWRlTmF2IGZyb20gJy4uL1NpZGVOYXYnXG5pbXBvcnQgQm9keSBmcm9tICcuLi9Cb2R5J1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL05vdEZvdW5kJ1xuaW1wb3J0IHtnZXRDdXJyZW50U2VjdGlvbiwgaXNTZWN0aW9ufSBmcm9tICcuLi8uLi9jb25maWcnXG5cbmNsYXNzIFNlY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBub3RGb3VuZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHtwYXJhbXM6IHtzZWN0aW9uSWQsIGFydGljbGVJZH0sIGFydGljbGVzfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChpc1NlY3Rpb24oc2VjdGlvbklkKSkge1xuICAgICAgaWYgKCFhcnRpY2xlSWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbm90Rm91bmQ6IGZhbHNlXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKGAke1BVQkxJQ19QQVRIfS8ke3NlY3Rpb25JZH0vJHthcnRpY2xlc1swXS51cmx9YClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge3BhcmFtczoge3NlY3Rpb25JZCwgYXJ0aWNsZUlkfSwgYXJ0aWNsZXN9ID0gbmV3UHJvcHNcblxuICAgIGlmIChpc1NlY3Rpb24oc2VjdGlvbklkKSkge1xuICAgICAgaWYgKCFhcnRpY2xlSWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbm90Rm91bmQ6IGZhbHNlXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKGAke1BVQkxJQ19QQVRIfS8ke3NlY3Rpb25JZH0vJHthcnRpY2xlc1swXS51cmx9YClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubm90Rm91bmQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOb3RGb3VuZCAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7cGFyYW1zOiB7c2VjdGlvbklkfSwgY2hpbGRyZW4sIGFydGljbGVzfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZ2V0Q3VycmVudFNlY3Rpb24oc2VjdGlvbklkKVxuXG4gICAgICBjb25zdCBuYXZJdGVtcyA9IGFydGljbGVzLm1hcChhID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1cmw6IGAke1BVQkxJQ19QQVRIfS8ke2EudHlwZS5pZH0vJHthLnVybH1gLFxuICAgICAgICAgIHRpdGxlOiBhLnRpdGxlXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwPlxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgPEdyaWRJdGVtIHNwYW49ezF9IG91dE9mPXs0fT5cbiAgICAgICAgICAgICAgPFNpZGVCYXI+XG4gICAgICAgICAgICAgICAgPFNpZGVOYXYgdGl0bGU9e2N1cnJlbnRTZWN0aW9uLmxhYmVsfSBuYXZJdGVtcz17bmF2SXRlbXN9IC8+XG4gICAgICAgICAgICAgIDwvU2lkZUJhcj5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgIDxHcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L0JvZHk+XG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9XcmFwPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtczoge3NlY3Rpb25JZH19ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlczogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGEgPT4gYS5pc1B1Ymxpc2hlZCAmJiBhLnR5cGUuaWQgPT09IHNlY3Rpb25JZClcbiAgICB9XG4gIH1cbikoU2VjdGlvbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWRlQmFyLmNzcydcblxuY29uc3QgU2lkZUJhciA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TaWRlQmFyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlQmFyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2lkZUJhclwiOlwiU2lkZUJhcl9fU2lkZUJhcl9fXzNvM05VXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7SGVhZGluZzJ9IGZyb20gJy4uL1R5cG9ncmFwaHknXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWRlTmF2LmNzcydcblxuY29uc3QgU2lkZU5hdiA9ICh7XG4gIHRpdGxlLFxuICBuYXZJdGVtc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9e3N0eWxlcy5TaWRlTmF2fT5cbiAgICAgIDxCbG9jayBuPXsyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TaWRlTmF2X190aXRsZX0+XG4gICAgICAgICAgPEhlYWRpbmcyPnt0aXRsZX08L0hlYWRpbmcyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIHtuYXZJdGVtcy5tYXAoaSA9PlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPXtpLnVybH1cbiAgICAgICAgICBrZXk9e2kudXJsfVxuICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLlNpZGVOYXZfX2l0ZW1fYWN0aXZlfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlNpZGVOYXZfX2l0ZW19PlxuICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICA8L0xpbms+XG4gICAgICApfVxuICAgIDwvYXNpZGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZU5hdlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2lkZU5hdi9TaWRlTmF2LmpzeFxuICoqLyIsImltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCdcbmltcG9ydCBIZWFkaW5nMSBmcm9tICcuL0hlYWRpbmcxJ1xuaW1wb3J0IEhlYWRpbmcyIGZyb20gJy4vSGVhZGluZzInXG5pbXBvcnQgSGVhZGluZzMgZnJvbSAnLi9IZWFkaW5nMydcblxuZXhwb3J0IHtDb250ZW50LCBIZWFkaW5nMSwgSGVhZGluZzIsXG4gIEhlYWRpbmczfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9UeXBvZ3JhcGh5LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGVudC5jc3MnXG5cbmNvbnN0IENvbnRlbnQgPSAoe1xuICBjaGlsZHJlbixcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIHRleHQgPSAnJ1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuQ29udGVudH0gJHtleHRyYUNsYXNzTmFtZXN9YH1cbiAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB0ZXh0fX0+PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9Db250ZW50L0NvbnRlbnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ29udGVudFwiOlwiQ29udGVudF9fQ29udGVudF9fXzJSUTBVXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0NvbnRlbnQvQ29udGVudC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGluZzEuY3NzJ1xuXG5jb25zdCBIZWFkaW5nMSA9ICh7XG4gIGNoaWxkcmVuLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgbGlua1RvID0gbnVsbFxufSkgPT4ge1xuICBpZiAobGlua1RvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXtsaW5rVG99IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmcxTGlua30+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+e2NoaWxkcmVufTwvaDE+XG4gICAgICA8L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8aDEgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSGVhZGluZzF9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PntjaGlsZHJlbn08L2gxPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nMVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nMVwiOlwiSGVhZGluZzFfX0hlYWRpbmcxX19fM1JHSkZcIixcIkhlYWRpbmcxTGlua1wiOlwiSGVhZGluZzFfX0hlYWRpbmcxTGlua19fXzI2UTBfXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcxL0hlYWRpbmcxLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nMi5jc3MnXG5cbmNvbnN0IEhlYWRpbmcyID0gKHtcbiAgY2hpbGRyZW4sXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBsaW5rVG8gPSBudWxsXG59KSA9PiB7XG4gIGlmIChsaW5rVG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgdG89e2xpbmtUb30gY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZzJMaW5rfT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmcyfSAke2V4dHJhQ2xhc3NOYW1lc31gfT57Y2hpbGRyZW59PC9oMj5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMiBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMn0gJHtleHRyYUNsYXNzTmFtZXN9YH0+e2NoaWxkcmVufTwvaDI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmcyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcyL0hlYWRpbmcyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRpbmcyXCI6XCJIZWFkaW5nMl9fSGVhZGluZzJfX18xbG1KS1wiLFwiSGVhZGluZzJMaW5rXCI6XCJIZWFkaW5nMl9fSGVhZGluZzJMaW5rX19fMXVheDBcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRpbmczLmNzcydcblxuY29uc3QgSGVhZGluZzMgPSAoe1xuICBjaGlsZHJlbixcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGxpbmtUbyA9IG51bGxcbn0pID0+IHtcbiAgaWYgKGxpbmtUbykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17bGlua1RvfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nM30gJHtzdHlsZXMuSGVhZGluZzNMaW5rfSAke2V4dHJhQ2xhc3NOYW1lc31gfT57Y2hpbGRyZW59PC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgyIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmczfSAke2V4dHJhQ2xhc3NOYW1lc31gfT57Y2hpbGRyZW59PC9oMj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZzNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzMvSGVhZGluZzMuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSGVhZGluZzNcIjpcIkhlYWRpbmczX19IZWFkaW5nM19fXzFraWdLXCIsXCJIZWFkaW5nM0xpbmtcIjpcIkhlYWRpbmczX19IZWFkaW5nM0xpbmtfX18xSkNtTFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMy9IZWFkaW5nMy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNpZGVOYXZcIjpcIlNpZGVOYXZfX1NpZGVOYXZfX18zT0lOdlwiLFwiU2lkZU5hdl9fdGl0bGVcIjpcIlNpZGVOYXZfX1NpZGVOYXZfX3RpdGxlX19fM0QweDNcIixcIlNpZGVOYXZfX2l0ZW1cIjpcIlNpZGVOYXZfX1NpZGVOYXZfX2l0ZW1fX18xalY0VlwiLFwiU2lkZU5hdl9faXRlbV9hY3RpdmVcIjpcIlNpZGVOYXZfX1NpZGVOYXZfX2l0ZW1fYWN0aXZlX19fMWpwbFBcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NpZGVOYXYvU2lkZU5hdi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MDtcblxuY29uc3QgQm9keSA9ICh7XG4gIHB2ID0gNixcbiAgcGggPSA2LFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBwYWRkaW5nVG9wOiBgJHtwdiAqIGJhc2VsaW5lfXJlbWAsXG4gICAgcGFkZGluZ0JvdHRvbTogYCR7cHYgKiBiYXNlbGluZX1yZW1gLFxuICAgIHBhZGRpbmdMZWZ0OiBgJHtwaCAqIGJhc2VsaW5lfXJlbWAsXG4gICAgcGFkZGluZ1JpZ2h0OiBgJHtwaCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0JvZHkvQm9keS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ob3RGb3VuZC5jc3MnXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5vdEZvdW5kfT5cbiAgICAgIDxCbG9jayBuPXszfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ob3RGb3VuZF9fdGl0bGV9PjQwNDwvZGl2PlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ob3RGb3VuZF9fYm9keX0+U29ycnksIGJ1dCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIGRvZXMgbm90IHNlZW0gdG8gZXhpc3QuLi48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTm90Rm91bmRcIjpcIk5vdEZvdW5kX19Ob3RGb3VuZF9fXzMxQ2xpXCIsXCJOb3RGb3VuZF9fdGl0bGVcIjpcIk5vdEZvdW5kX19Ob3RGb3VuZF9fdGl0bGVfX19yeVVFQ1wiLFwiTm90Rm91bmRfX2JvZHlcIjpcIk5vdEZvdW5kX19Ob3RGb3VuZF9fYm9keV9fX0M5OUJ6XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydCBjb25zdCBibG9ncG9zdHMgPSB7XG4gIGlkOiAnYmxvZycsXG4gIGxhYmVsOiAnQmxvZydcbn1cblxuZXhwb3J0IGNvbnN0IHNlY3Rpb25zID0gW1xuICB7XG4gICAgaWQ6ICdmYXFzJyxcbiAgICBsYWJlbDogJ0ZBUXMnXG4gIH0sXG4gIHtcbiAgICBpZDogJ2Fib3V0LXZhY2NpbmVzJyxcbiAgICBsYWJlbDogJ0Fib3V0IFZhY2NpbmVzJ1xuICB9LFxuICB7XG4gICAgaWQ6ICd2YWNjaW5lLXNhZmV0eScsXG4gICAgbGFiZWw6ICdWYWNjaW5lIFNhZmV0eSdcbiAgfSxcbiAge1xuICAgIGlkOiAndmFjY2luYXRpb24tc2NoZWR1bGUnLFxuICAgIGxhYmVsOiAnVmFjY2luYXRpb24gU2NoZWR1bGUnXG4gIH0sXG4gIHtcbiAgICBpZDogJ2Fib3V0LXByb2plY3QnLFxuICAgIGxhYmVsOiAnQWJvdXQgUHJvamVjdCdcbiAgfSxcbiAge1xuICAgIGlkOiAnYWRkaXRpb25hbC1pbmZvcm1hdGlvbicsXG4gICAgbGFiZWw6ICdBZGRpdGlvbmFsIEluZm9ybWF0aW9uJ1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0gW1xuICB7XG4gICAgaWQ6ICdkaXNlYXNlcycsXG4gICAgbGFiZWw6ICdEaXNlYXNlcydcbiAgfSxcbiAge1xuICAgIGlkOiAndmFjY2luZXMnLFxuICAgIGxhYmVsOiAnVmFjY2luZXMnXG4gIH0sXG4gIHtcbiAgICBpZDogJ2luZ3JpZGllbnRzJyxcbiAgICBsYWJlbDogJ0luZ3JpZGllbnRzJ1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBpc1NlY3Rpb24gPSAoaWQpID0+IHtcbiAgcmV0dXJuIHNlY3Rpb25zLm1hcChzID0+IHMuaWQpLmluZGV4T2YoaWQpICE9PSAtMVxufVxuXG5leHBvcnQgY29uc3QgaXNCbG9ncG9zdCA9IChpZCkgPT4ge1xuICByZXR1cm4gaWQgPT09IGJsb2dwb3N0cy5pZFxufVxuXG5leHBvcnQgY29uc3QgaXNDYXRlZ29yeSA9IChpZCkgPT4ge1xuICByZXR1cm4gY2F0ZWdvcmllcy5tYXAoYyA9PiBjLmlkKS5pbmRleE9mKGlkKSAhPT0gLTFcbn1cblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRTZWN0aW9uID0gKGlkKSA9PiB7XG4gIHJldHVybiBzZWN0aW9ucy5jb25jYXQoY2F0ZWdvcmllcykuY29uY2F0KFtibG9ncG9zdHNdKS5maWx0ZXIocyA9PiBzLmlkID09PSBpZClbMF1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb25maWcuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi9BcnRpY2xlJ1xuaW1wb3J0IENhdGVnb3J5RGlyZWN0b3J5IGZyb20gJy4uL0NhdGVnb3J5RGlyZWN0b3J5J1xuaW1wb3J0IFZhY2NpbmF0aW9uU2NoZWR1bGUgZnJvbSAnLi4vVmFjY2luYXRpb25TY2hlZHVsZSdcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vTm90Rm91bmQnXG5cbmNvbnN0IFNlY3Rpb25BcnRpY2xlID0gKHtcbiAgYXJ0aWNsZSxcbiAgY2hpbGRyZW4sXG4gIHBhcmFtc1xufSkgPT4ge1xuICBpZiAoYXJ0aWNsZSkge1xuICAgIGlmIChwYXJhbXMuaXRlbUlkKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW5cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGF0dGFjaG1lbnQgPSAnJ1xuICAgICAgc3dpdGNoIChhcnRpY2xlLmF0dGFjaG1lbnQpIHtcbiAgICAgICAgY2FzZSAndmFjY2luZXMnOlxuICAgICAgICBjYXNlICdkaXNlYXNlcyc6XG4gICAgICAgIGNhc2UgJ2luZ3JpZGllbnRzJzpcbiAgICAgICAgICBhdHRhY2htZW50ID0gKFxuICAgICAgICAgICAgPENhdGVnb3J5RGlyZWN0b3J5XG4gICAgICAgICAgICAgIHNlY3Rpb25JZD17cGFyYW1zLnNlY3Rpb25JZH1cbiAgICAgICAgICAgICAgYXJ0aWNsZUlkPXtwYXJhbXMuYXJ0aWNsZUlkfVxuICAgICAgICAgICAgICBjYXRlZ29yeT17YXJ0aWNsZS5hdHRhY2htZW50fSAvPlxuICAgICAgICAgIClcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdzY2hlZHVsZSc6XG4gICAgICAgICAgYXR0YWNobWVudCA9IChcbiAgICAgICAgICAgIDxWYWNjaW5hdGlvblNjaGVkdWxlIC8+XG4gICAgICAgICAgKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJsb2NrIG49e2FydGljbGUuYXR0YWNobWVudCA/IDMgOiAwfT5cbiAgICAgICAgICAgIDxBcnRpY2xlIGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHthdHRhY2htZW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxOb3RGb3VuZCAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtczoge2FydGljbGVJZH19ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEudXJsID09PSBhcnRpY2xlSWQpWzBdXG4gICAgfVxuICB9XG4pKFNlY3Rpb25BcnRpY2xlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VjdGlvbkFydGljbGUvU2VjdGlvbkFydGljbGUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtIZWFkaW5nMSwgQ29udGVudH0gZnJvbSAnLi4vVHlwb2dyYXBoeSdcblxuY29uc3QgQXJ0aWNsZSA9ICh7XG4gIGFydGljbGVcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJsb2NrIG49ezN9PlxuICAgICAgICA8SGVhZGluZzE+e2FydGljbGUudGl0bGV9PC9IZWFkaW5nMT5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxDb250ZW50IHRleHQ9e2FydGljbGUuY29udGVudH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcnRpY2xlL0FydGljbGUuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9VSSdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5cbmNvbnN0IENhdGVnb3J5RGlyZWN0b3J5ID0gKHtcbiAgaXRlbXMsXG4gIHNlY3Rpb25JZCxcbiAgYXJ0aWNsZUlkXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpc3Q+XG4gICAgICB7aXRlbXMubWFwKGkgPT5cbiAgICAgICAgPExpc3RJdGVtIGtleT17aS5faWR9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgJHtQVUJMSUNfUEFUSH0vJHtzZWN0aW9uSWR9LyR7YXJ0aWNsZUlkfS8ke2kudXJsfWB9PntpLnRpdGxlfTwvTGluaz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICl9XG4gICAgPC9MaXN0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7Y2F0ZWdvcnl9ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGEgPT4gYS5pc1B1Ymxpc2hlZCAmJiBhLnR5cGUuaWQgPT09IGNhdGVnb3J5KVxuICAgIH1cbiAgfVxuKShDYXRlZ29yeURpcmVjdG9yeSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0NhdGVnb3J5RGlyZWN0b3J5L0NhdGVnb3J5RGlyZWN0b3J5LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7TGlua30gZnJvbSAnLi4vVUknXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtLCBNZWRpYSwgTWVkaWFGaWd1cmUsIE1lZGlhQm9keX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9WYWNjaW5hdGlvblNjaGVkdWxlLmNzcydcblxuY29uc3QgVmFjY2luYXRpb25TY2hlZHVsZSA9ICh7XG4gIGl0ZW1zLFxuICB2YWNjaW5lQXJ0aWNsZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2NoZWR1bGV9PlxuICAgICAgPExpc3Qgbj17MH0+XG4gICAgICAgIDxMaXN0SXRlbSBuPXswfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNjaGVkdWxlSXRlbX0gJHtzdHlsZXMuU2NoZWR1bGVJdGVtX2hlYWRlcn1gfT5cbiAgICAgICAgICAgIDxNZWRpYT5cbiAgICAgICAgICAgICAgPE1lZGlhRmlndXJlIHNwYW49ezF9IG91dE9mPXs1fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNjaGVkdWxlSXRlbV9fYWdlfT5cbiAgICAgICAgICAgICAgICAgIENoaWxkJ3MgYWdlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTWVkaWFGaWd1cmU+XG5cbiAgICAgICAgICAgICAgPE1lZGlhQm9keT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNjaGVkdWxlSXRlbV9fdmFjY2luZXN9PlxuICAgICAgICAgICAgICAgICAgU3VnZ2VzdGVkIHZhY2NpbmF0aW9uKHMpXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTWVkaWFCb2R5PlxuICAgICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICB7aXRlbXMubWFwKChpLCBrKSA9PlxuICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2t9IG49ezB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TY2hlZHVsZUl0ZW19PlxuICAgICAgICAgICAgICA8TWVkaWE+XG4gICAgICAgICAgICAgICAgPE1lZGlhRmlndXJlIHNwYW49ezF9IG91dE9mPXs1fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2NoZWR1bGVJdGVtX19hZ2V9PlxuICAgICAgICAgICAgICAgICAgICB7aS5hZ2V9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L01lZGlhRmlndXJlPlxuXG4gICAgICAgICAgICAgICAgPE1lZGlhQm9keT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2NoZWR1bGVJdGVtX192YWNjaW5lc30+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IG49ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgICAge2kudmFjY2luZXMubWFwKCh2LCBqKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17an0gbj17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e2Ake1BVQkxJQ19QQVRIfS8ke3ZhY2NpbmVBcnRpY2xlLnR5cGUuaWR9LyR7dmFjY2luZUFydGljbGUudXJsfS8ke3YudXJsfWB9Pnt2LnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9NZWRpYUJvZHk+XG4gICAgICAgICAgICAgIDwvTWVkaWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICApfVxuICAgICAgPC9MaXN0PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHN0YXRlLnNjaGVkdWxlLml0ZW1zLFxuICAgICAgdmFjY2luZUFydGljbGU6IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihpID0+IGkuaXNQdWJsaXNoZWQgJiYgaS5hdHRhY2htZW50ID09PSAndmFjY2luZXMnKVswXVxuICAgIH1cbiAgfVxuKShWYWNjaW5hdGlvblNjaGVkdWxlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVmFjY2luYXRpb25TY2hlZHVsZS9WYWNjaW5hdGlvblNjaGVkdWxlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNjaGVkdWxlXCI6XCJWYWNjaW5hdGlvblNjaGVkdWxlX19TY2hlZHVsZV9fXzFqdWdCXCIsXCJTY2hlZHVsZUl0ZW1cIjpcIlZhY2NpbmF0aW9uU2NoZWR1bGVfX1NjaGVkdWxlSXRlbV9fXzN4bXRiXCIsXCJTY2hlZHVsZUl0ZW1fX2FnZVwiOlwiVmFjY2luYXRpb25TY2hlZHVsZV9fU2NoZWR1bGVJdGVtX19hZ2VfX18xYkFJMVwiLFwiU2NoZWR1bGVJdGVtX192YWNjaW5lc1wiOlwiVmFjY2luYXRpb25TY2hlZHVsZV9fU2NoZWR1bGVJdGVtX192YWNjaW5lc19fX21IQTRJXCIsXCJTY2hlZHVsZUl0ZW1faGVhZGVyXCI6XCJWYWNjaW5hdGlvblNjaGVkdWxlX19TY2hlZHVsZUl0ZW1faGVhZGVyX19fMXdkcjRcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1ZhY2NpbmF0aW9uU2NoZWR1bGUvVmFjY2luYXRpb25TY2hlZHVsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2ODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7YW5pbWF0ZVNjcm9sbH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VjdGlvbkNhdGVnb3J5SXRlbS5jc3MnXG5pbXBvcnQgQXJ0aWNsZSBmcm9tICcuLi9BcnRpY2xlJ1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL05vdEZvdW5kJ1xuXG5jbGFzcyBTZWN0aW9uQ2F0ZWdvcnlJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8odGhpcy5fZWxlbWVudC5vZmZzZXRUb3AgLSAxMDAsIHtcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgYW5pbWF0ZVNjcm9sbC5zY3JvbGxUbyh0aGlzLl9lbGVtZW50Lm9mZnNldFRvcCAtIDEwMCwge1xuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpdGVtLCBwYXJhbXM6IHtzZWN0aW9uSWQsIGFydGljbGVJZH19ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fSBjbGFzc05hbWU9e3N0eWxlcy5TZWN0aW9uQ2F0ZWdvcnlJdGVtfT5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgdG89e2Ake1BVQkxJQ19QQVRIfS8ke3NlY3Rpb25JZH0vJHthcnRpY2xlSWR9YH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlNlY3Rpb25DYXRlZ29yeUl0ZW1fX2JhY2tsaW5rfT5iYWNrPC9MaW5rPlxuXG4gICAgICAgICAgPEFydGljbGUgYXJ0aWNsZT17aXRlbX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOb3RGb3VuZCAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtczoge2l0ZW1JZH19ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEudXJsID09PSBpdGVtSWQpWzBdXG4gICAgfVxuICB9XG4pKFNlY3Rpb25DYXRlZ29yeUl0ZW0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uQ2F0ZWdvcnlJdGVtL1NlY3Rpb25DYXRlZ29yeUl0ZW0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2VjdGlvbkNhdGVnb3J5SXRlbVwiOlwiU2VjdGlvbkNhdGVnb3J5SXRlbV9fU2VjdGlvbkNhdGVnb3J5SXRlbV9fXzF0Um9kXCIsXCJTZWN0aW9uQ2F0ZWdvcnlJdGVtX19iYWNrbGlua1wiOlwiU2VjdGlvbkNhdGVnb3J5SXRlbV9fU2VjdGlvbkNhdGVnb3J5SXRlbV9fYmFja2xpbmtfX18xeG00c1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbkNhdGVnb3J5SXRlbS9TZWN0aW9uQ2F0ZWdvcnlJdGVtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY5NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCB7Q29udGVudCwgSGVhZGluZzF9IGZyb20gJy4uL1R5cG9ncmFwaHknXG5pbXBvcnQge1dyYXAsIEJsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmxvZy5jc3MnXG5cbmNvbnN0IEJsb2cgPSAoe1xuICBibG9ncG9zdHMsXG4gIHBhcmFtcyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgaWYgKHBhcmFtcy5ibG9ncG9zdElkKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwIG1heFdpZHRoPVwiNDVyZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlfT5cbiAgICAgICAgICB7YmxvZ3Bvc3RzLm1hcChwID0+XG4gICAgICAgICAgICA8QmxvY2sga2V5PXtwLl9pZH0gbj17Nn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW50cnl9PlxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW50cnlfX2RhdGV9PlxuICAgICAgICAgICAgICAgICAgICBQb3N0ZWQgb24gPFRpbWUgdmFsdWU9e25ldyBEYXRlKHAuY3JlYXRlZEF0KX0gZm9ybWF0PVwiTU1NIERvLCBoOm1BXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICA8QmxvY2sgbj17MS41fT5cbiAgICAgICAgICAgICAgICAgIDxIZWFkaW5nMSBsaW5rVG89e2Ake1BVQkxJQ19QQVRIfS9ibG9nLyR7cC51cmx9YH0+e3AudGl0bGV9PC9IZWFkaW5nMT5cbiAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbnRyeV9fYm9keX0+XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50IHRleHQ9e3Auc25pcHBldH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVudHJ5X19mb290ZXJ9PlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0bz17YCR7UFVCTElDX1BBVEh9L2Jsb2cvJHtwLnVybH1gfT5SZWFkIGZ1bGwgcG9zdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dyYXA+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYmxvZ3Bvc3RzOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEudHlwZS5pZCA9PT0gJ2Jsb2dwb3N0cycpXG4gICAgfVxuICB9XG4pKEJsb2cpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9CbG9nL0Jsb2cuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnZVwiOlwiQmxvZ19fcGFnZV9fX3NRcF9mXCIsXCJlbnRyeVwiOlwiQmxvZ19fZW50cnlfX196elp6blwiLFwiZW50cnlfX2JvZHlcIjpcIkJsb2dfX2VudHJ5X19ib2R5X19fM3NDX0FcIixcImVudHJ5X19mb290ZXJcIjpcIkJsb2dfX2VudHJ5X19mb290ZXJfX18za0ZMMFwiLFwiZW50cnlfX2RhdGVcIjpcIkJsb2dfX2VudHJ5X19kYXRlX19fMzdBZ2NcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Jsb2cvQmxvZy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5pbXBvcnQge2FuaW1hdGVTY3JvbGx9IGZyb20gJ3JlYWN0LXNjcm9sbCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7SGVhZGluZzEsIENvbnRlbnR9IGZyb20gJy4uL1R5cG9ncmFwaHknXG5pbXBvcnQge1dyYXAsIEJsb2NrLCBGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL05vdEZvdW5kJ1xuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4uL0NvbW1lbnRzJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmxvZ3Bvc3QuY3NzJ1xuXG5jbGFzcyBCbG9ncG9zdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudCkge1xuICAgICAgYW5pbWF0ZVNjcm9sbC5zY3JvbGxUbyh0aGlzLl9lbGVtZW50Lm9mZnNldFRvcCAtIDEwMCwge1xuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2Jsb2dwb3N0fSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChibG9ncG9zdCkge1xuICAgICAgY29uc3Qgc29ydGVkQ29tbWVudHMgPSBibG9ncG9zdC5jb21tZW50cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmNyZWF0ZWRBdCA+IGIuY3JlYXRlZEF0KSB7XG4gICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH0gZWxzZSBpZiAoYS5jcmVhdGVkQXQgPCBiLmNyZWF0ZWRBdCkge1xuICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXAgbWF4V2lkdGg9XCI0NXJlbVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ3Bvc3R9IHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX0+XG4gICAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ3Bvc3RfX2RhdGV9PlBvc3RlZCBvbiA8VGltZSB2YWx1ZT17bmV3IERhdGUoYmxvZ3Bvc3QuY3JlYXRlZEF0KX0gZm9ybWF0PVwiTU1NIERvLCBoOm1BXCIgLz48L2Rpdj5cbiAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgPEJsb2NrIG49ezEuNX0+XG4gICAgICAgICAgICAgIDxIZWFkaW5nMT57YmxvZ3Bvc3QudGl0bGV9PC9IZWFkaW5nMT5cbiAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgIDxCbG9jayBuPXs2fT5cbiAgICAgICAgICAgICAgPENvbnRlbnQgdGV4dD17YmxvZ3Bvc3QuY29udGVudH0gLz5cbiAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgIDxCbG9jayBuPXs2fT5cbiAgICAgICAgICAgICAgPENvbW1lbnRzIGJsb2dwb3N0PXtibG9ncG9zdH0gY29tbWVudHM9e3NvcnRlZENvbW1lbnRzfSAvPlxuICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRvPXtgJHtQVUJMSUNfUEFUSH0vYmxvZ2B9PmJhY2sgdG8gYWxsIHBvc3RzPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV3JhcD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5vdEZvdW5kIC8+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7YmxvZ3Bvc3RJZH19ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBibG9ncG9zdDogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGEgPT4gYS5pc1B1Ymxpc2hlZCAmJiBhLnVybCA9PT0gYmxvZ3Bvc3RJZClbMF1cbiAgICB9XG4gIH1cbikoQmxvZ3Bvc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9CbG9ncG9zdC9CbG9ncG9zdC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCbG9jayBmcm9tICcuLi9MYXlvdXRzL0Jsb2NrJ1xuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vQ29tbWVudCdcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuLi9Db21tZW50Rm9ybSdcbmltcG9ydCBIZWFkaW5nMiBmcm9tICcuLi9UeXBvZ3JhcGh5L0hlYWRpbmcyJ1xuXG5jb25zdCBDb21tZW50cyA9ICh7XG4gIGNvbW1lbnRzLFxuICBibG9ncG9zdFxufSkgPT4ge1xuICBsZXQgYm9keSA9ICcnXG4gIGlmIChjb21tZW50cy5sZW5ndGggPiAwKSB7XG4gICAgYm9keSA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCbG9jayBuPXsxLjV9PlxuICAgICAgICAgIDxIZWFkaW5nMj5Db21tZW50czwvSGVhZGluZzI+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJsb2NrIG49ezZ9PlxuICAgICAgICAgIHtjb21tZW50cy5tYXAoKGMsIGluZGV4KSA9PlxuICAgICAgICAgICAgPENvbW1lbnQga2V5PXtpbmRleH0gYmxvZ3Bvc3Q9e2Jsb2dwb3N0fSBjb21tZW50PXtjfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QmxvY2sgbj17Nn0+XG4gICAgICAgIDxDb21tZW50Rm9ybSBibG9ncG9zdD17YmxvZ3Bvc3R9IC8+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICB7Ym9keX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50c1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ29tbWVudHMvQ29tbWVudHMuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtfSBmcm9tICcuLi9MYXlvdXRzL0xpc3QnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29tbWVudC5jc3MnXG5pbXBvcnQgQ29tbWVudFJlcGx5IGZyb20gJy4uL0NvbW1lbnRSZXBseSdcbmltcG9ydCBDb21tZW50UmVwbHlGb3JtIGZyb20gJy4uL0NvbW1lbnRSZXBseUZvcm0nXG5pbXBvcnQgTGluayBmcm9tICcuLi9VSS9MaW5rJ1xuXG5jbGFzcyBDb21tZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnRvZ2dsZUZvcm0gPSB0aGlzLnRvZ2dsZUZvcm0uYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dSZXBseUZvcm06IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRm9ybSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93UmVwbHlGb3JtOiAhdGhpcy5zdGF0ZS5zaG93UmVwbHlGb3JtXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2NvbW1lbnQsIGJsb2dwb3N0fSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzb3J0ZWRSZXBsaWVzID0gY29tbWVudC5yZXBsaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLmNyZWF0ZWRBdCA+IGIuY3JlYXRlZEF0KSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSBlbHNlIGlmIChhLmNyZWF0ZWRBdCA8IGIuY3JlYXRlZEF0KSB7XG4gICAgICAgIHJldHVybiAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgZm9ybSA9ICcnXG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvd1JlcGx5Rm9ybSkge1xuICAgICAgZm9ybSA9IChcbiAgICAgICAgPEJsb2NrIG49e2NvbW1lbnQucmVwbGllcy5sZW5ndGggPiAwID8gMyA6IDB9PlxuICAgICAgICAgIDxDb21tZW50UmVwbHlGb3JtXG4gICAgICAgICAgICBjYW5jZWxDYWxsYmFjaz17KCkgPT4gdGhpcy50b2dnbGVGb3JtKCl9XG4gICAgICAgICAgICBjb21tZW50PXtjb21tZW50fVxuICAgICAgICAgICAgYmxvZ3Bvc3RJZD17YmxvZ3Bvc3QuX2lkfSAvPlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCByZXBsaWVzID0gJydcbiAgICBpZiAoY29tbWVudC5yZXBsaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlcGxpZXMgPSAoXG4gICAgICAgIDxMaXN0IG49ezEuNX0+XG4gICAgICAgICAge3NvcnRlZFJlcGxpZXMubWFwKChyLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8Q29tbWVudFJlcGx5IHJlcGx5PXtyfSAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0xpc3Q+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudH0+XG4gICAgICAgIDxCbG9jayBuPXt0aGlzLnN0YXRlLnNob3dSZXBseUZvcm0gfHwgY29tbWVudC5yZXBsaWVzLmxlbmd0aCA+IDAgPyAzIDogMH0+XG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19pbmZvfT5ieSB7Y29tbWVudC5sYXN0TW9kaWZpZWRCeX0gb24gPFRpbWUgdmFsdWU9e2NvbW1lbnQubGFzdE1vZGlmaWVkQXR9IGZvcm1hdD1cIk1NTSBEbywgaDptQVwiIC8+PC9kaXY+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxDb250ZW50IHRleHQ9e2NvbW1lbnQuY29udGVudH0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPExpbmsgc21hbGwgb25DbGljaz17dGhpcy50b2dnbGVGb3JtfT5SZXBseSB0byB0aGlzIGNvbW1lbnQ8L0xpbms+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19yZXBsaWVzfT5cbiAgICAgICAgICB7Zm9ybX1cblxuICAgICAgICAgIHtyZXBsaWVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ29tbWVudFwiOlwiQ29tbWVudF9fQ29tbWVudF9fX0NMUzJ3XCIsXCJDb21tZW50X19pbmZvXCI6XCJDb21tZW50X19Db21tZW50X19pbmZvX19fMXJvb2xcIixcIkNvbW1lbnRfX3JlcGxpZXNcIjpcIkNvbW1lbnRfX0NvbW1lbnRfX3JlcGxpZXNfX19QWExYUlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbW1lbnRSZXBseS5jc3MnXG5pbXBvcnQgQ29udGVudCBmcm9tICcuLi9UeXBvZ3JhcGh5L0NvbnRlbnQnXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vTGF5b3V0cy9CbG9jaydcblxuY29uc3QgQ29tbWVudFJlcGx5ID0gKHtcbiAgcmVwbHlcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRSZXBseX0+XG4gICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudFJlcGx5X19pbmZvfT57cmVwbHkubGFzdE1vZGlmaWVkQnl9IG9uIDxUaW1lIHZhbHVlPXtyZXBseS5sYXN0TW9kaWZpZWRBdH0gZm9ybWF0PVwiTU1NIERvLCBoOm1BXCIgLz48L2Rpdj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxDb250ZW50IHRleHQ9e3JlcGx5LmNvbnRlbnR9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFJlcGx5XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvbW1lbnRSZXBseVwiOlwiQ29tbWVudFJlcGx5X19Db21tZW50UmVwbHlfX18xdkVhbVwiLFwiQ29tbWVudFJlcGx5X19pbmZvXCI6XCJDb21tZW50UmVwbHlfX0NvbW1lbnRSZXBseV9faW5mb19fXzJnTHQ1XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHkvQ29tbWVudFJlcGx5LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cy9MaXN0SW5saW5lJ1xuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vVUkvVGV4dEFyZWEnXG5pbXBvcnQgTGluayBmcm9tICcuLi9VSS9MaW5rJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9VSS9CdXR0b24nXG5cbmltcG9ydCB7Y3JlYXRlUmVwbHl9IGZyb20gJy4uLy4uL3N0b3JlL3JlcGxpZXNBY3Rpb25zJ1xuXG5jbGFzcyBDb21tZW50UmVwbHlGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgfSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmNyZWF0ZSA9IHRoaXMuY3JlYXRlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2Vycm9ycywgaXNVcGRhdGluZ30gPSBuZXdQcm9wcy5jb21tZW50Lm5ld1JlcGx5XG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVSZXBseSwgY2FuY2VsQ2FsbGJhY2t9ID0gdGhpcy5wcm9wc1xuXG4gICAgY3JlYXRlUmVwbHkodGhpcy5zdGF0ZS5kYXRhKVxuICAgIGNhbmNlbENhbGxiYWNrKClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2NvbW1lbnQ6IHtuZXdSZXBseToge2lzVXBkYXRpbmd9fSwgY2FuY2VsQ2FsbGJhY2t9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxCbG9jayBuPXsxLjV9PlxuICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgbGFiZWw9XCJZb3VyIHJlcGx5XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuY29udGVudH1cbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdjb250ZW50Jywgdil9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPExpc3RJbmxpbmUgbj17Mn0+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezJ9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNyZWF0ZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9PlBvc3QgcmVwbHk8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezJ9PlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgb25DbGljaz17Y2FuY2VsQ2FsbGJhY2t9PkNhbmNlbDwvTGluaz5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbnVsbCxcbiAgKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtibG9ncG9zdElkLCBjb21tZW50fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlUmVwbHk6IGRhdGEgPT4ge1xuICAgICAgICBkaXNwYXRjaChjcmVhdGVSZXBseShkYXRhLCBibG9ncG9zdElkLCBjb21tZW50Ll9pZCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKENvbW1lbnRSZXBseUZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50UmVwbHlGb3JtL0NvbW1lbnRSZXBseUZvcm0uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEJsb2NrIGZyb20gJy4uL0xheW91dHMvQmxvY2snXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi4vVUkvVGV4dEFyZWEnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL1VJL0J1dHRvbidcblxuaW1wb3J0IHtjcmVhdGVDb21tZW50fSBmcm9tICcuLi8uLi9zdG9yZS9jb21tZW50c0FjdGlvbnMnXG5cbmNsYXNzIENvbW1lbnRGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgfSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmNyZWF0ZSA9IHRoaXMuY3JlYXRlLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2Vycm9ycywgaXNVcGRhdGluZ30gPSBuZXdQcm9wcy5ibG9ncG9zdC5uZXdDb21tZW50XG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjb250ZW50OiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVDb21tZW50fSA9IHRoaXMucHJvcHNcblxuICAgIGNyZWF0ZUNvbW1lbnQodGhpcy5zdGF0ZS5kYXRhKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7YmxvZ3Bvc3Q6IHtuZXdDb21tZW50OiB7aXNVcGRhdGluZ319fSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICBsYWJlbD1cIlBvc3QgYSBjb21tZW50XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuY29udGVudH1cbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdjb250ZW50Jywgdil9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfT5Qb3N0IGNvbW1lbnQ8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBudWxsLFxuICAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge2Jsb2dwb3N0fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlQ29tbWVudDogZGF0YSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZUNvbW1lbnQoZGF0YSwgYmxvZ3Bvc3QuX2lkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQ29tbWVudEZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50Rm9ybS9Db21tZW50Rm9ybS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJibG9ncG9zdFwiOlwiQmxvZ3Bvc3RfX2Jsb2dwb3N0X19fMzJqWUZcIixcImJsb2dwb3N0X19kYXRlXCI6XCJCbG9ncG9zdF9fYmxvZ3Bvc3RfX2RhdGVfX18zd3BHVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQmxvZ3Bvc3QvQmxvZ3Bvc3QuY3NzXG4gKiogbW9kdWxlIGlkID0gODExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUXVlc3Rpb25zLmNzcydcblxuaW1wb3J0IHtCbG9jaywgV3JhcCwgR3JpZCwgR3JpZEl0ZW0sIE1lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtIZWFkaW5nMX0gZnJvbSAnLi4vVHlwb2dyYXBoeSdcbmltcG9ydCBTaWRlTmF2IGZyb20gJy4uL1NpZGVOYXYnXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9TaWRlQmFyJ1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vQm9keSdcbmltcG9ydCBBc2tRdWVzdGlvblNpZGUgZnJvbSAnLi4vQXNrUXVlc3Rpb25TaWRlJ1xuaW1wb3J0IFF1ZXN0aW9uRm9ybSBmcm9tICcuLi9RdWVzdGlvbkZvcm0nXG5cbmltcG9ydCBpbWcgZnJvbSAnLi9qZW4uanBnJ1xuXG5jb25zdCBRdWVzdGlvbnMgPSAoe1xuICBmYXFzLFxuICBjaGlsZHJlbixcbiAgcGFyYW1zXG59KSA9PiB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gZmFxcy5tYXAoZiA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogYCR7UFVCTElDX1BBVEh9L3F1ZXN0aW9ucy8ke2YudXJsfWAsXG4gICAgICB0aXRsZTogZi50aXRsZVxuICAgIH1cbiAgfSlcblxuICBsZXQgY29udGVudCA9ICcnXG4gIGlmIChwYXJhbXMuZmFxSWQpIHtcbiAgICBjb250ZW50ID0gY2hpbGRyZW5cbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbnNJbnRyb30+XG4gICAgICAgIDxCbG9jayBuPXszfT5cbiAgICAgICAgICA8TWVkaWEgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPE1lZGlhRmlndXJlIG49ezN9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbnNJbnRyb19faW1hZ2V9IC8+XG4gICAgICAgICAgICA8L01lZGlhRmlndXJlPlxuXG4gICAgICAgICAgICA8TWVkaWFCb2R5PlxuICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcxPkhhdmUgYSBxdWVzdGlvbj88L0hlYWRpbmcxPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUXVlc3Rpb25zSW50cm9fX3RleHR9PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RHIuIEplbm5pZmVyIFBvdHRlcjwvc3Ryb25nPiwgb3VyIHZhY2NpbmUgc3BlY2lhbGlzdCw8YnIgLz53aWxsIGJlIGdsYWQgdG8gYXNzaXN0IHlvdSB3aXRoIHlvdXIgcXVlc3Rpb25zXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9NZWRpYUJvZHk+XG4gICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8UXVlc3Rpb25Gb3JtIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxHcmlkSXRlbSBzcGFuPXsxfSBvdXRPZj17M30+XG4gICAgICAgICAgPFNpZGVCYXI+XG4gICAgICAgICAgICB7cGFyYW1zLmZhcUlkXG4gICAgICAgICAgICA/IDxCbG9jayBuPXs2fT5cbiAgICAgICAgICAgICAgPEFza1F1ZXN0aW9uU2lkZSAvPlxuICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8U2lkZU5hdlxuICAgICAgICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zXCJcbiAgICAgICAgICAgICAgbmF2SXRlbXM9e25hdkl0ZW1zfSAvPlxuICAgICAgICAgIDwvU2lkZUJhcj5cbiAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICA8R3JpZEl0ZW0+XG4gICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9XcmFwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBmYXFzOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEudHlwZS5pZCA9PT0gJ2ZhcXMnKVxuICAgIH1cbiAgfVxuKShRdWVzdGlvbnMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbnMvUXVlc3Rpb25zLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlF1ZXN0aW9uc0ludHJvXCI6XCJRdWVzdGlvbnNfX1F1ZXN0aW9uc0ludHJvX19fMWctSnZcIixcIlF1ZXN0aW9uc0ludHJvX19pbWFnZVwiOlwiUXVlc3Rpb25zX19RdWVzdGlvbnNJbnRyb19faW1hZ2VfX18xWEFQWlwiLFwiUXVlc3Rpb25zSW50cm9fX3RleHRcIjpcIlF1ZXN0aW9uc19fUXVlc3Rpb25zSW50cm9fX3RleHRfX18xRjl1S1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zL1F1ZXN0aW9ucy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Fza1F1ZXN0aW9uU2lkZS5jc3MnXG5pbXBvcnQge01lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlLCBCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcblxuaW1wb3J0IGltZyBmcm9tICcuL2plbi5qcGcnXG5cbmNvbnN0IEFza1F1ZXN0aW9uU2lkZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb25TaWRlfT5cbiAgICAgIDxNZWRpYSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIDxNZWRpYUZpZ3VyZSBuPXsyfT5cbiAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9e3N0eWxlcy5Bc2tRdWVzdGlvblNpZGVfX2ltYWdlfSAvPlxuICAgICAgICA8L01lZGlhRmlndXJlPlxuXG4gICAgICAgIDxNZWRpYUJvZHk+XG4gICAgICAgICAgPEJsb2NrIG49ezEuNX0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb25TaWRlX190aXRsZX0+SmVubmlmZXIgUG90dGVyPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb25TaWRlX190ZXh0fT5PdXIgdmFjY2luZSBzcGVjaWFsaXN0IHdpbGwgYmUgZ2xhZCB0byBhc3Npc3QgeW91PC9kaXY+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCdXR0b24gdG89e2Ake1BVQkxJQ19QQVRIfS9xdWVzdGlvbnNgfT5Bc2sgYSBRdWVzdGlvbjwvQnV0dG9uPlxuICAgICAgICA8L01lZGlhQm9keT5cbiAgICAgIDwvTWVkaWE+XG4gICAgPC9hc2lkZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc2tRdWVzdGlvblNpZGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9Bc2tRdWVzdGlvblNpZGUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXNrUXVlc3Rpb25TaWRlXCI6XCJBc2tRdWVzdGlvblNpZGVfX0Fza1F1ZXN0aW9uU2lkZV9fXzhGNDYxXCIsXCJBc2tRdWVzdGlvblNpZGVfX2ltYWdlXCI6XCJBc2tRdWVzdGlvblNpZGVfX0Fza1F1ZXN0aW9uU2lkZV9faW1hZ2VfX19iNXE4T1wiLFwiQXNrUXVlc3Rpb25TaWRlX190ZXh0XCI6XCJBc2tRdWVzdGlvblNpZGVfX0Fza1F1ZXN0aW9uU2lkZV9fdGV4dF9fXzNRNzVrXCIsXCJBc2tRdWVzdGlvblNpZGVfX3RpdGxlXCI6XCJBc2tRdWVzdGlvblNpZGVfX0Fza1F1ZXN0aW9uU2lkZV9fdGl0bGVfX18xSnpwWFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQXNrUXVlc3Rpb25TaWRlL0Fza1F1ZXN0aW9uU2lkZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9qZW4uM2JiMzVhN2M2OWU1M2M4M2EyZDM5Y2RmMTZiZjZlY2YuanBnXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9qZW4uanBnXG4gKiogbW9kdWxlIGlkID0gODE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIFRleHRJbnB1dCwgVGV4dEFyZWF9IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtjcmVhdGVRdWVzdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvcXVlc3Rpb25zQWN0aW9ucydcblxuY2xhc3MgUXVlc3Rpb25Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JzOiB7fSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcG9zdGVyTmFtZTogcHJvcHMudXNlci5uYW1lLFxuICAgICAgICBwb3N0ZXJFbWFpbDogcHJvcHMudXNlci5lbWFpbCxcbiAgICAgICAgcXVlc3Rpb246ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnMsIGRhdGEsIGlzVXBkYXRpbmd9ID0gbmV3UHJvcHMucXVlc3Rpb25cblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBvc3Rlck5hbWU6IGRhdGEudXNlci5uYW1lLFxuICAgICAgICAgICAgcG9zdGVyRW1haWw6IGRhdGEudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVRdWVzdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBjcmVhdGVRdWVzdGlvbih0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc1VwZGF0aW5nfSA9IHRoaXMucHJvcHMucXVlc3Rpb25cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBvc3Rlck5hbWV9XG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucG9zdGVyTmFtZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBDYXNleVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ3Bvc3Rlck5hbWUnLCB2KX0gLz5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBjYXNleUBnbWFpbC5jb21cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdwb3N0ZXJFbWFpbCcsIHYpfSAvPlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxCbG9jayBuPXsxLjV9PlxuICAgICAgICAgIDxUZXh0QXJlYSBsYWJlbD1cIllvdXIgcXVlc3Rpb25cIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5xdWVzdGlvbn1cbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5xdWVzdGlvbn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiB3aGljaCB2YWNjaW5lcyBhcmUgc2FmZSBmb3Iga2lkcyB1bmRlciA1IHllYXJzP1wiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ3F1ZXN0aW9uJywgdil9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfT5Bc2sgcXVlc3Rpb248L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlcixcbiAgICAgIHF1ZXN0aW9uOiBzdGF0ZS5xdWVzdGlvblxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVRdWVzdGlvbjogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlUXVlc3Rpb24oZGF0YSwgJ1lvdSBxdWVzdGlvbiBoYXMgYmVlbiBzZW50LCB3ZSB3aWxsIGdldCBiYWNrIHRvIHlvdSB2ZXJ5IHNvb24gOiknKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoUXVlc3Rpb25Gb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25Gb3JtL1F1ZXN0aW9uRm9ybS5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvamVuLjNiYjM1YTdjNjllNTNjODNhMmQzOWNkZjE2YmY2ZWNmLmpwZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnMvamVuLmpwZ1xuICoqIG1vZHVsZSBpZCA9IDgxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL05vdEZvdW5kJ1xuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vQXJ0aWNsZSdcblxuY29uc3QgRmFxID0gKHtcbiAgZmFxXG59KSA9PiB7XG4gIGlmIChmYXEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFydGljbGUgYXJ0aWNsZT17ZmFxfSAvPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5vdEZvdW5kIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7ZmFxSWR9fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgZmFxOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEudXJsID09PSBmYXFJZClbMF1cbiAgICB9XG4gIH1cbikoRmFxKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRmFxL0ZhcS5qc3hcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUkVQTFlfQ1JFQVRFID0gJ1JFUVVFU1RfUkVQTFlfQ1JFQVRFJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fUkVQTFlfQ1JFQVRFID0gJ0NPTkZJUk1fUkVQTFlfQ1JFQVRFJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9SRVBMWV9DUkVBVEUgPSAnUkVKRUNUX1JFUExZX0NSRUFURSdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RDcmVhdGUgPSAoXG4gIGFydGljbGVJZCxcbiAgY29tbWVudElkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1JFUExZX0NSRUFURSxcbiAgICBhcnRpY2xlSWQsXG4gICAgY29tbWVudElkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9IChcbiAgcmVwbHksXG4gIGFydGljbGVJZCxcbiAgY29tbWVudElkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1JFUExZX0NSRUFURSxcbiAgICByZXBseSxcbiAgICBhcnRpY2xlSWQsXG4gICAgY29tbWVudElkXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0Q3JlYXRlID0gKFxuICBlcnJvcnMsXG4gIGFydGljbGVJZCxcbiAgY29tbWVudElkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfUkVQTFlfQ1JFQVRFLFxuICAgIGVycm9ycyxcbiAgICBhcnRpY2xlSWQsXG4gICAgY29tbWVudElkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJlcGx5ID0gKFxuICBkYXRhLFxuICBhcnRpY2xlSWQsXG4gIGNvbW1lbnRJZCxcbiAgc3VjY2Vzc01lc3NhZ2VcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDcmVhdGUoYXJ0aWNsZUlkLCBjb21tZW50SWQpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vYXJ0aWNsZXMvJHthcnRpY2xlSWR9L2NvbW1lbnRzLyR7Y29tbWVudElkfS9yZXBsaWVzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcmVwbHk6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKGpzb24uZGF0YS5yZXBseSwgYXJ0aWNsZUlkLCBjb21tZW50SWQpKVxuICAgICAgICAgIGlmIChzdWNjZXNzTWVzc2FnZSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKHN1Y2Nlc3NNZXNzYWdlLCAnbG9nJykpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgY29uc3QgcHJvcENvbXBvbmVudHMgPSBwcm9wLnNwbGl0KCcuJylcbiAgICAgICAgICAgIGNvbnN0IHJlcGx5UHJvcCA9IHByb3BDb21wb25lbnRzW3Byb3BDb21wb25lbnRzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICBwYXlsb2FkW3JlcGx5UHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCwgYXJ0aWNsZUlkLCBjb21tZW50SWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHBvc3QgY29tbWVudCBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9yZXBsaWVzQWN0aW9ucy5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBWEE7QUFEQTtBQURBOzs7Ozs7O0FDdEJBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBM0JBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBYkE7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBeUJBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBd0NBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVpBO0FBY0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWEE7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUxBO0FBUUE7QUFDQTtBQUNBOzs7O0FBekRBO0FBQ0E7QUEyREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFWQTtBQURBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUE1QkE7QUFEQTtBQXFDQTs7OztBQWhHQTtBQUNBO0FBa0dBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ3JDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUMzQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7OztBQ2xEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFTQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQU1BO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7OztBQzdFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ3ZGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFEQTtBQWlCQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTs7OztBQS9CQTtBQUNBO0FBaUNBOzs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBVEE7QUFEQTtBQWtCQTtBQUNBOzs7Ozs7OztBQzdCQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTs7OztBQXhDQTtBQUNBO0FBMENBOzs7Ozs7O0FDaERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQVRBO0FBTEE7QUFEQTtBQURBO0FBc0JBO0FBdkJBO0FBSEE7QUFEQTtBQWdDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBREE7QUFEQTtBQURBO0FBSEE7QUFEQTtBQURBO0FBaUJBO0FBQ0E7Ozs7Ozs7O0FDOURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7Ozs7QUF6Q0E7QUFDQTtBQTJDQTs7Ozs7OztBQ25EQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7QUN2Q0E7QUFDQTs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVRBO0FBREE7QUFEQTtBQURBO0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTs7Ozs7OztBQ25FQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQUNBOzs7Ozs7OztBQ25DQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQVBBO0FBREE7QUFnQkE7QUFDQTs7OztBQS9FQTtBQUNBO0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFQQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3BCQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQWZBO0FBQ0E7QUFpQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUEE7QUFEQTtBQURBO0FBa0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBREE7QUFEQTtBQVBBO0FBREE7QUFEQTtBQURBO0FBbkJBO0FBREE7QUFnREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7Ozs7Ozs7QUNwRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBSUE7QUFMQTtBQVFBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBL0JBO0FBQ0E7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7Ozs7Ozs7QUNsREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFqQkE7QUFEQTtBQURBO0FBREE7QUFEQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7OztBQzFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFuQkE7QUFEQTtBQTJCQTtBQUNBO0FBR0E7QUFDQTs7OztBQXhEQTtBQUNBO0FBMERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFMQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFMQTtBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBTEE7QUFRQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFiQTtBQW9CQTs7OztBQTNFQTtBQUNBO0FBNkVBOzs7Ozs7O0FDekZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBUUE7QUFDQTs7Ozs7Ozs7QUNwQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFYQTtBQVlBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQVBBO0FBVkE7QUF3QkE7Ozs7QUFqRkE7QUFDQTtBQW1GQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQVhBO0FBWUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQVZBO0FBZUE7Ozs7QUF2RUE7QUFDQTtBQXlFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7OztBQzdGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFMQTtBQUxBO0FBREE7QUFrQkE7QUFuQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFWQTtBQURBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBaEJBO0FBREE7QUF5QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7Ozs7O0FDekZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUxBO0FBREE7QUFpQkE7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQ0E7QUFRQTtBQUNBO0FBYkE7QUFjQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBNUJBO0FBaUNBOzs7O0FBN0ZBO0FBQ0E7QUErRkE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7O0FDcEhBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==