import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getSaleClothingByID from "../../services/GET/getSaleClothingByID";
import ClothingByID from "../containers/clothingByID";

export const meta: MetaFunction = () => {
    return [
        { title: "View Sale Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const res: any = await getSaleClothingByID(String(params.id));
    return res;
};

export default function SaleByIDPage() {

    const saleClothingByID = useLoaderData<typeof loader>();

    return (
        <>
            <ClothingByID clothing={saleClothingByID[0]} clothingType="sale" />
        </>
    );
};