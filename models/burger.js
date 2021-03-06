// Import ORM to create functions to interact with the DB
var orm = require("../config/orm.js");

var burgers = {
    all: function(callback) {
      orm.all("burgers", function(res) {
        callback(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, callback) {
      orm.create("burgers", cols, vals, function(res) {
        callback(res);
      });
    },
    update: function(objColVals, condition, callback) {
      orm.update("burgers", objColVals, condition, function(res) {
        callback(res);
      });
    },
    delete: function(condition, callback) {
      orm.delete("burgers", condition, function(res) {
        callback(res);
      });
    }
  };
  
  // Export the database functions for the controller (burger_controllers.js).
  module.exports = burgers;
  



















// var burgers = {
//     all: function(callback) {
//         orm.all("burgers", function(res){
//             callback(res);
//         });
//     },

//     // Column and value are arrays
//     create: function(column, value, callback) {
//         orm.create("burgers", column, value, function(res) {
//             callback(res);
//         });
//     },

//     update: function(objectColumnValue, condition, callback) {
//         orm.update("burgers", objectColumnValue, condition, function(res){
//             callback(res);
//         });
//     },

//     delete: function(condition, callback) {
//         orm.delete("burgers", condition, function (res) {
//             callback(res);
//         });
//     },

// };

// // Export db functions 
// module.exports = burgers;