import React from "react";
import { saleClothesQueries } from "../../graphql/saleClothes";

export default function AllSalePage() {
    
    const gql = new saleClothesQueries();
    const allSaleClothes = gql.getAllSaleClothes();
    console.log(allSaleClothes)
    
    return (
        <div>
            
        </div>
    );
};