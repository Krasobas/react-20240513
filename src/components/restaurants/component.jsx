import React from "react";
import {restaurants} from "../../constants/mock.js";
import {RestaurantTabs} from "../restaurant-tabs/component.jsx";
import {Restaurant} from "../restaurant/component.jsx";

const RESTAURANT_COPIES = 10;
export const Restaurants = () => {
    const [activeRestaurantIndex, setActiveRestaurantIndex] = React.useState(0);
    if(!restaurants?.length) return;
    const activeRestaurants = restaurants[activeRestaurantIndex];

    return (
        <div>
            <RestaurantTabs
                activeTabIndex={activeRestaurantIndex}
                restaurants={restaurants}
                onTabClick={setActiveRestaurantIndex}
            />
            {Array.from({ length: RESTAURANT_COPIES }).map(() => <Restaurant restaurant={activeRestaurants} />)}

        </div>
    )
}