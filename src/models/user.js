
const dbconnection = require('./connection');
const connection = dbconnection();
let userModel = {};

userModel.getUsers = (callback) => {
    if (connection) {
        connection.query('Select * from investigador ORDER BY id',
            (err, rows) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, rows)
                }
            }

        )
    }
}


userModel.insertUser = (userData, callback) => {
    if (connection) {
        connection.query('INSERT INTO investigador SET ?', userData,
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    callback(null, {
                        'insertId': result.insertId
                    })
                }
            })
    }
}








module.exports = userModel;