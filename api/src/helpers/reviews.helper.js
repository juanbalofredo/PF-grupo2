import Reviews from "../models/review.js";

export function getReviewsById(id){
    const reviewById = Reviews.findOne({
        where: {id},
    });
    return reviewById;
}


export async function createReviews({message, userId}) {
    
    await Reviews.create({
        userId,
        message,
    })
}






// app.delete("/reviews/:id", allProducts)