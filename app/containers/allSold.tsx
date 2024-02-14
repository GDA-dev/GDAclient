import React, { useState, Suspense, lazy } from "react";
import SkeletonCard from "../components/skeletonCard";
import FilterBar from "../components/filterBar";
import { checkInWishlist } from "../../utils/localStorage";
import { Clothing } from "../../utils/types";

interface AllSoldProps {
    soldClothes: Clothing[];
};

const ClothingCard = lazy(() => import("../components/clothingCard"));

const AllSold: React.FC<AllSoldProps> = ({ soldClothes }) => {
    
    const [displayedClothes, setDisplayedClothes] = useState<any>(soldClothes);
    
    return (
        <div id="AllSold">
            <div id="AllSoldContainer">
                <div id="AllSoldHeaderContainer">
                    <div id="AllSoldTitleContainer">
                        <p id="AllSoldTitle">Sold Clothing</p>
                    </div>
                    <div id="AllSoldFiltersContainer">
                        <FilterBar clothes={soldClothes} sendFilteredClothes={(filteredClothes?: Clothing[]) => setDisplayedClothes(filteredClothes)} />
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
                        overflow-x: hidden;
                    }

                    #AllSoldContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                        overflow-y: hidden;
                    }

                    #AllSoldHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #AllSoldTitleContainer {
                        display: flex;
                        position: relative;
                        width: 60%;
                        height: 100%;
                        align-items: center;
                        padding-left: 3%;
                    }

                    #AllSoldTitle {
                        font-size: 50px;
                        font-weight: 700;
                    }

                    #AllSoldFiltersContainer {
                        display: flex;
                        position: relative;
                        width: 40%;
                        height: 100%;
                        justify-content: flex-end;
                        align-items: center;
                        padding-right: 3%;
                    }

                    #AllSoldClearFilterButtonContainer {
                        display: flex;
                        position: relative;
                    }

                    #AllSoldCardContainer {
                        display: grid;
                        position: relative;
                        width: 100%;
                        height: 80%;
                        padding: 2% 3%;
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                        grid-gap: 25px;
                        overflow-y: scroll;
                        border-top: 1px solid black;
                    }

                    #AllSoldCardContainer::-webkit-scrollbar {
                        width: 0.5em;
                        background-color: transparent;
                    }
                    
                    #AllSoldCardContainer::-webkit-scrollbar-thumb {
                        background-color: #ccc;
                        border-radius: 25px;
                    }

                    #AllSoldCard {
                        height: 450px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        box-shadow: 0px 0px 0px grey;
                        transition: box-shadow 0.1s ease-in-out, transform 0.1s ease-in-out;
                    }

                    #AllSoldCard:hover {
                        box-shadow: -3px 3px 7px grey;
                        transform: scale(1.02);
                    }
                    
                    @media (max-width: 900px) {

                        #AllSoldHeaderContainer {
                            height: 15%;
                        }

                        #AllSoldTitleContainer {
                            width: 100%;
                            padding-left: 5%;
                        }
                        
                        #AllSoldCardContainer {
                            width: 100%;
                            padding: 0 12%;
                        }
    
                    }

                `}
            </style>
        </div>
    );
};

export default AllSold;