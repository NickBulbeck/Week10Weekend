var Hero = require("../hero");
var Task = require("../task");
var Food = require("../food");
var Rat = require("../rat");
var assert = require('assert');


describe("Nick's D&D hamework: Hero...",function(){

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
    var lembas = new Food("Lembas",20);
    glorfindel.eat(lembas);
    assert.equal(80,glorfindel.health);
  })
  it("7.1: Hero can be poisoned", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    var lasagne = new Food("Lasagne",10);
    lasagne.contaminate();
    glorfindel.eat(lasagne);
    assert.equal(40,glorfindel.health);
  })
  it("7.2: Hero is poisoned by favourite food", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    var lembas = new Food("Lembas",20);
    lembas.contaminate();
    glorfindel.eat(lembas);
    assert.equal(20,glorfindel.health);
  })
  it("7.3: Hero is poisoned by ratted favourite food", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    var lembas = new Food("Lembas",20);
    var donaldTrump = new Rat();
    donaldTrump.touch(lembas);
    glorfindel.eat(lembas);
    assert.equal(20,glorfindel.health);
  })
  it("7.4: Hero can die of poisoning",function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    var lembas = new Food("Lembas",20);
    var donaldTrump = new Rat();
    donaldTrump.touch(lembas);
    glorfindel.eat(lembas);
    glorfindel.eat(lembas);
    assert.equal(0,glorfindel.health);
    var deid = "I am ... aw naw, ahm deid so ah am!";
    assert.equal(deid,glorfindel.announce());
  })

  it("8: Hero can be assigned a task", function(){
    var glorfindel = new Hero("Glorfindel",
                               50,
                               "Lembas");
    var task1 = new Task("Feed ducks",5,2,10);
    var task2 = new Task("Defeat Balrog",30,10,30);
    var task3 = new Task("Find Frodo",10,35,15);
    glorfindel.assign(task1);
    glorfindel.assign(task2);
    glorfindel.assign(task3);
    assert.equal(3,glorfindel.taskList.length);
  })


  // it("8: Hero can sort task-list by difficulty", function(){
    // var task1 = new Task("Feed ducks",5,2,10);
    // var task2 = new Task("Defeat Balrog",30,10,30);
    // var task3 = new Task("Find Frodo",10,35,15);
    // var task4 = new Task("Storm dark tower",50,2,50);
    // var task5 = new Task("Sing song of Valinor",2,5,6);
    // var task6 = new Task("Return from halls of Mandos",14,6,32);
    
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