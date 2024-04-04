// CONEXÃO COM BANCO DE DADOS

const mysql = require("mysql")

const conection = mysql.createConnection(
    {
        host: "localhost",
        port: "3399",
        user: "root",
        password: "cristina15le",
        database: "virtualpharma"
    })


    // Realiza conexão
 conection.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Conectado!")
    }

 })   

 module.exports = conection