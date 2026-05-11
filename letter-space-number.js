function letterSpaceNumber (str) {
const regex =/[a-zA-Z] \d(?!\w)/g
const matches = str.match(regex)
return matches ? matches : [];

}
