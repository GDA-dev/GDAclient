import React, { useState, Suspense, lazy } from "react";
import SkeletonCard from "../components/skeletonCard";
import FilterBar from "../components/filterBar";
import { checkInWishlist } from "../../utils/localStorage";
import { Clothing } from "../../utils/types";

interface AllClothesProps {
    allClothes: Clothing[];
    clothingType: string;
};

const ClothingCard = lazy(() => import("../components/clothingCard"));

const AllClothes: React.FC<AllClothesProps> = ({ allClothes, clothingType }) => {
    
    const [displayedClothes, setDisplayedClothes] = useState<any>(allClothes);
    
    return (
        <div id="AllClothes">
            <div id="AllClothesContainer">
                <div id="AllClothesHeaderContainer">
                    <div id="AllClothesTitleContainer">
                        <p id="AllClothesTitle">{clothingType} Clothes</p>
                    </div>
                    <div id="AllClothesFiltersContainer">
                        <FilterBar clothes={allClothes} sendFilteredClothes={(filteredClothes?: Clothing[]) => setDisplayedClothes(filteredClothes)} />
                    </div>
                </div>
                <div id="AllClothesCardContainer">
                    {displayedClothes.map((clothing: Clothing, index: number) => (
                        <div id="AllClothesCard" key={index}>
                            <Suspense fallback={<SkeletonCard />}>
                                <ClothingCard clothing={clothing} inWishlist={checkInWishlist(clothing.id)} />
                            </Suspense>
                        </div>
                    ))}
                </div>
            </div>
            <style>
                {`
                
                    #AllClothes {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 100%;
                        margin-top: 10vh;
                        overflow-x: hidden;
                    }

                    #AllClothesContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                    }

                    #AllClothesHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 125px;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #AllClothesTitleContainer {
                        display: flex;
                        position: relative;
                        width: 60%;
                        height: 100%;
                        align-items: center;
                        padding-left: 3%;
                    }

                    #AllClothesTitle {
                        font-size: 50px;
                        font-weight: 700;
                    }

                    #AllClothesFiltersContainer {
                        display: flex;
                        position: relative;
                        width: 40%;
                        height: 100%;
                        justify-content: flex-end;
                        align-items: center;
                        padding-right: 3%;
                    }

                    #AllClothesClearFilterButtonContainer {
                        display: flex;
                        position: relative;
                    }

                    #AllClothesCardContainer {
                        display: grid;
                        position: relative;
                        width: 100%;
                        height: 80%;
                        padding: 2% 3%;
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                        grid-gap: 25px;
                        border-top: 1px solid black;
                    }

                    #AllClothesCard {
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        box-shadow: 0px 0px 0px grey;
                        transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
                    }

                    #AllClothesCard:hover {
                        box-shadow: -3px 3px 7px grey;
                        transform: scale(1.02);
                    }
                    
                    @media (max-width: 900px) {

                        #AllClothesTitleContainer {
                            width: 100%;
                            padding-left: 5%;
                        }

                        #AllClothesTitle {
                            font-size: 35px;
                        }
                        
                        #AllClothesCardContainer {
                            width: 100%;
                            padding: 5% 12%;
                        }

                    }

                `}
            </style>
        </div>
    );
};

export default AllClothes;