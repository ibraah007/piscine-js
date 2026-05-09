function pyramid(char, height) {
    let result = "";
    
    for (let i = 1; i <= height; i++) {
        let spaces = height - i;
        let stars = 2 * i - 1;
        
        result = result + " ".repeat(spaces) + char.repeat(stars);
        
        if (i !== height) {
            result = result + "\n";
        }
    }
    
    return result;
}
