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

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));

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

app.post('/add', ((req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'});//この記載で※1:CORSを許可する
  // const sql = "insert into todo(contents, create_user, create_at, delete_at,deleted) values ('a','seiha','2020-02-01 00:00:00','2020-02-01 00:00:00',TRUE)";
  console.log(req.body);
  let password = req.body.password;
  let hashPass = bcrypt.hashSync(password,10);
  console.log("Hash:" + hashPass);
}))

app.get('/result', (erq, res) => {
  res.send('Results')
})

app.listen(port, () => console.log(`start app listening on port ${port}!`))


module.exports = {
  path: "/api",
  handler: app
};
