import React from "react";
import { NavLink, useLocation } from "@remix-run/react";
import { Heading, Tabs, TabList, Tab } from '@chakra-ui/react';

const AdminTabs: React.FC<{ clothingType: string }> = ({ clothingType }) => {

    const location = useLocation();
    const index = location.pathname === `/admin/s${clothingType}/view` ? 0 : 1;
    
    return (
        <div className="fixed top-0 right-0 w-[80vw] h-[22.5vh] border-[#ccc] border-b">
            <div className="flex h-[50%] pl-[20px] items-end">
                <Heading size="2xl">{`S${clothingType}`}</Heading>
            </div>
            <div className="flex h-[50%] pl-[20px] items-end">
                <Tabs size="lg" defaultIndex={index}>
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