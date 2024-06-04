import {Review} from "../review/component.jsx";

export const Reviews = ({ reviews }) => {
    if(!reviews?.length) return
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((review) => (
                    <li><Review review={review}/></li>
                ))}
            </ul>
        </div>
    )
}