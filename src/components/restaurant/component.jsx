import {Menu} from "../menu/component.jsx";
import {Reviews} from "../reviews/components.jsx";
import {NewReviewForm} from "../new-review-form/component.jsx";

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <Menu menu={restaurant.menu}></Menu>
            <Reviews reviews={restaurant.reviews}></Reviews>
            <NewReviewForm/>
        </div>
    );
}