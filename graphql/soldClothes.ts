import { GraphQLClient, gql } from 'graphql-request';
import toArray from '../utils/toArray';
import { env } from '../utils/env';
import { Clothing } from '../utils/types';

const client = new GraphQLClient(`${env.GRAPHQL_URL}`);

export class soldClothesQueries {

    async getAllSoldClothes() {

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
        return toArray(res.soldClothes);
    };

    async getSoldClothingByID(id: string) {

        const query = gql`
            {
                soldClothes(id: ${id}) {
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
        return toArray(res.soldClothes);
    };

    async getSoldClothingByCategory(category: string) {

        const query = gql`
            {
                soldClothes(category: ${category}) {
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
        return toArray(res.soldClothes);  
    };

    async getSoldClothingByGender(gender: string) {

        const query = gql`
            {
                soldClothes(gender: ${gender}) {
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
        return toArray(res.soldClothes);
    };

    async getSoldClothingBySize(size: string) {

        const query = gql`
            {
                soldClothes(size: ${size}) {
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
        return toArray(res.soldClothes);
    };
    
    async getSoldClothingByCategoryAndGender(category: string, gender: string) {

        const query = gql`
            {
                soldClothes(category: ${category}, gender: ${gender}) {
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
        return toArray(res.soldClothes);
    };


    async getSoldClothingByCategoryAndSize(category: string, size: string) {

        const query = gql`
            {
                soldClothes(category: ${category}, size: ${size}) {
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
        return toArray(res.soldClothes);
    };
    
    async getSoldClothingBySizeAndGender(size: string, gender: string) {

        const query = gql`
            {
                soldClothes(size: ${size}, gender: ${gender}) {
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
        return toArray(res.soldClothes);
    };
    
    async getSoldClothingByAllFilters(category: string, gender: string, size: string) {

        const query = gql`
            {
                soldClothes(category: ${category}, gender: ${gender}, size: ${size}) {
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
        return toArray(res.soldClothes);
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