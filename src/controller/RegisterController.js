const sqliteConnection = require('../database/sqlite');
const { hash } = require('bcryptjs');

class RegisterController{
    async create(request, response){
        const { name, email, password } = request.body
        const hashPassword = await hash(password, 8)
        const database = await sqliteConnection()
        database.run("INSERT INTO users (name, email, password) VALUES (? ,? ,?)", [name, email, hashPassword])
        response.json({status: "success", message: "Criado com sucesso", name})
    }

}

module.exports = RegisterController