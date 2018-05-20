function btnclick(btn){
    let newstr = document.getElementById("outputarea").innerHTML.concat(btn);
    document.getElementById("outputarea").innerHTML = newstr;
}

function clearAll(){
    document.getElementById("outputarea").innerHTML = "";
}

function calculate(){
    let equation = document.getElementById("outputarea").innerHTML;
    let result = doCalculation(equation); 
    document.getElementById("outputarea").innerHTML = result;
}

function doCalculation(equation){
    let numOperators = checkNumOperators(equation);
    return 42;
}

function checkNumOperators(eq){
    return 2;
}