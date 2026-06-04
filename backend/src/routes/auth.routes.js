const express = require('express');

const routerr = express.Router();

const { register,login,logout } = require('../controllers/auth.controllers');

routerr.post('/register', register);
routerr.post('/login', login);
routerr.post('/logout', logout);

module.exports = routerr;