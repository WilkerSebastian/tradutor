import express from "express"

const PORT = Number(process.env.PORT) || 8080

const server = express()

server.get("/" , (req , res) => {

    res.status(220).json({

            "ip": req.ip,
            "teste": "deu certo!"

        })

})

server.listen(PORT , () => {

    console.log("servidor rodando na porta " + PORT);

})