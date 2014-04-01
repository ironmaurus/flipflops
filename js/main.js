/**
 * Generates the state table.
 * @param {Number} flipflopCount The number of flipflops.
 * @param {Number} inputCount The number of input variables.
 */
function tabulateState(flipflopCount, inputCount) {
	var stateTable = [];
	
	var inputs = [];
	for (var i = 0; i < flipflopCount; i++) {
		var key = String.fromCharCode(65 + i);
		inputs.push({
			col : key,
			row : ""
		});
	}

	for (var i = 0; i < inputCount; i++) {
		var key = String.fromCharCode(122 - inputCount + i);
		inputs.push({
			col : key,
			row : ''
		});
	}

	var length = flipflopCount + inputCount;
	var rowCount = Math.pow(2, length);
	var dec, bin = "";
	for (var i = 0; i < rowCount; i++) {
		bin = decimalToBinary(i, length)
		for (var j = 0; j < bin.length; j++) {
			inputs[j].row += bin[j];
		}
	}
	
	for(i in inputs){ //push present state and input to stateTable
		stateTable.push(inputs[i]);
	}
	
	for(var i = 0; i < stateTable.length; i++){
		console.log(stateTable[i].col +":"+ stateTable[i].row);
	}
	
	for (i in inp) { //push flipflop inputs to stateTable
		stateTable.push({
			col: i,
			row: evaluateFunction(rowCount, inputs, inp[i])
		});
	}

	// for (var i = 0; i < stateTable.length; i++) {
		// console.log(stateTable[i].col +":"+ stateTable[i].row);
		// // col = stateTable[key];
		// // for (var i = 0; i < col; i++) {
			// // console.log(":)" + col[i]);
		// // }
	// }
}

/**
 * Converts decimal into its binary representation.
 * @param {Number} dec The decimal representation of an integer.
 * @param {Number} length The length of the binary representation needed.
 */
function decimalToBinary(dec, length) {
	bin = dec.toString(2);
	var formatted = "";
	var zero = length - bin.length;
	while (zero > 0) {
		formatted += '0';
		zero--;
	}
	return formatted + bin;
}

/**
 * Evaluates a flipflop inputs/output function.
 * @param {Number} rowCount Number of rows.
 * @param {{col:String,row:String}} inputs Input variables to evaluate boolean function. 
 * @param {String} booleanFunction Boolean expression to evaluate.
 */
function evaluateFunction(rowCount, inputs, booleanFunction){
	var temp = booleanFunction;
	
	console.log("Test:"+eval(0&&1));
	
	
	for(var i = 0; i < booleanFunction.length; i++){
		console.log(booleanFunction[i]);
	} 
	
	for(var i = 0; i < rowCount; i++){
				
	}
}

