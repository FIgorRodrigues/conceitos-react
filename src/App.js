import React, { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Products from "./components/Products";
import backgroundImage from './assets/react-ilustration.jpg';
import './App.css';

const App = () => {
    return (
        <>
            <Header title="Homepage" />
            <img src={backgroundImage} title="React" alt="React" />
            <Products>
                <p>Conteúdo extra para o componente Products</p>
            </ Products>
            <Footer title="Rodapé"/>
        </>
    );
}

export default App 

