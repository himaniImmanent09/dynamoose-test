const dynamoose = require("dynamoose");
const userSchema = new dynamoose.Schema({
    "userId": String,
    "age": Number
}, {
    "saveUnknown": true,
    "timestamps": true
});

module.exports = userSchema;