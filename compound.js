function addNumbers(a , b){
    let num = a + b;
    return num
}

// A - final amount
// P - principal
// r - interest rate
// n - number of times it compounds in a year
// t - number of years

function compoundInterest(P, r, n, t){

    let A = P * (1 + r / n) ** (n * t);
    return A
}

 // 1000 that needs to be invested at 5% for 5 years and compounds monthly

P = 1000
r = 5/100
n = 12
t = 5

let A = compoundInterest(P, r, n, t)

let B = compoundInterest(1000, 0.075, 2, 3)

console.log(B)

function calculate(){

    let P = parseFloat(document.getElementById("principal").value)
    let r = parseFloat(document.getElementById("rate").value)/100
    let n = parseFloat(document.getElementById("times").value)
    let t = parseFloat(document.getElementById("years").value)

    let A = compoundInterest(P,r,n,t)

    document.getElementById("result").innerText = "$"+ A.toFixed(2)

}



