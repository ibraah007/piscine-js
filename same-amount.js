function sameAmount(str, reg1, reg2) {

 let regex1 = new RegExp(reg1.source, 'g');
    let regex2 = new RegExp(reg2.source, 'g');
    




let matches1= str.match(reg1)

let count1=matches ? matches1.length : 0

let matches2 = str.match(reg2)
let count2 = matches2 ? matches2.length : 0

return count1 === count2
}
