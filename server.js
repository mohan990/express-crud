const express = require('express')
const app = express()
var bodyParser = require('body-parser');
var log = require('morgan')('dev');
const cors = require('cors')
const db = require('./config/database')
const properties = require('./config/properties')
// var corsOptions = {
//     origin: "http://localhost:8081"
// };
var router = express.Router();
var userRoutes = require('./api/controller/user-routes')
db();
// app.use(cors(corsOptions))

// parse requests of content-type - application/json
// app.use(express.json());
var bodyParserJSON = bodyParser.json();
// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);


// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization")
// })
app.use('/api',router)
userRoutes(router)
app.get('/',(req,res)=>{
    res.json({message:"Everything is working"})
})

app.listen(8080,()=>{
    console.log('Server listening on port 8080')
})