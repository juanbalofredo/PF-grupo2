import mercadopago from "mercadopago";
import dotenv from "dotenv";
dotenv.config();
import { createSuscription } from "../helpers/merPago.helper.js";

mercadopago.configure({
	access_token: process.env.MP_TOKEN,
});

export async function suscritionLink(req, res) {
    try {
        const suscrtiption = await createSuscription(req.body)

        res.status(200).json(suscrtiption);
    } catch (error) {
        res.status(400).json(error.message)
    };
}




//headers: {
//    "Content-Type" : "application/json",
//    Authorization: `Bearer ${process.env.MP_TOKEN}`
//}
// https://api.mercadopago.com/preapproval