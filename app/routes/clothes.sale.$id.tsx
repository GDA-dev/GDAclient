import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getSaleClothingByID from "../../services/GET/getSaleClothingByID";
import SaleByID from "../containers/saleByID";

export const meta: MetaFunction = () => {
    return [
        { title: "Sale Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
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
            <SaleByID saleClothing={saleClothingByID[0]} />
        </>
    );
};