var Hero = require("../hero");
var Task = require("../task");
// var Food = require("../food");
var assert = require('assert');

describe("Nick's D&D hamework...",function(){
  it("1: Task has a name", function(){
    var task1 = new Task("Feed the ducks",5,2,10);
    assert.equal("Feed the ducks",task1.name);
  });
  it("2: Task has a difficulty level", function(){
    var task1 = new Task("Feed the ducks",5,2,10);
    assert.equal(5,task1.difficulty);
  });
  it("3: Task has an urgency level", function(){
    var task1 = new Task("Feed the ducks",5,2,10);
    assert.equal(2,task1.urgency);
  });
  it("4: Task has a reward level", function(){
    var task1 = new Task("Feed the ducks",5,2,10);
    assert.equal(10,task1.reward);
  });
  // it("5: Task begins uncompleted", function(){
    // var task1 = new Task("Feed the ducks",5,2,10);
    // assert.equal(false,task1.isComplete);
  // });
  // it("6: Task can be marked as complete", function(){
    // var task1 = new Task("Feed the ducks",5,2,10);
    // assert.equal(false,task1.isComplete);
    // task1.markAsComplete();
    // assert(task1.isComplete);
  // });








})