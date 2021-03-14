"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("reflect-metadata");

var _typeorm = require("typeorm");

var _Post = require("./entity/Post");

var _Comment = require("./entity/Comment");

var _User = require("./entity/User");

(0, _typeorm.createConnection)().then( /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(connection) {
    var manage, u1, result, p1, res2, c1, r3;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const post = await connection.manager.find(Post);
            // const comment = await connection.manager.find(Comments);
            // const users = await connection.manager.find(Users);
            manage = connection.manager;
            u1 = new _User.User('username1', 'password1');
            _context.next = 4;
            return manage.save(u1);

          case 4:
            result = _context.sent;
            console.log(result);
            p1 = new _Post.Post();
            p1.title = 'post 1';
            p1.content = 'post content 1';
            p1.author = u1;
            _context.next = 12;
            return manage.save(p1);

          case 12:
            res2 = _context.sent;
            console.log(res2);
            c1 = new _Comment.Comment();
            c1.user = u1;
            c1.post = p1;
            c1.content = 'awesome!';
            _context.next = 20;
            return manage.save(c1);

          case 20:
            r3 = _context.sent;
            console.log(r3); // console.log({
            //     post,
            //     comment,
            //     users,
            // })

            _context.next = 24;
            return connection.close();

          case 24:
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