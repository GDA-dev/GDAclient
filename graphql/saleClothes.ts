import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(`${process.env.GRAPHQL_URL}`, { method: "GET" });

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
        const res = await client.request(query);
        console.log('gql', res)
        return res;
    };

    async getAllSaleClothingByID() {
        const query = gql`
            {
                
            }
        `;
        const res = await client.request(query);
        return res;
    };



};