"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDatabaseConnection = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeorm = require("typeorm");

var _ormconfig = _interopRequireDefault(require("../ormconfig.json"));

var _Post = require("./entity/Post");

var _User = require("./entity/User");

var _Comment = require("./entity/Comment");

require("reflect-metadata");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// 没有这个 没办法直接通过Post来访问数据库
var create = function create() {
  // @ts-ignore
  return (0, _typeorm.createConnection)(_objectSpread(_objectSpread({}, _ormconfig["default"]), {}, {
    entities: [_Post.Post, _User.User, _Comment.Comment]
  }));
}; // 解决connect 多次创建报错问题


var promise = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var manage;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          manage = (0, _typeorm.getConnectionManager)();

          if (!manage.has('default')) {
            _context.next = 4;
            break;
          }

          _context.next = 4;
          return manage.get('default').close();

        case 4:
          return _context.abrupt("return", create());

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))(); // export

var getDatabaseConnection = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(promise);
            return _context2.abrupt("return", promise);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDatabaseConnection() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDatabaseConnection = getDatabaseConnection;