import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App/App.css";
import NavBar from '../Components/NavBar/NavBar';
import ShowProductsPage from '../ShowProduct/ShowProduct';
import AddProductsPage from '../AddProduct/AddProduct';
import AddClientsPage from '../AddClient/AddClient';
import ShowClientPage from '../ShowClient/ShowClient';

export default function App ()
{
    return (
        <div className="app">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={ <ShowProductsPage /> } />
                    <Route path='/AddProductsPage' element={ <AddProductsPage /> } />
                    <Route path='/AddClientsPage' element={ <AddClientsPage /> } />
                    <Route path='/ShowClientPage' element={ <ShowClientPage /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
