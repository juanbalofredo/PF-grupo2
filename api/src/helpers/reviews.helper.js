import Reviews from "../models/review.js";
import Users from "../models/users.js";

export function getReviewsById(id) {
    const reviewById = Reviews.findOne({
        where: { id },
    });
    return reviewById;
}


export async function createReviews({ message, userId }) {

    await Reviews.create({
        userId,
        message,
    })
}

export function deleteReviewById(id) {
    const reviewDelete = Reviews.destroy({
        where: { id }
    });
    return reviewDelete;
};

export async function showReview({ id, activity, type_account_logged, reviewId }) {

    let usersId = await Users.findOne({ where: { id } })
    console.log("esto es userId",usersId)
    if (!usersId){
        console.log("entro a la condicion !userId")
        throw Error("User id don't found");
    }

    let updateDone;
    if (type_account_logged === "3") {
        console.log("entro el admin")
        updateDone = Reviews.update({ activity: activity }, { where: { id: reviewId } });
    } else {
        console.log("entro sin ser admin ==>")

        const post = Reviews.findOne({ where: { id: reviewId, userId: id } });
        if (post) {
            updateDone = Reviews.update({ activity: activity }, { where: { id: reviewId } });
        }
    }
    return updateDone;
}
