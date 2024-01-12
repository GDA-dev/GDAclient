import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { saleClothesQueries } from "../../graphql/saleClothes";

export const meta: MetaFunction = () => {
    return [
        { title: "Sale Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader() {
    const gql = new saleClothesQueries();
    const res = await gql.getAllSaleClothes();
    return res;
};

export default function AllSalePage() {

    const allSaleClothes = useLoaderData<typeof loader>();
    
    return (
        <div>
            
        </div>
    );
};