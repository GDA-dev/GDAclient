import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import getAllSoldClothes from "../../services/GET/getAllSoldClothes";
import Header from "../global/header";
import AllClothes from "../containers/allClothes";
import Footer from "../global/footer";
import { Clothing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "All Sold Clothes" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];
};

export async function loader() {
    const res: any = await getAllSoldClothes();
    return res.reverse();
};

export default function AllSoldPage() {
    
    const allSoldClothes = useLoaderData<typeof loader>();
    
    return (
        <>
            <Header />
            <AllClothes allClothes={allSoldClothes} clothingType="Sold" />
            <Outlet />
            <Footer />
        </>
    );
};