const AppError = require("../utils/AppError")

async function validationRequestRegister(request, response, next){
    const sqliteConnection = require("../database/sqlite");
    const { email } = request.body
    const database = await sqliteConnection();
    const checkDatabase = await database.get("SELECT * FROM users WHERE email = (?)", [email])
    if (checkDatabase) {
        throw new AppError("Email já Existente", 'email')
    }
    next()
}


module.exports = validationRequestRegister