import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { saleClothesQueries } from "../../graphql/saleClothes";
import Header from "../global/header";
import Footer from "../global/footer";
import SaleByID from "../containers/saleByID";
import { Clothing } from "../../utils/types";

export const meta: MetaFunction = () => {
    return [
        { title: "Sale Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const gql = new saleClothesQueries();
    const res: any = await gql.getSaleClothingByID(String(params.id));
    return res;
};

export default function SaleByIDPage() {

    const saleClothingByID = useLoaderData<typeof loader>();

    return (
        <>
            <Header />
            <SaleByID saleCard={saleClothingByID[0]}/>
            <Footer />
        </>
    );
};