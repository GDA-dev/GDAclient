import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import getSoldClothingByID from "../../services/GET/getSoldClothingByID";
import Update from "../admin/containers/update";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin Update Sold Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const res: any = await getSoldClothingByID(String(params.id));
    return res;
};

export default function AdminSoldUpdate() {

    const soldClothingByID = useLoaderData<typeof loader>();

    return (
        <>
            <Update clothing={soldClothingByID[0]} clothingType="sold" />
        </>
    );
};