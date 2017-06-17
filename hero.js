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
      console.log("Bleurgh... poisoned!");
    }

    if (food.name === this.favouriteFood) {
      this.health += food.nutrition * 1.5;
    } else {
      this.health += food.nutrition;
    }

    if (this.health < 0) {
      this.health = 0;
      console.log(this.name);
      console.log("Aw naw, ahm deid so ah am!");
    }
  },
  assign: function(task) {
    this.taskList.push(task);
  },
  taskByDifficulty: function() {
    this.taskList.sort(function(task1, task2) {
      return task2.difficulty - task1.difficulty;
    })
    for (task of this.taskList) {
      console.log(task.name + " difficulty: " + task.difficulty);
    }
  },
  taskByUrgency: function() {

  },
  taskByReward: function() {

  },
  toDoList: function() {

  },
  listOfAccomplishments: function() {

  }

}

module.exports = Hero;
