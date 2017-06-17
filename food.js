// var _ = require("lodash");

var Food = function(name,nutrition) {
  this.name = name;
  this.nutrition = nutrition;
  this.isContaminated = false;
}

Food.prototype = {
  contaminate: function(){
    this.isContaminated = true;
  }
}
module.exports = Food;
