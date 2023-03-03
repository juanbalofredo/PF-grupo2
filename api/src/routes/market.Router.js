import { Router } from "express";
import { getAllMarket, getById} from "../controllers/market.controller.js"

const market = Router();

market.get("/", getAllMarket);
market.get("/id/:id", getById);

market.put("/putmarket/:id", )

market.delete("/deletemarket/:id", )

export default market;