import { Header } from "../components/Header";
// import { Cart } from "../components/Cart";
import { Footer } from "../components/Footer";
import { RoutesMain } from './../routes'; // where we are going to specify our routes
import React from 'react'

const DashboardView = () => {
    return ( 
        <div>
            {/* <Cart /> */}
            <Header/>
            <RoutesMain/>
            <Footer/>
        </div>
    );
}

export default DashboardView;
