function countCharacters(str) {
    str = str.toLowerCase();
    const counts = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (counts[char] !== undefined) continue;

        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === char) {
                count++;
            }
        }
        counts[char] = count;
    }

    return counts;
}

const inputString = "Hello World!";
console.log(countCharacters(inputString));
