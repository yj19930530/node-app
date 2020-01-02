
module.exports.ISOK = () => {
    return {
        code: 200,
        msg: 'ok'
    }
}
module.exports.PARAMETER_ERROR = () => {
    return {
        code: 400,
        msg: '参数错误'
    }
}
module.exports.LOSE_EFFICACY_TOKEN = () => {
    return {
        code: 401,
        msg: 'token 失效'
    }
}
module.exports.NOT_PERMISSION = () => {
    return {
        code: 403,
        msg: '没有权限'
    }
}
module.exports.SERVICE_ERROR = () => {
    return {
        code: 500,
        msg: '服务器错误'
    }
}