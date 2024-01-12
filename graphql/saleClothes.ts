import { GraphQLClient, gql } from 'graphql-request';
import toArray from '../utils/toArray';
import { Clothing } from '../utils/types';

const client = new GraphQLClient(`${process.env.GRAPHQL_URL}`);

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
        return toArray(res.saleClothes);
    };

    async getAllSaleClothingByID(id: string) {
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



};