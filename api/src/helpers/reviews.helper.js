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

export function deleteReviewById(id) {
    const reviewDelete = Reviews.destroy({ where: { id } });
    return reviewDelete;
};


// app.delete("/reviews/:id", allProducts)