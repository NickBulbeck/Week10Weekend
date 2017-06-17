// var Hero = require("../hero");
// var Task = require("../task");
var Food = require("../food");
var assert = require('assert');

describe("Nick's D&D hamework...",function(){
  it("1: Food has a name", function(){
    var lasagne = new Food("lasagne",7);
    // assert.equal("lasagne",lasagne.name);
  });
  it("2: Food has a nutritional value", function(){
    var lasagne = new Food("lasagne",7);
    // assert.equal(7,lasagne.nutrition);
  });
  it("2: Food starts uncontaminated", function(){
    var lasagne = new Food("lasagne",7);
    // assert.equal(false,lasagne.isContaminated);
  });
  it("2: Food can be contaminated", function(){
    var lasagne = new Food("lasagne",7);
    // assert.equal(false,lasagne.isContaminated);
    // lasagne.poison();
    // assert.equal(true,lasagne.isContaminated);

  });






})