var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    userName: String, // 姓名
    userPhone: String, // 手机号
    userMail: String, // 邮箱
    userAcount: String, // 登录名
    userPassword: String, //登录密码
    createTime: String, //创建时间
    updateTime: String,// 更新时间
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "friends"
    }],// 关联好友
    dynamic: [{
        type: Schema.Types.ObjectId,
        ref: "dynamic"
    }],// 关联动态
})
mongoose.model('user', userSchema, 'user')