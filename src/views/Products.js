import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { getAllProducts } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    });

    return ( 
        <main>
            <div className="bg-white py-10">
                <h2 className="mt-6 mb-2 text-5xl font-bold font-heading text-center">All Products</h2>
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products && products.map((product, index) => (
                            <Link to={ `/product/${product.id}` } className="group" key={index}>
                                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={ product.image }  style={{ height: '400px' }} alt={ product.description }/>
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{ product.title }e</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">${ product.price }</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
  }
  
  export default Products;