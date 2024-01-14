import React from "react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { saleClothesQueries } from "../../graphql/saleClothes";
import { soldClothesQueries } from "../../graphql/soldClothes";
import Header from "../global/header";
import Footer from "../global/footer";
import Clothes from "../containers/clothes";

export const meta: MetaFunction = () => {
    return [
        { title: "Clothing Options Page" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader({ params }: LoaderFunctionArgs) {
    const saleGQL = new saleClothesQueries();
    const soldGQL = new soldClothesQueries();
    const saleRes: any = await saleGQL.getLatestSaleClothing();
    const soldRes: any = await soldGQL.getLatestSoldClothing();
    return [saleRes, soldRes];
};

export default function ClothesPage() {
    
    const latestClothing = useLoaderData<typeof loader>();
    
    return (
        <html>
            <body>
                <Header />
                <Clothes latestSale={latestClothing[0]} latestSold={latestClothing[1]} />
                <Footer />
            </body>
        </html>
    );
};