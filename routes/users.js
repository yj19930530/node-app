var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/usersTableList', function(req, res, next) {
  res.send([{
    name:'阿猫',
    age:18,
    gener:'123'
  }]);
});

module.exports = router;
