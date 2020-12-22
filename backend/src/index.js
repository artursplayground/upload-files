const { urlencoded } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'))

app.use(routes);

app.listen(5000);