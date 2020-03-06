var express = require('express');
var router = express.Router();

const { IS_TOKEN_PAST, LOSE_EFFICACY_TOKEN } = require('../utils/resStatus.js');
const { usersTableList, addUser, deleteUser, editUser, userLogin } = require('../service/usersService.js');
/* GET users listing. */
// 获取用户列表
router.get('/usersTableList', async function (req, res, next) {
  const Bearer = req.get("Authorization");
  const status = IS_TOKEN_PAST(Bearer);
  status ? res.send(await usersTableList(req.query)) : res.send(LOSE_EFFICACY_TOKEN());
});
// 添加用户
router.post('/addUser', async function (req, res, next) {
  const Bearer = req.get("Authorization");
  const status = IS_TOKEN_PAST(Bearer);
  status ? res.send(await addUser(req.body)) : res.send(LOSE_EFFICACY_TOKEN());
});
// 删除用户
router.delete('/delete/:id', async function (req, res, next) {
  const Bearer = req.get("Authorization");
  const status = IS_TOKEN_PAST(Bearer);
  status ? res.send(await deleteUser(req.params.id)) : res.send(LOSE_EFFICACY_TOKEN());
});
// 修改用户
router.put('/editUser/:id', async function (req, res, next) {
  const Bearer = req.get("Authorization");
  const status = IS_TOKEN_PAST(Bearer);
  status ? res.send(await editUser(req.params.id, req.body)) : res.send(LOSE_EFFICACY_TOKEN());
});
// 登录
router.post('/userLogin', async function (req, res, next) {
  res.send(await userLogin(req.query))
});
module.exports = router;
