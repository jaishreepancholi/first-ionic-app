var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

// var mongo = require("mongoose");  

// var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err, response){  
//    if(err){ console.log( err); }  
//    else{ console.log('Connected to ' + db, ' + ', response); }  
// });  


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8085');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  

//  var Schema = mongo.Schema;  

// var UsersSchema = new Schema({      
//  name: { type: String   },       
//  address: { type: String   },   
// },{ versionKey: false });  


// var model = mongo.model('users', UsersSchema, 'users');  

// app.post("/api/SaveUser",function(req,res){   
//  var mod = new model(req.body);  
//  if(req.body.mode =="Save")  
//  {  
//     mod.save(function(err,data){  
//       if(err){  
//          res.send(err);                
//       }  
//       else{        
//           res.send({data:"Record has been Inserted..!!"});  
//       }  
//  });  
// }  
// else   
// {  
//  model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},  
//    function(err,data) {  
//    if (err) {  
//    res.send(err);         
//    }  
//    else{        
//           res.send({data:"Record has been Updated..!!"});  
//      }  
//  });  


// }  
//  })  

//  app.post("/api/deleteUser",function(req,res){      
//     model.remove({ _id: req.body.id }, function(err) {    
//      if(err){    
//          res.send(err);    
//      }    
//      else{      
//             res.send({data:"Record has been Deleted..!!"});               
//         }    
//  });    
//    })  



//  app.get("/api/getUser",function(req,res){  
//     model.find({},function(err,data){  
//               if(err){  
//                   res.send(err);  
//               }  
//               else{                
//                   res.send(data);  
//                   }  
//           });  
//   })  
app.get("/product", function (req, res) {
  console.log("get api is callingg");
  res.send([
   {
    id: '1',
    name: 'San Remo Cake',
    img: "../../assets/imgs/best-cakes-in-chennai.jpg"
  },
  {
    id: '2',
    name: 'Cold Fudge Sundae Cake',
    img: "../../assets/imgs/cakes-1681543_960_720-768x460.jpg"

  },
  {
    id: '3',
    name: 'Carrot Cake',
    img: "../../assets/imgs/Dutch-Truffle-cake.jpg"
  },
  {
    id: '4',
    name: 'Harvard Mocha Cake',
    img: "../../assets/imgs/images (1).jpg"
  },
  {
    id: '5',
    name: 'German Chocolate Cake',
    img: "../../assets/imgs/images (2).jpg"
  },
  {
    id: '6',
    name: 'Velvet Underground Cake',
    img: "../../assets/imgs/images (3).jpg"
  },
  {
    id: '7',
    name: 'Queen Raspberry Cake',
    img: "../../assets/imgs/images (4).jpg"
  },
  {
    id: '8',
    name: 'Mocha Cake',
    img: "../../assets/imgs/images.jpg"
  }
]);
})
app.post('/users', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if(username == "jaishree" && password == "jaish") {
    var token = "aS3df_de56scF4h#gh";
    res.send({
      username: username,
      password: password,
      token: token
    });
  }

});

app.listen(8085, function () {
  console.log('Example app listening on port 8085!')
})  
