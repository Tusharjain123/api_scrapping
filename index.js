const express=require("express")
const app = express()
app.use(express.static("public"));


app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html")
})


app.get("/contest", function(req,res){
    res.sendFile(__dirname+"/contest.html")
})
app.get("/subscription", function(req,res){
    res.send("https://contest-alert01.herokuapp.com/")
})




app.listen(process.env.PORT || 80 , function(){
    console.log("Server is started")
})