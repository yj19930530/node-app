var express = require('express');
var router = express.Router();

const { usersTableList, addUser, deleteUser,editUser } = require('../service/usersService.js');
/* GET users listing. */
// 获取用户列表
router.get('/usersTableList', async function (req, res, next) {
  res.send(await usersTableList(req.query))
});
// 添加用户
router.post('/addUser', async function (req, res, next) {
  res.send(await addUser(req.body))
});
// 删除用户
router.delete('/delete/:id', async function (req, res, next) {
  res.send(await deleteUser(req.params.id))
});
// 修改用户
router.put('/editUser/:id', async function (req, res, next) {
  res.send(await editUser(req.params.id,req.body))
});
module.exports = router;
