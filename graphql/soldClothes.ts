import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(`${process.env.GRAPHQL_URL}`, { method: "GET" });

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
        const res = await client.request(query);
        console.log('gql', res)
        return res;
    };

    async getAllSoldClothingByID() {
        const query = gql`
            {
                
            }
        `;
        const res = await client.request(query);
        return res;
    };



};