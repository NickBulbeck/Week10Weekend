var Hero = require("../hero");
// var Task = require("../task");
// var Food = require("../food");
var assert = require('assert');


describe("Nick's D&D hamework...",function(){

  // beforeEach(function() {
  //   var glorfindel = new Hero("Glorfindel")
  // });


  it("ONE: Hero has a name", function(){
    var glorfindel = new Hero("Glorfindel");
    assert.equal("Glorfindel",glorfindel.name);
  });
  // it("TWO: Hero has a health-level", function(){

  // });
  // it("THREE: Hero has a favourite food", function(){

  // });
  // it("FOUR: Hero can talk", function(){

  // });
  // it("FIVE: Hero has a mission ", function(){

  // });
  // it("SIX: Hero can eat", function(){

  // })
  // it("SEVEN: Hero can spot favourite food", function(){

  // })
  // it("EIGHT: Hero can sort task-list by difficulty", function(){
    
  // })
  // it("NINE: Hero can sort task-list by urgency", function(){
    
  // })
  // it("TEN: Hero can sort task-list by reward", function(){
    
  // })
  // it("ELEVEN: Hero can view completed tasks", function(){
    
  // })
  // it("TWELVE: Hero can view incomplete tasks", function(){
    
  // })


})