var http = require('http');
var express = require('express');
var app  = express();
var server =  http.Server(app);

app.get('/index', function(req, res){
  res.sendFile(__dirname+"/index.html");
})  
app.get('/about',function(req , res){
  res.sendFile(__dirname+"/about.html");
});
app.get('/form',function(req,res){
  res.sendFile(__dirname+"/form.html");
});
app.post('/form',function(req , res){
  var Username = req.body.Username;
  var email = req.body.email;
  console.log("input accepted : %s, %s" , Username , email);
});
  server.listen(process.env.PORT, process.env.IP, function(){
    console.log('Server running');
  });
