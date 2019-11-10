const express = require('express');
const bodyParser = require('body-parser');
const patientModel = require('../model/patient');

const patientRouter = express.Router();
patientRouter.use(bodyParser.json());

patientRouter.route('/')
// CRUD Operation Using Async Await
.get(async(req,res,next) => {
const patients = await patientModel.find({});
try{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(patients);
} catch(err){
    res.status(500).send(err);
}
})
.post(async(req,res,next)=> {
const patient = await patientModel.create(req.body);
try{
    await patient.save();
    console.log('Patient Created ', patient);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(patient);
}catch(err){
    res.status(500).send(err);
}
});
// CRUD Operation Using Promises
/*
.get( (req,res,next) => {
    patientModel.find({})
    
    .then((patients) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(patients);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post( (req, res, next) => {
    patientModel.create(req.body)
        .then((patient) => {
            console.log('Patient Created ', patient);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(patient);
        }, (err) => next(err))
        .catch((err) => next(err));
})

.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /patients');
})
.delete((req, res, next) => {
    res.end('Deleting all patients');
});*/

module.exports = patientRouter;