function calculate(inputValue) {
    const expression = /\+|\-|\*|\//
    const numbers = inputValue.split(expression)

    const numberA = parseInt(numbers[0])
    const numberB = parseInt(numbers[1])

    const operation = inputValue.match(expression)

    const errorMessageDivideByZero = 'Expression not recognized.'

    if(Number.isNaN(numberA) || Number.isNaN(numberB) || operation == null ) {
        updateResult(errorMessageDivideByZero)
        return
    }

    const calculator = new Calculator()

    calculator.add(numberA)

    var result
    switch (operation[0]) {
        case "+":
            result = calculator.add(numberB)
            break
        case "-":
            result = calculator.subtract(numberB)
            break
        case "/":
            result = calculator.divide(numberB)
            break
        case "*":
            result = calculator.multiply(numberB)
            break
    }

    updateResult(result)

}
function updateResult(result) {
    const element = document.getElementById('result')
    
    if (element) {
        element.innerText = result
    }
}

function showVersion() {
    const calculator = new Calculator()

    const element = document.getElementById('version')

    element.innerText = calculator.version
}