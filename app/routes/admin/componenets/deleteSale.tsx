import react from 'react';
import { useLoaderData } from "@remix-run/react";
import { saleClothesQueries } from "../../../../graphql/saleClothes";

export async function loader() {
    const gql = new saleClothesQueries();
    const res = await gql.getAllSaleClothes();
    return res;
};

export default function DeleteSale() {

    const allSaleClothes = useLoaderData<typeof loader>();
    
    return (
        <div>
            
        </div>
    );
};