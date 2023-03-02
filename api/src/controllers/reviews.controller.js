import Reviews from "../models/comments.js";

export default async function getReviews(req, res){
    const allReviews = await Reviews.findAll();
    try{
        if(allReviews.length == 0){
            return res.status(400).send("No hay reviews")
        } else return res.status(200).json(allReviews);
    }
    catch(error){
        return res.status(400).json({ err: error.message });
    }
}