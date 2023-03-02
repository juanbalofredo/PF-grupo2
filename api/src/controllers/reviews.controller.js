import Reviews from "../models/review.js";
import { createReviews, getReviewsById } from "../helpers/reviews.helper.js";

export async function getAllReviews(req, res) {
    const allReviews = await Reviews.findAll();
    try {
        if (allReviews.length == 0) {
            return res.status(400).send("No hay reviews")
        } else return res.status(200).json(allReviews);
    }
    catch (error) {
        return res.status(400).json({ err: error.message });
    }
};

export async function getRevById(req, res){
    try{
        const {id} = req.params;
        const response = await getReviewsById(id);
        if(!response) return res.status(404).send("Not found 404");
        return res.status(200).json(response);
    } catch {
        return res.status(500).json({err: error.message}) };
    };

export function postReview(req, res) {
    try {
        const bodyReview = req.body;
        createReviews(bodyReview);
        return res.status(200).json(bodyReview);
    } catch (error) {
        return res.status(400).json({ err: error.message })
    };
}

//agregando comentarios