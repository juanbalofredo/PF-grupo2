import { Router } from "express";
// //importar controller
import {getRevById, getAllReviews, postReview } from "../controllers/reviews.controller.js"

const review = Router();

review.get("/", getAllReviews);
review.get("/id/:id", getRevById)

review.post("/createpost", postReview);

export default review;



// app.delete("/reviews/:id", )