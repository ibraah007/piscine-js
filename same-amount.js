function sameAmount(str, reg1, reg2) {
    let match1 = str.match(new RegExp(reg1, "g")) || []
    let match2 = str.match(new RegExp(reg2, "g")) || []

    return match1.length === match2.length
}
