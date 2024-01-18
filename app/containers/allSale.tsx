import React, { useState, Suspense, lazy } from "react";
import SkeletonCard from "../components/skeletonCard"
import CategoryFilter from "../components/categoryFilter";
import SizeFilter from "../components/sizeFilter";
import GenderFilter from "../components/genderFilter";
import fetchFilter from "../../utils/fetchFilter";
import { checkInWishlist } from "../../utils/localStorage";
import { Clothing } from "../../utils/types";

interface AllSaleProps {
    saleClothes: Clothing[];
};

const ClothingCard = lazy(() => import("../components/clothingCard"));

const AllSale: React.FC<AllSaleProps> = ({ saleClothes }) => {
    
    const [displayedClothes, setDisplayedClothes] = useState<any>(saleClothes);
    const [filterSelection, setFilterSelection] = useState({ category: "", size: "", gender: "" });

    const handleFilterSelection = async (filter: string, filterType: string) => {

        if (filterType === "category") {

            const res = await fetchFilter(filterSelection, "sale")
            setFilterSelection(prevSelection => ({...prevSelection, category: filter}));
            setDisplayedClothes(res);

        } else if (filterType === "size") {

            const res = await fetchFilter(filterSelection, "sale")
            setFilterSelection(prevSelection => ({...prevSelection, size: filter}));
            setDisplayedClothes(res);

        } else if (filterType === "gender") {

            const res = await fetchFilter(filterSelection, "sale")
            setFilterSelection(prevSelection => ({...prevSelection, gender: filter}));
            setDisplayedClothes(res);

        } else if (filterType === "clear") {

            setFilterSelection({ category: "", size: "", gender: "" });
            setDisplayedClothes(saleClothes);

        };
    };
    
    return (
        <div id="AllSale">
            <div id="AllSaleContainer">
                <div id="AllSaleTitleContainer">
                    <p id="AllSaleTitle">Sale Clothing</p>
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
                            <Suspense fallback={<SkeletonCard />}>
                                <ClothingCard clothing={clothing} inWishlist={checkInWishlist(clothing.id)}/>
                            </Suspense>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                    #AllSale {
                        display: flex;
                        position: relative;
                        width: 100vw:
                        height: 100%;
                        margin-top: 10vh;
                        border: 1px solid blue;
                    }

                    #AllSaleContainer {

                    }
                `}
            </style>
        </div>
    );
};

export default AllSale;