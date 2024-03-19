require('dotenv').config()
const db = require('./app/db');
const http = require('http');
// const express=require("express")

const server = require('./app/server')

const port = process.env.PORT

// const port1 = process.env.PORT1





const app1 = http.createServer(server).listen(port,()=>{
    db();
  console.log("Server started on  HTTP port",port)
})







// https.createServer({
//     key: fs.readFileSync('server.key'),
//     cert: fs.readFileSync('server.cert')
//   },server).listen(port,async()=>{
// db();
// console.log("server running on",port)

// })

