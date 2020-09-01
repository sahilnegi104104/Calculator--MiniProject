// class Calculator{
// 	constructor(previousOperandTextElement, currentOperandTextElement){
// 		this.previousOperandTextElement = previousOperandTextElement;
// 		this.previousOperandTextElement = previousOperandTextElement;
// 	}

// 	clear(){
// 		this.currentOperand = '';
// 		this.previousOperand = '';
// 		this.operation = '';
// 	}
// 	delete(){

// 	}
// 	appendNumber(){

// 	}
// 	chooseOperation(operation){

// 	}
// 	compute(){

// 	}
// 	updateDisplay(){

// 	}
// }


// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons = document.querySelectorAll('[data-operation]');
// const equlasButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');
// const previousOperandTextElement = document.querySelector('[data-previous-operand]');
// const currentOperandTextElement = document.querySelector('[data-current-operand]');



//

let buttons = document.querySelectorAll("button");

let evalString = ""
for(button of buttons){//in
	button.addEventListener('click',function(event){
		if(this.getAttribute("type") === 'number'){
			evalString += this.innerHTML;
			document.querySelector(".current-operand").innerHTML = evalString
			console.log(evalString);
		}
		if(this.getAttribute("type") === 'op'){
			evalString += this.innerHTML;
			document.querySelector(".current-operand").innerHTML = evalString
			console.log(evalString);
		}

		if(this.getAttribute("type") === 'op-'){
			evalString -= this.innerHTML;
			document.querySelector(".current-operand").innerHTML = evalString
			console.log(evalString);
		}

		if(this.getAttribute("type") === 'op*'){
			evalString = evalString * this.innerHTML;
			document.querySelector(".current-operand").innerHTML = evalString
			console.log(evalString);
		}


		if(this.getAttribute("type") == 'op/'){
			evalString /= this.innerHTML;
			document.querySelector(".current-operand").innerHTML = evalString
			console.log(evalString);
		}

		if(this.getAttribute("type") == 'op-10'){
			evalString = "";
			document.querySelector(".current-operand").innerHTML = evalString
			console.log(evalString);
		}


		if(this.getAttribute("type") == 'op-del'){
			let x = evalString.length;
			evalString = evalString.slice(0,x-1);
			document.querySelector(".current-operand").innerHTML = evalString
			console.log(evalString);
		}

		if(this.getAttribute("type") == 'eq'){
			evalString = eval(evalString)
			document.querySelector(".current-operand").innerHTML = evalString
			console.log(evalString);
		}
	})
}



