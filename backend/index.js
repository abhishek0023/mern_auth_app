const express= require('express');
require('dotenv').config();
require('./Models/db');

const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const Cors = require('cors');
const AuthRoutes = require('./Routes/AuthRouter');

app.get('/ping', (req, res)=>{
    res.send('PONG');
})

app.use(bodyParser.json());
app.use(Cors());
app.use('/auth', AuthRoutes)

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})