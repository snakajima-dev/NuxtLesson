const express = require('express')
const mysql = require('mysql');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'todoUser',
  password: '******',
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

app.get('/randomInsert', ((req, res) => {
  res.set({'Access-Control-Allow-Origin': '*'});//この記載で※1:CORSを許可する
  const data = {
    id: null,
    contents: Math.random(),
    create_user: 'TEST',
    create_at: '2020-02-01 00:00:00:',
    delete_at: '2020-02-01 00:00:00',
    deleted: false
  }
  connection.query('INSERT INTO todo values ?', data, (err, res) => {
    if (err) throw err;
    console.log(data.toString())
  })
}))

app.get('/result', (erq, res) => {
  res.send('Results')
})

app.listen(port, () => console.log(`start app listening on port ${port}!`))


module.exports = {
  path: "/api",
  handler: app
};
