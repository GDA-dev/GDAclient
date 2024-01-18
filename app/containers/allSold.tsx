import React, { useState } from "react";
import ClothingCard from "~/components/clothingCard";
import CategoryFilter from "~/components/categoryFilter";
import GenderFilter from "~/components/genderFilter";
import SizeFilter from "~/components/sizeFilter";
import fetchFilter from "../../utils/fetchFilter";
import { checkInWishlist } from "../../utils/localStorage";
import { Clothing } from "../../utils/types";

interface AllSoldProps {
    soldClothes: Clothing[];
};

const AllSold: React.FC<AllSoldProps> = ({ soldClothes }) => {
    
    
    const [displayedClothes, setDisplayedClothes] = useState<any>(soldClothes);
    const [filterSelection, setFilterSelection] = useState({ category: "", size: "", gender: "" });

    const handleFilterSelection = async (filter: string, filterType: string) => {

        if (filterType === "category") {

            const res = await fetchFilter(filterSelection, "sold")
            setFilterSelection(prevSelection => ({...prevSelection, category: filter}));
            setDisplayedClothes(res);

        } else if (filterType === "size") {

            const res = await fetchFilter(filterSelection, "sold")
            setFilterSelection(prevSelection => ({...prevSelection, category: filter}));
            setDisplayedClothes(res);

        } else if (filterType === "gender") {

            const res = await fetchFilter(filterSelection, "sold")
            setFilterSelection(prevSelection => ({...prevSelection, gender: filter}));
            setDisplayedClothes(res);

        } else if (filterType === "clear") {

            setFilterSelection({ category: "", size: "", gender: "" });
            setDisplayedClothes(soldClothes);

        };
    };
    
    return (
        <div id="AllSold">
            <div id="AllSoldContainer">
                <div id="AllSoldTitleContainer">
                    <p id="AllSoldTitle">Sold Clothes</p>
                </div>
                <div id="AllSoldFiltersContainer">
                    <div id="AllSoldCategoryFilterContainer">
                        <CategoryFilter currentOptions={soldClothes} sendSelectedFilter={(filter:string) => handleFilterSelection(filter, "category")} />
                    </div>
                    <div id="AllSoldSizeFilterContainer">
                        <SizeFilter currentOptions={soldClothes} sendSelectedFilter={(filter:string) => handleFilterSelection(filter, "size")} />
                    </div>
                    <div id="AllSoldGenderFilterContainer">
                        <GenderFilter currentOptions={soldClothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "gender")} />
                    </div>
                    <div id="AllSoldClearFilterContainer">
                        <div id="AllSoldClearFilterButton" onClick={() => handleFilterSelection("clear", "clear")}></div>
                    </div>
                </div>
                <div id="AllSoldCardContainer">
                    {displayedClothes.map((clothing: Clothing, index: number) => (
                        <div id="AllSoldCard" key={index}>
                            <ClothingCard clothing={clothing} inWishlist={checkInWishlist(clothing.id)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllSold;