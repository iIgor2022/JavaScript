let catalog = []
// id
// name
// description
// sizes
// price
// available

catalog.push(
    {
        id: 0,
        name: "Куртка",
        description: "",
        sizes: [46, 48, 50, 52, 54],
        price: 100,
        available: true,
    },
    {
        id: 1,
        name: "Брюки",
        description: "",
        sizes: [18, 24],
        price: 95,
        available: true,
    },
    {
        id: 2,
        name: "Шапка",
        description: "",
        sizes: [10, 14],
        price: 30,
        available: false,
    },
    {
        id: 3,
        name: "Ботинки",
        description: "",
        sizes: [42, 44, 45],
        price: 110,
        available: true,
    },
    {
        id: 4,
        name: "Шарф",
        description: "",
        sizes: [],
        price: 15,
        available: false,
    },
);

let basket = []
// good - ссылка на товар в каталоге
// amount - количество товара в корзине

basket.push(
    {
        good: catalog[0],
        amount: 2,
    },
    {
        good: catalog[3],
        amount: 3,
    }
);

function add_to_basket(product, quantity) {
    let item = basket.find(item => item.good == product);
    if (item != undefined) {
        item.amount += quantity;
    } else {
        basket.push(
            {
                good: product,
                amount: quantity,
            },
        );
    };
    return basket.find(item => item.good == product)
};

function del_from_basket(product) {
    let index = basket.indexOf(basket.find(item => item.good == product));
    if (index > -1) {
        basket.splice(index, 1);
    };
    return basket;
};

function clear_basket() {
    while (basket.length > 0) {
        basket.pop();
    };
    return basket;
};

function basket_count() {
    let total_summ = 0;
    let total_amount = 0;
    for (item of basket) {
        total_summ += item.good.price * item.amount
        total_amount += item.amount;
    };
    return {
        totalAmount: total_amount,
        totalSumm: total_summ,
    };
};

clear_basket();
add_to_basket(catalog[0], 5);
add_to_basket(catalog[0], 6);
add_to_basket(catalog[2], 1);
del_from_basket(catalog[2]);
add_to_basket(catalog[3], 4);
console.log(basket_count());