var express = require('express');
var router = express.Router();

const { usersTableList, addUser } = require('../service/usersService.js');
/* GET users listing. */
// 获取用户列表
router.get('/usersTableList', async function (req, res, next) {
  res.send(await usersTableList(req.query))
});
// 添加用户
router.post('/addUser', async function (req, res, next) {
  res.send(await addUser(req.body))
});
module.exports = router;
