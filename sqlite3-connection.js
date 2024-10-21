const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('test.db');

db.serialize(() => {
  db.each('SELECT * FROM users', (err, row) => {
    if (err) {
      console.error('Error fetching users:', err);
      return;
    }
    console.log('User:', row);
  });
});

db.close();
