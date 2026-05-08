function multiply (a,b) {
let result = 0
let positiveA= math.abs(a)
let positiveB= math.abs(b)
for (let i :=0;i<positiveB;i++){

result= result + positveA




 }

if (a>0 && b<0) || (a<0 && b>0) {

return -result
}

return result
}

function divide (a,b) {

if (b===0) return undefined

let positveA = math.abs(a)
let positiveB =math.abs(b)

let reminder = positiveA

while(reminder >= positiveB) {
reminder = reminder- positiveB

}

if ((a<0 && b>0) || (a>0 && b<0)) {
return -result
}

return result

}
function modulo (a,b) {

if (b===0) return undefined
let positiveA = math.abs(a)
let positiveB = math.abs(a)
let result = positiveA

while (result >= positiveB) {
result = result - positive B

}


if (a<0) {
return -result
}
return result

}
