// Requiring connection to connection.js
var connection = require("./connection.js");

// Helper function- array of question marks
function questionMarks(number) {
    var array = [];

    for (var i = 0; i < num; i++) {
        array.push("?");
    }
    return array.toString();
}

// Helper function- convert objects kay value pairs into MySQl syntax
function objSQL(object) {
    var value = object[key];

    // Checking for hidden properties 
    if (Object.ownProperty.call(object, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = " " + value + " ";
        }

        array.push(key + "=" + value);
    }

    return array.toString();
}


// Creating the ORM object for SQL queries
var orm = {
    // selectAll function that returns all table entries
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        // DB query 
        connection.query(queryString, function (err, result) {

            if (err) {
                throw err;

                // callBack
                callback(result);
            }
        });
    },

    // insertOne function returns a single entry 
    insertOne: function (table, column, burgerInput, callback) {

        // inserts a row into the table
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMarks(value.length);
        queryString += ") ";

        console.log(queryString);

        // DB query 
        connection.query(queryString, [burgerInput], function (err, result) {
            if (err) throw err;

            //callBack
            callback(result);
        });
    },

    // updateOne function returns an updated response
    updateOne: function(table, objectColumnValue, condition, callback) {
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objSql(ObjectColumnValue);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
};

// Export ORM object for (burgers.js)
module.exports = orm;