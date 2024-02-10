import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { soldClothesQueries } from "../../graphql/soldClothes";
import AdminSoldDashboard from "../admin/containers/sold";

export const meta: MetaFunction = () => {
    return [
        { title: "Sold Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader() {
    const gql = new soldClothesQueries();
    const res: any = await gql.getAllSoldClothes();
    return res;
};

export default function AdminSold() {

    const allSoldClothes = useLoaderData<typeof loader>();

    return (
        <>
            <AdminSoldDashboard>
                <Outlet />
            </AdminSoldDashboard>
        </>
    )
}

