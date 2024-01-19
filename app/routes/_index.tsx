import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Header from "../global/header";
import Footer from "../global/footer";
import Home from "../containers/home";

export const meta: MetaFunction = () => {
    return [
        { title: "Home Page" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export default function HomePage() {

    return (
        <>
            <Header />
            <Home />
            <Footer /> 
        </>
    );
};