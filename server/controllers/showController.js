var db = require('../database/database');
//var bcrypt = require('bcryptjs');
//var salt = bcrypt.genSaltSync(10);


module.exports.allUser = function(req,res)
{
	//console.log(req.body);
    
	var query = " SELECT * from crud";

	
	db.query(query).spread(function(result,metadata){
		res.status(200).send(result) ;
	}).catch(function(err){
		res.status(500).send("sorry") ;
	})
	
	
}

module.exports.addUser =  function(req,res)
{
    //console.log(req.body);
    
    var query = "INSERT INTO `crud`(name,email,phone) values('"+req.body.name+"','"+req.body.email+"','"+req.body.phone+"')"
    
    db.query(query).spread(function(result,metadata){
        
        res.status(200).send("result");
    }).catch(function(err){
        
        res.status(500).send(err);
    })
}

module.exports.deleteUser = function(req,res)
{
   // res.status(200).send(req.params.id);
     var query = " DELETE From `crud` where id = '"+req.params.id+"' "  ;
    
    //console.log(req.params.id);
    
    db.query(query).spread(function(result,metadata){
        
      res.status(200).send("result");
    }).catch(function(err){
        
        res.status(500).send(err);
    })
}
