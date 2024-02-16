// Import libraries
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')

//Declare variable enviroment
const { port, dbHost, dbPort, dbUser, dbPassword, dbName } = require("./config/config")

//Conexión BD
mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`).then(() => {
    console.log('Mongo is connected')

    const app = express()
    app.use(express.json())
    app.use(morgan("dev"))

    app.listen(port,()=>{
        console.log(`App listening on port: ${port}`)
    })

}).catch(error => console.error(`Database connection error: ${error.message}`))