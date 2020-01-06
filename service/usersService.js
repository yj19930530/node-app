// 业务层
const { usersTableList, addUser, deleteUser, editUser, userLogin } = require('../dao/usersDao.js');
const jwt = require('jsonwebtoken');
// 获取用户列表
module.exports.usersTableList = async (data, Bearer) => {
    const arr = Bearer.split(' ');
    let token = arr[1];
    let secretOrPrivateKey = "jwt"; // 这是加密的key（密钥)
    return await usersTableList(data);
    // jwt.verify(token, secretOrPrivateKey, async (err, decode) => {
    //     // return await usersTableList(data);
    //     // if (err) {
    //     //     return {
    //     //         code: 401,
    //     //         msg: 'token失效,请重新登录'
    //     //     }
    //     // } else {
    //     //     return await usersTableList(data);
    //     // }
    // })
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
module.exports.userLogin = async (basic, data) => {
    return await userLogin(basic, data);
}