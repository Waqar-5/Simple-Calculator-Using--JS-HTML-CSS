//Get the display input element from the DOM
var display = document.getElementById("disply");  
// var → keyword to declare variable (older way, function-scoped)
// display → variable name (will hold input element)
// = → assignment operator
// document → global object representing the webpage
// . → property access
// getElementById → DOM method to get element by id
// ("disply") → the id of the input field in HTML
// ; → end of statement

// Append function → adds a value (number/operator) to the display
function append(value) {  
  // function → declares a function
  // append → function name
  // (value) → parameter, the key pressed (digit/operator)

  // If "Error" is showing, clear it before adding new input
  if (display.value === "Error") {  
    // if → condition keyword
    // display.value → current text inside input
    // === → strict equality (checks type + value)
    // "Error" → string literal to match
    // { ... } → block runs if condition true
    display.value = "";  
    // = → assignment
    // "" → empty string clears the display
  }
  display.value += value;  
  // += → append (concatenate) the new value to existing string
}
  
//  Clear display function
function clearDisplay() {  
  display.value = "";  
  // resets text to empty string
}

//  Delete last character function
function delChar() {  
  if (display.value === "Error") {  
    // If "Error", clear instead of slicing
    display.value = "";  
  } else {  
    // Otherwise remove last character
    display.value = display.value.slice(0, -1);  
    // slice(0, -1) → copy string from index 0 to second-last character
  }
}

//  Calculate result function
function calculate() {  
  try {  
    // try → block that may throw error
    let exp = display.value;  
    // let → block-scoped variable
    // exp → variable name for expression string
    // = display.value → store current expression

    //  Allow only valid characters (numbers, + - * / % ( ) . and space)
    if (/[^0-9+\-*/().% ]/.test(exp)) {  
      // /.../ → regex literal
      // [^...] → negated class (any char NOT in list)
      // 0-9 → digits allowed
      // +\-*/ → operators (escape - for safety)
      // ().% → parentheses, dot, modulo
      // space allowed
      // .test(exp) → check if exp has invalid chars
      throw "Invalid Expression";  
      // throw → exit try block with error
      // "Invalid Expression" → error message
    }

    //  Disallow repeated operators except for exponent (**)
    if (/([+\-*/])\1+/.test(exp) && !exp.includes("**")) {  
      // ([+\-*/]) → capture one operator
      // \1+ → backreference to same operator repeated
      // .test(exp) → check if match exists
      // && → AND
      // !exp.includes("**") → allow only double star
      throw "Invalid Expression";  
    }

    //  Evaluate safely
    let result = eval(exp);  
    // eval → executes string as JS expression
    // result → numeric or computed answer

    //  Handle NaN or Infinity
    if (isNaN(result) || !isFinite(result)) {  
      // isNaN → true if result is Not-a-Number
      // || → OR
      // isFinite → false if result is Infinity/-Infinity
      throw "Invalid Expression";  
    }

    display.value = result;  
    // Show result in display

  } catch {  
    // catch → handles any thrown error
    display.value = "Error";  
    // Shows "Error" instead of crashing
  }
}
