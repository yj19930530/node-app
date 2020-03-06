var mongoose = require("mongoose");
const { ISOK, PARAMETER_ERROR, LOSE_EFFICACY_TOKEN, SERVICE_ERROR, NOT_PERMISSION } = require('./resStatus.js');
// const crypto = require('crypto');
const jwt = require('jsonwebtoken');
// 新增
module.exports.ADD_DATA_FNC = async (data, mode) => {
    await mongoose.model(mode).create(data);
    ISOK('操作成功')
}
// 修改
module.exports.POPULATE_DATA = async (id, params, mode) => {
    const data = await mongoose.model(mode).find({ _id: id }).update(params);
    if (data.ok === 1) {
        return ISOK('修改成功')
    } else {
        return false;
    }
}
// 删除
module.exports.DELETE_DATA = (id, mode) => {
    const ids = id.split(',');
    const mongo = mongoose.model(mode);
    ids.forEach(async item => {
        await mongo.deleteOne({
            _id: item
        })
    })
    return ISOK('删除成功');
}
// 查询
module.exports.FIND_DATA = async ({ pageNum, pageSize }, mode) => {
    let list = mongoose.model(mode);
    let data = await list.find().sort({ _id: -1 }).skip((pageNum - 1) * pageSize).limit(pageSize).exec();
    total = await list.find().count();
    return {
        data: data,
        total: total,
        code: 200,
        msg: 'ok'
    }
}
// 登录
module.exports.USER_LOGIN = async (data) => {
    const findData = await mongoose.model('user').find({ userAcount: data.userAcount });
    const tokenList = await mongoose.model('token').find();
    console.log(findData)
    if (findData.length) {
        if (findData[0].userPassword === data.userPassword) {
            let content = { userAcount: data.userAcount }; // 要生成token的主题信息
            let secretOrPrivateKey = 'jwt' // 这是加密的key（密钥） 
            let token = jwt.sign(content, secretOrPrivateKey, {
                expiresIn: 60 * 60 * 24
            });
            if (tokenList.length) {
                await mongoose.model('token').find({
                    _id: tokenList[0]._id
                }).update({
                    accessToken: token
                })
                //更新token
            } else {
                await mongoose.model('token').create({ accessToken: token }); // 保持token
            }
            return {
                accessToken: token,
                code: 200
            }
        } else {
            return PARAMETER_ERROR('密码错误')
        }
    } else {
        return NOT_PERMISSION('用户不存在')
    }
}