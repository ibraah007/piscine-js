function pyramid(char, height) {
    let result = "";
    
    for (let i = 1; i <= height; i++) {
        // Calculate number of spaces
        let spaces = height - i;
        
        // Add spaces
        for (let s = 0; s < spaces; s++) {
            result = result + " ";
        }
        
        // Add characters (2 * i - 1)
        for (let c = 0; c < (2 * i - 1); c++) {
            result = result + char;
        }
        
        // Add new line after each row except the last one
        if (i !== height) {
            result = result + "\n";
        }
    }
    
    return result;
}
