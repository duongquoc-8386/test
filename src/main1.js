function splitSets(A, B) {

    const onlyA = A.filter(x => !B.includes(x));


    const onlyB = B.filter(x => !A.includes(x));


    const both = A.filter(x => B.includes(x));

    return { onlyA, onlyB, both };
}


const A = [1, 2, 3, 4, 5];
const B = [4, 5, 6, 7, 8];

const result = splitSets(A, B);

console.log("Chỉ có trong A:", result.onlyA);
console.log("Chỉ có trong B:", result.onlyB);
console.log("Có trong cả A và B:", result.both);
