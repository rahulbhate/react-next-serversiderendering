var mysql = require('mysql');
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Veda@3!6',
  database: 'nextreactnodeproject',
});

con.connect(function(err) {
  if (err) throw err;
  con.query('SELECT * FROM customers', function(err, result, fields) {
    if (err) throw err;
    console.log(con);
  });
});
