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
