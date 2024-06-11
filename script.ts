export{};

interface Mountain {
    name:string;
    height:number;
}

let mountains:Mountain[] = [
    {
    name: "Kilimanjaro",
    height:19341
    },
    {
        name: "Everest",
        height:29029
    },
    {
            name: "Denali",
            height:20310
    }
];

function findNameOfTallestMountain(mountains:Mountain[]){
    let highest:Mountain = mountains.reduce((prev,current) => (current.height > prev.height) ? current:prev);
    return highest.name;
}

let result:string = findNameOfTallestMountain(mountains);
console.log(result);


interface Product {
    name:string;
    price:number;
}

let products:Product[] = [
    {
        name:"coffee",
        price:1.50
    },
    {
        name:"soda",
        price:1
    },
    {
        name:"chips",
        price:2
    }
];

function calcAverageProductPrice(products:Product[]){
    let average:number = products.reduce((result,item) => (result += item.price), 0)
    return average / products.length;
}
let result2 = calcAverageProductPrice(products);
console.log(result2);


interface InventoryItem {
    product:Product;
    quantity:number;
}

let inventory:InventoryItem[] = [
    {
        product:{
            name:"motor",
            price:10.00
        },
        quantity:10
    },
    {
        product:{
            name:"sensor",
            price:12.50
        },
        quantity:4
    },
    {
        product:{
            name:"LED",
            price:1.00
        },
        quantity:20
    }
];

function clacInventoryValue(inventory:InventoryItem[]):number{
    let total = inventory.reduce((result, item) => (result += item.product.price *item.quantity), 0);
    return total;
}

let result3 = clacInventoryValue(inventory);
console.log(result3);