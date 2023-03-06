const { compare } = require("bcryptjs");
const AppError = require("../utils/AppError")

async function ValidationRequestLogin(request, response, next){
    const sqliteConnection = require("../database/sqlite");
    const { email, password } = request.body
    const database = await sqliteConnection();
    const checkDatabase = await database.get("SELECT * FROM users WHERE email = (?)", [email])
    if (!checkDatabase) {
        throw new AppError("Email Inválido", 'email')
    }
    const checkPassword = await compare(password, checkDatabase.password)

    if (!checkPassword){
        throw new AppError("Senha Incorreta", 'password')
    }
    request.body = {name: checkDatabase.name, id: checkDatabase.id, avatar: checkDatabase.avatar}
    next()
}


module.exports = ValidationRequestLogin