import React from 'react';
import {createRoot} from "react-dom/client"
import {Layout} from "./components/layout/component.jsx";
import {restaurants} from "./constants/mock.js";
import {Restaurant} from "./components/restaurant/component.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        {restaurants.map((restaurant) => (
            <Restaurant restaurant={restaurant}/>
        ))}
    </>
);