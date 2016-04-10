(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapLib"] = factory(require("react"));
	else
		root["ReactBootstrapLib"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].e;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			e: {},
/******/ 			i: moduleId,
/******/ 			l: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.e, module, module.e, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.e;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	module.e = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.e) {
			module.e = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.e = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var React = _interopRequireDefault(_react).default;
	
	var Component = _react.Component;
	
	var _classnames = __webpack_require__(1);
	
	var classNames = _interopRequireDefault(_classnames).default;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pane = function (_Component) {
	    _inherits(Pane, _Component);
	
	    function Pane() {
	        _classCallCheck(this, Pane);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Pane).apply(this, arguments));
	    }
	
	    _createClass(Pane, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var active = _props.active;
	            var disabled = _props.disabled;
	
	            var classes = classNames(Pane.CLASSES, this.props.className, { active: active, disabled: disabled });
	
	            return React.createElement(
	                'div',
	                { className: classes },
	                this.props.children
	            );
	        }
	    }], [{
	        key: 'CLASSES',
	        get: function get() {
	            return ['tab-pane'];
	        }
	    }]);
	
	    return Pane;
	}(Component);
	
	exports.default = Pane;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var React = _interopRequireDefault(_react).default;
	
	var Component = _react.Component;
	
	var _classnames = __webpack_require__(1);
	
	var classNames = _interopRequireDefault(_classnames).default;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tab = function (_Component) {
	    _inherits(Tab, _Component);
	
	    function Tab() {
	        _classCallCheck(this, Tab);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).apply(this, arguments));
	    }
	
	    _createClass(Tab, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var active = _props.active;
	            var disabled = _props.disabled;
	
	            var classes = classNames(Tab.CLASSES, this.props.className, { active: active, disabled: disabled });
	
	            return React.createElement(
	                'button',
	                { className: classes },
	                this.props.children
	            );
	        }
	    }], [{
	        key: 'CLASSES',
	        get: function get() {
	            return ['btn', 'btn-link', 'btn-sm', 'nav-link'];
	        }
	    }]);
	
	    return Tab;
	}(Component);
	
	exports.default = Tab;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PopoverContent = exports.PopoverTitle = exports.Popover = exports.Collapse = exports.Tab = exports.Pane = exports.Tabs = undefined;
	
	var _Tabs = __webpack_require__(6);
	
	var Tabs = _interopRequireDefault(_Tabs).default;
	
	var _Pane = __webpack_require__(2);
	
	var Pane = _interopRequireDefault(_Pane).default;
	
	var _Tab = __webpack_require__(3);
	
	var Tab = _interopRequireDefault(_Tab).default;
	
	var _Collapse = __webpack_require__(5);
	
	var Collapse = _interopRequireDefault(_Collapse).default;
	
	var _Popover = __webpack_require__(7);
	
	var Popover = _interopRequireDefault(_Popover).default;
	
	var _PopoverTitle = __webpack_require__(9);
	
	var PopoverTitle = _interopRequireDefault(_PopoverTitle).default;
	
	var _PopoverContent = __webpack_require__(8);
	
	var PopoverContent = _interopRequireDefault(_PopoverContent).default;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Tabs = Tabs;
	exports.Pane = Pane;
	exports.Tab = Tab;
	exports.Collapse = Collapse;
	exports.Popover = Popover;
	exports.PopoverTitle = PopoverTitle;
	exports.PopoverContent = PopoverContent;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var React = _interopRequireDefault(_react).default;
	
	var Component = _react.Component;
	var Children = _react.Children;
	var PropTypes = _react.PropTypes;
	
	var _Tab = __webpack_require__(3);
	
	var Tab = _interopRequireDefault(_Tab).default;
	
	var _Pane = __webpack_require__(2);
	
	var Pane = _interopRequireDefault(_Pane).default;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Tabs = function (_Component) {
	    _inherits(Tabs, _Component);
	
	    _createClass(Tabs, null, [{
	        key: 'propTypes',
	        get: function get() {
	            return {
	                activeTab: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	            };
	        }
	    }]);
	
	    function Tabs(props) {
	        _classCallCheck(this, Tabs);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tabs).call(this, props));
	
	        _this.state = { activeTab: Number(props.activeTab) || 0 };
	        return _this;
	    }
	
	    _createClass(Tabs, [{
	        key: 'createSelectHandler',
	        value: function createSelectHandler(key) {
	            var _this2 = this;
	
	            return function () {
	                _this2.setState({ activeTab: key });
	            };
	        }
	    }, {
	        key: 'createTab',
	        value: function createTab(tab, key) {
	            var uniqueKey = 'tab_' + key;
	            var enhancedTab = React.cloneElement(tab, {
	                active: this.state.activeTab === key
	            });
	
	            return React.createElement(
	                'li',
	                { className: 'nav-item', key: uniqueKey, onClick: this.createSelectHandler(key) },
	                enhancedTab
	            );
	        }
	    }, {
	        key: 'createPane',
	        value: function createPane(pane, key, amountOfTabs) {
	            var uniqueKey = 'pane_' + key;
	
	            return React.cloneElement(pane, {
	                active: this.state.activeTab === key - amountOfTabs,
	                key: uniqueKey
	            });
	        }
	    }, {
	        key: 'processChildren',
	        value: function processChildren(children) {
	            var _this3 = this;
	
	            var tabs = [];
	            var panes = [];
	
	            Children.forEach(children, function (child, index) {
	                if (child.type === Tab) {
	                    var tab = _this3.createTab(child, index);
	                    tabs.push(tab);
	                } else if (child.type === Pane) {
	                    var pane = _this3.createPane(child, index, tabs.length);
	                    panes.push(pane);
	                }
	            });
	
	            return { tabs: tabs, panes: panes };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _processChildren = this.processChildren(this.props.children);
	
	            var tabs = _processChildren.tabs;
	            var panes = _processChildren.panes;
	
	
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(
	                    'ul',
	                    { className: 'nav nav-tabs' },
	                    tabs
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'tab-content' },
	                    panes
	                )
	            );
	        }
	    }]);
	
	    return Tabs;
	}(Component);
	
	exports.default = Tabs;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(0);
	
	var React = _interopRequireDefault(_react).default;
	
	var Component = _react.Component;
	
	var _classnames = __webpack_require__(1);
	
	var classNames = _interopRequireDefault(_classnames).default;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Popover = function (_Component) {
	    _inherits(Popover, _Component);
	
	    function Popover() {
	        _classCallCheck(this, Popover);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Popover).apply(this, arguments));
	    }
	
	    _createClass(Popover, [{
	        key: 'render',
	        value: function render() {
	            var direction = this.props.direction;
	
	            var directionClass = 'popover-' + direction;
	
	            var classes = classNames(Popover.CLASSES, this.props.className, directionClass);
	            var arrowClasses = classNames(Popover.ARROW_CLASSES);
	
	            console.log(classNames('foo', { foo: true, bar: true }));
	
	            return React.createElement(
	                'div',
	                { className: classes },
	                React.createElement('div', { className: arrowClasses }),
	                this.props.children
	            );
	        }
	    }], [{
	        key: 'CLASSES',
	        get: function get() {
	            return ['popover'];
	        }
	    }, {
	        key: 'ARROW_CLASSES',
	        get: function get() {
	            return ['popover-arrow'];
	        }
	    }]);
	
	    return Popover;
	}(Component);
	
	exports.default = Popover;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(0);
	
	var React = _interopRequireDefault(_react).default;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	    return React.createElement(
	        "div",
	        { className: "popover-content" },
	        props.children
	    );
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(0);
	
	var React = _interopRequireDefault(_react).default;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	    return React.createElement(
	        "h3",
	        { className: "popover-title" },
	        props.children
	    );
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.e = __webpack_require__(4);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMDNmYTBiZmYyNmNiOThhM2ZjOCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwidW1kXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifSIsIndlYnBhY2s6Ly8vLi9+L2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25hdnMvdGFicy9QYW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9uYXZzL3RhYnMvVGFiLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbmF2cy90YWJzL1RhYnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcG92ZXIvUG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wb3Zlci9Qb3BvdmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9wb3Zlci9Qb3BvdmVyVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBLDBDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsa0JBQWlCLHNCQUFzQjtB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Ozs7Ozs7OztrQ0FTUjtpQkFDRSxZQUFhLEtBQUssS0FBTCxDQUFiLFVBREY7O0FBRUwsaUJBQU0sOEJBQTRCLFNBQTVCLENBRkQ7O0FBSUwsaUJBQU0sVUFBVSxXQUFXLFFBQVEsT0FBUixFQUFpQixLQUFLLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLGNBQWxELENBQVYsQ0FKRDtBQUtMLGlCQUFNLGVBQWUsV0FBVyxRQUFRLGFBQVIsQ0FBMUIsQ0FMRDs7QUFPTCxxQkFBUSxHQUFSLENBQVksV0FBVyxLQUFYLEVBQWtCLEVBQUMsS0FBSyxJQUFMLEVBQVcsS0FBSyxJQUFMLEVBQTlCLENBQVosRUFQSzs7QUFTTCxvQkFDSTs7bUJBQUssV0FBVyxPQUFYLEVBQUw7aUJBQ0ksNkJBQUssV0FBVyxZQUFYLEVBQUwsQ0FESjtpQkFFSyxLQUFLLEtBQUwsQ0FBVyxRQUFYO2NBSFQsQ0FUSzs7Ozs2QkFSWTtBQUNqQixvQkFBTyxDQUFDLFNBQUQsQ0FBUCxDQURpQjs7Ozs2QkFJTTtBQUN2QixvQkFBTyxDQUFDLGVBQUQsQ0FBUCxDQUR1Qjs7OztZQUxWO0dBQWdCOzttQkFBaEIsUTs7Ozs7Ozs7Ozs7O0FDSHJCOztLQUFPOzs7O21CQUVRLFVBQUMsS0FBRCxFQUFXO0FBQ3RCLFlBQ0k7O1dBQUssV0FBVSxpQkFBVixFQUFMO1NBQ0ssTUFBTSxRQUFOO01BRlQsQ0FEc0I7RUFBWCxDOzs7Ozs7Ozs7Ozs7QUNGZjs7S0FBTzs7OzttQkFFUSxVQUFDLEtBQUQsRUFBVztBQUN0QixZQUNJOztXQUFJLFdBQVUsZUFBVixFQUFKO1NBQ0ssTUFBTSxRQUFOO01BRlQsQ0FEc0I7RUFBWCxDIiwiZmlsZSI6ImxpYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0Qm9vdHN0cmFwTGliXCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlJlYWN0Qm9vdHN0cmFwTGliXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZTtcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZToge30sXG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZSwgbW9kdWxlLCBtb2R1bGUuZSwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5lO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZTAzZmEwYmZmMjZjYjk4YTNmYzhcbiAqKi8iLCJtb2R1bGUuZSA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwidW1kXCI6XCJyZWFjdFwiLFwiYW1kXCI6XCJyZWFjdFwifVxuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTYgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vY2xhc3NuYW1lcy9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBDTEFTU0VTKCkge1xyXG4gICAgICAgIHJldHVybiBbJ3RhYi1wYW5lJ107XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHthY3RpdmUsIGRpc2FibGVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoUGFuZS5DTEFTU0VTLCB0aGlzLnByb3BzLmNsYXNzTmFtZSwge2FjdGl2ZSwgZGlzYWJsZWR9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbmF2cy90YWJzL1BhbmUuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBDTEFTU0VTKCkge1xyXG4gICAgICAgIHJldHVybiBbJ2J0bicsICdidG4tbGluaycsICdidG4tc20nLCAnbmF2LWxpbmsnXTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7ICAgIFxyXG4gICAgICAgIGNvbnN0IHthY3RpdmUsIGRpc2FibGVkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgY2xhc3NlcyA9IGNsYXNzTmFtZXMoVGFiLkNMQVNTRVMsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB7YWN0aXZlLCBkaXNhYmxlZH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlc30+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9idXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9uYXZzL3RhYnMvVGFiLmpzXG4gKiovIiwiaW1wb3J0IFRhYnMgZnJvbSAnLi9uYXZzL3RhYnMvVGFicyc7XHJcbmltcG9ydCBQYW5lIGZyb20gJy4vbmF2cy90YWJzL1BhbmUnO1xyXG5pbXBvcnQgVGFiIGZyb20gJy4vbmF2cy90YWJzL1RhYic7XHJcblxyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnLi9jb2xsYXBzZS9Db2xsYXBzZSc7XHJcblxyXG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuL3BvcG92ZXIvUG9wb3Zlcic7XHJcbmltcG9ydCBQb3BvdmVyVGl0bGUgZnJvbSAnLi9wb3BvdmVyL1BvcG92ZXJUaXRsZSc7XHJcbmltcG9ydCBQb3BvdmVyQ29udGVudCBmcm9tICcuL3BvcG92ZXIvUG9wb3ZlckNvbnRlbnQnO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIFRhYnMsIFBhbmUsIFRhYiwgXHJcbiAgICBDb2xsYXBzZSwgXHJcbiAgICBQb3BvdmVyLCBQb3BvdmVyVGl0bGUsIFBvcG92ZXJDb250ZW50XHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBDaGlsZHJlbiwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgVGFiIGZyb20gJy4vVGFiJztcclxuaW1wb3J0IFBhbmUgZnJvbSAnLi9QYW5lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBwcm9wVHlwZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWN0aXZlVGFiOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7YWN0aXZlVGFiOiBOdW1iZXIocHJvcHMuYWN0aXZlVGFiKSB8fCAwfTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTZWxlY3RIYW5kbGVyKGtleSkge1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjoga2V5fSk7ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYWIodGFiLCBrZXkpIHtcclxuICAgICAgICBjb25zdCB1bmlxdWVLZXkgPSBgdGFiXyR7a2V5fWA7XHJcbiAgICAgICAgY29uc3QgZW5oYW5jZWRUYWIgPSBSZWFjdC5jbG9uZUVsZW1lbnQodGFiLCB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogKHRoaXMuc3RhdGUuYWN0aXZlVGFiID09PSBrZXkpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17dW5pcXVlS2V5fSBvbkNsaWNrPXt0aGlzLmNyZWF0ZVNlbGVjdEhhbmRsZXIoa2V5KX0+XHJcbiAgICAgICAgICAgICAgICB7ZW5oYW5jZWRUYWJ9XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYW5lKHBhbmUsIGtleSwgYW1vdW50T2ZUYWJzKSB7XHJcbiAgICAgICAgY29uc3QgdW5pcXVlS2V5ID0gYHBhbmVfJHtrZXl9YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChwYW5lLCB7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogKHRoaXMuc3RhdGUuYWN0aXZlVGFiID09PSBrZXkgLSBhbW91bnRPZlRhYnMpLFxyXG4gICAgICAgICAgICBrZXk6IHVuaXF1ZUtleVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NDaGlsZHJlbihjaGlsZHJlbikge1xyXG4gICAgICAgIGNvbnN0IHRhYnMgPSBbXTtcclxuICAgICAgICBjb25zdCBwYW5lcyA9IFtdO1xyXG5cclxuICAgICAgICBDaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBUYWIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYiA9IHRoaXMuY3JlYXRlVGFiKGNoaWxkLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0YWJzLnB1c2godGFiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZC50eXBlID09PSBQYW5lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYW5lID0gdGhpcy5jcmVhdGVQYW5lKGNoaWxkLCBpbmRleCwgdGFicy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgcGFuZXMucHVzaChwYW5lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge3RhYnMsIHBhbmVzfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge3RhYnMsIHBhbmVzfSA9IHRoaXMucHJvY2Vzc0NoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFic1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWJzfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cGFuZXN9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9uYXZzL3RhYnMvVGFicy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldCBDTEFTU0VTKCkge1xyXG4gICAgICAgIHJldHVybiBbJ3BvcG92ZXInXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IEFSUk9XX0NMQVNTRVMoKSB7XHJcbiAgICAgICAgcmV0dXJuIFsncG9wb3Zlci1hcnJvdyddO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7ZGlyZWN0aW9ufSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uQ2xhc3MgPSBgcG9wb3Zlci0ke2RpcmVjdGlvbn1gO1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lcyhQb3BvdmVyLkNMQVNTRVMsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCBkaXJlY3Rpb25DbGFzcyk7XHJcbiAgICAgICAgY29uc3QgYXJyb3dDbGFzc2VzID0gY2xhc3NOYW1lcyhQb3BvdmVyLkFSUk9XX0NMQVNTRVMpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhjbGFzc05hbWVzKCdmb28nLCB7Zm9vOiB0cnVlLCBiYXI6IHRydWV9KSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXthcnJvd0NsYXNzZXN9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcG9wb3Zlci9Qb3BvdmVyLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcG92ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wb3BvdmVyL1BvcG92ZXJDb250ZW50LmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwicG9wb3Zlci10aXRsZVwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9oMz5cclxuICAgICk7XHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3BvcG92ZXIvUG9wb3ZlclRpdGxlLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==