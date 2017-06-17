// var _ = require("lodash");

var Food = function(name,nutrition) {
  this.name = name;
  this.nutrition = nutrition;
  this.isContaminated = false;
}

Food.prototype = {

}
module.exports = Food;
