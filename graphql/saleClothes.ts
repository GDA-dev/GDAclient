import { GraphQLClient, gql } from 'graphql-request';
import { env } from '../utils/env';
import toArray from '../utils/toArray';
import { Clothing } from '../utils/types';

const client = new GraphQLClient(`${env.GRAPHQL_URL}`);

export class saleClothesQueries {

    async getAllSaleClothes() {

        const query = gql`
            {
                saleClothes {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes 
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.saleClothes).reverse();
    };

    async getSaleClothingByID(id: string) {

        const query = gql`
            {
                saleClothes(id: ${id}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.saleClothes);
    };

    async getSaleClothingByCategory(category: string) {

        const query = gql`
            {
                saleClothes(category: ${category}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.saleClothes).reverse();  
    };

    async getSaleClothingByGender(gender: string) {

        const query = gql`
            {
                saleClothes(gender: ${gender}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.saleClothes).reverse();
    };

    async getSaleClothingBySize(size: string) {

        const query = gql`
            {
                saleClothes(size: ${size}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.saleClothes).reverse();
    };
    
    async getSaleClothingByCategoryAndGender(category: string, gender: string) {

        const query = gql`
            {
                saleClothes(category: ${category}, gender: ${gender}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery 
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.saleClothes).reverse();
    };


    async getSaleClothingByCategoryAndSize(category: string, size: string) {

        const query = gql`
            {
                saleClothes(category: ${category}, size: ${size}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.saleClothes).reverse();
    };
    
    async getSaleClothingBySizeAndGender(size: string, gender: string) {

        const query = gql`
            {
                saleClothes(size: ${size}, gender: ${gender}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        return toArray(res.saleClothes).reverse();
    };
    
    async getSaleClothingByAllFilters(category: string, gender: string, size: string) {

        const query = gql`
            {
                saleClothes(category: ${category}, gender: ${gender}, size: ${size}) {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `;
        
        const res: Clothing = await client.request(query);
        return toArray(res.saleClothes).reverse();
    };

    async getLatestSaleClothing() {
        
        const query = gql`
            {
                saleClothes {
                    id
                    title
                    description
                    category
                    size
                    measurements
                    gender
                    price
                    notes 
                    thumbnail
                    gallery
                }
            }
        `;

        const res: Clothing = await client.request(query);
        const latestSaleClothing = res.saleClothes[0]; 
        return toArray(latestSaleClothing);
    };

};