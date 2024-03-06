import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, Outlet } from "@remix-run/react";
import getAllSaleClothes from "../../services/GET/getAllSaleClothes";
import View from "../admin/containers/view";
import { Clothing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin View Sale Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
            <View clothes={allSaleClothes} clothingType="sale" />
            <Outlet />
        </>
    );
};