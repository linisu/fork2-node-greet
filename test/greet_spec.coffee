greet = require("..")
describe('greet',->
	it("should greet a person by name", ->
		expect(greet('_':['linisu'])).to.eql("hello, linisu")
	)
	it("should greet a person flirtatiously if drunk",->
		expect(greet(
			'_':['linisu']
			'drunk':'drunk'
		)).to.eql("hello linisu, you look sexy today")
	)
)
