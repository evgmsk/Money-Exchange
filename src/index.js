// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coins = ["H", "Q", "D", "N", "P"];
    const values = [50, 25, 10, 5, 1];
    const change = {};
    const changeFn = (curr, i = 0) => {
        const int = Math.floor(curr / values[i]);
        const rem = curr % values[i];
        if(int && curr > 0){
            change[coins[i]] = int
        }
        return rem? changeFn(rem, i + 1): true;
    };
    changeFn(currency);
    return currency <= 10000? change:
        {error: "You are rich, my friend! We don't have so much coins for exchange"}
};
