const isAnagrams = (string1, string2) => {
    const stringA = string1.toLowerCase().replace(/[^a-zA-Z_]/g, "").split("");
    const stringB = string2.toLowerCase().replace(/[^a-zA-Z_]/g, "").split("");

    if(stringA.length !== stringB.length) {
        return false;
    }
    const length = stringA.length;
    for(let i=0; i < length; i++) {
        const foundLetter = stringA.shift();
        const index = stringB.indexOf(foundLetter);
        if(index !== -1) {
            stringB.splice(index, 1);
        }
    }
    return stringA.length === stringB.length
}


console.log(isAnagrams("treeees", "eeeetrs"))