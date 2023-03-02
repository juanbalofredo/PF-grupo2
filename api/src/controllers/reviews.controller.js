import Reviews from "../models/review.js";
import { createReviews, getReviewsById, deleteReviewById } from "../helpers/reviews.helper.js";

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

export async function postReview(req, res) {
    try {
        const bodyReview = req.body;
        await createReviews(bodyReview);
        return res.status(200).json(bodyReview);
    } catch (error) {
        return res.status(400).json({ err: error.message })
    };
}

export async function deleteReview(req, res) {
    const { id } = req.body;
    try {
        const deletedReview = await deleteReviewById(id)
        
        if (deletedReview === 0) {
            throw Error("No se encontro ninguna review con ese iD")
        }
        res.status(200).json("Se ha borrado la review exitosamente"); 
    } catch (error) {
        res.status(500).send({err: error.message});
    }

};


//agregando comentarios