function simple_numbers(count) {
    count = Number(count);
    if (typeof(count) !== "number" || count === undefined || count === 0) {
        return [];
    }
    let result = [2, ];
    let number = 3;
    while (result.length < count) {
        delimeters = 0;
        for (let j = 2; j < number; j++) {
            if (number % j === 0) {
                delimeters++;
            };
        };
        if (delimeters === 0) {
            result.push(number);
        };
        number++;
    };
    return result;
};

console.time();
console.log(simple_numbers(process.argv[2]));
console.timeEnd();