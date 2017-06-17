var _ = require("lodash");

var Hero = function(name,
                    health,
                    favouriteFood,
                    catchPhrase) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.catchPhrase = catchPhrase;
}

Hero.prototype = {

}
module.exports = Hero;
