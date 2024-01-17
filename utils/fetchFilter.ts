import { saleClothesQueries } from "../graphql/saleClothes";
import { soldClothesQueries } from "../graphql/soldClothes";
import { Filter } from "./types";

export default function fetchFilter(filter: Filter, clothingType: string) {

    if (clothingType === "sale") {

        const gql = new saleClothesQueries();

        if (filter.category !== "" && filter.size !== "" && filter.gender !== "") {
            
            return gql.getSaleClothingByAllFilters(filter.category, filter.size, filter.gender);

        } else if (filter.category !== "" && filter.size === "" && filter.gender === "") {

            return gql.getSaleClothingByCategory(filter.category);
            
        } else if (filter.category === "" && filter.size === "" && filter.gender !== "") {
            return gql.getSaleClothingByGender(filter.gender);
            
        } else if (filter.category === "" && filter.size !== "" && filter.gender === ""){
            return gql.getSaleClothingBySize(filter.size);
        }
        
        return [];

    } else if (clothingType === "sold") {

    } else {

        return [];

    };

};