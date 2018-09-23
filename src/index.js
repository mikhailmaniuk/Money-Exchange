// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    var res = {};
    var coins = currency;
    var H = 50;
    var Q = 25;
    var D = 10;
    var N = 5;
    var P = 1;
    if (coins > 10000) {
        res.error = "You are rich, my friend! We don't have so much coins for exchange";
        return res;
    }
    if (coins <= 0) {
        return res;
    }
    while(coins > 0 && coins < 10001) {
        if ( coins >= 50 ) {
            res.H = Math.floor(coins / H);
            coins = coins % H;
        }
        if ( coins >= 25 && coins != 0) {
            res.Q = Math.floor(coins / Q);
            coins = coins % Q;
        }
        if ( coins >= 10 && coins != 0 ) {
            res.D = Math.floor(coins / D);
            coins = coins % D;
        }
        if ( coins >= 5 && coins != 0 ) {
            res.N = Math.floor(coins / N);
            coins = coins % N;
        }
        if ( coins >= 1 && coins != 0 ) {
            res.P = Math.floor(coins / P);
        }
        return res;
    }
}
