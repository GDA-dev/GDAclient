import React from "react";
import { NavLink } from "@remix-run/react";
import { Heading, Button } from '@chakra-ui/react';

export default function Sidebar() {
    
    return (
        <div style={{ width: "20vw", height: "100vh", borderRight: "1px solid #ccc" }}>
            <div style={{ display: "flex", width: "100%", height: "10%", alignItems: "center", paddingLeft: "5%" }}>
                <Heading>Admin Portal</Heading>
            </div>
            <div style={{ display: "flex", width: "95%", flexDirection: "column", paddingLeft: "5%" }}>
                <NavLink to="/admin/sale/view" style={{ height: "40px", marginBottom: "10px" }}>
                    <Button variant="solid" style={{ display: "flex", width: "100%", height: "100%", justifyContent: "flex-start" }}>Sale</Button>
                </NavLink>
                <NavLink to="/admin/sold/view" style={{ height: "40px" }}>
                    <Button variant="solid" style={{ display: "flex", width: "100%", height: "100%", justifyContent: "flex-start" }}>Sold</Button>
                </NavLink>
            </div>
        </div>
    );
};