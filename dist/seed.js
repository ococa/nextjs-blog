"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Users = require("./entity/Users");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manage, u1, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const post = await connection.manager.find(Post);
            // const comment = await connection.manager.find(Comments);
            // const users = await connection.manager.find(Users);
            manage = connection.manager;
            u1 = new _Users.Users();
            u1.username = 'username1';
            u1.password = 'password1';
            _context.next = 6;
            return manage.save(u1);

          case 6:
            result = _context.sent;
            console.log(result); // console.log({
            //     post,
            //     comment,
            //     users,
            // })

            _context.next = 10;
            return connection.close();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}())["catch"](function (error) {
  return console.log(error);
});