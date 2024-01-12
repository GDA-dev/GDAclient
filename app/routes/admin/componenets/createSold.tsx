import React from "react";
import { useLoaderData } from "@remix-run/react";
import { soldClothesQueries } from "../../../../graphql/soldClothes";

export async function loader() {
    const gql = new soldClothesQueries();
    const res = await gql.getAllSoldClothes();
    return res;
};

export default function CreateSold() {

    const allSoldClothes = useLoaderData<typeof loader>();

    return (
        <div>

        </div>
    );
};