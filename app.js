const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const cors = require('cors');

// 아래 두개는 서버 관련된 보안을 알아서 해준댜
const helmet = require('helmet');
const hpp = require('hpp');

// 레디스 안쓸거면 주석
// const RedisStore = require('connect-redis')(session);

dotenv.config();


// 라우터 샘플
const apiRouter = require('./routes/api');

// const passportConfig = require('./passport');
// const logger = require('./logger');

const app = express();
// passportConfig(); // 패스포트 설정
app.set('port', process.env.PORT || 8001);

if (process.env.NODE_ENV === 'production') {
  app.enable('trust proxy');
  app.use(morgan('combined'));
  app.use(helmet({ contentSecureityPolicy : false }));
  app.use(hpp());
} else {
  app.use(morgan('dev'));
}

let corsOptions = {
  origin: 'http://127.0.0.1:5173',
  credentials: true
}
app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    // https 쓸거면 true
    secure: false,
  },
  // redis 안쓰고 싱글 프로세스 쓸거면 주석
//   store: new RedisStore({ client: redisClient }),
};
if (process.env.NODE_ENV === 'production') {
  sessionOption.proxy = true;
  // https 쓸거면 주석 해제
  // sessionOption.cookie.secure = true;
}
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());

// 샘플 라우터 적용

app.use('/api', apiRouter);

// 라우터 없을시 에러 발생
app.use((req, res, next) => {
  const error =  new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
//   logger.info('hello');
//   logger.error(error.message);
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;