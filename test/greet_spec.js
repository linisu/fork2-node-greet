//var expect = require("chai").expect;
var greet = require("..");
describe('greet',function(){
	it("should greet a person by name",function(){
		expect(greet({'_':['linisu']})).to.eql("hello, linisu");
	});
	it("should greet a person flirtatiously if drunk",function(){
		expect(greet({'_':['linisu'],'drunk':'drunk'})).to.eql("hello linisu, you look sexy today");
	});
});