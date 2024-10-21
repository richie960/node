const mongoose = require('mongoose');

const uri = 'mongodb+srv://richardwanjohirwm:fIcs4PfWvzIa3rxP@node.f0trr.mongodb.net/'; // Ensure this is the correct URI

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error', err));

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model('User', UserSchema);

async function populateDatabase() {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];

  try {
    await User.deleteMany(); // Clear existing users
    await User.insertMany(users);
    console.log('Database populated with initial users');
  } catch (err) {
    console.error('Error populating database:', err);
  } finally {
    mongoose.connection.close();
  }
}

populateDatabase();
 