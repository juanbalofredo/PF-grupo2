import SuperM from "../models/superM.js";
import Users from "../models/users.js";
import { tiendas } from "../prueba(4).js";

export function getMarketById(id) {
    const getId = SuperM.findOne({
        where: { id }
    });
    return getId;
}

export function deleteMarketById(id) {
    const marketDelete = SuperM.destroy({ where: { id } })
    return marketDelete;
};

export const createSmarket = async (smarketsFromBody) => {
    console.log("entro a createSmarket")
    const marketTable = await SuperM.findAll();
    // console.log(marketTable)
    if (marketTable.length === 0) {
        await SuperM.bulkCreate(tiendas)
    }
    let findUser;
    if (smarketsFromBody) {
        let { name, image, id } = smarketsFromBody;
        //primero busca si el usuario existe para luego recien poder crear la tienda
        findUser = await Users.findOne({ where: { id } });
        if (findUser && !findUser.superMId) {
            // Crear una nueva tienda
            const createSmarket = await SuperM.create({ name, image });

            // Asignar el ID de la tienda al usuario
            await findUser.update({ superMId: createSmarket.id });
            return findUser;
        } else if (findUser && findUser.superMId) {
            throw Error("The user already has a market ID")
        } else {
            throw Error("The user does not exist")
        }

    }
}
export const allSmarket = async () => {
    let findAllSmarkets = await SuperM.findAll();
    return findAllSmarkets;
}