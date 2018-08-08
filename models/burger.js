// Import ORM to create functions to interact with the DB
var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },

    // Column and value are arrays
    create: function(column, value, callback) {
        orm.create("burgers", column, value, function(res) {
            callback(res);
        });
    },

    update: function(objectColumnValue, condition, callback) {
        orm.update("burgers", objectColumnValue, condition, function(res){
            callback(res);
        });
    },

    delete: function(condition, callback) {
        orm.delete("burgers", condition, function (res) {
            callback(res);
        });
    },

};

// Export db functions 
module.exports = burgers;