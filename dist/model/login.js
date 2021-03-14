"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _utils = require("../utils");

var _User = require("../entity/User");

var _md = _interopRequireDefault(require("md5"));

var _lodash = _interopRequireDefault(require("lodash"));

var Login = /*#__PURE__*/function () {
  function Login(username, password) {
    (0, _classCallCheck2["default"])(this, Login);
    this.username = username;
    this.password = password;
    (0, _defineProperty2["default"])(this, "id", void 0);
    (0, _defineProperty2["default"])(this, "errors", {
      username: [],
      password: []
    });
  }

  (0, _createClass2["default"])(Login, [{
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var username, password, connection, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = this.username, password = this.password;

                if (username.trim() === '' || password.trim() === '') {
                  this.errors.username.push('请填写用户名');
                }

                _context.next = 4;
                return (0, _utils.getDatabaseConnection)();

              case 4:
                connection = _context.sent;
                _context.next = 7;
                return connection.manager.findOne(_User.User, {
                  where: {
                    username: username
                  }
                });

              case 7:
                user = _context.sent;

                if (!(user !== null && user !== void 0 && user.username) || (user === null || user === void 0 ? void 0 : user.password) !== (0, _md["default"])(password)) {
                  this.errors.username.push('login error');
                }

                this.id = user.id; // else {
                // this.errors.username.push('login success')
                // }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function validate() {
        return _validate.apply(this, arguments);
      }

      return validate;
    }()
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      return !!Object.values(this.errors).find(function (v) {
        return v.length > 0;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return _lodash["default"].omit(this, ['password', 'passwordOrigin', 'passwordConfirmation']);
    }
  }]);
  return Login;
}();

exports.Login = Login;