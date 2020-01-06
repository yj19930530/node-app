var mongoose = require("mongoose");
const { ISOK, PARAMETER_ERROR, LOSE_EFFICACY_TOKEN, SERVICE_ERROR } = require('./resStatus.js');
// const crypto = require('crypto');
const jwt = require('jsonwebtoken');
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
// 登录
module.exports.USER_LOGIN = async (basic, data) => {
    const findData = await mongoose.model('user').find({ userAcount: data.userAcount });
    const tokenList = await mongoose.model('token').find();
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
                code:200
            }
        } else {
            return {
                code: 400,
                msg: '密码错误'
            }
        }
    } else {
        return {
            code: 401,
            msg: '用户不存在'
        }
    }
    // let content = data; // 要生成token的主题信息
    // let secretOrPrivateKey = basic // 这是加密的key（密钥） 
    // let token = jwt.sign(content, secretOrPrivateKey, {
    //     expiresIn: 60 * 60 * 12
    // })
}