const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let doctorSchema = new Schema({
    name:{
        type:String,
        required:true

    },
    branch:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});
let Doctors = mongoose.model('Doctor',doctorSchema);
module.exports = Doctors;