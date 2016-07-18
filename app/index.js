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

	var _Blog = __webpack_require__(691);

	var _Blog2 = _interopRequireDefault(_Blog);

	var _Blogpost = __webpack_require__(798);

	var _Blogpost2 = _interopRequireDefault(_Blogpost);

	var _Questions = __webpack_require__(800);

	var _Questions2 = _interopRequireDefault(_Questions);

	var _Faq = __webpack_require__(807);

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
	    errors: {}
	  },
	  articles: {
	    isFetching: false,
	    items: []
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

	var _NotFound = __webpack_require__(668);

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

	var _SectionCategoryItem = __webpack_require__(690);

	var _SectionCategoryItem2 = _interopRequireDefault(_SectionCategoryItem);

	var _Article = __webpack_require__(672);

	var _Article2 = _interopRequireDefault(_Article);

	var _NotFound = __webpack_require__(668);

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

/***/ 690:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SectionCategoryItem":"SectionCategoryItem__SectionCategoryItem___1tRod","SectionCategoryItem__backlink":"SectionCategoryItem__SectionCategoryItem__backlink___1xm4s"};

/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(692);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Typography = __webpack_require__(657);

	var _Layouts = __webpack_require__(606);

	var _UI = __webpack_require__(618);

	var _Blog = __webpack_require__(797);

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

/***/ 797:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"page":"Blog__page___sQp_f","entry":"Blog__entry___zzZzn","entry__body":"Blog__entry__body___3sC_A","entry__footer":"Blog__entry__footer___3kFL0","entry__date":"Blog__entry__date___37Agc"};

/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(692);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _reactScroll = __webpack_require__(677);

	var _reactRedux = __webpack_require__(470);

	var _Typography = __webpack_require__(657);

	var _Layouts = __webpack_require__(606);

	var _UI = __webpack_require__(618);

	var _NotFound = __webpack_require__(668);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Blogpost = __webpack_require__(799);

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
	      _reactScroll.animateScroll.scrollTo(this._element.offsetTop - 100, {
	        duration: 500
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var blogpost = this.props.blogpost;


	      if (blogpost) {
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

/***/ 799:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"blogpost":"Blogpost__blogpost___32jYF","blogpost__date":"Blogpost__blogpost__date___3wpGU"};

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

	var _Questions = __webpack_require__(801);

	var _Questions2 = _interopRequireDefault(_Questions);

	var _Layouts = __webpack_require__(606);

	var _Typography = __webpack_require__(657);

	var _SideNav = __webpack_require__(656);

	var _SideNav2 = _interopRequireDefault(_SideNav);

	var _SideBar = __webpack_require__(654);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	var _Body = __webpack_require__(667);

	var _Body2 = _interopRequireDefault(_Body);

	var _AskQuestionSide = __webpack_require__(802);

	var _AskQuestionSide2 = _interopRequireDefault(_AskQuestionSide);

	var _QuestionForm = __webpack_require__(805);

	var _QuestionForm2 = _interopRequireDefault(_QuestionForm);

	var _jen = __webpack_require__(806);

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

/***/ 801:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"QuestionsIntro":"Questions__QuestionsIntro___1g-Jv","QuestionsIntro__image":"Questions__QuestionsIntro__image___1XAPZ","QuestionsIntro__text":"Questions__QuestionsIntro__text___1F9uK"};

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(300);

	var _react2 = _interopRequireDefault(_react);

	var _AskQuestionSide = __webpack_require__(803);

	var _AskQuestionSide2 = _interopRequireDefault(_AskQuestionSide);

	var _Layouts = __webpack_require__(606);

	var _UI = __webpack_require__(618);

	var _jen = __webpack_require__(804);

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

/***/ 803:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AskQuestionSide":"AskQuestionSide__AskQuestionSide___8F461","AskQuestionSide__image":"AskQuestionSide__AskQuestionSide__image___b5q8O","AskQuestionSide__text":"AskQuestionSide__AskQuestionSide__text___3Q75k","AskQuestionSide__title":"AskQuestionSide__AskQuestionSide__title___1JzpX"};

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/jen.3bb35a7c69e53c83a2d39cdf16bf6ecf.jpg";

/***/ },

/***/ 805:
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

	var _Layouts = __webpack_require__(606);

	var _UI = __webpack_require__(618);

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
	      var isUpdating = _newProps$question.isUpdating;


	      if (!isUpdating) {
	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          this.setState({
	            data: {
	              posterName: this.props.user.name,
	              posterEmail: this.props.user.email,
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

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/jen.3bb35a7c69e53c83a2d39cdf16bf6ecf.jpg";

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

	var _NotFound = __webpack_require__(668);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	var _Article = __webpack_require__(672);

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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NjaGVkdWxlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NjaGVkdWxlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zZWFyY2hBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYWxnb2xpYVNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYXlvdXRzLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0Jsb2NrL0Jsb2NrLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9GbGV4L0ZsZXguanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL1BhZ2UvUGFnZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVUkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0JyZWFkY3J1bWJzL0JyZWFkY3J1bWJzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9QYWdlTGluay9QYWdlTGluay5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvUGFnZUxpbmsvUGFnZUxpbmsuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXRMYWJlbC9JbnB1dExhYmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9NYWluTmF2L01haW5OYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01haW5OYXYvTWFpbk5hdi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DdXJyZW50VXNlci9DdXJyZW50VXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi9Gb290ZXJOYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlck5hdi9Gb290ZXJOYXYuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TaWRlQmFyL1NpZGVCYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NpZGVOYXYvU2lkZU5hdi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvVHlwb2dyYXBoeS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9Db250ZW50L0NvbnRlbnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQ29udGVudC9Db250ZW50LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMS9IZWFkaW5nMS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWRlTmF2L1NpZGVOYXYuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Cb2R5L0JvZHkuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuY3NzIiwid2VicGFjazovLy9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uQXJ0aWNsZS9TZWN0aW9uQXJ0aWNsZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FydGljbGUvQXJ0aWNsZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NhdGVnb3J5RGlyZWN0b3J5L0NhdGVnb3J5RGlyZWN0b3J5LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVmFjY2luYXRpb25TY2hlZHVsZS9WYWNjaW5hdGlvblNjaGVkdWxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WYWNjaW5hdGlvblNjaGVkdWxlL1ZhY2NpbmF0aW9uU2NoZWR1bGUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uQ2F0ZWdvcnlJdGVtL1NlY3Rpb25DYXRlZ29yeUl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25DYXRlZ29yeUl0ZW0vU2VjdGlvbkNhdGVnb3J5SXRlbS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Jsb2cvQmxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmxvZy9CbG9nLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQmxvZ3Bvc3QvQmxvZ3Bvc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jsb2dwb3N0L0Jsb2dwb3N0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zL1F1ZXN0aW9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zL1F1ZXN0aW9ucy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9Bc2tRdWVzdGlvblNpZGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9Bc2tRdWVzdGlvblNpZGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9qZW4uanBnIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbkZvcm0vUXVlc3Rpb25Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnMvamVuLmpwZyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRmFxL0ZhcS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcblxuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJ1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4UmVkaXJlY3QsIGhhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlJ1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJ1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb24nXG5pbXBvcnQgU2VjdGlvbkFydGljbGUgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25BcnRpY2xlJ1xuaW1wb3J0IFNlY3Rpb25DYXRlZ29yeUl0ZW0gZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25DYXRlZ29yeUl0ZW0nXG5pbXBvcnQgQmxvZyBmcm9tICcuL2NvbXBvbmVudHMvQmxvZydcbmltcG9ydCBCbG9ncG9zdCBmcm9tICcuL2NvbXBvbmVudHMvQmxvZ3Bvc3QnXG5pbXBvcnQgUXVlc3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbnMnXG5pbXBvcnQgRmFxIGZyb20gJy4vY29tcG9uZW50cy9GYXEnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuXG5SZWFjdERPTS5yZW5kZXIoKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgICAgIDxSb3V0ZSBwYXRoPXtgJHtQVUJMSUNfUEFUSH1gfSBjb21wb25lbnQ9e0FwcH0+XG4gICAgICAgIDxJbmRleFJlZGlyZWN0IHRvPVwicXVlc3Rpb25zXCIgLz5cblxuICAgICAgICA8Um91dGUgcGF0aD1cInF1ZXN0aW9uc1wiIGNvbXBvbmVudD17UXVlc3Rpb25zfT5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIjpmYXFJZFwiIGNvbXBvbmVudD17RmFxfSAvPlxuICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiYmxvZ1wiIGNvbXBvbmVudD17QmxvZ30+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6YmxvZ3Bvc3RJZFwiIGNvbXBvbmVudD17QmxvZ3Bvc3R9Lz5cbiAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICA8Um91dGUgcGF0aD1cIjpzZWN0aW9uSWRcIiBjb21wb25lbnQ9e1NlY3Rpb259PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOmFydGljbGVJZFwiIGNvbXBvbmVudD17U2VjdGlvbkFydGljbGV9PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6aXRlbUlkXCIgY29tcG9uZW50PXtTZWN0aW9uQ2F0ZWdvcnlJdGVtfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvUm91dGU+XG4gICAgICA8L1JvdXRlPlxuICAgIDwvUm91dGVyPlxuICA8L1Byb3ZpZGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2luZGV4LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDI5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rTWlkZGxld2FyZV1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpXG4gIG1pZGRsZXdhcmUucHVzaChsb2dnZXIpXG59XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc3RvcmUuanNcbiAqKi8iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aFJlZHVjZXInXG5pbXBvcnQgZmxhc2ggZnJvbSAnLi9mbGFzaFJlZHVjZXInXG5pbXBvcnQgcXVlc3Rpb24gZnJvbSAnLi9xdWVzdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IGFydGljbGVzIGZyb20gJy4vYXJ0aWNsZVJlZHVjZXInXG5pbXBvcnQgc2NoZWR1bGUgZnJvbSAnLi9zY2hlZHVsZVJlZHVjZXInXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoUmVkdWNlcidcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoLFxuICBmbGFzaCxcbiAgcXVlc3Rpb24sXG4gIGFydGljbGVzLFxuICBzY2hlZHVsZSxcbiAgc2VhcmNoXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0FVVEgsIExPR0lOLCBMT0dPVVR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBhdXRoID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5hdXRoLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0FVVEg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLmF1dGgsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIExPR0lOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IGFjdGlvbi51c2VyXG4gICAgICB9XG4gICAgY2FzZSBMT0dPVVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogbnVsbFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXV0aFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9BVVRIID0gJ1JFUVVFU1RfQVVUSCdcbmV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTidcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xuXG5jb25zdCByZXF1ZXN0QXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0FVVEhcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgIGRpc3BhdGNoKHt0eXBlOiBMT0dPVVR9KVxuICB9XG59XG5cbmNvbnN0IGxvZ0luID0gKFxuICB1c2VyXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dJTixcbiAgICB1c2VyXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aENyZWRlbnRpYWxzID0gKFxuICBlbWFpbCxcbiAgcGFzc3dvcmRcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBdXRoKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hdXRoL2F1dGhlbnRpY2F0ZS1jcmVkZW50aWFsc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicsIGpzb24uZGF0YS50b2tlbilcbiAgICAgICAgICBkaXNwYXRjaChsb2dJbihqc29uLmRhdGEudXNlcikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKGpzb24uZGF0YS5lcnJvciwgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aFRva2VuID0gKFxuICB0b2tlblxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEF1dGgoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L2F1dGgvYXV0aGVudGljYXRlLXRva2VuYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRva2VuXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nLCBqc29uLmRhdGEudG9rZW4pXG4gICAgICAgICAgZGlzcGF0Y2gobG9nSW4oanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShqc29uLmRhdGEuZXJyb3IsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXV0aEFjdGlvbnMuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgU0VUX01FU1NBR0UgPSAnU0VUX01FU1NBR0UnXG5leHBvcnQgY29uc3QgVU5TRVRfTUVTU0FHRSA9ICdVTlNFVF9NRVNTQUdFJ1xuXG5jb25zdCBzZXRNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZSxcbiAgdGltZW91dElkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfTUVTU0FHRSxcbiAgICBtZXNzYWdlLFxuICAgIG1lc3NhZ2VUeXBlLFxuICAgIHRpbWVvdXRJZFxuICB9XG59XG5cbmNvbnN0IHVuc2V0TWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGVcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVOU0VUX01FU1NBR0VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmxhc2hNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZVxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgY29uc3QgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2godW5zZXRNZXNzYWdlKCkpXG4gICAgfSwgMjAwMClcblxuICAgIGRpc3BhdGNoKHNldE1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZVR5cGUsIHQpKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hBY3Rpb25zLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhdXRoOiB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgdXNlcjogbnVsbFxuICB9LFxuICBmbGFzaDoge1xuICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB0aW1lb3V0SWQ6IG51bGxcbiAgfSxcbiAgbmV3UXVlc3Rpb246IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBlcnJvcnM6IHt9XG4gIH0sXG4gIGFydGljbGVzOiB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgaXRlbXM6IFtdXG4gIH0sXG4gIHNjaGVkdWxlOiB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgaXRlbXM6IFtdLFxuICAgIHBvc3RTY2hlZHVsZUNvbnRlbnQ6IG51bGxcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgaXRlbXM6IFtdXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9pbml0aWFsU3RhdGUuanNcbiAqKi8iLCJpbXBvcnQge1NFVF9NRVNTQUdFLCBVTlNFVF9NRVNTQUdFfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGZsYXNoID0gKFxuICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaCksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlVHlwZSxcbiAgICAgICAgdGltZW91dElkOiBhY3Rpb24udGltZW91dElkXG4gICAgICB9KVxuICAgIGNhc2UgVU5TRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSwgQ09ORklSTV9RVUVTVElPTl9DUkVBVEUsIFJFSkVDVF9RVUVTVElPTl9DUkVBVEV9IGZyb20gJy4vcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHF1ZXN0aW9uID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5uZXdRdWVzdGlvbixcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTl9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fUVVFU1RJT05fQ1JFQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5uZXdRdWVzdGlvbilcbiAgICBjYXNlIFJFSkVDVF9RVUVTVElPTl9DUkVBVEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVlc3Rpb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSA9ICdSRVFVRVNUX1FVRVNUSU9OX0NSRUFURSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX1FVRVNUSU9OX0NSRUFURSA9ICdDT05GSVJNX1FVRVNUSU9OX0NSRUFURSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFID0gJ1JFSkVDVF9RVUVTVElPTl9DUkVBVEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUVVFU1RJT05fQ1JFQVRFXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1FVRVNUSU9OX0NSRUFURVxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfUVVFU1RJT05fQ1JFQVRFLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVRdWVzdGlvbiA9IChcbiAgZGF0YSxcbiAgc3VjY2Vzc01lc3NhZ2VcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDcmVhdGUoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L3F1ZXN0aW9ucy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVzdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHF1ZXN0aW9ucyBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0FSVElDTEVTLCBSRUNFSVZFX0FSVElDTEVTfSBmcm9tICcuL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgYXJ0aWNsZXMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmFydGljbGVzLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FSVElDTEVTID0gJ1JFUVVFU1RfQVJUSUNMRVMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9BUlRJQ0xFUyA9ICdSRUNFSVZFX0FSVElDTEVTJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdEFydGljbGVzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQVJUSUNMRVNcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlQXJ0aWNsZXMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX0FSVElDTEVTLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEFydGljbGVzKCkpXG5cbiAgICBmZXRjaChgJHtTRVJWRVJfVVJMfS9hcnRpY2xlcy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVBcnRpY2xlcyhqc29uLmRhdGEuYXJ0aWNsZXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1NDSEVEVUxFLCBSRUNFSVZFX1NDSEVEVUxFfSBmcm9tICcuL3NjaGVkdWxlQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHNjaGVkdWxlID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5zY2hlZHVsZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9TQ0hFRFVMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9TQ0hFRFVMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtcyxcbiAgICAgICAgcG9zdFNjaGVkdWxlQ29udGVudDogYWN0aW9uLnBvc3RTY2hlZHVsZUNvbnRlbnRcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVkdWxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2NoZWR1bGVSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NDSEVEVUxFID0gJ1JFUVVFU1RfU0NIRURVTEUnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9TQ0hFRFVMRSA9ICdSRUNFSVZFX1NDSEVEVUxFJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdFNjaGVkdWxlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfU0NIRURVTEVcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlU2NoZWR1bGUgPSAoXG4gIGl0ZW1zLFxuICBwb3N0U2NoZWR1bGVDb250ZW50XG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1NDSEVEVUxFLFxuICAgIGl0ZW1zLFxuICAgIHBvc3RTY2hlZHVsZUNvbnRlbnRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTY2hlZHVsZSA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2NoZWR1bGUoKSlcblxuICAgIGZldGNoKGAke1NFUlZFUl9VUkx9L3NjaGVkdWxlYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVTY2hlZHVsZShqc29uLmRhdGEuc2NoZWR1bGUuaXRlbXMsIGpzb24uZGF0YS5zY2hlZHVsZS5wb3N0U2NoZWR1bGVDb250ZW50KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2NoZWR1bGVBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1NFQVJDSF9SRVNVTFRTLCBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTfSBmcm9tICcuL3NlYXJjaEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzZWFyY2ggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNlYXJjaCxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9TRUFSQ0hfUkVTVUxUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtc1xuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VhcmNoUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCBpbmRleCBmcm9tICcuL2FsZ29saWFTZWFyY2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NFQVJDSF9SRVNVTFRTID0gJ1JFUVVFU1RfU0VBUkNIX1JFU1VMVFMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9TRUFSQ0hfUkVTVUxUUyA9ICdSRUNFSVZFX1NFQVJDSF9SRVNVTFRTJ1xuXG5jb25zdCByZXF1ZXN0U2VhcmNoUmVzdWx0cyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1NFQVJDSF9SRVNVTFRTXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVNlYXJjaFJlc3VsdHMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1NFQVJDSF9SRVNVTFRTLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoUmVzdWx0cyA9IChcbiAgcXVlcnlcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RTZWFyY2hSZXN1bHRzKCkpXG5cbiAgICByZXR1cm4gaW5kZXguc2VhcmNoKHF1ZXJ5LCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICBkaXNwYXRjaChyZWNlaXZlU2VhcmNoUmVzdWx0cyhjb250ZW50LmhpdHMpKVxuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWFyY2hBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IGFsZ29saWFzZWFyY2ggZnJvbSAnYWxnb2xpYXNlYXJjaCdcblxuY29uc3QgY2xpZW50ID0gYWxnb2xpYXNlYXJjaCgnNzRTMUpOQjFaVCcsICczZGU2ZmRiYWZjNDc3Y2YwMTk2NzNiYjgxMDQzYWUwZCcpXG5jb25zdCBpbmRleCA9IGNsaWVudC5pbml0SW5kZXgoJ3BhZ2VzJylcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hbGdvbGlhU2VhcmNoLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL0Zvb3RlcidcbmltcG9ydCBGbGFzaE1lc3NhZ2UgZnJvbSAnLi4vRmxhc2hNZXNzYWdlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCB7UGFnZSwgUGFnZUNvbnRlbnR9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge2xvZ2luV2l0aFRva2VufSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcbmltcG9ydCB7ZmV0Y2hBcnRpY2xlc30gZnJvbSAnLi4vLi4vc3RvcmUvYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQge2ZldGNoU2NoZWR1bGV9IGZyb20gJy4uLy4uL3N0b3JlL3NjaGVkdWxlQWN0aW9ucydcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0aGlzLnByb3BzLmF0dGVtcHRUb2tlbih0b2tlbilcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGlmICghdGhpcy5wcm9wcy51c2VyICYmIG5ld1Byb3BzLnVzZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuZmV0Y2hBcnRpY2xlcygpXG4gICAgICB0aGlzLnByb3BzLmZldGNoU2NoZWR1bGUoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXNlcixcbiAgICAgIGF0dGVtcHRpbmdMb2dpbixcbiAgICAgIGlzRmV0Y2hpbmdBcnRpY2xlcyxcbiAgICAgIGlzRmV0Y2hpbmdTY2hlZHVsZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgbG9jYXRpb25cbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGF0dGVtcHRpbmdMb2dpbiB8fCBpc0ZldGNoaW5nQXJ0aWNsZXMgfHwgaXNGZXRjaGluZ1NjaGVkdWxlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgPEhlYWRlciBsb2NhdGlvbj17bG9jYXRpb259IC8+XG5cbiAgICAgICAgICAgIDxQYWdlQ29udGVudD5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9QYWdlQ29udGVudD5cblxuICAgICAgICAgICAgPEZvb3RlciAvPlxuXG4gICAgICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICAgICAgPC9QYWdlPlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQYWdlPlxuICAgICAgICAgICAgPFBhZ2VDb250ZW50PlxuICAgICAgICAgICAgICA8TG9naW4gLz5cbiAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XG5cbiAgICAgICAgICAgIDxGbGFzaE1lc3NhZ2UgLz5cbiAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nU2NoZWR1bGU6IHN0YXRlLnNjaGVkdWxlLmlzRmV0Y2hpbmcsXG4gICAgICBpc0ZldGNoaW5nQXJ0aWNsZXM6IHN0YXRlLmFydGljbGVzLmlzRmV0Y2hpbmcsXG4gICAgICBhdHRlbXB0aW5nTG9naW46IHN0YXRlLmF1dGguaXNGZXRjaGluZyxcbiAgICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlclxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRlbXB0VG9rZW46ICh0b2tlbikgPT4ge1xuICAgICAgICBkaXNwYXRjaChsb2dpbldpdGhUb2tlbih0b2tlbikpXG4gICAgICB9LFxuICAgICAgZmV0Y2hBcnRpY2xlczogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEFydGljbGVzKCkpXG4gICAgICB9LFxuICAgICAgZmV0Y2hTY2hlZHVsZTogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNjaGVkdWxlKCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKEFwcClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FwcC9BcHAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtGbGV4LCBMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyLCBUZXh0SW5wdXQsIEJ1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge2xvZ2luV2l0aENyZWRlbnRpYWxzfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VFbWFpbCA9IHRoaXMuY2hhbmdlRW1haWwuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSB0aGlzLmNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbEVycm9yOiAnJyxcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfVxuICB9XG5cbiAgc3VibWl0Rm9ybSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCBlbWFpbEVycm9yID0gJydcbiAgICBsZXQgcGFzc3dvcmRFcnJvciA9ICcnXG5cbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgPT09ICcnKSB7XG4gICAgICBlbWFpbEVycm9yID0gJ2VtYWlsIGNhbm5vdCBiZSBlbXB0eSdcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCA9PT0gJycpIHtcbiAgICAgIHBhc3N3b3JkRXJyb3IgPSAncGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rJ1xuICAgIH1cblxuICAgIGlmICghZW1haWxFcnJvciAmJiAhcGFzc3dvcmRFcnJvcikge1xuICAgICAgZGlzcGF0Y2gobG9naW5XaXRoQ3JlZGVudGlhbHModGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlbWFpbEVycm9yLFxuICAgICAgICBwYXNzd29yZEVycm9yXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUVtYWlsICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZW1haWw6IHZhbHVlLFxuICAgICAgZW1haWxFcnJvcjogJydcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYXNzd29yZDogdmFsdWUsXG4gICAgICBwYXNzd29yZEVycm9yOiAnJ1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc0ZldGNoaW5nfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxXaW5kb3c+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19PlxuICAgICAgICAgIDxNb2RhbFdpbmRvd0hlYWRlcj5cbiAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+TG9naW48L0ZsZXg+XG4gICAgICAgICAgPC9Nb2RhbFdpbmRvd0hlYWRlcj5cblxuICAgICAgICAgIDxNb2RhbFdpbmRvd0JvZHk+XG4gICAgICAgICAgICA8TGlzdCBuPXsxLjV9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gbj17MS41fT5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWw6XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBjYXNleUBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZW1haWxFcnJvcn1cbiAgICAgICAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXt0aGlzLmNoYW5nZUVtYWlsfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9PlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZDpcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEJpZ1NlY3JldFwiXG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5wYXNzd29yZEVycm9yfVxuICAgICAgICAgICAgICAgICAgY2hhbmdlQ2FsbGJhY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dCb2R5PlxuXG4gICAgICAgICAgPE1vZGFsV2luZG93Rm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNGZXRjaGluZ31cbiAgICAgICAgICAgICAgbGFiZWw9XCJMb2dpblwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Nb2RhbFdpbmRvdz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmdcbiAgICB9XG4gIH1cbikoTG9naW4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3hcbiAqKi8iLCJpbXBvcnQgQmxvY2sgZnJvbSAnLi9CbG9jaydcbmltcG9ydCBGbGV4IGZyb20gJy4vRmxleCdcbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4vR3JpZCdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4vTGlzdCdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4vTGlzdElubGluZSdcbmltcG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9IGZyb20gJy4vTWVkaWEnXG5pbXBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fSBmcm9tICcuL1BhZ2UnXG5pbXBvcnQgV3JhcCBmcm9tICcuL1dyYXAnXG5cbmV4cG9ydCB7QmxvY2ssIEZsZXgsIFdyYXAsIEdyaWQsIEdyaWRJdGVtLFxuICBMaXN0LCBMaXN0SXRlbSwgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW0sXG4gIE1lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlLFxuICBQYWdlLCBQYWdlQ29udGVudH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGF5b3V0cy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBCbG9jayA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0Jsb2NrL0Jsb2NrLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgRmxleCA9ICh7XG4gIGp1c3RpZnlDb250ZW50ID0gJ2ZsZXgtc3RhcnQnLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBmbGV4RGlyZWN0aW9uID0gJ3JvdycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsZXhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvRmxleC9GbGV4LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBHcmlkID0gKHtcbiAgZ3V0dGVyID0gMCxcbiAgYWxpZ25JdGVtcyA9ICdzdHJldGNoJyxcbiAganVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCcsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50LFxuICAgIG1hcmdpbkxlZnQ6IGAtJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYCxcbiAgICBtYXJnaW5SaWdodDogYC0ke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgR3JpZEl0ZW0gPSAoe1xuICBzcGFuID0gMCxcbiAgb3V0T2YgPSAxMixcbiAgZ3V0dGVyID0gMCxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nTGVmdDogYCR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgcGFkZGluZ1JpZ2h0OiBgJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYCxcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIGlmIChzcGFuICYmIG91dE9mKSB7XG4gICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwge1xuICAgICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICAgIHdpZHRoOiBgJHsxMDAgKiBzcGFuIC8gb3V0T2Z9JWBcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7R3JpZCwgR3JpZEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0LmNzcydcblxuY29uc3QgTGlzdCA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdH0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKVxufVxuXG5jb25zdCBMaXN0SXRlbSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0X19pdGVtfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCB7TGlzdCwgTGlzdEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaXN0XCI6XCJMaXN0X19saXN0X19fMmtCVWRcIixcImxpc3RfX2l0ZW1cIjpcIkxpc3RfX2xpc3RfX2l0ZW1fX18xRDJWRlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNjExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0SW5saW5lLmNzcydcblxuY29uc3QgTGlzdElubGluZSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW4sXG4gIGFsaWduSXRlbXMgPSAnY2VudGVyJyxcbiAganVzdGZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0J1xufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAtJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0ZnlDb250ZW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdElubGluZUl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdElubGluZV9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdElubGluZVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9fXzNHamh1XCIsXCJsaXN0SW5saW5lX19pdGVtXCI6XCJMaXN0SW5saW5lX19saXN0SW5saW5lX19pdGVtX19fMksxa1FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVkaWEuY3NzJ1xuXG5jb25zdCBNZWRpYSA9ICh7XG4gIGFsaWduSXRlbXMgPSAnZmxleC1zdGFydCcsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBhbGlnbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFCb2R5ID0gKHtcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYV9fYm9keX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFGaWd1cmUgPSAoe1xuICBuID0gMSxcbiAgbmwgPSAwLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbmx9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2ZpZ3VyZX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWVkaWFcIjpcIk1lZGlhX19tZWRpYV9fXzNhMDBHXCIsXCJtZWRpYV9fZmlndXJlXCI6XCJNZWRpYV9fbWVkaWFfX2ZpZ3VyZV9fXzI0WndBXCIsXCJtZWRpYV9fYm9keVwiOlwiTWVkaWFfX21lZGlhX19ib2R5X19fM1ZkMi1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBhZ2UgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXg6ICcxJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXcmFwID0gKHtcbiAgd2lkdGggPSAnOTAlJyxcbiAgbWF4V2lkdGggPSAnODByZW0nLCAvLyAxMjgwcHggcHJvdmlkZWQgMWVtID09PSAxNnB4XG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB3aWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeFxuICoqLyIsImltcG9ydCBBbGVydCBmcm9tICcuL0FsZXJ0J1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4vQnJlYWRjcnVtYnMnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9IGZyb20gJy4vTW9kYWxXaW5kb3cnXG5pbXBvcnQgUGFnZUxpbmsgZnJvbSAnLi9QYWdlTGluaydcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcidcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCdcblxuZXhwb3J0IHtTcGlubmVyLCBCdXR0b24sIFBhZ2VMaW5rLCBUZXh0SW5wdXQsIFRleHRBcmVhLCBCcmVhZGNydW1icywgQWxlcnQsXG4gIE1vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3Rlcn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1VJLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQWxlcnQuY3NzJ1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgQWxlcnQgPSAoe1xuICBtZXNzYWdlLFxuICB0aGVtZSA9ICdkZWZhdWx0JyxcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDEsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgY29uc3QgbWVzc2FnZUNsYXNzTmFtZXMgPSBbc3R5bGVzLkFsZXJ0X19tZXNzYWdlXVxuXG4gIHN3aXRjaCAodGhlbWUpIHtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWVzLnB1c2goc3R5bGVzLkFsZXJ0X19tZXNzYWdlX2RlZmF1bHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWxlcnR9PlxuICAgICAge21lc3NhZ2VcbiAgICAgICAgPyA8QmxvY2s+XG4gICAgICAgICAgPGRpdiBzdHlsZT17bWVzc2FnZVN0eWxlfSBjbGFzc05hbWU9e21lc3NhZ2VDbGFzc05hbWVzLmpvaW4oJyAnKX0+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICAgIDogbnVsbFxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBbGVydFwiOlwiQWxlcnRfX0FsZXJ0X19fMzdfUUNcIixcIkFsZXJ0X19tZXNzYWdlXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfX18yd0NaRlwiLFwiQWxlcnRfX21lc3NhZ2VfZGVmYXVsdFwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX2RlZmF1bHRfX19uX1I5Q1wiLFwiQWxlcnRfX21lc3NhZ2VfZXJyb3JcIjpcIkFsZXJ0X19BbGVydF9fbWVzc2FnZV9lcnJvcl9fXzJpZDRXXCIsXCJhbGVydC1lbnRlclwiOlwiQWxlcnRfX2FsZXJ0LWVudGVyX19fSzZKZExcIixcImFsZXJ0LWVudGVyLWFjdGl2ZVwiOlwiQWxlcnRfX2FsZXJ0LWVudGVyLWFjdGl2ZV9fXzN2bEN3XCIsXCJhbGVydC1sZWF2ZVwiOlwiQWxlcnRfX2FsZXJ0LWxlYXZlX19fMlBwWVRcIixcImFsZXJ0LWxlYXZlLWFjdGl2ZVwiOlwiQWxlcnRfX2FsZXJ0LWxlYXZlLWFjdGl2ZV9fXzJoYV9RXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnJlYWRjcnVtYnMuY3NzJ1xuXG5jb25zdCBCcmVhZGNydW1icyA9ICh7XG4gIGl0ZW1zXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CcmVhZGNydW1ic30+XG4gICAgICB7aXRlbXMubWFwKGkgPT5cbiAgICAgICAgPExpbmsgdG89e2kucGF0aH0gY2xhc3NOYW1lPXtzdHlsZXMuQnJlYWRjcnVtYnNfX2l0ZW19PntpLmxhYmVsfTwvTGluaz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0JyZWFkY3J1bWJzL0JyZWFkY3J1bWJzLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJyZWFkY3J1bWJzXCI6XCJCcmVhZGNydW1ic19fQnJlYWRjcnVtYnNfX18yV0xqMFwiLFwiQnJlYWRjcnVtYnNfX2l0ZW1cIjpcIkJyZWFkY3J1bWJzX19CcmVhZGNydW1ic19faXRlbV9fXzFEYXlJXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9CcmVhZGNydW1icy9CcmVhZGNydW1icy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLmNzcydcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sXG4gIG9uQ2xpY2ssXG4gIGZ1bGxXaWR0aCA9IGZhbHNlLFxuICBzbWFsbCA9IGZhbHNlLFxuICBsYXJnZSA9IGZhbHNlLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0byA9IG51bGwsXG4gIGhyZWYgPSBudWxsLFxuICBpbnZlcnNlID0gZmFsc2UsXG4gIHRoZW1lID0gJ2FjY2VudDEnLFxuICBleHRyYUNsYXNzTmFtZXNcbn0pID0+IHtcbiAgbGV0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke2Jhc2VsaW5lICogMC43NX1yZW0gJHtiYXNlbGluZSAqIDEuNX1yZW1gLFxuICAgIGxpbmVIZWlnaHQ6IGAkezEuNyAqIGJhc2VsaW5lfXJlbWAsXG4gICAgZm9udFNpemU6IGAkezEuMTY3ICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgaWYgKHNtYWxsKSB7XG4gICAgc3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiBgJHtiYXNlbGluZSAqIDAuM31yZW0gJHtiYXNlbGluZSAqIDF9cmVtYCxcbiAgICAgIGxpbmVIZWlnaHQ6IGAkezEuNSAqIGJhc2VsaW5lfXJlbWAsXG4gICAgICBmb250U2l6ZTogYCR7MC45MTcgKiBiYXNlbGluZX1yZW1gXG4gICAgfVxuICB9XG5cbiAgaWYgKGZ1bGxXaWR0aCkge1xuICAgIHN0eWxlLndpZHRoID0gJzEwMCUnXG4gIH1cblxuICBsZXQgY2xhc3NOYW1lID0gW11cblxuICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b24gOiBzdHlsZXMuQnV0dG9uKVxuXG4gIHN3aXRjaCAodGhlbWUpIHtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b25fZXJyb3IgOiBzdHlsZXMuQnV0dG9uX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhY2NlbnQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b25fYWNjZW50IDogc3R5bGVzLkJ1dHRvbl9hY2NlbnQpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHN0eWxlPXtzdHlsZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZS5qb2luKCcgJyl9ICR7ZXh0cmFDbGFzc05hbWVzfWB9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBzdHlsZT17c3R5bGV9IGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfSAke2V4dHJhQ2xhc3NOYW1lc31gfSBocmVmPXtocmVmfT57Y2hpbGRyZW59PC9hPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGV9IGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfSAke2V4dHJhQ2xhc3NOYW1lc31gfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnZlcnNlQnV0dG9uXCI6XCJCdXR0b25fX0ludmVyc2VCdXR0b25fX18zT1FYVVwiLFwiSW52ZXJzZUJ1dHRvbl9hY2NlbnRcIjpcIkJ1dHRvbl9fSW52ZXJzZUJ1dHRvbl9hY2NlbnRfX18xM29zelwiLFwiSW52ZXJzZUJ1dHRvbl9lcnJvclwiOlwiQnV0dG9uX19JbnZlcnNlQnV0dG9uX2Vycm9yX19fM2lkQlpcIixcIkJ1dHRvblwiOlwiQnV0dG9uX19CdXR0b25fX19RSTdiMlwiLFwiQnV0dG9uX2FjY2VudFwiOlwiQnV0dG9uX19CdXR0b25fYWNjZW50X19fMzNOcFNcIixcIkJ1dHRvbl9lcnJvclwiOlwiQnV0dG9uX19CdXR0b25fZXJyb3JfX18zUFNVWFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsV2luZG93LmNzcydcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgTW9kYWxXaW5kb3cgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgd2lkdGg6IDQwXG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke211bHRpcGxpZXJzLndpZHRoICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsfT5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvRmxleD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0hlYWRlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMixcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19oZWFkZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Qm9keSA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMyxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19fYm9keX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Rm9vdGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2Zvb3Rlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJNb2RhbFwiOlwiTW9kYWxXaW5kb3dfX01vZGFsX19fMmtsY2dcIixcIk1vZGFsV2luZG93XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX18ydFZ5WlwiLFwiTW9kYWxXaW5kb3dfX2hlYWRlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19oZWFkZXJfX18xUXJXSFwiLFwiTW9kYWxXaW5kb3dfX2JvZHlcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19fYm9keV9fXzNRdVFoXCIsXCJNb2RhbFdpbmRvd19fZm9vdGVyXCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2Zvb3Rlcl9fXzJJMFRGXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnZUxpbmsuY3NzJ1xuXG5jb25zdCBQYWdlTGluayA9ICh7XG4gIGNoaWxkcmVuLFxuICBleHRyYUNsYXNzTmFtZXMsXG4gIHRvXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgY2xhc3NOYW1lPXtgJHtzdHlsZXMucGFnZUxpbmt9ICR7ZXh0cmFDbGFzc05hbWVzfWB9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlTGlua1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvUGFnZUxpbmsvUGFnZUxpbmsuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnZUxpbmtcIjpcIlBhZ2VMaW5rX19wYWdlTGlua19fXzF3UFBqXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9QYWdlTGluay9QYWdlTGluay5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NwaW5uZXIuY3NzJ1xuXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJfX2lubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUyfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlM31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTR9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU1fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTd9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU4fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEwfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMn1gfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTcGlubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19fMWZpeWtcIixcIlNwaW5uZXJfX2lubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19pbm5lcl9fXzU4dmNUXCIsXCJTcGlubmVyX19jaXJjbGVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZV9fXzJadWdPXCIsXCJzay1jaXJjbGVGYWRlRGVsYXlcIjpcIlNwaW5uZXJfX3NrLWNpcmNsZUZhZGVEZWxheV9fXzFFdG44XCIsXCJTcGlubmVyX19jaXJjbGUxXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxX19fQk9EN25cIixcIlNwaW5uZXJfX2NpcmNsZTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTJfX18yYUJ0clwiLFwiU3Bpbm5lcl9fY2lyY2xlM1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlM19fXzFCYVpmXCIsXCJTcGlubmVyX19jaXJjbGU0XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU0X19fM1Y1cjdcIixcIlNwaW5uZXJfX2NpcmNsZTVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTVfX18zREo1WFwiLFwiU3Bpbm5lcl9fY2lyY2xlNlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNl9fX1pwVTVtXCIsXCJTcGlubmVyX19jaXJjbGU3XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU3X19fWHBuSzVcIixcIlNwaW5uZXJfX2NpcmNsZThcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZThfX18xX1JSWFwiLFwiU3Bpbm5lcl9fY2lyY2xlOVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOV9fX2ZPME9HXCIsXCJTcGlubmVyX19jaXJjbGUxMFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTBfX19uaTM1QVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTExX19fMWhhdjlcIixcIlNwaW5uZXJfX2NpcmNsZTEyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMl9fXzJpcHpUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJy4uL0lucHV0TGFiZWwnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dEFyZWEuY3NzJ1xuXG5jbGFzcyBUZXh0QXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgb25DaGFuZ2UgKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZWxlbWVudC52YWx1ZVxuICAgIGNvbnN0IHtjaGFuZ2VDYWxsYmFja30gPSB0aGlzLnByb3BzXG5cbiAgICBjaGFuZ2VDYWxsYmFjayh2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2xhYmVsLCBlcnJvciwgdmFsdWUsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZCA9IGZhbHNlfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuVGV4dEFyZWF9PlxuICAgICAgICB7bGFiZWxcbiAgICAgICAgICA/IDxJbnB1dExhYmVsIGxhYmVsPXtsYWJlbH0gZXJyb3I9e2Vycm9yfSAvPlxuICAgICAgICAgIDogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgPHRleHRhcmVhIHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuVGV4dEFyZWFfX2lucHV0fSAke2Vycm9yID8gc3R5bGVzLlRleHRBcmVhX19pbnB1dF9lcnJvciA6IG51bGx9YH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcm93cz17NX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfT48L3RleHRhcmVhPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0TGFiZWwuY3NzJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgSW5wdXRMYWJlbCA9ICh7XG4gIGxhYmVsLFxuICBlcnJvclxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSW5wdXRMYWJlbH0gJHtlcnJvciA/IHN0eWxlcy5JbnB1dExhYmVsX2Vycm9yIDogJyd9YH0+XG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRMYWJlbF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICB7ZXJyb3JcbiAgICAgICAgPyA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dExhYmVsX19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0TGFiZWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dExhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19fMUNlbUlcIixcIklucHV0TGFiZWxfX2xhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19sYWJlbF9fXzJZeV9QXCIsXCJJbnB1dExhYmVsX19lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9fZXJyb3JfX18yTUZOZFwiLFwiSW5wdXRMYWJlbF9lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9lcnJvcl9fXzNFcDVxXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUZXh0QXJlYVwiOlwiVGV4dEFyZWFfX1RleHRBcmVhX19fMTlpcDdcIixcIlRleHRBcmVhX19pbnB1dFwiOlwiVGV4dEFyZWFfX1RleHRBcmVhX19pbnB1dF9fX3g1QjRJXCIsXCJUZXh0QXJlYV9faW5wdXRfZXJyb3JcIjpcIlRleHRBcmVhX19UZXh0QXJlYV9faW5wdXRfZXJyb3JfX18zNjlnVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJy4uL0lucHV0TGFiZWwnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dElucHV0LmNzcydcblxuY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9lbGVtZW50LnZhbHVlXG4gICAgY29uc3Qge2NoYW5nZUNhbGxiYWNrfSA9IHRoaXMucHJvcHNcblxuICAgIGNoYW5nZUNhbGxiYWNrKHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBsYWJlbCxcbiAgICAgIGVycm9yLFxuICAgICAgdmFsdWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICB0eXBlID0gJ3RleHQnXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuVGV4dElucHV0fT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8SW5wdXRMYWJlbCBsYWJlbD17bGFiZWx9IGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIDxpbnB1dCByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLlRleHRJbnB1dF9faW5wdXR9ICR7ZXJyb3IgPyBzdHlsZXMuVGV4dElucHV0X19pbnB1dF9lcnJvciA6IG51bGx9YH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0SW5wdXRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1RleHRJbnB1dC9UZXh0SW5wdXQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGV4dElucHV0XCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF9fXzFBQ0dZXCIsXCJUZXh0SW5wdXRfX2lucHV0XCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF9faW5wdXRfX18xcnlmM1wiLFwiVGV4dElucHV0X19pbnB1dF9lcnJvclwiOlwiVGV4dElucHV0X19UZXh0SW5wdXRfX2lucHV0X2Vycm9yX19fM3BUSnpcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1RleHRJbnB1dC9UZXh0SW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBNYWluTmF2IGZyb20gJy4uL01haW5OYXYnXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uL1NlYXJjaEJhcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIuY3NzJ1xuaW1wb3J0IHtCbG9jaywgV3JhcCwgR3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgQ3VycmVudFVzZXIgZnJvbSAnLi4vQ3VycmVudFVzZXInXG5cbmltcG9ydCBpbWcgZnJvbSAnLi9sb2dvLnN2ZydcblxuY29uc3QgSGVhZGVyID0gKHtcbiAgbG9jYXRpb25cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db3ZlckltZ30+XG4gICAgICAgIDxDdXJyZW50VXNlciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ292ZXJJbWdfX2JvZHl9PlxuICAgICAgICAgIDxXcmFwIG1heFdpZHRoPVwiODByZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyfT5cbiAgICAgICAgICAgICAgPEdyaWQgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxHcmlkSXRlbSBzcGFuPXsxfSBvdXRPZj17NX0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9e3N0eWxlcy5IZWFkZXJfX2xvZ299IC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX190aXRsZX0+VmFjY2luYXRpb24gSW5mb3JtYXRpb24gQ2VudGVyPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGVyX19zdWJ0aXRsZX0+QWxsIHRoZSBpbmZvcm1hdGlvbiB5b3UgbmVlZCB0byBrbm93IGFib3V0IHZhY2NpbmVzIGFuZCB2YWNjaW5hdGlvbiBpbiBNYW5pdG9iYTwvaDI+XG4gICAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgICA8U2VhcmNoQmFyIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9XcmFwPlxuXG4gICAgICAgICAgPE1haW5OYXYgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHtXcmFwLCBHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluTmF2LmNzcydcblxuY29uc3QgbmF2SXRlbXMgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0FzayBhIFF1ZXN0aW9uJyxcbiAgICBwYXRoOiBgJHtQVUJMSUNfUEFUSH0vcXVlc3Rpb25zYFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdBYm91dCBWYWNjaW5lcycsXG4gICAgcGF0aDogYCR7UFVCTElDX1BBVEh9L2Fib3V0LXZhY2NpbmVzYFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdWYWNjaW5lIFNhZmV0eScsXG4gICAgcGF0aDogYCR7UFVCTElDX1BBVEh9L3ZhY2NpbmUtc2FmZXR5YFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdWYWNjaW5hdGlvbiBTY2hlZHVsZScsXG4gICAgcGF0aDogYCR7UFVCTElDX1BBVEh9L3ZhY2NpbmF0aW9uLXNjaGVkdWxlYFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdCbG9nJyxcbiAgICBwYXRoOiBgJHtQVUJMSUNfUEFUSH0vYmxvZ2BcbiAgfVxuXVxuXG5jb25zdCBNYWluTmF2ID0gKHtcbiAgbG9jYXRpb25cbn0pID0+IHtcbiAgY29uc3Qgcm91dGVTdGF0ZU1hcCA9IHtcbiAgICAncXVlc3Rpb25zJzoge2xlZnQ6IDAsIG9wYWNpdHk6IDF9LFxuICAgICdhYm91dC12YWNjaW5lcyc6IHtsZWZ0OiAnMjAlJywgb3BhY2l0eTogMX0sXG4gICAgJ3ZhY2NpbmUtc2FmZXR5Jzoge2xlZnQ6ICc0MCUnLCBvcGFjaXR5OiAxfSxcbiAgICAndmFjY2luYXRpb24tc2NoZWR1bGUnOiB7bGVmdDogJzYwJScsIG9wYWNpdHk6IDF9LFxuICAgICdibG9nJzoge2xlZnQ6ICc4MCUnLCBvcGFjaXR5OiAxfVxuICB9XG5cbiAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzJdXG4gIGNvbnN0IGluZGljYXRvclN0eWxlID0gcm91dGVTdGF0ZU1hcFtjdXJyZW50U2VjdGlvbl1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQmd9PlxuICAgICAgPFdyYXAgbWF4V2lkdGg9XCI4MHJlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1haW5OYXZ9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2luZGljYXRvclN0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5NYWluTmF2X19pbmRpY2F0b3J9PjwvZGl2PlxuXG4gICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICB7bmF2SXRlbXMubWFwKGl0ZW0gPT5cbiAgICAgICAgICAgICAgPEdyaWRJdGVtIGtleT17aXRlbS5wYXRofT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17aXRlbS5wYXRofSBjbGFzc05hbWU9e3N0eWxlcy5NYWluTmF2X19pdGVtfVxuICAgICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuTWFpbk5hdl9faXRlbV9hY3RpdmV9PntpdGVtLmxhYmVsfTwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvV3JhcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluTmF2XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9NYWluTmF2L01haW5OYXYuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQmdcIjpcIk1haW5OYXZfX0JnX19fMk9PRXhcIixcIk1haW5OYXZcIjpcIk1haW5OYXZfX01haW5OYXZfX180V05oNlwiLFwiTWFpbk5hdl9faW5kaWNhdG9yXCI6XCJNYWluTmF2X19NYWluTmF2X19pbmRpY2F0b3JfX18zY1Rjd1wiLFwiTWFpbk5hdl9faW5kaWNhdG9yX2FjdGl2ZVwiOlwiTWFpbk5hdl9fTWFpbk5hdl9faW5kaWNhdG9yX2FjdGl2ZV9fXzIybUlDXCIsXCJNYWluTmF2X19pdGVtXCI6XCJNYWluTmF2X19NYWluTmF2X19pdGVtX19fMV9Gcm9cIixcIk1haW5OYXZfX2l0ZW1fYWN0aXZlXCI6XCJNYWluTmF2X19NYWluTmF2X19pdGVtX2FjdGl2ZV9fXzFvQnV1XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9NYWluTmF2L01haW5OYXYuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWFyY2hCYXIuY3NzJ1xuXG5jb25zdCB0eXBlRGVsYXkgPSA1MDBcblxuY2xhc3MgU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmhhbmRsZVR5cGUgPSB0aGlzLmhhbmRsZVR5cGUuYmluZCh0aGlzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lb3V0SWQ6IDBcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUeXBlICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS50aW1lb3V0SWQpXG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IHRoaXMuX2lucHV0LnZhbHVlXG5cbiAgICAgIGlmIChxdWVyeSkge1xuICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKHtcbiAgICAgICAgICBwYXRobmFtZTogYCR7UFVCTElDX1BBVEh9L3NlYXJjaGAsXG4gICAgICAgICAgcXVlcnk6IHtxOiBxdWVyeX1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYCR7UFVCTElDX1BBVEh9L3F1ZXN0aW9uc2ApXG4gICAgICB9XG4gICAgfSwgdHlwZURlbGF5KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZW91dElkfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3F1ZXJ5fSA9IHRoaXMucHJvcHMubG9jYXRpb25cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaEJhcn0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoQmFyX19pbnB1dH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3F1ZXJ5LnEgPyBxdWVyeS5xIDogJyd9XG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2lucHV0ID0gZWwgfX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUeXBlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwic2VhcmNoIGZvciBrZXl3b3JkcywgZS5nLiAncG9saW8gdmFjY2luZSdcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWFyY2hCYXJcIjpcIlNlYXJjaEJhcl9fU2VhcmNoQmFyX19fZHRkVGhcIixcIlNlYXJjaEJhcl9faW5wdXRcIjpcIlNlYXJjaEJhcl9fU2VhcmNoQmFyX19pbnB1dF9fX2d3UU1oXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWFyY2hCYXIvU2VhcmNoQmFyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ292ZXJJbWdcIjpcIkhlYWRlcl9fQ292ZXJJbWdfX18zMUE4QlwiLFwiQ292ZXJJbWdfX2JvZHlcIjpcIkhlYWRlcl9fQ292ZXJJbWdfX2JvZHlfX18yYk84clwiLFwiSGVhZGVyXCI6XCJIZWFkZXJfX0hlYWRlcl9fX29FMkZIXCIsXCJIZWFkZXJfX2xvZ29cIjpcIkhlYWRlcl9fSGVhZGVyX19sb2dvX19fMXJxVV9cIixcIkhlYWRlcl9fdGl0bGVcIjpcIkhlYWRlcl9fSGVhZGVyX190aXRsZV9fXzJ0aXhhXCIsXCJIZWFkZXJfX3N1YnRpdGxlXCI6XCJIZWFkZXJfX0hlYWRlcl9fc3VidGl0bGVfX19fWl9PQlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DdXJyZW50VXNlci5jc3MnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBDdXJyZW50VXNlciA9ICh7XG4gIHVzZXIsXG4gIGxvZ091dFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3VycmVudFVzZXJ9PlxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkN1cnJlbnRVc2VyX19uYW1lfT5sb2dnZWQgaW4gYXMge3VzZXIubmFtZX08L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtsb2dPdXR9PkxvZyBvdXQ8L0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlclxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBsb2dPdXQ6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKEN1cnJlbnRVc2VyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ3VycmVudFVzZXJcIjpcIkN1cnJlbnRVc2VyX19DdXJyZW50VXNlcl9fXzFXYVU2XCIsXCJDdXJyZW50VXNlcl9fbmFtZVwiOlwiQ3VycmVudFVzZXJfX0N1cnJlbnRVc2VyX19uYW1lX19fMTJoSVpcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0N1cnJlbnRVc2VyL0N1cnJlbnRVc2VyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2xvZ28uMmI5ZjZkYTJiMzY2NGRiZWM3YjFiY2YyYjkxYjYwOGEuc3ZnXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0hlYWRlci9sb2dvLnN2Z1xuICoqIG1vZHVsZSBpZCA9IDY0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5jc3MnXG5pbXBvcnQgRm9vdGVyTmF2IGZyb20gJy4uL0Zvb3Rlck5hdidcbmltcG9ydCB7V3JhcCwgR3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5cbmNvbnN0IGNvbnRhY3ROYXYgPSBbXG4gIHtcbiAgICBsYWJlbDogJ0plbm5pZmVyIFBvdHRlcicsXG4gICAgZW1waDogdHJ1ZVxuICB9LFxuICB7XG4gICAgbGFiZWw6ICcoMjA0KSAxNDAtMzg0OSdcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnanBvdHRlckB1bWFuaXRvYmEuY2EnXG4gIH1cbl1cblxuY29uc3QgRm9vdGVyID0gKHtcbiAgYWJvdXRQcm9qZWN0QXJ0aWNsZXMsXG4gIGFkZGl0aW9uYWxJbmZvcm1hdGlvbkFydGljbGVzXG59KSA9PiB7XG4gIGNvbnN0IGFib3V0TmF2ID0gYWJvdXRQcm9qZWN0QXJ0aWNsZXMubWFwKGEgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBsYWJlbDogYS50aXRsZSxcbiAgICAgIHBhdGg6IGAke1BVQkxJQ19QQVRIfS8ke2EudHlwZS5pZH0vJHthLnVybH1gXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGluZm9OYXYgPSBhZGRpdGlvbmFsSW5mb3JtYXRpb25BcnRpY2xlcy5tYXAoYSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiBhLnRpdGxlLFxuICAgICAgcGF0aDogYCR7UFVCTElDX1BBVEh9LyR7YS50eXBlLmlkfS8ke2EudXJsfWBcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkJnfT5cbiAgICAgIDxXcmFwIG1heFdpZHRoPVwiNDByZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJ9PlxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgPEdyaWRJdGVtPlxuICAgICAgICAgICAgICA8Rm9vdGVyTmF2IGl0ZW1zPXtjb250YWN0TmF2fSB0aXRsZT1cIkNvbnRhY3RcIiAvPlxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgPEdyaWRJdGVtPlxuICAgICAgICAgICAgICA8Rm9vdGVyTmF2IGl0ZW1zPXthYm91dE5hdn0gdGl0bGU9XCJBYm91dCBQcm9qZWN0XCIgLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgICAgICAgIDxHcmlkSXRlbT5cbiAgICAgICAgICAgICAgPEZvb3Rlck5hdiBpdGVtcz17aW5mb05hdn0gdGl0bGU9XCJBZGRpdGlvbmFsXCIgLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvV3JhcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFib3V0UHJvamVjdEFydGljbGVzOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoaSA9PiBpLmlzUHVibGlzaGVkICYmIGkudHlwZS5pZCA9PT0gJ2Fib3V0LXByb2plY3QnKSxcbiAgICAgIGFkZGl0aW9uYWxJbmZvcm1hdGlvbkFydGljbGVzOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoaSA9PiBpLmlzUHVibGlzaGVkICYmIGkudHlwZS5pZCA9PT0gJ2FkZGl0aW9uYWwtaW5mb3JtYXRpb24nKVxuICAgIH1cbiAgfVxuKShGb290ZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJnXCI6XCJGb290ZXJfX0JnX19fMTdpYnlcIixcIkZvb3RlclwiOlwiRm9vdGVyX19Gb290ZXJfX18yNjhQVFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQge0Jsb2NrLCBMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXJOYXYuY3NzJ1xuXG5jb25zdCBGb290ZXJOYXYgPSAoe1xuICBpdGVtcyxcbiAgdGl0bGVcbn0pID0+IHtcbiAgY29uc3QgbWVudSA9IGl0ZW1zLm1hcChpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtIGtleT17aS5sYWJlbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuRm9vdGVyTmF2X19pdGVtfSAke2kuZW1waCA/IHN0eWxlcy5Gb290ZXJOYXZfX2l0ZW1fZW1waCA6IG51bGx9YH0+XG4gICAgICAgICAge2kucGF0aFxuICAgICAgICAgICAgPyA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJOYXZfX2xpbmt9IHRvPXtpLnBhdGh9PntpLmxhYmVsfTwvTGluaz5cbiAgICAgICAgICAgIDogaS5sYWJlbFxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xpc3RJdGVtPlxuICAgIClcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9vdGVyTmF2fT5cbiAgICAgIDxCbG9jaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb290ZXJOYXZfX3RpdGxlfT57dGl0bGV9PC9kaXY+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICA8TGlzdD5cbiAgICAgICAge21lbnV9XG4gICAgICA8L0xpc3Q+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyTmF2XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Gb290ZXJOYXYvRm9vdGVyTmF2LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkZvb3Rlck5hdlwiOlwiRm9vdGVyTmF2X19Gb290ZXJOYXZfX18zOVczUlwiLFwiRm9vdGVyTmF2X190aXRsZVwiOlwiRm9vdGVyTmF2X19Gb290ZXJOYXZfX3RpdGxlX19fMWxPV2NcIixcIkZvb3Rlck5hdl9faXRlbVwiOlwiRm9vdGVyTmF2X19Gb290ZXJOYXZfX2l0ZW1fX18yZTRYMlwiLFwiRm9vdGVyTmF2X19saW5rXCI6XCJGb290ZXJOYXZfX0Zvb3Rlck5hdl9fbGlua19fX0tVT1poXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Gb290ZXJOYXYvRm9vdGVyTmF2LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtBbGVydH0gZnJvbSAnLi4vVUknXG5cbmNvbnN0IEZsYXNoTWVzc2FnZSA9ICh7XG4gIG1lc3NhZ2UsXG4gIHR5cGVcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWxlcnQgbWVzc2FnZT17bWVzc2FnZX0gdGhlbWU9e3R5cGV9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBzdGF0ZS5mbGFzaC5tZXNzYWdlLFxuICAgICAgdHlwZTogc3RhdGUuZmxhc2gudHlwZVxuICAgIH1cbiAgfVxuKShGbGFzaE1lc3NhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvYWRpbmcuY3NzJ1xuaW1wb3J0IHtTcGlubmVyfSBmcm9tICcuLi9VSSdcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxvYWRpbmd9PlxuICAgICAgPFNwaW5uZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTG9hZGluZ1wiOlwiTG9hZGluZ19fTG9hZGluZ19fXzNweWN6XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuY3NzXG4gKiogbW9kdWxlIGlkID0gNjUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7V3JhcCwgR3JpZCwgR3JpZEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9TaWRlQmFyJ1xuaW1wb3J0IFNpZGVOYXYgZnJvbSAnLi4vU2lkZU5hdidcbmltcG9ydCBCb2R5IGZyb20gJy4uL0JvZHknXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vTm90Rm91bmQnXG5pbXBvcnQge2dldEN1cnJlbnRTZWN0aW9uLCBpc1NlY3Rpb259IGZyb20gJy4uLy4uL2NvbmZpZydcblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5vdEZvdW5kOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge3BhcmFtczoge3NlY3Rpb25JZCwgYXJ0aWNsZUlkfSwgYXJ0aWNsZXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzU2VjdGlvbihzZWN0aW9uSWQpKSB7XG4gICAgICBpZiAoIWFydGljbGVJZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBub3RGb3VuZDogZmFsc2VcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYCR7UFVCTElDX1BBVEh9LyR7c2VjdGlvbklkfS8ke2FydGljbGVzWzBdLnVybH1gKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7cGFyYW1zOiB7c2VjdGlvbklkLCBhcnRpY2xlSWR9LCBhcnRpY2xlc30gPSBuZXdQcm9wc1xuXG4gICAgaWYgKGlzU2VjdGlvbihzZWN0aW9uSWQpKSB7XG4gICAgICBpZiAoIWFydGljbGVJZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBub3RGb3VuZDogZmFsc2VcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYCR7UFVCTElDX1BBVEh9LyR7c2VjdGlvbklkfS8ke2FydGljbGVzWzBdLnVybH1gKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5ub3RGb3VuZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5vdEZvdW5kIC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHtwYXJhbXM6IHtzZWN0aW9uSWR9LCBjaGlsZHJlbiwgYXJ0aWNsZXN9ID0gdGhpcy5wcm9wc1xuICAgICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBnZXRDdXJyZW50U2VjdGlvbihzZWN0aW9uSWQpXG5cbiAgICAgIGNvbnN0IG5hdkl0ZW1zID0gYXJ0aWNsZXMubWFwKGEgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHVybDogYCR7UFVCTElDX1BBVEh9LyR7YS50eXBlLmlkfS8ke2EudXJsfWAsXG4gICAgICAgICAgdGl0bGU6IGEudGl0bGVcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXA+XG4gICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICA8R3JpZEl0ZW0gc3Bhbj17MX0gb3V0T2Y9ezR9PlxuICAgICAgICAgICAgICA8U2lkZUJhcj5cbiAgICAgICAgICAgICAgICA8U2lkZU5hdiB0aXRsZT17Y3VycmVudFNlY3Rpb24ubGFiZWx9IG5hdkl0ZW1zPXtuYXZJdGVtc30gLz5cbiAgICAgICAgICAgICAgPC9TaWRlQmFyPlxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICAgICAgPEdyaWRJdGVtPlxuICAgICAgICAgICAgICA8Qm9keT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvQm9keT5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L1dyYXA+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7c2VjdGlvbklkfX0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFydGljbGVzOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEudHlwZS5pZCA9PT0gc2VjdGlvbklkKVxuICAgIH1cbiAgfVxuKShTZWN0aW9uKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGVCYXIuY3NzJ1xuXG5jb25zdCBTaWRlQmFyID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNpZGVCYXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTaWRlQmFyXCI6XCJTaWRlQmFyX19TaWRlQmFyX19fM28zTlVcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NpZGVCYXIvU2lkZUJhci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtIZWFkaW5nMn0gZnJvbSAnLi4vVHlwb2dyYXBoeSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGVOYXYuY3NzJ1xuXG5jb25zdCBTaWRlTmF2ID0gKHtcbiAgdGl0bGUsXG4gIG5hdkl0ZW1zXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVzLlNpZGVOYXZ9PlxuICAgICAgPEJsb2NrIG49ezJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNpZGVOYXZfX3RpdGxlfT5cbiAgICAgICAgICA8SGVhZGluZzI+e3RpdGxlfTwvSGVhZGluZzI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9CbG9jaz5cblxuICAgICAge25hdkl0ZW1zLm1hcChpID0+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89e2kudXJsfVxuICAgICAgICAgIGtleT17aS51cmx9XG4gICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuU2lkZU5hdl9faXRlbV9hY3RpdmV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuU2lkZU5hdl9faXRlbX0+XG4gICAgICAgICAge2kudGl0bGV9XG4gICAgICAgIDwvTGluaz5cbiAgICAgICl9XG4gICAgPC9hc2lkZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlTmF2XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TaWRlTmF2L1NpZGVOYXYuanN4XG4gKiovIiwiaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50J1xuaW1wb3J0IEhlYWRpbmcxIGZyb20gJy4vSGVhZGluZzEnXG5pbXBvcnQgSGVhZGluZzIgZnJvbSAnLi9IZWFkaW5nMidcbmltcG9ydCBIZWFkaW5nMyBmcm9tICcuL0hlYWRpbmczJ1xuXG5leHBvcnQge0NvbnRlbnQsIEhlYWRpbmcxLCBIZWFkaW5nMixcbiAgSGVhZGluZzN9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L1R5cG9ncmFwaHkuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250ZW50LmNzcydcblxuY29uc3QgQ29udGVudCA9ICh7XG4gIGNoaWxkcmVuLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgdGV4dCA9ICcnXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5Db250ZW50fSAke2V4dHJhQ2xhc3NOYW1lc31gfVxuICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHRleHR9fT48L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0NvbnRlbnQvQ29udGVudC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDb250ZW50XCI6XCJDb250ZW50X19Db250ZW50X19fMlJRMFVcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvQ29udGVudC9Db250ZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkaW5nMS5jc3MnXG5cbmNvbnN0IEhlYWRpbmcxID0gKHtcbiAgY2hpbGRyZW4sXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBsaW5rVG8gPSBudWxsXG59KSA9PiB7XG4gIGlmIChsaW5rVG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgdG89e2xpbmtUb30gY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZzFMaW5rfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmcxfSAke2V4dHJhQ2xhc3NOYW1lc31gfT57Y2hpbGRyZW59PC9oMT5cbiAgICAgIDwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy5IZWFkaW5nMX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+e2NoaWxkcmVufTwvaDE+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmcxXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmcxL0hlYWRpbmcxLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkhlYWRpbmcxXCI6XCJIZWFkaW5nMV9fSGVhZGluZzFfX18zUkdKRlwiLFwiSGVhZGluZzFMaW5rXCI6XCJIZWFkaW5nMV9fSGVhZGluZzFMaW5rX19fMjZRMF9cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzEvSGVhZGluZzEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRpbmcyLmNzcydcblxuY29uc3QgSGVhZGluZzIgPSAoe1xuICBjaGlsZHJlbixcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGxpbmtUbyA9IG51bGxcbn0pID0+IHtcbiAgaWYgKGxpbmtUbykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17bGlua1RvfSBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nMkxpbmt9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSGVhZGluZzJ9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PntjaGlsZHJlbn08L2gyPlxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGgyIGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmcyfSAke2V4dHJhQ2xhc3NOYW1lc31gfT57Y2hpbGRyZW59PC9oMj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZzJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1R5cG9ncmFwaHkvSGVhZGluZzIvSGVhZGluZzIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSGVhZGluZzJcIjpcIkhlYWRpbmcyX19IZWFkaW5nMl9fXzFsbUpLXCIsXCJIZWFkaW5nMkxpbmtcIjpcIkhlYWRpbmcyX19IZWFkaW5nMkxpbmtfX18xdWF4MFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMi9IZWFkaW5nMi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGluZzMuY3NzJ1xuXG5jb25zdCBIZWFkaW5nMyA9ICh7XG4gIGNoaWxkcmVuLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgbGlua1RvID0gbnVsbFxufSkgPT4ge1xuICBpZiAobGlua1RvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXtsaW5rVG99IGNsYXNzTmFtZT17YCR7c3R5bGVzLkhlYWRpbmczfSAke3N0eWxlcy5IZWFkaW5nM0xpbmt9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8aDIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSGVhZGluZzN9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PntjaGlsZHJlbn08L2gyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkaW5nM1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHlwb2dyYXBoeS9IZWFkaW5nMy9IZWFkaW5nMy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJIZWFkaW5nM1wiOlwiSGVhZGluZzNfX0hlYWRpbmczX19fMWtpZ0tcIixcIkhlYWRpbmczTGlua1wiOlwiSGVhZGluZzNfX0hlYWRpbmczTGlua19fXzFKQ21MXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UeXBvZ3JhcGh5L0hlYWRpbmczL0hlYWRpbmczLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2lkZU5hdlwiOlwiU2lkZU5hdl9fU2lkZU5hdl9fXzNPSU52XCIsXCJTaWRlTmF2X190aXRsZVwiOlwiU2lkZU5hdl9fU2lkZU5hdl9fdGl0bGVfX18zRDB4M1wiLFwiU2lkZU5hdl9faXRlbVwiOlwiU2lkZU5hdl9fU2lkZU5hdl9faXRlbV9fXzFqVjRWXCIsXCJTaWRlTmF2X19pdGVtX2FjdGl2ZVwiOlwiU2lkZU5hdl9fU2lkZU5hdl9faXRlbV9hY3RpdmVfX18xanBsUFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2lkZU5hdi9TaWRlTmF2LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwO1xuXG5jb25zdCBCb2R5ID0gKHtcbiAgcHYgPSA2LFxuICBwaCA9IDYsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBhZGRpbmdUb3A6IGAke3B2ICogYmFzZWxpbmV9cmVtYCxcbiAgICBwYWRkaW5nQm90dG9tOiBgJHtwdiAqIGJhc2VsaW5lfXJlbWAsXG4gICAgcGFkZGluZ0xlZnQ6IGAke3BoICogYmFzZWxpbmV9cmVtYCxcbiAgICBwYWRkaW5nUmlnaHQ6IGAke3BoICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9keVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQm9keS9Cb2R5LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05vdEZvdW5kLmNzcydcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5cbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTm90Rm91bmR9PlxuICAgICAgPEJsb2NrIG49ezN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5vdEZvdW5kX190aXRsZX0+NDA0PC9kaXY+XG4gICAgICA8L0Jsb2NrPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5vdEZvdW5kX19ib2R5fT5Tb3JyeSwgYnV0IHRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3IgZG9lcyBub3Qgc2VlbSB0byBleGlzdC4uLjwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJOb3RGb3VuZFwiOlwiTm90Rm91bmRfX05vdEZvdW5kX19fMzFDbGlcIixcIk5vdEZvdW5kX190aXRsZVwiOlwiTm90Rm91bmRfX05vdEZvdW5kX190aXRsZV9fX3J5VUVDXCIsXCJOb3RGb3VuZF9fYm9keVwiOlwiTm90Rm91bmRfX05vdEZvdW5kX19ib2R5X19fQzk5QnpcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0IGNvbnN0IGJsb2dwb3N0cyA9IHtcbiAgaWQ6ICdibG9nJyxcbiAgbGFiZWw6ICdCbG9nJ1xufVxuXG5leHBvcnQgY29uc3Qgc2VjdGlvbnMgPSBbXG4gIHtcbiAgICBpZDogJ2ZhcXMnLFxuICAgIGxhYmVsOiAnRkFRcydcbiAgfSxcbiAge1xuICAgIGlkOiAnYWJvdXQtdmFjY2luZXMnLFxuICAgIGxhYmVsOiAnQWJvdXQgVmFjY2luZXMnXG4gIH0sXG4gIHtcbiAgICBpZDogJ3ZhY2NpbmUtc2FmZXR5JyxcbiAgICBsYWJlbDogJ1ZhY2NpbmUgU2FmZXR5J1xuICB9LFxuICB7XG4gICAgaWQ6ICd2YWNjaW5hdGlvbi1zY2hlZHVsZScsXG4gICAgbGFiZWw6ICdWYWNjaW5hdGlvbiBTY2hlZHVsZSdcbiAgfSxcbiAge1xuICAgIGlkOiAnYWJvdXQtcHJvamVjdCcsXG4gICAgbGFiZWw6ICdBYm91dCBQcm9qZWN0J1xuICB9LFxuICB7XG4gICAgaWQ6ICdhZGRpdGlvbmFsLWluZm9ybWF0aW9uJyxcbiAgICBsYWJlbDogJ0FkZGl0aW9uYWwgSW5mb3JtYXRpb24nXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSBbXG4gIHtcbiAgICBpZDogJ2Rpc2Vhc2VzJyxcbiAgICBsYWJlbDogJ0Rpc2Vhc2VzJ1xuICB9LFxuICB7XG4gICAgaWQ6ICd2YWNjaW5lcycsXG4gICAgbGFiZWw6ICdWYWNjaW5lcydcbiAgfSxcbiAge1xuICAgIGlkOiAnaW5ncmlkaWVudHMnLFxuICAgIGxhYmVsOiAnSW5ncmlkaWVudHMnXG4gIH1cbl1cblxuZXhwb3J0IGNvbnN0IGlzU2VjdGlvbiA9IChpZCkgPT4ge1xuICByZXR1cm4gc2VjdGlvbnMubWFwKHMgPT4gcy5pZCkuaW5kZXhPZihpZCkgIT09IC0xXG59XG5cbmV4cG9ydCBjb25zdCBpc0Jsb2dwb3N0ID0gKGlkKSA9PiB7XG4gIHJldHVybiBpZCA9PT0gYmxvZ3Bvc3RzLmlkXG59XG5cbmV4cG9ydCBjb25zdCBpc0NhdGVnb3J5ID0gKGlkKSA9PiB7XG4gIHJldHVybiBjYXRlZ29yaWVzLm1hcChjID0+IGMuaWQpLmluZGV4T2YoaWQpICE9PSAtMVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFNlY3Rpb24gPSAoaWQpID0+IHtcbiAgcmV0dXJuIHNlY3Rpb25zLmNvbmNhdChjYXRlZ29yaWVzKS5jb25jYXQoW2Jsb2dwb3N0c10pLmZpbHRlcihzID0+IHMuaWQgPT09IGlkKVswXVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL0FydGljbGUnXG5pbXBvcnQgQ2F0ZWdvcnlEaXJlY3RvcnkgZnJvbSAnLi4vQ2F0ZWdvcnlEaXJlY3RvcnknXG5pbXBvcnQgVmFjY2luYXRpb25TY2hlZHVsZSBmcm9tICcuLi9WYWNjaW5hdGlvblNjaGVkdWxlJ1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuLi9Ob3RGb3VuZCdcblxuY29uc3QgU2VjdGlvbkFydGljbGUgPSAoe1xuICBhcnRpY2xlLFxuICBjaGlsZHJlbixcbiAgcGFyYW1zXG59KSA9PiB7XG4gIGlmIChhcnRpY2xlKSB7XG4gICAgaWYgKHBhcmFtcy5pdGVtSWQpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlblxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYXR0YWNobWVudCA9ICcnXG4gICAgICBzd2l0Y2ggKGFydGljbGUuYXR0YWNobWVudCkge1xuICAgICAgICBjYXNlICd2YWNjaW5lcyc6XG4gICAgICAgIGNhc2UgJ2Rpc2Vhc2VzJzpcbiAgICAgICAgY2FzZSAnaW5ncmlkaWVudHMnOlxuICAgICAgICAgIGF0dGFjaG1lbnQgPSAoXG4gICAgICAgICAgICA8Q2F0ZWdvcnlEaXJlY3RvcnlcbiAgICAgICAgICAgICAgc2VjdGlvbklkPXtwYXJhbXMuc2VjdGlvbklkfVxuICAgICAgICAgICAgICBhcnRpY2xlSWQ9e3BhcmFtcy5hcnRpY2xlSWR9XG4gICAgICAgICAgICAgIGNhdGVnb3J5PXthcnRpY2xlLmF0dGFjaG1lbnR9IC8+XG4gICAgICAgICAgKVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3NjaGVkdWxlJzpcbiAgICAgICAgICBhdHRhY2htZW50ID0gKFxuICAgICAgICAgICAgPFZhY2NpbmF0aW9uU2NoZWR1bGUgLz5cbiAgICAgICAgICApXG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QmxvY2sgbj17YXJ0aWNsZS5hdHRhY2htZW50ID8gMyA6IDB9PlxuICAgICAgICAgICAgPEFydGljbGUgYXJ0aWNsZT17YXJ0aWNsZX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAge2F0dGFjaG1lbnR9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5vdEZvdW5kIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7YXJ0aWNsZUlkfX0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFydGljbGU6IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQgJiYgYS51cmwgPT09IGFydGljbGVJZClbMF1cbiAgICB9XG4gIH1cbikoU2VjdGlvbkFydGljbGUpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uQXJ0aWNsZS9TZWN0aW9uQXJ0aWNsZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0hlYWRpbmcxLCBDb250ZW50fSBmcm9tICcuLi9UeXBvZ3JhcGh5J1xuXG5jb25zdCBBcnRpY2xlID0gKHtcbiAgYXJ0aWNsZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8QmxvY2sgbj17M30+XG4gICAgICAgIDxIZWFkaW5nMT57YXJ0aWNsZS50aXRsZX08L0hlYWRpbmcxPlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPENvbnRlbnQgdGV4dD17YXJ0aWNsZS5jb250ZW50fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FydGljbGUvQXJ0aWNsZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge1BhZ2VMaW5rfSBmcm9tICcuLi9VSSdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5cbmNvbnN0IENhdGVnb3J5RGlyZWN0b3J5ID0gKHtcbiAgaXRlbXMsXG4gIHNlY3Rpb25JZCxcbiAgYXJ0aWNsZUlkXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpc3Q+XG4gICAgICB7aXRlbXMubWFwKGkgPT5cbiAgICAgICAgPExpc3RJdGVtIGtleT17aS5faWR9PlxuICAgICAgICAgIDxQYWdlTGluayB0bz17YCR7UFVCTElDX1BBVEh9LyR7c2VjdGlvbklkfS8ke2FydGljbGVJZH0vJHtpLnVybH1gfT57aS50aXRsZX08L1BhZ2VMaW5rPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgKX1cbiAgICA8L0xpc3Q+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtjYXRlZ29yeX0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEudHlwZS5pZCA9PT0gY2F0ZWdvcnkpXG4gICAgfVxuICB9XG4pKENhdGVnb3J5RGlyZWN0b3J5KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnlEaXJlY3RvcnkvQ2F0ZWdvcnlEaXJlY3RvcnkuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtQYWdlTGlua30gZnJvbSAnLi4vVUknXG5pbXBvcnQge0xpc3QsIExpc3RJdGVtLCBNZWRpYSwgTWVkaWFGaWd1cmUsIE1lZGlhQm9keX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9WYWNjaW5hdGlvblNjaGVkdWxlLmNzcydcblxuY29uc3QgVmFjY2luYXRpb25TY2hlZHVsZSA9ICh7XG4gIGl0ZW1zLFxuICB2YWNjaW5lQXJ0aWNsZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2NoZWR1bGV9PlxuICAgICAgPExpc3Qgbj17MH0+XG4gICAgICAgIDxMaXN0SXRlbSBuPXswfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNjaGVkdWxlSXRlbX0gJHtzdHlsZXMuU2NoZWR1bGVJdGVtX2hlYWRlcn1gfT5cbiAgICAgICAgICAgIDxNZWRpYT5cbiAgICAgICAgICAgICAgPE1lZGlhRmlndXJlIHNwYW49ezF9IG91dE9mPXs1fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNjaGVkdWxlSXRlbV9fYWdlfT5cbiAgICAgICAgICAgICAgICAgIENoaWxkJ3MgYWdlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTWVkaWFGaWd1cmU+XG5cbiAgICAgICAgICAgICAgPE1lZGlhQm9keT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNjaGVkdWxlSXRlbV9fdmFjY2luZXN9PlxuICAgICAgICAgICAgICAgICAgU3VnZ2VzdGVkIHZhY2NpbmF0aW9uKHMpXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTWVkaWFCb2R5PlxuICAgICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICB7aXRlbXMubWFwKChpLCBrKSA9PlxuICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2t9IG49ezB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TY2hlZHVsZUl0ZW19PlxuICAgICAgICAgICAgICA8TWVkaWE+XG4gICAgICAgICAgICAgICAgPE1lZGlhRmlndXJlIHNwYW49ezF9IG91dE9mPXs1fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2NoZWR1bGVJdGVtX19hZ2V9PlxuICAgICAgICAgICAgICAgICAgICB7aS5hZ2V9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L01lZGlhRmlndXJlPlxuXG4gICAgICAgICAgICAgICAgPE1lZGlhQm9keT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2NoZWR1bGVJdGVtX192YWNjaW5lc30+XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0IG49ezAuNX0+XG4gICAgICAgICAgICAgICAgICAgICAge2kudmFjY2luZXMubWFwKCh2LCBqKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17an0gbj17MC41fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VMaW5rIHRvPXtgJHtQVUJMSUNfUEFUSH0vJHt2YWNjaW5lQXJ0aWNsZS50eXBlLmlkfS8ke3ZhY2NpbmVBcnRpY2xlLnVybH0vJHt2LnVybH1gfT57di50aXRsZX08L1BhZ2VMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L01lZGlhQm9keT5cbiAgICAgICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICl9XG4gICAgICA8L0xpc3Q+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc3RhdGUuc2NoZWR1bGUuaXRlbXMsXG4gICAgICB2YWNjaW5lQXJ0aWNsZTogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGkgPT4gaS5pc1B1Ymxpc2hlZCAmJiBpLmF0dGFjaG1lbnQgPT09ICd2YWNjaW5lcycpWzBdXG4gICAgfVxuICB9XG4pKFZhY2NpbmF0aW9uU2NoZWR1bGUpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9WYWNjaW5hdGlvblNjaGVkdWxlL1ZhY2NpbmF0aW9uU2NoZWR1bGUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2NoZWR1bGVcIjpcIlZhY2NpbmF0aW9uU2NoZWR1bGVfX1NjaGVkdWxlX19fMWp1Z0JcIixcIlNjaGVkdWxlSXRlbVwiOlwiVmFjY2luYXRpb25TY2hlZHVsZV9fU2NoZWR1bGVJdGVtX19fM3htdGJcIixcIlNjaGVkdWxlSXRlbV9fYWdlXCI6XCJWYWNjaW5hdGlvblNjaGVkdWxlX19TY2hlZHVsZUl0ZW1fX2FnZV9fXzFiQUkxXCIsXCJTY2hlZHVsZUl0ZW1fX3ZhY2NpbmVzXCI6XCJWYWNjaW5hdGlvblNjaGVkdWxlX19TY2hlZHVsZUl0ZW1fX3ZhY2NpbmVzX19fbUhBNElcIixcIlNjaGVkdWxlSXRlbV9oZWFkZXJcIjpcIlZhY2NpbmF0aW9uU2NoZWR1bGVfX1NjaGVkdWxlSXRlbV9oZWFkZXJfX18xd2RyNFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVmFjY2luYXRpb25TY2hlZHVsZS9WYWNjaW5hdGlvblNjaGVkdWxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHthbmltYXRlU2Nyb2xsfSBmcm9tICdyZWFjdC1zY3JvbGwnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWN0aW9uQ2F0ZWdvcnlJdGVtLmNzcydcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL0FydGljbGUnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vTm90Rm91bmQnXG5cbmNsYXNzIFNlY3Rpb25DYXRlZ29yeUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgYW5pbWF0ZVNjcm9sbC5zY3JvbGxUbyh0aGlzLl9lbGVtZW50Lm9mZnNldFRvcCAtIDEwMCwge1xuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcbiAgICBhbmltYXRlU2Nyb2xsLnNjcm9sbFRvKHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wIC0gMTAwLCB7XG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2l0ZW0sIHBhcmFtczoge3NlY3Rpb25JZCwgYXJ0aWNsZUlkfX0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXRlbSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19IGNsYXNzTmFtZT17c3R5bGVzLlNlY3Rpb25DYXRlZ29yeUl0ZW19PlxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICB0bz17YCR7UFVCTElDX1BBVEh9LyR7c2VjdGlvbklkfS8ke2FydGljbGVJZH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuU2VjdGlvbkNhdGVnb3J5SXRlbV9fYmFja2xpbmt9PmJhY2s8L0xpbms+XG5cbiAgICAgICAgICA8QXJ0aWNsZSBhcnRpY2xlPXtpdGVtfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5vdEZvdW5kIC8+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7aXRlbUlkfX0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQgJiYgYS51cmwgPT09IGl0ZW1JZClbMF1cbiAgICB9XG4gIH1cbikoU2VjdGlvbkNhdGVnb3J5SXRlbSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25DYXRlZ29yeUl0ZW0vU2VjdGlvbkNhdGVnb3J5SXRlbS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWN0aW9uQ2F0ZWdvcnlJdGVtXCI6XCJTZWN0aW9uQ2F0ZWdvcnlJdGVtX19TZWN0aW9uQ2F0ZWdvcnlJdGVtX19fMXRSb2RcIixcIlNlY3Rpb25DYXRlZ29yeUl0ZW1fX2JhY2tsaW5rXCI6XCJTZWN0aW9uQ2F0ZWdvcnlJdGVtX19TZWN0aW9uQ2F0ZWdvcnlJdGVtX19iYWNrbGlua19fXzF4bTRzXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uQ2F0ZWdvcnlJdGVtL1NlY3Rpb25DYXRlZ29yeUl0ZW0uY3NzXG4gKiogbW9kdWxlIGlkID0gNjkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IHtDb250ZW50LCBIZWFkaW5nMX0gZnJvbSAnLi4vVHlwb2dyYXBoeSdcbmltcG9ydCB7V3JhcCwgQmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vVUknXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CbG9nLmNzcydcblxuY29uc3QgQmxvZyA9ICh7XG4gIGJsb2dwb3N0cyxcbiAgcGFyYW1zLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBpZiAocGFyYW1zLmJsb2dwb3N0SWQpIHtcbiAgICByZXR1cm4gY2hpbGRyZW5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXAgbWF4V2lkdGg9XCI0NXJlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxuICAgICAgICAgIHtibG9ncG9zdHMubWFwKHAgPT5cbiAgICAgICAgICAgIDxCbG9jayBrZXk9e3AuX2lkfSBuPXs2fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbnRyeX0+XG4gICAgICAgICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbnRyeV9fZGF0ZX0+XG4gICAgICAgICAgICAgICAgICAgIFBvc3RlZCBvbiA8VGltZSB2YWx1ZT17bmV3IERhdGUocC5jcmVhdGVkQXQpfSBmb3JtYXQ9XCJNTU0gRG8sIGg6bUFcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXsxLjV9PlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcxIGxpbmtUbz17YCR7UFVCTElDX1BBVEh9L2Jsb2cvJHtwLnVybH1gfT57cC50aXRsZX08L0hlYWRpbmcxPlxuICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVudHJ5X19ib2R5fT5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQgdGV4dD17cC5zbmlwcGV0fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW50cnlfX2Zvb3Rlcn0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHRvPXtgJHtQVUJMSUNfUEFUSH0vYmxvZy8ke3AudXJsfWB9PlJlYWQgZnVsbCBwb3N0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvV3JhcD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBibG9ncG9zdHM6IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihhID0+IGEuaXNQdWJsaXNoZWQgJiYgYS50eXBlLmlkID09PSAnYmxvZ3Bvc3RzJylcbiAgICB9XG4gIH1cbikoQmxvZylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0Jsb2cvQmxvZy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdlXCI6XCJCbG9nX19wYWdlX19fc1FwX2ZcIixcImVudHJ5XCI6XCJCbG9nX19lbnRyeV9fX3p6WnpuXCIsXCJlbnRyeV9fYm9keVwiOlwiQmxvZ19fZW50cnlfX2JvZHlfX18zc0NfQVwiLFwiZW50cnlfX2Zvb3RlclwiOlwiQmxvZ19fZW50cnlfX2Zvb3Rlcl9fXzNrRkwwXCIsXCJlbnRyeV9fZGF0ZVwiOlwiQmxvZ19fZW50cnlfX2RhdGVfX18zN0FnY1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQmxvZy9CbG9nLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcbmltcG9ydCB7YW5pbWF0ZVNjcm9sbH0gZnJvbSAncmVhY3Qtc2Nyb2xsJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtIZWFkaW5nMSwgQ29udGVudH0gZnJvbSAnLi4vVHlwb2dyYXBoeSdcbmltcG9ydCB7V3JhcCwgQmxvY2ssIEZsZXh9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vTm90Rm91bmQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CbG9ncG9zdC5jc3MnXG5cbmNsYXNzIEJsb2dwb3N0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGFuaW1hdGVTY3JvbGwuc2Nyb2xsVG8odGhpcy5fZWxlbWVudC5vZmZzZXRUb3AgLSAxMDAsIHtcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7YmxvZ3Bvc3R9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGJsb2dwb3N0KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcCBtYXhXaWR0aD1cIjQ1cmVtXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9ncG9zdH0gcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fT5cbiAgICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9ncG9zdF9fZGF0ZX0+UG9zdGVkIG9uIDxUaW1lIHZhbHVlPXtuZXcgRGF0ZShibG9ncG9zdC5jcmVhdGVkQXQpfSBmb3JtYXQ9XCJNTU0gRG8sIGg6bUFcIiAvPjwvZGl2PlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICA8QmxvY2sgbj17MS41fT5cbiAgICAgICAgICAgICAgPEhlYWRpbmcxPntibG9ncG9zdC50aXRsZX08L0hlYWRpbmcxPlxuICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgPEJsb2NrIG49ezZ9PlxuICAgICAgICAgICAgICA8Q29udGVudCB0ZXh0PXtibG9ncG9zdC5jb250ZW50fSAvPlxuICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRvPXtgJHtQVUJMSUNfUEFUSH0vYmxvZ2B9PmJhY2sgdG8gYWxsIHBvc3RzPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvV3JhcD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE5vdEZvdW5kIC8+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7YmxvZ3Bvc3RJZH19ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBibG9ncG9zdDogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGEgPT4gYS5pc1B1Ymxpc2hlZCAmJiBhLnVybCA9PT0gYmxvZ3Bvc3RJZClbMF1cbiAgICB9XG4gIH1cbikoQmxvZ3Bvc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9CbG9ncG9zdC9CbG9ncG9zdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJibG9ncG9zdFwiOlwiQmxvZ3Bvc3RfX2Jsb2dwb3N0X19fMzJqWUZcIixcImJsb2dwb3N0X19kYXRlXCI6XCJCbG9ncG9zdF9fYmxvZ3Bvc3RfX2RhdGVfX18zd3BHVVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQmxvZ3Bvc3QvQmxvZ3Bvc3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNzk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUXVlc3Rpb25zLmNzcydcblxuaW1wb3J0IHtCbG9jaywgV3JhcCwgR3JpZCwgR3JpZEl0ZW0sIE1lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtIZWFkaW5nMX0gZnJvbSAnLi4vVHlwb2dyYXBoeSdcbmltcG9ydCBTaWRlTmF2IGZyb20gJy4uL1NpZGVOYXYnXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuLi9TaWRlQmFyJ1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vQm9keSdcbmltcG9ydCBBc2tRdWVzdGlvblNpZGUgZnJvbSAnLi4vQXNrUXVlc3Rpb25TaWRlJ1xuaW1wb3J0IFF1ZXN0aW9uRm9ybSBmcm9tICcuLi9RdWVzdGlvbkZvcm0nXG5cbmltcG9ydCBpbWcgZnJvbSAnLi9qZW4uanBnJ1xuXG5jb25zdCBRdWVzdGlvbnMgPSAoe1xuICBmYXFzLFxuICBjaGlsZHJlbixcbiAgcGFyYW1zXG59KSA9PiB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gZmFxcy5tYXAoZiA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybDogYCR7UFVCTElDX1BBVEh9L3F1ZXN0aW9ucy8ke2YudXJsfWAsXG4gICAgICB0aXRsZTogZi50aXRsZVxuICAgIH1cbiAgfSlcblxuICBsZXQgY29udGVudCA9ICcnXG4gIGlmIChwYXJhbXMuZmFxSWQpIHtcbiAgICBjb250ZW50ID0gY2hpbGRyZW5cbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbnNJbnRyb30+XG4gICAgICAgIDxCbG9jayBuPXszfT5cbiAgICAgICAgICA8TWVkaWEgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPE1lZGlhRmlndXJlIG49ezN9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbnNJbnRyb19faW1hZ2V9IC8+XG4gICAgICAgICAgICA8L01lZGlhRmlndXJlPlxuXG4gICAgICAgICAgICA8TWVkaWFCb2R5PlxuICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPEhlYWRpbmcxPkhhdmUgYSBxdWVzdGlvbj88L0hlYWRpbmcxPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUXVlc3Rpb25zSW50cm9fX3RleHR9PlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RHIuIEplbm5pZmVyIFBvdHRlcjwvc3Ryb25nPiwgb3VyIHZhY2NpbmUgc3BlY2lhbGlzdCw8YnIgLz53aWxsIGJlIGdsYWQgdG8gYXNzaXN0IHlvdSB3aXRoIHlvdXIgcXVlc3Rpb25zXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9NZWRpYUJvZHk+XG4gICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8UXVlc3Rpb25Gb3JtIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxHcmlkSXRlbSBzcGFuPXsxfSBvdXRPZj17M30+XG4gICAgICAgICAgPFNpZGVCYXI+XG4gICAgICAgICAgICB7cGFyYW1zLmZhcUlkXG4gICAgICAgICAgICA/IDxCbG9jayBuPXs2fT5cbiAgICAgICAgICAgICAgPEFza1F1ZXN0aW9uU2lkZSAvPlxuICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8U2lkZU5hdlxuICAgICAgICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrZWQgUXVlc3Rpb25zXCJcbiAgICAgICAgICAgICAgbmF2SXRlbXM9e25hdkl0ZW1zfSAvPlxuICAgICAgICAgIDwvU2lkZUJhcj5cbiAgICAgICAgPC9HcmlkSXRlbT5cblxuICAgICAgICA8R3JpZEl0ZW0+XG4gICAgICAgICAgPEJvZHk+XG4gICAgICAgICAgICB7Y29udGVudH1cbiAgICAgICAgICA8L0JvZHk+XG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9XcmFwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBmYXFzOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEudHlwZS5pZCA9PT0gJ2ZhcXMnKVxuICAgIH1cbiAgfVxuKShRdWVzdGlvbnMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbnMvUXVlc3Rpb25zLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlF1ZXN0aW9uc0ludHJvXCI6XCJRdWVzdGlvbnNfX1F1ZXN0aW9uc0ludHJvX19fMWctSnZcIixcIlF1ZXN0aW9uc0ludHJvX19pbWFnZVwiOlwiUXVlc3Rpb25zX19RdWVzdGlvbnNJbnRyb19faW1hZ2VfX18xWEFQWlwiLFwiUXVlc3Rpb25zSW50cm9fX3RleHRcIjpcIlF1ZXN0aW9uc19fUXVlc3Rpb25zSW50cm9fX3RleHRfX18xRjl1S1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zL1F1ZXN0aW9ucy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Fza1F1ZXN0aW9uU2lkZS5jc3MnXG5pbXBvcnQge01lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlLCBCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcblxuaW1wb3J0IGltZyBmcm9tICcuL2plbi5qcGcnXG5cbmNvbnN0IEFza1F1ZXN0aW9uU2lkZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb25TaWRlfT5cbiAgICAgIDxNZWRpYSBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIDxNZWRpYUZpZ3VyZSBuPXsyfT5cbiAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9e3N0eWxlcy5Bc2tRdWVzdGlvblNpZGVfX2ltYWdlfSAvPlxuICAgICAgICA8L01lZGlhRmlndXJlPlxuXG4gICAgICAgIDxNZWRpYUJvZHk+XG4gICAgICAgICAgPEJsb2NrIG49ezEuNX0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb25TaWRlX190aXRsZX0+SmVubmlmZXIgUG90dGVyPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXNrUXVlc3Rpb25TaWRlX190ZXh0fT5PdXIgdmFjY2luZSBzcGVjaWFsaXN0IHdpbGwgYmUgZ2xhZCB0byBhc3Npc3QgeW91PC9kaXY+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCdXR0b24gdG89e2Ake1BVQkxJQ19QQVRIfS9xdWVzdGlvbnNgfT5Bc2sgYSBRdWVzdGlvbjwvQnV0dG9uPlxuICAgICAgICA8L01lZGlhQm9keT5cbiAgICAgIDwvTWVkaWE+XG4gICAgPC9hc2lkZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc2tRdWVzdGlvblNpZGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9Bc2tRdWVzdGlvblNpZGUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXNrUXVlc3Rpb25TaWRlXCI6XCJBc2tRdWVzdGlvblNpZGVfX0Fza1F1ZXN0aW9uU2lkZV9fXzhGNDYxXCIsXCJBc2tRdWVzdGlvblNpZGVfX2ltYWdlXCI6XCJBc2tRdWVzdGlvblNpZGVfX0Fza1F1ZXN0aW9uU2lkZV9faW1hZ2VfX19iNXE4T1wiLFwiQXNrUXVlc3Rpb25TaWRlX190ZXh0XCI6XCJBc2tRdWVzdGlvblNpZGVfX0Fza1F1ZXN0aW9uU2lkZV9fdGV4dF9fXzNRNzVrXCIsXCJBc2tRdWVzdGlvblNpZGVfX3RpdGxlXCI6XCJBc2tRdWVzdGlvblNpZGVfX0Fza1F1ZXN0aW9uU2lkZV9fdGl0bGVfX18xSnpwWFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQXNrUXVlc3Rpb25TaWRlL0Fza1F1ZXN0aW9uU2lkZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9qZW4uM2JiMzVhN2M2OWU1M2M4M2EyZDM5Y2RmMTZiZjZlY2YuanBnXCI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Fza1F1ZXN0aW9uU2lkZS9qZW4uanBnXG4gKiogbW9kdWxlIGlkID0gODA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIFRleHRJbnB1dCwgVGV4dEFyZWF9IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtjcmVhdGVRdWVzdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvcXVlc3Rpb25zQWN0aW9ucydcblxuY2xhc3MgUXVlc3Rpb25Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXJyb3JzOiB7fSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcG9zdGVyTmFtZTogcHJvcHMudXNlci5uYW1lLFxuICAgICAgICBwb3N0ZXJFbWFpbDogcHJvcHMudXNlci5lbWFpbCxcbiAgICAgICAgcXVlc3Rpb246ICcnXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnMsIGlzVXBkYXRpbmd9ID0gbmV3UHJvcHMucXVlc3Rpb25cblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBvc3Rlck5hbWU6IHRoaXMucHJvcHMudXNlci5uYW1lLFxuICAgICAgICAgICAgcG9zdGVyRW1haWw6IHRoaXMucHJvcHMudXNlci5lbWFpbCxcbiAgICAgICAgICAgIHF1ZXN0aW9uOiAnJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3RXJyb3JzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IG5ld0RhdGEsXG4gICAgICBlcnJvcnM6IG5ld0Vycm9yc1xuICAgIH0pXG4gIH1cblxuICBjcmVhdGUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVRdWVzdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBjcmVhdGVRdWVzdGlvbih0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc1VwZGF0aW5nfSA9IHRoaXMucHJvcHMucXVlc3Rpb25cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBvc3Rlck5hbWV9XG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucG9zdGVyTmFtZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBDYXNleVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ3Bvc3Rlck5hbWUnLCB2KX0gLz5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPFRleHRJbnB1dCBsYWJlbD1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wb3N0ZXJFbWFpbH1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBjYXNleUBnbWFpbC5jb21cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBjaGFuZ2VDYWxsYmFjaz17KHYpID0+IHRoaXMuY2hhbmdlKCdwb3N0ZXJFbWFpbCcsIHYpfSAvPlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxCbG9jayBuPXsxLjV9PlxuICAgICAgICAgIDxUZXh0QXJlYSBsYWJlbD1cIllvdXIgcXVlc3Rpb25cIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5xdWVzdGlvbn1cbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5xdWVzdGlvbn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiB3aGljaCB2YWNjaW5lcyBhcmUgc2FmZSBmb3Iga2lkcyB1bmRlciA1IHllYXJzP1wiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIGNoYW5nZUNhbGxiYWNrPXsodikgPT4gdGhpcy5jaGFuZ2UoJ3F1ZXN0aW9uJywgdil9IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfT5Bc2sgcXVlc3Rpb248L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlcixcbiAgICAgIHF1ZXN0aW9uOiBzdGF0ZS5xdWVzdGlvblxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVRdWVzdGlvbjogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlUXVlc3Rpb24oZGF0YSwgJ1lvdSBxdWVzdGlvbiBoYXMgYmVlbiBzZW50LCB3ZSB3aWxsIGdldCBiYWNrIHRvIHlvdSB2ZXJ5IHNvb24gOiknKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoUXVlc3Rpb25Gb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25Gb3JtL1F1ZXN0aW9uRm9ybS5qc3hcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvamVuLjNiYjM1YTdjNjllNTNjODNhMmQzOWNkZjE2YmY2ZWNmLmpwZ1wiO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnMvamVuLmpwZ1xuICoqIG1vZHVsZSBpZCA9IDgwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4uL05vdEZvdW5kJ1xuaW1wb3J0IEFydGljbGUgZnJvbSAnLi4vQXJ0aWNsZSdcblxuY29uc3QgRmFxID0gKHtcbiAgZmFxXG59KSA9PiB7XG4gIGlmIChmYXEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEFydGljbGUgYXJ0aWNsZT17ZmFxfSAvPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5vdEZvdW5kIC8+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7ZmFxSWR9fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgZmFxOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBhLmlzUHVibGlzaGVkICYmIGEudXJsID09PSBmYXFJZClbMF1cbiAgICB9XG4gIH1cbikoRmFxKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRmFxL0ZhcS5qc3hcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQVhBO0FBREE7QUFEQTs7Ozs7OztBQ3RCQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUF2QkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVhBO0FBYUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQVpBO0FBY0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWEE7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUxBO0FBUUE7QUFDQTtBQUNBOzs7O0FBekRBO0FBQ0E7QUEyREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFWQTtBQURBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUE1QkE7QUFEQTtBQXFDQTs7OztBQWhHQTtBQUNBO0FBa0dBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ3JDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUMzQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7OztBQ2xEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFTQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQU1BO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ2pFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ3ZGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFEQTtBQWlCQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFnQkE7Ozs7QUFsQ0E7QUFDQTtBQW9DQTs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU5BO0FBREE7QUFlQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFlQTs7OztBQXhDQTtBQUNBO0FBMENBOzs7Ozs7O0FDaERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQVRBO0FBTEE7QUFEQTtBQURBO0FBc0JBO0FBdkJBO0FBSEE7QUFEQTtBQWdDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBREE7QUFEQTtBQURBO0FBSEE7QUFEQTtBQURBO0FBaUJBO0FBQ0E7Ozs7Ozs7O0FDOURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSkE7QUFPQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7Ozs7QUF6Q0E7QUFDQTtBQTJDQTs7Ozs7OztBQ25EQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQURBO0FBWUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7QUN2Q0E7QUFDQTs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFEQTtBQUlBO0FBREE7QUFDQTtBQUlBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVRBO0FBREE7QUFEQTtBQURBO0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTs7Ozs7OztBQ25FQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQUNBOzs7Ozs7OztBQ25DQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQVBBO0FBREE7QUFnQkE7QUFDQTs7OztBQS9FQTtBQUNBO0FBaUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFQQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3RCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3BCQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQWZBO0FBQ0E7QUFpQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFMQTtBQVFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUEE7QUFEQTtBQURBO0FBa0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBREE7QUFEQTtBQVBBO0FBREE7QUFEQTtBQURBO0FBbkJBO0FBREE7QUFnREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7Ozs7Ozs7QUNwRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBSUE7QUFMQTtBQVFBO0FBQ0E7QUFHQTtBQUNBOzs7O0FBL0JBO0FBQ0E7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7Ozs7Ozs7QUNsREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFqQkE7QUFEQTtBQURBO0FBREE7QUFEQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7OztBQzFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQWZBO0FBREE7QUF1QkE7QUFDQTtBQUdBO0FBQ0E7Ozs7QUF4Q0E7QUFDQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7OztBQzlEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFMQTtBQUxBO0FBREE7QUFrQkE7QUFuQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFWQTtBQURBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBaEJBO0FBREE7QUF5QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7Ozs7O0FDekZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQUxBO0FBREE7QUFpQkE7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQ0E7QUFRQTtBQUNBO0FBYkE7QUFjQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQTVCQTtBQWlDQTs7OztBQTdGQTtBQUNBO0FBK0ZBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7OztBQ3BIQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9