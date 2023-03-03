// import { getMarketById, deleteMarketById } from "../helpers/market.helper";
// import SuperM from "../models/superM";

// export async function getAllMarket(req, res) {
//     const allMarkets = await SuperM.findAll();
//     try {
//         if (allMarkets.length == 0) {
//             return res.status(400).send("not exist supermarkets")
//         } else return res.status(200).json(allMarkets);
//     }
//     catch (error) {
//         return res.status(400).json({ err: error.message });
//     }
// };

// export async function getById(req, res) {
//     const { id } = req.params;
//     try {
//         const response = await getMarketById(id);
//         if (!response) return res.status(404).send("Not found 404");
//         return res.status(200).json(response);
//     } catch {
//         return res.status(500).json({ err: error.message })
//     };
// };

// export async function deleteMarket(req, res) {
//     const { id } = req.body;
//     try {
//         const deleteId = await deleteMarketById(id)
//         if (deleteId === 0) {
//             throw Error("No market found with that ID")
//         }
//         res.status(200).json("The market has been successfully deleted");
//     } catch (error) {
//         res.status(500).send({ err: error.message });
//     }
// };