const palindromes = function (str) {
    str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "");
    str = str.replace(/\s/g, "");
    str = str.toLowerCase();
    let b = 0;
    let e = str.length - 1;
    while (b < e) {
        if (str[b] !== str[e]) {
            return false;
        }
        b++;
        e--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
