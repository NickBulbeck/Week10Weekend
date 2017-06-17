var Hero = require("../hero");
var Task = require("../task");
var Food = require("../food");
var assert = require('assert');


describe("Nick's D&D hamework...",function(){

  it("1: Hero has a name", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    assert.equal("Glorfindel",glorfindel.name);
  });
  it("2: Hero has a health-level", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    assert.equal(50,glorfindel.health);
  });
  it("3: Hero has a favourite food", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    assert.equal("Lembas",glorfindel.favouriteFood);
  });
  it("4: Hero can talk", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    assert.equal("I am Glorfindel!",glorfindel.announce());
  });
  it("5: Hero begins with no tasks", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    assert.equal(0,glorfindel.taskList.length);
  });
  it("6: Hero can eat", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    var lasagne = new Food("Lasagne",10);
    glorfindel.eat(lasagne);
    assert.equal(60,glorfindel.health);
  })
  it("7: Hero can spot favourite food", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    var lasagne = new Food("Lembas",20);
    glorfindel.eat(lasagne);
    assert.equal(80,glorfindel.health);
  })
  // it("8: Hero can sort task-list by difficulty", function(){
    
  // })
  // it("9: Hero can sort task-list by urgency", function(){
    
  // })
  // it("10: Hero can sort task-list by reward", function(){
    
  // })
  // it("11: Hero can view completed tasks", function(){
    
  // })
  // it("12: Hero can view incomplete tasks", function(){
    
  // })


})