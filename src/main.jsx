import React from 'react';
import {createRoot} from "react-dom/client"
import {Layout} from "./components/layout/component.jsx";
import {App} from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
    <Layout location={root}>
        <App/>
    </Layout>
);