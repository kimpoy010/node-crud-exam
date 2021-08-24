const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Employee = require('../models/Employee');

router.get('/',async (req,res)=>{
    const employees = await Employee.find();
    res.status(200).json(employees);
})

router.post('/add', async (req,res)=>{
    const employee = new Employee(req.body);
    const saveEmployee = await employee.save();
    res.status(200).json(saveEmployee);
});

router.get('/single/:id', async (req,res)=>{
    const e = await Employee.findById({ _id: req.params.id });
	res.status(200).json(e);
});

module.exports = router;
