import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Create from "../admin/containers/create";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin Create Sold Clothing" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];
};

export default function AdminSoldCreate() {

    return (
        <>
            <Create clothingType="sold" />
        </>
    );
};