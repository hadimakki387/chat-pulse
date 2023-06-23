const express=require("express")
const bodyParser = require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})

app.post('/',function(req,res){
    let name=req.body.name
    res.send("<h1>your input has recieved</h1> <br>Thank You "+name+" For your Kind message.")
})

app.post('/payment',function(req,res){
    
    res.sendFile(__dirname+'/payment.html')
    
})
app.post('/thanks',function(req,res){
    let name=req.body.name
    res.send("<h1>Congrats!</h1>"+" we recieved youre email , we'll update you soon when your request is reveiwed")
})


app.listen(process.env.PORT || 3000,function(req,res){
    console.log("you are now connected to port 3000")
})