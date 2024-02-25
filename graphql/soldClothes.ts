import { GraphQLClient, gql } from 'graphql-request';
import toArray from '../utils/toArray';
import { env } from '../utils/env';
import { Clothing } from '../utils/types';

const client = new GraphQLClient(`${env.GRAPHQL_URL}`);

export class soldClothesQueries {

    async getSoldClothingByCategory(category: string) {

        const query = gql`
            {
                soldClothes(category: "${category}") {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.soldClothes).reverse();  
    };

    async getSoldClothingByGender(gender: string) {

        const query = gql`
            {
                soldClothes(gender: "${gender}") {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.soldClothes).reverse();
    };

    async getSoldClothingBySize(size: string) {

        const query = gql`
            {
                soldClothes(size: "${size}") {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.soldClothes).reverse();
    };
    
    async getSoldClothingByCategoryAndGender(category: string, gender: string) {

        const query = gql`
            {
                soldClothes(category: "${category}", gender: "${gender}") {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    notes
                    thumbnail
                    gallery 
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.soldClothes).reverse();
    };


    async getSoldClothingByCategoryAndSize(category: string, size: string) {

        const query = gql`
            {
                soldClothes(category: "${category}", size: "${size}") {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.soldClothes).reverse();
    };
    
    async getSoldClothingBySizeAndGender(size: string, gender: string) {

        const query = gql`
            {
                soldClothes(size: "${size}", gender: "${gender}") {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.soldClothes).reverse();
    };
    
    async getSoldClothingByAllFilters(category: string, size: string, gender: string) {

        const query = gql`
            {
                soldClothes(category: "${category}", size: "${size}", gender: "${gender}") {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.soldClothes).reverse();
    };

    async getLatestSoldClothing() {
        
        const query = gql`
            {
                soldClothes {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    notes 
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        const latestSoldClothing = res.soldClothes[0];
        return toArray(latestSoldClothing);
    };

};