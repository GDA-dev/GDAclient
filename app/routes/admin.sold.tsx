import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import AdminTabs from "../admin/components/tabs";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin Sold" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ];
};

export default function AdminSold() {

    return (
        <>
            <AdminTabs clothingType="old" />
            <Outlet />
        </>
    )
}

