let arrayPrice = []

for (let i = 1; i <= 30; i++) {
    const producto = {
        price: Math.floor(Math.random() * 51) + 100,
        ProductId: Math.floor(Math.random() * 10) + 1,
        SmarketId: Math.floor(Math.random() * 10) + 1
    };

    arrayPrice.push(producto);
}

// console.log(arrayPrice);

let arrayProducts = []

for (let i = 1; i <= 15; i++) {
    let numeroRamdon = Math.floor(Math.random() * 8) + 1
    const producto = {
        name: `Producto ${i}`,
        brand: `Merca ${numeroRamdon}`,
        category: numeroRamdon,
        image: `imagen ${numeroRamdon}`
    };

    arrayProducts.push(producto);
}

// console.log(arrayProducts);

let arrayTienda = []

for (let i = 1; i <= 8; i++) {
    const producto = {
        name: `Tienda ${i}`,
    };

    arrayTienda.push(producto);
}

// console.log(arrayTienda);



let tiendas = [
    { name: 'Tienda 1', image: "image1" },
    { name: 'Tienda 2', image: "image2" },
    { name: 'Tienda 3', image: "image3" },
    { name: 'Tienda 4', image: "image4" },
    { name: 'Tienda 5', image: "image5" },
    { name: 'Tienda 6', image: "image6" },
    { name: 'Tienda 7', image: "image7" },
    { name: 'Tienda 8', image: "image8" }
]

let productos = [
    {
        name: 'Producto 1',
        brand: 'Merca 7',
        category: 7,
        image: 'imagen 7'
    },
    {
        name: 'Producto 2',
        brand: 'Merca 6',
        category: 6,
        image: 'imagen 6'
    },
    {
        name: 'Producto 3',
        brand: 'Merca 1',
        category: 1,
        image: 'imagen 1'
    },
    {
        name: 'Producto 4',
        brand: 'Merca 8',
        category: 8,
        image: 'imagen 8'
    },
    {
        name: 'Producto 5',
        brand: 'Merca 1',
        category: 1,
        image: 'imagen 1'
    },
    {
        name: 'Producto 6',
        brand: 'Merca 7',
        category: 7,
        image: 'imagen 7'
    },
    {
        name: 'Producto 7',
        brand: 'Merca 5',
        category: 5,
        image: 'imagen 5'
    },
    {
        name: 'Producto 8',
        brand: 'Merca 1',
        category: 1,
        image: 'imagen 1'
    },
    {
        name: 'Producto 9',
        brand: 'Merca 8',
        category: 8,
        image: 'imagen 8'
    },
    {
        name: 'Producto 10',
        brand: 'Merca 6',
        category: 6,
        image: 'imagen 6'
    },
    {
        name: 'Producto 11',
        brand: 'Merca 2',
        category: 2,
        image: 'imagen 2'
    },
    {
        name: 'Producto 12',
        brand: 'Merca 1',
        category: 1,
        image: 'imagen 1'
    },
    {
        name: 'Producto 13',
        brand: 'Merca 8',
        category: 8,
        image: 'imagen 8'
    },
    {
        name: 'Producto 14',
        brand: 'Merca 6',
        category: 6,
        image: 'imagen 6'
    },
    {
        name: 'Producto 15',
        brand: 'Merca 6',
        category: 6,
        image: 'imagen 6'
    }
]

let precios = [
    { price: 144, ProductId: 8, SmarketId: 10 },
    { price: 131, ProductId: 4, SmarketId: 9 },
    { price: 146, ProductId: 7, SmarketId: 9 },
    { price: 110, ProductId: 5, SmarketId: 8 },
    { price: 145, ProductId: 9, SmarketId: 1 },
    { price: 150, ProductId: 3, SmarketId: 7 },
    { price: 117, ProductId: 5, SmarketId: 9 },
    { price: 111, ProductId: 9, SmarketId: 10 },
    { price: 100, ProductId: 6, SmarketId: 10 },
    { price: 147, ProductId: 3, SmarketId: 2 },
    { price: 112, ProductId: 5, SmarketId: 4 },
    { price: 145, ProductId: 4, SmarketId: 2 },
    { price: 122, ProductId: 6, SmarketId: 6 },
    { price: 120, ProductId: 5, SmarketId: 9 },
    { price: 102, ProductId: 10, SmarketId: 6 },
    { price: 129, ProductId: 4, SmarketId: 2 },
    { price: 125, ProductId: 3, SmarketId: 5 },
    { price: 122, ProductId: 3, SmarketId: 4 },
    { price: 134, ProductId: 4, SmarketId: 3 },
    { price: 106, ProductId: 5, SmarketId: 5 },
    { price: 105, ProductId: 1, SmarketId: 8 },
    { price: 115, ProductId: 1, SmarketId: 10 },
    { price: 117, ProductId: 8, SmarketId: 9 },
    { price: 105, ProductId: 4, SmarketId: 10 },
    { price: 149, ProductId: 8, SmarketId: 4 },
    { price: 128, ProductId: 2, SmarketId: 8 },
    { price: 150, ProductId: 4, SmarketId: 3 },
    { price: 101, ProductId: 2, SmarketId: 10 },
    { price: 122, ProductId: 9, SmarketId: 1 },
    { price: 134, ProductId: 1, SmarketId: 8 }
]

module.exports = { arrayPrice, arrayProducts, arrayTienda, tiendas, productos, precios }