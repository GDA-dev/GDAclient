import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData, Outlet } from "@remix-run/react";
import { soldClothesQueries } from "../../graphql/soldClothes";
import View from "../admin/containers/view";
import { Clothing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin View Sold Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader() {
    const gql = new soldClothesQueries();
    const res: any = await gql.getAllSoldClothes();
    return res;
};

export default function AllSalePage() {

    const allSoldClothes = useLoaderData<typeof loader>();
    
    return (
        <>
            <View clothes={allSoldClothes} clothingType="sold" />
            <Outlet />
        </>
    );
};