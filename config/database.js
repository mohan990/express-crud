const mongoose = require('mongoose')
const chalk = require('chalk')
var dbUrl = require('./properties').DB

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

module.exports = ()=>{
    mongoose.connect(dbUrl)

    mongoose.connection.on('connected',()=>{
    console.log(connected("Mongoose default connection is open to ", dbUrl))
    })
    mongoose.connection.on('error',(err)=>{
        console.log(error("error connecting db",err))
    })
    mongoose.connection.on('disconnected',()=>{
        console.log(disconnected("db disconnected"))
    })
    process.on('SIGINT',()=>{
        mongoose.connection.close(()=>{
            console.log(termination("mongoose disconnected due to application termination"))
            process.exit(0)
        })
    })
}