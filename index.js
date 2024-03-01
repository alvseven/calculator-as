export function add(firstNumber, secondNumber) {
    if(typeof firstNumber === "number" && typeof secondNumber === "number") {
        return firstNumber + secondNumber
    }

    throw new TypeError(`Params should be a valid number, received: ${firstNumber} and ${secondNumber}`)
}