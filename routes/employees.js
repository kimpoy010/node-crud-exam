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


router.delete('/delete/:id', async (req, res) => {
	const result = await Employee.findByIdAndDelete({ _id: req.params.id });
	res.status(200).json(result);
});


router.patch('/update/:id', async (req, res) => {
	const q = await Employee.updateOne({_id: req.params.id}, {$set: req.body});
	res.status(200).json(q);
});

module.exports = router;
