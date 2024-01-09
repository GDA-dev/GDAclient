import React from "react";
import { saleClothesQueries } from "../../graphql/saleClothes";

export default async function AllSalePage() {
    
    const gql = new saleClothesQueries();
    const allSaleClothes = await gql.getAllSaleClothes();
    console.log(allSaleClothes)
    
    return (
        <div>
            
        </div>
    );
};