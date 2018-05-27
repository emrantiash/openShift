var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./server/database/database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
<!-- controllers -->
var showcontroller = require('./server/controllers/showController');

<!-- allow to hook up -->
	app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE");
  next();
});

<!-- end -->
    
app.get('/', function (req, res) {
    
    res.sendFile('index.html', {root : __dirname + '/'});
    
});

app.get('/showuser',showcontroller.allUser);
app.post('/adduser',showcontroller.addUser);
app.delete('/deleteuser/:id',showcontroller.deleteUser);
//app.post('/login',usercontroller.logIn);

db.sync().then(function(){
	app.listen(3000,function(){
		console.log("it works..");
	})
})