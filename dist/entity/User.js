"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _typeorm = require("typeorm");

var _Post = require("./Post");

var _Comment = require("./Comment");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;

var User = (_dec = (0, _typeorm.Entity)('users'), _dec2 = (0, _typeorm.Unique)(['username']), _dec3 = (0, _typeorm.PrimaryGeneratedColumn)('increment'), _dec4 = (0, _typeorm.Column)('varchar'), _dec5 = (0, _typeorm.Column)('varchar'), _dec6 = (0, _typeorm.CreateDateColumn)(), _dec7 = (0, _typeorm.UpdateDateColumn)(), _dec8 = (0, _typeorm.OneToMany)(function () {
  return _Post.Post;
}, function (post) {
  return post.author;
}), _dec9 = (0, _typeorm.OneToMany)(function () {
  return _Comment.Comment;
}, function (comment) {
  return comment.user;
}), _dec(_class = _dec2(_class = (_class2 = (_temp = // 一个用户 对应多个post（文章）
// 一个用户对应多一个评论
function User(username, password) {
  (0, _classCallCheck2["default"])(this, User);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "username", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "password", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "createAt", _descriptor4, this);
  (0, _initializerDefineProperty2["default"])(this, "updateAt", _descriptor5, this);
  (0, _initializerDefineProperty2["default"])(this, "posts", _descriptor6, this);
  (0, _initializerDefineProperty2["default"])(this, "comments", _descriptor7, this);
  this.username = username;
  this.password = password;
}, _temp), (_descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "username", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "createAt", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "updateAt", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "posts", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "comments", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class);
exports.User = User;