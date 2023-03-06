class AppError{
    message;
    type;
    statusCode;
    constructor(message, type = 'Server', statusCode = 400){
        this.message = message
        this.type = type
        this.statusCode = statusCode
    }
}

module.exports = AppError