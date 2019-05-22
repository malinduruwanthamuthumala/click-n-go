const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const Port=4600;

app.use(cors());
app.use(bodyParser.json());


app.listen(Port,function(){
    console.log("Server is running on port"+Port); 
})