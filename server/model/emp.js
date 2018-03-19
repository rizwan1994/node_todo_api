var mongoose = require('mongoose');

var empModel = mongoose.model('emptable', {
    empID: {
        type: String,
        default: false,
        require: true,
        minlength: 2
    },
    empname: {
        type: String,
        maxlength: 10,
        require: true
    }


});

module.exports = {
    empModel: empModel
}
