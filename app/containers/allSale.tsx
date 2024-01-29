import React, { useState, Suspense, lazy } from "react";
import SkeletonCard from "../components/skeletonCard";
import FilterBar from "../components/filterBar";
import { checkInWishlist } from "../../utils/localStorage";
import { Clothing } from "../../utils/types";

interface AllSaleProps {
    saleClothes: Clothing[];
};

const ClothingCard = lazy(() => import("../components/clothingCard"));

const AllSale: React.FC<AllSaleProps> = ({ saleClothes }) => {
    
    const [displayedClothes, setDisplayedClothes] = useState<any>(saleClothes);
    
    return (
        <div id="AllSale">
            <div id="AllSaleContainer">
                <div id="AllSaleHeaderContainer">
                    <div id="AllSaleTitleContainer">
                        <p id="AllSaleTitle">Sale Clothing</p>
                    </div>
                    <div id="AllSaleFiltersContainer">
                        <FilterBar clothes={saleClothes} sendFilteredClothes={(filteredClothes?: Clothing[]) => setDisplayedClothes(filteredClothes)} />
                    </div>
                </div>
                <div id="AllSaleCardContainer">
                    {displayedClothes.map((clothing: Clothing, index: number) => (
                        <div id="AllSaleCard" key={index}>
                            <Suspense fallback={<SkeletonCard />}>
                                <ClothingCard clothing={clothing} inWishlist={checkInWishlist(clothing.id)} />
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
                        width: 100vw;
                        height: 90vh;
                        margin-top: 10vh;
                        overflow-x: hidden;
                    }

                    #AllSaleContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        flex-direction: column;
                        overflow-y: hidden;
                    }

                    #AllSaleHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 20%;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    #AllSaleTitleContainer {
                        display: flex;
                        position: relative;
                        width: 60%;
                        height: 100%;
                        align-items: center;
                        padding-left: 3%;
                    }

                    #AllSaleTitle {
                        font-size: 50px;
                        font-weight: 700;
                    }

                    #AllSaleFiltersContainer {
                        display: flex;
                        position: relative;
                        width: 40%;
                        height: 100%;
                        justify-content: flex-end;
                        align-items: center;
                        padding-right: 3%;
                    }

                    #AllSaleClearFilterButtonContainer {
                        display: flex;
                        position: relative;
                    }

                    #AllSaleCardContainer {
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

                    #AllSaleCardContainer::-webkit-scrollbar {
                        width: 0.5em;
                        background-color: transparent;
                    }
                    
                    #AllSaleCardContainer::-webkit-scrollbar-thumb {
                        background-color: #ccc;
                        border-radius: 25px;
                    }
                    
                    @media (max-width: 900px) {

                        #AllSaleHeaderContainer {
                            height: 15%;
                        }

                        #AllSaleTitleContainer {
                            width: 100%;
                            padding-left: 5%;
                        }
                        
                        #AllSaleCardContainer {
                            width: 100%;
                            padding: 5% 12%;
                        }

                    }

                `}
            </style>
        </div>
    );
};

export default AllSale;