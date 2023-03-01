function getPasswordChecker(password) {
    let closure_password = password;
    return function getPassword(pass) {
        return pass === password ? true:false;
    };
};

let func = getPasswordChecker("123");
console.log(func("125"));
console.log(func("123"));