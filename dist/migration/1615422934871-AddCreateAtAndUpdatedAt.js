"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCreateAtAndUpdatedAt1615422934871 = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeorm = require("typeorm");

var AddCreateAtAndUpdatedAt1615422934871 = /*#__PURE__*/function () {
  function AddCreateAtAndUpdatedAt1615422934871() {
    (0, _classCallCheck2["default"])(this, AddCreateAtAndUpdatedAt1615422934871);
  }

  (0, _createClass2["default"])(AddCreateAtAndUpdatedAt1615422934871, [{
    key: "up",
    value: function () {
      var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryRunner) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return queryRunner.addColumns('users', [new _typeorm.TableColumn({
                  name: 'createAt',
                  type: 'timestamp',
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updateAt',
                  type: 'timestamp',
                  "default": 'now()'
                })]);

              case 2:
                _context.next = 4;
                return queryRunner.addColumns('posts', [new _typeorm.TableColumn({
                  name: 'createAt',
                  type: 'timestamp',
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updateAt',
                  type: 'timestamp',
                  "default": 'now()'
                })]);

              case 4:
                _context.next = 6;
                return queryRunner.addColumns('comments', [new _typeorm.TableColumn({
                  name: 'createAt',
                  type: 'timestamp',
                  "default": 'now()'
                }), new _typeorm.TableColumn({
                  name: 'updateAt',
                  type: 'timestamp',
                  "default": 'now()'
                })]);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function up(_x) {
        return _up.apply(this, arguments);
      }

      return up;
    }()
  }, {
    key: "down",
    value: function () {
      var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryRunner) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return queryRunner.dropColumn('users', 'createAt');

              case 3:
                _context2.next = 5;
                return queryRunner.dropColumn('users', 'updateAt');

              case 5:
                _context2.next = 7;
                return queryRunner.dropColumn('posts', 'createAt');

              case 7:
                _context2.next = 9;
                return queryRunner.dropColumn('posts', 'updateAt');

              case 9:
                _context2.next = 11;
                return queryRunner.dropColumn('comments', 'createAt');

              case 11:
                _context2.next = 13;
                return queryRunner.dropColumn('comments', 'updateAt');

              case 13:
                _context2.next = 19;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);
                console.error('=====here error=====');
                console.error(_context2.t0);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 15]]);
      }));

      function down(_x2) {
        return _down.apply(this, arguments);
      }

      return down;
    }()
  }]);
  return AddCreateAtAndUpdatedAt1615422934871;
}();

exports.AddCreateAtAndUpdatedAt1615422934871 = AddCreateAtAndUpdatedAt1615422934871;