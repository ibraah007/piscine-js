function pyramid(char, height) {
    let result = "";
    
    // Calculate width of the last row
    let lastRowWidth = 2 * height - 1;
    
    for (let i = 1; i <= height; i++) {
        // Number of stars in current row
        let stars = 2 * i - 1;
        
        // Number of spaces to center
        let spaces = (lastRowWidth - stars) / 2;
        
        // Add spaces
        for (let s = 0; s < spaces; s++) {
            result = result + " ";
        }
        
        // Add characters
        for (let c = 0; c < stars; c++) {
            result = result + char;
        }
        
        // Add new line after each row except the last one
        if (i !== height) {
            result = result + "\n";
        }
    }
    
    return result;
}
