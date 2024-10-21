const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/test_db'; // Your MongoDB URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  age: Number
});

const User = mongoose.model('User', UserSchema);

async function fetchUsers() {
  try {
    const users = await User.find();
    console.log('Users:', users);
  } catch (err) {
    console.error('Error fetching users:', err);
  } finally {
    mongoose.connection.close();
  }
}

fetchUsers();
