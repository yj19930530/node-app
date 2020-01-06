var mongoose = require('mongoose');
const tokenSchema = new mongoose.Schema({
    accessToken: String, // 姓名
})
mongoose.model('token', tokenSchema, 'token')