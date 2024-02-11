import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { saleClothesQueries } from "../../graphql/saleClothes";
import AdminSaleDashboard from "../admin/containers/sale";

export const meta: MetaFunction = () => {
    return [
        { title: "Sale Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export async function loader() {
    const gql = new saleClothesQueries();
    const res: any = await gql.getAllSaleClothes();
    return res;
};

export default function AdminSale() {

    const allSaleClothes = useLoaderData<typeof loader>();

    return (
        <>
            <AdminSaleDashboard>
                <Outlet />
            </AdminSaleDashboard>
        </>
    );
};