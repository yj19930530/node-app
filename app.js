var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./database.js');
var usersRouter = require('./routes/users');
var app = express();
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");//项目上线后改成页面的地址
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});
// app.use('/', proxy({
//   // 代理跨域目标接口
//   target: 'http://localhost:3000',
//   changeOrigin: true,
//   // 修改响应头信息，实现跨域并允许带cookie
//   onProxyRes: function (proxyRes, req, res) {
//     res.header('Access-Control-Allow-Origin', '*');
//   },
//   // 修改响应信息中的cookie域名
//   //  cookieDomainRewrite: ''  // 可以为false，表示不修改
// }));
// app.listen(8020);//你的端口
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
