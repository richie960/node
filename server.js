const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://richardwanjohirwm:fIcs4PfWvzIa3rxP@node.f0trr.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error', err));

// Define User Schema and Model
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model('User', UserSchema);

// API endpoint to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// API endpoint to add a user
app.post('/users', async (req, res) => {
  const { name, age } = req.body;
  try {
    const user = new User({ name, age });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
