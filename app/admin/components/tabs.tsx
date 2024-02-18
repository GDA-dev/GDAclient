import React from "react";
import { NavLink } from "@remix-run/react";
import { Heading, Tabs, TabList, Tab } from '@chakra-ui/react';

const AdminTabs: React.FC<{ clothingType: string }> = ({ clothingType }) => {
    
    return (
        <div className="fixed top-0 right-0 w-[80vw] h-[20vh] border-[#ccc] border-b">
            <div className="flex h-[50%] pl-[20px] items-end">
                <Heading size="2xl">{`S${clothingType}`}</Heading>
            </div>
            <div className="flex h-[50%] pl-[20px] items-end">
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