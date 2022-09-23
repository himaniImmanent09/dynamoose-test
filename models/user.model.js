const userSchema = require('../models/user.schema')
const dynamoose = require('dynamoose')

const users_table_name = process.env.USERS_TABLE

const User = dynamoose.model(users_table_name, userSchema, {
    "create": false,
    waitForActive: false
})

module.exports = User;