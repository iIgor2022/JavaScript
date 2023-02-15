function simple_numbers(count) {
    count = Number(count);
    if (typeof(count) !== "number" || count === undefined || count === 0) {
        return [];
    }
    let result = [];
    for (let index = 0, number = 0; index <= count; number++) {
        if ((number % 1 === 0) && (number % number === 0) && (number % 2 !== 0) && (number % 3 !== 0)) {
            result[index] = number;
            index++;
        };
    }
    return result;
};

console.time();
console.log(simple_numbers(process.argv[2]));
console.timeEnd();