const mongoose = require('mongoose');

const student = new mongoose.Schema({

    id:Number,
    name:String,
    age:Number,
    status:String

})

module.exports=mongoose.model('student',student);

