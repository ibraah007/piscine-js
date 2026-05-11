function ionOut(str) {
    // Find all words ending with 'tion'
    const regex = /\b(\w+?)tion\b/g;
    const matches = str.match(regex);
    
    if (!matches) return [];
    
    // Remove 'ion' from each match
    return matches.map(word => word.slice(0, -3));
}
