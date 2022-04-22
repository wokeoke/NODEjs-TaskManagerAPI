const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const notFound = require('./middleware/not-found');

// MIDDLEWARE
app.use(express.static('./public'));
app.use(express.json());

// ROUTES
app.use('/api/v1/tasks', tasks);

app.use(notFound);

// PORT & CONNECT DB
const PORT = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
