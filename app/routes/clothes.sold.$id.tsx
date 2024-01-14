import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { soldClothesQueries } from "../../graphql/soldClothes";
import Header from "../global/header";
import Footer from "../global/footer";

export const meta: MetaFunction = () => {
    return [
        { title: "Sold Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const gql = new soldClothesQueries();
    const res = await gql.getSoldClothingByID(String(params.id));
    return res;
};


export default function SoldByIDPage() {
    
    const soldClothingByID = useLoaderData<typeof loader>();
    
    return (
        <html>
            <body>
                <Header />
                <Footer />
            </body>
        </html>
    );
};