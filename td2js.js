function permuter() {
    let operande1 = document.querySelector("#text1").value
    let operande2 = document.querySelector("#text2").value
    alert(operande1+"  "+operande2);
    document.querySelector("#text1").value=operande2
    document.querySelector("#text2").value=operande1
}

function addition() {
    let operande1 = parseFloat(document.querySelector("#text21").value)
    let operande2 = parseFloat(document.querySelector("#text22").value)
    document.querySelector("#text23").value=operande1+operande2
}

function soustraction() {
    let operande1 = parseFloat(document.querySelector("#text21").value)
    let operande2 = parseFloat(document.querySelector("#text22").value)
    document.querySelector("#text23").value=operande1-operande2
}

function multiplication() {
    let operande1 = parseFloat(document.querySelector("#text21").value)
    let operande2 = parseFloat(document.querySelector("#text22").value)
    document.querySelector("#text23").value=operande1*operande2
}

function division() {
    let operande1 = parseFloat(document.querySelector("#text21").value)
    let operande2 = parseFloat(document.querySelector("#text22").value)
    document.querySelector("#text23").value=operande1/operande2
}

function calcimc(){
    let operande1 = parseFloat(document.querySelector("#text31").value)
    let operande2 = parseFloat(document.querySelector("#text32").value)
    let x=(operande1/operande2/operande2)
    x = x % 1 === 0 ? x.toFixed(0) : x.toFixed(2);
    c=""
    if (x < 18.5) {
        c="Insuffisance pondérale (maigreur)"
    } else if (x >= 18.5 && x < 25) {
        c="Corpulence normale"
    } else if (x >= 25 && x < 30) {
        c="Surx"
    } else if (x >= 30 && x < 35) {
        c="Obésité modérée"
    } else if (x >= 35 && x < 40) {
        c="Obésité sévère"
    } else {
        c="Obésité morbide ou massive"
    }

    document.querySelector("#p1").innerText="Votre IMC est de "+x+" . "+c
}



function appendToResult(value) {
    result.value += value;
  }
  
  function calculate() {
    try {
        // Define a list of functions to be handled separately
        const functions = ['sin', 'cos', 'ln', 'log', 'tan', 'sqrt', 'exp', 'square', 'puissance', 'inverse'];

        // Check if the expression contains any declared functions and evaluate them separately
        if (result.value.match(new RegExp(`(${functions.join('|')})\\([^)]+\\)`, 'g'))) {
        const functionExpression = result.value.replace(new RegExp(`(${functions.join('|')})\\(([^)]+)\\)`, 'g'), function(match, func, args) {
            return calculateFunction(func, args);
        });
        result.value = eval(functionExpression);
        } else {
        result.value = eval(result.value);
        }
    } catch (error) {
        result.value = "Error";
    }
}

// Function to calculate individual functions
function calculateFunction(func, args) {
    switch (func) {
        case 'sin':
        case 'cos':
        case 'tan':
        case 'sqrt':
        case 'exp':
        case 'square':
        return Math[func](parseFloat(args)).toFixed(2);
        case 'ln': 
        return Math['log'](parseFloat(args)).toFixed(2);
        case 'log': 
        return Math['log10'](parseFloat(args)).toFixed(2);
        case 'puissance':
        const [base, exponent] = args.split(',');
        return Math.pow(parseFloat(base), parseFloat(exponent)).toFixed(2);
        case 'inverse':
        return (1 / parseFloat(args)).toFixed(2);
        default:
        return args; // Default to returning the original arguments if the function is not recognized
    }
}

function clearResult() {
  result.value = "";
}
  



let result = document.getElementById("result");
let btnPermuter = document.querySelector("#btnPermuter");
let btnaddition = document.querySelector("#btnAddition");
let btnSoustraction = document.querySelector("#btnSoustraction");
let btnMultiplication = document.querySelector("#btnMultiplication");
let btnDivision = document.querySelector("#btnDivision");
let btnimc = document.querySelector("#btnimc");
btnPermuter.onclick = permuter;
btnaddition.onclick = addition;
btnSoustraction.onclick = soustraction;
btnMultiplication.onclick = multiplication;
btnDivision.onclick = division;
btnimc.onclick = calcimc;