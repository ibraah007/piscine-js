function  indexOf (arr,value, fromIndex=0) {

for (let i=fromIndex; i < arr.length; i++) {

if (arr[i] === value) {
return i
}

}

return -1



}

function  lastIndexOf(arr,value, arr.length-1) {


for (let i=fromIndex; i>=0;i-- ) {

if (arr[i] === value ){
return i
}

}
return -1

}
