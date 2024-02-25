import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import getAllSaleClothes from "../../services/GET/getAllSaleClothes";
import Header from "../global/header";
import AllClothes from "../containers/allClothes";
import Footer from "../global/footer";
import { Clothing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "All Sale Clothes" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader() {
    const res: any = await getAllSaleClothes();
    return res.reverse();
};

export default function AllSalePage() {

    const allSaleClothes = useLoaderData<typeof loader>();
    
    return (
        <>
            <Header />
            <AllClothes allClothes={allSaleClothes} clothingType="Sale" />
            <Outlet />
            <Footer />
        </>
    );
};