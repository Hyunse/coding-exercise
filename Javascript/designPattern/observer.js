// 1. 신문사가 신문을 발행
// 2. 독자가 특정 신문사에 구독을 신청
// 3. 신문사가 영업하는 한 구독 및 해지가 발생

// 신문사
var publisher = {
    subscribers: {
        any: []
    },
    // register
    on: function(fn, type) {
        type = type || 'any';
        if( typeof this.subscribers[type] === 'undefined') {
            this.subscribers[type] = [];
        }
        this.subscribers[type].push(fn);
    },
    // remove
    remove: function(fn, type) {
        this.visitSubscribers('remove', fn, type);
    },
    // alarm
    fire: function(publication, type) {
        this.visitSubscribers('fire', publication, type)
    },
    visitSubscribers: function(action, arg, type) {
        var pubtype = type || 'any',
            subscribers = this.subscribers[pubtype],
            i,
            max = subscribers.length;
        
        for(i=0; i < max; i += 1) {
            if( action === 'fire' ) {
                subscribers[i](arg);
            } else {
                if( subscribers[i] === arg) {
                    subscribers.splice(i, 1);
                }
            }
        }
    }
};

function makePublisher(o) {
    var i;
    for( i in publisher ) {
        if(publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
            o[i] = publisher[i];
        }
    }

    o.subscribers = { any: [] };
}

var newyorkTimes = {
    daily: function() {
        this.fire('big new today');
    },
    monthly: function() {
        this.fire('monthly hot-issue', 'monthly');
    }
}

var joe = {
    drinkCoffee: function(daily) {
        console.log(daily + '를 읽었습니다.');
    },
    subdayPreNap: function(monthly) {
        console.log('월간' + monthly + ' 를 읽고있습니다.');
    }
}
makePublisher(newyorkTimes);

newyorkTimes.on(joe.drinkCoffee);
newyorkTimes.on(joe.subdayPreNap, 'monthly');

newyorkTimes.daily();
newyorkTimes.monthly();
