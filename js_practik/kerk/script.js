var inputNumber = document.getElementsByClassName("input-number")
var operBts = document.getElementsByClassName("oper-button")
var resultView = document.getElementById('result')
var results = document.getElementById("results")
var reset =
var number1 = ""
var number2 = ""
var operC = false
var operation;
var numbers;

function whatNumberClick(eventObject, operationCode) {
	var clickElemInputNumber = eventObject.currentTarget
	if (!operC) {
		number1 += clickElemInputNumber.innerHTML
	} else {
		number2 += clickElemInputNumber.innerHTML
	}

	console.log(number1)
	console.log(number2)
	return numbers = [Number(number1), Number(number2)]
}



for (var s = 0; s < inputNumber.length; s++) {
	inputNumber[s].addEventListener("click", whatNumberClick)
}



function makeOp() {

	if (operation === "+") {
		resultView.innerHTML = numbers[0] + numbers[1]
	} else if (operation === "-") {
		resultView.innerHTML = numbers[0] - numbers[1]
	} else if (operation === "*") {
		resultView.innerHTML = numbers[0] * numbers[1]
	} else if (operation === "/") {
		resultView.innerHTML = numbers[0] / numbers[1]

	}

}

function onButtonClickInerHTML(eventObject) {
	var clickedElement = eventObject.currentTarget
	operation = clickedElement.innerHTML
	operC = true
	return operation
}

for (var k = 0; k < operBts.length; k++) {
	operBts[k].addEventListener("click", onButtonClickInerHTML)
}

results.addEventListener("click", makeOp)