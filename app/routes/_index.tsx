import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { saleClothesQueries } from "../../graphql/saleClothes";
import Header from "../global/header";
import Footer from "../global/footer";
import Home from "../containers/home";

export const meta: MetaFunction = () => {
    return [
        { title: "Home Page" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader() {
    const gql = new saleClothesQueries();
    const res = await gql.getAllSaleClothes();
    return res;
};

export default function HomePage() {
    
    const allSaleClothes = useLoaderData<typeof loader>();
    
    return (
        <html>
            <body>
                <Header />
                <Home /> 
                <Footer /> 
            </body>
        </html>
    );
};