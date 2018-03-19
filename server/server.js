//library import
var express = require('express');
var bodyParser = require('body-parser');


//local import
const { mongoose } = require('./db/mongoose');
const { userModel } = require('./model/User');
const { empModel } = require('./model/emp');






var app = express();
app.use(bodyParser.json());

app.post('/db_api', (req, res) => {
   
   
   //  console.log(req.body);
    // var user = new userModel({
    //     name: req.body.name,
    //     email: req.body.email

    // });


    // user.save().then((doc) => {
    //     res.send(doc);

    // }, (e) => {
    //     res.send(e);
    // })

    
    //console.log(req.body);
    var emp = new empModel({
        ID: req.body.empID,
        name: req.body.empname
    });


    emp.save().then((doc)=>{
     res.send(doc);   
    },(e)=>{
        console.send(e);
    })


});

app.listen(3000, () => {
    console.log("server started on port number 3000");
});






















//old code

// // var mongoose = require('mongoose');

// // mongoose.Promise = global.Promise;
// // mongoose.connect('mongodb://localhost:27017/DbUser');

// // var todo = mongoose.model('modelUser',{
// // name: {
// //     type: String
// // },
// // completed: {
// // type: Boolean
// // },
// // completedAt:{
// //     type: Number
// // }

// // });

// // var data = new todo({
// //     name: 'mr',
// //     completed: true,
// //     completedAt: 10
// // });

// // data.save().then((doc)=>{
// // console.log('Data save success', doc);
// // }, (e) =>{
// //     console.log('Error occured..');
// // });







// var data = new model({

//     user: 'master',
//     email: '    abc@gmail.com    '
// });

// data.save().then((Doc)=>{
// console.log("Data saved success",Doc);
// },(e)=>{

// console.log("Error while data insertion.. ", e);
// }
// );
