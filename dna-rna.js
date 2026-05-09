function RNA(dna) {
    let result = "";
    
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'G') {
            result = result + 'C';
        } else if (dna[i] === 'C') {
            result = result + 'G';
        } else if (dna[i] === 'T') {
            result = result + 'A';
        } else if (dna[i] === 'A') {
            result = result + 'U';
        }
    }
    
    return result;
}

function DNA(rna) {
    let result = "";
    
    for (let i = 0; i < rna.length; i++) {
        if (rna[i] === 'C') {
            result = result + 'G';
        } else if (rna[i] === 'G') {
            result = result + 'C';
        } else if (rna[i] === 'A') {
            result = result + 'T';
        } else if (rna[i] === 'U') {
            result = result + 'A';
        }
    }
    
    return result;
}
