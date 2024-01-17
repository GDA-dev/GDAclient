import React, { useState } from "react";
import ClothingCard from "../components/clothingCard";
import CategoryFilter from "../components/categoryFilter";
import SizeFilter from "../components/sizeFilter";
import GenderFilter from "../components/genderFilter";
import fetchFilter from "../../utils/fetchFilter";
import { checkInWishlist } from "../../utils/localStorage";
import { Clothing } from "../../utils/types";

interface AllSaleProps {
    saleClothes: Clothing[];
};

const AllSale: React.FC<AllSaleProps> = ({ saleClothes }) => {
    
    const [displayedClothes, setDisplayedClothes] = useState<Clothing[] | []>(saleClothes);
    const [filterSelection, setFilterSelection] = useState({ category: "", size: "", gender: "" });

    const handleFilterSelection = (filter: string, filterType: string) => {

        if (filterType === "category") {

            setFilterSelection(prevSelection => ({...prevSelection, category: filter}));
            setDisplayedClothes(fetchFilter(filterSelection, "sale"));

        } else if (filterType === "size") {

            setFilterSelection(prevSelection => ({...prevSelection, size: filter}));
            setDisplayedClothes(fetchFilter(filterSelection, "sale"));

        } else if (filterType === "gender") {

            setFilterSelection(prevSelection => ({...prevSelection, gender: filter}));
            setDisplayedClothes(fetchFilter(filterSelection, "sale"));

        } else if (filterType === "clear") {

            setFilterSelection({ category: "", size: "", gender: "" });
            setDisplayedClothes(saleClothes);

        };
    };
    
    return (
        <div id="AllSale">
            <div id="AllSaleContainer">
                <div id="AllSaleTitleContainer">
                    <p id="AllSaleTitle">Clothes on Sale</p>
                </div>
                <div id="AllSaleFiltersContainer">
                    <div id="AllSaleCategoryFilterContainer">
                        <CategoryFilter currentOptions={saleClothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "category")} />
                    </div>
                    <div id="AllSaleSizeFilterContainer">
                        <SizeFilter currentOptions={saleClothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "size")} />
                    </div>
                    <div id="AllSaleGenderfilterContainer">
                        <GenderFilter currentOptions={saleClothes} sendSelectedFilter={(filter: string) => handleFilterSelection(filter, "gender")} />
                    </div>
                    <div id="AllSaleClearFilterContainer">
                        <div id="AllSaleClearFilterButton" onClick={() => handleFilterSelection("clear", "clear")}></div>
                    </div>
                </div>
                <div id="AllSaleCardContainer">
                    {displayedClothes.map((clothing: Clothing, index: number) => (
                        <div id="AllSaleCard" key={index}>
                            <ClothingCard clothing={clothing} inWishlist={checkInWishlist(clothing.id)}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllSale;