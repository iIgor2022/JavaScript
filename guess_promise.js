const rl = require('node:readline').createInterface({input: process.stdin, output: process.stdout});

const n = Math.floor(Math.random() * 1000);
console.log(`Загаданное число - ${n}`);
let count = 0;

function question(str) {
    return new Promise((resolve, reject) => {
        rl.question(str, (value) => {
            resolve(value);
        });
    });
};

async function guess_number() {
    while (true) {
        count++;
        const value = await question('Введите число: ');
        if (value == n) {
            console.log(`Верно. Попыток - ${count}`);
            rl.close();
            break;
        } else {
            if (value > n) {
                console.log('Больше...');
            } else {
                console.log('Меньше...');
            };
        };
    };
};

guess_number();