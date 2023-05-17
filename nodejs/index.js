const express = require("express");

const app = express();

app.get("/", (req, resp) => {
    resp.send(`
    <html>
        <head>
        <title>NodeJS</title>
        </head>
        
        <body> NODEJS </body>
    </html>
    `);
})

app.listen(3000, () => {
    console.log("Executando na porta 3000");
})