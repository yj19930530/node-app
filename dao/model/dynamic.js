var mongoose = require('mongoose');
const friendSchema = new mongoose.Schema({
    content: String,// 内容
})
mongoose.model('friends', friendSchema, 'friends')