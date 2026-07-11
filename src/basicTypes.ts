/* function calculateTax(price : number, rate : number, discount?: number ) : number {
    return price + (price * rate - discount)
} */

function calculateTax(price : number, rate : number = 0.1, discount?: number ) : number {
    const actualDiscount = discount ?? 0
    return price + (price * rate ) - actualDiscount
}

console.log(calculateTax(100, 0.1, 20));
// console.log(calculateTax(100, 0.1));
