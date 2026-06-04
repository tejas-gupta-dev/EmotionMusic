const express = require('express');
const routes = require('./routes/music');
const cookies = require('cookie-parser');
// const auth = require('./middleware/auth.middleware');
const routerr = require('./routes/auth.routes');

const app = express();
app.use(cookies());
const cors = require('cors');
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use('/api/music', routes);
app.use('/api/auth', routerr);

module.exports = app;