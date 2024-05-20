import React from 'react';
import {createRoot} from "react-dom/client"
import {restaurants} from "./constants/mock.js";
import {Restaurant} from "./components/restaurant/component.jsx";
import {Header} from "./components/header/component.jsx";
import {Footer} from "./components/footer/component.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <Header/>
        {restaurants.map((restaurant) => (
            <Restaurant restaurant={restaurant} />
        ))}
        <Footer/>
    </div>
);