var _ = require("lodash");

var Hero = function(name,
                    health,
                    favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {
  announce: function(){
    return ("I am",this.name + "!");
  }
}
module.exports = Hero;
