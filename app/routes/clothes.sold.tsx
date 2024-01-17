import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { soldClothesQueries } from "../../graphql/soldClothes";
import MobileMenu from "~/global/mobileMenu";

export const meta: MetaFunction = () => {
    return [
        { title: "Sold Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader() {
    const gql = new soldClothesQueries();
    const res = await gql.getAllSoldClothes();
    return res;
};

export default function AllSoldPage() {
    
    const allSoldClothes = useLoaderData<typeof loader>();
    
    return (
        <>
        </>
    );
};