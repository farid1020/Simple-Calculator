
// Add the given character corrisponding to a 
// button to the output are for later calculation.
function btnclick(btn){
    let newstr = document.getElementById("outputarea").innerHTML;
    
    // clear warning message from previous calculation
    if(newstr == "unknown" || newstr == "undefined" || newstr == "false" || newstr.match(/=/) == "="){
        document.getElementById("outputarea").innerHTML = btn;
    }else{
        document.getElementById("outputarea").innerHTML = newstr.concat(btn);
    }
}


// Clear all characters from the output area.
function clearAll(){
    document.getElementById("outputarea").innerHTML = "";
}


// Clear last character from output area.
function clearOne(){
    let val = document.getElementById("outputarea").innerHTML;
    document.getElementById("outputarea").innerHTML = val.slice(0, -1);
}


// Perform the core calculations
// on the equation present in the output area.
function calculate(){
    let equation = document.getElementById("outputarea").innerHTML;
    let result = doCalculation(equation); 
    document.getElementById("outputarea").innerHTML = result+" =";
}


// Perform mathematical calcualtion from the 
// given string equation.
function doCalculation(equation){
    let factorial = checkFactorial(equation);
    let power = checkPower(equation);
    if(factorial != null){
        return factorial;
    } else if (power != null){
        return power;
    } else {
        try{
            return eval(equation);
        } catch(err){
            return "unknown";
        }
            
    }
}


// Given a power equation, calculate it and
// return answer. If not a power equation return false.
function checkPower(equation){
    if(equation.match(/\^/) == "^"){ // check if power equation
        let nums = equation.split("^");
        return Math.pow(eval(nums[0]), eval(nums[1]));
    } else {
        return null;
    }
}


// Perform Factorial calculation up to 19! and return
// "Unknown" if over that. Return null if parameter is
// not a factorial equation.
function checkFactorial(eq){
    if(eq.match(/!/) == "!"){ // check if factorial equation
        let val = parseInt(eq.match(/[0-9]+/), 10);
        let factorialList = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880,
                            3628800, 39916800, 479001600, 6227020800, 87178291200,
                            1307674368000, 20922789888000, 355687428096000, 
                            6402373705728000, 121645100408832000, 2432902008176640000];
        for(let i = 0; i < 20; i++){
            if(val == i){
                return factorialList[i];
            }
        }
        return "unknown";
    } else {
        return null;
    }
}

