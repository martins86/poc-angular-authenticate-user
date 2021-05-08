var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        'firstname': String,
        'lastname': String,
        'email': String,
        'password': String,
        'phone': String,
        'mobilephone': String,
        'address': String,
        'city': String,
        'state': String
    }
);

module.exports = mongoose.model('User', UserSchema);