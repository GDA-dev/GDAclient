import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, Outlet } from "@remix-run/react";
import { saleClothesQueries } from "../../graphql/saleClothes";
import View from "../admin/components/view";
import { Clothing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin View Sale Clothing" },
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
            <View clothes={allSaleClothes} clothingType="sale" />
            <Outlet />
        </>
    );
};