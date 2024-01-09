import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(`${process.env.API_URL}/sold_clothes/`)

export class soldClothesQueries {

    async getAllSoldClothes() {
        const document = gql`
            {
                company {
                ceo
                }
            }
        `
        await client.request(document)
    };

};