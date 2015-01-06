module.exports = (argv) ->
    if argv.drunk
	    "hello #{argv._[0]}, you look sexy today"
    else
    	"hello, #{argv._[0]}"