var mysql=require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "music"
  });
  
  var fname='Kartik';
  var lname='Naredera';
  var email='beautyBacchan.com';
  var password='nikitha';

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO signup (fname, lname, email, password) VALUES ?";
    val=[[fname,lname,email,password]];
    
    con.query(sql,[val], function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });

    i2=[[fname,password]];
    con.query("insert into login(username, password) values ?",[i2],function(err,result){
        if (err) throw err;
        console.log("1 record inserted in login");
    });
  }); 