// var _ = require("lodash");

var Task = function(name,
                    difficulty,
                    urgency,
                    reward) {
  this.name = name;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.isComplete = false;
}

Task.prototype = {

}
module.exports = Task;
