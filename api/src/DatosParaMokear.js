export let arrayPrice = []

for (let i = 1; i <= 30; i++) {
    const producto = {
        price: Math.floor(Math.random() * 51) + 100,
        productId: Math.floor(Math.random() * 10) + 1,
        superMId: Math.floor(Math.random() * 10) + 1
    };

    arrayPrice.push(producto);
}

// console.log(arrayPrice);

export let arrayProducts = []

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

export let arrayTienda = []

for (let i = 1; i <= 8; i++) {
    const producto = {
        name: `Tienda ${i}`,
    };

    arrayTienda.push(producto);
}

// console.log(arrayTienda);



export let tiendas = [
    {
        name: "dia",
        image: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/ovuozay6oxqpnmqek4u0.png"
    },
    {
        name: "coto",
        image: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/xin8w1koh0ck5vu1vrem.png"
    },
    {
        name: "carrefour",
        image: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/g8iupzjk1qrtkvr2lefo.png"
    },
    {
        name: "disco",
        image: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676677/z6w6n2scxq7pp4tqjvpm.png"
    },
    {
        name: "jumbo",
        image: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/gy5hpxliqxoknxbkytg2.png"
    },
    {
        name: "vea",
        image: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/elsssfc03lvqxk6a3p4i.png"
    },
    {
        name: "vital",
        image: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677676678/urcpur3gnbkjftcz1meh.png"
    },
    {
        name: "walmart",
        image: "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677805204/m5xpm7k7ovcmplzkwakl.webp"
    }
]

export let Allproducts = [

    {
        "name": "Leche 1l",
        "brand": "Serenisima",
        "id": 1,
        "price": [
            { name: "coto", price: 240 },
            { name: "dia", price: 255 },
            { name: "jumbo", price: 260 },
            { name: "carrefour", price: 252 },
            { name: "vital", price: 250 },
            { name: "walmart", price: 246 },
            { name: "disco", price: 255 }
        ],
        "unit": "1l",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782047/hpq22sqqyewp3fbluvon.jpg",
        "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de pl??stico resistente y f??cil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
    },
    {
        "name": "Leche baquita",
        "brand": "Dia",
        "id": 2,
        "price": [
            { name: "dia", price: 195 }
        ],
        "unit": "1l",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889117/uc9j4mem8tankytwbjwq.webp",
        "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de pl??stico resistente y f??cil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
    },
    {
        "name": "Leche prueba",
        "brand": "Coto",
        "id": 3,
        "price": [
            { name: "coto", price: 200 },
        ],
        "unit": "1l",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889022/igrtk8c7zrq99v240gsz.jpg",
        "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de pl??stico resistente y f??cil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
    },
    {
        "name": "Leche en polvo",
        "brand": "Carrefour",
        "id": 4,
        "price": [
            { name: "carrefour", price: 185 },
        ],
        "unit": "1l",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889234/adb7pgtpa8msosylj2tz.webp",
        "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de pl??stico resistente y f??cil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
    },

    {
        "name": "Yogurt griego",
        "brand": "Tregar",
        "id": 5,
        "price": [
            { name: "coto", price: 270 },
            { name: "dia", price: 280 },
            { name: "jumbo", price: 275 },
            { name: "carrefour", price: 268 },
            { name: "vital", price: 260 },
            { name: "walmart", price: 274 },
            { name: "disco", price: 290 }
        ],
        "unit": "160g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782355/jj8llhztwulzhxthu5j3.jpg",
        "description": "El yogurt en envase es una deliciosa y saludable opci??n para cualquier momento del d??a. Con su textura cremosa y su sabor suave, se presenta en un envase de pl??stico con tapa herm??tica que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
    },
    {
        "name": "Yogurt diet",
        "brand": "Tregar",
        "id": 6,
        "price": [
            { name: "coto", price: 270 },
            { name: "dia", price: 280 },
            { name: "jumbo", price: 275 },
            { name: "carrefour", price: 268 },
            { name: "vital", price: 260 },
            { name: "walmart", price: 274 },
            { name: "disco", price: 290 }
        ],
        "unit": "160g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889322/ind3uq7inxuooj2ktgdb.webp",
        "description": "El yogurt en envase es una deliciosa y saludable opci??n para cualquier momento del d??a. Con su textura cremosa y su sabor suave, se presenta en un envase de pl??stico con tapa herm??tica que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
    },
    {
        "name": "Yogurt",
        "brand": "La lacteo",
        "id": 7,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 281 },
            { name: "jumbo", price: 276.9 },
            { name: "carrefour", price: 272 },
            { name: "vital", price: 285 },
            { name: "walmart", price: 275 },
            { name: "disco", price: 280 }
        ],
        "unit": "160g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889429/bxbjepvih6hu13aezvz8.webp",
        "description": "El yogurt en envase es una deliciosa y saludable opci??n para cualquier momento del d??a. Con su textura cremosa y su sabor suave, se presenta en un envase de pl??stico con tapa herm??tica que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
    },
    {
        "name": "Yogurt",
        "brand": "La lacteo",
        "id": 8,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 281 },
            { name: "jumbo", price: 276.9 },
            { name: "carrefour", price: 272 },
            { name: "vital", price: 285 },
            { name: "walmart", price: 275 },
            { name: "disco", price: 280 }
        ],
        "unit": "160g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889481/lrxb6opwxrug2qvgw3ge.jpg",
        "description": "El yogurt en envase es una deliciosa y saludable opci??n para cualquier momento del d??a. Con su textura cremosa y su sabor suave, se presenta en un envase de pl??stico con tapa herm??tica que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
    },
    {
        "name": "Queso untable",
        "brand": "Serenisima",
        "id": 9,
        "price": [
            { name: "coto", price: 316 },
            { name: "dia", price: 300 },
            { name: "jumbo", price: 315 },
            { name: "carrefour", price: 320 },
            { name: "vital", price: 302 },
            { name: "walmart", price: 295 },
            { name: "disco", price: 310 }
        ],
        "unit": "180g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782535/hpgnnpl6aimguu8bhnzx.webp",
        "description": "El queso untable es una opci??n deliciosa y vers??til para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de pl??stico pr??ctico y f??cil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompa??amiento en platos fr??os."
    },
    {
        "name": "Queso untable",
        "brand": "Serenisima",
        "id": 10,
        "price": [
            { name: "coto", price: 316 },
            { name: "dia", price: 300 },
            { name: "jumbo", price: 315 },
            { name: "carrefour", price: 320 },
            { name: "vital", price: 302 },
            { name: "walmart", price: 295 },
            { name: "disco", price: 310 }
        ],
        "unit": "180g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889568/ocatcjslalul4mcgywoz.jpg",
        "description": "El queso untable es una opci??n deliciosa y vers??til para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de pl??stico pr??ctico y f??cil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompa??amiento en platos fr??os."
    },
    {
        "name": "Huevo",
        "brand": "San Juan",
        "id": 11,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 190 },
            { name: "walmart", price: 221 },
            { name: "disco", price: 210 }
        ],
        "unit": "6u",
        "category": "Huevos y Derivados",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782691/aqupactsshcrgltgl6jf.webp",
        "description": "El huevo es un alimento nutritivo y vers??til, con un sinf??n de posibilidades en la cocina. Presentado en una c??scara resistente, contiene una yema y una clara con un alto valor proteico. Puede ser cocido de diversas maneras, desde revuelto hasta en forma de omelette, y es un ingrediente esencial en muchas recetas."
    },
    {
        "name": "Manteca",
        "brand": "Serenisima",
        "id": 12,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "200g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782836/ysobrdyzarw38eicrg9p.webp",
        "description": "La manteca es un producto l??cteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de pl??stico f??cil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
    },
    {
        "name": "Manteca",
        "brand": "La paulina",
        "id": 13,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "200g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889650/miritpmj3z8y7vvmgm8y.webp",
        "description": "La manteca es un producto l??cteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de pl??stico f??cil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
    },
    {
        "name": "Manteca",
        "brand": "Sancor",
        "id": 14,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "200g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889720/useiyeveilr3hhlrx27l.webp",
        "description": "La manteca es un producto l??cteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de pl??stico f??cil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
    },
    {
        "name": "Manteca",
        "brand": "Tonadita",
        "id": 15,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "200g",
        "category": "L??cteos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889845/c63e5zqp5jimy7ivq9jy.webp",
        "description": "La manteca es un producto l??cteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de pl??stico f??cil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
    },

    {
        "name": "Aceite de oliva",
        "brand": "Coppini",
        "id": 16,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "500ml",
        "category": "Aceites",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783272/wpxhzvlfx8godsmerz5b.jpg",
        "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de pl??stico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma ??nicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
    },
    {
        "name": "Aceite de oliva",
        "brand": "La tranquilina",
        "id": 17,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "500ml",
        "category": "Aceites",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889904/okywvimqz7yuwrxb06zy.jpg",
        "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de pl??stico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma ??nicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
    },
    {
        "name": "Aceite de oliva",
        "brand": "Lira",
        "id": 18,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "500ml",
        "category": "Aceites",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889963/kfbesyauwwj3lxowzq25.webp",
        "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de pl??stico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma ??nicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
    },
    {
        "name": "Aceite de oliva",
        "brand": "Morixe",
        "id": 19,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "500ml",
        "category": "Aceites",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677889994/x2posl6fdrakpagq2sjo.webp",
        "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de pl??stico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma ??nicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
    },
    {
        "name": "Aceite vegetal",
        "brand": "Natura",
        "id": 20,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "900ml",
        "category": "Aceites",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783457/tl8jxrq5chbffxcj6kn0.jpg",
        "description": "El aceite vegetal es un ingrediente vers??til y econ??mico en la cocina. Presentado en una botella de pl??stico resistente, es perfecto para fre??r, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
    },
    {
        "name": "Aceite vegetal",
        "brand": "Deleite",
        "id": 21,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "900ml",
        "category": "Aceites",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890056/kfqx8b3lidwasxsfz2vy.webp",
        "description": "El aceite vegetal es un ingrediente vers??til y econ??mico en la cocina. Presentado en una botella de pl??stico resistente, es perfecto para fre??r, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
    },
    {
        "name": "Aceite vegetal",
        "brand": "Primor",
        "id": 22,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "900ml",
        "category": "Aceites",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890088/ls49ctoyrfvfy9fe3bh2.jpg",
        "description": "El aceite vegetal es un ingrediente vers??til y econ??mico en la cocina. Presentado en una botella de pl??stico resistente, es perfecto para fre??r, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
    },
    {
        "name": "Azucar",
        "brand": "Ledesma",
        "id": 23,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "1kg",
        "category": "Endulzantes",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783552/otzv3ugxajvumgqiwokk.webp",
        "description": "El az??car es un ingrediente b??sico en la reposter??a y en la cocina en general. Presentado en una bolsa o en un envase de cart??n resistente, su textura fina y granulada permite una f??cil disoluci??n en l??quidos y la creaci??n de postres deliciosos. Esencial en la preparaci??n de bebidas, postres y en la elaboraci??n de algunas salsas."
    },

    {
        "name": "Azucar",
        "brand": "Chango",
        "id": 24,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "1kg",
        "category": "Endulzantes",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890198/kvq4nhgsa7smsso7eoib.jpg",
        "description": "El az??car es un ingrediente b??sico en la reposter??a y en la cocina en general. Presentado en una bolsa o en un envase de cart??n resistente, su textura fina y granulada permite una f??cil disoluci??n en l??quidos y la creaci??n de postres deliciosos. Esencial en la preparaci??n de bebidas, postres y en la elaboraci??n de algunas salsas."
    },
    {
        "name": "Azucar",
        "brand": "Carrefour",
        "id": 25,
        "price": [{
            name: "carrefour", price: 220
        }],
        "unit": "1kg",
        "category": "Endulzantes",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890228/seazluxalg9hb6oavvrk.webp",
        "description": "El az??car es un ingrediente b??sico en la reposter??a y en la cocina en general. Presentado en una bolsa o en un envase de cart??n resistente, su textura fina y granulada permite una f??cil disoluci??n en l??quidos y la creaci??n de postres deliciosos. Esencial en la preparaci??n de bebidas, postres y en la elaboraci??n de algunas salsas."
    },
    {
        "name": "Azucar",
        "brand": "Dominio",
        "id": 26,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "1kg",
        "category": "Endulzantes",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677890269/rpit0qdx0b19zyl2yt57.jpg",
        "description": "El az??car es un ingrediente b??sico en la reposter??a y en la cocina en general. Presentado en una bolsa o en un envase de cart??n resistente, su textura fina y granulada permite una f??cil disoluci??n en l??quidos y la creaci??n de postres deliciosos. Esencial en la preparaci??n de bebidas, postres y en la elaboraci??n de algunas salsas."
    },
    {
        "name": "Miel",
        "brand": "Aleluya",
        "id": 27,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "500g",
        "category": "Endulzantes",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783691/svsfhmltruz3f7cbvzlt.jpg",
        "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del n??ctar de las flores. Presentada en un envase de vidrio o de pl??stico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Adem??s, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
    },
    {
        "name": "Miel",
        "brand": "Alemany",
        "id": 28,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "500g",
        "category": "Endulzantes",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893652/aducouvse6qgobaqhqxe.jpg",
        "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del n??ctar de las flores. Presentada en un envase de vidrio o de pl??stico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Adem??s, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
    },
    {
        "name": "Miel",
        "brand": "Nectar de los dioses",
        "id": 29,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "500g",
        "category": "Endulzantes",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893699/xuvbhm2vwhu8pmmfm6xh.jpg",
        "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del n??ctar de las flores. Presentada en un envase de vidrio o de pl??stico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Adem??s, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
    },
    {
        "name": "Miel",
        "brand": "Romero",
        "id": 30,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "500g",
        "category": "Endulzantes",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893759/ccebaoknyjnmkifqlctq.jpg",
        "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del n??ctar de las flores. Presentada en un envase de vidrio o de pl??stico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Adem??s, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
    },
    {
        "name": "Cafe",
        "brand": "Nescafe",
        "id": 31,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "170g",
        "category": "Caf?? y T??",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783759/n6jxzahuwqco2hklunob.webp",
        "description": "El caf?? en polvo es un producto indispensable para los amantes del caf??. Presentado en una bolsa o en un envase de vidrio o pl??stico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de caf??. Ideal para disfrutar en cualquier momento del d??a, solo o con leche."
    },
    {
        "name": "Cafe",
        "brand": "Arlistan",
        "id": 32,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "170g",
        "category": "Caf?? y T??",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893858/mirjhcj0pnedke3ptlqs.webp",
        "description": "El caf?? en polvo es un producto indispensable para los amantes del caf??. Presentado en una bolsa o en un envase de vidrio o pl??stico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de caf??. Ideal para disfrutar en cualquier momento del d??a, solo o con leche."
    },
    {
        "name": "Cafe",
        "brand": "La virginia",
        "id": 33,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "170g",
        "category": "Caf?? y T??",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893892/k5cixfwkhxsvbbnvzomk.webp",
        "description": "El caf?? en polvo es un producto indispensable para los amantes del caf??. Presentado en una bolsa o en un envase de vidrio o pl??stico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de caf??. Ideal para disfrutar en cualquier momento del d??a, solo o con leche."
    },
    {
        "name": "Te",
        "brand": "La virginia",
        "id": 34,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "200g",
        "category": "Caf?? y T??",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893952/msylq0jkpkhzxuxdtkwl.png",
        "description": "El t?? es una bebida arom??tica y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cart??n o en latas. Ideal para disfrutar en cualquier momento del d??a, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajaci??n."
    },
    {
        "name": "Te",
        "brand": "Gree hills",
        "id": 35,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "200g",
        "category": "Caf?? y T??",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
        "description": "El t?? es una bebida arom??tica y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cart??n o en latas. Ideal para disfrutar en cualquier momento del d??a, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajaci??n."
    },
    {
        "name": "Te",
        "brand": "Lipton",
        "id": 36,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "200g",
        "category": "Caf?? y T??",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677893993/xkdcoedousqp9onj9rgc.jpg",
        "description": "El t?? es una bebida arom??tica y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cart??n o en latas. Ideal para disfrutar en cualquier momento del d??a, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajaci??n."
    },
    {
        "name": "Fideos instantaneos",
        "brand": "Maruchan",
        "id": 37,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "64g",
        "category": "Sopas y Caldos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784037/frifxvygwtubdldu4vuo.webp",
        "description": "Los fideos instant??neos son un producto pr??ctico y r??pido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
    },
    {
        "name": "Fideos instantaneos",
        "brand": "Mr noodles",
        "id": 38,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "64g",
        "category": "Sopas y Caldos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894063/qrtyngvtghvutdivlv1l.jpg",
        "description": "Los fideos instant??neos son un producto pr??ctico y r??pido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
    },
    {
        "name": "Fideos instantaneos",
        "brand": "Nissin",
        "id": 39,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "64g",
        "category": "Sopas y Caldos",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894101/yxot1stt1dhxlngufxxs.webp",
        "description": "Los fideos instant??neos son un producto pr??ctico y r??pido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
    },
    {
        "name": "Porotos",
        "brand": "Arcor",
        "id": 40,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "300g",
        "category": "Legumbres",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
        "description": "Los porotos son una fuente rica de prote??nas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de pl??stico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento vers??til y nutritivo."
    },
    {
        "name": "Porotos",
        "brand": "La campagnola",
        "id": 41,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "300g",
        "category": "Legumbres",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894227/fbsisvvqqdu2rkjcvgjj.webp",
        "description": "Los porotos son una fuente rica de prote??nas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de pl??stico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento vers??til y nutritivo."
    },
    {
        "name": "Porotos",
        "brand": "Ciudad del lago",
        "id": 42,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "300g",
        "category": "Legumbres",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894276/eimudcmm65rimvv5gvvj.jpg",
        "description": "Los porotos son una fuente rica de prote??nas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de pl??stico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento vers??til y nutritivo."
    },
    {
        "name": "Garbanzos",
        "brand": "Arcor",
        "id": 43,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "300g",
        "category": "Legumbres",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784445/rl5w7eosyqsbn71f7rfk.jpg",
        "description": "Los garbanzos son una legumbre vers??til y nutritiva, rica en prote??nas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de pl??stico, son un ingrediente esencial en la cocina mediterr??nea y en la preparaci??n de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Adem??s, son econ??micos y f??ciles de almacenar."
    }, {
        "name": "Garbanzos",
        "brand": "La campagnola",
        "id": 44,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "300g",
        "category": "Legumbres",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894304/ygjocsonjwbdanfvek3s.jpg",
        "description": "Los garbanzos son una legumbre vers??til y nutritiva, rica en prote??nas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de pl??stico, son un ingrediente esencial en la cocina mediterr??nea y en la preparaci??n de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Adem??s, son econ??micos y f??ciles de almacenar."
    }, {
        "name": "Garbanzos",
        "brand": "Ciudad del lago",
        "id": 45,
        "price": [
            { name: "coto", price: 196 },
            { name: "dia", price: 200 },
            { name: "jumbo", price: 215 },
            { name: "carrefour", price: 220 },
            { name: "vital", price: 142 },
            { name: "walmart", price: 421 },
            { name: "disco", price: 110 }
        ],
        "unit": "300g",
        "category": "Legumbres",
        "supermarket": "General",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677894361/dqxdwrfbyt9vfeneldvj.jpg",
        "description": "Los garbanzos son una legumbre vers??til y nutritiva, rica en prote??nas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de pl??stico, son un ingrediente esencial en la cocina mediterr??nea y en la preparaci??n de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Adem??s, son econ??micos y f??ciles de almacenar."
    }
]

export let productos = Allproducts.map((ele, indice) => {
    let { name, brand, category, image } = ele;
    name = name + `${indice + 1}`
    let atributosFiltrados = { name, brand, category, image };
    return atributosFiltrados;
})

export let preciosPorMercadoNoEspeciales = [
    { price: 144, productId: 8, superMId: 10 },
    { price: 131, productId: 4, superMId: 9 },
    { price: 146, productId: 7, superMId: 9 },
    { price: 110, productId: 5, superMId: 8 },
    { price: 145, productId: 9, superMId: 1 },
    { price: 150, productId: 3, superMId: 7 },
    { price: 117, productId: 5, superMId: 9 },
    { price: 111, productId: 9, superMId: 10 },
    { price: 100, productId: 6, superMId: 10 },
    { price: 147, productId: 3, superMId: 2 },
    { price: 112, productId: 5, superMId: 4 },
    { price: 145, productId: 4, superMId: 2 },
    { price: 122, productId: 6, superMId: 6 },
    { price: 120, productId: 5, superMId: 9 },
    { price: 102, productId: 10, superMId: 6 },
    { price: 129, productId: 4, superMId: 2 },
    { price: 125, productId: 3, superMId: 5 },
    { price: 122, productId: 3, superMId: 4 },
    { price: 134, productId: 4, superMId: 3 },
    { price: 106, productId: 5, superMId: 5 },
    { price: 105, productId: 1, superMId: 8 },
    { price: 115, productId: 1, superMId: 10 },
    { price: 117, productId: 8, superMId: 9 },
    { price: 105, productId: 4, superMId: 10 },
    { price: 149, productId: 8, superMId: 4 },
    { price: 128, productId: 2, superMId: 8 },
    { price: 150, productId: 4, superMId: 3 },
    { price: 101, productId: 2, superMId: 10 },
    { price: 122, productId: 9, superMId: 1 },
    { price: 134, productId: 1, superMId: 8 },
    { price: 155, productId: 8, superMId: 7 }
]

function precios2() {
    let mercadosEnOrden = ["dia", "coto", "carrefour", "disco", "jumbo", "vea", "vital", "walmart"];
    let precios1 = [];
    let minimo = 0
    for (let i = 0; i < productos.length; i++) {
        minimo = minimo + 100
        for (let j = 0; j < mercadosEnOrden.length; j++) {
            let precioRamdom = Math.floor(Math.random() * 21) + minimo;
            let precio = {
                productId: i + 1,
                superMId: j + 1,
                price: precioRamdom
            }
            precios1.push(precio);
        }
    }
    return precios1
}
export let precios = precios2()