import React from 'react';
import Footer from '../components/footer';
import Header from '../components/Header';
export default function Layout2({children}) {
    return (
        <>
            <Header />
            {children}
        </>
    )}