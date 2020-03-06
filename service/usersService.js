// 业务层
const { usersTableList, addUser, deleteUser, editUser, userLogin } = require('../dao/usersDao.js');
// 获取用户列表
module.exports.usersTableList = async (data) => {
    return await usersTableList(data);
}
// 新增用户
module.exports.addUser = async (data) => {
    return await addUser(data);
}
// 删除用户
module.exports.deleteUser = async (id) => {
    return await deleteUser(id);
}
// 编辑用户
module.exports.editUser = async (id, data) => {
    return await editUser(id, data);
}
// 登录
module.exports.userLogin = async (data) => {
    return await userLogin(data);
}