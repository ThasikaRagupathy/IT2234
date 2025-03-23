const express = require('express'); //import express module to create the server
const app= express();
const port=3001; //define the port number

//to handle GET requests to the root (/) route and sends a response
app.get('/',(req,res)=>{
    res.send('Hello express JS');
});

//to start the server and to log a message when it's running
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})