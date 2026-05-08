function  indexOf (arr,value, fromIndex=0) {

for (let i=fromIndex; i < arr.length; i++) {

if (arr[i] === value) {
return i
}

}

return -1



}
function lastIndexOf(arr, value, fromIndex = arr.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

function includes (arr,value, fromIndex=0) {

let position = indexOf (arr,value, fromIndex)

if (position !=-1) {
return true 
}else {
return false
}




}
