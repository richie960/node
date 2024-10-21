const { Client } = require('pg');

const client = new Client({
  user: 'your_username',
  host: 'localhost',
  database: 'test_db',
  password: 'your_password',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err));

async function fetchUsers() {
  try {
    const res = await client.query('SELECT * FROM users');
    console.log('Users:', res.rows);
  } catch (err) {
    console.error('Error fetching users:', err);
  } finally {
    client.end();
  }
}

fetchUsers();
