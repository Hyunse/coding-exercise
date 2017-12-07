var data = {
    first_name: 'super',
    last_name: 'man',
    age: 'unknown',
    username: 'o_O'
}

var validator = {
    types: {},
    messages: [],
    config: {},

    validate: function (data) {
        var i, msg, type, checker, result_ok;

        this.messages = [];

        for( i in data) {
            if(data.hasOwnProperty(i)) {
                type = this.config[i];
                checker = this.types[type];

                if(!type) {
                    continue;
                }

                if(!checker) {
                    msg = type + ' no checker'
                    this.messages.push(msg);
                    continue;
                }

                result_ok = checker.validate(data[i]);
                if(!result_ok) {
                    msg = i + ' is not valid';
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },

    hasErrors: function () {
        return this.messages.length !== 0;
    }
};

validator.types.isNonEmpty = {
    validate: function (value) {
        return value !== '';
    }
}
validator.types.isNumber = {
    validate: function (value) {
        return !isNaN(value);
    }
}
validator.types.isAlphaNum = {
    validate: function (value) {
        return !/[^a-z0-9]/i.test(value);
    }
}

validator.config = {
    first_name: 'isNonEmpty',
    age: 'isNumber',
    username: 'isAlphaNum'
}

validator.validate(data);
console.log(validator.hasErrors());
if(validator.hasErrors()) {
    console.log('errors');
}