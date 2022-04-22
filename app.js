const express = require('express');
const app = express();

// ROUTES
app.get('/hello', (req, res) => res.send('Task Manager App'));

const PORT = 3000;
app.listen(PORT, console.log(`Server is listening on PORT ${PORT}`));
