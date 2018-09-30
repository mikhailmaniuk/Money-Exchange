// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    
    let res = {};
    let coins = currency;
    const H = 50;
    const Q = 25;
    const D = 10;
    const N = 5;
    const P = 1;

    if (coins > 10000) {
        res.error = "You are rich, my friend! We don't have so much coins for exchange";
        return res;
    }
    if (coins <= 0) {
        return res;
    }
    if ( coins >= H ) {
        res.H = Math.floor(coins / H);
        coins = coins % H;
    }
    if ( coins >= Q && coins != 0) {
        res.Q = Math.floor(coins / Q);
        coins = coins % Q;
    }
    if ( coins >= D && coins != 0 ) {
        res.D = Math.floor(coins / D);
        coins = coins % D;
    }
    if ( coins >= N && coins != 0 ) {
        res.N = Math.floor(coins / N);
        coins = coins % N;
    }
    if ( coins >= P && coins != 0 ) {
        res.P = Math.floor(coins / P);
    }
    return res;
}
