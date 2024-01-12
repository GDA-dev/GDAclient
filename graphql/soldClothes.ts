import { GraphQLClient, gql } from 'graphql-request';
import toArray from '../utils/toArray';
import { Clothing } from '../utils/types';

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
        const res: Clothing = await client.request(query);
        return toArray(res.soldClothes);
    };

    async getAllSoldClothingByID(id: string) {
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
                    price
                    notes
                    thumbnail
                    gallery
                }
            }
        `;
        const res: Clothing = await client.request(query);
        return toArray(res.soldClothes);
    };



};