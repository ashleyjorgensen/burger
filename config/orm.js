// Requiring connection to connection.js
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
  // Object for all our SQL statement functions.
  var orm = {
    all: function(tableInput, callback) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },
    create: function(table, cols, vals, callback) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, callback) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
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
    delete: function(table, condition, callback) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    }
  };
  
  // Export the orm object for the model (burgers.js).
  module.exports = orm;
  




























// // Helper function- array of question marks
// function questionMarks(number) {
//     var array = [];

//     for (var i = 0; i < num; i++) {
//         array.push("?");
//     }
//     return array.toString();
// }

// // Helper function- convert objects kay value pairs into MySQl syntax
// function objSQL(object) {
//     var value = object[key];

//     // Checking for hidden properties 
//     if (Object.ownProperty.call(object, key)) {
//         if (typeof value === "string" && value.indexOf(" ") >= 0) {
//             value = " " + value + " ";
//         }

//         array.push(key + "=" + value);
//     }

//     return array.toString();
// }


// // Creating the ORM object for SQL queries
// var orm = {
//     // selectAll function that returns all table entries
//     selectAll: function (tableInput, callback) {
//         var queryString = "SELECT * FROM " + tableInput + ";";

//         // DB query 
//         connection.query(queryString, function (err, result) {

//             if (err) {
//                 throw err;
//                 // callBack
//                 callback(result);
//             }else{
//                 callback(result);
//                 console.log(result);
//                 console.log("YAAY");
//             }
//         });
//     },

//     // insertOne function returns a single entry 
//     insertOne: function (table, column, burgerInput, callback) {

//         // inserts a row into the table
//         var queryString = "INSERT INTO " + table;

//         queryString += " (";
//         queryString += column.toString();
//         queryString += ") ";
//         queryString += "VALUES (";
//         queryString += questionMarks(value.length);
//         queryString += ") ";

//         console.log(queryString);

//         // DB query 
//         connection.query(queryString, [burgerInput], function (err, result) {
//             if (err) throw err;

//             //callBack
//             callback(result);
//         });
//     },

//     // updateOne function returns an updated response
//     updateOne: function(table, objectColumnValue, condition, callback) {
//         var queryString = "UPDATE" + table;

//         queryString += " SET ";
//         queryString += objSql(ObjectColumnValue);
//         queryString += " WHERE ";
//         queryString += condition;

//         console.log(queryString);

//         connection.query(queryString, function(err, result) {
//             if (err) {
//                 throw err;
//             }
//             callback(result);
//         });
//     },
// };

// // Export ORM object for (burgers.js)
// module.exports = orm;