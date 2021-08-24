const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv/config');


//DB Connect
mongoose.connect(process.env.DB_STRING,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

const db = mongoose.connection;
db.once('open',()=>{
    console.log('connected to DB');
})


//ROUTES
const EmpRoutes = require('./routes/employees');
app.use(bodyParser.json());
app.use('/employees',EmpRoutes)

app.listen(5000,console.log("Listening on port 5000"));