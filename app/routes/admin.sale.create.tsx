import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Create from "../admin/containers/create";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin Create Sale Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export default function AdminSaleCreate() {

    return (
        <>
            <Create clothingType="sale" />
        </>
    );
};