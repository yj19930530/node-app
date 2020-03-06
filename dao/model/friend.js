var mongoose = require('mongoose');
const friendSchema = new mongoose.Schema({
    content: String,// 内容
    userName: String, // 用户姓名
    createTime: String, // 创建时间
    showFiles: Array,// 生活展示
    isLike: Number,// 点赞
    comment: Array, // 评论
    ifRead: String,// 已读
})
mongoose.model('friends', friendSchema, 'friends')