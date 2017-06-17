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
      console.log("Aw naw, ahm pure deid so ah am!");
// On death, all heroes reveal their true Weegie nature
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
    this.taskList.sort(function(task1, task2) {
      return task2.urgency - task1.urgency;
    })
    for (task of this.taskList) {
      console.log(task.name + " urgency: " + task.urgency);
    }
  },
  taskByReward: function() {
    this.taskList.sort(function(task1, task2) {
      return task2.reward - task1.reward;
    })
    for (task of this.taskList) {
      console.log(task.name + " reward: " + task.reward);
    }
  },
  showToDoList: function() {
    var toDoList = [];
    for (task of this.taskList) {
      if (!task.isComplete) {
        toDoList.push(task);
        console.log(task.name);
      }
    }
    return toDoList;
  },
  showDoneList: function() {
    var doneList = [];
    for (task of this.taskList) {
      if (task.isComplete) {
        doneList.push(task);
        console.log(task.name);
      }
    }
    return doneList;
  }

}

module.exports = Hero;
