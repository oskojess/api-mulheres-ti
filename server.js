require('dotenv').config();

const express = require('express');
const db = require('./config/database')
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())

requireDir('./src/models');

app.use('/api', require('./src/routes/biography'))


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
