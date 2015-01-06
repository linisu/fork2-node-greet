module.exports = () ->
	greet = require("./")
	parseArgv = require("minimist")
	argv = greet(parseArgv(process.argv.slice(2)))
	console.log argv
