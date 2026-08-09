function calculateVat(price) {
    let vat = price * 0.07;
    let total = price + vat;
    return total;
}

function calculateVat_10Per(price) {
    let vat = price * 0.1;
    let total = price + vat;
    return total;
}


let productPrice = 500;
let netTotal = calculateVat(productPrice);

console.log("Price: " + productPrice + " บาท");
console.log("Total with VAT 7%: " + netTotal + " บาท");