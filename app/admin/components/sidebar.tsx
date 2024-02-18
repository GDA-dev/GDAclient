import React from "react";
import { NavLink } from "@remix-run/react";
import { Heading, Button } from '@chakra-ui/react';

export default function Sidebar() {
    
    return (
        <div className="w-[20vw] h-[100vh] border=[#ccc] border-r">
            <div className="flex w-full h-[10%] pl-[5%] items-center">
                <Heading>Admin Portal</Heading>
            </div>
            <div className="flex w-[95%] pl-[5%] flex-col">
                <NavLink to="/admin/sale/view" className="h-[40px] mb-[10px]">
                    <Button variant="solid" className="flex w-full h-full" style={{ justifyContent: "flex-start" }}>Sale</Button>
                </NavLink>
                <NavLink to="/admin/sold/view" className="h-[40px]">
                    <Button variant="solid" className="flex w-full h-full" style={{ justifyContent: "flex-start" }}>Sold</Button>
                </NavLink>
            </div>
        </div>
    );
};