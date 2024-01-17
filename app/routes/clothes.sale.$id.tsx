import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { saleClothesQueries } from "../../graphql/saleClothes";

export const meta: MetaFunction = () => {
    return [
        { title: "Sale Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const gql = new saleClothesQueries();
    const res = await gql.getSaleClothingByID(String(params.id));
    return res;
};

export default function SaleByIDPage() {

    const saleClothingByID = useLoaderData<typeof loader>();

    return (
        <>
        </>
    );
};