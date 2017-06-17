var Rat = function() {

}

Rat.prototype = {
  touch: function(food){
    food.isContaminated = true;
  }
}
module.exports = Rat;
