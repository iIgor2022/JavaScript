const rl = require('node:readline').createInterface({input: process.stdin, output: process.stdout});
const fs = require('node:fs');

function write_file(str) {
    fs.appendFile('log.log', `${str} \n`, (err) => {
        if (err) {
            console.log(err);
        };
    });
};

const n = Math.floor(Math.random() * 1000);
console.log(`Загаданное число - ${n}`);
write_file(`Загаданное число - ${n}`);
let count = 0;

function guess_number() {
    rl.question('Введите число: ', (value) => {
        count++;
        console.log(`Введенное число - ${value}. Попытка - ${count}`);
        write_file(`Введенное число - ${value}. Попытка - ${count}`);
        if (value == n) {
            console.log(`Верно. Попыток - ${count}`);
            write_file(`Верно. Попыток - ${count}`);
            rl.close();
        } else {
            if (value > n) {
                write_file('Больше...');
                console.log('Больше...');
            } else {
                write_file('Меньше...');
                console.log('Меньше...');
            }
            guess_number();
        };
    });
};

guess_number();