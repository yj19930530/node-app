var mongoose = require("mongoose");
const { ISOK, PARAMETER_ERROR, LOSE_EFFICACY_TOKEN, SERVICE_ERROR } = require('./resStatus.js');
// 新增
module.exports.ADD_DATA_FNC = (params) => {

}
// 修改
module.exports.POPULATE_DATA = async (id, params, mode) => {
    const data = await mongoose.model(mode).find({ _id: id }).update(params);
    if (data.ok === 1) {
        return ISOK()
    } else {
        return false;
    }
}
// 删除
module.exports.DELETE_DATA = (params) => {

}
// 查询
module.exports.FIND_DATA = async ({ pageNum, pageSize }) => {
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