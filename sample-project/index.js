import express from 'express';
import os from 'os';

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/info', (req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`{${os.hostname()}} [${req.method}] access --${req.hostname}-- in ${req.path} from (${ip})`, req.ip);
  res.json({
    hostname: os.hostname(),
    arch: os.arch()
  });
});

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`{${os.hostname()}} [${req.method}] access --${req.hostname}-- in ${req.path} from (${ip})`, req.ip);
  res.render('index',
    {
      title: 'Web title',
      message: Math.random().toString(36).slice(2),
      hostname: os.hostname(),
      client: ip
    });
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
