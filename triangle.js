function triangle(char, height) {
    let result = "";
    
    for (let i = 1; i <= height; i++) {
        // Add the character i times
        for (let j = 0; j < i; j++) {
            result = result + char;
        }
        // Add new line after each row except the last one
        if (i !== height) {
            result = result + "\n";
        }
    }
    
    return result;
}
