import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getSaleClothingByID from "../../services/GET/getSaleClothingByID";
import Update from "../admin/containers/update";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin Update Sale Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const res: any = await getSaleClothingByID(String(params.id));
    return res;
};

export default function AdminSaleUpdate() {

    const saleClothingByID = useLoaderData<typeof loader>();

    return (
        <>
            <Update clothing={saleClothingByID[0]} clothingType="sale" />
        </>
    );
};