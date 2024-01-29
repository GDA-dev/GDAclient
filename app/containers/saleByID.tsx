import React, { useState, useEffect } from "react";
import IndividualClothing from "../components/individualClothing";
import { IoClose } from "react-icons/io5";
import { Clothing } from "../../utils/types";

interface SaleByIDProps {
    saleClothing: Clothing;
};

const SaleByID: React.FC<SaleByIDProps> = ({ saleClothing }) => {

    const [category, setCategory] = useState(saleClothing.category);
    const [size, setSize] = useState(saleClothing.size);
    const [gender, setGender] = useState(saleClothing.gender);

    const categoryOptions: { [key: string]: string; } = {
        "CT": "Clothing, Top",
        "CB": "Clothing, Bottom", 
        "CO": "Clothing, Other",
        "A": "Accessories",
        "O": "Other"
    };

    const sizeOptions: { [key: string]: string; } = {
        "XXS": "Extra Extra Small",
        "XS": "Extra Small", 
        "S": "Small",
        "M": "Medium",
        "L": "Large",
        "XL": "Extra Large",
        "XXL": "Extra Extra Large",
        "OS": "One Size"
    };

    const genderOptions: { [key: string]: string; } = {
        "M": "Male",
        "F": "Female", 
        "U": "Unisex"
    };
    
    const updateFilterName = (filter: string) => {
        
        if (filter in categoryOptions) {
            setCategory(categoryOptions[filter]);
        };
        
        if (filter in sizeOptions) {
            setSize(sizeOptions[filter]);
        };

        if (filter in genderOptions) {
            setGender(genderOptions[filter]);
        };

    };

    useEffect(() => {
        
        if (category === saleClothing.category) {
            updateFilterName(category);
        };

        if (size === saleClothing.size) {
            updateFilterName(size);
        };

        if (gender === saleClothing.gender) {
            updateFilterName(gender);
        };

    }, [category, size, gender]);
    
    return (
        <div id="SaleByID">
            <div id="SaleByIDContainer">
                <a id="SaleByIDCloseButton" href="/clothes/sale"><IoClose /></a>
                <IndividualClothing clothing={saleClothing} category={category} size={size} gender={gender} />
            </div>
            <style>
                {`
                    
                    #SaleByID {
                        display: flex;
                        position: fixed;
                        top: 10vh;
                        left: 0;
                        width: 100vw;
                        height: 90vh;
                        justify-content: center;
                        align-items: center;
                        backdrop-filter: blur(50px);
                        z-index: 2;
                    }

                    #SaleByIDContainer {
                        display: fixed;
                        position: relative;
                        width: 100%;
                        height: 100%;
                    }

                    #SaleByIDCloseButton {
                        display: flex;
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100px;
                        height: 100px;
                        justify-content: flex-end;
                        align-items: flex-end;
                        font-size: 70px;
                        z-index: 3;
                    }

                    #IndividualClothing {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 100%;
                        justify-content: flex-end;
                        align-items: center;
                    }

                    #IndividualClothingContainer {
                        display: flex;
                        position: relative;
                        width: 95%;
                        height: 100%;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                    }

                    #IndividualClothingLeftContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        padding-left: 5%;
                        justify-content: flex-start;
                        align-items: center;
                    }

                    #IndividualClothingThumbnail {
                        object-fit: contain;
                        height: 90%;
                    }

                    #IndividualClothingRightContainer {
                        display: flex;
                        position: relative;
                        width: 50%;
                        height: 100%;
                        padding-right: 7.5%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #IndividualClothingStack {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 80%;
                        padding-right: 2%; 
                        justify-content: flex-start;
                        align-items: flex-start;
                        color: white;
                        overflow-y: scroll;
                    }
                    
                    #IndividualClothingStack::-webkit-scrollbar {
                        width: 0.5em;
                        background-color: transparent;
                    }
                    
                    #IndividualClothingStack::-webkit-scrollbar-thumb {
                        background-color: #ccc;
                        border-radius: 25px;
                    }

                    #IndividualClothingStackBackground {
                        display: flex;
                        position: absolute;
                        width: 100%;
                        height: 90%;
                        background-color: rgba(0, 0, 0, 0.75);
                        border-radius: 25px;
                        z-index: 0;
                    }

                    @media (max-width: 1250px) {

                        #IndividualClothingThumbnail {
                            height: auto;
                            width: 80%;
                        }

                    }

                    @media (max-width: 900px) {

                        #SaleByIDCloseButton {
                            display: none;
                        }

                        #IndividualClothingContainer {
                            flex-direction: column;
                            overflow-y: scroll;
                        }

                        #IndividualClothingLeftContainer {
                            width: 100%;
                            margin-top: 10%;
                            padding-left: 0;
                            justify-content: center;
                            align-items: center;
                        }

                        #IndividualClothingRightContainer {
                            width: 90%;
                            padding-right: 0;
                        }

                        #IndividualClothingStack {
                            padding: 0 5%;
                        }

                    }
                    
                `}
            </style>
        </div>
    );
};

export default SaleByID;