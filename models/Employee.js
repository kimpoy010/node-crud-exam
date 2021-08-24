const mongoose = require('mongoose');


const EmpSchema = mongoose.Schema({
    name: String,
    position: String,
    date_hired : Date,
    salary : Number
})

module.exports = mongoose.model('Employees',EmpSchema);