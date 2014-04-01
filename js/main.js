var input = {'flipflop':'JK', 'flipflopCount':'c2','input':'i2'};
var flipflops = {};
var ioFunctions = "";
var functionCount = 1;
var outputCount = 0;


var inputCount = 2;
var flipflopCount = 2;

tabulateState(flipflopCount, inputCount);

function tabulateState(flipflopCount, inputCount) {
	var rows = Math.pow(2, flipflopCount+inputCount);
	console.log('rows: '+rows);
	
	console.log(sprintf('%b', 34));
	
	for(var i = 0; i < rows; i++){
		var int = i.toString(2);
		if(int.length){
			
		}
		console.log(i.toString(2));
	}
}


