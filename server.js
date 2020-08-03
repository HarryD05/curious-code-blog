//SETTING UP LIBRARIES
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//SET UP EXPRESS
const app = express();
app.use(cors());
app.use(express.json());

//SETTING UP SERVER
console.log('Starting server');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

//SETTING UP ROUTES
app.use('/posts', require('./routes/postRoutes'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

//SETTING UP MONGOOSE
console.log('Connecting to MongoDB');

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    if (error) return console.error(error);

    console.log('MongoDB connection established');
  }
);

