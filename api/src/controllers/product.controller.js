import Products from "../models/products.js";
import { getProductByName, getProductsByCategory, getProductsById, getProductsByBrand } from "../helpers/products.helper.js";
import apiInfo from "../helpers/apiInfo.js"
import { Op } from "sequelize";
import dataBase from "../config/db.js";
// import Prueba3 from "../prueba(3).js";

export async function getProducts(req, res) {
    try {
        const response2 = await Products.findAll(
            {
                // where: {
                //     supermarket:
                //         "General",
                // },
                order: [["name", "ASC"]]
            }
        )
        const responseParseado = response2.map(e => {
            let parsePrice = JSON.parse(e.price)
            e.price = parsePrice
            return e
        })
        // esto es para seguir creando la misma base de datos
        if (responseParseado.length == 0) {
            apiInfo().then(r => res.status(200).json(r));
        }
        else return res.status(200).json(responseParseado);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};
export async function getProductsAll(req, res) {
    console.log("entro a getAllProducts")
    // const response2 = await Products.findAll(

    //     {
    //         where: {
    //             supermarket:
    //                 { [Op.ne]: "General" },
    //         },
    //         order: [["name", "ASC"]]
    //     }
    // )

    try {
        const results = await Products.findAll({
            attributes: [
                'name',
                'brand',
                'name',
                'brand',
                'name',
                'brand',
                [dataBase.literal(`json_agg(json_build_object('price', price, 'supermarket', supermarket))`), 'precios']
            ],
            group: ['name', 'brand']
        });
        
            // "name": "Te",
            // "brand": "Gree hills",
            // "price": 530,
            // "unit": "200g",
            // "category": "Café y Té",
            // "supermarket": "Coto",
            // "image": "https://res.cloudinary.com/dzuasgy3l/image/upload/v1677783875/o4vtkrtihpihyuymcrsy.jpg",
            // "description": "El té es una bebida aromática y saludable que se presenta en una amplia variedad de sabores y tipos. Se puede encontrar en bolsitas individuales, en cajas de cartón o en latas. Ideal para disfrutar en cualquier momento del día, solo o con leche, ofrece beneficios para la salud y un agradable momento de relajación."
        
        // console.log(results)
        const response2 = await Products.findAll({
            attributes: [
                'name',
                'brand',
                [dataBase.literal(`json_agg(json_build_object('price', price, 'supermarket', supermarket))`), 'price']
            ],
            group: ['name', 'brand']
        });
        // esto es para seguir creando la misma base de datos
        // apiInfo().then(r => res.status(200).json(r));
        // if (response2.length == 0) {
        // }
        // else
        return res.status(200).json(results);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getProductId(req, res) {
    const { id } = req.params;
    try {
        const response = await getProductsById(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({ err: error.message })
    }

}

export async function getByName(req, res) {
    try {
        const { name } = req.query;
        const response = await getProductByName(name);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getByCategory(req, res) {
    const filterCategory = req.params;
    console.log("esto es filterCategory ==>", filterCategory)
    // console.log(category, order)
    try {
        const response = await getProductsByCategory(filterCategory)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

export async function getByBrand(req, res) {
    const { brand, order } = req.params;
    try {
        const response = await getProductsByBrand(brand, order)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ err: error.message });
    }
};