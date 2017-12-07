function Sale(price) {
    this.price = price || 100;
    this.decorator_list = [];
}

Sale.prototype.getPrice = function () {
    var price = this.price,
        i,
        max = this.decorator_list.length,
        name;
    for( i = 0; i < max; i += 1) {
        name = this.decorator_list[i];
        price = Sale.decorators[name].getPrice(price);
    }
    return price;
}

Sale.decorators = {};

Sale.decorators.quebec = {
    getPrice: function (price) {
        return price + price*7.5/100;
    }
};
Sale.decorators.fedtax = {
    getPrice: function (price) {
        return price + price*5/100;
    }
};

Sale.decorators.money = {
    getPrice: function (price) {
        return '$' + price.toFixed(2);
    }
};

Sale.decorators.cdn = {
    getPrice: function (price) {
        return 'CDN$ ' + price.toFixed(2);
    }
};

Sale.prototype.decorate = function (decorator) {
    this.decorator_list.push(decorator);
};

var sale = new Sale(100);
sale.decorate('fedtax');
sale.decorate('quebec');
sale.decorate('money');
console.log(sale.getPrice());

var newSale = new Sale(100);
newSale.decorate('fedtax');
newSale.decorate('cdn');
console.log(newSale.getPrice());
