// var _ = require("lodash");

var Task = function(name,
                    difficulty,
                    urgency,
                    reward) {
  this.name = name;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
}

Task.prototype = {

}
module.exports = Task;
