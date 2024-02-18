import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Auth from "../admin/auth/Auth";

export const meta: MetaFunction = () => {
    return [
        { title: "Admin Portal" },
        { name: "description", content: "Welcome to Genet Design's and Alterations!" },
    ];
};

export default function AdminPage() {
    
    return (
        <>
            <Auth />
        </>
    );
};