let a = Number(process.argv[2]);
let b =  Number(process.argv[2]);

console.log("Sum =", a + b);
console.log("Difference =", a - b);
console.log("Product =", a * b);

if (b !== 0) {
    console.log("Quotient =", a / b);
} else {
    console.log("Division by zero is not possible");
}