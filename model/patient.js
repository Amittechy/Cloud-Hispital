const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let patientSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
}, {

        timestamps: true
    });

    let Patients = mongoose.model('Patient',patientSchema);
    module.exports = Patients;