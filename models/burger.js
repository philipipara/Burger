const connection = require("../config/connection.js");
const orm = require("../config/orm.js");

const burger = {
  selectAll: function() {
    orm.selectAll("burgers", function(res) {
      console.log(res);
    });
  },

    insertOne: function(){
        orm.insertOne("burgers",function(res){
            console.log(res)
        });
    },

    updateOne: function(){
        orm.updateOne("burgers", function(res){
            console.log(res)
        });
    }
};

module.exports = burger