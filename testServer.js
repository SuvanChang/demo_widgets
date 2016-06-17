var express = require('express')
var app = express()
app.use(express.static('public'))
app.listen(8088,function(){console.log("8088 listening")})

app.get('/',function(req,res) {
	res.sendFile(__dirname+'/score/index.html')
})
app.get('/score',function(req,res){
	res.end()
})