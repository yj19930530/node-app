var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    userName: String, // 姓名
    userPhone: String, // 手机号
    userMail: String, // 邮箱
    userAcount: String, // 登录名
    userPassword: String, //登录密码
    passwordAgain: String //登录密码
})
mongoose.model('user', userSchema, 'user')