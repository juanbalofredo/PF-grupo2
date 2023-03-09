import mercadopago from "mercadopago";
import dotenv from "dotenv";
dotenv.config();
import { subscriptionHelper } from "../helpers/merPago.helper.js";

mercadopago.configure({ access_token: process.env.MP_TOKEN });

export async function subscriptionLink(req, res) {
console.log(req.body)  
  mercadopago.preferences
    .create(subscriptionHelper)
    .then((response) => res.status(200).send({ response }))
    .catch((error) => res.status(400).send({ error: error.message }));
};



// // https://api.mercadopago.com/preapproval