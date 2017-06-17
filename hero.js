var _ = require("lodash");

var Hero = function(name,
                    health,
                    favouriteFood,
                    catchPhrase) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
}

Hero.prototype = {

}
module.exports = Hero;
