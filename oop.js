class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    };

    setAvailable() {
        this.available = !this.available;
    };


};

class GoosdsList {
    #goods = [];

    constructor (filter, sortPrice, sortDir) {
        this.filter = new RegExp(filter, "i");
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    };

    get list() {
        const result = this.#goods.filter(good => this.filter.test(good.name));
        if (this.sortPrice) {
            if (!this.sortDir) {
                return result.sort((item1, item2) => item2.price - item1.price);
            };
            return result.sort((item1, item2) => item1.price - item2.price);
        };
        return result;
    };

    add(good) {
        this.#goods.push(good);
    };

    remove(id) {
        const index = this.#goods.findIndex(item => item.id === id);
        if (index > -1) {
            this.#goods.splice(index, 1);
        };
    };
};

class BasketGood extends Good {
    amount = 0;
    constructor(good) {
        super(good.id, good.name, good.description, good.sizes, good.price, good.available);
    };
};

class Basket {
    goods = [];

    constructor() {
        this.goods = [];
    }

    get totalAmount() {
        return this.goods.reduce(item => item.amount * item.good.price, 0);
    };

    get totalSum() {
        return this.goods.reduce(this.goods.amount, 0);
    };

    add(good, amount) {   
        const index = this.goods.findIndex(item => item.good === good);
        if (index > -1) {
            this.goods.amount += amount;
        } else {
            const item = new BasketGood(good);
            item.amount = amount;
            this.goods.push(item);
        };
    };

    remove(good, amount) {
        const index = this.goods.findIndex(item => item.good === good);
        if (index > -1) {
            this.goods[index].amount -= amount;
            if (this.goods[index].amount <= 0) {
                this.goods.splice(index, 1);
            };
        };
    };

    clear() {
        while (this.goods.length > 0) {
            this.goods.pop();
        };
    };

    removeUnavailable() {
        this.goods = this.goods.filter(item => item.available);        
    };
};

good1 = new Good(0,"Куртка", "", [46, 48, 50, 52, 54], 100, true);
good2 = new Good(1, "Брюки", "", [18, 24], 95, true);
good3 = new Good(2, "Шапка", "", [10, 14], 30, false);
good4 = new Good(3, "Ботинки", "", [42, 44, 45], 110, true);
good5 = new Good(4, "Шарф", "", [], 15, false);

goods_list = new GoosdsList("к", true, true);
goods_list.add(good1);
goods_list.add(good2);
goods_list.add(good3);
goods_list.add(good4);
goods_list.add(good5);

basket = new Basket();

basket.add(good1, 1)

console.log(goods_list.list)

goods_list.remove(0)

console.log(goods_list.list)