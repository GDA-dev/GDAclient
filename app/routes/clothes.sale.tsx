import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { saleClothesQueries } from "../../graphql/saleClothes";
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
    const gql = new saleClothesQueries();
    const res: any = await gql.getAllSaleClothes();
    return res;
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