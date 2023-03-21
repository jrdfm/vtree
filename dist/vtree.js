var VTree =
/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
}
      /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/vtree.js");
    /******/
})
/************************************************************************/
/******/({

/***/ "./src/decorator/linkName.js":
/*!***********************************!*\
  !*** ./src/decorator/linkName.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar pad = 4;\n\nvar LinkNameDecorator = function () {\n  function LinkNameDecorator(linkName) {\n    _classCallCheck(this, LinkNameDecorator);\n\n    this.linkName = linkName;\n  }\n\n  _createClass(LinkNameDecorator, [{\n    key: 'render',\n    value: function render(g, oldG, width) {\n      var t = g.append('text').text(this.linkName);\n\n      var b = t.node().getBBox();\n      var textW = Math.ceil(b.width);\n      var textH = Math.ceil(b.height);\n\n      var textTotalW = textW + pad * 2;\n\n      var newW = width;\n\n      if (textTotalW > width) {\n        newW = textTotalW;\n      }\n\n      var textTotalH = textH + pad;\n\n      var dw = newW - width;\n      var dh = textTotalH;\n      var dx = Math.round(dw / 2);\n      var dy = textTotalH;\n\n      t.attr('x', Math.round(newW / 2)).attr('y', textH).attr('text-anchor', 'middle');\n\n      return { dx: dx, dy: dy, dw: dw, dh: dh };\n    }\n  }]);\n\n  return LinkNameDecorator;\n}();\n\nexports.default = LinkNameDecorator;\n\n//# sourceURL=webpack://VTree/./src/decorator/linkName.js?");

      /***/
    }),

/***/ "./src/layout/array.js":
/*!*****************************!*\
  !*** ./src/layout/array.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/* global d3 */\n\nvar DURATION = 1000;\n\nvar diagonal = d3.svg.diagonal();\n\nvar ArrayLayout = function () {\n  function ArrayLayout() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, ArrayLayout);\n\n    this.hideLinks = options.hideLinks;\n  }\n\n  _createClass(ArrayLayout, [{\n    key: 'layout',\n    value: function layout(node) {\n      calcChildrenWidth(node);\n      calcTotalSize(node);\n\n      _layout(node);\n    }\n  }, {\n    key: 'renderLinks',\n    value: function renderLinks(node) {\n      if (!this.hideLinks) {\n        _renderLinks(node);\n      }\n    }\n  }]);\n\n  return ArrayLayout;\n}();\n\nexports.default = ArrayLayout;\n\n\nfunction _layout(node) {\n  if (node.children.length === 0) {\n    return;\n  }\n\n  var x = -Math.round(node.childrenWidth / 2);\n  var y = 0;\n\n  node.children.forEach(function (child) {\n    child.x = x + Math.round(child.totalWidth / 2) - Math.round(child.width / 2);\n    child.y = y;\n\n    child.g.transition().duration(DURATION).attr('transform', 'translate(' + child.x + ',' + child.y + ')');\n\n    x += child.totalWidth + node.margin;\n  });\n}\n\nfunction _renderLinks(node) {\n  if (node.children.length === 0) {\n    return;\n  }\n\n  var h = node.children[0].linkY;\n\n  node.children.forEach(function (child) {\n    h = Math.min(h, child.linkY);\n  });\n\n  var orig = { x: 0, y: 0 };\n\n  var i, src, dst;\n\n  for (i = 0; i < node.children.length; i++) {\n    if (i === 0) {\n      continue;\n    }\n\n    var prev = node.children[i - 1];\n    var child = node.children[i];\n\n    src = {\n      x: prev.x + prev.linkX,\n      y: prev.y + h\n    };\n\n    dst = {\n      x: child.x + child.linkX,\n      y: child.y + h\n    };\n\n    var link = node.g.insert('path', ':first-child').attr('class', 'vtree-link').attr('d', function () {\n      return diagonal({ source: orig, target: orig });\n    });\n\n    link.transition().duration(DURATION).attr('d', function () {\n      return diagonal({ source: src, target: dst });\n    });\n  }\n}\n\nfunction calcChildrenWidth(node) {\n  if (node.children.length === 0) {\n    node.childrenWidth = 0;\n\n    return;\n  }\n\n  var w = 0;\n\n  node.children.forEach(function (child) {\n    w += child.totalWidth;\n  });\n\n  w += (node.children.length - 1) * node.margin;\n\n  node.childrenWidth = w;\n}\n\nfunction calcTotalSize(node) {\n  if (node.children.length === 0) {\n    node.totalWidth = node.width;\n    node.totalHeight = node.height;\n\n    return;\n  }\n\n  node.totalWidth = Math.max(node.width, node.childrenWidth);\n\n  var maxChildH = 0;\n\n  node.children.forEach(function (child) {\n    maxChildH = Math.max(maxChildH, child.totalHeight);\n  });\n\n  node.totalHeight = maxChildH;\n}\n\n//# sourceURL=webpack://VTree/./src/layout/array.js?");

      /***/
}),

/***/ "./src/layout/tree.js":
/*!****************************!*\
  !*** ./src/layout/tree.js ***!
  \****************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global d3 */\n\nvar _array = __webpack_require__(/*! ../node/array.js */ \"./src/node/array.js\");\n\nvar _array2 = _interopRequireDefault(_array);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MARGIN = 10;\nvar HEIGHT = 50;\nvar DURATION = 1000;\n\nvar diagonal = d3.svg.diagonal();\n\nvar TreeLayout = function () {\n  function TreeLayout() {\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, TreeLayout);\n\n    this.height = options.height || HEIGHT;\n  }\n\n  _createClass(TreeLayout, [{\n    key: 'layout',\n    value: function layout(node) {\n      calcChildrenWidth(node);\n      calcTotalSize(node, this.height);\n\n      _layout(node, this.height);\n    }\n  }, {\n    key: 'renderLinks',\n    value: function renderLinks(node) {\n      _renderLinks(node);\n    }\n  }]);\n\n  return TreeLayout;\n}();\n\nexports.default = TreeLayout;\n\n\nfunction _layout(node, height) {\n  if (node.children.length === 0) {\n    return;\n  }\n\n  var x = Math.round(node.width / 2) - Math.round(node.childrenWidth / 2);\n  var y = node.height + height;\n\n  node.children.forEach(function (child) {\n    child.x = x + Math.round(child.totalWidth / 2) - Math.round(child.width / 2);\n    child.y = y;\n\n    child.g.transition().duration(DURATION).attr('transform', 'translate(' + child.x + ',' + child.y + ')');\n\n    x += child.totalWidth + MARGIN;\n  });\n}\n\nfunction _renderLinks(node) {\n  var src = {\n    x: node.linkX,\n    y: node.linkY\n  };\n\n  node.children.forEach(function (child) {\n    var dst = {\n      x: child.x + child.linkX,\n      y: child.y + child.linkY\n    };\n\n    if (child.constructor === _array2.default) {\n      if (child.children.length !== 0) {\n        var gc = child.children[0];\n        dst.x += gc.x + gc.linkX;\n        dst.y += gc.y + gc.linkY;\n      }\n    }\n\n    var link = node.g.insert('path', ':first-child').attr('class', 'vtree-link').attr('d', function () {\n      return diagonal({ source: src, target: src });\n    });\n\n    link.transition().duration(DURATION).attr('d', function () {\n      return diagonal({ source: src, target: dst });\n    });\n  });\n}\n\nfunction calcChildrenWidth(node) {\n  if (node.children.length === 0) {\n    node.childrenWidth = 0;\n\n    return;\n  }\n\n  var w = 0;\n\n  node.children.forEach(function (child) {\n    w += child.totalWidth;\n  });\n\n  w += (node.children.length - 1) * MARGIN;\n\n  node.childrenWidth = w;\n}\n\nfunction calcTotalSize(node, height) {\n  if (node.children.length === 0) {\n    node.totalWidth = node.width;\n    node.totalHeight = node.height;\n\n    return;\n  }\n\n  node.totalWidth = Math.max(node.width, node.childrenWidth);\n\n  var maxChildH = 0;\n\n  node.children.forEach(function (child) {\n    maxChildH = Math.max(maxChildH, child.totalHeight);\n  });\n\n  node.totalHeight = node.height + height + maxChildH;\n}\n\n//# sourceURL=webpack://VTree/./src/layout/tree.js?");

      /***/
}),

/***/ "./src/node/array.js":
/*!***************************!*\
  !*** ./src/node/array.js ***!
  \***************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _node = __webpack_require__(/*! ./node.js */ \"./src/node/node.js\");\n\nvar _node2 = _interopRequireDefault(_node);\n\nvar _array = __webpack_require__(/*! ../layout/array.js */ \"./src/layout/array.js\");\n\nvar _array2 = _interopRequireDefault(_array);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar defaultLayout = new _array2.default();\n\nvar MARGIN = 10;\n\nvar ArrayNode = function (_Node) {\n  _inherits(ArrayNode, _Node);\n\n  function ArrayNode(nodes, layout) {\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, ArrayNode);\n\n    if (!layout) {\n      layout = defaultLayout;\n    }\n\n    var _this = _possibleConstructorReturn(this, (ArrayNode.__proto__ || Object.getPrototypeOf(ArrayNode)).call(this, null, nodes, layout));\n\n    _this.width = 0;\n    _this.height = 0;\n\n    _this.linkX = 0;\n    _this.linkY = 0;\n\n    _this.margin = options.margin || MARGIN;\n    return _this;\n  }\n\n  _createClass(ArrayNode, [{\n    key: '_render',\n    value: function _render() {}\n  }]);\n\n  return ArrayNode;\n}(_node2.default);\n\nexports.default = ArrayNode;\n\n//# sourceURL=webpack://VTree/./src/node/array.js?");

      /***/
}),

/***/ "./src/node/dummy.js":
/*!***************************!*\
  !*** ./src/node/dummy.js ***!
  \***************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _node = __webpack_require__(/*! ./node.js */ \"./src/node/node.js\");\n\nvar _node2 = _interopRequireDefault(_node);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DummyNode = function (_Node) {\n  _inherits(DummyNode, _Node);\n\n  function DummyNode(child) {\n    _classCallCheck(this, DummyNode);\n\n    var _this = _possibleConstructorReturn(this, (DummyNode.__proto__ || Object.getPrototypeOf(DummyNode)).call(this, null, [child]));\n\n    _this.r = 4;\n    return _this;\n  }\n\n  _createClass(DummyNode, [{\n    key: '_render',\n    value: function _render(g) {\n      g.append('circle').attr('cx', this.r).attr('cy', this.r).attr('r', this.r);\n\n      this.width = this.r * 2;\n      this.height = this.r * 2;\n\n      this.linkX = this.r;\n      this.linkY = this.r;\n    }\n  }]);\n\n  return DummyNode;\n}(_node2.default);\n\nexports.default = DummyNode;\n\n//# sourceURL=webpack://VTree/./src/node/dummy.js?");

      /***/
}),

/***/ "./src/node/node.js":
/*!**************************!*\
  !*** ./src/node/node.js ***!
  \**************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Node\n *\n * A tree consists of nodes and links.\n * A node consists of the following fields:\n *\n * - id : auto increment ID.\n * - data : data which may be displayed.\n *          The data format is determined by the renderer.\n * - children : children of the node\n */\n\nvar curMaxId = 0;\n\nvar Node = function () {\n  function Node(data, children, layout) {\n    _classCallCheck(this, Node);\n\n    this.id = ++curMaxId;\n    this.data = data;\n    this.children = children;\n\n    if (layout) {\n      this.layout = layout;\n    }\n\n    this.width = 0;\n    this.height = 0;\n\n    this.decorators = [];\n  }\n\n  _createClass(Node, [{\n    key: 'render',\n    value: function render(g) {\n      var _this = this;\n\n      if (this.decorators.length === 0) {\n        this._render(g);\n        return;\n      }\n\n      var prevG = g.append('g');\n      this._render(prevG);\n\n      this.decorators.forEach(function (decorator) {\n        var newG = g.append('g');\n\n        var dbbox = decorator.render(newG, prevG, _this.width, _this.height);\n\n        if (dbbox.dw || dbbox.dh) {\n          _this.width += dbbox.dw;\n          _this.height += dbbox.dh;\n        }\n\n        if (dbbox.dx || dbbox.dy) {\n          prevG.attr('transform', 'translate(' + dbbox.dx + ',' + dbbox.dy + ')');\n\n          _this.linkX += dbbox.dx;\n          _this.linkY += dbbox.dy;\n        }\n\n        prevG = newG;\n      });\n    }\n  }, {\n    key: '_render',\n    value: function _render() {\n      throw new Error('[no overwride errror] _render is not implemented.');\n    }\n  }]);\n\n  return Node;\n}();\n\nexports.default = Node;\n\n//# sourceURL=webpack://VTree/./src/node/node.js?");

      /***/
}),

/***/ "./src/node/string.js":
/*!****************************!*\
  !*** ./src/node/string.js ***!
  \****************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _node = __webpack_require__(/*! ./node.js */ \"./src/node/node.js\");\n\nvar _node2 = _interopRequireDefault(_node);\n\nvar _util = __webpack_require__(/*! ./util.js */ \"./src/node/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar StringNode = function (_Node) {\n  _inherits(StringNode, _Node);\n\n  function StringNode(data) {\n    _classCallCheck(this, StringNode);\n\n    var _this = _possibleConstructorReturn(this, (StringNode.__proto__ || Object.getPrototypeOf(StringNode)).call(this, data, []));\n\n    _this.textPad = 4;\n    return _this;\n  }\n\n  _createClass(StringNode, [{\n    key: '_render',\n    value: function _render(g) {\n      var bbox = (0, _util.appendRectText)(g, 0, 0, this.data, this.textPad);\n\n      this.width = bbox.width;\n      this.height = bbox.height;\n\n      this.linkX = Math.round(this.width / 2);\n      this.linkY = Math.round(this.height / 2);\n    }\n  }]);\n\n  return StringNode;\n}(_node2.default);\n\nexports.default = StringNode;\n\n//# sourceURL=webpack://VTree/./src/node/string.js?");

      /***/
}),

/***/ "./src/node/table.js":
/*!***************************!*\
  !*** ./src/node/table.js ***!
  \***************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _node = __webpack_require__(/*! ./node.js */ \"./src/node/node.js\");\n\nvar _node2 = _interopRequireDefault(_node);\n\nvar _util = __webpack_require__(/*! ./util.js */ \"./src/node/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TableNode = function (_Node) {\n  _inherits(TableNode, _Node);\n\n  function TableNode(data, children) {\n    _classCallCheck(this, TableNode);\n\n    var _this = _possibleConstructorReturn(this, (TableNode.__proto__ || Object.getPrototypeOf(TableNode)).call(this, data, children));\n\n    _this.textPad = 4;\n    return _this;\n  }\n\n  _createClass(TableNode, [{\n    key: '_render',\n    value: function _render(g) {\n      if (this.data.length === 0 || this.data[0].length === 0) {\n        return;\n      }\n\n      var tbl = this.renderCells(g);\n      var size = this.layoutCells(tbl);\n\n      this.width = size.width;\n      this.height = size.height;\n\n      this.linkX = Math.round(this.width / 2);\n      this.linkY = Math.round(this.height / 2);\n    }\n  }, {\n    key: 'renderCells',\n    value: function renderCells(g) {\n      var _this2 = this;\n\n      var tbl = [];\n\n      this.data.forEach(function (row) {\n        var tblRow = [];\n\n        row.forEach(function (col) {\n          var colG = g.append('g');\n          var bbox = (0, _util.appendRectText)(colG, 0, 0, col, _this2.textPad);\n\n          tblRow.push({\n            g: colG,\n            bbox: bbox\n          });\n        });\n\n        tbl.push(tblRow);\n      });\n\n      return tbl;\n    }\n  }, {\n    key: 'layoutCells',\n    value: function layoutCells(tbl) {\n      var maxW = this.calcMaxWidths(tbl);\n      var maxH = this.calcMaxHeights(tbl);\n\n      var x = 0;\n      var y = 0;\n\n      tbl.forEach(function (row, rowI) {\n        x = 0;\n\n        row.forEach(function (col, colI) {\n          col.g.attr('transform', 'translate(' + x + ',' + y + ')');\n          col.g.select('rect').attr('width', maxW[colI]).attr('height', maxH[rowI]);\n\n          x += maxW[colI];\n        });\n\n        y += maxH[rowI];\n      });\n\n      return { width: x, height: y };\n    }\n  }, {\n    key: 'calcMaxWidths',\n    value: function calcMaxWidths(tbl) {\n      var maxW = [];\n      var colI, rowI;\n\n      for (colI = 0; colI < tbl[0].length; colI++) {\n        var w = 0;\n\n        for (rowI = 0; rowI < tbl.length; rowI++) {\n          w = Math.max(w, tbl[rowI][colI].bbox.width);\n        }\n\n        maxW.push(w);\n      }\n\n      return maxW;\n    }\n  }, {\n    key: 'calcMaxHeights',\n    value: function calcMaxHeights(tbl) {\n      var maxH = [];\n\n      tbl.forEach(function (row) {\n        var h = 0;\n\n        row.forEach(function (col) {\n          h = Math.max(h, col.bbox.height);\n        });\n\n        maxH.push(h);\n      });\n\n      return maxH;\n    }\n  }]);\n\n  return TableNode;\n}(_node2.default);\n\nexports.default = TableNode;\n\n//# sourceURL=webpack://VTree/./src/node/table.js?");

      /***/
}),

/***/ "./src/node/util.js":
/*!**************************!*\
  !*** ./src/node/util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n}); \
      \n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } \
      : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\
      \n\nexports.appendRectText = appendRectText;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } } \
      \n\nvar MAX_LEN = 42;\n\nvar BBox = exports.BBox = function BBox() {\n  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\
        \n  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\
        \n  var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n\n  _classCallCheck(this, BBox);\n\n  this.x = x;\n  this.y = y;\n  this.width = width;\n  this.height = height;\
        \n};\n\nfunction appendRectText(g, x, y, text, pad) {\n  if (typeof text === 'string' && text.length > MAX_LEN) {\n    text = text.substr(0, MAX_LEN) + '...';\n  }\n\n  var rect = g.append('rect').attr('class', getClassName(text));\
        \n\n  var t = g.append('text').text(text);\n\n  var b = t.node().getBBox();\n  var w = Math.ceil(b.width);\n  var h = Math.ceil(b.height);\n\n  t.attr('x', x + pad).attr('y', y + pad + h);\n\n  var bbox = new BBox(x, y, w + pad * 2, h + pad * 2);\
        \n\n  rect.attr('x', bbox.x).attr('y', bbox.y).attr('width', bbox.width).attr('height', bbox.height);\n\n  return bbox;\n}\n\nfunction getClassName(d) {\n  var name = '';\n  var type = typeof d === 'undefined' ? 'undefined' : _typeof(d);\
        \n\n  if (d === null) {\n    return 'null-text';\n  } else if (type === 'string') {\n    name = 'string-text';\n  } else if (type === 'number') {\n    name = 'number-text';\n  } else if (type === 'boolean') {\
          \n    name = 'boolean-text';\n  } else {\n    name = 'unknown-text';\n  }\n\n  return name;\n}\n\n//# sourceURL=webpack://VTree/./src/node/util.js?");

      /***/
    }),

/***/ "./src/reader/object.js":
/*!******************************!*\
  !*** ./src/reader/object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _string = __webpack_require__(/*! ../node/string.js */ \"./src/node/string.js\");\n\nvar _string2 = _interopRequireDefault(_string);\n\nvar _array = __webpack_require__(/*! ../node/array.js */ \"./src/node/array.js\");\n\nvar _array2 = _interopRequireDefault(_array);\n\nvar _table = __webpack_require__(/*! ../node/table.js */ \"./src/node/table.js\");\n\nvar _table2 = _interopRequireDefault(_table);\n\nvar _dummy = __webpack_require__(/*! ../node/dummy.js */ \"./src/node/dummy.js\");\n\nvar _dummy2 = _interopRequireDefault(_dummy);\n\nvar _linkName = __webpack_require__(/*! ../decorator/linkName.js */ \"./src/decorator/linkName.js\");\n\nvar _linkName2 = _interopRequireDefault(_linkName);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ObjectReader = function () {\n  function ObjectReader() {\n    _classCallCheck(this, ObjectReader);\n  }\n\n  _createClass(ObjectReader, [{\n    key: 'read',\n    value: function read(obj) {\n      return obj2node(obj, '');\n    }\n  }]);\n\n  return ObjectReader;\n}();\n\nexports.default = ObjectReader;\n\n\nfunction obj2node(obj, linkName) {\n  var node;\n\n  if (isPrimitive(obj)) {\n    node = new _string2.default(obj);\n  } else if (Array.isArray(obj)) {\n    var nodes = [];\n\n    obj.forEach(function (item, i) {\n      if (Array.isArray(item)) {\n        node = new _dummy2.default(obj2node(item, ''));\n        node.decorators.push(new _linkName2.default(linkName + '[' + i + ']'));\n        nodes.push(node);\n      } else {\n        node = obj2node(item, linkName + '[' + i + ']');\n        nodes.push(node);\n      }\n    });\n\n    // empty array\n    if (nodes.length === 0) {\n      node = obj2node(null, linkName + '[]');\n      nodes.push(node);\n    }\n\n    node = new _array2.default(nodes);\n  } else {\n    var name;\n    var tbl = [];\n    var children = [];\n\n    for (name in obj) {\n      if (!obj.hasOwnProperty(name)) {\n        continue;\n      }\n\n      var data = obj[name];\n\n      if (isPrimitive(data)) {\n        tbl.push([name, data]);\n      } else {\n        children.push(obj2node(data, name));\n      }\n    }\n\n    if (tbl.length === 0) {\n      node = new _table2.default([[' ', ' ']], children);\n    } else {\n      node = new _table2.default(tbl, children);\n    }\n  }\n\n  if (linkName !== '' && node.constructor !== _array2.default) {\n    node.decorators.push(new _linkName2.default(linkName));\n  }\n\n  return node;\n}\n\nfunction isPrimitive(d) {\n  var type = typeof d === 'undefined' ? 'undefined' : _typeof(d);\n\n  if (d === null || type === 'string' || type === 'number' || type === 'boolean') {\n    return true;\n  }\n\n  return false;\n}\n\n//# sourceURL=webpack://VTree/./src/reader/object.js?");

      /***/
}),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.visitBefore = visitBefore;\nexports.visitAfter = visitAfter;\nfunction visitBefore(node, callback) {\n  var nodes = [node];\n\n  while (nodes.length !== 0) {\n    node = nodes.pop();\n\n    callback(node);\n\n    var children = node.children;\n\n    if (children) {\n      var n = children.length;\n\n      while (--n >= 0) {\n        nodes.push(children[n]);\n      }\n    }\n  }\n}\n\nfunction visitAfter(node, callback) {\n  var nodes = [node];\n  var nodes2 = [];\n\n  while (nodes.length !== 0) {\n    node = nodes.pop();\n\n    nodes2.push(node);\n\n    var children = node.children;\n\n    if (children) {\n      var i = -1;\n      var n = children.length;\n\n      while (++i < n) {\n        nodes.push(children[i]);\n      }\n    }\n  }\n\n  while (nodes2.length !== 0) {\n    node = nodes2.pop();\n\n    callback(node);\n  }\n}\n\n//# sourceURL=webpack://VTree/./src/util.js?");

      /***/
}),

/***/ "./src/vtree.js":
/*!**********************!*\
  !*** ./src/vtree.js ***!
  \**********************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

      "use strict";
      eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global d3 */\n\nvar _node = __webpack_require__(/*! ./node/node.js */ \"./src/node/node.js\");\n\nvar _node2 = _interopRequireDefault(_node);\n\nvar _string = __webpack_require__(/*! ./node/string.js */ \"./src/node/string.js\");\n\nvar _string2 = _interopRequireDefault(_string);\n\nvar _table = __webpack_require__(/*! ./node/table.js */ \"./src/node/table.js\");\n\nvar _table2 = _interopRequireDefault(_table);\n\nvar _array = __webpack_require__(/*! ./node/array.js */ \"./src/node/array.js\");\n\nvar _array2 = _interopRequireDefault(_array);\n\nvar _tree = __webpack_require__(/*! ./layout/tree.js */ \"./src/layout/tree.js\");\n\nvar _tree2 = _interopRequireDefault(_tree);\n\nvar _array3 = __webpack_require__(/*! ./layout/array.js */ \"./src/layout/array.js\");\n\nvar _array4 = _interopRequireDefault(_array3);\n\nvar _object = __webpack_require__(/*! ./reader/object.js */ \"./src/reader/object.js\");\n\nvar _object2 = _interopRequireDefault(_object);\n\nvar _util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar WIDTH = 960;\nvar HEIGHT = 800;\nvar MARGIN = 20;\n\nvar DEFAULT_TREE_LAYOUT_HEIGHT = 50;\nvar DEBUG_TREE_LAYOUT_HEIGHT = 100;\n\nvar style = '\\n.vtree-node text { font: 14px sans-serif; }\\n.vtree-link { fill: none; stroke: #888; stroke-width: 2px; }\\n.vtree-table { stroke-width: 2px; stroke: steelblue; }\\npath.vtree-table { fill: white; }\\ng.vtree-node rect { fill: white; stroke: black; stroke-width: 1px; }\\ng.vtree-node rect.number-text { fill: #d8f0ed; }\\ng.vtree-node rect.string-text { fill: #e7f0db; }\\ng.vtree-node rect.boolean-text { fill: #e1d8f0; }\\ng.vtree-node rect.null-text { fill: #888; }\\n';\n\nvar VTree = function () {\n  function VTree(container) {\n    var _this = this;\n\n    _classCallCheck(this, VTree);\n\n    this.root = new _array2.default([], new _array4.default({ hideLinks: true }));\n    this.defaultLayout = new _tree2.default({ height: DEFAULT_TREE_LAYOUT_HEIGHT });\n    this.container = container;\n    this._width = WIDTH;\n    this._height = HEIGHT;\n    this._debug = false;\n\n    this.d3 = {};\n\n    this.d3.container = d3.select(this.container);\n\n    this.d3.zoomListener = d3.behavior.zoom().scaleExtent([0.1, 10]).on('zoom', function () {\n      var e = d3.event;\n\n      if (_this.d3.g) {\n        _this.d3.g.attr('transform', 'translate(' + e.translate + ')scale(' + e.scale + ')');\n      }\n    });\n\n    this.d3.svg = this.d3.container.append('svg').attr('class', 'vtree').attr('width', this._width).attr('height', this._height).call(this.d3.zoomListener);\n  }\n\n  _createClass(VTree, [{\n    key: 'width',\n    value: function width(_width) {\n      if (arguments.length === 0) {\n        return this._width;\n      }\n\n      this._width = _width;\n\n      this.d3.container.select('svg').attr('width', _width);\n\n      return this;\n    }\n  }, {\n    key: 'height',\n    value: function height(_height) {\n      if (arguments.length === 0) {\n        return this._height;\n      }\n\n      this._height = _height;\n\n      this.d3.container.select('svg').attr('height', _height);\n\n      return this;\n    }\n  }, {\n    key: 'debug',\n    value: function debug(_debug) {\n      if (arguments.length === 0) {\n        return this._debug;\n      }\n\n      if (_debug) {\n        this.defaultLayout.height = DEBUG_TREE_LAYOUT_HEIGHT;\n      } else {\n        this.defaultLayout.height = DEFAULT_TREE_LAYOUT_HEIGHT;\n      }\n\n      this._debug = _debug;\n\n      return this;\n    }\n  }, {\n    key: 'data',\n    value: function data(_data) {\n      if (Array.isArray(_data)) {\n        this.root.children = _data;\n      } else {\n        this.root.children = [_data];\n      }\n\n      return this;\n    }\n  }, {\n    key: 'createSvgString',\n    value: function createSvgString() {\n      var svg = this.d3.svg.node();\n      var serializer = new XMLSerializer();\n      var source = serializer.serializeToString(svg);\n\n      if (!source.match(/^<svg[^>]+xmlns=\"http:\\/\\/www\\.w3\\.org\\/2000\\/svg\"/)) {\n        source = source.replace(/^<svg/, '<svg xmlns=\"http://www.w3.org/2000/svg\"');\n      }\n\n      if (!source.match(/^<svg[^>]+\"http:\\/\\/www\\.w3\\.org\\/1999\\/xlink\"/)) {\n        source = source.replace(/^<svg/, '<svg xmlns:xlink=\"http://www.w3.org/1999/xlink\"');\n      }\n\n      source = '<?xml version=\"1.0\" standalone=\"no\"?>\\r\\n' + source;\n\n      return source;\n    }\n  }, {\n    key: 'createTreeGroups',\n    value: function createTreeGroups(parentG, depth) {\n      var hasChildren = false;\n\n      var g = parentG.selectAll('g.vtree-node').data(function (d) {\n        if (d.children.length !== 0) {\n          hasChildren = true;\n        }\n\n        return d.children;\n      }).enter().append('g').attr('class', 'vtree-node').each(function (d) {\n        d.g = d3.select(this);\n      });\n\n      if (hasChildren) {\n        this.createTreeGroups(g, depth + 1);\n      }\n    }\n  }, {\n    key: 'update',\n    value: function update() {\n      var _this2 = this;\n\n      var root = {\n        id: 1,\n        children: [this.root]\n      };\n\n      this.d3.svg.selectAll('*').remove();\n\n      this.d3.svg.append('style').text(style);\n\n      this._debugDrawGrid();\n\n      this.d3.g = this.d3.svg.selectAll('g.vtree-root').data([root]).enter().append('g').attr('class', 'vtree-root');\n\n      this.createTreeGroups(this.d3.g, 0);\n\n      (0, _util.visitAfter)(this.root, function (node) {\n        node.render(node.g);\n\n        var layout = node.layout || _this2.defaultLayout;\n\n        layout.layout(node);\n\n        if (layout.renderLinks) {\n          layout.renderLinks(node);\n        }\n      });\n\n      if (this._debug) {\n        (0, _util.visitAfter)(this.root, function (node) {\n          _this2._debugDrawNodeInfo(node);\n        });\n      }\n\n      this.setRootPos();\n\n      return this;\n    }\n  }, {\n    key: 'setRootPos',\n    value: function setRootPos() {\n      this.root.x = Math.round((this._width - this.root.width) / 2);\n      this.root.y = Math.round((this._height - this.root.totalHeight) / 2);\n\n      if (this.root.y < MARGIN) {\n        this.root.y = MARGIN;\n      }\n\n      this.root.g.attr('transform', 'translate(' + this.root.x + ',' + this.root.y + ')');\n    }\n  }, {\n    key: '_debugGetG',\n    value: function _debugGetG() {\n      if (!this._debug) {\n        return;\n      }\n\n      var g = this.d3.svg.select('g.debug-info');\n\n      if (!g.empty()) {\n        return g;\n      }\n\n      return this.d3.svg.append('g').attr('class', 'debug-info');\n    }\n  }, {\n    key: '_debugDrawGrid',\n    value: function _debugDrawGrid() {\n      if (!this._debug) {\n        return;\n      }\n\n      var g = this._debugGetG();\n\n      g.append('line').style('stroke', 'red').attr('x1', this._width / 2).attr('y1', 0).attr('x2', this._width / 2).attr('y2', this._height);\n\n      g.append('line').style('stroke', 'red').attr('x1', 0).attr('y1', this._height / 2).attr('x2', this._width).attr('y2', this._height / 2);\n    }\n  }, {\n    key: '_debugDrawNodeInfo',\n    value: function _debugDrawNodeInfo(node) {\n      if (node.constructor === _array2.default) {\n        return;\n      }\n\n      // node rect\n      node.g.append('rect').style('fill', 'none').style('stroke', 'tomato').attr('x', -1).attr('y', -1).attr('width', node.width + 2).attr('height', node.height + 2);\n\n      // node total rect\n      node.g.append('rect').style('fill', 'none').style('stroke', 'mediumpurple').attr('x', (node.width - node.totalWidth) / 2).attr('y', 0).attr('width', node.totalWidth).attr('height', node.totalHeight);\n\n      // x, y\n      var xy = node.g.append('text').text('x=' + node.x + ' y=' + node.y);\n\n      var bbox = xy.node().getBBox();\n      var x = node.width / 2;\n      var y = node.height + bbox.height + 2;\n\n      xy.attr('x', x).attr('y', y).attr('text-anchor', 'middle');\n\n      y += bbox.height + 2;\n\n      // width, height\n      node.g.append('text').text('w=' + node.width + ' h=' + node.height).attr('x', x).attr('y', y).attr('text-anchor', 'middle');\n\n      y += bbox.height + 2;\n\n      // totalWidth, totalHeight\n      node.g.append('text').text('tw=' + node.totalWidth + ' th=' + node.totalHeight).attr('x', x).attr('y', y).attr('text-anchor', 'middle');\n\n      y += bbox.height + 2;\n\n      // childrenWidth\n      node.g.append('text').text('cw=' + node.childrenWidth).attr('x', x).attr('y', y).attr('text-anchor', 'middle');\n    }\n  }]);\n\n  return VTree;\n}();\n\nVTree.node = {};\nVTree.node.Node = _node2.default;\nVTree.node.String = _string2.default;\nVTree.node.Table = _table2.default;\nVTree.node.Array = _array2.default;\n\nVTree.layout = {};\nVTree.layout.Tree = _tree2.default;\nVTree.layout.Array = _array4.default;\n\nVTree.reader = {};\nVTree.reader.Object = _object2.default;\n\nmodule.exports = VTree;\n\n//# sourceURL=webpack://VTree/./src/vtree.js?");

      /***/
})

  /******/
});