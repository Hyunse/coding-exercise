function Sale(price) {
    this.price = price || 100;
}

Sale.prototype.getPrice = function () {
    return this.price;
}

Sale.decorators = {};

Sale.decorators.quebec = {
    getPrice: function () {
        var price = this.uber.getPrice();
        price += price*7.5/100;
        return price;
    }
};
Sale.decorators.fedtax = {
    getPrice: function () {
        var price = this.uber.getPrice();
        price += price*5/100;
        return price;
    }
};

Sale.decorators.money = {
    getPrice: function () {
        return '$' + this.uber.getPrice().toFixed(2);
    }
};

Sale.decorators.cdn = {
    getPrice: function () {
        return 'CDN$ ' + this.uber.getPrice().toFixed(2);
    }
};

Sale.prototype.decorate = function (decorator) {
    var F = function () {},
        overrides = this.constructor.decorators[decorator],
        i, newObj;
    F.prototype = this;
    newObj = new F();
    newObj.uber = F.prototype;
    for (i in overrides) {
        if(overrides.hasOwnProperty(i)) {
            newObj[i] = overrides[i];
        }
    }
    return newObj;
};

var sale = new Sale(100);
sale = sale.decorate('fedtax');
sale = sale.decorate('quebec');
sale = sale.decorate('money');
console.log(sale.getPrice());

var newSale = new Sale(100);
newSale = newSale.decorate('fedtax');
newSale = newSale.decorate('cdn');
console.log(newSale.getPrice());
