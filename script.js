var display = document.getElementById("disply");

function append(value) {
  // If "Error" is showing, clear it before adding new input
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function delChar() {
  if (display.value === "Error") {
    display.value = "";
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function calculate() {
  try {
    let exp = display.value;

    //  Allow only valid characters
    //  Allow only valid characters (added %)
    if (/[^0-9+\-*/().% ]/.test(exp)) {
      throw "Invalid Expression";
    }

    //  Disallow repeated operators except for "**"
    if (/([+\-*/])\1+/.test(exp) && !exp.includes("**")) {
      throw "Invalid Expression";
    }

    //  Evaluate safely
    let result = eval(exp);

    //  Handle NaN or Infinity
    if (isNaN(result) || !isFinite(result)) {
      throw "Invalid Expression";
    }

    display.value = result;
  } catch {
    display.value = "Error";
  }
}
