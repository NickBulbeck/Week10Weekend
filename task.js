// var _ = require("lodash");

var Task = function(name,
                    difficulty,
                    urgency,
                    reward) {
  this.name = name;
  this.difficulty = difficulty;
  this.urgency = urgency;
  
}

Task.prototype = {

}
module.exports = Task;
