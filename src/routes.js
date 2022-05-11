import React from 'react';
import Home from './views/Home';
import Products from './views/Products';
import Product from './views/Product';
import { Routes, Route } from "react-router-dom";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  )
};