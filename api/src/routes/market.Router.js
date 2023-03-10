import { Router } from "express";
import { getAllMarket, getById, deleteMarket} from "../controllers/market.controller.js"

const market = Router();

market.get("/", getAllMarket);
market.get("/id/:id", getById);

market.put("/putmarket/:id", )

market.delete("/deletemarket/:id", deleteMarket );

//MERCADO PAGO
import PaymentController from "../controllers/mercPago.controller.js";
import getSubscriptionLink from "../controllers/mercPago.controller.js"
import PaymentService from "../helpers/merPago.helper.js"

const PaymentInstance = new PaymentController(new PaymentService());

market.get("/payment", function (req, res) {
  return res.json({
    "/payment": "generates a payment link",
    "/subscription": "generates a subscription link"
  });
});

market.post("/subscription", function (req, res) {
  PaymentInstance.getSubscriptionLink(req, res);
});


export default market;