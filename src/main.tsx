import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                        <Route path={'/'} element={<App/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
