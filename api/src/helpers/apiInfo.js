import Products from "../models/products.js";
//products es el json de todos los productos
import products from "../prueba (1).js";

const apiInfo = async () => {
<<<<<<< HEAD
    const produc = products.map(async (p) => {
        return await Products.create({
            name: p.name,
            brand: p.brand,
            price: p.price,
            unit: p.unity,
            category: p.category,
            description: p.description,
            supermarket: p.supermarket,
            image: p.image
        })
    })
    produc.forEach(e => {
        e
            .then(info => console.log(info.dataValues))
    })
    console.log("Esto es produc ==>", produc)
    return produc;
=======
  const resultados = [];
  products.map((p) => {
    Products.create({
      name: p.name,
      brand: p.brand,
      price: p.price,
      unit: p.unity,
      category: p.category,
      description: p.description,
      supermarket: p.supermarket,
      image: p.image,
    });
    resultados.push({
      name: p.name,
      brand: p.brand,
      price: p.price,
      unit: p.unity,
      category: p.category,
      description: p.description,
      supermarket: p.supermarket,
      image: p.image,
    });
  });


  return resultados;
>>>>>>> f3cfad38f418cc9ce66d42e67623641bf9700028
};
export default apiInfo;
