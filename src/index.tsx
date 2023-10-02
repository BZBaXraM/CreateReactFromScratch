import {createRoot} from "react-dom/client";
import React, {StrictMode} from "react";
import App from "./App";

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw Error("There is no root container");

createRoot(rootContainer).render(
    <StrictMode>
        <App></App>
    </StrictMode>
);