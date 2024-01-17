import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import { saleClothesQueries } from "../../graphql/saleClothes";
import { soldClothesQueries } from "../../graphql/soldClothes";
import Header from "../global/header";
import Footer from "../global/footer";
import ClothingOptions from "../containers/clothingOptions";

export const meta: MetaFunction = () => {
    return [
        { title: "Clothing Options Page" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader() {
    const saleGQL = new saleClothesQueries();
    const soldGQL = new soldClothesQueries();
    const saleRes: any = await saleGQL.getLatestSaleClothing();
    const soldRes: any = await soldGQL.getLatestSoldClothing();
    return [saleRes, soldRes];
};

export default function ClothesPage() {
    
    const latestClothing = useLoaderData<typeof loader>();
    const currentPath = useLocation().pathname;
    
    return (                
        <>
            <Header />
            {currentPath === "/clothes" && <ClothingOptions latestSale={latestClothing[0]} latestSold={latestClothing[1]} />}
            <Footer />
        </>
    );
};