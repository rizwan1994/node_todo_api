var mongoose = require('mongoose');


var userModel = mongoose.model('tabel',{
    name:{
            type: String,
            required: true
    },
    email:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }

});


//exporting model for used in another files 
module.exports = {
    userModel : userModel
}