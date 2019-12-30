// 业务层
const { usersTableList, addUser } = require('../dao/usersDao.js');
// 获取用户列表
module.exports.usersTableList = async (data) => {
    return await usersTableList(data);
}
// 新增用户
module.exports.addUser = async (data) => {
    return await addUser(data);
}