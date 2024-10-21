const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'test_db'
});

connection.connect(err => {
  if (err) {
    console.error('Connection error', err);
    return;
  }
  console.log('Connected to MySQL');
});

connection.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('Error fetching users:', err);
    return;
  }
  console.log('Users:', results);
  connection.end();
});
