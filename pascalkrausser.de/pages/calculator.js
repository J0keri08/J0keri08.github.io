const buttons = document.querySelectorAll(".btn")
let toCalculate = ""
let input = ""
let aufgabe = ""
let ablage = ""

function calculate() {
    aufgabe = ablage + input + "="
    try {
        input = eval(toCalculate);
    } catch {
        input = "Error"
    }
    toCalculate.slice(0, 12)
    toCalculate = input
    ablage = ""
}

function calculateMod() {
    aufgabe = ablage + "mod" + input + "="
    toCalculate = ablage % input
    try {
        input = eval(toCalculate);
    } catch {
        input = "Error"
    }
    toCalculate = input
    ablage = ""
}

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return Array.from({ length: n }, (_, i) => i + 1)
              .reduce((a, b) => a * b, 1);
}

function showAndHideContainer() {
    const second = document.getElementById("secondContainer");
    const third = document.getElementById("thirdContainer");

      if (!second.classList.contains("hidden")) {
        second.classList.add("hidden");
        third.classList.remove("hidden");
      } 
      else {
        third.classList.add("hidden");
        second.classList.remove("hidden");
      }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.dataset.value !=  "") {
            input += button.textContent;
            toCalculate += button.dataset.value;
        } 
        else if (button.textContent == "=") {
            if (aufgabe.includes("mod")) {
                calculateMod()
            } else {
                calculate()
            }
        }
        else if (button.textContent == "⌫") {
            try {
                input = input.slice(0, -1)
                toCalculate = toCalculate.slice(0, -1)
                aufgabe = ""
            } catch {
                input = input + " "
                input = input.slice(0, -2)
                toCalculate = toCalculate + " "
                toCalculate = toCalculate.slice(0, -2)
                aufgabe = ""
            }
        }
        else if (button.textContent == "C") {
            toCalculate = ""
            input = ""
            aufgabe = ""
        }
        else if (button.textContent == "+/–") {
            calculate()
            toCalculate = input + "*(-1)"
            input += "×(–1)"
            calculate()
        }
        else if (button.textContent == "²√x") {
            calculate()
            toCalculate = input + "**0.5"
            input = "√(" + input + ")"
            calculate()
        }
        else if (button.textContent == "x²") {
            calculate()
            toCalculate = input + "**2"
            input += "²"
            calculate()
        }
        else if (button.textContent == "¹/ₓ") {
            calculate()
            toCalculate = "1/(" + input + ")"
            input = "1/(" + input + ")"
            calculate()
        }
        else if (button.textContent == "xʸ") {
            calculate()
            toCalculate = input + "**"
            input += "^"
            aufgabe = input
            ablage = input
            input = ""
        }
        else if (button.textContent == "10ˣ") {
            calculate()
            toCalculate = "10**" + input
            input = "10^" + input
            calculate()
        }
        else if (button.textContent == "2ⁿᵈ") {
            showAndHideContainer()
        }
        else if (button.textContent == "x³") {
            calculate()
            toCalculate = input + "**3"
            input += "³"
            calculate()
        }
        else if (button.textContent == "³√x") {
            calculate()
            toCalculate = input + "**(1/3)"
            input = "³√(" + input + ")"
            calculate()
        }
        else if (button.textContent == "2ˣ") {
            calculate()
            toCalculate = "2**" + input
            input = "2^" + input
            calculate()
        }
        else if (button.textContent == "eˣ") {
            calculate()
            toCalculate = "2.7182818284**" + input
            input = "e^" + input
            calculate()
        }
        else if (button.textContent == "exp") {
            calculate()
            toCalculate = input + "*10**"
            input = input + "×10^"
            aufgabe = input
            ablage = input
            input = ""
        }
        else if (button.textContent == "mod") {
            calculate()
            ablage = input
            aufgabe = input + " mod "
            input = ""
        }
        else if (button.textContent == "|x|") {
            calculate()
            if (input > 0) {
                aufgabe = "abs(" + input + ")="
                input = toCalculate
            } else {
                toCalculate = "(-1)*" + input
                aufgabe = "abs(" + input + ")"
                input = aufgabe
                calculate()
            }
        }
        else if (button.textContent == "n!") {
            calculate()
            aufgabe = "fact(" + input + ")="
            input = factorial(Number(input));
        }
        else if (button.textContent == "log") {
            calculate();
            ablage = "log(" + input + ")";
            toCalculate = "Math.log10(" + input + ")";
            input = ""
            calculate();
        }
        else if (button.textContent == "ln") {
            calculate()
            if (input = 2.7182818284) {
                aufgabe = "ln(" + input + ")";
                input = 1
            } else {
                ablage = "ln(" + input + ")";
                toCalculate = "Math.log(" + input + ")";
                input = ""
                calculate();
            }
        }

        document.getElementById("aufgabe-indication").textContent = aufgabe;
        document.getElementById("input-indication").textContent = input;
    });
});
