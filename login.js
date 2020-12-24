var mysql=require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "music"
  });
  
  var val23="",pass2="";
  //exporting data from the front-end
  var {val2}=require('./sea'); //val2=password
  var {val}=require('./sea'); //val=username

  con.connect(function(err) {
    if (err) throw err;
    con.query("select * from login where username=?",[val], function (err, result, fields){
      if (err) throw err;
      
     pass2=result[0].password;

     if(pass2==val2)
      console.log(pass2);
    else
      console.log("Wrong login");
      
      
    });
   
    
});