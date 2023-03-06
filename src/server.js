const express = require('express');
const cors = require('cors');
require("express-async-errors")
const AppError = require('./utils/AppError')

const migrationsRun = require('./database/sqlite/migrations');
const app = express();
const routes = require('./routes');


app.use(cors());
app.use(express.json({limit: '5mb'}));
app.use(routes);
app.use((error, request, response, next) =>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
            type: error.type
        })
        
    }
    console.error(error);
    return response.status(500).json({
        status: "error",
        message: "Erro do Servidor"
    })
})
migrationsRun();

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=> console.log(`Server Running Port: ${PORT}`));


