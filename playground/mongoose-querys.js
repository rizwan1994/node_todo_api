const { mongoose } = require('../server/db/mongoose');
const { userModel } = require('../server/model/User');
const { empModel } = require('../server/model/emp');

var id = '5aaf4be6d634274fced58523';

// userModel.find({
//     _id: id
// }).then((tabels) => {
//     console.log('find methods', tabels);
// });


// userModel.findOne({
//     _id: id
// }).then((tabel) => {
//     console.log('find one methods', tabel);
// });

// empModel.findOne({
//     _id: id
// }).then((emptable) => {
//     console.log('emp data :',emptable);
// }).catch((e)=>   console.log(e) );

empModel.findById(id).then((emptable)   =>{
    if(!emptable){
        console.log("ID not found..");
    }
    console.log('emp data',emptable);

}).catch((e) => (console.log(e)
));

empModel.findOne({
     _id: id   
      }).then((emptable)   =>{
console.log('find one:::: ', emptable);

});