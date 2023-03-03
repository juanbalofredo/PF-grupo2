import SuperM from "../models/superM.js";

export function getMarketById(id) {
    const getId = SuperM.findOne({
        where: {id}
    });
    return getId;
}

export function deleteMarketById(id) {
    const marketDelete = SuperM.destroy({ where: { id } })
    return marketDelete;
};