require('dotenv').config();
require('./db/connect');
const express = require('express');
const app = express();

const tasks = require('./routes/tasks');

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get('/hello', (req, res) => res.send('Task Manager App'));

app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks')          - get all the tasks
// app.post('/api/v1/tasks')         - create a new task
// app.get('/api/v1/tasks/:id')      - get single task
// app.patch('/api/v1/tasks/:id')    - update task
// app.delete('/api/v1/tasks/:id')   - delete task

// PORT
const PORT = 3000;
app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`));
