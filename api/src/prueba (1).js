let products = [

    {
        "name": "Leche",
        "brand": "Serenisima",
        "price": 400,
        "unit": "1l",
        "category": "Lácteos",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782047/hpq22sqqyewp3fbluvon.jpg",
        "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
    },

    {
        "name": "Yogurt",
        "brand": "Tregar",
        "price": 510,
        "unit": "160g",
        "category": "Lácteos",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782355/jj8llhztwulzhxthu5j3.jpg",
        "description": "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
    },
    {
        "name": "Queso untable",
        "brand": "Serenisima",
        "price": 520,
        "unit": "180g",
        "category": "Lácteos",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782535/hpgnnpl6aimguu8bhnzx.webp",
        "description": "El queso untable es una opción deliciosa y versátil para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de plástico práctico y fácil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompañamiento en platos fríos."
    },
    {
        "name": "Huevo",
        "brand": "San Juan",
        "price": 615,
        "unit": "6u",
        "category": "Huevos y Derivados",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782691/aqupactsshcrgltgl6jf.webp",
        "description": "El huevo es un alimento nutritivo y versátil, con un sinfín de posibilidades en la cocina. Presentado en una cáscara resistente, contiene una yema y una clara con un alto valor proteico. Puede ser cocido de diversas maneras, desde revuelto hasta en forma de omelette, y es un ingrediente esencial en muchas recetas."
    },
    {
        "name": "Manteca",
        "brand": "Serenisima",
        "price": 320,
        "unit": "paquete",
        "category": "Lácteos",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782836/ysobrdyzarw38eicrg9p.webp",
        "description": "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
    },
    {
        "name": "Aceite de oliva",
        "brand": "coppini",
        "price": 800,
        "unit": "500ml",
        "category": "Aceites",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783272/wpxhzvlfx8godsmerz5b.jpg",
        "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
    },
    {
        "name": "Aceite vegetal",
        "brand": "Primor",
        "price": 1200,
        "unit": "900ml",
        "category": "Aceites",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783457/tl8jxrq5chbffxcj6kn0.jpg",
        "description": "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
    },
    {
        "name": "Azucar",
        "brand": "ledesma",
        "price": 231,
        "unit": "1kg",
        "category": "Endulzantes",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783552/otzv3ugxajvumgqiwokk.webp",
        "description": "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas."
    },
    {
        "name": "Miel",
        "brand": "Aleluya",
        "price": 695,
        "unit": "500g",
        "category": "Endulzantes",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783691/svsfhmltruz3f7cbvzlt.jpg",
        "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
    },
    {
        "name": "Cafe",
        "brand": "Nescafe",
        "price": 1600,
        "unit": "170g",
        "category": "Café y Té",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783759/n6jxzahuwqco2hklunob.webp",
        "description": "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche."
    },
    {
        "name": "Te",
        "brand": "Gree hills",
        "price": 550,
        "unit": "200g",
        "category": "Café y Té",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
        "description": "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación."
    },
    {
        "name": "Fideos instantaneos",
        "brand": "Maruchan",
        "price": 320,
        "unit": "64g",
        "category": "Sopas y Caldos",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784037/frifxvygwtubdldu4vuo.webp",
        "description": "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
    },
    {
        "name": "Consome de pollo",
        "brand": "Knorr",
        "price": 150,
        "unit": "370g",
        "category": "Sopas y Caldos",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784186/jsf4bd4taxefrezvmubu.jpg",
        "description": "El caldo de pollo es un ingrediente esencial en la cocina, utilizado en numerosas recetas y platos. Presentado en envases de vidrio o de tetra brik, es rico en sabor y aroma, gracias a la cocción lenta de pollo, vegetales y especias. Ideal para dar sabor a sopas, guisos y arroces, así como para rehidratar fideos y legumbres."
    },
    {
        "name": "Porotos",
        "brand": "Arcor",
        "price": 200,
        "unit": "300g",
        "category": "Legumbres",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
        "description": "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo."
    },
    {
        "name": "Garbanzos",
        "brand": "Arcor",
        "price": 215,
        "unit": "300g",
        "category": "Legumbres",
        "supermarket": "Coto",
        "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784445/rl5w7eosyqsbn71f7rfk.jpg",
        "description": "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar."
    },

            {
                "name": "Leche",
                "brand": "Serenisima",
                "price": 420,
                "unit": "1l",
                "category": "Lácteos",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782047/hpq22sqqyewp3fbluvon.jpg",
                "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
            },
        
            {
                "name": "Yogurt",
                "brand": "Tregar",
                "price": 500,
                "unit": "160g",
                "category": "Lácteos",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782355/jj8llhztwulzhxthu5j3.jpg",
                "description": "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
            },
            {
                "name": "Queso untable",
                "brand": "Serenisima",
                "price": 510,
                "unit": "180g",
                "category": "Lácteos",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782535/hpgnnpl6aimguu8bhnzx.webp",
                "description": "El queso untable es una opción deliciosa y versátil para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de plástico práctico y fácil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompañamiento en platos fríos."
            },
            {
                "name": "Huevo",
                "brand": "San Juan",
                "price": 615,
                "unit": "6u",
                "category": "Huevos y Derivados",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782691/aqupactsshcrgltgl6jf.webp",
                "description": "El huevo es un alimento nutritivo y versátil, con un sinfín de posibilidades en la cocina. Presentado en una cáscara resistente, contiene una yema y una clara con un alto valor proteico. Puede ser cocido de diversas maneras, desde revuelto hasta en forma de omelette, y es un ingrediente esencial en muchas recetas."
            },
            {
                "name": "Manteca",
                "brand": "Serenisima",
                "price": 320,
                "unit": "paquete",
                "category": "Lácteos",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782836/ysobrdyzarw38eicrg9p.webp",
                "description": "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
            },
            {
                "name": "Aceite de oliva",
                "brand": "coppini",
                "price": 810,
                "unit": "500ml",
                "category": "Aceites",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783272/wpxhzvlfx8godsmerz5b.jpg",
                "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
            },
            {
                "name": "Aceite vegetal",
                "brand": "Primor",
                "price": 1190,
                "unit": "900ml",
                "category": "Aceites",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783457/tl8jxrq5chbffxcj6kn0.jpg",
                "description": "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
            },
            {
                "name": "Azucar",
                "brand": "ledesma",
                "price": 230,
                "unit": "1kg",
                "category": "Endulzantes",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783552/otzv3ugxajvumgqiwokk.webp",
                "description": "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas."
            },
            {
                "name": "Miel",
                "brand": "Aleluya",
                "price": 710,
                "unit": "500g",
                "category": "Endulzantes",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783691/svsfhmltruz3f7cbvzlt.jpg",
                "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
            },
            {
                "name": "Cafe",
                "brand": "Nescafe",
                "price": 1550,
                "unit": "170g",
                "category": "Café y Té",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783759/n6jxzahuwqco2hklunob.webp",
                "description": "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche."
            },
            {
                "name": "Te",
                "brand": "Gree hills",
                "price": 530,
                "unit": "200g",
                "category": "Café y Té",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
                "description": "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación."
            },
            {
                "name": "Fideos instantaneos",
                "brand": "Maruchan",
                "price": 325,
                "unit": "64g",
                "category": "Sopas y Caldos",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784037/frifxvygwtubdldu4vuo.webp",
                "description": "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
            },
            {
                "name": "Consome de pollo",
                "brand": "Knorr",
                "price": 150,
                "unit": "370g",
                "category": "Sopas y Caldos",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784186/jsf4bd4taxefrezvmubu.jpg",
                "description": "El caldo de pollo es un ingrediente esencial en la cocina, utilizado en numerosas recetas y platos. Presentado en envases de vidrio o de tetra brik, es rico en sabor y aroma, gracias a la cocción lenta de pollo, vegetales y especias. Ideal para dar sabor a sopas, guisos y arroces, así como para rehidratar fideos y legumbres."
            },
            {
                "name": "Porotos",
                "brand": "Arcor",
                "price": 190,
                "unit": "300g",
                "category": "Legumbres",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
                "description": "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo."
            },
            {
                "name": "Garbanzos",
                "brand": "Arcor",
                "price": 216,
                "unit": "300g",
                "category": "Legumbres",
                "supermarket": "Dia",
                "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784445/rl5w7eosyqsbn71f7rfk.jpg",
                "description": "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar."
            },
    
        {
            "name": "Leche",
            "brand": "Serenisima",
            "price": 410,
            "unit": "1l",
            "category": "Lácteos",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782047/hpq22sqqyewp3fbluvon.jpg",
            "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
        },
    
        {
            "name": "Yogurt",
            "brand": "Tregar",
            "price": 490,
            "unit": "160g",
            "category": "Lácteos",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782355/jj8llhztwulzhxthu5j3.jpg",
            "description": "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
        },
        {
            "name": "Queso untable",
            "brand": "Serenisima",
            "price": 520,
            "unit": "180g",
            "category": "Lácteos",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782535/hpgnnpl6aimguu8bhnzx.webp",
            "description": "El queso untable es una opción deliciosa y versátil para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de plástico práctico y fácil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompañamiento en platos fríos."
        },
        {
            "name": "Huevo",
            "brand": "San Juan",
            "price": 610,
            "unit": "6u",
            "category": "Huevos y Derivados",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782691/aqupactsshcrgltgl6jf.webp",
            "description": "El huevo es un alimento nutritivo y versátil, con un sinfín de posibilidades en la cocina. Presentado en una cáscara resistente, contiene una yema y una clara con un alto valor proteico. Puede ser cocido de diversas maneras, desde revuelto hasta en forma de omelette, y es un ingrediente esencial en muchas recetas."
        },
        {
            "name": "Manteca",
            "brand": "Serenisima",
            "price": 310,
            "unit": "paquete",
            "category": "Lácteos",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782836/ysobrdyzarw38eicrg9p.webp",
            "description": "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
        },
        {
            "name": "Aceite de oliva",
            "brand": "coppini",
            "price": 815,
            "unit": "500ml",
            "category": "Aceites",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783272/wpxhzvlfx8godsmerz5b.jpg",
            "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
        },
        {
            "name": "Aceite vegetal",
            "brand": "Primor",
            "price": 1220,
            "unit": "900ml",
            "category": "Aceites",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783457/tl8jxrq5chbffxcj6kn0.jpg",
            "description": "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
        },
        {
            "name": "Azucar",
            "brand": "ledesma",
            "price": 230,
            "unit": "1kg",
            "category": "Endulzantes",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783552/otzv3ugxajvumgqiwokk.webp",
            "description": "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas."
        },
        {
            "name": "Miel",
            "brand": "Aleluya",
            "price": 705,
            "unit": "500g",
            "category": "Endulzantes",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783691/svsfhmltruz3f7cbvzlt.jpg",
            "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
        },
        {
            "name": "Cafe",
            "brand": "Nescafe",
            "price": 1550,
            "unit": "170g",
            "category": "Café y Té",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783759/n6jxzahuwqco2hklunob.webp",
            "description": "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche."
        },
        {
            "name": "Te",
            "brand": "Gree hills",
            "price": 540,
            "unit": "200g",
            "category": "Café y Té",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
            "description": "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación."
        },
        {
            "name": "Fideos instantaneos",
            "brand": "Maruchan",
            "price": 320,
            "unit": "64g",
            "category": "Sopas y Caldos",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784037/frifxvygwtubdldu4vuo.webp",
            "description": "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
        },
        {
            "name": "Consome de pollo",
            "brand": "Knorr",
            "price": 150,
            "unit": "370g",
            "category": "Sopas y Caldos",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784186/jsf4bd4taxefrezvmubu.jpg",
            "description": "El caldo de pollo es un ingrediente esencial en la cocina, utilizado en numerosas recetas y platos. Presentado en envases de vidrio o de tetra brik, es rico en sabor y aroma, gracias a la cocción lenta de pollo, vegetales y especias. Ideal para dar sabor a sopas, guisos y arroces, así como para rehidratar fideos y legumbres."
        },
        {
            "name": "Porotos",
            "brand": "Arcor",
            "price": 196,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
            "description": "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo."
        },
        {
            "name": "Garbanzos",
            "brand": "Arcor",
            "price": 220,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Carrefour",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784445/rl5w7eosyqsbn71f7rfk.jpg",
            "description": "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar."
        },
            
    
        {
            "name": "Leche",
            "brand": "Serenisima",
            "price": 400,
            "unit": "1l",
            "category": "Lácteos",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782047/hpq22sqqyewp3fbluvon.jpg",
            "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
        },
    
        {
            "name": "Yogurt",
            "brand": "Tregar",
            "price": 500,
            "unit": "160g",
            "category": "Lácteos",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782355/jj8llhztwulzhxthu5j3.jpg",
            "description": "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
        },
        {
            "name": "Queso untable",
            "brand": "Serenisima",
            "price": 510,
            "unit": "180g",
            "category": "Lácteos",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782535/hpgnnpl6aimguu8bhnzx.webp",
            "description": "El queso untable es una opción deliciosa y versátil para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de plástico práctico y fácil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompañamiento en platos fríos."
        },
        {
            "name": "Huevo",
            "brand": "San Juan",
            "price": 605,
            "unit": "6u",
            "category": "Huevos y Derivados",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782691/aqupactsshcrgltgl6jf.webp",
            "description": "El huevo es un alimento nutritivo y versátil, con un sinfín de posibilidades en la cocina. Presentado en una cáscara resistente, contiene una yema y una clara con un alto valor proteico. Puede ser cocido de diversas maneras, desde revuelto hasta en forma de omelette, y es un ingrediente esencial en muchas recetas."
        },
        {
            "name": "Manteca",
            "brand": "Serenisima",
            "price": 315,
            "unit": "paquete",
            "category": "Lácteos",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782836/ysobrdyzarw38eicrg9p.webp",
            "description": "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
        },
        {
            "name": "Aceite de oliva",
            "brand": "coppini",
            "price": 800,
            "unit": "500ml",
            "category": "Aceites",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783272/wpxhzvlfx8godsmerz5b.jpg",
            "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
        },
        {
            "name": "Aceite vegetal",
            "brand": "Primor",
            "price": 1200,
            "unit": "900ml",
            "category": "Aceites",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783457/tl8jxrq5chbffxcj6kn0.jpg",
            "description": "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
        },
        {
            "name": "Azucar",
            "brand": "ledesma",
            "price": 225,
            "unit": "1kg",
            "category": "Endulzantes",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783552/otzv3ugxajvumgqiwokk.webp",
            "description": "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas."
        },
        {
            "name": "Miel",
            "brand": "Aleluya",
            "price": 702,
            "unit": "500g",
            "category": "Endulzantes",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783691/svsfhmltruz3f7cbvzlt.jpg",
            "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
        },
        {
            "name": "Cafe",
            "brand": "Nescafe",
            "price": 1500,
            "unit": "170g",
            "category": "Café y Té",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783759/n6jxzahuwqco2hklunob.webp",
            "description": "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche."
        },
        {
            "name": "Te",
            "brand": "Gree hills",
            "price": 520,
            "unit": "200g",
            "category": "Café y Té",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
            "description": "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación."
        },
        {
            "name": "Fideos instantaneos",
            "brand": "Maruchan",
            "price": 320,
            "unit": "64g",
            "category": "Sopas y Caldos",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784037/frifxvygwtubdldu4vuo.webp",
            "description": "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
        },
        {
            "name": "Consome de pollo",
            "brand": "Knorr",
            "price": 160,
            "unit": "370g",
            "category": "Sopas y Caldos",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784186/jsf4bd4taxefrezvmubu.jpg",
            "description": "El caldo de pollo es un ingrediente esencial en la cocina, utilizado en numerosas recetas y platos. Presentado en envases de vidrio o de tetra brik, es rico en sabor y aroma, gracias a la cocción lenta de pollo, vegetales y especias. Ideal para dar sabor a sopas, guisos y arroces, así como para rehidratar fideos y legumbres."
        },
        {
            "name": "Porotos",
            "brand": "Arcor",
            "price": 200,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
            "description": "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo."
        },
        {
            "name": "Garbanzos",
            "brand": "Arcor",
            "price": 220,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Vital",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784445/rl5w7eosyqsbn71f7rfk.jpg",
            "description": "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar."
        },
           
        {
            "name": "Leche",
            "brand": "Serenisima",
            "price": 405,
            "unit": "1l",
            "category": "Lácteos",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782047/hpq22sqqyewp3fbluvon.jpg",
            "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
        },
    
        {
            "name": "Yogurt",
            "brand": "Tregar",
            "price": 520,
            "unit": "160g",
            "category": "Lácteos",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782355/jj8llhztwulzhxthu5j3.jpg",
            "description": "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
        },
        {
            "name": "Queso untable",
            "brand": "Serenisima",
            "price": 515,
            "unit": "180g",
            "category": "Lácteos",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782535/hpgnnpl6aimguu8bhnzx.webp",
            "description": "El queso untable es una opción deliciosa y versátil para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de plástico práctico y fácil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompañamiento en platos fríos."
        },
        {
            "name": "Huevo",
            "brand": "San Juan",
            "price": 595,
            "unit": "6u",
            "category": "Huevos y Derivados",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782691/aqupactsshcrgltgl6jf.webp",
            "description": "El huevo es un alimento nutritivo y versátil, con un sinfín de posibilidades en la cocina. Presentado en una cáscara resistente, contiene una yema y una clara con un alto valor proteico. Puede ser cocido de diversas maneras, desde revuelto hasta en forma de omelette, y es un ingrediente esencial en muchas recetas."
        },
        {
            "name": "Manteca",
            "brand": "Serenisima",
            "price": 315,
            "unit": "paquete",
            "category": "Lácteos",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782836/ysobrdyzarw38eicrg9p.webp",
            "description": "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
        },
        {
            "name": "Aceite de oliva",
            "brand": "coppini",
            "price": 800,
            "unit": "500ml",
            "category": "Aceites",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783272/wpxhzvlfx8godsmerz5b.jpg",
            "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
        },
        {
            "name": "Aceite vegetal",
            "brand": "Primor",
            "price": 1200,
            "unit": "900ml",
            "category": "Aceites",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783457/tl8jxrq5chbffxcj6kn0.jpg",
            "description": "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
        },
        {
            "name": "Azucar",
            "brand": "ledesma",
            "price": 235,
            "unit": "1kg",
            "category": "Endulzantes",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783552/otzv3ugxajvumgqiwokk.webp",
            "description": "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas."
        },
        {
            "name": "Miel",
            "brand": "Aleluya",
            "price": 702,
            "unit": "500g",
            "category": "Endulzantes",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783691/svsfhmltruz3f7cbvzlt.jpg",
            "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
        },
        {
            "name": "Cafe",
            "brand": "Nescafe",
            "price": 1550,
            "unit": "170g",
            "category": "Café y Té",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783759/n6jxzahuwqco2hklunob.webp",
            "description": "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche."
        },
        {
            "name": "Te",
            "brand": "Gree hills",
            "price": 530,
            "unit": "200g",
            "category": "Café y Té",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
            "description": "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación."
        },
        {
            "name": "Fideos instantaneos",
            "brand": "Maruchan",
            "price": 310,
            "unit": "64g",
            "category": "Sopas y Caldos",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784037/frifxvygwtubdldu4vuo.webp",
            "description": "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
        },
        {
            "name": "Consome de pollo",
            "brand": "Knorr",
            "price": 150,
            "unit": "370g",
            "category": "Sopas y Caldos",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784186/jsf4bd4taxefrezvmubu.jpg",
            "description": "El caldo de pollo es un ingrediente esencial en la cocina, utilizado en numerosas recetas y platos. Presentado en envases de vidrio o de tetra brik, es rico en sabor y aroma, gracias a la cocción lenta de pollo, vegetales y especias. Ideal para dar sabor a sopas, guisos y arroces, así como para rehidratar fideos y legumbres."
        },
        {
            "name": "Porotos",
            "brand": "Arcor",
            "price": 194,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
            "description": "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo."
        },
        {
            "name": "Garbanzos",
            "brand": "Arcor",
            "price": 210,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Jumbo",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784445/rl5w7eosyqsbn71f7rfk.jpg",
            "description": "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar."
        },
        {
            "name": "Leche",
            "brand": "Serenisima",
            "price": 405,
            "unit": "1l",
            "category": "Lácteos",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782047/hpq22sqqyewp3fbluvon.jpg",
            "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
        },
        {
            "name": "Yogurt",
            "brand": "Tregar",
            "price": 510,
            "unit": "160g",
            "category": "Lácteos",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782355/jj8llhztwulzhxthu5j3.jpg",
            "description": "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
        },
        {
            "name": "Queso untable",
            "brand": "Serenisima",
            "price": 505,
            "unit": "180g",
            "category": "Lácteos",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782535/hpgnnpl6aimguu8bhnzx.webp",
            "description": "El queso untable es una opción deliciosa y versátil para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de plástico práctico y fácil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompañamiento en platos fríos."
        },
        {
            "name": "Huevo",
            "brand": "San Juan",
            "price": 610,
            "unit": "6u",
            "category": "Huevos y Derivados",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782691/aqupactsshcrgltgl6jf.webp",
            "description": "El huevo es un alimento nutritivo y versátil, con un sinfín de posibilidades en la cocina. Presentado en una cáscara resistente, contiene una yema y una clara con un alto valor proteico. Puede ser cocido de diversas maneras, desde revuelto hasta en forma de omelette, y es un ingrediente esencial en muchas recetas."
        },
        {
            "name": "Manteca",
            "brand": "Serenisima",
            "price": 310,
            "unit": "paquete",
            "category": "Lácteos",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782836/ysobrdyzarw38eicrg9p.webp",
            "description": "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
        },
        {
            "name": "Aceite de oliva",
            "brand": "coppini",
            "price": 790,
            "unit": "500ml",
            "category": "Aceites",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783272/wpxhzvlfx8godsmerz5b.jpg",
            "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
        },
        {
            "name": "Aceite vegetal",
            "brand": "Primor",
            "price": 1200,
            "unit": "900ml",
            "category": "Aceites",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783457/tl8jxrq5chbffxcj6kn0.jpg",
            "description": "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
        },
        {
            "name": "Azucar",
            "brand": "ledesma",
            "price": 220,
            "unit": "1kg",
            "category": "Endulzantes",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783552/otzv3ugxajvumgqiwokk.webp",
            "description": "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas."
        },
        {
            "name": "Miel",
            "brand": "Aleluya",
            "price": 700,
            "unit": "500g",
            "category": "Endulzantes",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783691/svsfhmltruz3f7cbvzlt.jpg",
            "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
        },
        {
            "name": "Cafe",
            "brand": "Nescafe",
            "price": 1560,
            "unit": "170g",
            "category": "Café y Té",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783759/n6jxzahuwqco2hklunob.webp",
            "description": "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche."
        },
        {
            "name": "Te",
            "brand": "Gree hills",
            "price": 550,
            "unit": "200g",
            "category": "Café y Té",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
            "description": "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación."
        },
        {
            "name": "Fideos instantaneos",
            "brand": "Maruchan",
            "price": 300,
            "unit": "64g",
            "category": "Sopas y Caldos",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784037/frifxvygwtubdldu4vuo.webp",
            "description": "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
        },
        {
            "name": "Consome de pollo",
            "brand": "Knorr",
            "price": 160,
            "unit": "370g",
            "category": "Sopas y Caldos",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784186/jsf4bd4taxefrezvmubu.jpg",
            "description": "El caldo de pollo es un ingrediente esencial en la cocina, utilizado en numerosas recetas y platos. Presentado en envases de vidrio o de tetra brik, es rico en sabor y aroma, gracias a la cocción lenta de pollo, vegetales y especias. Ideal para dar sabor a sopas, guisos y arroces, así como para rehidratar fideos y legumbres."
        },
        {
            "name": "Porotos",
            "brand": "Arcor",
            "price": 192,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
            "description": "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo."
        },
        {
            "name": "Garbanzos",
            "brand": "Arcor",
            "price": 220,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Disco",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784445/rl5w7eosyqsbn71f7rfk.jpg",
            "description": "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar."
        },
    
        {
            "name": "Leche",
            "brand": "Serenisima",
            "price": 420,
            "unit": "1l",
            "category": "Lácteos",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782047/hpq22sqqyewp3fbluvon.jpg",
            "description": "La leche en envase es un producto fresco y saludable, esencial en cualquier hogar. Con un envase de plástico resistente y fácil de abrir, la leche se mantiene fresca y lista para ser consumida. Perfecta para disfrutar en el desayuno, preparar postres o agregar a bebidas calientes."
        },
    
        {
            "name": "Yogurt",
            "brand": "Tregar",
            "price": 510,
            "unit": "160g",
            "category": "Lácteos",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782355/jj8llhztwulzhxthu5j3.jpg",
            "description": "El yogurt en envase es una deliciosa y saludable opción para cualquier momento del día. Con su textura cremosa y su sabor suave, se presenta en un envase de plástico con tapa hermética que mantiene su frescura. Perfecto para disfrutar solo, con frutas o en preparaciones culinarias."
        },
        {
            "name": "Queso untable",
            "brand": "Serenisima",
            "price": 500,
            "unit": "180g",
            "category": "Lácteos",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782535/hpgnnpl6aimguu8bhnzx.webp",
            "description": "El queso untable es una opción deliciosa y versátil para disfrutar en cualquier momento. Con su suave textura y sabor cremoso, se presenta en un envase de plástico práctico y fácil de abrir. Ideal para untar en panes, utilizar como ingrediente en recetas culinarias o como acompañamiento en platos fríos."
        },
        {
            "name": "Huevo",
            "brand": "San Juan",
            "price": 600,
            "unit": "6u",
            "category": "Huevos y Derivados",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782691/aqupactsshcrgltgl6jf.webp",
            "description": "El huevo es un alimento nutritivo y versátil, con un sinfín de posibilidades en la cocina. Presentado en una cáscara resistente, contiene una yema y una clara con un alto valor proteico. Puede ser cocido de diversas maneras, desde revuelto hasta en forma de omelette, y es un ingrediente esencial en muchas recetas."
        },
        {
            "name": "Manteca",
            "brand": "Serenisima",
            "price":330,
            "unit": "paquete",
            "category": "Lácteos",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677782836/ysobrdyzarw38eicrg9p.webp",
            "description": "La manteca es un producto lácteo cremoso y suave, ideal para untar en panes o para cocinar. Presentada en un envase de plástico fácil de abrir, se conserva en perfectas condiciones en la nevera. La manteca es un ingrediente esencial en muchas recetas y le da a los alimentos un sabor irresistible."
        },
        {
            "name": "Aceite de oliva",
            "brand": "coppini",
            "price": 785,
            "unit": "500ml",
            "category": "Aceites",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783272/wpxhzvlfx8godsmerz5b.jpg",
            "description": "El aceite de oliva es un ingrediente indispensable en cualquier cocina. Presentado en una botella de vidrio o de plástico oscuro para proteger su calidad, es rico en grasas saludables y tiene un sabor y aroma únicos. Ideal para cocinar, aderezar ensaladas o dar un toque especial a cualquier plato."
        },
        {
            "name": "Aceite vegetal",
            "brand": "Primor",
            "price": 1195,
            "unit": "900ml",
            "category": "Aceites",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783457/tl8jxrq5chbffxcj6kn0.jpg",
            "description": "El aceite vegetal es un ingrediente versátil y económico en la cocina. Presentado en una botella de plástico resistente, es perfecto para freír, hornear o saltear. Se elabora a partir de diferentes tipos de plantas y semillas, lo que le confiere un sabor neutro que no interfiere en el sabor de los alimentos."
        },
        {
            "name": "Azucar",
            "brand": "ledesma",
            "price": 220,
            "unit": "1kg",
            "category": "Endulzantes",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783552/otzv3ugxajvumgqiwokk.webp",
            "description": "El azúcar es un ingrediente básico en la repostería y en la cocina en general. Presentado en una bolsa o en un envase de cartón resistente, su textura fina y granulada permite una fácil disolución en líquidos y la creación de postres deliciosos. Esencial en la preparación de bebidas, postres y en la elaboración de algunas salsas."
        },
        {
            "name": "Miel",
            "brand": "Aleluya",
            "price": 730,
            "unit": "500g",
            "category": "Endulzantes",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783691/svsfhmltruz3f7cbvzlt.jpg",
            "description": "La miel es un producto natural y delicioso, elaborado por las abejas a partir del néctar de las flores. Presentada en un envase de vidrio o de plástico, su textura suave y sabor dulce la hacen perfecta para endulzar infusiones, postres y otros platos. Además, posee propiedades antioxidantes y antibacterianas beneficiosas para la salud."
        },
        {
            "name": "Cafe",
            "brand": "Nescafe",
            "price": 1560,
            "unit": "170g",
            "category": "Café y Té",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783759/n6jxzahuwqco2hklunob.webp",
            "description": "El café en polvo es un producto indispensable para los amantes del café. Presentado en una bolsa o en un envase de vidrio o plástico, su textura fina y su aroma intenso lo hacen perfecto para preparar una taza de café. Ideal para disfrutar en cualquier momento del día, solo o con leche."
        },
        {
            "name": "Te",
            "brand": "Gree hills",
            "price": 550,
            "unit": "200g",
            "category": "Café y Té",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
            "description": "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación."
        },
        {
            "name": "Fideos instantaneos",
            "brand": "Maruchan",
            "price": 305,
            "unit": "64g",
            "category": "Sopas y Caldos",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784037/frifxvygwtubdldu4vuo.webp",
            "description": "Los fideos instantáneos son un producto práctico y rápido de preparar. Presentados en envases individuales o en paquetes, vienen con una variedad de salsas y condimentos para darles un sabor delicioso. Solo se requiere de agua caliente y unos minutos de espera para disfrutar de un plato de fideos sabroso y reconfortante."
        },
        {
            "name": "Consome de pollo",
            "brand": "Knorr",
            "price": 160,
            "unit": "370g",
            "category": "Sopas y Caldos",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784186/jsf4bd4taxefrezvmubu.jpg",
            "description": "El caldo de pollo es un ingrediente esencial en la cocina, utilizado en numerosas recetas y platos. Presentado en envases de vidrio o de tetra brik, es rico en sabor y aroma, gracias a la cocción lenta de pollo, vegetales y especias. Ideal para dar sabor a sopas, guisos y arroces, así como para rehidratar fideos y legumbres."
        },
        {
            "name": "Porotos",
            "brand": "Arcor",
            "price": 197,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784365/d1karryrtindrkuyscdf.jpg",
            "description": "Los porotos son una fuente rica de proteínas y fibra, esenciales en una dieta saludable y equilibrada. Presentados en bolsas de plástico o enlatados, vienen en diferentes variedades, desde negros hasta rojos, y pueden ser utilizados en una amplia variedad de platos, como ensaladas, sopas, guisos y chili. Son un alimento versátil y nutritivo."
        },
        {
            "name": "Garbanzos",
            "brand": "Arcor",
            "price": 217,
            "unit": "300g",
            "category": "Legumbres",
            "supermarket": "Chango Mas",
            "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677784445/rl5w7eosyqsbn71f7rfk.jpg",
            "description": "Los garbanzos son una legumbre versátil y nutritiva, rica en proteínas, fibra y carbohidratos complejos. Presentados enlatados o en bolsas de plástico, son un ingrediente esencial en la cocina mediterránea y en la preparación de platos como el hummus, la ensalada de garbanzos o el curry de garbanzos. Además, son económicos y fáciles de almacenar."
        },,
]

export default products;
