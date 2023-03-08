import mercadopago from "mercadopago";
import dotenv from "dotenv";
dotenv.config();
import { subscriptionHelper } from "../helpers/merPago.helper.js";

mercadopago.configure({
	access_token: process.env.MP_TOKEN,
});

export async function subscriptionLink(req, res) {
        try {
        console.log(req.body);
        const suscrtiption = await subscriptionHelper(req.body);

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