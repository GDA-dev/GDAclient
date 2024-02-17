import React from "react";
import { NavLink } from "@remix-run/react";
import { Heading, Tabs, TabList, Tab } from '@chakra-ui/react';

const AdminTabs: React.FC<{ clothingType: string }> = ({ clothingType }) => {
    
    return (
        <div style={{ position: "fixed", top: "0", right: "0", width: "80vw", height: "20vh", borderBottom: "1px solid #ccc" }}>
            <div style={{ display: "flex",  height: "50%", paddingLeft: "20px", alignItems: "flex-end"  }}>
                <Heading size="2xl">{`S${clothingType}`}</Heading>
            </div>
            <div style={{ display: "flex", height: "50%", paddingLeft: "20px", alignItems: "flex-end" }}>
                <Tabs size="lg">
                    <TabList>
                        <Tab>
                            <NavLink to={`/admin/s${clothingType}/view`}>View</NavLink>
                        </Tab>
                        <Tab>
                            <NavLink to={`/admin/s${clothingType}/create`}>Create</NavLink>
                        </Tab>
                    </TabList>
                </Tabs> 
            </div>   
        </div>
    );
};

export default AdminTabs;