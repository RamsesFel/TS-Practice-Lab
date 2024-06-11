"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mountains = [
    {
        name: "Kilimanjaro",
        height: 19341
    },
    {
        name: "Everest",
        height: 29029
    },
    {
        name: "Denali",
        height: 20310
    }
];
function findNameOfTallestMountain(mountains) {
    var highest = mountains.reduce(function (prev, current) { return (current.height > prev.height) ? current : prev; });
    return highest.name;
}
var result = findNameOfTallestMountain(mountains);
console.log(result);
var products = [
    {
        name: "coffee",
        price: 1.50
    },
    {
        name: "soda",
        price: 1
    },
    {
        name: "chips",
        price: 2
    }
];
function calcAverageProductPrice(products) {
    var average = products.reduce(function (result, item) { return (result += item.price); }, 0);
    return average / products.length;
}
var result2 = calcAverageProductPrice(products);
console.log(result2);
var inventory = [
    {
        product: {
            name: "motor",
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: "sensor",
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: "LED",
            price: 1.00
        },
        quantity: 20
    }
];
function clacInventoryValue(inventory) {
    var total = inventory.reduce(function (result, item) { return (result += item.product.price * item.quantity); }, 0);
    return total;
}
var result3 = clacInventoryValue(inventory);
console.log(result3);
