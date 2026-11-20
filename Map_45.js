const cache = new Map();
function calculate(num){
    if (cache.has(num)) {
        const data = cache.get(num);
        if(Date.now()< data.expiry){
            console.log("Cache Hit");
            return data.value;
        }
    }
    console.log("Cache Miss");
    let result = num*num;
    cache.set(num,{
        value:result,
        expiry:Date.now() + 5000
    });
    return result;
}
console.log(calculate(5));
console.log(calculate(5));