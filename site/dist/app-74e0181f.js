/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(2);
	
	var _director = __webpack_require__(6);
	
	var _app = __webpack_require__(7);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _routes = __webpack_require__(24);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	new _app2.default().$inject(document.getElementById('app'));
	
	var router = (0, _director.Router)(_routes2.default);
	router.init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	/******/(function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};
		/******/
		/******/ // The require function
		/******/function __webpack_require__(moduleId) {
			/******/
			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;
			/******/
			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };
			/******/
			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
			/******/
			/******/ // Flag the module as loaded
			/******/module.loaded = true;
			/******/
			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}
		/******/
		/******/
		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;
		/******/
		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;
		/******/
		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "dist/";
		/******/
		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	})(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {
	
		'use strict';
	
		__webpack_require__(2);
	
		__webpack_require__(8);
	
		__webpack_require__(9);
	
		__webpack_require__(13);
	
		__webpack_require__(17);
	
		__webpack_require__(21);
	
		__webpack_require__(28);
	
		__webpack_require__(32);
	
		__webpack_require__(36);
	
		__webpack_require__(40);
	
		__webpack_require__(44);
	
		__webpack_require__(48);
	
		__webpack_require__(52);
	
		__webpack_require__(56);
	
		__webpack_require__(60);
	
		__webpack_require__(64);
	
		__webpack_require__(68);
	
		__webpack_require__(72);
	
		__webpack_require__(76);
	
		/***/
	},,
	/* 1 */
	/* 2 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(3);
		__regular_script__ = __webpack_require__(5);
		__regular_template__ = __webpack_require__(6);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 3 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},,
	/* 4 */
	/* 5 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
	
		var rAF = function (w) {
			var raf = w.requestAnimationFrame || w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame;
	
			if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {
				(function () {
					var lastTime = 0;
	
					raf = function raf(cb) {
						var nowtime = Date.now(),
						    timeout = Math.max(16 - (nowtime - lastTime), 0);
						setTimeout(function () {
							cb(lastTime = nowtime + timeout);
						}, timeout);
					};
				})();
			}
			return raf;
		}(window || {});
	
		exports.default = {
			name: 'Button',
			init: function init(data) {
				var _this = this;
	
				var handleAnimationEnd = function handleAnimationEnd() {
					if (_this.data.pressed !== false) {
						_this.data.pressed = false;
						_this.$update();
					}
				};
	
				Regular.dom.on(this.$refs.w, 'webkitAnimationEnd', handleAnimationEnd);
			},
			onClick: function onClick(e) {
				var _this2 = this;
	
				this.$emit('emit');
				this.$emit('click');
	
				var target = this.$refs.b;
				var pageX = e.pageX;
				var pageY = e.pageY;
	
				var rect = target.getBoundingClientRect();
				var top = rect.top;
				var left = rect.left;
				var width = rect.width;
	
				var offsetX = pageX - left;
				var offsetY = pageY - top;
	
				this.data.waveTop = offsetY - width / 2;
				this.data.waveLeft = offsetX - width / 2;
				this.data.waveWidth = width;
				this.data.waveHeight = width;
	
				this.data.pressed = false;
				this.$update();
	
				rAF(function () {
					_this2.data.pressed = true;
					_this2.$update();
				});
			}
		};
	
		/***/
	},
	/* 6 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "button", "attrs": [{ "type": "attribute", "name": "ref", "value": "b" }, { "type": "attribute", "name": "class", "value": { "type": "expression", "body": "['r-button ',c._sg_('primary', d, e)?'r-button-primary':'r-button-basic'].join('')", "constant": false, "setbody": false } }, { "type": "attribute", "name": "on-mouseup", "value": { "type": "expression", "body": "c['onClick'](c._sg_('$event', d, e))", "constant": false, "setbody": false } }, { "type": "attribute", "name": "_r-5065414c", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": { "type": "expression", "body": "['r-button-wave  ',c._sg_('pressed', d, e)?'pressed':'r-button-wave-hidden'].join('')", "constant": false, "setbody": false } }, { "type": "attribute", "name": "style", "value": { "type": "expression", "body": "['width: ',c._sg_('waveWidth', d, e),'px;height: ',c._sg_('waveHeight', d, e),'px;top: ',c._sg_('waveTop', d, e),'px;left: ',c._sg_('waveLeft', d, e),'px;'].join('')", "constant": false, "setbody": false } }, { "type": "attribute", "name": "ref", "value": "w" }, { "type": "attribute", "name": "_r-5065414c", "value": "" }], "children": [] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-button-text" }, { "type": "attribute", "name": "_r-5065414c", "value": "" }], "children": [{ "type": "text", "text": "\n\t\t" }, { "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }, { "type": "text", "text": "\n\t" }] }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 7 */
	/***/function (module, exports) {
	
		module.exports = Regular;
	
		/***/
	},
	/* 8 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 9 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(10);
		__regular_script__ = __webpack_require__(11);
		__regular_template__ = __webpack_require__(12);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 10 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 11 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Table',
			config: function config(data) {
				data.dataSource = data.dataSource;
				this.$update();
			}
		};
	
		/***/
	},
	/* 12 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "table", "attrs": [{ "type": "attribute", "name": "class", "value": "r-table" }, { "type": "attribute", "name": "_r-3e91cdbe", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "element", "tag": "thead", "attrs": [{ "type": "attribute", "name": "class", "value": "r-table-head" }, { "type": "attribute", "name": "_r-3e91cdbe", "value": "" }], "children": [{ "type": "text", "text": "\n\t\t" }, { "type": "element", "tag": "tr", "attrs": [{ "type": "attribute", "name": "_r-3e91cdbe", "value": "" }], "children": [{ "type": "text", "text": "\n\t\t\t" }, { "type": "list", "sequence": { "type": "expression", "body": "c._sg_('fields', d, e)", "constant": false, "setbody": "c._ss_('fields',p_,d, '=', 1)" }, "alternate": [], "variable": "field", "body": [{ "type": "text", "text": "\n\t\t\t\t" }, { "type": "element", "tag": "th", "attrs": [{ "type": "attribute", "name": "_r-3e91cdbe", "value": "" }], "children": [{ "type": "expression", "body": "c._sg_('label', c._sg_('field', d, e))", "constant": false, "setbody": "c._ss_('label',p_,c._sg_('field', d, e), '=', 0)" }] }, { "type": "text", "text": "\n\t\t\t" }] }, { "type": "text", "text": "\n\t\t" }] }, { "type": "text", "text": "\n\t" }] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "tbody", "attrs": [{ "type": "attribute", "name": "_r-3e91cdbe", "value": "" }], "children": [{ "type": "text", "text": "\n\t\t" }, { "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }, { "type": "text", "text": "\n\t\t" }, { "type": "list", "sequence": { "type": "expression", "body": "c._sg_('dataSource', d, e)", "constant": false, "setbody": "c._ss_('dataSource',p_,d, '=', 1)" }, "alternate": [], "variable": "ds", "body": [{ "type": "text", "text": "\n\t\t" }, { "type": "element", "tag": "TableRow", "attrs": [{ "type": "attribute", "name": "data-source", "value": { "type": "expression", "body": "c._sg_('ds', d, e)", "constant": false, "setbody": "c._ss_('ds',p_,d, '=', 1)" } }, { "type": "attribute", "name": "fields", "value": { "type": "expression", "body": "c._sg_('fields', d, e)", "constant": false, "setbody": "c._ss_('fields',p_,d, '=', 1)" } }, { "type": "attribute", "name": "_r-3e91cdbe", "value": "" }], "children": [] }, { "type": "text", "text": "\n\t\t" }] }, { "type": "text", "text": "\n\t" }] }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 13 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(14);
		__regular_script__ = __webpack_require__(15);
		__regular_template__ = __webpack_require__(16);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 14 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 15 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Input',
			onChange: function onChange() {
				this.$emit('emit', this.$refs.v.value);
				this.$emit('change', this.$refs.v.value);
			}
		};
	
		/***/
	},
	/* 16 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "input", "attrs": [{ "type": "attribute", "name": "class", "value": "r-input" }, { "type": "attribute", "name": "type", "value": "text" }, { "type": "attribute", "name": "value", "value": { "type": "expression", "body": "c._sg_('value', d, e)", "constant": false, "setbody": "c._ss_('value',p_,d, '=', 1)" } }, { "type": "attribute", "name": "placeholder", "value": { "type": "expression", "body": "c._sg_('placeholder', d, e)", "constant": false, "setbody": "c._ss_('placeholder',p_,d, '=', 1)" } }, { "type": "attribute", "name": "on-input", "value": { "type": "expression", "body": "c['onChange']()", "constant": false, "setbody": false } }, { "type": "attribute", "name": "ref", "value": "v" }, { "type": "attribute", "name": "_r-7f084694", "value": "" }] }];
	
		/***/
	},
	/* 17 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(18);
		__regular_script__ = __webpack_require__(19);
		__regular_template__ = __webpack_require__(20);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 18 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 19 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Textarea'
		};
	
		/***/
	},
	/* 20 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "textarea", "attrs": [{ "type": "attribute", "name": "class", "value": "r-textarea" }, { "type": "attribute", "name": "_r-2609235a", "value": "" }], "children": [] }];
	
		/***/
	},
	/* 21 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(22);
		__regular_script__ = __webpack_require__(23);
		__regular_template__ = __webpack_require__(27);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 22 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 23 */
	/***/function (module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
	
		var _stringify = __webpack_require__(24);
	
		var _stringify2 = _interopRequireDefault(_stringify);
	
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}
	
		exports.default = {
			name: 'TableRow',
			config: function config(data) {},
			renderColumns: function renderColumns(field) {
				var rendered = '';
				if (typeof field.render === 'function') {
					rendered = field.render(this.data.dataSource[field.key], this.data.dataSource);
				}
	
				if (!rendered) {
					rendered = this.data.dataSource[field.key];
				}
	
				if (typeof rendered !== 'string') {
					rendered = (0, _stringify2.default)(rendered);
				}
	
				return rendered;
			},
			onEmit: function onEmit(i) {
				console.log('table row emit', i);
			}
		};
	
		/***/
	},
	/* 24 */
	/***/function (module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(25), __esModule: true };
	
		/***/
	},
	/* 25 */
	/***/function (module, exports, __webpack_require__) {
	
		var core = __webpack_require__(26),
		    $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
		module.exports = function stringify(it) {
			// eslint-disable-line no-unused-vars
			return $JSON.stringify.apply($JSON, arguments);
		};
	
		/***/
	},
	/* 26 */
	/***/function (module, exports) {
	
		var core = module.exports = { version: '2.4.0' };
		if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	
		/***/
	},
	/* 27 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "tr", "attrs": [{ "type": "attribute", "name": "class", "value": "r-tr" }, { "type": "attribute", "name": "_r-f060096a", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "list", "sequence": { "type": "expression", "body": "c._sg_('fields', d, e)", "constant": false, "setbody": "c._ss_('fields',p_,d, '=', 1)" }, "alternate": [], "variable": "field", "body": [{ "type": "text", "text": "\n\t\t" }, { "type": "element", "tag": "td", "attrs": [{ "type": "attribute", "name": "_r-f060096a", "value": "" }], "children": [{ "type": "template", "content": { "type": "expression", "body": "c['renderColumns'](c._sg_('field', d, e))", "constant": false, "setbody": false } }] }, { "type": "text", "text": "\n\t" }] }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 28 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(29);
		__regular_script__ = __webpack_require__(30);
		__regular_template__ = __webpack_require__(31);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 29 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 30 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Spinner'
		};
	
		/***/
	},
	/* 31 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "spinner" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "rect1" }], "children": [] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "rect2" }], "children": [] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "rect3" }], "children": [] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "rect4" }], "children": [] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "rect5" }], "children": [] }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 32 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(33);
		__regular_script__ = __webpack_require__(34);
		__regular_template__ = __webpack_require__(35);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 33 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 34 */
	/***/function (module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
	
		var _button = __webpack_require__(2);
	
		var _button2 = _interopRequireDefault(_button);
	
		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}
	
		exports.default = {
			name: 'Modal',
			onCancel: function onCancel() {
				this.$emit('cancel');
			},
			onOk: function onOk() {
				this.$emit('ok');
			}
		};
	
		/***/
	},
	/* 35 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-modal-mask" }, { "type": "attribute", "name": "_r-939a0d88", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-modal" }, { "type": "attribute", "name": "_r-939a0d88", "value": "" }], "children": [{ "type": "text", "text": "\n\t\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-modal-hd" }, { "type": "attribute", "name": "_r-939a0d88", "value": "" }], "children": [{ "type": "text", "text": "\n\t\t\t" }, { "type": "expression", "body": "c._sg_('title', d, e)", "constant": false, "setbody": "c._ss_('title',p_,d, '=', 1)" }, { "type": "text", "text": "\n\t\t" }] }, { "type": "text", "text": "\n\t\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-modal-bd" }, { "type": "attribute", "name": "_r-939a0d88", "value": "" }], "children": [{ "type": "text", "text": "\n\t\t\t" }, { "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }, { "type": "text", "text": "\n\t\t" }] }, { "type": "text", "text": "\n\t\t" }, { "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-modal-actions" }, { "type": "attribute", "name": "_r-939a0d88", "value": "" }], "children": [{ "type": "text", "text": "\n\t\t\t" }, { "type": "element", "tag": "Button", "attrs": [{ "type": "attribute", "name": "on-click", "value": { "type": "expression", "body": "c['onCancel']()", "constant": false, "setbody": false } }, { "type": "attribute", "name": "_r-939a0d88", "value": "" }], "children": [{ "type": "expression", "body": "c._sg_('cancelText', d, e)||'取消'", "constant": false, "setbody": false }] }, { "type": "text", "text": "\n\t\t\t" }, { "type": "element", "tag": "Button", "attrs": [{ "type": "attribute", "name": "primary" }, { "type": "attribute", "name": "on-click", "value": { "type": "expression", "body": "c['onOk']()", "constant": false, "setbody": false } }, { "type": "attribute", "name": "_r-939a0d88", "value": "" }], "children": [{ "type": "expression", "body": "c._sg_('okText', d, e)||'确认'", "constant": false, "setbody": false }] }, { "type": "text", "text": "\n\t\t" }] }, { "type": "text", "text": "\n\t" }] }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 36 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(37);
		__regular_script__ = __webpack_require__(38);
		__regular_template__ = __webpack_require__(39);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 37 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 38 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Checkbox',
			config: function config() {
				if (this.$outer && this.$outer.ping) {
					this.$outer.ping(this);
				}
			},
			onClick: function onClick() {
				if (this.$outer && this.$outer.onCheckboxChange) {
					this.$outer.onCheckboxChange(this);
				} else {
					this.data.checked = !this.data.checked;
					this.$update();
					this.$emit('change', this.data.checked);
				}
			}
		};
	
		/***/
	},
	/* 39 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "span", "attrs": [{ "type": "attribute", "name": "class", "value": { "type": "expression", "body": "['r-checkbox ',c._sg_('checked', d, e)?'r-checkbox-checked':''].join('')", "constant": false, "setbody": false } }, { "type": "attribute", "name": "on-click", "value": { "type": "expression", "body": "c['onClick']()", "constant": false, "setbody": false } }, { "type": "attribute", "name": "_r-b5d5c50c", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "element", "tag": "span", "attrs": [{ "type": "attribute", "name": "class", "value": "r-checkbox-inner" }, { "type": "attribute", "name": "_r-b5d5c50c", "value": "" }], "children": [] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "span", "attrs": [{ "type": "attribute", "name": "class", "value": "r-checkbox-text" }, { "type": "attribute", "name": "_r-b5d5c50c", "value": "" }], "children": [{ "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }] }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 40 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(41);
		__regular_script__ = __webpack_require__(42);
		__regular_template__ = __webpack_require__(43);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 41 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 42 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'CheckboxGroup',
			config: function config() {
				this.checkboxChildren = [];
			},
			onCheckboxChange: function onCheckboxChange(target) {
				target.data.checked = !target.data.checked;
				target.$update();
	
				var checkedValues = this.checkboxChildren.filter(function (v) {
					return v.data.checked === true;
				}).map(function (v) {
					return v.data.value;
				});
	
				this.$emit('change', checkedValues);
			},
			ping: function ping(target) {
				this.checkboxChildren.push(target);
				if (target.data.value === this.data.checked) {
					target.data.checked = true;
					target.$update();
				}
			}
		};
	
		/***/
	},
	/* 43 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }];
	
		/***/
	},
	/* 44 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(45);
		__regular_script__ = __webpack_require__(46);
		__regular_template__ = __webpack_require__(47);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 45 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 46 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Radio',
			config: function config() {
				if (this.$outer && this.$outer.ping) {
					this.$outer.ping(this);
				}
			},
			onClick: function onClick() {
				if (this.$outer && this.$outer.onRadioChange) {
					this.$outer.onRadioChange(this);
				} else {
					if (!this.data.checked) {
						this.$emit('change', true);
					}
					this.data.checked = true;
					this.$update();
				}
			}
		};
	
		/***/
	},
	/* 47 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "span", "attrs": [{ "type": "attribute", "name": "class", "value": { "type": "expression", "body": "['r-radio ',c._sg_('checked', d, e)?'r-radio-checked':''].join('')", "constant": false, "setbody": false } }, { "type": "attribute", "name": "on-click", "value": { "type": "expression", "body": "c['onClick']()", "constant": false, "setbody": false } }, { "type": "attribute", "name": "_r-5e6d0b58", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "element", "tag": "span", "attrs": [{ "type": "attribute", "name": "class", "value": "r-radio-inner" }, { "type": "attribute", "name": "_r-5e6d0b58", "value": "" }], "children": [] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "span", "attrs": [{ "type": "attribute", "name": "class", "value": "r-radio-text" }, { "type": "attribute", "name": "_r-5e6d0b58", "value": "" }], "children": [{ "type": "text", "text": "\n\t\t" }, { "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }, { "type": "text", "text": "\n\t" }] }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 48 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(49);
		__regular_script__ = __webpack_require__(50);
		__regular_template__ = __webpack_require__(51);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 49 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 50 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'RadioGroup',
			config: function config() {
				this.radioChildren = [];
			},
			onRadioChange: function onRadioChange(target) {
				target.data.checked = true;
				this.radioChildren.filter(function (v) {
					return v !== target;
				}).forEach(function (v) {
					v.data.checked = false;
				});
				this.$update();
	
				this.$emit('change', target.data.value);
			},
			ping: function ping(target) {
				this.radioChildren.push(target);
				if (target.data.value === this.data.checked) {
					target.data.checked = true;
					target.$update();
				}
			}
		};
	
		/***/
	},
	/* 51 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }];
	
		/***/
	},
	/* 52 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(53);
		__regular_script__ = __webpack_require__(54);
		__regular_template__ = __webpack_require__(55);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 53 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 54 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Switch',
			config: function config() {},
			onMousedown: function onMousedown() {
				this.data.showMask = true;
				this.$update();
			},
			onMouseup: function onMouseup() {
				this.data.showMask = false;
				this.$update();
			},
			onClick: function onClick() {
				this.data.checked = !this.data.checked;
				this.$update();
	
				this.$emit('change', this.data.checked);
				this.$emit('emit', this.data.checked);
			}
		};
	
		/***/
	},
	/* 55 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "span", "attrs": [{ "type": "attribute", "name": "class", "value": { "type": "expression", "body": "['r-switch ',c._sg_('checked', d, e)?'r-switch-checked':''].join('')", "constant": false, "setbody": false } }, { "type": "attribute", "name": "on-mousedown", "value": { "type": "expression", "body": "c['onMousedown']()", "constant": false, "setbody": false } }, { "type": "attribute", "name": "on-mouseup", "value": { "type": "expression", "body": "c['onMouseup']()", "constant": false, "setbody": false } }, { "type": "attribute", "name": "on-click", "value": { "type": "expression", "body": "c['onClick']()", "constant": false, "setbody": false } }, { "type": "attribute", "name": "_r-d92a4dcc", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "element", "tag": "span", "attrs": [{ "type": "attribute", "name": "class", "value": { "type": "expression", "body": "['r-switch-circle-mask ',c._sg_('showMask', d, e)?'r-switch-show-mask':''].join('')", "constant": false, "setbody": false } }, { "type": "attribute", "name": "_r-d92a4dcc", "value": "" }], "children": [] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "span", "attrs": [{ "type": "attribute", "name": "class", "value": "r-switch-block" }, { "type": "attribute", "name": "_r-d92a4dcc", "value": "" }], "children": [] }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 56 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(57);
		__regular_script__ = __webpack_require__(58);
		__regular_template__ = __webpack_require__(59);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 57 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 58 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Select',
			config: function config() {},
			init: function init() {}
		};
	
		/***/
	},
	/* 59 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "text", "text": "\n" }, { "type": "element", "tag": "select", "attrs": [{ "type": "attribute", "name": "class", "value": "r-select" }, { "type": "attribute", "name": "_r-d1e06fcc", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "element", "tag": "option", "attrs": [{ "type": "attribute", "name": "value", "value": "" }, { "type": "attribute", "name": "_r-d1e06fcc", "value": "" }], "children": [{ "type": "text", "text": "Option 1" }] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "option", "attrs": [{ "type": "attribute", "name": "value", "value": "" }, { "type": "attribute", "name": "_r-d1e06fcc", "value": "" }], "children": [{ "type": "text", "text": "Option 2" }] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "option", "attrs": [{ "type": "attribute", "name": "value", "value": "" }, { "type": "attribute", "name": "_r-d1e06fcc", "value": "" }], "children": [{ "type": "text", "text": "Option 3" }] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "option", "attrs": [{ "type": "attribute", "name": "value", "value": "" }, { "type": "attribute", "name": "_r-d1e06fcc", "value": "" }], "children": [{ "type": "text", "text": "Option 4" }] }, { "type": "text", "text": "\n\t" }, { "type": "element", "tag": "option", "attrs": [{ "type": "attribute", "name": "value", "value": "" }, { "type": "attribute", "name": "_r-d1e06fcc", "value": "" }], "children": [{ "type": "text", "text": "Option 5" }] }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 60 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(61);
		__regular_script__ = __webpack_require__(62);
		__regular_template__ = __webpack_require__(63);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 61 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 62 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Option',
			config: function config() {
				console.log(this.$outer);
			},
			init: function init() {}
		};
	
		/***/
	},
	/* 63 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-option" }, { "type": "attribute", "name": "_r-4ba2b713", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 64 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(65);
		__regular_script__ = __webpack_require__(66);
		__regular_template__ = __webpack_require__(67);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},
	/* 65 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 66 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'Form'
		};
	
		/***/
	},
	/* 67 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": { "type": "expression", "body": "['r-form ',c._sg_('v', d, e)?'r-form-vertical':''].join('')", "constant": false, "setbody": false } }, { "type": "attribute", "name": "_r-0bd4e0cc", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 68 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(87);
		__webpack_require__(86);
		__regular_script__ = __webpack_require__(70);
		__regular_template__ = __webpack_require__(71);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},,
	/* 69 */
	/* 70 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'FormItem'
		};
	
		/***/
	},
	/* 71 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-form-item" }, { "type": "attribute", "name": "_r-f50650d0", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 72 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(88);
		__webpack_require__(89);
		__regular_script__ = __webpack_require__(74);
		__regular_template__ = __webpack_require__(75);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},,
	/* 73 */
	/* 74 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'FormLabel',
			init: function init() {
				this.$outer && this.$outer.ping && this.$outer.ping(this);
			}
		};
	
		/***/
	},
	/* 75 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-form-label" }, { "type": "attribute", "name": "_r-efb2e37e", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},
	/* 76 */
	/***/function (module, exports, __webpack_require__) {
	
		var __regular_script__, __regular_template__;
		__webpack_require__(82);
		__webpack_require__(81);
		__regular_script__ = __webpack_require__(78);
		__regular_template__ = __webpack_require__(79);
		var Regular = __webpack_require__(7);
	
		var __rs__ = __regular_script__ || {};
		if (__rs__.__esModule) __rs__ = __rs__.default;
	
		var __Component__;
		if ((typeof __rs__ === "undefined" ? "undefined" : _typeof(__rs__)) === "object") {
			__rs__.template = __regular_template__;
			__Component__ = Regular.extend(__rs__);
			if (_typeof(__rs__.component) === "object") {
				for (var i in __rs__.component) {
					__Component__.component(i, __rs__.component[i]);
				}
			}
		} else if (typeof __rs__ === "function" && __rs__.prototype instanceof Regular) {
			__rs__.prototype.template = __regular_template__;
			__Component__ = __rs__;
		}
		module.exports = __Component__;
	
		/***/
	},,
	/* 77 */
	/* 78 */
	/***/function (module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.default = {
			name: 'FormControl',
			init: function init() {
				console.log(this);
			}
		};
	
		/***/
	},
	/* 79 */
	/***/function (module, exports) {
	
		module.exports = [{ "type": "element", "tag": "div", "attrs": [{ "type": "attribute", "name": "class", "value": "r-form-control" }, { "type": "attribute", "name": "_r-240261ac", "value": "" }], "children": [{ "type": "text", "text": "\n\t" }, { "type": "template", "content": { "type": "expression", "body": "c._sg_('$body', c)", "constant": false, "setbody": "c._ss_('$body',p_,c, '=', 0)" } }, { "type": "text", "text": "\n" }] }];
	
		/***/
	},,
	/* 80 */
	/* 81 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 82 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},,,,
	/* 83 */
	/* 84 */
	/* 85 */
	/* 86 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 87 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 88 */
	/***/function (module, exports) {
	
		// removed by extract-text-webpack-plugin
	
		/***/},
	/* 89 */
	/***/function (module, exports) {}
	
	// removed by extract-text-webpack-plugin
	
	/***/
	/******/]);
	//# sourceMappingURL=pure.js.map

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	
	//
	// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
	// Version 1.2.6
	//
	
	(function (exports) {
	
	/*
	 * browser.js: Browser specific functionality for director.
	 *
	 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
	 * MIT LICENSE
	 *
	 */
	
	var dloc = document.location;
	
	function dlocHashEmpty() {
	  // Non-IE browsers return '' when the address bar shows '#'; Director's logic
	  // assumes both mean empty.
	  return dloc.hash === '' || dloc.hash === '#';
	}
	
	var listener = {
	  mode: 'modern',
	  hash: dloc.hash,
	  history: false,
	
	  check: function () {
	    var h = dloc.hash;
	    if (h != this.hash) {
	      this.hash = h;
	      this.onHashChanged();
	    }
	  },
	
	  fire: function () {
	    if (this.mode === 'modern') {
	      this.history === true ? window.onpopstate() : window.onhashchange();
	    }
	    else {
	      this.onHashChanged();
	    }
	  },
	
	  init: function (fn, history) {
	    var self = this;
	    this.history = history;
	
	    if (!Router.listeners) {
	      Router.listeners = [];
	    }
	
	    function onchange(onChangeEvent) {
	      for (var i = 0, l = Router.listeners.length; i < l; i++) {
	        Router.listeners[i](onChangeEvent);
	      }
	    }
	
	    //note IE8 is being counted as 'modern' because it has the hashchange event
	    if ('onhashchange' in window && (document.documentMode === undefined
	      || document.documentMode > 7)) {
	      // At least for now HTML5 history is available for 'modern' browsers only
	      if (this.history === true) {
	        // There is an old bug in Chrome that causes onpopstate to fire even
	        // upon initial page load. Since the handler is run manually in init(),
	        // this would cause Chrome to run it twise. Currently the only
	        // workaround seems to be to set the handler after the initial page load
	        // http://code.google.com/p/chromium/issues/detail?id=63040
	        setTimeout(function() {
	          window.onpopstate = onchange;
	        }, 500);
	      }
	      else {
	        window.onhashchange = onchange;
	      }
	      this.mode = 'modern';
	    }
	    else {
	      //
	      // IE support, based on a concept by Erik Arvidson ...
	      //
	      var frame = document.createElement('iframe');
	      frame.id = 'state-frame';
	      frame.style.display = 'none';
	      document.body.appendChild(frame);
	      this.writeFrame('');
	
	      if ('onpropertychange' in document && 'attachEvent' in document) {
	        document.attachEvent('onpropertychange', function () {
	          if (event.propertyName === 'location') {
	            self.check();
	          }
	        });
	      }
	
	      window.setInterval(function () { self.check(); }, 50);
	
	      this.onHashChanged = onchange;
	      this.mode = 'legacy';
	    }
	
	    Router.listeners.push(fn);
	
	    return this.mode;
	  },
	
	  destroy: function (fn) {
	    if (!Router || !Router.listeners) {
	      return;
	    }
	
	    var listeners = Router.listeners;
	
	    for (var i = listeners.length - 1; i >= 0; i--) {
	      if (listeners[i] === fn) {
	        listeners.splice(i, 1);
	      }
	    }
	  },
	
	  setHash: function (s) {
	    // Mozilla always adds an entry to the history
	    if (this.mode === 'legacy') {
	      this.writeFrame(s);
	    }
	
	    if (this.history === true) {
	      window.history.pushState({}, document.title, s);
	      // Fire an onpopstate event manually since pushing does not obviously
	      // trigger the pop event.
	      this.fire();
	    } else {
	      dloc.hash = (s[0] === '/') ? s : '/' + s;
	    }
	    return this;
	  },
	
	  writeFrame: function (s) {
	    // IE support...
	    var f = document.getElementById('state-frame');
	    var d = f.contentDocument || f.contentWindow.document;
	    d.open();
	    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
	    d.close();
	  },
	
	  syncHash: function () {
	    // IE support...
	    var s = this._hash;
	    if (s != dloc.hash) {
	      dloc.hash = s;
	    }
	    return this;
	  },
	
	  onHashChanged: function () {}
	};
	
	var Router = exports.Router = function (routes) {
	  if (!(this instanceof Router)) return new Router(routes);
	
	  this.params   = {};
	  this.routes   = {};
	  this.methods  = ['on', 'once', 'after', 'before'];
	  this.scope    = [];
	  this._methods = {};
	
	  this._insert = this.insert;
	  this.insert = this.insertEx;
	
	  this.historySupport = (window.history != null ? window.history.pushState : null) != null
	
	  this.configure();
	  this.mount(routes || {});
	};
	
	Router.prototype.init = function (r) {
	  var self = this
	    , routeTo;
	  this.handler = function(onChangeEvent) {
	    var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
	    var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
	    self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
	  };
	
	  listener.init(this.handler, this.history);
	
	  if (this.history === false) {
	    if (dlocHashEmpty() && r) {
	      dloc.hash = r;
	    } else if (!dlocHashEmpty()) {
	      self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
	    }
	  }
	  else {
	    if (this.convert_hash_in_init) {
	      // Use hash as route
	      routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
	      if (routeTo) {
	        window.history.replaceState({}, document.title, routeTo);
	      }
	    }
	    else {
	      // Use canonical url
	      routeTo = this.getPath();
	    }
	
	    // Router has been initialized, but due to the chrome bug it will not
	    // yet actually route HTML5 history state changes. Thus, decide if should route.
	    if (routeTo || this.run_in_init === true) {
	      this.handler();
	    }
	  }
	
	  return this;
	};
	
	Router.prototype.explode = function () {
	  var v = this.history === true ? this.getPath() : dloc.hash;
	  if (v.charAt(1) === '/') { v=v.slice(1) }
	  return v.slice(1, v.length).split("/");
	};
	
	Router.prototype.setRoute = function (i, v, val) {
	  var url = this.explode();
	
	  if (typeof i === 'number' && typeof v === 'string') {
	    url[i] = v;
	  }
	  else if (typeof val === 'string') {
	    url.splice(i, v, s);
	  }
	  else {
	    url = [i];
	  }
	
	  listener.setHash(url.join('/'));
	  return url;
	};
	
	//
	// ### function insertEx(method, path, route, parent)
	// #### @method {string} Method to insert the specific `route`.
	// #### @path {Array} Parsed path to insert the `route` at.
	// #### @route {Array|function} Route handlers to insert.
	// #### @parent {Object} **Optional** Parent "routes" to insert into.
	// insert a callback that will only occur once per the matched route.
	//
	Router.prototype.insertEx = function(method, path, route, parent) {
	  if (method === "once") {
	    method = "on";
	    route = function(route) {
	      var once = false;
	      return function() {
	        if (once) return;
	        once = true;
	        return route.apply(this, arguments);
	      };
	    }(route);
	  }
	  return this._insert(method, path, route, parent);
	};
	
	Router.prototype.getRoute = function (v) {
	  var ret = v;
	
	  if (typeof v === "number") {
	    ret = this.explode()[v];
	  }
	  else if (typeof v === "string"){
	    var h = this.explode();
	    ret = h.indexOf(v);
	  }
	  else {
	    ret = this.explode();
	  }
	
	  return ret;
	};
	
	Router.prototype.destroy = function () {
	  listener.destroy(this.handler);
	  return this;
	};
	
	Router.prototype.getPath = function () {
	  var path = window.location.pathname;
	  if (path.substr(0, 1) !== '/') {
	    path = '/' + path;
	  }
	  return path;
	};
	function _every(arr, iterator) {
	  for (var i = 0; i < arr.length; i += 1) {
	    if (iterator(arr[i], i, arr) === false) {
	      return;
	    }
	  }
	}
	
	function _flatten(arr) {
	  var flat = [];
	  for (var i = 0, n = arr.length; i < n; i++) {
	    flat = flat.concat(arr[i]);
	  }
	  return flat;
	}
	
	function _asyncEverySeries(arr, iterator, callback) {
	  if (!arr.length) {
	    return callback();
	  }
	  var completed = 0;
	  (function iterate() {
	    iterator(arr[completed], function(err) {
	      if (err || err === false) {
	        callback(err);
	        callback = function() {};
	      } else {
	        completed += 1;
	        if (completed === arr.length) {
	          callback();
	        } else {
	          iterate();
	        }
	      }
	    });
	  })();
	}
	
	function paramifyString(str, params, mod) {
	  mod = str;
	  for (var param in params) {
	    if (params.hasOwnProperty(param)) {
	      mod = params[param](str);
	      if (mod !== str) {
	        break;
	      }
	    }
	  }
	  return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
	}
	
	function regifyString(str, params) {
	  var matches, last = 0, out = "";
	  while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
	    last = matches.index + matches[0].length;
	    matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
	    out += str.substr(0, matches.index) + matches[0];
	  }
	  str = out += str.substr(last);
	  var captures = str.match(/:([^\/]+)/ig), capture, length;
	  if (captures) {
	    length = captures.length;
	    for (var i = 0; i < length; i++) {
	      capture = captures[i];
	      if (capture.slice(0, 2) === "::") {
	        str = capture.slice(1);
	      } else {
	        str = str.replace(capture, paramifyString(capture, params));
	      }
	    }
	  }
	  return str;
	}
	
	function terminator(routes, delimiter, start, stop) {
	  var last = 0, left = 0, right = 0, start = (start || "(").toString(), stop = (stop || ")").toString(), i;
	  for (i = 0; i < routes.length; i++) {
	    var chunk = routes[i];
	    if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
	      left = chunk.indexOf(start, last);
	      right = chunk.indexOf(stop, last);
	      if (~left && !~right || !~left && ~right) {
	        var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
	        routes = [ tmp ].concat(routes.slice((i || 1) + 1));
	      }
	      last = (right > left ? right : left) + 1;
	      i = 0;
	    } else {
	      last = 0;
	    }
	  }
	  return routes;
	}
	
	var QUERY_SEPARATOR = /\?.*/;
	
	Router.prototype.configure = function(options) {
	  options = options || {};
	  for (var i = 0; i < this.methods.length; i++) {
	    this._methods[this.methods[i]] = true;
	  }
	  this.recurse = options.recurse || this.recurse || false;
	  this.async = options.async || false;
	  this.delimiter = options.delimiter || "/";
	  this.strict = typeof options.strict === "undefined" ? true : options.strict;
	  this.notfound = options.notfound;
	  this.resource = options.resource;
	  this.history = options.html5history && this.historySupport || false;
	  this.run_in_init = this.history === true && options.run_handler_in_init !== false;
	  this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
	  this.every = {
	    after: options.after || null,
	    before: options.before || null,
	    on: options.on || null
	  };
	  return this;
	};
	
	Router.prototype.param = function(token, matcher) {
	  if (token[0] !== ":") {
	    token = ":" + token;
	  }
	  var compiled = new RegExp(token, "g");
	  this.params[token] = function(str) {
	    return str.replace(compiled, matcher.source || matcher);
	  };
	  return this;
	};
	
	Router.prototype.on = Router.prototype.route = function(method, path, route) {
	  var self = this;
	  if (!route && typeof path == "function") {
	    route = path;
	    path = method;
	    method = "on";
	  }
	  if (Array.isArray(path)) {
	    return path.forEach(function(p) {
	      self.on(method, p, route);
	    });
	  }
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  if (Array.isArray(method)) {
	    return method.forEach(function(m) {
	      self.on(m.toLowerCase(), path, route);
	    });
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.insert(method, this.scope.concat(path), route);
	};
	
	Router.prototype.path = function(path, routesFn) {
	  var self = this, length = this.scope.length;
	  if (path.source) {
	    path = path.source.replace(/\\\//ig, "/");
	  }
	  path = path.split(new RegExp(this.delimiter));
	  path = terminator(path, this.delimiter);
	  this.scope = this.scope.concat(path);
	  routesFn.call(this, this);
	  this.scope.splice(length, path.length);
	};
	
	Router.prototype.dispatch = function(method, path, callback) {
	  var self = this, fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""), invoked = this._invoked, after;
	  this._invoked = true;
	  if (!fns || fns.length === 0) {
	    this.last = [];
	    if (typeof this.notfound === "function") {
	      this.invoke([ this.notfound ], {
	        method: method,
	        path: path
	      }, callback);
	    }
	    return false;
	  }
	  if (this.recurse === "forward") {
	    fns = fns.reverse();
	  }
	  function updateAndInvoke() {
	    self.last = fns.after;
	    self.invoke(self.runlist(fns), self, callback);
	  }
	  after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
	  if (after && after.length > 0 && invoked) {
	    if (this.async) {
	      this.invoke(after, this, updateAndInvoke);
	    } else {
	      this.invoke(after, this);
	      updateAndInvoke();
	    }
	    return true;
	  }
	  updateAndInvoke();
	  return true;
	};
	
	Router.prototype.invoke = function(fns, thisArg, callback) {
	  var self = this;
	  var apply;
	  if (this.async) {
	    apply = function(fn, next) {
	      if (Array.isArray(fn)) {
	        return _asyncEverySeries(fn, apply, next);
	      } else if (typeof fn == "function") {
	        fn.apply(thisArg, (fns.captures || []).concat(next));
	      }
	    };
	    _asyncEverySeries(fns, apply, function() {
	      if (callback) {
	        callback.apply(thisArg, arguments);
	      }
	    });
	  } else {
	    apply = function(fn) {
	      if (Array.isArray(fn)) {
	        return _every(fn, apply);
	      } else if (typeof fn === "function") {
	        return fn.apply(thisArg, fns.captures || []);
	      } else if (typeof fn === "string" && self.resource) {
	        self.resource[fn].apply(thisArg, fns.captures || []);
	      }
	    };
	    _every(fns, apply);
	  }
	};
	
	Router.prototype.traverse = function(method, path, routes, regexp, filter) {
	  var fns = [], current, exact, match, next, that;
	  function filterRoutes(routes) {
	    if (!filter) {
	      return routes;
	    }
	    function deepCopy(source) {
	      var result = [];
	      for (var i = 0; i < source.length; i++) {
	        result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
	      }
	      return result;
	    }
	    function applyFilter(fns) {
	      for (var i = fns.length - 1; i >= 0; i--) {
	        if (Array.isArray(fns[i])) {
	          applyFilter(fns[i]);
	          if (fns[i].length === 0) {
	            fns.splice(i, 1);
	          }
	        } else {
	          if (!filter(fns[i])) {
	            fns.splice(i, 1);
	          }
	        }
	      }
	    }
	    var newRoutes = deepCopy(routes);
	    newRoutes.matched = routes.matched;
	    newRoutes.captures = routes.captures;
	    newRoutes.after = routes.after.filter(filter);
	    applyFilter(newRoutes);
	    return newRoutes;
	  }
	  if (path === this.delimiter && routes[method]) {
	    next = [ [ routes.before, routes[method] ].filter(Boolean) ];
	    next.after = [ routes.after ].filter(Boolean);
	    next.matched = true;
	    next.captures = [];
	    return filterRoutes(next);
	  }
	  for (var r in routes) {
	    if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
	      current = exact = regexp + this.delimiter + r;
	      if (!this.strict) {
	        exact += "[" + this.delimiter + "]?";
	      }
	      match = path.match(new RegExp("^" + exact));
	      if (!match) {
	        continue;
	      }
	      if (match[0] && match[0] == path && routes[r][method]) {
	        next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
	        next.after = [ routes[r].after ].filter(Boolean);
	        next.matched = true;
	        next.captures = match.slice(1);
	        if (this.recurse && routes === this.routes) {
	          next.push([ routes.before, routes.on ].filter(Boolean));
	          next.after = next.after.concat([ routes.after ].filter(Boolean));
	        }
	        return filterRoutes(next);
	      }
	      next = this.traverse(method, path, routes[r], current);
	      if (next.matched) {
	        if (next.length > 0) {
	          fns = fns.concat(next);
	        }
	        if (this.recurse) {
	          fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
	          next.after = next.after.concat([ routes[r].after ].filter(Boolean));
	          if (routes === this.routes) {
	            fns.push([ routes["before"], routes["on"] ].filter(Boolean));
	            next.after = next.after.concat([ routes["after"] ].filter(Boolean));
	          }
	        }
	        fns.matched = true;
	        fns.captures = next.captures;
	        fns.after = next.after;
	        return filterRoutes(fns);
	      }
	    }
	  }
	  return false;
	};
	
	Router.prototype.insert = function(method, path, route, parent) {
	  var methodType, parentType, isArray, nested, part;
	  path = path.filter(function(p) {
	    return p && p.length > 0;
	  });
	  parent = parent || this.routes;
	  part = path.shift();
	  if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
	    part = regifyString(part, this.params);
	  }
	  if (path.length > 0) {
	    parent[part] = parent[part] || {};
	    return this.insert(method, path, route, parent[part]);
	  }
	  if (!part && !path.length && parent === this.routes) {
	    methodType = typeof parent[method];
	    switch (methodType) {
	     case "function":
	      parent[method] = [ parent[method], route ];
	      return;
	     case "object":
	      parent[method].push(route);
	      return;
	     case "undefined":
	      parent[method] = route;
	      return;
	    }
	    return;
	  }
	  parentType = typeof parent[part];
	  isArray = Array.isArray(parent[part]);
	  if (parent[part] && !isArray && parentType == "object") {
	    methodType = typeof parent[part][method];
	    switch (methodType) {
	     case "function":
	      parent[part][method] = [ parent[part][method], route ];
	      return;
	     case "object":
	      parent[part][method].push(route);
	      return;
	     case "undefined":
	      parent[part][method] = route;
	      return;
	    }
	  } else if (parentType == "undefined") {
	    nested = {};
	    nested[method] = route;
	    parent[part] = nested;
	    return;
	  }
	  throw new Error("Invalid route context: " + parentType);
	};
	
	
	
	Router.prototype.extend = function(methods) {
	  var self = this, len = methods.length, i;
	  function extend(method) {
	    self._methods[method] = true;
	    self[method] = function() {
	      var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
	      self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
	    };
	  }
	  for (i = 0; i < len; i++) {
	    extend(methods[i]);
	  }
	};
	
	Router.prototype.runlist = function(fns) {
	  var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
	  if (this.every && this.every.on) {
	    runlist.push(this.every.on);
	  }
	  runlist.captures = fns.captures;
	  runlist.source = fns.source;
	  return runlist;
	};
	
	Router.prototype.mount = function(routes, path) {
	  if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
	    return;
	  }
	  var self = this;
	  path = path || [];
	  if (!Array.isArray(path)) {
	    path = path.split(self.delimiter);
	  }
	  function insertOrMount(route, local) {
	    var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
	    if (isRoute) {
	      rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [ "" ])[0].length);
	      parts.shift();
	    }
	    if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
	      local = local.concat(parts);
	      self.mount(routes[route], local);
	      return;
	    }
	    if (isRoute) {
	      local = local.concat(rename.split(self.delimiter));
	      local = terminator(local, self.delimiter);
	    }
	    self.insert(event, local, routes[route]);
	  }
	  for (var route in routes) {
	    if (routes.hasOwnProperty(route)) {
	      insertOrMount(route, path.slice(0));
	    }
	  }
	};
	
	
	
	}( true ? exports : window));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __regular_script__, __regular_template__;
	__webpack_require__(8)
	__webpack_require__(9)
	__regular_script__ = __webpack_require__(10)
	__regular_template__ = __webpack_require__(23)
	var Regular = __webpack_require__( 16 );
	
	var __rs__ = __regular_script__ || {};
	if (__rs__.__esModule) __rs__ = __rs__.default;
	
	var __Component__;
	if( typeof __rs__ === "object" ) {
		__rs__.template = __regular_template__;
		__Component__ = Regular.extend(__rs__);
		if( typeof __rs__.component === "object" ) {
			for( var i in __rs__.component ) {
				__Component__.component(i, __rs__.component[ i ]);
			}
		}
	} else if( typeof __rs__ === "function" && ( __rs__.prototype instanceof Regular ) ) {
		__rs__.prototype.template = __regular_template__;
		__Component__ = __rs__;
	}
	module.exports = __Component__;

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	__webpack_require__(11);
	
	__webpack_require__(17);
	
	var _dispatcher = __webpack_require__(21);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	var _docs = __webpack_require__(25);
	
	var _docs2 = _interopRequireDefault(_docs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		config: function config() {
			var _this = this;
	
			this.data.active = 'Button';
			this.data.doc = _docs2.default.Button;
	
			_dispatcher2.default.on('update', function (doc) {
				_this.data.doc = doc;
				_this.$update();
			});
		}
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __regular_script__, __regular_template__;
	__webpack_require__(12)
	__regular_script__ = __webpack_require__(13)
	__regular_template__ = __webpack_require__(15)
	var Regular = __webpack_require__( 16 );
	
	var __rs__ = __regular_script__ || {};
	if (__rs__.__esModule) __rs__ = __rs__.default;
	
	var __Component__;
	if( typeof __rs__ === "object" ) {
		__rs__.template = __regular_template__;
		__Component__ = Regular.extend(__rs__);
		if( typeof __rs__.component === "object" ) {
			for( var i in __rs__.component ) {
				__Component__.component(i, __rs__.component[ i ]);
			}
		}
	} else if( typeof __rs__ === "function" && ( __rs__.prototype instanceof Regular ) ) {
		__rs__.prototype.template = __regular_template__;
		__Component__ = __rs__;
	}
	module.exports = __Component__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _deIndent = __webpack_require__(14);
	
	var _deIndent2 = _interopRequireDefault(_deIndent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		name: 'Demo',
		config: function config() {
			if (!this.data.source) {
				return;
			}
			this.data.deindentSource = (0, _deIndent2.default)(this.data.source).trim();
		},
		init: function init() {
			if (this.data.deindentSource) {
				hljs.highlightBlock(this.$refs.c);
			}
		}
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	var splitRE = /\r?\n/g
	var emptyRE = /^\s*$/
	var needFixRE = /^(\r?\n)*[\t\s]/
	
	module.exports = function deindent (str) {
	  if (!needFixRE.test(str)) {
	    return str
	  }
	  var lines = str.split(splitRE)
	  var min = Infinity
	  var type, cur, c
	  for (var i = 0; i < lines.length; i++) {
	    var line = lines[i]
	    if (!emptyRE.test(line)) {
	      if (!type) {
	        c = line.charAt(0)
	        if (c === ' ' || c === '\t') {
	          type = c
	          cur = count(line, type)
	          if (cur < min) {
	            min = cur
	          }
	        } else {
	          return str
	        }
	      } else {
	        cur = count(line, type)
	        if (cur < min) {
	          min = cur
	        }
	      }
	    }
	  }
	  return lines.map(function (line) {
	    return line.slice(min)
	  }).join('\n')
	}
	
	function count (line, type) {
	  var i = 0
	  while (line.charAt(i) === type) {
	    i++
	  }
	  return i
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = [{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"doc"},{"type":"attribute","name":"_r-6dd20558","value":""}],"children":[{"type":"text","text":"\n\t"},{"type":"if","test":{"type":"expression","body":"c._sg_('markdown', d, e)","constant":false,"setbody":"c._ss_('markdown',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n\t"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"markdown-box"},{"type":"attribute","name":"_r-6dd20558","value":""}],"children":[{"type":"text","text":"\n\t\t"},{"type":"template","content":{"type":"expression","body":"c._sg_('markdown', d, e)","constant":false,"setbody":"c._ss_('markdown',p_,d, '=', 1)"}},{"type":"text","text":"\n\t"}]},{"type":"text","text":"\n\t"}],"alternate":[]},{"type":"text","text":"\n\n\t"},{"type":"if","test":{"type":"expression","body":"c._sg_('source', d, e)","constant":false,"setbody":"c._ss_('source',p_,d, '=', 1)"},"consequent":[{"type":"text","text":"\n\t"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"demo-box"},{"type":"attribute","name":"_r-6dd20558","value":""}],"children":[{"type":"text","text":"\n\t\t"},{"type":"template","content":{"type":"expression","body":"c._sg_('source', d, e)","constant":false,"setbody":"c._ss_('source',p_,d, '=', 1)"}},{"type":"text","text":"\n\t"}]},{"type":"text","text":"\n\t"}],"alternate":[]},{"type":"text","text":"\n\n\t"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":{"type":"expression","body":"c._sg_('deindentSource', d, e)?'code-box':''","constant":false,"setbody":false}},{"type":"attribute","name":"_r-6dd20558","value":""}],"children":[{"type":"text","text":"\n\t\t"},{"type":"element","tag":"pre","attrs":[{"type":"attribute","name":"_r-6dd20558","value":""}],"children":[{"type":"element","tag":"code","attrs":[{"type":"attribute","name":"ref","value":"c"},{"type":"attribute","name":"_r-6dd20558","value":""}],"children":[{"type":"expression","body":"c._sg_('deindentSource', d, e)","constant":false,"setbody":"c._ss_('deindentSource',p_,d, '=', 1)"}]}]},{"type":"text","text":"\n\t"}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = Regular;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __regular_script__, __regular_template__;
	__webpack_require__(18)
	__regular_script__ = __webpack_require__(19)
	__regular_template__ = __webpack_require__(20)
	var Regular = __webpack_require__( 16 );
	
	var __rs__ = __regular_script__ || {};
	if (__rs__.__esModule) __rs__ = __rs__.default;
	
	var __Component__;
	if( typeof __rs__ === "object" ) {
		__rs__.template = __regular_template__;
		__Component__ = Regular.extend(__rs__);
		if( typeof __rs__.component === "object" ) {
			for( var i in __rs__.component ) {
				__Component__.component(i, __rs__.component[ i ]);
			}
		}
	} else if( typeof __rs__ === "function" && ( __rs__.prototype instanceof Regular ) ) {
		__rs__.prototype.template = __regular_template__;
		__Component__ = __rs__;
	}
	module.exports = __Component__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		name: 'Nav',
		config: function config() {}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = [{"type":"element","tag":"nav","attrs":[{"type":"attribute","name":"class","value":"nav"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"title"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"basic"}]},{"type":"text","text":"\n\t"},{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t"},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t\t"},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#/Button"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"Button"}]},{"type":"text","text":"\n\t\t"}]},{"type":"text","text":"\n\t\t\n\t"}]},{"type":"text","text":"\n\t"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"title"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"form"}]},{"type":"text","text":"\n\t"},{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t"},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t\t"},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#/Input"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"Input"}]},{"type":"text","text":"\n\t\t"}]},{"type":"text","text":"\n\t\t"},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t\t"},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#/Textarea"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"Textarea"}]},{"type":"text","text":"\n\t\t"}]},{"type":"text","text":"\n\t\t"},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t\t"},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#/Radio"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"Radio"}]},{"type":"text","text":"\n\t\t"}]},{"type":"text","text":"\n\t\t"},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t\t"},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#/Checkbox"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"Checkbox"}]},{"type":"text","text":"\n\t\t"}]},{"type":"text","text":"\n\t\t"},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t\t"},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#/Switch"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"Switch"}]},{"type":"text","text":"\n\t\t"}]},{"type":"text","text":"\n\t\t"},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t\t"},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#/Form"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"Form"}]},{"type":"text","text":"\n\t\t"}]},{"type":"text","text":"\n\t\t\n\t\t\n\t\t\n\t"}]},{"type":"text","text":"\n\t"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"title"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"container"}]},{"type":"text","text":"\n\t"},{"type":"element","tag":"ul","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t"},{"type":"element","tag":"li","attrs":[{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"\n\t\t\t"},{"type":"element","tag":"a","attrs":[{"type":"attribute","name":"href","value":"#/Modal"},{"type":"attribute","name":"_r-7130e100","value":""}],"children":[{"type":"text","text":"Modal"}]},{"type":"text","text":"\n\t\t"}]},{"type":"text","text":"\n\t"}]},{"type":"text","text":"\n\t\n"}]}]

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _eventemitter = __webpack_require__(22);
	
	var dispatcher = new _eventemitter.EventEmitter2();
	
	exports.default = dispatcher;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * EventEmitter2
	 * https://github.com/hij1nx/EventEmitter2
	 *
	 * Copyright (c) 2013 hij1nx
	 * Licensed under the MIT license.
	 */
	;!function(undefined) {
	
	  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
	    return Object.prototype.toString.call(obj) === "[object Array]";
	  };
	  var defaultMaxListeners = 10;
	
	  function init() {
	    this._events = {};
	    if (this._conf) {
	      configure.call(this, this._conf);
	    }
	  }
	
	  function configure(conf) {
	    if (conf) {
	
	      this._conf = conf;
	
	      conf.delimiter && (this.delimiter = conf.delimiter);
	      conf.maxListeners && (this._events.maxListeners = conf.maxListeners);
	      conf.wildcard && (this.wildcard = conf.wildcard);
	      conf.newListener && (this.newListener = conf.newListener);
	
	      if (this.wildcard) {
	        this.listenerTree = {};
	      }
	    }
	  }
	
	  function EventEmitter(conf) {
	    this._events = {};
	    this.newListener = false;
	    configure.call(this, conf);
	  }
	  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property
	
	  //
	  // Attention, function return type now is array, always !
	  // It has zero elements if no any matches found and one or more
	  // elements (leafs) if there are matches
	  //
	  function searchListenerTree(handlers, type, tree, i) {
	    if (!tree) {
	      return [];
	    }
	    var listeners=[], leaf, len, branch, xTree, xxTree, isolatedBranch, endReached,
	        typeLength = type.length, currentType = type[i], nextType = type[i+1];
	    if (i === typeLength && tree._listeners) {
	      //
	      // If at the end of the event(s) list and the tree has listeners
	      // invoke those listeners.
	      //
	      if (typeof tree._listeners === 'function') {
	        handlers && handlers.push(tree._listeners);
	        return [tree];
	      } else {
	        for (leaf = 0, len = tree._listeners.length; leaf < len; leaf++) {
	          handlers && handlers.push(tree._listeners[leaf]);
	        }
	        return [tree];
	      }
	    }
	
	    if ((currentType === '*' || currentType === '**') || tree[currentType]) {
	      //
	      // If the event emitted is '*' at this part
	      // or there is a concrete match at this patch
	      //
	      if (currentType === '*') {
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+1));
	          }
	        }
	        return listeners;
	      } else if(currentType === '**') {
	        endReached = (i+1 === typeLength || (i+2 === typeLength && nextType === '*'));
	        if(endReached && tree._listeners) {
	          // The next element has a _listeners, add it to the handlers.
	          listeners = listeners.concat(searchListenerTree(handlers, type, tree, typeLength));
	        }
	
	        for (branch in tree) {
	          if (branch !== '_listeners' && tree.hasOwnProperty(branch)) {
	            if(branch === '*' || branch === '**') {
	              if(tree[branch]._listeners && !endReached) {
	                listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], typeLength));
	              }
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            } else if(branch === nextType) {
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i+2));
	            } else {
	              // No match on this one, shift into the tree but not in the type array.
	              listeners = listeners.concat(searchListenerTree(handlers, type, tree[branch], i));
	            }
	          }
	        }
	        return listeners;
	      }
	
	      listeners = listeners.concat(searchListenerTree(handlers, type, tree[currentType], i+1));
	    }
	
	    xTree = tree['*'];
	    if (xTree) {
	      //
	      // If the listener tree will allow any match for this part,
	      // then recursively explore all branches of the tree
	      //
	      searchListenerTree(handlers, type, xTree, i+1);
	    }
	
	    xxTree = tree['**'];
	    if(xxTree) {
	      if(i < typeLength) {
	        if(xxTree._listeners) {
	          // If we have a listener on a '**', it will catch all, so add its handler.
	          searchListenerTree(handlers, type, xxTree, typeLength);
	        }
	
	        // Build arrays of matching next branches and others.
	        for(branch in xxTree) {
	          if(branch !== '_listeners' && xxTree.hasOwnProperty(branch)) {
	            if(branch === nextType) {
	              // We know the next element will match, so jump twice.
	              searchListenerTree(handlers, type, xxTree[branch], i+2);
	            } else if(branch === currentType) {
	              // Current node matches, move into the tree.
	              searchListenerTree(handlers, type, xxTree[branch], i+1);
	            } else {
	              isolatedBranch = {};
	              isolatedBranch[branch] = xxTree[branch];
	              searchListenerTree(handlers, type, { '**': isolatedBranch }, i+1);
	            }
	          }
	        }
	      } else if(xxTree._listeners) {
	        // We have reached the end and still on a '**'
	        searchListenerTree(handlers, type, xxTree, typeLength);
	      } else if(xxTree['*'] && xxTree['*']._listeners) {
	        searchListenerTree(handlers, type, xxTree['*'], typeLength);
	      }
	    }
	
	    return listeners;
	  }
	
	  function growListenerTree(type, listener) {
	
	    type = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	
	    //
	    // Looks for two consecutive '**', if so, don't add the event at all.
	    //
	    for(var i = 0, len = type.length; i+1 < len; i++) {
	      if(type[i] === '**' && type[i+1] === '**') {
	        return;
	      }
	    }
	
	    var tree = this.listenerTree;
	    var name = type.shift();
	
	    while (name) {
	
	      if (!tree[name]) {
	        tree[name] = {};
	      }
	
	      tree = tree[name];
	
	      if (type.length === 0) {
	
	        if (!tree._listeners) {
	          tree._listeners = listener;
	        }
	        else if(typeof tree._listeners === 'function') {
	          tree._listeners = [tree._listeners, listener];
	        }
	        else if (isArray(tree._listeners)) {
	
	          tree._listeners.push(listener);
	
	          if (!tree._listeners.warned) {
	
	            var m = defaultMaxListeners;
	
	            if (typeof this._events.maxListeners !== 'undefined') {
	              m = this._events.maxListeners;
	            }
	
	            if (m > 0 && tree._listeners.length > m) {
	
	              tree._listeners.warned = true;
	              console.error('(node) warning: possible EventEmitter memory ' +
	                            'leak detected. %d listeners added. ' +
	                            'Use emitter.setMaxListeners() to increase limit.',
	                            tree._listeners.length);
	              if(console.trace){
	                console.trace();
	              }
	            }
	          }
	        }
	        return true;
	      }
	      name = type.shift();
	    }
	    return true;
	  }
	
	  // By default EventEmitters will print a warning if more than
	  // 10 listeners are added to it. This is a useful default which
	  // helps finding memory leaks.
	  //
	  // Obviously not all Emitters should be limited to 10. This function allows
	  // that to be increased. Set to zero for unlimited.
	
	  EventEmitter.prototype.delimiter = '.';
	
	  EventEmitter.prototype.setMaxListeners = function(n) {
	    this._events || init.call(this);
	    this._events.maxListeners = n;
	    if (!this._conf) this._conf = {};
	    this._conf.maxListeners = n;
	  };
	
	  EventEmitter.prototype.event = '';
	
	  EventEmitter.prototype.once = function(event, fn) {
	    this.many(event, 1, fn);
	    return this;
	  };
	
	  EventEmitter.prototype.many = function(event, ttl, fn) {
	    var self = this;
	
	    if (typeof fn !== 'function') {
	      throw new Error('many only accepts instances of Function');
	    }
	
	    function listener() {
	      if (--ttl === 0) {
	        self.off(event, listener);
	      }
	      fn.apply(this, arguments);
	    }
	
	    listener._origin = fn;
	
	    this.on(event, listener);
	
	    return self;
	  };
	
	  EventEmitter.prototype.emit = function() {
	
	    this._events || init.call(this);
	
	    var type = arguments[0];
	
	    if (type === 'newListener' && !this.newListener) {
	      if (!this._events.newListener) {
	        return false;
	      }
	    }
	
	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;
	
	    if (this._all && this._all.length) {
	      handler = this._all.slice();
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 0; j < al; j++) args[j] = arguments[j];
	      }
	
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this, type);
	          break;
	        case 2:
	          handler[i].call(this, type, arguments[1]);
	          break;
	        case 3:
	          handler[i].call(this, type, arguments[1], arguments[2]);
	          break;
	        default:
	          handler[i].apply(this, args);
	        }
	      }
	    }
	
	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	      if (typeof handler === 'function') {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler.call(this);
	          break;
	        case 2:
	          handler.call(this, arguments[1]);
	          break;
	        case 3:
	          handler.call(this, arguments[1], arguments[2]);
	          break;
	        default:
	          args = new Array(al - 1);
	          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	          handler.apply(this, args);
	        }
	        return true;
	      } else if (handler) {
	        // need to make copy of handlers because list can change in the middle
	        // of emit call
	        handler = handler.slice();
	      }
	    }
	
	    if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          handler[i].call(this);
	          break;
	        case 2:
	          handler[i].call(this, arguments[1]);
	          break;
	        case 3:
	          handler[i].call(this, arguments[1], arguments[2]);
	          break;
	        default:
	          handler[i].apply(this, args);
	        }
	      }
	      return true;
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        throw arguments[1]; // Unhandled 'error' event
	      } else {
	        throw new Error("Uncaught, unspecified 'error' event.");
	      }
	      return false;
	    }
	
	    return !!this._all;
	  };
	
	  EventEmitter.prototype.emitAsync = function() {
	
	    this._events || init.call(this);
	
	    var type = arguments[0];
	
	    if (type === 'newListener' && !this.newListener) {
	        if (!this._events.newListener) { return Promise.resolve([false]); }
	    }
	
	    var promises= [];
	
	    var al = arguments.length;
	    var args,l,i,j;
	    var handler;
	
	    if (this._all) {
	      if (al > 3) {
	        args = new Array(al);
	        for (j = 1; j < al; j++) args[j] = arguments[j];
	      }
	      for (i = 0, l = this._all.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          promises.push(this._all[i].call(this, type));
	          break;
	        case 2:
	          promises.push(this._all[i].call(this, type, arguments[1]));
	          break;
	        case 3:
	          promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
	          break;
	        default:
	          promises.push(this._all[i].apply(this, args));
	        }
	      }
	    }
	
	    if (this.wildcard) {
	      handler = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
	    } else {
	      handler = this._events[type];
	    }
	
	    if (typeof handler === 'function') {
	      this.event = type;
	      switch (al) {
	      case 1:
	        promises.push(handler.call(this));
	        break;
	      case 2:
	        promises.push(handler.call(this, arguments[1]));
	        break;
	      case 3:
	        promises.push(handler.call(this, arguments[1], arguments[2]));
	        break;
	      default:
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	        promises.push(handler.apply(this, args));
	      }
	    } else if (handler && handler.length) {
	      if (al > 3) {
	        args = new Array(al - 1);
	        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
	      }
	      for (i = 0, l = handler.length; i < l; i++) {
	        this.event = type;
	        switch (al) {
	        case 1:
	          promises.push(handler[i].call(this));
	          break;
	        case 2:
	          promises.push(handler[i].call(this, arguments[1]));
	          break;
	        case 3:
	          promises.push(handler[i].call(this, arguments[1], arguments[2]));
	          break;
	        default:
	          promises.push(handler[i].apply(this, args));
	        }
	      }
	    } else if (!this._all && type === 'error') {
	      if (arguments[1] instanceof Error) {
	        return Promise.reject(arguments[1]); // Unhandled 'error' event
	      } else {
	        return Promise.reject("Uncaught, unspecified 'error' event.");
	      }
	    }
	
	    return Promise.all(promises);
	  };
	
	  EventEmitter.prototype.on = function(type, listener) {
	
	    if (typeof type === 'function') {
	      this.onAny(type);
	      return this;
	    }
	
	    if (typeof listener !== 'function') {
	      throw new Error('on only accepts instances of Function');
	    }
	    this._events || init.call(this);
	
	    // To avoid recursion in the case that type == "newListeners"! Before
	    // adding it to the listeners, first emit "newListeners".
	    this.emit('newListener', type, listener);
	
	    if(this.wildcard) {
	      growListenerTree.call(this, type, listener);
	      return this;
	    }
	
	    if (!this._events[type]) {
	      // Optimize the case of one listener. Don't need the extra array object.
	      this._events[type] = listener;
	    }
	    else if(typeof this._events[type] === 'function') {
	      // Adding the second element, need to change to array.
	      this._events[type] = [this._events[type], listener];
	    }
	    else if (isArray(this._events[type])) {
	      // If we've already got an array, just append.
	      this._events[type].push(listener);
	
	      // Check for listener leak
	      if (!this._events[type].warned) {
	
	        var m = defaultMaxListeners;
	
	        if (typeof this._events.maxListeners !== 'undefined') {
	          m = this._events.maxListeners;
	        }
	
	        if (m > 0 && this._events[type].length > m) {
	
	          this._events[type].warned = true;
	          console.error('(node) warning: possible EventEmitter memory ' +
	                        'leak detected. %d listeners added. ' +
	                        'Use emitter.setMaxListeners() to increase limit.',
	                        this._events[type].length);
	          if(console.trace){
	            console.trace();
	          }
	        }
	      }
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.onAny = function(fn) {
	
	    if (typeof fn !== 'function') {
	      throw new Error('onAny only accepts instances of Function');
	    }
	
	    if(!this._all) {
	      this._all = [];
	    }
	
	    // Add the function to the event listener collection.
	    this._all.push(fn);
	    return this;
	  };
	
	  EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	  EventEmitter.prototype.off = function(type, listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('removeListener only takes instances of Function');
	    }
	
	    var handlers,leafs=[];
	
	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	    }
	    else {
	      // does not use listeners(), so no side effect of creating _events[type]
	      if (!this._events[type]) return this;
	      handlers = this._events[type];
	      leafs.push({_listeners:handlers});
	    }
	
	    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	      var leaf = leafs[iLeaf];
	      handlers = leaf._listeners;
	      if (isArray(handlers)) {
	
	        var position = -1;
	
	        for (var i = 0, length = handlers.length; i < length; i++) {
	          if (handlers[i] === listener ||
	            (handlers[i].listener && handlers[i].listener === listener) ||
	            (handlers[i]._origin && handlers[i]._origin === listener)) {
	            position = i;
	            break;
	          }
	        }
	
	        if (position < 0) {
	          continue;
	        }
	
	        if(this.wildcard) {
	          leaf._listeners.splice(position, 1);
	        }
	        else {
	          this._events[type].splice(position, 1);
	        }
	
	        if (handlers.length === 0) {
	          if(this.wildcard) {
	            delete leaf._listeners;
	          }
	          else {
	            delete this._events[type];
	          }
	        }
	
	        this.emit("removeListener", type, listener);
	
	        return this;
	      }
	      else if (handlers === listener ||
	        (handlers.listener && handlers.listener === listener) ||
	        (handlers._origin && handlers._origin === listener)) {
	        if(this.wildcard) {
	          delete leaf._listeners;
	        }
	        else {
	          delete this._events[type];
	        }
	
	        this.emit("removeListener", type, listener);
	      }
	    }
	
	    function recursivelyGarbageCollect(root) {
	      if (root === undefined) {
	        return;
	      }
	      var keys = Object.keys(root);
	      for (var i in keys) {
	        var key = keys[i];
	        var obj = root[key];
	        if ((obj instanceof Function) || (typeof obj !== "object"))
	          continue;
	        if (Object.keys(obj).length > 0) {
	          recursivelyGarbageCollect(root[key]);
	        }
	        if (Object.keys(obj).length === 0) {
	          delete root[key];
	        }
	      }
	    }
	    recursivelyGarbageCollect(this.listenerTree);
	
	    return this;
	  };
	
	  EventEmitter.prototype.offAny = function(fn) {
	    var i = 0, l = 0, fns;
	    if (fn && this._all && this._all.length > 0) {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++) {
	        if(fn === fns[i]) {
	          fns.splice(i, 1);
	          this.emit("removeListenerAny", fn);
	          return this;
	        }
	      }
	    } else {
	      fns = this._all;
	      for(i = 0, l = fns.length; i < l; i++)
	        this.emit("removeListenerAny", fns[i]);
	      this._all = [];
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;
	
	  EventEmitter.prototype.removeAllListeners = function(type) {
	    if (arguments.length === 0) {
	      !this._events || init.call(this);
	      return this;
	    }
	
	    if(this.wildcard) {
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      var leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
	
	      for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
	        var leaf = leafs[iLeaf];
	        leaf._listeners = null;
	      }
	    }
	    else {
	      if (!this._events || !this._events[type]) return this;
	      this._events[type] = null;
	    }
	    return this;
	  };
	
	  EventEmitter.prototype.listeners = function(type) {
	    if(this.wildcard) {
	      var handlers = [];
	      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
	      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
	      return handlers;
	    }
	
	    this._events || init.call(this);
	
	    if (!this._events[type]) this._events[type] = [];
	    if (!isArray(this._events[type])) {
	      this._events[type] = [this._events[type]];
	    }
	    return this._events[type];
	  };
	
	  EventEmitter.prototype.listenersAny = function() {
	
	    if(this._all) {
	      return this._all;
	    }
	    else {
	      return [];
	    }
	
	  };
	
	  if (true) {
	     // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return EventEmitter;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // CommonJS
	    module.exports = EventEmitter;
	  }
	  else {
	    // Browser global.
	    window.EventEmitter2 = EventEmitter;
	  }
	}();


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = [{"type":"element","tag":"header","attrs":[{"type":"attribute","name":"_r-729c9190","value":""}],"children":[{"type":"text","text":"\n\tPure\n"}]},{"type":"text","text":"\n"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"wrapper"},{"type":"attribute","name":"_r-729c9190","value":""}],"children":[{"type":"text","text":"\n\t"},{"type":"element","tag":"Nav","attrs":[{"type":"attribute","name":"active","value":{"type":"expression","body":"c._sg_('active', d, e)","constant":false,"setbody":"c._ss_('active',p_,d, '=', 1)"}},{"type":"attribute","name":"_r-729c9190","value":""}],"children":[]},{"type":"text","text":"\n\t"},{"type":"element","tag":"div","attrs":[{"type":"attribute","name":"class","value":"docs"},{"type":"attribute","name":"ref"},{"type":"attribute","name":"_r-729c9190","value":""}],"children":[{"type":"text","text":"\n\t\t"},{"type":"list","sequence":{"type":"expression","body":"c._sg_('doc', d, e)","constant":false,"setbody":"c._ss_('doc',p_,d, '=', 1)"},"alternate":[],"variable":"d","body":[{"type":"text","text":"\n\t\t"},{"type":"element","tag":"Demo","attrs":[{"type":"attribute","name":"source","value":{"type":"expression","body":"c._sg_('html', c._sg_('code', c._sg_('d', d, e)))","constant":false,"setbody":"c._ss_('html',p_,c._sg_('code', c._sg_('d', d, e)), '=', 0)"}},{"type":"attribute","name":"markdown","value":{"type":"expression","body":"c._sg_('html', c._sg_('d', d, e))","constant":false,"setbody":"c._ss_('html',p_,c._sg_('d', d, e), '=', 0)"}},{"type":"attribute","name":"_r-729c9190","value":""}],"children":[]},{"type":"text","text":"\n\t\t"}]},{"type":"text","text":"\n\n\t\t\n\n\t\t\n\t\t"},{"type":"element","tag":"API","attrs":[{"type":"attribute","name":"_r-729c9190","value":""}],"children":[]},{"type":"text","text":"\n\t"}]},{"type":"text","text":"\n"}]}]

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _docs = __webpack_require__(25);
	
	var _docs2 = _interopRequireDefault(_docs);
	
	var _dispatcher = __webpack_require__(21);
	
	var _dispatcher2 = _interopRequireDefault(_dispatcher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		'/': function _() {
			return _dispatcher2.default.emit('update', _docs2.default.Button, 'Button');
		},
		'/Button': function Button() {
			return _dispatcher2.default.emit('update', _docs2.default.Button, 'Button');
		},
		'/Input': function Input() {
			return _dispatcher2.default.emit('update', _docs2.default.Input);
		},
		'/Textarea': function Textarea() {
			return _dispatcher2.default.emit('update', _docs2.default.Textarea);
		},
		'/Radio': function Radio() {
			return _dispatcher2.default.emit('update', _docs2.default.Radio);
		},
		'/Checkbox': function Checkbox() {
			return _dispatcher2.default.emit('update', _docs2.default.Checkbox);
		},
		'/Switch': function Switch() {
			return _dispatcher2.default.emit('update', _docs2.default.Switch);
		},
		'/Modal': function Modal() {
			return _dispatcher2.default.emit('update', _docs2.default.Modal);
		},
		'/Form': function Form() {
			return _dispatcher2.default.emit('update', _docs2.default.Form);
		}
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = {
		"Button": [
			{
				"path": "Button/basic.md",
				"attrs": {
					"order": 1
				},
				"source": "\r\nBasic Usage\r\n\r\n```html\r\n<Button primary>Primary</Button>\r\n<Button>Normal</Button>\r\n```\r\n\r\n```css\r\n.c {\r\n\tcolor: #333;\r\n}\r\n```\r\n",
				"html": "<p>Basic Usage</p>\n",
				"code": {
					"html": "<Button primary>Primary</Button>\n<Button>Normal</Button>",
					"css": ".c {\n    color: #333;\n}"
				}
			},
			{
				"path": "Button/event.md",
				"attrs": {
					"order": 2
				},
				"source": "\r\nEvent\r\n\r\n```html\r\n<Button on-click=\"{ v = Math.random() }\">Random</Button>\r\n<Input value=\"{ v }\"></Input>\r\n```\r\n",
				"html": "<p>Event</p>\n",
				"code": {
					"html": "<Button on-click=\"{ v = Math.random() }\">Random</Button>\n<Input value=\"{ v }\"></Input>"
				}
			}
		],
		"Checkbox": [
			{
				"path": "Checkbox/basic.md",
				"attrs": {
					"order": 1
				},
				"source": "\r\nBasic Usage\r\n\r\n```html\r\n<Checkbox checked=\"{ false }\">Option</Checkbox>\r\n```\r\n",
				"html": "<p>Basic Usage</p>\n",
				"code": {
					"html": "<Checkbox checked=\"{ false }\">Option</Checkbox>"
				}
			},
			{
				"path": "Checkbox/group.md",
				"attrs": {
					"order": 2
				},
				"source": "\r\nGroup\r\n\r\n```html\r\n<CheckboxGroup checked=\"{ 2 }\">\r\n\t<Checkbox value=\"{ 1 }\">Option 1</Checkbox>\r\n\t<Checkbox value=\"{ 2 }\">Option 2</Checkbox>\r\n\t<Checkbox value=\"{ 3 }\">Option 3</Checkbox>\r\n</CheckboxGroup>\r\n```\r\n",
				"html": "<p>Group</p>\n",
				"code": {
					"html": "<CheckboxGroup checked=\"{ 2 }\">\n    <Checkbox value=\"{ 1 }\">Option 1</Checkbox>\n    <Checkbox value=\"{ 2 }\">Option 2</Checkbox>\n    <Checkbox value=\"{ 3 }\">Option 3</Checkbox>\n</CheckboxGroup>"
				}
			},
			{
				"path": "Checkbox/event.md",
				"attrs": {
					"order": 3
				},
				"source": "\r\nEvent\r\n\r\n```html\r\n<CheckboxGroup on-change=\"{ v = $event }\">\r\n\t<Checkbox value=\"{ 1 }\">Option 1</Checkbox>\r\n\t<Checkbox value=\"{ 2 }\">Option 2</Checkbox>\r\n\t<Checkbox value=\"{ 3 }\">Option 3</Checkbox>\r\n</CheckboxGroup>\r\n<br />\r\n<br />\r\nChecked：{ ( v && v.length > 0 ) ? v : 'none' }\r\n```\r\n",
				"html": "<p>Event</p>\n",
				"code": {
					"html": "<CheckboxGroup on-change=\"{ v = $event }\">\n    <Checkbox value=\"{ 1 }\">Option 1</Checkbox>\n    <Checkbox value=\"{ 2 }\">Option 2</Checkbox>\n    <Checkbox value=\"{ 3 }\">Option 3</Checkbox>\n</CheckboxGroup>\n<br />\n<br />\nChecked：{ ( v && v.length > 0 ) ? v : 'none' }"
				}
			}
		],
		"Form": [
			{
				"path": "Form/intro.md",
				"attrs": {
					"order": 1
				},
				"source": "\r\n### pure provides you two common layout\r\n",
				"html": "<h3 id=\"pure-provides-you-two-common-layout\">pure provides you two common layout</h3>\n",
				"code": {}
			},
			{
				"path": "Form/horizontal.md",
				"attrs": {
					"order": 2
				},
				"source": "\r\nHorizontal\r\n\r\n```html\r\n<Form>\r\n\t<FormItem>\r\n\t\t<FormLabel>Nickname</FormLabel>\r\n\t\t<FormControl>\r\n\t\t\t<Input placeholder=\"Your Nickname\"></Input>\r\n\t\t</FormControl>\r\n\t</FormItem>\r\n\t\r\n\t<FormItem>\r\n\t\t<FormLabel>Email</FormLabel>\r\n\t\t<FormControl>\r\n\t\t\t<Input placeholder=\"Your Email\"></Input>\r\n\t\t</FormControl>\r\n\t</FormItem>\r\n\r\n\t<FormItem>\r\n\t\t<FormLabel></FormLabel>\r\n\t\t<FormControl>\r\n\t\t\t<Checkbox>Agree something</Checkbox>\r\n\t\t</FormControl>\r\n\t</FormItem>\r\n\r\n\t<FormItem>\r\n\t\t<FormLabel></FormLabel>\r\n\t\t<FormControl>\r\n\t\t\t<Button primary>Register</Button>\r\n\t\t</FormControl>\r\n\t</FormItem>\r\n</Form>\r\n```\r\n",
				"html": "<p>Horizontal</p>\n",
				"code": {
					"html": "<Form>\n    <FormItem>\n        <FormLabel>Nickname</FormLabel>\n        <FormControl>\n            <Input placeholder=\"Your Nickname\"></Input>\n        </FormControl>\n    </FormItem>\n\n    <FormItem>\n        <FormLabel>Email</FormLabel>\n        <FormControl>\n            <Input placeholder=\"Your Email\"></Input>\n        </FormControl>\n    </FormItem>\n\n    <FormItem>\n        <FormLabel></FormLabel>\n        <FormControl>\n            <Checkbox>Agree something</Checkbox>\n        </FormControl>\n    </FormItem>\n\n    <FormItem>\n        <FormLabel></FormLabel>\n        <FormControl>\n            <Button primary>Register</Button>\n        </FormControl>\n    </FormItem>\n</Form>"
				}
			},
			{
				"path": "Form/vertical.md",
				"attrs": {
					"order": 3
				},
				"source": "\r\n```html\r\n<Form v>\r\n\t<FormItem>\r\n\t\t<FormLabel>Nickname</FormLabel>\r\n\t\t<FormControl>\r\n\t\t\t<Input placeholder=\"Your Nickname\"></Input>\r\n\t\t</FormControl>\r\n\t</FormItem>\r\n\t\r\n\t<FormItem>\r\n\t\t<FormLabel>Email</FormLabel>\r\n\t\t<FormControl>\r\n\t\t\t<Input placeholder=\"Your Email\"></Input>\r\n\t\t</FormControl>\r\n\t</FormItem>\r\n\r\n\t<FormItem>\r\n\t\t<FormLabel></FormLabel>\r\n\t\t<FormControl>\r\n\t\t\t<Checkbox>Agree something</Checkbox>\r\n\t\t</FormControl>\r\n\t</FormItem>\r\n\r\n\t<FormItem>\r\n\t\t<FormLabel></FormLabel>\r\n\t\t<FormControl>\r\n\t\t\t<Button primary>Register</Button>\r\n\t\t</FormControl>\r\n\t</FormItem>\r\n</Form>\r\n```\r\n",
				"html": "",
				"code": {
					"html": "<Form v>\n    <FormItem>\n        <FormLabel>Nickname</FormLabel>\n        <FormControl>\n            <Input placeholder=\"Your Nickname\"></Input>\n        </FormControl>\n    </FormItem>\n\n    <FormItem>\n        <FormLabel>Email</FormLabel>\n        <FormControl>\n            <Input placeholder=\"Your Email\"></Input>\n        </FormControl>\n    </FormItem>\n\n    <FormItem>\n        <FormLabel></FormLabel>\n        <FormControl>\n            <Checkbox>Agree something</Checkbox>\n        </FormControl>\n    </FormItem>\n\n    <FormItem>\n        <FormLabel></FormLabel>\n        <FormControl>\n            <Button primary>Register</Button>\n        </FormControl>\n    </FormItem>\n</Form>"
				}
			}
		],
		"Input": [
			{
				"path": "Input/basic.md",
				"attrs": {
					"order": 1
				},
				"source": "\r\nBasic Usage\r\n\r\n```html\r\n<Input placeholder=\"placeholder\" value=\"v\"></Input>\r\n```\r\n",
				"html": "<p>Basic Usage</p>\n",
				"code": {
					"html": "<Input placeholder=\"placeholder\" value=\"v\"></Input>"
				}
			},
			{
				"path": "Input/event.md",
				"attrs": {
					"order": 2
				},
				"source": "\r\nEvent\r\n\r\n```html\r\n<Input on-change=\"{ v = $event }\"></Input>\r\n<Input value=\"{ v }\"></Input>\r\n```\r\n",
				"html": "<p>Event</p>\n",
				"code": {
					"html": "<Input on-change=\"{ v = $event }\"></Input>\n<Input value=\"{ v }\"></Input>"
				}
			}
		],
		"Modal": [
			{
				"path": "Modal/basic.md",
				"attrs": {
					"order": 1
				},
				"source": "\r\nBasic Usage\r\n\r\n```html\r\n<Button primary on-click=\"{ show = true }\">Open Modal</Button>\r\n{#if show}\r\n<Modal\r\n\ttitle=\"Modal Title\"\r\n\tok-text=\"Confirm\"\r\n\tcancel-text=\"Cancel\"\r\n\ton-cancel=\"{ show = false }\"\r\n\ton-ok=\"{ show = false }\"\r\n>\r\n\t<div class=\"modal-example-center\">\r\n\t\t<img src=\"http://i0.hdslb.com/group1/M00/B7/58/oYYBAFdLrESAWc1eAACDBgqOgmI788.gif\" alt=\"something\">\r\n\t</div>\r\n</Modal>\r\n{/if}\r\n```\r\n",
				"html": "<p>Basic Usage</p>\n",
				"code": {
					"html": "<Button primary on-click=\"{ show = true }\">Open Modal</Button>\n{#if show}\n<Modal\n    title=\"Modal Title\"\n    ok-text=\"Confirm\"\n    cancel-text=\"Cancel\"\n    on-cancel=\"{ show = false }\"\n    on-ok=\"{ show = false }\"\n>\n    <div class=\"modal-example-center\">\n        <img src=\"http://i0.hdslb.com/group1/M00/B7/58/oYYBAFdLrESAWc1eAACDBgqOgmI788.gif\" alt=\"something\">\n    </div>\n</Modal>\n{/if}"
				}
			}
		],
		"Radio": [
			{
				"path": "Radio/basic.md",
				"attrs": {
					"order": 1
				},
				"source": "\r\nBasic Usage\r\n\r\n```html\r\n<Radio checked=\"{ false }\">Option</Radio>\r\n```\r\n",
				"html": "<p>Basic Usage</p>\n",
				"code": {
					"html": "<Radio checked=\"{ false }\">Option</Radio>"
				}
			},
			{
				"path": "Radio/group.md",
				"attrs": {
					"order": 2
				},
				"source": "\r\nGroup\r\n\r\n```html\r\n<RadioGroup checked=\"{ 2 }\">\r\n\t<Radio value=\"{ 1 }\">Option 1</Radio>\r\n\t<Radio value=\"{ 2 }\">Option 2</Radio>\r\n\t<Radio value=\"{ 3 }\">Option 3</Radio>\r\n</RadioGroup>\r\n```\r\n",
				"html": "<p>Group</p>\n",
				"code": {
					"html": "<RadioGroup checked=\"{ 2 }\">\n    <Radio value=\"{ 1 }\">Option 1</Radio>\n    <Radio value=\"{ 2 }\">Option 2</Radio>\n    <Radio value=\"{ 3 }\">Option 3</Radio>\n</RadioGroup>"
				}
			},
			{
				"path": "Radio/event.md",
				"attrs": {
					"order": 3
				},
				"source": "\r\nEvent\r\n\r\n```html\r\n<RadioGroup on-change=\"{ v = $event }\">\r\n\t<Radio value=\"{ 1 }\">Option 1</Radio>\r\n\t<Radio value=\"{ 2 }\">Option 2</Radio>\r\n\t<Radio value=\"{ 3 }\">Option 3</Radio>\r\n</RadioGroup>\r\n<br />\r\n<br />\r\nChecked：{ v || 'none' }\r\n```\r\n",
				"html": "<p>Event</p>\n",
				"code": {
					"html": "<RadioGroup on-change=\"{ v = $event }\">\n    <Radio value=\"{ 1 }\">Option 1</Radio>\n    <Radio value=\"{ 2 }\">Option 2</Radio>\n    <Radio value=\"{ 3 }\">Option 3</Radio>\n</RadioGroup>\n<br />\n<br />\nChecked：{ v || 'none' }"
				}
			}
		],
		"Switch": [
			{
				"path": "Switch/basic.md",
				"attrs": {
					"order": 1
				},
				"source": "\r\nBasic Usage\r\n\r\n```html\r\n<Switch checked=\"{ false }\"></Switch>\r\n```\r\n",
				"html": "<p>Basic Usage</p>\n",
				"code": {
					"html": "<Switch checked=\"{ false }\"></Switch>"
				}
			},
			{
				"path": "Switch/event.md",
				"attrs": {
					"order": 2
				},
				"source": "\r\nEvent\r\n\r\n```html\r\n<Switch on-change=\"{ v = $event }\"></Switch>\r\n<br />\r\n<br />\r\nChecked: { v !== undefined ? v : 'none' }\r\n```\r\n",
				"html": "<p>Event</p>\n",
				"code": {
					"html": "<Switch on-change=\"{ v = $event }\"></Switch>\n<br />\n<br />\nChecked: { v !== undefined ? v : 'none' }"
				}
			}
		],
		"Textarea": [
			{
				"path": "Textarea/basic.md",
				"attrs": {
					"order": 1
				},
				"source": "\r\nBasic Usage\r\n\r\n```html\r\n<Textarea></Textarea>\r\n```\r\n",
				"html": "<p>Basic Usage</p>\n",
				"code": {
					"html": "<Textarea></Textarea>"
				}
			}
		]
	};

/***/ }
/******/ ]);
//# sourceMappingURL=app-74e0181f.js.map