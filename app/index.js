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

	var _App = __webpack_require__(604);

	var _App2 = _interopRequireDefault(_App);

	var _Section = __webpack_require__(653);

	var _Section2 = _interopRequireDefault(_Section);

	var _SectionArticle = __webpack_require__(671);

	var _SectionArticle2 = _interopRequireDefault(_SectionArticle);

	var _SectionCategoryItem = __webpack_require__(676);

	var _SectionCategoryItem2 = _interopRequireDefault(_SectionCategoryItem);

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

	var _scheduleReducer = __webpack_require__(566);

	var _scheduleReducer2 = _interopRequireDefault(_scheduleReducer);

	var _searchReducer = __webpack_require__(568);

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
	    data: {},
	    errors: {}
	  },
	  articles: {
	    isFetching: true,
	    items: []
	  },
	  schedule: {
	    isFetching: true,
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
	        dispatch((0, _flashActions.flashMessage)('Could not post questions due to errors', 'error'));
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

	var _initialState = __webpack_require__(560);

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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _scheduleActions = __webpack_require__(567);

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

/***/ 567:
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

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _searchActions = __webpack_require__(569);

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

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fetchSearchResults = exports.RECEIVE_SEARCH_RESULTS = exports.REQUEST_SEARCH_RESULTS = undefined;

	var _algoliaSearch = __webpack_require__(570);

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

/***/ 570:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _algoliasearch = __webpack_require__(571);

	var _algoliasearch2 = _interopRequireDefault(_algoliasearch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var client = (0, _algoliasearch2.default)('74S1JNB1ZT', '3de6fdbafc477cf019673bb81043ae0d');
	var index = client.initIndex('pages');

	exports.default = index;

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Login = __webpack_require__(605);

	var _Login2 = _interopRequireDefault(_Login);

	var _Header = __webpack_require__(637);

	var _Header2 = _interopRequireDefault(_Header);

	var _Footer = __webpack_require__(646);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _FlashMessage = __webpack_require__(650);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _Loading = __webpack_require__(651);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Layouts = __webpack_require__(606);

	var _authActions = __webpack_require__(557);

	var _articleActions = __webpack_require__(565);

	var _scheduleActions = __webpack_require__(567);

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
	      this.props.fetchArticles();
	      this.props.fetchSchedule();
	      var token = localStorage.getItem('antiVax_auth_token');

	      if (token) {
	        this.props.attemptToken(token);
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

	var _Layouts = __webpack_require__(606);

	var _UI = __webpack_require__(618);

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

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageContent = exports.Page = exports.MediaFigure = exports.MediaBody = exports.Media = exports.ListInlineItem = exports.ListInline = exports.ListItem = exports.List = exports.GridItem = exports.Grid = exports.Wrap = exports.Flex = exports.Block = undefined;

	var _Block = __webpack_require__(607);

	var _Block2 = _interopRequireDefault(_Block);

	var _Flex = __webpack_require__(608);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Grid = __webpack_require__(609);

	var _List = __webpack_require__(610);

	var _ListInline = __webpack_require__(612);

	var _Media = __webpack_require__(614);

	var _Page = __webpack_require__(616);

	var _Wrap = __webpack_require__(617);

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

/***/ 607:
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

/***/ 608:
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

/***/ 609:
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

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItem = exports.List = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(611);

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

/***/ 611:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"List__list___2kBUd","list__item":"List__list__item___1D2VF"};

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListInlineItem = exports.ListInline = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _ListInline = __webpack_require__(613);

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

/***/ 613:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"listInline":"ListInline__listInline___3Gjhu","listInline__item":"ListInline__listInline__item___2K1kQ"};

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MediaFigure = exports.MediaBody = exports.Media = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Media = __webpack_require__(615);

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

/***/ 615:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"media":"Media__media___3a00G","media__figure":"Media__media__figure___24ZwA","media__body":"Media__media__body___3Vd2-"};

/***/ },

/***/ 616:
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

/***/ 617:
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

/***/ 618:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = exports.Alert = exports.Breadcrumbs = exports.TextArea = exports.TextInput = exports.PageLink = exports.Button = exports.Spinner = undefined;

	var _Alert = __webpack_require__(619);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Breadcrumbs = __webpack_require__(621);

	var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

	var _Button = __webpack_require__(623);

	var _Button2 = _interopRequireDefault(_Button);

	var _ModalWindow = __webpack_require__(625);

	var _PageLink = __webpack_require__(627);

	var _PageLink2 = _interopRequireDefault(_PageLink);

	var _Spinner = __webpack_require__(629);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _TextArea = __webpack_require__(631);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _TextInput = __webpack_require__(635);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Spinner = _Spinner2.default;
	exports.Button = _Button2.default;
	exports.PageLink = _PageLink2.default;
	exports.TextInput = _TextInput2.default;
	exports.TextArea = _TextArea2.default;
	exports.Breadcrumbs = _Breadcrumbs2.default;
	exports.Alert = _Alert2.default;
	exports.ModalWindow = _ModalWindow.ModalWindow;
	exports.ModalWindowBody = _ModalWindow.ModalWindowBody;
	exports.ModalWindowHeader = _ModalWindow.ModalWindowHeader;
		exports.ModalWindowFooter = _ModalWindow.ModalWindowFooter;

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Alert = __webpack_require__(620);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Layouts = __webpack_require__(606);

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

/***/ 620:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Alert":"Alert__Alert___37_QC","Alert__message":"Alert__Alert__message___2wCZF","Alert__message_default":"Alert__Alert__message_default___n_R9C","Alert__message_error":"Alert__Alert__message_error___2id4W","alert-enter":"Alert__alert-enter___K6JdL","alert-enter-active":"Alert__alert-enter-active___3vlCw","alert-leave":"Alert__alert-leave___2PpYT","alert-leave-active":"Alert__alert-leave-active___2ha_Q"};

/***/ },

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Breadcrumbs = __webpack_require__(622);

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

/***/ 622:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Breadcrumbs":"Breadcrumbs__Breadcrumbs___2WLj0","Breadcrumbs__item":"Breadcrumbs__Breadcrumbs__item___1DayI"};

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

	var _Button = __webpack_require__(624);

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
	    padding: baseline * 0.6 + 'rem ' + baseline * 1.5 + 'rem',
	    lineHeight: 1.5 * baseline + 'rem',
	    fontSize: 1.083 * baseline + 'rem'
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
	      { style: style, disabled: disabled, className: className.join(' ') + ' ' + extraClassNames, to: to },
	      children
	    );
	  } else if (href) {
	    return _react2.default.createElement(
	      'a',
	      { style: style, disabled: disabled, className: className.join(' ') + ' ' + extraClassNames, href: href },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'button',
	      { style: style, disabled: disabled, className: className.join(' ') + ' ' + extraClassNames, onClick: onClick },
	      children
	    );
	  }
	};

	exports.default = Button;

/***/ },

/***/ 624:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InverseButton":"Button__InverseButton___3OQXU","InverseButton_accent":"Button__InverseButton_accent___13osz","InverseButton_error":"Button__InverseButton_error___3idBZ","Button":"Button__Button___QI7b2","Button_accent":"Button__Button_accent___33NpS","Button_error":"Button__Button_error___3PSUX"};

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = undefined;

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _ModalWindow = __webpack_require__(626);

	var _ModalWindow2 = _interopRequireDefault(_ModalWindow);

	var _Layouts = __webpack_require__(606);

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

/***/ 626:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Modal":"ModalWindow__Modal___2klcg","ModalWindow":"ModalWindow__ModalWindow___2tVyZ","ModalWindow__header":"ModalWindow__ModalWindow__header___1QrWH","ModalWindow__body":"ModalWindow__ModalWindow__body___3QuQh","ModalWindow__footer":"ModalWindow__ModalWindow__footer___2I0TF"};

/***/ },

/***/ 627:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _PageLink = __webpack_require__(628);

	var _PageLink2 = _interopRequireDefault(_PageLink);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PageLink = function PageLink(_ref) {
	  var children = _ref.children;
	  var extraClassNames = _ref.extraClassNames;
	  var to = _ref.to;

	  return _react2.default.createElement(
	    _reactRouter.Link,
	    { className: _PageLink2.default.pageLink + ' ' + extraClassNames, to: to },
	    children
	  );
	};

	exports.default = PageLink;

/***/ },

/***/ 628:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"pageLink":"PageLink__pageLink___1wPPj"};

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(630);

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

/***/ 630:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Spinner":"Spinner__Spinner___1fiyk","Spinner__inner":"Spinner__Spinner__inner___58vcT","Spinner__circle":"Spinner__Spinner__circle___2ZugO","sk-circleFadeDelay":"Spinner__sk-circleFadeDelay___1Etn8","Spinner__circle1":"Spinner__Spinner__circle1___BOD7n","Spinner__circle2":"Spinner__Spinner__circle2___2aBtr","Spinner__circle3":"Spinner__Spinner__circle3___1BaZf","Spinner__circle4":"Spinner__Spinner__circle4___3V5r7","Spinner__circle5":"Spinner__Spinner__circle5___3DJ5X","Spinner__circle6":"Spinner__Spinner__circle6___ZpU5m","Spinner__circle7":"Spinner__Spinner__circle7___XpnK5","Spinner__circle8":"Spinner__Spinner__circle8___1_RRX","Spinner__circle9":"Spinner__Spinner__circle9___fO0OG","Spinner__circle10":"Spinner__Spinner__circle10___ni35A","Spinner__circle11":"Spinner__Spinner__circle11___1hav9","Spinner__circle12":"Spinner__Spinner__circle12___2ipzT"};

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(632);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _TextArea = __webpack_require__(634);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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


	      return _react2.default.createElement(
	        'label',
	        { className: _TextArea2.default.TextArea },
	        label ? _react2.default.createElement(_InputLabel2.default, { label: label, error: error }) : null,
	        _react2.default.createElement('textarea', { ref: function ref(el) {
	            _this2._element = el;
	          },
	          value: value,
	          className: _TextArea2.default.TextArea__input + ' ' + (error ? _TextArea2.default.TextArea__input_error : null),
	          disabled: disabled,
	          rows: 5,
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

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(633);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _Layouts = __webpack_require__(606);

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
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _InputLabel2.default.InputLabel__label },
	          label
	        )
	      ),
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

/***/ 633:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InputLabel":"InputLabel__InputLabel___1CemI","InputLabel__label":"InputLabel__InputLabel__label___2Yy_P","InputLabel__error":"InputLabel__InputLabel__error___2MFNd","InputLabel_error":"InputLabel__InputLabel_error___3Ep5q"};

/***/ },

/***/ 634:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextArea":"TextArea__TextArea___19ip7","TextArea__input":"TextArea__TextArea__input___x5B4I","TextArea__input_error":"TextArea__TextArea__input_error___369gU"};

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(632);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _TextInput = __webpack_require__(636);

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

/***/ 636:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextInput":"TextInput__TextInput___1ACGY","TextInput__input":"TextInput__TextInput__input___1ryf3","TextInput__input_error":"TextInput__TextInput__input_error___3pTJz"};

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _MainNav = __webpack_require__(638);

	var _MainNav2 = _interopRequireDefault(_MainNav);

	var _SearchBar = __webpack_require__(640);

	var _SearchBar2 = _interopRequireDefault(_SearchBar);

	var _Header = __webpack_require__(642);

	var _Header2 = _interopRequireDefault(_Header);

	var _Layouts = __webpack_require__(606);

	var _CurrentUser = __webpack_require__(643);

	var _CurrentUser2 = _interopRequireDefault(_CurrentUser);

	var _logo = __webpack_require__(645);

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

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Layouts = __webpack_require__(606);

	var _MainNav = __webpack_require__(639);

	var _MainNav2 = _interopRequireDefault(_MainNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var navItems = [{
	  label: 'Questions & Answers',
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

/***/ 639:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Bg":"MainNav__Bg___2OOEx","MainNav":"MainNav__MainNav___4WNh6","MainNav__indicator":"MainNav__MainNav__indicator___3cTcw","MainNav__indicator_active":"MainNav__MainNav__indicator_active___22mIC","MainNav__item":"MainNav__MainNav__item___1_Fro","MainNav__item_active":"MainNav__MainNav__item_active___1oBuu"};

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

	var _reactRouter = __webpack_require__(492);

	var _SearchBar = __webpack_require__(641);

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

/***/ 641:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SearchBar":"SearchBar__SearchBar___dtdTh","SearchBar__input":"SearchBar__SearchBar__input___gwQMh"};

/***/ },

/***/ 642:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CoverImg":"Header__CoverImg___31A8B","CoverImg__body":"Header__CoverImg__body___2bO8r","Header":"Header__Header___oE2FH","Header__logo":"Header__Header__logo___1rqU_","Header__title":"Header__Header__title___2tixa","Header__subtitle":"Header__Header__subtitle____Z_OB"};

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _CurrentUser = __webpack_require__(644);

	var _CurrentUser2 = _interopRequireDefault(_CurrentUser);

	var _authActions = __webpack_require__(557);

	var _UI = __webpack_require__(618);

	var _Layouts = __webpack_require__(606);

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

/***/ 644:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CurrentUser":"CurrentUser__CurrentUser___1WaU6","CurrentUser__name":"CurrentUser__CurrentUser__name___12hIZ"};

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/logo.2b9f6da2b3664dbec7b1bcf2b91b608a.svg";

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Footer = __webpack_require__(647);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _FooterNav = __webpack_require__(648);

	var _FooterNav2 = _interopRequireDefault(_FooterNav);

	var _Layouts = __webpack_require__(606);

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

/***/ 647:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Bg":"Footer__Bg___17iby","Footer":"Footer__Footer___268PT"};

/***/ },

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Layouts = __webpack_require__(606);

	var _FooterNav = __webpack_require__(649);

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

/***/ 649:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"FooterNav":"FooterNav__FooterNav___39W3R","FooterNav__title":"FooterNav__FooterNav__title___1lOWc","FooterNav__item":"FooterNav__FooterNav__item___2e4X2","FooterNav__link":"FooterNav__FooterNav__link___KUOZh"};

/***/ },

/***/ 650:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(618);

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

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Loading = __webpack_require__(652);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(618);

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

/***/ 652:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Loading":"Loading__Loading___3pycz"};

/***/ },

/***/ 653:
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

	var _Layouts = __webpack_require__(606);

	var _SideBar = __webpack_require__(654);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	var _SideNav = __webpack_require__(656);

	var _SideNav2 = _interopRequireDefault(_SideNav);

	var _Body = __webpack_require__(667);

	var _Body2 = _interopRequireDefault(_Body);

	var _NotFound = __webpack_require__(668);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _config = __webpack_require__(670);

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
	      var location = _props.location;
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
	      var location = newProps.location;
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
	                _react2.default.createElement(_SideNav2.default, { title: currentSection.label, articles: articles })
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

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _SideBar = __webpack_require__(655);

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

/***/ 655:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SideBar":"SideBar__SideBar___3o3NU"};

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Layouts = __webpack_require__(606);

	var _Typography = __webpack_require__(657);

	var _SideNav = __webpack_require__(666);

	var _SideNav2 = _interopRequireDefault(_SideNav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SideNav = function SideNav(_ref) {
	  var title = _ref.title;
	  var articles = _ref.articles;

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
	    articles.map(function (i) {
	      return _react2.default.createElement(
	        _reactRouter.Link,
	        {
	          to: ("/app") + '/' + i.type.id + '/' + i.url,
	          key: i._id,
	          activeClassName: _SideNav2.default.SideNav__item_active,
	          className: _SideNav2.default.SideNav__item },
	        i.title
	      );
	    })
	  );
	};

	exports.default = SideNav;

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Heading3 = exports.Heading2 = exports.Heading1 = exports.Content = undefined;

	var _Content = __webpack_require__(658);

	var _Content2 = _interopRequireDefault(_Content);

	var _Heading = __webpack_require__(660);

	var _Heading2 = _interopRequireDefault(_Heading);

	var _Heading3 = __webpack_require__(662);

	var _Heading4 = _interopRequireDefault(_Heading3);

	var _Heading5 = __webpack_require__(664);

	var _Heading6 = _interopRequireDefault(_Heading5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Content = _Content2.default;
	exports.Heading1 = _Heading2.default;
	exports.Heading2 = _Heading4.default;
	exports.Heading3 = _Heading6.default;

/***/ },

/***/ 658:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Content = __webpack_require__(659);

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

/***/ 659:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Content":"Content__Content___2RQ0U"};

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(661);

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

/***/ 661:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading1":"Heading1__Heading1___3RGJF","Heading1Link":"Heading1__Heading1Link___26Q0_"};

/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(663);

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

/***/ 663:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading2":"Heading2__Heading2___1lmJK","Heading2Link":"Heading2__Heading2Link___1uax0"};

/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(492);

	var _Heading = __webpack_require__(665);

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

/***/ 665:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Heading3":"Heading3__Heading3___1kigK","Heading3Link":"Heading3__Heading3Link___1JCmL"};

/***/ },

/***/ 666:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SideNav":"SideNav__SideNav___3OINv","SideNav__title":"SideNav__SideNav__title___3D0x3","SideNav__item":"SideNav__SideNav__item___1jV4V","SideNav__item_active":"SideNav__SideNav__item_active___1jplP"};

/***/ },

/***/ 667:
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

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _NotFound = __webpack_require__(669);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Layouts = __webpack_require__(606);

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

/***/ 669:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"NotFound":"NotFound__NotFound___31Cli","NotFound__title":"NotFound__NotFound__title___ryUEC","NotFound__body":"NotFound__NotFound__body___C99Bz"};

/***/ },

/***/ 670:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var blogposts = exports.blogposts = {
	  id: 'blogposts',
	  label: 'Blogposts'
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

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Article = __webpack_require__(672);

	var _Article2 = _interopRequireDefault(_Article);

	var _CategoryDirectory = __webpack_require__(673);

	var _CategoryDirectory2 = _interopRequireDefault(_CategoryDirectory);

	var _VaccinationSchedule = __webpack_require__(674);

	var _VaccinationSchedule2 = _interopRequireDefault(_VaccinationSchedule);

	var _Layouts = __webpack_require__(606);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SectionArticle = function SectionArticle(_ref) {
	  var article = _ref.article;
	  var children = _ref.children;
	  var params = _ref.params;

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

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _Layouts = __webpack_require__(606);

	var _Typography = __webpack_require__(657);

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

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(618);

	var _Layouts = __webpack_require__(606);

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
	          _UI.PageLink,
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

/***/ 674:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(618);

	var _Layouts = __webpack_require__(606);

	var _VaccinationSchedule = __webpack_require__(675);

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
	                          _UI.PageLink,
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

/***/ 675:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Schedule":"VaccinationSchedule__Schedule___1jugB","ScheduleItem":"VaccinationSchedule__ScheduleItem___3xmtb","ScheduleItem__age":"VaccinationSchedule__ScheduleItem__age___1bAI1","ScheduleItem__vaccines":"VaccinationSchedule__ScheduleItem__vaccines___mHA4I","ScheduleItem_header":"VaccinationSchedule__ScheduleItem_header___1wdr4"};

/***/ },

/***/ 676:
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

	var _reactScroll = __webpack_require__(677);

	var _Article = __webpack_require__(672);

	var _Article2 = _interopRequireDefault(_Article);

	var _SectionCategoryItem = __webpack_require__(690);

	var _SectionCategoryItem2 = _interopRequireDefault(_SectionCategoryItem);

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

/***/ 690:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SectionCategoryItem":"SectionCategoryItem__SectionCategoryItem___1tRod","SectionCategoryItem__backlink":"SectionCategoryItem__SectionCategoryItem__backlink___1xm4s"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NjaGVkdWxlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NjaGVkdWxlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zZWFyY2hBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYWxnb2xpYVNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYXlvdXRzLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0Jsb2NrL0Jsb2NrLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9GbGV4L0ZsZXguanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL1BhZ2UvUGFnZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVUkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0JyZWFkY3J1bWJzL0JyZWFkY3J1bWJzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9QYWdlTGluay9QYWdlTGluay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvUGFnZUxpbmsvUGFnZUxpbmsuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXRMYWJlbC9JbnB1dExhYmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9NYWluTmF2L01haW5OYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DdXJyZW50VXNlci9DdXJyZW50VXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi9Gb290ZXJOYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi9Gb290ZXJOYXYuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NpZGVOYXYvU2lkZU5hdi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9Db250ZW50L0NvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQ29udGVudC9Db250ZW50LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlTmF2L1NpZGVOYXYuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Cb2R5L0JvZHkuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuY3NzIiwid2VicGFjazovLy9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uQXJ0aWNsZS9TZWN0aW9uQXJ0aWNsZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FydGljbGUvQXJ0aWNsZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NhdGVnb3J5RGlyZWN0b3J5L0NhdGVnb3J5RGlyZWN0b3J5LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVmFjY2luYXRpb25TY2hlZHVsZS9WYWNjaW5hdGlvblNjaGVkdWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WYWNjaW5hdGlvblNjaGVkdWxlL1ZhY2NpbmF0aW9uU2NoZWR1bGUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uQ2F0ZWdvcnlJdGVtL1NlY3Rpb25DYXRlZ29yeUl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25DYXRlZ29yeUl0ZW0vU2VjdGlvbkNhdGVnb3J5SXRlbS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcblxuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4UmVkaXJlY3QsIGhhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb24nXG5pbXBvcnQgU2VjdGlvbkFydGljbGUgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25BcnRpY2xlJ1xuaW1wb3J0IFNlY3Rpb25DYXRlZ29yeUl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25DYXRlZ29yeUl0ZW0nXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuXG5SZWFjdERPTS5yZW5kZXIoKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgICAgIDxSb3V0ZSBwYXRoPXtgJHtQVUJMSUNfUEFUSH1gfSBjb21wb25lbnQ9e0FwcH0+XG5cblxuICAgICAgICA8Um91dGUgcGF0aD1cIjpzZWN0aW9uSWRcIiBjb21wb25lbnQ9e1NlY3Rpb259PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmFydGljbGVJZFwiIGNvbXBvbmVudD17U2VjdGlvbkFydGljbGV9PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6aXRlbUlkXCIgY29tcG9uZW50PXtTZWN0aW9uQ2F0ZWdvcnlJdGVtfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2luZGV4LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rTWlkZGxld2FyZV1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpXG4gIG1pZGRsZXdhcmUucHVzaChsb2dnZXIpXG59XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc3RvcmUuanNcbiAqKi8iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aFJlZHVjZXInXG5pbXBvcnQgZmxhc2ggZnJvbSAnLi9mbGFzaFJlZHVjZXInXG5pbXBvcnQgcXVlc3Rpb24gZnJvbSAnLi9xdWVzdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IGFydGljbGVzIGZyb20gJy4vYXJ0aWNsZVJlZHVjZXInXG5pbXBvcnQgc2NoZWR1bGUgZnJvbSAnLi9zY2hlZHVsZVJlZHVjZXInXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoUmVkdWNlcidcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoLFxuICBmbGFzaCxcbiAgcXVlc3Rpb24sXG4gIGFydGljbGVzLFxuICBzY2hlZHVsZSxcbiAgc2VhcmNoXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0FVVEgsIExPR0lOLCBMT0dPVVR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBhdXRoID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5hdXRoLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0FVVEg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLmF1dGgsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIExPR0lOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IGFjdGlvbi51c2VyXG4gICAgICB9XG4gICAgY2FzZSBMT0dPVVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogbnVsbFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXV0aFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9BVVRIID0gJ1JFUVVFU1RfQVVUSCdcbmV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTidcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xuXG5jb25zdCByZXF1ZXN0QXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0FVVEhcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgIGRpc3BhdGNoKHt0eXBlOiBMT0dPVVR9KVxuICB9XG59XG5cbmNvbnN0IGxvZ0luID0gKFxuICB1c2VyXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dJTixcbiAgICB1c2VyXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aENyZWRlbnRpYWxzID0gKFxuICBlbWFpbCxcbiAgcGFzc3dvcmRcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBdXRoKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hdXRoL2F1dGhlbnRpY2F0ZS1jcmVkZW50aWFsc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicsIGpzb24uZGF0YS50b2tlbilcbiAgICAgICAgICBkaXNwYXRjaChsb2dJbihqc29uLmRhdGEudXNlcikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKGpzb24uZGF0YS5lcnJvciwgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aFRva2VuID0gKFxuICB0b2tlblxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEF1dGgoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2F1dGgvYXV0aGVudGljYXRlLXRva2VuYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRva2VuXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nLCBqc29uLmRhdGEudG9rZW4pXG4gICAgICAgICAgZGlzcGF0Y2gobG9nSW4oanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShqc29uLmRhdGEuZXJyb3IsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXV0aEFjdGlvbnMuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgU0VUX01FU1NBR0UgPSAnU0VUX01FU1NBR0UnXG5leHBvcnQgY29uc3QgVU5TRVRfTUVTU0FHRSA9ICdVTlNFVF9NRVNTQUdFJ1xuXG5jb25zdCBzZXRNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZSxcbiAgdGltZW91dElkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfTUVTU0FHRSxcbiAgICBtZXNzYWdlLFxuICAgIG1lc3NhZ2VUeXBlLFxuICAgIHRpbWVvdXRJZFxuICB9XG59XG5cbmNvbnN0IHVuc2V0TWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGVcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVOU0VUX01FU1NBR0VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmxhc2hNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZVxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgY29uc3QgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2godW5zZXRNZXNzYWdlKCkpXG4gICAgfSwgMjAwMClcblxuICAgIGRpc3BhdGNoKHNldE1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZVR5cGUsIHQpKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hBY3Rpb25zLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhdXRoOiB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgdXNlcjogbnVsbFxuICB9LFxuICBmbGFzaDoge1xuICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB0aW1lb3V0SWQ6IG51bGxcbiAgfSxcbiAgbmV3UXVlc3Rpb246IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBkYXRhOiB7fSxcbiAgICBlcnJvcnM6IHt9XG4gIH0sXG4gIGFydGljbGVzOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgc2NoZWR1bGU6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBwb3N0U2NoZWR1bGVDb250ZW50OiBudWxsXG4gIH0sXG4gIHNlYXJjaDoge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvaW5pdGlhbFN0YXRlLmpzXG4gKiovIiwiaW1wb3J0IHtTRVRfTUVTU0FHRSwgVU5TRVRfTUVTU0FHRX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBmbGFzaCA9IChcbiAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIG1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLFxuICAgICAgICB0eXBlOiBhY3Rpb24ubWVzc2FnZVR5cGUsXG4gICAgICAgIHRpbWVvdXRJZDogYWN0aW9uLnRpbWVvdXRJZFxuICAgICAgfSlcbiAgICBjYXNlIFVOU0VUX01FU1NBR0U6XG4gICAgICBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dElkKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLmZsYXNoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmbGFzaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9RVUVTVElPTl9DUkVBVEUsIENPTkZJUk1fUVVFU1RJT05fQ1JFQVRFLCBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFfSBmcm9tICcuL3F1ZXN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBxdWVzdGlvbiA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUubmV3UXVlc3Rpb24sXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfUVVFU1RJT05fQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX1FVRVNUSU9OX0NSRUFURTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUubmV3UXVlc3Rpb24pXG4gICAgY2FzZSBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXN0aW9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcXVlc3Rpb25zUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9RVUVTVElPTl9DUkVBVEUgPSAnUkVRVUVTVF9RVUVTVElPTl9DUkVBVEUnXG5leHBvcnQgY29uc3QgQ09ORklSTV9RVUVTVElPTl9DUkVBVEUgPSAnQ09ORklSTV9RVUVTVElPTl9DUkVBVEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX1FVRVNUSU9OX0NSRUFURSA9ICdSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdENyZWF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1FVRVNUSU9OX0NSRUFURVxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1DcmVhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9RVUVTVElPTl9DUkVBVEVcbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX1FVRVNUSU9OX0NSRUFURSxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlUXVlc3Rpb24gPSAoXG4gIGRhdGEsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9xdWVzdGlvbnMvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcXVlc3Rpb246IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKCkpXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UsICdsb2cnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHBvc3QgcXVlc3Rpb25zIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3F1ZXN0aW9uc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfQVJUSUNMRVMsIFJFQ0VJVkVfQVJUSUNMRVN9IGZyb20gJy4vYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBhcnRpY2xlcyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuYXJ0aWNsZXMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVJUSUNMRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfQVJUSUNMRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXNcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQVJUSUNMRVMgPSAnUkVRVUVTVF9BUlRJQ0xFUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX0FSVElDTEVTID0gJ1JFQ0VJVkVfQVJUSUNMRVMnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0QXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9BUlRJQ0xFU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVBcnRpY2xlcyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfQVJUSUNMRVMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hBcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXJ0aWNsZXMoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2FydGljbGVzL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUFydGljbGVzKGpzb24uZGF0YS5hcnRpY2xlcykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXJ0aWNsZUFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfU0NIRURVTEUsIFJFQ0VJVkVfU0NIRURVTEV9IGZyb20gJy4vc2NoZWR1bGVBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3Qgc2NoZWR1bGUgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNjaGVkdWxlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1NDSEVEVUxFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1NDSEVEVUxFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLFxuICAgICAgICBwb3N0U2NoZWR1bGVDb250ZW50OiBhY3Rpb24ucG9zdFNjaGVkdWxlQ29udGVudFxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2NoZWR1bGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zY2hlZHVsZVJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU0NIRURVTEUgPSAnUkVRVUVTVF9TQ0hFRFVMRSdcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1NDSEVEVUxFID0gJ1JFQ0VJVkVfU0NIRURVTEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0U2NoZWR1bGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9TQ0hFRFVMRVxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTY2hlZHVsZSA9IChcbiAgaXRlbXMsXG4gIHBvc3RTY2hlZHVsZUNvbnRlbnRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfU0NIRURVTEUsXG4gICAgaXRlbXMsXG4gICAgcG9zdFNjaGVkdWxlQ29udGVudFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNjaGVkdWxlID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RTY2hlZHVsZSgpKVxuXG4gICAgZmV0Y2goYCR7U0VSVkVSX1VSTH0vc2NoZWR1bGVgLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVNjaGVkdWxlKGpzb24uZGF0YS5zY2hlZHVsZS5pdGVtcywganNvbi5kYXRhLnNjaGVkdWxlLnBvc3RTY2hlZHVsZUNvbnRlbnQpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zY2hlZHVsZUFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfU0VBUkNIX1JFU1VMVFMsIFJFQ0VJVkVfU0VBUkNIX1JFU1VMVFN9IGZyb20gJy4vc2VhcmNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHNlYXJjaCA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VhcmNoLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1NFQVJDSF9SRVNVTFRTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWFyY2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IGluZGV4IGZyb20gJy4vYWxnb2xpYVNlYXJjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU0VBUkNIX1JFU1VMVFMgPSAnUkVRVUVTVF9TRUFSQ0hfUkVTVUxUUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTID0gJ1JFQ0VJVkVfU0VBUkNIX1JFU1VMVFMnXG5cbmNvbnN0IHJlcXVlc3RTZWFyY2hSZXN1bHRzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfU0VBUkNIX1JFU1VMVFNcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlU2VhcmNoUmVzdWx0cyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfU0VBUkNIX1JFU1VMVFMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hSZXN1bHRzID0gKFxuICBxdWVyeVxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFNlYXJjaFJlc3VsdHMoKSlcblxuICAgIHJldHVybiBpbmRleC5zZWFyY2gocXVlcnksIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgIGRpc3BhdGNoKHJlY2VpdmVTZWFyY2hSZXN1bHRzKGNvbnRlbnQuaGl0cykpXG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlYXJjaEFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgYWxnb2xpYXNlYXJjaCBmcm9tICdhbGdvbGlhc2VhcmNoJ1xuXG5jb25zdCBjbGllbnQgPSBhbGdvbGlhc2VhcmNoKCc3NFMxSk5CMVpUJywgJzNkZTZmZGJhZmM0NzdjZjAxOTY3M2JiODEwNDNhZTBkJylcbmNvbnN0IGluZGV4ID0gY2xpZW50LmluaXRJbmRleCgncGFnZXMnKVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FsZ29saWFTZWFyY2guanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4nXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlcidcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vRm9vdGVyJ1xuaW1wb3J0IEZsYXNoTWVzc2FnZSBmcm9tICcuLi9GbGFzaE1lc3NhZ2UnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xuaW1wb3J0IHtQYWdlLCBQYWdlQ29udGVudH0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7bG9naW5XaXRoVG9rZW59IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IHtmZXRjaEFydGljbGVzfSBmcm9tICcuLi8uLi9zdG9yZS9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCB7ZmV0Y2hTY2hlZHVsZX0gZnJvbSAnLi4vLi4vc3RvcmUvc2NoZWR1bGVBY3Rpb25zJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hBcnRpY2xlcygpXG4gICAgdGhpcy5wcm9wcy5mZXRjaFNjaGVkdWxlKClcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0aGlzLnByb3BzLmF0dGVtcHRUb2tlbih0b2tlbilcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHVzZXIsXG4gICAgICBhdHRlbXB0aW5nTG9naW4sXG4gICAgICBpc0ZldGNoaW5nQXJ0aWNsZXMsXG4gICAgICBpc0ZldGNoaW5nU2NoZWR1bGUsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGxvY2F0aW9uXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChhdHRlbXB0aW5nTG9naW4gfHwgaXNGZXRjaGluZ0FydGljbGVzIHx8IGlzRmV0Y2hpbmdTY2hlZHVsZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxIZWFkZXIgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuXG4gICAgICAgICAgICA8UGFnZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XG5cbiAgICAgICAgICAgIDxGb290ZXIgLz5cblxuICAgICAgICAgICAgPEZsYXNoTWVzc2FnZSAvPlxuICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxQYWdlQ29udGVudD5cbiAgICAgICAgICAgICAgPExvZ2luIC8+XG4gICAgICAgICAgICA8L1BhZ2VDb250ZW50PlxuXG4gICAgICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZ1NjaGVkdWxlOiBzdGF0ZS5zY2hlZHVsZS5pc0ZldGNoaW5nLFxuICAgICAgaXNGZXRjaGluZ0FydGljbGVzOiBzdGF0ZS5hcnRpY2xlcy5pc0ZldGNoaW5nLFxuICAgICAgYXR0ZW1wdGluZ0xvZ2luOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmcsXG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXJcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0ZW1wdFRva2VuOiAodG9rZW4pID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5XaXRoVG9rZW4odG9rZW4pKVxuICAgICAgfSxcbiAgICAgIGZldGNoQXJ0aWNsZXM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hBcnRpY2xlcygpKVxuICAgICAgfSxcbiAgICAgIGZldGNoU2NoZWR1bGU6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTY2hlZHVsZSgpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShBcHApXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7RmxleCwgTGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge01vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3RlciwgVGV4dElucHV0LCBCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtsb2dpbldpdGhDcmVkZW50aWFsc30gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gdGhpcy5jaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWxFcnJvcjogJycsXG4gICAgICBwYXNzd29yZEVycm9yOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEZvcm0gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgZW1haWxFcnJvciA9ICcnXG4gICAgbGV0IHBhc3N3b3JkRXJyb3IgPSAnJ1xuXG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsID09PSAnJykge1xuICAgICAgZW1haWxFcnJvciA9ICdlbWFpbCBjYW5ub3QgYmUgZW1wdHknXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICBwYXNzd29yZEVycm9yID0gJ3Bhc3N3b3JkIGNhbm5vdCBiZSBibGFuaydcbiAgICB9XG5cbiAgICBpZiAoIWVtYWlsRXJyb3IgJiYgIXBhc3N3b3JkRXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKGxvZ2luV2l0aENyZWRlbnRpYWxzKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZW1haWxFcnJvcixcbiAgICAgICAgcGFzc3dvcmRFcnJvclxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VFbWFpbCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiB2YWx1ZSxcbiAgICAgIGVtYWlsRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFzc3dvcmQ6IHZhbHVlLFxuICAgICAgcGFzc3dvcmRFcnJvcjogJydcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNGZXRjaGluZ30gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsV2luZG93PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfT5cbiAgICAgICAgICA8TW9kYWxXaW5kb3dIZWFkZXI+XG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPkxvZ2luPC9GbGV4PlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dIZWFkZXI+XG5cbiAgICAgICAgICA8TW9kYWxXaW5kb3dCb2R5PlxuICAgICAgICAgICAgPExpc3Qgbj17MS41fT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtIG49ezEuNX0+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsOlwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gY2FzZXlAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVtYWlsRXJyb3J9XG4gICAgICAgICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17dGhpcy5jaGFuZ2VFbWFpbH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gbj17MS41fT5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmQ6XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBCaWdTZWNyZXRcIlxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUucGFzc3dvcmRFcnJvcn1cbiAgICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXt0aGlzLmNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICA8L01vZGFsV2luZG93Qm9keT5cblxuICAgICAgICAgIDxNb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmV0Y2hpbmd9XG4gICAgICAgICAgICAgIGxhYmVsPVwiTG9naW5cIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dGb290ZXI+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvTW9kYWxXaW5kb3c+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuYXV0aC5pc0ZldGNoaW5nXG4gICAgfVxuICB9XG4pKExvZ2luKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4XG4gKiovIiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vQmxvY2snXG5pbXBvcnQgRmxleCBmcm9tICcuL0ZsZXgnXG5pbXBvcnQge0dyaWQsIEdyaWRJdGVtfSBmcm9tICcuL0dyaWQnXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtfSBmcm9tICcuL0xpc3QnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuL0xpc3RJbmxpbmUnXG5pbXBvcnQge01lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlfSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IHtQYWdlLCBQYWdlQ29udGVudH0gZnJvbSAnLi9QYWdlJ1xuaW1wb3J0IFdyYXAgZnJvbSAnLi9XcmFwJ1xuXG5leHBvcnQge0Jsb2NrLCBGbGV4LCBXcmFwLCBHcmlkLCBHcmlkSXRlbSxcbiAgTGlzdCwgTGlzdEl0ZW0sIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLFxuICBNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZSxcbiAgUGFnZSwgUGFnZUNvbnRlbnR9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgQmxvY2sgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgZmxleERpcmVjdGlvbiA9ICdyb3cnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgR3JpZCA9ICh7XG4gIGd1dHRlciA9IDAsXG4gIGFsaWduSXRlbXMgPSAnc3RyZXRjaCcsXG4gIGp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgbWFyZ2luUmlnaHQ6IGAtJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdyaWRJdGVtID0gKHtcbiAgc3BhbiA9IDAsXG4gIG91dE9mID0gMTIsXG4gIGd1dHRlciA9IDAsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgcGFkZGluZ0xlZnQ6IGAke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gLFxuICAgIHBhZGRpbmdSaWdodDogYCR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgZmxleDogJzEnXG4gIH1cblxuICBpZiAoc3BhbiAmJiBvdXRPZikge1xuICAgIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHtcbiAgICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgICB3aWR0aDogYCR7MTAwICogc3BhbiAvIG91dE9mfSVgXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0dyaWQsIEdyaWRJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdC5jc3MnXG5cbmNvbnN0IExpc3QgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYC0ke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3R9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdF9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3QsIExpc3RJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdFwiOlwiTGlzdF9fbGlzdF9fXzJrQlVkXCIsXCJsaXN0X19pdGVtXCI6XCJMaXN0X19saXN0X19pdGVtX19fMUQyVkZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdElubGluZS5jc3MnXG5cbmNvbnN0IExpc3RJbmxpbmUgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGp1c3RmeUNvbnRlbnQgPSAnZmxleC1zdGFydCdcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYC0ke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGZ5Q29udGVudFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0SW5saW5lfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3VsPlxuICApXG59XG5cbmNvbnN0IExpc3RJbmxpbmVJdGVtID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaSBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmVfX2l0ZW19ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImxpc3RJbmxpbmVcIjpcIkxpc3RJbmxpbmVfX2xpc3RJbmxpbmVfX18zR2podVwiLFwibGlzdElubGluZV9faXRlbVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9faXRlbV9fXzJLMWtRXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lZGlhLmNzcydcblxuY29uc3QgTWVkaWEgPSAoe1xuICBhbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYWxpZ25JdGVtc1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWF9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhQm9keSA9ICh7XG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2JvZHl9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhRmlndXJlID0gKHtcbiAgbiA9IDEsXG4gIG5sID0gMCxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiBgJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgJHtiYXNlbGluZSAqIG5sfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lZGlhX19maWd1cmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1lZGlhXCI6XCJNZWRpYV9fbWVkaWFfX18zYTAwR1wiLFwibWVkaWFfX2ZpZ3VyZVwiOlwiTWVkaWFfX21lZGlhX19maWd1cmVfX18yNFp3QVwiLFwibWVkaWFfX2JvZHlcIjpcIk1lZGlhX19tZWRpYV9fYm9keV9fXzNWZDItXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQYWdlID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IHtQYWdlLCBQYWdlQ29udGVudH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgV3JhcCA9ICh7XG4gIHdpZHRoID0gJzkwJScsXG4gIG1heFdpZHRoID0gJzgwcmVtJywgLy8gMTI4MHB4IHByb3ZpZGVkIDFlbSA9PT0gMTZweFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGgsXG4gICAgbWF4V2lkdGgsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnYXV0bydcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL1dyYXAvV3JhcC5qc3hcbiAqKi8iLCJpbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCdcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICcuL0JyZWFkY3J1bWJzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfSBmcm9tICcuL01vZGFsV2luZG93J1xuaW1wb3J0IFBhZ2VMaW5rIGZyb20gJy4vUGFnZUxpbmsnXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAnLi9UZXh0QXJlYSdcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi9UZXh0SW5wdXQnXG5cbmV4cG9ydCB7U3Bpbm5lciwgQnV0dG9uLCBQYWdlTGluaywgVGV4dElucHV0LCBUZXh0QXJlYSwgQnJlYWRjcnVtYnMsIEFsZXJ0LFxuICBNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9VSS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsZXJ0LmNzcydcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IEFsZXJ0ID0gKHtcbiAgbWVzc2FnZSxcbiAgdGhlbWUgPSAnZGVmYXVsdCcsXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBtZXNzYWdlU3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VDbGFzc05hbWVzID0gW3N0eWxlcy5BbGVydF9fbWVzc2FnZV1cblxuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgbWVzc2FnZUNsYXNzTmFtZXMucHVzaChzdHlsZXMuQWxlcnRfX21lc3NhZ2VfZXJyb3IpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9kZWZhdWx0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFsZXJ0fT5cbiAgICAgIHttZXNzYWdlXG4gICAgICAgID8gPEJsb2NrPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e21lc3NhZ2VTdHlsZX0gY2xhc3NOYW1lPXttZXNzYWdlQ2xhc3NOYW1lcy5qb2luKCcgJyl9PnttZXNzYWdlfTwvZGl2PlxuICAgICAgICA8L0Jsb2NrPlxuICAgICAgICA6IG51bGxcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQWxlcnRcIjpcIkFsZXJ0X19BbGVydF9fXzM3X1FDXCIsXCJBbGVydF9fbWVzc2FnZVwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX19fMndDWkZcIixcIkFsZXJ0X19tZXNzYWdlX2RlZmF1bHRcIjpcIkFsZXJ0X19BbGVydF9fbWVzc2FnZV9kZWZhdWx0X19fbl9SOUNcIixcIkFsZXJ0X19tZXNzYWdlX2Vycm9yXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZXJyb3JfX18yaWQ0V1wiLFwiYWxlcnQtZW50ZXJcIjpcIkFsZXJ0X19hbGVydC1lbnRlcl9fX0s2SmRMXCIsXCJhbGVydC1lbnRlci1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1lbnRlci1hY3RpdmVfX18zdmxDd1wiLFwiYWxlcnQtbGVhdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZV9fXzJQcFlUXCIsXCJhbGVydC1sZWF2ZS1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZS1hY3RpdmVfX18yaGFfUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0JyZWFkY3J1bWJzLmNzcydcblxuY29uc3QgQnJlYWRjcnVtYnMgPSAoe1xuICBpdGVtc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQnJlYWRjcnVtYnN9PlxuICAgICAge2l0ZW1zLm1hcChpID0+XG4gICAgICAgIDxMaW5rIHRvPXtpLnBhdGh9IGNsYXNzTmFtZT17c3R5bGVzLkJyZWFkY3J1bWJzX19pdGVtfT57aS5sYWJlbH08L0xpbms+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1bWJzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCcmVhZGNydW1ic1wiOlwiQnJlYWRjcnVtYnNfX0JyZWFkY3J1bWJzX19fMldMajBcIixcIkJyZWFkY3J1bWJzX19pdGVtXCI6XCJCcmVhZGNydW1ic19fQnJlYWRjcnVtYnNfX2l0ZW1fX18xRGF5SVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnJlYWRjcnVtYnMvQnJlYWRjcnVtYnMuY3NzXG4gKiogbW9kdWxlIGlkID0gNjIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrLFxuICBmdWxsV2lkdGggPSBmYWxzZSxcbiAgc21hbGwgPSBmYWxzZSxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgdG8gPSBudWxsLFxuICBocmVmID0gbnVsbCxcbiAgaW52ZXJzZSA9IGZhbHNlLFxuICB0aGVtZSA9ICdhY2NlbnQxJyxcbiAgZXh0cmFDbGFzc05hbWVzXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHtiYXNlbGluZSAqIDAuNn1yZW0gJHtiYXNlbGluZSAqIDEuNX1yZW1gLFxuICAgIGxpbmVIZWlnaHQ6IGAkezEuNSAqIGJhc2VsaW5lfXJlbWAsXG4gICAgZm9udFNpemU6IGAkezEuMDgzICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgaWYgKHNtYWxsKSB7XG4gICAgc3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiBgJHtiYXNlbGluZSAqIDAuM31yZW0gJHtiYXNlbGluZSAqIDF9cmVtYCxcbiAgICAgIGxpbmVIZWlnaHQ6IGAkezEuNSAqIGJhc2VsaW5lfXJlbWAsXG4gICAgICBmb250U2l6ZTogYCR7MC45MTcgKiBiYXNlbGluZX1yZW1gXG4gICAgfVxuICB9XG5cbiAgaWYgKGZ1bGxXaWR0aCkge1xuICAgIHN0eWxlLndpZHRoID0gJzEwMCUnXG4gIH1cblxuICBsZXQgY2xhc3NOYW1lID0gW11cblxuICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b24gOiBzdHlsZXMuQnV0dG9uKVxuXG4gIHN3aXRjaCAodGhlbWUpIHtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b25fZXJyb3IgOiBzdHlsZXMuQnV0dG9uX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhY2NlbnQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b25fYWNjZW50IDogc3R5bGVzLkJ1dHRvbl9hY2NlbnQpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHN0eWxlPXtzdHlsZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZS5qb2luKCcgJyl9ICR7ZXh0cmFDbGFzc05hbWVzfWB9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBzdHlsZT17c3R5bGV9IGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfSAke2V4dHJhQ2xhc3NOYW1lc31gfSBocmVmPXtocmVmfT57Y2hpbGRyZW59PC9hPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGV9IGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfSAke2V4dHJhQ2xhc3NOYW1lc31gfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnZlcnNlQnV0dG9uXCI6XCJCdXR0b25fX0ludmVyc2VCdXR0b25fX18zT1FYVVwiLFwiSW52ZXJzZUJ1dHRvbl9hY2NlbnRcIjpcIkJ1dHRvbl9fSW52ZXJzZUJ1dHRvbl9hY2NlbnRfX18xM29zelwiLFwiSW52ZXJzZUJ1dHRvbl9lcnJvclwiOlwiQnV0dG9uX19JbnZlcnNlQnV0dG9uX2Vycm9yX19fM2lkQlpcIixcIkJ1dHRvblwiOlwiQnV0dG9uX19CdXR0b25fX19RSTdiMlwiLFwiQnV0dG9uX2FjY2VudFwiOlwiQnV0dG9uX19CdXR0b25fYWNjZW50X19fMzNOcFNcIixcIkJ1dHRvbl9lcnJvclwiOlwiQnV0dG9uX19CdXR0b25fZXJyb3JfX18zUFNVWFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsV2luZG93LmNzcydcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgTW9kYWxXaW5kb3cgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgd2lkdGg6IDQwXG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke211bHRpcGxpZXJzLndpZHRoICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsfT5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvRmxleD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0hlYWRlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMixcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19oZWFkZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Qm9keSA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMyxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19fYm9keX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Rm9vdGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2Zvb3Rlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJNb2RhbFwiOlwiTW9kYWxXaW5kb3dfX01vZGFsX19fMmtsY2dcIixcIk1vZGFsV2luZG93XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX18ydFZ5WlwiLFwiTW9kYWxXaW5kb3dfX2hlYWRlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19oZWFkZXJfX18xUXJXSFwiLFwiTW9kYWxXaW5kb3dfX2JvZHlcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19fYm9keV9fXzNRdVFoXCIsXCJNb2RhbFdpbmRvd19fZm9vdGVyXCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2Zvb3Rlcl9fXzJJMFRGXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnZUxpbmsuY3NzJ1xuXG5jb25zdCBQYWdlTGluayA9ICh7XG4gIGNoaWxkcmVuLFxuICBleHRyYUNsYXNzTmFtZXMsXG4gIHRvXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgY2xhc3NOYW1lPXtgJHtzdHlsZXMucGFnZUxpbmt9ICR7ZXh0cmFDbGFzc05hbWVzfWB9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlTGlua1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvUGFnZUxpbmsvUGFnZUxpbmsuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnZUxpbmtcIjpcIlBhZ2VMaW5rX19wYWdlTGlua19fXzF3UFBqXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9QYWdlTGluay9QYWdlTGluay5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NwaW5uZXIuY3NzJ1xuXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJfX2lubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUyfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlM31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTR9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU1fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTd9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU4fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEwfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMn1gfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTcGlubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19fMWZpeWtcIixcIlNwaW5uZXJfX2lubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19pbm5lcl9fXzU4dmNUXCIsXCJTcGlubmVyX19jaXJjbGVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZV9fXzJadWdPXCIsXCJzay1jaXJjbGVGYWRlRGVsYXlcIjpcIlNwaW5uZXJfX3NrLWNpcmNsZUZhZGVEZWxheV9fXzFFdG44XCIsXCJTcGlubmVyX19jaXJjbGUxXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxX19fQk9EN25cIixcIlNwaW5uZXJfX2NpcmNsZTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTJfX18yYUJ0clwiLFwiU3Bpbm5lcl9fY2lyY2xlM1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlM19fXzFCYVpmXCIsXCJTcGlubmVyX19jaXJjbGU0XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU0X19fM1Y1cjdcIixcIlNwaW5uZXJfX2NpcmNsZTVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTVfX18zREo1WFwiLFwiU3Bpbm5lcl9fY2lyY2xlNlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNl9fX1pwVTVtXCIsXCJTcGlubmVyX19jaXJjbGU3XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU3X19fWHBuSzVcIixcIlNwaW5uZXJfX2NpcmNsZThcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZThfX18xX1JSWFwiLFwiU3Bpbm5lcl9fY2lyY2xlOVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOV9fX2ZPME9HXCIsXCJTcGlubmVyX19jaXJjbGUxMFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTBfX19uaTM1QVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTExX19fMWhhdjlcIixcIlNwaW5uZXJfX2NpcmNsZTEyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMl9fXzJpcHpUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJy4uL0lucHV0TGFiZWwnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dEFyZWEuY3NzJ1xuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgb25DaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZWxlbWVudC52YWx1ZVxuICAgIGNvbnN0IHtjaGFuZ2VDYWxsYmFja30gPSB0aGlzLnByb3BzXG5cbiAgICBjaGFuZ2VDYWxsYmFjayh2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2xhYmVsLCBlcnJvciwgdmFsdWUsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZCA9IGZhbHNlfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuVGV4dEFyZWF9PlxuICAgICAgICB7bGFiZWxcbiAgICAgICAgICA/IDxJbnB1dExhYmVsIGxhYmVsPXtsYWJlbH0gZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgPHRleHRhcmVhIHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuVGV4dEFyZWFfX2lucHV0fSAke2Vycm9yID8gc3R5bGVzLlRleHRBcmVhX19pbnB1dF9lcnJvciA6IG51bGx9YH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfT48L3RleHRhcmVhPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0TGFiZWwuY3NzJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgSW5wdXRMYWJlbCA9ICh7XG4gIGxhYmVsLFxuICBlcnJvclxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSW5wdXRMYWJlbH0gJHtlcnJvciA/IHN0eWxlcy5JbnB1dExhYmVsX2Vycm9yIDogJyd9YH0+XG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRMYWJlbF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICB7ZXJyb3JcbiAgICAgICAgPyA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dExhYmVsX19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0TGFiZWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dExhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19fMUNlbUlcIixcIklucHV0TGFiZWxfX2xhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19sYWJlbF9fXzJZeV9QXCIsXCJJbnB1dExhYmVsX19lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9fZXJyb3JfX18yTUZOZFwiLFwiSW5wdXRMYWJlbF9lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9lcnJvcl9fXzNFcDVxXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUZXh0QXJlYVwiOlwiVGV4dEFyZWFfX1RleHRBcmVhX19fMTlpcDdcIixcIlRleHRBcmVhX19pbnB1dFwiOlwiVGV4dEFyZWFfX1RleHRBcmVhX19pbnB1dF9fX3g1QjRJXCIsXCJUZXh0QXJlYV9faW5wdXRfZXJyb3JcIjpcIlRleHRBcmVhX19UZXh0QXJlYV9faW5wdXRfZXJyb3JfX18zNjlnVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJy4uL0lucHV0TGFiZWwnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dElucHV0LmNzcydcblxuY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9lbGVtZW50LnZhbHVlXG4gICAgY29uc3Qge2NoYW5nZUNhbGxiYWNrfSA9IHRoaXMucHJvcHNcblxuICAgIGNoYW5nZUNhbGxiYWNrKHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIGVycm9yLFxuICAgICAgdmFsdWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICB0eXBlID0gJ3RleHQnXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuVGV4dElucHV0fT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8SW5wdXRMYWJlbCBsYWJlbD17bGFiZWx9IGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIDxpbnB1dCByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLlRleHRJbnB1dF9faW5wdXR9ICR7ZXJyb3IgPyBzdHlsZXMuVGV4dElucHV0X19pbnB1dF9lcnJvciA6IG51bGx9YH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1RleHRJbnB1dC9UZXh0SW5wdXQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGV4dElucHV0XCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF9fXzFBQ0dZXCIsXCJUZXh0SW5wdXRfX2lucHV0XCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF9faW5wdXRfX18xcnlmM1wiLFwiVGV4dElucHV0X19pbnB1dF9lcnJvclwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfX2lucHV0X2Vycm9yX19fM3BUSnpcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1RleHRJbnB1dC9UZXh0SW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBNYWluTmF2IGZyb20gJy4uL01haW5OYXYnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIuY3NzJ1xuaW1wb3J0IHtCbG9jaywgV3JhcCwgR3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgQ3VycmVudFVzZXIgZnJvbSAnLi4vQ3VycmVudFVzZXInXG5cbmltcG9ydCBpbWcgZnJvbSAnLi9sb2dvLnN2ZydcblxuY29uc3QgSGVhZGVyID0gKHtcbiAgbG9jYXRpb25cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db3ZlckltZ30+XG4gICAgICAgIDxDdXJyZW50VXNlciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ292ZXJJbWdfX2JvZHl9PlxuICAgICAgICAgIDxXcmFwIG1heFdpZHRoPVwiODByZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyfT5cbiAgICAgICAgICAgICAgPEdyaWQgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBzcGFuPXsxfSBvdXRPZj17NX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX2xvZ299IC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX190aXRsZX0+VmFjY2luYXRpb24gSW5mb3JtYXRpb24gQ2VudGVyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX19zdWJ0aXRsZX0+QWxsIHRoZSBpbmZvcm1hdGlvbiB5b3UgbmVlZCB0byBrbm93IGFib3V0IHZhY2NpbmVzIGFuZCB2YWNjaW5hdGlvbiBpbiBNYW5pdG9iYTwvaDI+XG4gICAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9XcmFwPlxuXG4gICAgICAgICAgPE1haW5OYXYgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHtXcmFwLCBHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluTmF2LmNzcydcblxuY29uc3QgbmF2SXRlbXMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ1F1ZXN0aW9ucyAmIEFuc3dlcnMnLFxuICAgIHBhdGg6IGAke1BVQkxJQ19QQVRIfS9xdWVzdGlvbnNgXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0Fib3V0IFZhY2NpbmVzJyxcbiAgICBwYXRoOiBgJHtQVUJMSUNfUEFUSH0vYWJvdXQtdmFjY2luZXNgXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1ZhY2NpbmUgU2FmZXR5JyxcbiAgICBwYXRoOiBgJHtQVUJMSUNfUEFUSH0vdmFjY2luZS1zYWZldHlgXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1ZhY2NpbmF0aW9uIFNjaGVkdWxlJyxcbiAgICBwYXRoOiBgJHtQVUJMSUNfUEFUSH0vdmFjY2luYXRpb24tc2NoZWR1bGVgXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0Jsb2cnLFxuICAgIHBhdGg6IGAke1BVQkxJQ19QQVRIfS9ibG9nYFxuICB9XG5dXG5cbmNvbnN0IE1haW5OYXYgPSAoe1xuICBsb2NhdGlvblxufSkgPT4ge1xuICBjb25zdCByb3V0ZVN0YXRlTWFwID0ge1xuICAgICdxdWVzdGlvbnMnOiB7bGVmdDogMCwgb3BhY2l0eTogMX0sXG4gICAgJ2Fib3V0LXZhY2NpbmVzJzoge2xlZnQ6ICcyMCUnLCBvcGFjaXR5OiAxfSxcbiAgICAndmFjY2luZS1zYWZldHknOiB7bGVmdDogJzQwJScsIG9wYWNpdHk6IDF9LFxuICAgICd2YWNjaW5hdGlvbi1zY2hlZHVsZSc6IHtsZWZ0OiAnNjAlJywgb3BhY2l0eTogMX0sXG4gICAgJ2Jsb2cnOiB7bGVmdDogJzgwJScsIG9wYWNpdHk6IDF9XG4gIH1cblxuICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMl1cbiAgY29uc3QgaW5kaWNhdG9yU3R5bGUgPSByb3V0ZVN0YXRlTWFwW2N1cnJlbnRTZWN0aW9uXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CZ30+XG4gICAgICA8V3JhcCBtYXhXaWR0aD1cIjgwcmVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWFpbk5hdn0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17aW5kaWNhdG9yU3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1haW5OYXZfX2luZGljYXRvcn0+PC9kaXY+XG5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICA8R3JpZEl0ZW0ga2V5PXtpdGVtLnBhdGh9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtpdGVtLnBhdGh9IGNsYXNzTmFtZT17c3R5bGVzLk1haW5OYXZfX2l0ZW19XG4gICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5NYWluTmF2X19pdGVtX2FjdGl2ZX0+e2l0ZW0ubGFiZWx9PC9MaW5rPlxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9XcmFwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCZ1wiOlwiTWFpbk5hdl9fQmdfX18yT09FeFwiLFwiTWFpbk5hdlwiOlwiTWFpbk5hdl9fTWFpbk5hdl9fXzRXTmg2XCIsXCJNYWluTmF2X19pbmRpY2F0b3JcIjpcIk1haW5OYXZfX01haW5OYXZfX2luZGljYXRvcl9fXzNjVGN3XCIsXCJNYWluTmF2X19pbmRpY2F0b3JfYWN0aXZlXCI6XCJNYWluTmF2X19NYWluTmF2X19pbmRpY2F0b3JfYWN0aXZlX19fMjJtSUNcIixcIk1haW5OYXZfX2l0ZW1cIjpcIk1haW5OYXZfX01haW5OYXZfX2l0ZW1fX18xX0Zyb1wiLFwiTWFpbk5hdl9faXRlbV9hY3RpdmVcIjpcIk1haW5OYXZfX01haW5OYXZfX2l0ZW1fYWN0aXZlX19fMW9CdXVcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaEJhci5jc3MnXG5cbmNvbnN0IHR5cGVEZWxheSA9IDUwMFxuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuaGFuZGxlVHlwZSA9IHRoaXMuaGFuZGxlVHlwZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRpbWVvdXRJZDogMFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVR5cGUgKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnRpbWVvdXRJZClcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5faW5wdXQudmFsdWVcblxuICAgICAgaWYgKHF1ZXJ5KSB7XG4gICAgICAgIGhhc2hIaXN0b3J5LnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lOiBgJHtQVUJMSUNfUEFUSH0vc2VhcmNoYCxcbiAgICAgICAgICBxdWVyeToge3E6IHF1ZXJ5fVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzaEhpc3RvcnkucHVzaChgJHtQVUJMSUNfUEFUSH0vcXVlc3Rpb25zYClcbiAgICAgIH1cbiAgICB9LCB0eXBlRGVsYXkpXG5cbiAgICB0aGlzLnNldFN0YXRlKHt0aW1lb3V0SWR9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7cXVlcnl9ID0gdGhpcy5wcm9wcy5sb2NhdGlvblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoQmFyfT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5TZWFyY2hCYXJfX2lucHV0fVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cXVlcnkucSA/IHF1ZXJ5LnEgOiAnJ31cbiAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5faW5wdXQgPSBlbCB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVR5cGV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2ggZm9yIGtleXdvcmRzLCBlLmcuICdwb2xpbyB2YWNjaW5lJ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNlYXJjaEJhclwiOlwiU2VhcmNoQmFyX19TZWFyY2hCYXJfX19kdGRUaFwiLFwiU2VhcmNoQmFyX19pbnB1dFwiOlwiU2VhcmNoQmFyX19TZWFyY2hCYXJfX2lucHV0X19fZ3dRTWhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDb3ZlckltZ1wiOlwiSGVhZGVyX19Db3ZlckltZ19fXzMxQThCXCIsXCJDb3ZlckltZ19fYm9keVwiOlwiSGVhZGVyX19Db3ZlckltZ19fYm9keV9fXzJiTzhyXCIsXCJIZWFkZXJcIjpcIkhlYWRlcl9fSGVhZGVyX19fb0UyRkhcIixcIkhlYWRlcl9fbG9nb1wiOlwiSGVhZGVyX19IZWFkZXJfX2xvZ29fX18xcnFVX1wiLFwiSGVhZGVyX190aXRsZVwiOlwiSGVhZGVyX19IZWFkZXJfX3RpdGxlX19fMnRpeGFcIixcIkhlYWRlcl9fc3VidGl0bGVcIjpcIkhlYWRlcl9fSGVhZGVyX19zdWJ0aXRsZV9fX19aX09CXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0N1cnJlbnRVc2VyLmNzcydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5cbmNvbnN0IEN1cnJlbnRVc2VyID0gKHtcbiAgdXNlcixcbiAgbG9nT3V0XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DdXJyZW50VXNlcn0+XG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3VycmVudFVzZXJfX25hbWV9PmxvZ2dlZCBpbiBhcyB7dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2xvZ091dH0+TG9nIG91dDwvQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ091dDogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQ3VycmVudFVzZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9DdXJyZW50VXNlci9DdXJyZW50VXNlci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDdXJyZW50VXNlclwiOlwiQ3VycmVudFVzZXJfX0N1cnJlbnRVc2VyX19fMVdhVTZcIixcIkN1cnJlbnRVc2VyX19uYW1lXCI6XCJDdXJyZW50VXNlcl9fQ3VycmVudFVzZXJfX25hbWVfX18xMmhJWlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvbG9nby4yYjlmNmRhMmIzNjY0ZGJlYzdiMWJjZjJiOTFiNjA4YS5zdmdcIjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2xvZ28uc3ZnXG4gKiogbW9kdWxlIGlkID0gNjQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLmNzcydcbmltcG9ydCBGb290ZXJOYXYgZnJvbSAnLi4vRm9vdGVyTmF2J1xuaW1wb3J0IHtXcmFwLCBHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgY29udGFjdE5hdiA9IFtcbiAge1xuICAgIGxhYmVsOiAnSmVubmlmZXIgUG90dGVyJyxcbiAgICBlbXBoOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJygyMDQpIDE0MC0zODQ5J1xuICB9LFxuICB7XG4gICAgbGFiZWw6ICdqcG90dGVyQHVtYW5pdG9iYS5jYSdcbiAgfVxuXVxuXG5jb25zdCBGb290ZXIgPSAoe1xuICBhYm91dFByb2plY3RBcnRpY2xlcyxcbiAgYWRkaXRpb25hbEluZm9ybWF0aW9uQXJ0aWNsZXNcbn0pID0+IHtcbiAgY29uc3QgYWJvdXROYXYgPSBhYm91dFByb2plY3RBcnRpY2xlcy5tYXAoYSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiBhLnRpdGxlLFxuICAgICAgcGF0aDogYCR7UFVCTElDX1BBVEh9LyR7YS50eXBlLmlkfS8ke2EudXJsfWBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgaW5mb05hdiA9IGFkZGl0aW9uYWxJbmZvcm1hdGlvbkFydGljbGVzLm1hcChhID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFiZWw6IGEudGl0bGUsXG4gICAgICBwYXRoOiBgJHtQVUJMSUNfUEFUSH0vJHthLnR5cGUuaWR9LyR7YS51cmx9YFxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQmd9PlxuICAgICAgPFdyYXAgbWF4V2lkdGg9XCI0MHJlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlcn0+XG4gICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICA8R3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxGb290ZXJOYXYgaXRlbXM9e2NvbnRhY3ROYXZ9IHRpdGxlPVwiQ29udGFjdFwiIC8+XG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICA8R3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxGb290ZXJOYXYgaXRlbXM9e2Fib3V0TmF2fSB0aXRsZT1cIkFib3V0IFByb2plY3RcIiAvPlxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgPEdyaWRJdGVtPlxuICAgICAgICAgICAgICA8Rm9vdGVyTmF2IGl0ZW1zPXtpbmZvTmF2fSB0aXRsZT1cIkFkZGl0aW9uYWxcIiAvPlxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9XcmFwPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYWJvdXRQcm9qZWN0QXJ0aWNsZXM6IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihpID0+IGkuaXNQdWJsaXNoZWQgJiYgaS50eXBlLmlkID09PSAnYWJvdXQtcHJvamVjdCcpLFxuICAgICAgYWRkaXRpb25hbEluZm9ybWF0aW9uQXJ0aWNsZXM6IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihpID0+IGkuaXNQdWJsaXNoZWQgJiYgaS50eXBlLmlkID09PSAnYWRkaXRpb25hbC1pbmZvcm1hdGlvbicpXG4gICAgfVxuICB9XG4pKEZvb3RlcilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQmdcIjpcIkZvb3Rlcl9fQmdfX18xN2lieVwiLFwiRm9vdGVyXCI6XCJGb290ZXJfX0Zvb3Rlcl9fXzI2OFBUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7QmxvY2ssIExpc3QsIExpc3RJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlck5hdi5jc3MnXG5cbmNvbnN0IEZvb3Rlck5hdiA9ICh7XG4gIGl0ZW1zLFxuICB0aXRsZVxufSkgPT4ge1xuICBjb25zdCBtZW51ID0gaXRlbXMubWFwKGkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW0ga2V5PXtpLmxhYmVsfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5Gb290ZXJOYXZfX2l0ZW19ICR7aS5lbXBoID8gc3R5bGVzLkZvb3Rlck5hdl9faXRlbV9lbXBoIDogbnVsbH1gfT5cbiAgICAgICAgICB7aS5wYXRoXG4gICAgICAgICAgICA/IDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlck5hdl9fbGlua30gdG89e2kucGF0aH0+e2kubGFiZWx9PC9MaW5rPlxuICAgICAgICAgICAgOiBpLmxhYmVsXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJOYXZ9PlxuICAgICAgPEJsb2NrPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvb3Rlck5hdl9fdGl0bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxMaXN0PlxuICAgICAgICB7bWVudX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJOYXZcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi9Gb290ZXJOYXYuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRm9vdGVyTmF2XCI6XCJGb290ZXJOYXZfX0Zvb3Rlck5hdl9fXzM5VzNSXCIsXCJGb290ZXJOYXZfX3RpdGxlXCI6XCJGb290ZXJOYXZfX0Zvb3Rlck5hdl9fdGl0bGVfX18xbE9XY1wiLFwiRm9vdGVyTmF2X19pdGVtXCI6XCJGb290ZXJOYXZfX0Zvb3Rlck5hdl9faXRlbV9fXzJlNFgyXCIsXCJGb290ZXJOYXZfX2xpbmtcIjpcIkZvb3Rlck5hdl9fRm9vdGVyTmF2X19saW5rX19fS1VPWmhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi9Gb290ZXJOYXYuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0FsZXJ0fSBmcm9tICcuLi9VSSdcblxuY29uc3QgRmxhc2hNZXNzYWdlID0gKHtcbiAgbWVzc2FnZSxcbiAgdHlwZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBbGVydCBtZXNzYWdlPXttZXNzYWdlfSB0aGVtZT17dHlwZX0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLmZsYXNoLm1lc3NhZ2UsXG4gICAgICB0eXBlOiBzdGF0ZS5mbGFzaC50eXBlXG4gICAgfVxuICB9XG4pKEZsYXNoTWVzc2FnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9hZGluZy5jc3MnXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTG9hZGluZ30+XG4gICAgICA8U3Bpbm5lciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMb2FkaW5nXCI6XCJMb2FkaW5nX19Mb2FkaW5nX19fM3B5Y3pcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtXcmFwLCBHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4uL1NpZGVCYXInXG5pbXBvcnQgU2lkZU5hdiBmcm9tICcuLi9TaWRlTmF2J1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vQm9keSdcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9Ob3RGb3VuZCdcbmltcG9ydCB7Z2V0Q3VycmVudFNlY3Rpb24sIGlzU2VjdGlvbn0gZnJvbSAnLi4vLi4vY29uZmlnJ1xuXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm90Rm91bmQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7cGFyYW1zOiB7c2VjdGlvbklkLCBhcnRpY2xlSWR9LCBsb2NhdGlvbiwgYXJ0aWNsZXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzU2VjdGlvbihzZWN0aW9uSWQpKSB7XG4gICAgICBpZiAoIWFydGljbGVJZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBub3RGb3VuZDogZmFsc2VcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYCR7UFVCTElDX1BBVEh9LyR7c2VjdGlvbklkfS8ke2FydGljbGVzWzBdLnVybH1gKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7cGFyYW1zOiB7c2VjdGlvbklkLCBhcnRpY2xlSWR9LCBsb2NhdGlvbiwgYXJ0aWNsZXN9ID0gbmV3UHJvcHNcblxuICAgIGlmIChpc1NlY3Rpb24oc2VjdGlvbklkKSkge1xuICAgICAgaWYgKCFhcnRpY2xlSWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbm90Rm91bmQ6IGZhbHNlXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKGAke1BVQkxJQ19QQVRIfS8ke3NlY3Rpb25JZH0vJHthcnRpY2xlc1swXS51cmx9YClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUubm90Rm91bmQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOb3RGb3VuZCAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7cGFyYW1zOiB7c2VjdGlvbklkfSwgY2hpbGRyZW4sIGFydGljbGVzfSA9IHRoaXMucHJvcHNcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZ2V0Q3VycmVudFNlY3Rpb24oc2VjdGlvbklkKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcD5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxHcmlkSXRlbSBzcGFuPXsxfSBvdXRPZj17NH0+XG4gICAgICAgICAgICAgIDxTaWRlQmFyPlxuICAgICAgICAgICAgICAgIDxTaWRlTmF2IHRpdGxlPXtjdXJyZW50U2VjdGlvbi5sYWJlbH0gYXJ0aWNsZXM9e2FydGljbGVzfSAvPlxuICAgICAgICAgICAgICA8L1NpZGVCYXI+XG4gICAgICAgICAgICA8L0dyaWRJdGVtPlxuXG4gICAgICAgICAgICA8R3JpZEl0ZW0+XG4gICAgICAgICAgICAgIDxCb2R5PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvV3JhcD5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXM6IHtzZWN0aW9uSWR9fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgYXJ0aWNsZXM6IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQgJiYgYS50eXBlLmlkID09PSBzZWN0aW9uSWQpXG4gICAgfVxuICB9XG4pKFNlY3Rpb24pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2lkZUJhci5jc3MnXG5cbmNvbnN0IFNpZGVCYXIgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2lkZUJhcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNpZGVCYXJcIjpcIlNpZGVCYXJfX1NpZGVCYXJfX18zbzNOVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0hlYWRpbmcyfSBmcm9tICcuLi9UeXBvZ3JhcGh5J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2lkZU5hdi5jc3MnXG5cbmNvbnN0IFNpZGVOYXYgPSAoe1xuICB0aXRsZSxcbiAgYXJ0aWNsZXNcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuU2lkZU5hdn0+XG4gICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2lkZU5hdl9fdGl0bGV9PlxuICAgICAgICAgIDxIZWFkaW5nMj57dGl0bGV9PC9IZWFkaW5nMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICB7YXJ0aWNsZXMubWFwKGkgPT5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB0bz17YCR7UFVCTElDX1BBVEh9LyR7aS50eXBlLmlkfS8ke2kudXJsfWB9XG4gICAgICAgICAga2V5PXtpLl9pZH1cbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5TaWRlTmF2X19pdGVtX2FjdGl2ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5TaWRlTmF2X19pdGVtfT5cbiAgICAgICAgICB7aS50aXRsZX1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKX1cbiAgICA8L2FzaWRlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXZcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NpZGVOYXYvU2lkZU5hdi5qc3hcbiAqKi8iLCJpbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnXG5pbXBvcnQgSGVhZGluZzEgZnJvbSAnLi9IZWFkaW5nMSdcbmltcG9ydCBIZWFkaW5nMiBmcm9tICcuL0hlYWRpbmcyJ1xuaW1wb3J0IEhlYWRpbmczIGZyb20gJy4vSGVhZGluZzMnXG5cbmV4cG9ydCB7Q29udGVudCwgSGVhZGluZzEsIEhlYWRpbmcyLFxuICBIZWFkaW5nM31cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvVHlwb2dyYXBoeS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRlbnQuY3NzJ1xuXG5jb25zdCBDb250ZW50ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICB0ZXh0ID0gJydcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLkNvbnRlbnR9ICR7ZXh0cmFDbGFzc05hbWVzfWB9XG4gICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGV4dH19PjwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQ29udGVudC9Db250ZW50LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNvbnRlbnRcIjpcIkNvbnRlbnRfX0NvbnRlbnRfX18yUlEwVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9Db250ZW50L0NvbnRlbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRpbmcxLmNzcydcblxuY29uc3QgSGVhZGluZzEgPSAoe1xuICBjaGlsZHJlbixcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGxpbmtUbyA9IG51bGxcbn0pID0+IHtcbiAgaWYgKGxpbmtUbykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17bGlua1RvfSBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nMUxpbmt9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSGVhZGluZzF9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PntjaGlsZHJlbn08L2gxPlxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmcxfSAke2V4dHJhQ2xhc3NOYW1lc31gfT57Y2hpbGRyZW59PC9oMT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZzFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzEvSGVhZGluZzEuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSGVhZGluZzFcIjpcIkhlYWRpbmcxX19IZWFkaW5nMV9fXzNSR0pGXCIsXCJIZWFkaW5nMUxpbmtcIjpcIkhlYWRpbmcxX19IZWFkaW5nMUxpbmtfX18yNlEwX1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGluZzIuY3NzJ1xuXG5jb25zdCBIZWFkaW5nMiA9ICh7XG4gIGNoaWxkcmVuLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgbGlua1RvID0gbnVsbFxufSkgPT4ge1xuICBpZiAobGlua1RvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXtsaW5rVG99IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmcyTGlua30+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMn0gJHtleHRyYUNsYXNzTmFtZXN9YH0+e2NoaWxkcmVufTwvaDI+XG4gICAgICA8L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8aDIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSGVhZGluZzJ9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PntjaGlsZHJlbn08L2gyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nMlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMi9IZWFkaW5nMi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nMlwiOlwiSGVhZGluZzJfX0hlYWRpbmcyX19fMWxtSktcIixcIkhlYWRpbmcyTGlua1wiOlwiSGVhZGluZzJfX0hlYWRpbmcyTGlua19fXzF1YXgwXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcyL0hlYWRpbmcyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nMy5jc3MnXG5cbmNvbnN0IEhlYWRpbmczID0gKHtcbiAgY2hpbGRyZW4sXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBsaW5rVG8gPSBudWxsXG59KSA9PiB7XG4gIGlmIChsaW5rVG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgdG89e2xpbmtUb30gY2xhc3NOYW1lPXtgJHtzdHlsZXMuSGVhZGluZzN9ICR7c3R5bGVzLkhlYWRpbmczTGlua30gJHtleHRyYUNsYXNzTmFtZXN9YH0+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMiBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nM30gJHtleHRyYUNsYXNzTmFtZXN9YH0+e2NoaWxkcmVufTwvaDI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmczXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRpbmczXCI6XCJIZWFkaW5nM19fSGVhZGluZzNfX18xa2lnS1wiLFwiSGVhZGluZzNMaW5rXCI6XCJIZWFkaW5nM19fSGVhZGluZzNMaW5rX19fMUpDbUxcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzMvSGVhZGluZzMuY3NzXG4gKiogbW9kdWxlIGlkID0gNjY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTaWRlTmF2XCI6XCJTaWRlTmF2X19TaWRlTmF2X19fM09JTnZcIixcIlNpZGVOYXZfX3RpdGxlXCI6XCJTaWRlTmF2X19TaWRlTmF2X190aXRsZV9fXzNEMHgzXCIsXCJTaWRlTmF2X19pdGVtXCI6XCJTaWRlTmF2X19TaWRlTmF2X19pdGVtX19fMWpWNFZcIixcIlNpZGVOYXZfX2l0ZW1fYWN0aXZlXCI6XCJTaWRlTmF2X19TaWRlTmF2X19pdGVtX2FjdGl2ZV9fXzFqcGxQXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TaWRlTmF2L1NpZGVOYXYuY3NzXG4gKiogbW9kdWxlIGlkID0gNjY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTA7XG5cbmNvbnN0IEJvZHkgPSAoe1xuICBwdiA9IDYsXG4gIHBoID0gNixcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgcGFkZGluZ1RvcDogYCR7cHYgKiBiYXNlbGluZX1yZW1gLFxuICAgIHBhZGRpbmdCb3R0b206IGAke3B2ICogYmFzZWxpbmV9cmVtYCxcbiAgICBwYWRkaW5nTGVmdDogYCR7cGggKiBiYXNlbGluZX1yZW1gLFxuICAgIHBhZGRpbmdSaWdodDogYCR7cGggKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2R5XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Cb2R5L0JvZHkuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTm90Rm91bmQuY3NzJ1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Ob3RGb3VuZH0+XG4gICAgICA8QmxvY2sgbj17M30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTm90Rm91bmRfX3RpdGxlfT40MDQ8L2Rpdj5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTm90Rm91bmRfX2JvZHl9PlNvcnJ5LCBidXQgdGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciBkb2VzIG5vdCBzZWVtIHRvIGV4aXN0Li4uPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIk5vdEZvdW5kXCI6XCJOb3RGb3VuZF9fTm90Rm91bmRfX18zMUNsaVwiLFwiTm90Rm91bmRfX3RpdGxlXCI6XCJOb3RGb3VuZF9fTm90Rm91bmRfX3RpdGxlX19fcnlVRUNcIixcIk5vdEZvdW5kX19ib2R5XCI6XCJOb3RGb3VuZF9fTm90Rm91bmRfX2JvZHlfX19DOTlCelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJleHBvcnQgY29uc3QgYmxvZ3Bvc3RzID0ge1xuICBpZDogJ2Jsb2dwb3N0cycsXG4gIGxhYmVsOiAnQmxvZ3Bvc3RzJ1xufVxuXG5leHBvcnQgY29uc3Qgc2VjdGlvbnMgPSBbXG4gIHtcbiAgICBpZDogJ2ZhcXMnLFxuICAgIGxhYmVsOiAnRkFRcydcbiAgfSxcbiAge1xuICAgIGlkOiAnYWJvdXQtdmFjY2luZXMnLFxuICAgIGxhYmVsOiAnQWJvdXQgVmFjY2luZXMnXG4gIH0sXG4gIHtcbiAgICBpZDogJ3ZhY2NpbmUtc2FmZXR5JyxcbiAgICBsYWJlbDogJ1ZhY2NpbmUgU2FmZXR5J1xuICB9LFxuICB7XG4gICAgaWQ6ICd2YWNjaW5hdGlvbi1zY2hlZHVsZScsXG4gICAgbGFiZWw6ICdWYWNjaW5hdGlvbiBTY2hlZHVsZSdcbiAgfSxcbiAge1xuICAgIGlkOiAnYWJvdXQtcHJvamVjdCcsXG4gICAgbGFiZWw6ICdBYm91dCBQcm9qZWN0J1xuICB9LFxuICB7XG4gICAgaWQ6ICdhZGRpdGlvbmFsLWluZm9ybWF0aW9uJyxcbiAgICBsYWJlbDogJ0FkZGl0aW9uYWwgSW5mb3JtYXRpb24nXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gIHtcbiAgICBpZDogJ2Rpc2Vhc2VzJyxcbiAgICBsYWJlbDogJ0Rpc2Vhc2VzJ1xuICB9LFxuICB7XG4gICAgaWQ6ICd2YWNjaW5lcycsXG4gICAgbGFiZWw6ICdWYWNjaW5lcydcbiAgfSxcbiAge1xuICAgIGlkOiAnaW5ncmlkaWVudHMnLFxuICAgIGxhYmVsOiAnSW5ncmlkaWVudHMnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGlzU2VjdGlvbiA9IChpZCkgPT4ge1xuICByZXR1cm4gc2VjdGlvbnMubWFwKHMgPT4gcy5pZCkuaW5kZXhPZihpZCkgIT09IC0xXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jsb2dwb3N0ID0gKGlkKSA9PiB7XG4gIHJldHVybiBpZCA9PT0gYmxvZ3Bvc3RzLmlkXG59XG5cbmV4cG9ydCBjb25zdCBpc0NhdGVnb3J5ID0gKGlkKSA9PiB7XG4gIHJldHVybiBjYXRlZ29yaWVzLm1hcChjID0+IGMuaWQpLmluZGV4T2YoaWQpICE9PSAtMVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFNlY3Rpb24gPSAoaWQpID0+IHtcbiAgcmV0dXJuIHNlY3Rpb25zLmNvbmNhdChjYXRlZ29yaWVzKS5jb25jYXQoW2Jsb2dwb3N0c10pLmZpbHRlcihzID0+IHMuaWQgPT09IGlkKVswXVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL0FydGljbGUnXG5pbXBvcnQgQ2F0ZWdvcnlEaXJlY3RvcnkgZnJvbSAnLi4vQ2F0ZWdvcnlEaXJlY3RvcnknXG5pbXBvcnQgVmFjY2luYXRpb25TY2hlZHVsZSBmcm9tICcuLi9WYWNjaW5hdGlvblNjaGVkdWxlJ1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgU2VjdGlvbkFydGljbGUgPSAoe1xuICBhcnRpY2xlLFxuICBjaGlsZHJlbixcbiAgcGFyYW1zXG59KSA9PiB7XG4gIGlmIChwYXJhbXMuaXRlbUlkKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH0gZWxzZSB7XG4gICAgbGV0IGF0dGFjaG1lbnQgPSAnJ1xuICAgIHN3aXRjaCAoYXJ0aWNsZS5hdHRhY2htZW50KSB7XG4gICAgICBjYXNlICd2YWNjaW5lcyc6XG4gICAgICBjYXNlICdkaXNlYXNlcyc6XG4gICAgICBjYXNlICdpbmdyaWRpZW50cyc6XG4gICAgICAgIGF0dGFjaG1lbnQgPSAoXG4gICAgICAgICAgPENhdGVnb3J5RGlyZWN0b3J5XG4gICAgICAgICAgICBzZWN0aW9uSWQ9e3BhcmFtcy5zZWN0aW9uSWR9XG4gICAgICAgICAgICBhcnRpY2xlSWQ9e3BhcmFtcy5hcnRpY2xlSWR9XG4gICAgICAgICAgICBjYXRlZ29yeT17YXJ0aWNsZS5hdHRhY2htZW50fSAvPlxuICAgICAgICApXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdzY2hlZHVsZSc6XG4gICAgICAgIGF0dGFjaG1lbnQgPSAoXG4gICAgICAgICAgPFZhY2NpbmF0aW9uU2NoZWR1bGUgLz5cbiAgICAgICAgKVxuICAgICAgICBicmVha1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2sgbj17YXJ0aWNsZS5hdHRhY2htZW50ID8gMyA6IDB9PlxuICAgICAgICAgIDxBcnRpY2xlIGFydGljbGU9e2FydGljbGV9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAge2F0dGFjaG1lbnR9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXM6IHthcnRpY2xlSWR9fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgYXJ0aWNsZTogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGEgPT4gYS5pc1B1Ymxpc2hlZCAmJiBhLnVybCA9PT0gYXJ0aWNsZUlkKVswXVxuICAgIH1cbiAgfVxuKShTZWN0aW9uQXJ0aWNsZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25BcnRpY2xlL1NlY3Rpb25BcnRpY2xlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7SGVhZGluZzEsIENvbnRlbnR9IGZyb20gJy4uL1R5cG9ncmFwaHknXG5cbmNvbnN0IEFydGljbGUgPSAoe1xuICBhcnRpY2xlXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCbG9jayBuPXszfT5cbiAgICAgICAgPEhlYWRpbmcxPnthcnRpY2xlLnRpdGxlfTwvSGVhZGluZzE+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICA8Q29udGVudCB0ZXh0PXthcnRpY2xlLmNvbnRlbnR9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXJ0aWNsZS9BcnRpY2xlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7UGFnZUxpbmt9IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgQ2F0ZWdvcnlEaXJlY3RvcnkgPSAoe1xuICBpdGVtcyxcbiAgc2VjdGlvbklkLFxuICBhcnRpY2xlSWRcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGlzdD5cbiAgICAgIHtpdGVtcy5tYXAoaSA9PlxuICAgICAgICA8TGlzdEl0ZW0ga2V5PXtpLl9pZH0+XG4gICAgICAgICAgPFBhZ2VMaW5rIHRvPXtgJHtQVUJMSUNfUEFUSH0vJHtzZWN0aW9uSWR9LyR7YXJ0aWNsZUlkfS8ke2kudXJsfWB9PntpLnRpdGxlfTwvUGFnZUxpbms+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICApfVxuICAgIDwvTGlzdD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge2NhdGVnb3J5fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQgJiYgYS50eXBlLmlkID09PSBjYXRlZ29yeSlcbiAgICB9XG4gIH1cbikoQ2F0ZWdvcnlEaXJlY3RvcnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9DYXRlZ29yeURpcmVjdG9yeS9DYXRlZ29yeURpcmVjdG9yeS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge1BhZ2VMaW5rfSBmcm9tICcuLi9VSSdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW0sIE1lZGlhLCBNZWRpYUZpZ3VyZSwgTWVkaWFCb2R5fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ZhY2NpbmF0aW9uU2NoZWR1bGUuY3NzJ1xuXG5jb25zdCBWYWNjaW5hdGlvblNjaGVkdWxlID0gKHtcbiAgaXRlbXMsXG4gIHZhY2NpbmVBcnRpY2xlXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TY2hlZHVsZX0+XG4gICAgICA8TGlzdCBuPXswfT5cbiAgICAgICAgPExpc3RJdGVtIG49ezB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU2NoZWR1bGVJdGVtfSAke3N0eWxlcy5TY2hlZHVsZUl0ZW1faGVhZGVyfWB9PlxuICAgICAgICAgICAgPE1lZGlhPlxuICAgICAgICAgICAgICA8TWVkaWFGaWd1cmUgc3Bhbj17MX0gb3V0T2Y9ezV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2NoZWR1bGVJdGVtX19hZ2V9PlxuICAgICAgICAgICAgICAgICAgQ2hpbGQncyBhZ2VcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9NZWRpYUZpZ3VyZT5cblxuICAgICAgICAgICAgICA8TWVkaWFCb2R5PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2NoZWR1bGVJdGVtX192YWNjaW5lc30+XG4gICAgICAgICAgICAgICAgICBTdWdnZXN0ZWQgdmFjY2luYXRpb24ocylcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9NZWRpYUJvZHk+XG4gICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgIHtpdGVtcy5tYXAoKGksIGspID0+XG4gICAgICAgICAgPExpc3RJdGVtIGtleT17a30gbj17MH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNjaGVkdWxlSXRlbX0+XG4gICAgICAgICAgICAgIDxNZWRpYT5cbiAgICAgICAgICAgICAgICA8TWVkaWFGaWd1cmUgc3Bhbj17MX0gb3V0T2Y9ezV9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TY2hlZHVsZUl0ZW1fX2FnZX0+XG4gICAgICAgICAgICAgICAgICAgIHtpLmFnZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTWVkaWFGaWd1cmU+XG5cbiAgICAgICAgICAgICAgICA8TWVkaWFCb2R5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TY2hlZHVsZUl0ZW1fX3ZhY2NpbmVzfT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3Qgbj17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICB7aS52YWNjaW5lcy5tYXAoKHYsIGopID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXtqfSBuPXswLjV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUxpbmsgdG89e2Ake1BVQkxJQ19QQVRIfS8ke3ZhY2NpbmVBcnRpY2xlLnR5cGUuaWR9LyR7dmFjY2luZUFydGljbGUudXJsfS8ke3YudXJsfWB9Pnt2LnRpdGxlfTwvUGFnZUxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTWVkaWFCb2R5PlxuICAgICAgICAgICAgICA8L01lZGlhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBzdGF0ZS5zY2hlZHVsZS5pdGVtcyxcbiAgICAgIHZhY2NpbmVBcnRpY2xlOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoaSA9PiBpLmlzUHVibGlzaGVkICYmIGkuYXR0YWNobWVudCA9PT0gJ3ZhY2NpbmVzJylbMF1cbiAgICB9XG4gIH1cbikoVmFjY2luYXRpb25TY2hlZHVsZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1ZhY2NpbmF0aW9uU2NoZWR1bGUvVmFjY2luYXRpb25TY2hlZHVsZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTY2hlZHVsZVwiOlwiVmFjY2luYXRpb25TY2hlZHVsZV9fU2NoZWR1bGVfX18xanVnQlwiLFwiU2NoZWR1bGVJdGVtXCI6XCJWYWNjaW5hdGlvblNjaGVkdWxlX19TY2hlZHVsZUl0ZW1fX18zeG10YlwiLFwiU2NoZWR1bGVJdGVtX19hZ2VcIjpcIlZhY2NpbmF0aW9uU2NoZWR1bGVfX1NjaGVkdWxlSXRlbV9fYWdlX19fMWJBSTFcIixcIlNjaGVkdWxlSXRlbV9fdmFjY2luZXNcIjpcIlZhY2NpbmF0aW9uU2NoZWR1bGVfX1NjaGVkdWxlSXRlbV9fdmFjY2luZXNfX19tSEE0SVwiLFwiU2NoZWR1bGVJdGVtX2hlYWRlclwiOlwiVmFjY2luYXRpb25TY2hlZHVsZV9fU2NoZWR1bGVJdGVtX2hlYWRlcl9fXzF3ZHI0XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9WYWNjaW5hdGlvblNjaGVkdWxlL1ZhY2NpbmF0aW9uU2NoZWR1bGUuY3NzXG4gKiogbW9kdWxlIGlkID0gNjc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQge2FuaW1hdGVTY3JvbGx9IGZyb20gJ3JlYWN0LXNjcm9sbCdcblxuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vQXJ0aWNsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWN0aW9uQ2F0ZWdvcnlJdGVtLmNzcydcblxuY2xhc3MgU2VjdGlvbkNhdGVnb3J5SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBhbmltYXRlU2Nyb2xsLnNjcm9sbFRvKHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wIC0gMTAwLCB7XG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5leHRQcm9wcykge1xuICAgIGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8odGhpcy5fZWxlbWVudC5vZmZzZXRUb3AgLSAxMDAsIHtcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXRlbSwgcGFyYW1zOiB7c2VjdGlvbklkLCBhcnRpY2xlSWR9fSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX0gY2xhc3NOYW1lPXtzdHlsZXMuU2VjdGlvbkNhdGVnb3J5SXRlbX0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89e2Ake1BVQkxJQ19QQVRIfS8ke3NlY3Rpb25JZH0vJHthcnRpY2xlSWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5TZWN0aW9uQ2F0ZWdvcnlJdGVtX19iYWNrbGlua30+YmFjazwvTGluaz5cblxuICAgICAgICA8QXJ0aWNsZSBhcnRpY2xlPXtpdGVtfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7aXRlbUlkfX0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQgJiYgYS51cmwgPT09IGl0ZW1JZClbMF1cbiAgICB9XG4gIH1cbikoU2VjdGlvbkNhdGVnb3J5SXRlbSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25DYXRlZ29yeUl0ZW0vU2VjdGlvbkNhdGVnb3J5SXRlbS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWN0aW9uQ2F0ZWdvcnlJdGVtXCI6XCJTZWN0aW9uQ2F0ZWdvcnlJdGVtX19TZWN0aW9uQ2F0ZWdvcnlJdGVtX19fMXRSb2RcIixcIlNlY3Rpb25DYXRlZ29yeUl0ZW1fX2JhY2tsaW5rXCI6XCJTZWN0aW9uQ2F0ZWdvcnlJdGVtX19TZWN0aW9uQ2F0ZWdvcnlJdGVtX19iYWNrbGlua19fXzF4bTRzXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uQ2F0ZWdvcnlJdGVtL1NlY3Rpb25DYXRlZ29yeUl0ZW0uY3NzXG4gKiogbW9kdWxlIGlkID0gNjkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBSEE7QUFEQTtBQURBOzs7Ozs7O0FDbEJBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBeEJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBYkE7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVhBO0FBYUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUxBO0FBUUE7QUFDQTtBQUNBOzs7O0FBcERBO0FBQ0E7QUFzREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFWQTtBQURBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUE1QkE7QUFEQTtBQXFDQTs7OztBQWhHQTtBQUNBO0FBa0dBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ3JDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUMzQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7OztBQ2xEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFTQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQU1BO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FDdkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQURBO0FBaUJBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTs7OztBQWxDQTtBQUNBO0FBb0NBOzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTkE7QUFEQTtBQWVBO0FBQ0E7Ozs7Ozs7O0FDMUJBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWVBOzs7O0FBeENBO0FBQ0E7QUEwQ0E7Ozs7Ozs7QUNoREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBVEE7QUFMQTtBQURBO0FBREE7QUFzQkE7QUF2QkE7QUFIQTtBQURBO0FBZ0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBREE7QUFIQTtBQURBO0FBREE7QUFpQkE7QUFDQTs7Ozs7Ozs7QUM5REE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFKQTtBQU9BO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFTQTs7OztBQXpDQTtBQUNBO0FBMkNBOzs7Ozs7O0FDbkRBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBREE7QUFZQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7OztBQ3ZDQTtBQUNBOzs7Ozs7O0FDREE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQURBO0FBSUE7QUFEQTtBQUNBO0FBSUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVEE7QUFEQTtBQURBO0FBREE7QUFvQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBOzs7Ozs7O0FDbkVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBQ0E7Ozs7Ozs7O0FDbkNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFQQTtBQURBO0FBZ0JBO0FBQ0E7Ozs7QUF4RUE7QUFDQTtBQTBFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ2JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBUEE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQkE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBZkE7QUFDQTtBQWlCQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFQQTtBQURBO0FBREE7QUFrQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBREE7QUFEQTtBQURBO0FBUEE7QUFEQTtBQURBO0FBREE7QUFuQkE7QUFEQTtBQWdEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTs7Ozs7OztBQ3BFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBSUE7QUFMQTtBQVFBOzs7O0FBekJBO0FBQ0E7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7Ozs7Ozs7QUMzQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=