const express = require('express');
const bodyParser = require('body-parser');
const doctorModel = require('../model/doctor');
const doctorRouter = express.Router();

doctorRouter.use(bodyParser.json());
doctorRouter.route('/')
.get(async(req,res,next) => {
    const doctors = await doctorModel.find({});
    try{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(doctors);
    } catch(err){
        res.status(500).send(err);
    }
    })
    .post(async(req,res,next)=> {
    const doctor = await doctorModel.create(req.body);
    try{
        await doctor.save();
        console.log('Patient Created ', doctor);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(doctor);
    }catch(err){
        res.status(500).send(err);
    }
    });


module.exports = doctorRouter;