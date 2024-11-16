const express =require('express')
const app= express();


app.get('/',(req,res)=>{

    res.sendFile("/server/index.html",{
        root:"..",

    });
    //res.send("hola este es un servidor express")

    console.log ("servidor encontrado");
});
app.listen(3000)
console.log(`server en el puerto${3000}`);
