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
const salt = "32af8fa70bf4f86a847c5f1479895cef";

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
  connection.query('select * from todo', function (error, results) {
    if (error) throw error;
    res.on('error', () => console.log("onError"));
    res.send(results[0])
  });
})

app.post('/registerUser', ((req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'});//この記載で※1:CORSを許可する
  let mail = req.body['registerMailAddress'];
  let password = req.body['registerPassword'];
  let hashedPassword = bcrypt.hashSync(password, salt);
  let date = new Date();
  let timestampData = timestampToTime(date.now());
  const sql = 'INSERT INTO user(mailaddress, password, create_at, update_at) values ?';
  let sqlData = [mail, hashedPassword, timestampData, ''];
  connection.query(sql, sqlData, (err, result) => {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
    console.log("Hash:" + hashedPassword);
  });
}))

app.get('/result', (erq, res) => {
  res.send('Results')
})

app.listen(port, () => console.log(`start app listening on port ${port}!`))

const timestampToTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
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
