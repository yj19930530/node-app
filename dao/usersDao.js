// 持久层
// 获取用户列表
var mongoose = require("mongoose");
const { ADD_DATA_FNC, POPULATE_DATA, DELETE_DATA, FIND_DATA, USER_LOGIN } = require('../utils/common.js');
// 查询用户列表
module.exports.usersTableList = async (data) => {
    return await FIND_DATA(data)
}
// 新增用户
module.exports.addUser = async (data) => {
    await mongoose.model('user').create(data);
    return {
        code: 200,
        data: [],
        msg: '操作成功'
    }
}
// 删除用户
module.exports.deleteUser = async (id) => {
    const ids = id.split(',');
    const mongo = mongoose.model('user');
    ids.forEach(async item => {
        await mongo.deleteOne({
            _id: item
        })
    })
    return true;
}
// 修改用户
module.exports.editUser = async (id, data) => {
    return await POPULATE_DATA(id, data, 'user');
}
// 登录
module.exports.userLogin = async (basic, data) => {
    return await USER_LOGIN(basic, data);
    // return await POPULATE_DATA(id, data, 'user');
}










