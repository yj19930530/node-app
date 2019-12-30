// 持久层
// 获取用户列表
var mongoose = require("mongoose");
// const { ok, PARAMETER_ERROR, LOSE_EFFICACY_TOKEN, PARAMETER_ERROR, SERVICE_ERROR } = require('../utils/resStatus.js');
module.exports.usersTableList = async ({ pageNum, pageSize }) => {
    let list = mongoose.model('user');
    let data = await list.find().sort({ _id: -1 }).skip((pageNum - 1) * pageSize).limit(pageSize).exec();
    total = await list.find().count();
    return {
        data: data,
        total: total,
        code: 200,
        msg: ''
    }
}
module.exports.addUser = async (data) => {
    await mongoose.model('user').create(data);
    return {
        code: 200,
        data: [],
        msg: '操作成功'
    }
}