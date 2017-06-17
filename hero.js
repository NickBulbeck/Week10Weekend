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
    if (food.isContaminated) {
      if (food.name === this.favouriteFood) {
        this.health -= food.nutrition * 1.5;
      } else {
        this.health -= food.nutrition;
      }
    } else {
      if (food.name === this.favouriteFood) {
        this.health += food.nutrition * 1.5;
      } else {
        this.health += food.nutrition;
      }
    }
    if (this.health < 0) {
      this.health = 0;
      this.name = "... aw naw, ahm deid so ah am";
    }
  },
  assign: function(task) {
    this.taskList.push(task);
  }
}

module.exports = Hero;
