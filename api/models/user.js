const mongoose = require('mongoose')

var Schema = mongoose.Schema;

var user = new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    description:{
        type:String
    }
}, {
    timestamps: true
})

module.exports = user