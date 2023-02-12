var users = require('./user.controller')
module.exports = (Router)=>{
    Router.get('/get',users.getUser)
    Router.post('/create',users.createUser)
    Router.post('/update/:id',users.updateUser)
    Router.post('/delete/:id',users.deleteUser)
}