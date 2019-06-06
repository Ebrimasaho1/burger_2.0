var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (objectColVals, condition, cb) {
        orm.insertOne("burgers", objectColVals, condition, function(res){
            cb(res);
        })

    },
    updateOne: function(objColVals, condition, cb){
        orm.updateOne("Burgers", objColVals, condition, function(res){
            cb(res);
        })
    }
}

module.exports = burger;