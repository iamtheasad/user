import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./router/AppRoute";

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL} >
            <AppRoute/>
        </BrowserRouter>
    );
}

export default App;


