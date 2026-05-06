const sourceObject = {
  num: 42,
  bool: true,
  str: "some text",
  log: console.log,
};








export    function get (key) {
return sourceObject[key];

}

export   function set (key,value) {
return sourceObject[key]= value;
return value;


}
