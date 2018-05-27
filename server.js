var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./server/database/database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
   ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0' ;
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

