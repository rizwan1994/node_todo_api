// var mongoose = require('mongoose');

// mongoose.promise = global.promise;
// mongoose.connect('mongodb://localhost:27017/Mongoose');

// module.export = {
//     mongoose : mongoose
// }

var mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/Mongoose');

module.exports ={
    mongoose : mongoose
}