let nn = Math.floor(Math.random() * 1000)
console.log(`random = ${nn}`)
while (true) {
    let f = prompt("Введите число: ")
    if (!isNaN(f)) {
        if (f != nn) {
            if (f > nn) {
                alert("Больше");
            } else {
                alert("Меньше");
            };
        } else {
            alert("Равно!");
            break;
        }
    } else {
        alert("Введенный символ не является числом!");
    }
}
