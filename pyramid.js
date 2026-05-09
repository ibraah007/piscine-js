function pyramid(char, height) {
    let result = "";
    let charWidth = char.length; // Calculate how wide the string is

    for (let i = 1; i <= height; i++) {
        // Multiply spaces by charWidth to maintain alignment
        let spaces = (height - i) * charWidth; 
        let stars = 2 * i - 1;

        result = result + " ".repeat(spaces) + char.repeat(stars);

        if (i !== height) {
            result = result + "\n";
        }
    }
    
    return result;
}
