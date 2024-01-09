import React from "react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({
    params,
}: LoaderFunctionArgs) => {
    return json({ id: params.id });
};

export default function SoldByIDPage() {
    
    const { id } = useLoaderData<typeof loader>();
    
    return (
        <div>

        </div>
    );
};