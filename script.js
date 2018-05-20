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

function sum(fstNum, sndNum){
    return fstNum+sndNum;
}

function subtract(thisNum, fromThisNum){
    return fromThisNum - thisNum; 
}

function multiply (numArray){
    let result = 1;
    if(Array.isArray(numArray)){
        if(numArray.length > 1){
            let i;
            for(i = 0; i < numArray.length; i++){
                result = numArray[i] * result;
            }
            return result;
        }   
    } 
    return result;
}