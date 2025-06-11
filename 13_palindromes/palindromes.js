const palindromes = function(str) {
    let original = str.toLowerCase().split("");
    original = original.filter(item => 
        (item != " "
        && item != "!"
        && item != "."
        && item != ",")
    );
    let reversed = original.slice("");
    reversed.reverse();

    for (let i = 0; i < original.length; i++) {
        if (original[i] !== reversed[i]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
