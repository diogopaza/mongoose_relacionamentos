mongoose = require('mongoose');
var Schema = mongoose.Schema;

exports.conectar = mongoose.connect('mongodb://localhost/2relacionamentos');
const ObjectId = Schema.ObjectId;


const UserSchema = new Schema({
    
    name:  Schema.Types.ObjectId,
    type:  String,
    email: String

})






users = [

{"_id": ObjectId("5a63453137a03425d853e392")},
{"_id": ObjectId("5a6348e5e55bba1308ba90b2")},
{"_id": ObjectId("5a6348e5e55bba1308ba90b3")}

]

console.log(users);
