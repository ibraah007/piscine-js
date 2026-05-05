const escapeStr =   "`\\/\"'";
const arr = [4,'2'];
const obj = {
str:"ibrah",
num:7,
bool:false,
undef:undefined,
};
const nested ={
arr:[4 ,undefined '2'],
obj:{
str:"ibrah",
num:6,
bool:true
}

};
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);
