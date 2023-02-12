var users = require('./user.dao')

let userInput = Object.assign({}, req.params, req.query, req.body)
exports.createUser = (req,res,next)=>{
console.log('user input',userInput)
users.create(userInput,(err,data)=>{
    if(err){
            res.json({
                error:err
            })
        }
        res.json({message:"data saved successfully"})
    })
}

exports.getUser = (req,res,next)=>{
    // let userInput = Object.assign({},req.params,req.query,req.body)
    users.get({},(err,data)=>{
        if(err){
            res.json({
                error:err
            })
        }
        res.json(data)
    })
    
}
exports.updateUser = (req,res,next)=>{
    let userId = req.params.id
    let updateUserInput = Object.assign({},req.params,req.query,req.body)
    console.log('userId',userId)
    console.log('updateInp',updateUserInput)
    users.update(userId,updateUserInput,(err,data)=>{
        if(err){
            res.json({
                error:err
            })
        }
        res.json(data)
    })
    
}
exports.deleteUser = (req,res,next)=>{
    let userId = req.params.id
    users.delete(userId,(err,data)=>{
        if(err){
            res.json({
                error:err
            })
        }
        res.json(data)
    })
    
}