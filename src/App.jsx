import {restaurants} from "./constants/mock.js";
import {Restaurant} from "./components/restaurant/component.jsx";
import React from "react";
import {Tabs} from "./components/tabs/component.jsx";

export const App = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    if(!restaurants?.length) return;
    const length = restaurants?.length;
    const indexes = Array.from({length}, (_, i) => i);
    const currentRestaurant = restaurants[currentIndex];
    return (
        <>
            <Tabs indexes={indexes} onClick={setCurrentIndex} />
            <Restaurant restaurant={currentRestaurant} />
        </>
    )
}