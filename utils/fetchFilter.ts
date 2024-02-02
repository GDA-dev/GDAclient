import { saleClothesQueries } from "../graphql/saleClothes";
import { soldClothesQueries } from "../graphql/soldClothes";
import { Filter, Clothing } from "./types";

export default async function fetchFilter(filter: Filter, clothingType: string) {

    if (clothingType === "sale") {

        const gql = new saleClothesQueries();

        if (filter.category !== "" && filter.size === "" && filter.gender === "") {

            const res: Clothing[] = await gql.getSaleClothingByCategory(filter.category);
            return res;
            
        } else if (filter.category === "" && filter.size === "" && filter.gender !== "") {

            const res: Clothing[] =  await gql.getSaleClothingByGender(filter.gender);
            return res;

        } else if (filter.category === "" && filter.size !== "" && filter.gender === "") {

            const res: Clothing[] = await gql.getSaleClothingBySize(filter.size);
            return res;

        } else if (filter.category !== "" && filter.size !== "" && filter.gender === "") {
            
            const res: Clothing[] = await gql.getSaleClothingByCategoryAndSize(filter.category, filter.size);
            return res;
            
        } else if (filter.category !== "" && filter.size === "" && filter.gender !== "") {

            const res: Clothing[] = await gql.getSaleClothingByCategoryAndGender(filter.category, filter.gender);
            return res;

        } else if (filter.category === "" && filter.size !== "" && filter.gender !== "") {
            
            const res: Clothing[] = await gql.getSaleClothingBySizeAndGender(filter.size, filter.gender);
            return res;
            
        } else if (filter.category !== "" && filter.size !== "" && filter.gender !== "") {

            const res: Clothing[] = await gql.getSaleClothingByAllFilters(filter.category, filter.size, filter.gender);
            return res;
            
        };

    } else if (clothingType === "sold") {

        const gql = new soldClothesQueries();

        if (filter.category !== "" && filter.size === "" && filter.gender === "") {

            const res: Clothing[] = await gql.getSoldClothingByCategory(filter.category);
            return res;
            
        } else if (filter.category === "" && filter.size === "" && filter.gender !== "") {

            const res: Clothing[] =  await gql.getSoldClothingByGender(filter.gender);
            return res;

        } else if (filter.category === "" && filter.size !== "" && filter.gender === "") {

            const res: Clothing[] = await gql.getSoldClothingBySize(filter.size);
            return res;

        } else if (filter.category !== "" && filter.size !== "" && filter.gender === "") {
            
            const res: Clothing[] = await gql.getSoldClothingByCategoryAndSize(filter.category, filter.size);
            return res;
            
        } else if (filter.category !== "" && filter.size === "" && filter.gender !== "") {

            const res: Clothing[] = await gql.getSoldClothingByCategoryAndGender(filter.category, filter.gender);
            return res;

        } else if (filter.category === "" && filter.size !== "" && filter.gender !== "") {
            
            const res: Clothing[] = await gql.getSoldClothingBySizeAndGender(filter.size, filter.gender);
            return res;
            
        } else if (filter.category !== "" && filter.size !== "" && filter.gender !== "") {
            
            const res: Clothing[] = await gql.getSoldClothingByAllFilters(filter.category, filter.size, filter.gender);
            return res;
            
        };
    };
};