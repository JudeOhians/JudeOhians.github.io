
function basicmath(word) {
    const operators = {
        "plus": "+",
        "Plus": "+",
        "minus": "-",
        "Minus": "-",
        "subtracted": "-",
        "Subtracted": "-",
        "subtract": "-",
        "Subtract": "-",
        "times": "*",
        "Times": "*",
        "multiply": "*",
        "Multiply": "*",
        "divided by": "/",
        "Divided by": "/",
        "Divide": "/",
        "divide": "/",
    };

    const words = word.split(" ");
    
    if (words.every(sign => operators.hasOwnProperty(sign) || !isNaN(parseFloat(sign)))) {
        let expression = "";
        for (let sign of words) {
            if (operators.hasOwnProperty(sign)) {
                expression += operators[sign];
            } else {
                expression += sign;
            }
        }
        
        try {
            return eval(expression);
        } catch (error) {
            return null;
        }
    } else {
        return "Invalid input";
    }
}

// Example usage:
const inputStr = "2 divide 1";
const output = basicmath(inputStr);
console.log(output);  // Output: 1s