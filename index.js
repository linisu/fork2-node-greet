module.exports = function (argv){
	if(argv.drunk){
		return "hello " + argv._[0] + ", you look sexy today";
	}
	else{
		return "hello, " + argv._[0];
	}
}