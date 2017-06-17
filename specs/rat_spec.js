var Rat = require("../rat");
var Food = require("../food")
var assert = require('assert');

describe("Nick's D&D hamework: Rat...",function(){
  it("1: Rat can interfere with food", function(){
    var rat = new Rat();
    var pie = new Food("Pie",10)
    assert.equal(false,pie.isContaminated);
    rat.touch(pie);
    assert(pie.isContaminated);
  });

})
