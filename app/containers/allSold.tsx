import React, { useState, Suspense, lazy } from "react";
import SkeletonCard from "../components/skeletonCard"
import CategoryFilter from "~/components/categoryFilter";
import GenderFilter from "~/components/genderFilter";
import SizeFilter from "~/components/sizeFilter";
import fetchFilter from "../../utils/fetchFilter";
import { checkInWishlist } from "../../utils/localStorage";
import { Clothing } from "../../utils/types";

interface AllSoldProps {
    soldClothes: Clothing[];
};

const ClothingCard = lazy(() => import("../components/clothingCard"));

const AllSold: React.FC<AllSoldProps> = ({ soldClothes }) => {
    
    
    const [displayedClothes, setDisplayedClothes] = useState<any>(soldClothes);
    const [filterSelection, setFilterSelection] = useState({ category: "", size: "", gender: "" });

    const handleFilterSelection = async (filter: string, filterType: string) => {

        if (filterType === "category") {

            const res = await fetchFilter(filterSelection, "sold");
            setFilterSelection(prevSelection => ({...prevSelection, category: filter}));
            setDisplayedClothes(res);

        } else if (filterType === "size") {

            const res = await fetchFilter(filterSelection, "sold");
            setFilterSelection(prevSelection => ({...prevSelection, category: filter}));
            setDisplayedClothes(res);

        } else if (filterType === "gender") {

            const res = await fetchFilter(filterSelection, "sold");
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
                <div id="AllSoldHeaderContainer">
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
                            <div id="AllSoldClearFilterButton" style={{ filter: "brightness(130%)" }} onClick={() => handleFilterSelection("clear", "clear")}></div>
                        </div>
                    </div>
                </div>
                <div id="AllSoldCardContainer">
                    {displayedClothes.map((clothing: Clothing, index: number) => (
                        <div id="AllSoldCard" key={index}>
                            <Suspense fallback={<SkeletonCard />}>
                                <ClothingCard clothing={clothing} inWishlist={checkInWishlist(clothing.id)} />
                            </Suspense>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                    #AllSold {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 90vh;
                        margin-top: 10vh;
                    }

                    #AllSoldContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                    }

                    #AllSoldHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        flex-direction: row;

                        border: 1px solid pink;
                    }

                    #AllSoldTitleContainer {
                        display: flex;
                        position: relative;
                        width: 25%;
                        height: 50%;
                        border: 1px solid green;

                    }

                    #AllSoldTitle {
                        
                    }

                    #AllSoldFiltersContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 50%;
                        border: 1px solid blue;
                    }

                    #AllSoldCategoryFilterContainer {
                        display: flex;
                        position: relative;
                    }

                    #AllSoldSizeFilterContainer {
                        display: flex;
                        position: relative;
                    }

                    #AllSoldGenderFilterContainer {
                        display: flex;
                        position: relative;
                    }

                    #AllSoldClearFilterContainer {
                        display: flex;
                        position: relative;
                    }

                    #AllSoldClearFilterButtonContainer {
                        display: flex;
                        position: relative;
                    }

                    #AllSoldCardContainer {
                        display: grid;
                        position: relative;
                        width: 90%;
                        height: 85%;
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                        grid-gap: 25px;
                        border: 1px solid red;
                    }

                    #AllSoldCard {
                        border: 1px solid black;
                        border-radius: 5px;
                    }
                
                `}
            </style>
        </div>
    );
};

export default AllSold;