
const jwt = require('jsonwebtoken');
module.exports.ISOK = (message) => {
    return {
        code: 200,
        msg: message || 'ok'
    }
}
module.exports.PARAMETER_ERROR = (message) => {
    return {
        code: 400,
        msg: message || '参数错误'
    }
}
module.exports.LOSE_EFFICACY_TOKEN = () => {
    return {
        code: 401,
        msg: 'token 失效'
    }
}
module.exports.NOT_PERMISSION = (msg) => {
    return {
        code: 403,
        msg: msg || '没有权限'
    }
}
module.exports.SERVICE_ERROR = () => {
    return {
        code: 500,
        msg: '服务器错误'
    }
}
//验证token是否过期
module.exports.IS_TOKEN_PAST = (Bearer) => {
    const arr = Bearer.split(' ');
    let tp = '';
    let token = arr[1];
    let secretOrPrivateKey = "jwt"; // 这是加密的key（密钥)
    jwt.verify(token, secretOrPrivateKey, async (err, decode) => {
        if (err) {
            tp = false;
        } else {
            tp = true;
        }
    })
    return tp;
}