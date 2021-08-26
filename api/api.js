const express = require('express')
const mysql = require('mysql');
const bodyParser = require("body-parser");
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  credential: true,
  optionsSuccessStatus: 200
};
const bcrypt = require('bcrypt');
const app = express();
const port = 5000;
const saltStl = 10;

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'todoUser',
  password: 'todoUser5963',
  database: 'nodetodo'
});

app.get('/', (req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'});//この記載で※1:CORSを許可する
  connection.query('select * from user', function (error, results) {
    if (error) throw error;
    res.on('error', () => console.log("onError"));
    res.send(results[0])
  });
})

app.post('/registerUser', ((req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'});//この記載で※1:CORSを許可する
  let userName = req.body['userName'];
  let password = req.body['password'];
  let hashedPassword = bcrypt.hashSync(password, saltStl);
  let date = new Date();
  let timestampData = timestampToTime(date.getTime());
  const sql = 'INSERT INTO user(user_name, password, create_at, update_at) VALUES ?';
  let sqlData = [[userName, hashedPassword, timestampData, timestampData]];
  connection.query(sql, [sqlData], (err, result) => {
    if (err) throw err;
  });
}))


app.post('/isExistsUser', ((req, res) => {
  let userName = req.body['userName'];
  const sql = "SELECT COUNT(*) FROM user WHERE user_name = ?";
  connection.query(sql, [userName], (err, result) => {
    if (err) throw err;
    let resultCount = result[0]['COUNT(*)'];
    if (resultCount >= 1) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
}))

app.get('/result', (erq, res) => {
  res.send('Results');
})

app.listen(port, () => console.log(`start app listening on port ${port}!`))

const timestampToTime = (timestamp) => {
  const date = new Date(timestamp);
  const yyyy = date.getFullYear();
  const MM = `0${date.getMonth() + 1}`.slice(-2);
  const dd = `0${date.getDate()}`.slice(-2);
  const HH = `0${date.getHours()}`.slice(-2);
  const mm = `0${date.getMinutes()}`.slice(-2);
  const ss = `0${date.getSeconds()}`.slice(-2);

  return `${yyyy}-${MM}-${dd} ${HH}:${mm}:${ss}`
}

module.exports = {
  path: "/api",
  handler: app
};
