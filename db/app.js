const bd = require("./conection.js")
const express = require("express")
const app = express()
const body = require("body-parser")


app.use(body.json())

// CHAMADA
app.listen(5000, ()=>{
    console.log("O servidor está rodando na porta 5000!")
})


// GET GERAL
app.get("/", (req, res)=>{
    const select = "SELECT * FROM clientes"
    bd.query(select, (err, results)=>{
        if(err){
            console.log(err)
        }else{
            res.send(results)
        }
    })
})
// GET PELO ID
app.get("/:id_cliente", (req, res)=>{
    const select = "SELECT * FROM clientes WHERE id_cliente = ?"
    bd.query(select,[req.params.id_cliente], (err, results)=>{
        if(err){
            console.log(err)
        }else{
            res.send(results)
        }
    })
})


// POST
app.post("/insert", (req, res)=>{
    const insert = "INSERT INTO clientes SET nome=?, email=?, senha=?, CPF=?, telefone=?"
    const body = req.body 
    bd.query(insert, [body.nome, body.email, body.senha, body.CPF, body.telefone], (err, results)=>{
        if(err){
            console.log(err)
        }else{
            res.send("USUÁRIO INSERIDO, FAÇA O GET")
        }
    })
})


// PUT
app.put("/update/:id_cliente", (req, res)=>{
    const update = "UPDATE clientes SET nome=?, email=?, senha=?, CPF=?, telefone=? WHERE id_cliente = ?"
    const body = req.body 
    bd.query(update, [body.nome, body.email, body.senha, body.CPF, body.telefone, req.params.id_cliente], (err, results)=>{
        if(err){
            console.log(err)
        }else{
            res.send("USUÁRIO ATUALIZADO, FAÇA O GET")
        }
    })
})


// DELETE
app.delete("/del/:id_cliente", (req, res)=>{
    const del = "DELETE FROM clientes WHERE id_cliente =?"
    bd.query(del,[req.params.id_cliente], (err, results)=>{
        if(err){
            console.log(err)
        }else{
            res.send("USUÁRIO EXCLUIDO, FAÇA O GET")
        }
    })
})







