import express from "express";

import sendEmailApi from "./apis/sendEmailApis.js"

import dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// Configure Express app
const app = express()

// Get Server Port From Environment
let serverPort = process.env.SERVER_PORT

/// Middleware Configuration For Project

// MiddleWare for Accepting Data From Different Input Sources like (form-data, body(direct-json), w-xxx-encodedurl)

// For Body (Direct-json-type)
app.use(express.json())


// For w-xxx-encodedurl
app.use(express.urlencoded({extended: true}))


/// Routers MiddleWares For Project Apis

/// Creating Server Listening Port
// app.listen(serverPort, () => {
//     console.log(`your server is started on port no. ${serverPort}`);
// })
app.use(sendEmailApi)


app.listen(3000, () => {
    console.log("your server 2 has started on port number 3000");
    console.log("second server is already started");
})