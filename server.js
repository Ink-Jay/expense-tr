const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const req = require('express/lib/request');
const res = require('express/lib/response');

dotenv.config({path : './config/config.env'});

connectDB();

const transactions = require('./routes/transactions');

const app = express();

app.use(express.json());

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.yellow.bold))
