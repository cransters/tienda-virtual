import React from "react";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index";


export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route exact path="/" element={<Inicio/>} />
                <Route exact path="/productos" element={<ProductosLista/>} />
            </Routes>
        </section>
        
    )
}