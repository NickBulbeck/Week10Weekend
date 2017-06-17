var Rat = function() {

}

Rat.prototype = {
  touch: function(food){
    food.contaminate();
  }
}
module.exports = Rat;
