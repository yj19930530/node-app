// 持久层
// 获取用户列表
var mongoose = require("mongoose");
const { POPULATE_DATA, DELETE_DATA, FIND_DATA, USER_LOGIN, ADD_DATA_FNC } = require('../utils/common.js');
// 查询用户列表
module.exports.usersTableList = async (data) => {
    return await FIND_DATA(data, 'user')
}
// 新增用户
module.exports.addUser = async (data) => {
    return await ADD_DATA_FNC(data, 'user');
}
// 删除用户
module.exports.deleteUser = async (id) => {
    return await DELETE_DATA(id, 'user');
}
// 修改用户
module.exports.editUser = async (id, data) => {
    return await POPULATE_DATA(id, data, 'user');
}
// 登录
module.exports.userLogin = async (data) => {
    return await USER_LOGIN(data);
}










