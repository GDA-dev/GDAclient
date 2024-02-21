import React, { useState } from "react";
import { useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button } from '@chakra-ui/react';
import CategoryFilter from "../components/categoryFilter";
import SizeFilter from "../components/sizeFilter";
import GenderFilter from "../components/genderFilter";
import fetchFilter from "../../utils/fetchFilter";
import { IoFilterCircleSharp } from "react-icons/io5";
import { Clothing } from "../../utils/types";

interface FilterBarProps {
    clothes: Clothing[];
    sendFilteredClothes: (filteredClothes?: Clothing[]) => void;
};

const FilterBar: React.FC<FilterBarProps> = ({ clothes, sendFilteredClothes }) => {

    const [filterSelection, setFilterSelection] = useState({ category: "", size: "", gender: "" });
    const { isOpen, onOpen, onClose } = useDisclosure();
   
    const handleFilterSelection = async (filter: string, filterType: string) => {

        const clothingType = clothes[0].price ? "sale" : "sold";

        if (filterType === "category") {

            const newFilterSelection = { ...filterSelection, category: filter };
            const res = await fetchFilter(newFilterSelection, clothingType);
            setFilterSelection(prevSelection => ({ ...prevSelection, category: filter }));
            sendFilteredClothes(res);

        } else if (filterType === "size") {
            
            const newFilterSelection = { ...filterSelection, size: filter };
            const res = await fetchFilter(newFilterSelection, clothingType);
            setFilterSelection(prevSelection => ({ ...prevSelection, size: filter }));
            sendFilteredClothes(res);
            
        } else if (filterType === "gender") {

            const newFilterSelection = { ...filterSelection, gender: filter };
            setFilterSelection(prevSelection => ({ ...prevSelection, gender: filter }));
            const res = await fetchFilter(newFilterSelection, clothingType);
            sendFilteredClothes(res);
            
        } else if (filterType === "clear") {

            setFilterSelection({ category: "", size: "", gender: "" });
            sendFilteredClothes(clothes);
            onClose();

        };
    };

    return (
        <>
            <Button colorScheme='white' onClick={onOpen}>
                <IoFilterCircleSharp id='FilterOpen'className="w-full h-[7vh] text-black" />
            </Button>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} size="sm">
                <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton size="lg" />
                        <DrawerHeader>Filters</DrawerHeader>
                        <DrawerBody>
                            <div className="my-[15px]">
                                <CategoryFilter currentOptions={clothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "category")} />
                            </div>
                            <div className="my-[15px]">
                                <SizeFilter currentOptions={clothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "size")} />
                            </div>
                            <div className="my-[15px]">
                                <GenderFilter currentOptions={clothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "gender")} />
                            </div>
                            <div className="my-[15px]">
                                <Button colorScheme="pink" variant="solid" onClick={() => handleFilterSelection("clear", "clear")}>Clear</Button>
                            </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default FilterBar;