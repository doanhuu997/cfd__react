import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';
import Login from '../components/login';
export default function Mainlayout({children}) {
    return (
        <>
            <Header />
            {children}
            <Login  />
            <Footer />
        </>
    )
}