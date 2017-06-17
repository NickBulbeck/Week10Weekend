var _ = require("lodash");

var Hero = function(name,
                    health,
                    favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.taskList = [];
}

Hero.prototype = {
  announce: function(){
    var salutation = "I am " + this.name + "!";
    return salutation;
  },
  eat: function(food) {
    if (food.name === this.favouriteFood) {
      this.health += food.nutrition * 1.5;
    } else {
      this.health += food.nutrition;
    };
  }
}

module.exports = Hero;
