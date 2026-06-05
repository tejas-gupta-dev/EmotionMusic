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
    origin: "https://emotion-music-beta.vercel.app",
    credentials: true,
  })
);

app.use(express.json());
app.use('/api/music', routes);
app.use('/api/auth', routerr);

module.exports = app;
